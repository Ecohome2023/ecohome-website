import { BOOKABLE_PROS, DAYS_AHEAD, type BookingService, type Slot } from "./booking";

// Housecall Pro public API (https://docs.housecallpro.com). Server only: the key
// lives in Vercel as HCP_API_KEY and never reaches the browser.

const BASE = "https://api.housecallpro.com";

async function hcp<T>(path: string, init: RequestInit = {}): Promise<T> {
  const key = process.env.HCP_API_KEY;
  const r = await fetch(BASE + path, {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init.body ? { "Content-Type": "application/json" } : {}),
      ...(key ? { Authorization: `Bearer ${key}` } : {}),
    },
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  });
  if (!r.ok) throw new Error(`HCP ${init.method || "GET"} ${path.split("?")[0]} ${r.status}: ${(await r.text()).slice(0, 300)}`);
  return r.json() as Promise<T>;
}

// Open times for one service, on the calendars of the pros who take online bookings.
// Without employee_ids Housecall Pro counts anyone free, so Andrew's booked times would show as open.
export async function openSlots(service: BookingService): Promise<Slot[]> {
  const q = new URLSearchParams({ show_for_days: String(DAYS_AHEAD), service_id: service.serviceId });
  for (const id of BOOKABLE_PROS) q.append("employee_ids[]", id);
  const d = await hcp<{ booking_windows: { start_time: string; end_time: string; available: boolean }[] }>(
    `/company/schedule_availability/booking_windows?${q}`,
  );
  const soon = Date.now() + 60 * 60 * 1000; // nothing starting within the hour
  return d.booking_windows
    .filter((w) => w.available && Date.parse(w.start_time) > soon)
    .map((w) => ({ start: w.start_time, end: w.end_time }));
}

type Address = { id: string; street?: string; zip?: string };
type Customer = { id: string; email?: string | null; mobile_number?: string | null; addresses?: Address[] };

const digits = (s?: string | null) => (s || "").replace(/\D/g, "").slice(-10);
const sameStreet = (a?: string, b?: string) =>
  (a || "").toLowerCase().replace(/[^a-z0-9]/g, "") === (b || "").toLowerCase().replace(/[^a-z0-9]/g, "");

// An existing customer with this mobile number or email, so repeat customers don't get duplicates.
async function findCustomer(phone: string, email: string): Promise<Customer | null> {
  for (const q of [phone, email]) {
    const d = await hcp<{ customers: Customer[] }>(`/customers?${new URLSearchParams({ q, page_size: "10" })}`);
    const hit = d.customers.find((c) => digits(c.mobile_number) === phone || (c.email || "").toLowerCase() === email);
    if (hit) return hit;
  }
  return null;
}

export type BookingRequest = {
  service: BookingService;
  slot: Slot;
  fname: string;
  lname: string;
  phone: string; // 10 digits
  email: string; // lowercase
  street: string;
  city: string;
  zip: string;
  notes: string;
};

export async function createBooking(b: BookingRequest): Promise<{ type: "job" | "estimate"; id: string }> {
  const address = { street: b.street, city: b.city, state: "UT", zip: b.zip, country: "US" };

  let customer = await findCustomer(b.phone, b.email);
  let addressId: string | undefined;
  if (customer) {
    addressId = customer.addresses?.find((a) => a.zip === b.zip && sameStreet(a.street, b.street))?.id;
    if (!addressId) addressId = (await hcp<Address>(`/customers/${customer.id}/addresses`, { method: "POST", body: JSON.stringify(address) })).id;
  } else {
    customer = await hcp<Customer>("/customers", {
      method: "POST",
      body: JSON.stringify({
        first_name: b.fname, last_name: b.lname, email: b.email, mobile_number: b.phone,
        notifications_enabled: true, lead_source: "Online Booking", addresses: [address],
      }),
    });
    addressId = customer.addresses?.[0]?.id;
  }
  if (!addressId) throw new Error("HCP customer has no address id");

  const notes = ["Booked on ecohometoday.com/book", b.notes && `Customer notes: ${b.notes}`].filter(Boolean).join("\n");
  const line = { name: b.service.hcpName, unit_price: b.service.price, quantity: 1 };

  if (b.service.group === "estimate") {
    const e = await hcp<{ id: string }>("/estimates", {
      method: "POST",
      body: JSON.stringify({
        customer_id: customer.id, address_id: addressId, assigned_employee_ids: BOOKABLE_PROS, lead_source: "Online Booking",
        note: notes, options: [{ name: b.service.hcpName, line_items: [line] }],
        schedule: { start_time: b.slot.start, end_time: b.slot.end, arrival_window_in_minutes: 0, notify_customer: true },
      }),
    });
    return { type: "estimate", id: e.id };
  }

  const j = await hcp<{ id: string }>("/jobs", {
    method: "POST",
    body: JSON.stringify({
      customer_id: customer.id, address_id: addressId, assigned_employee_ids: BOOKABLE_PROS, lead_source: "Online Booking",
      notes, line_items: [line],
      schedule: { scheduled_start: b.slot.start, scheduled_end: b.slot.end, arrival_window: 0 },
      ...(b.service.jobTypeId ? { job_fields: { job_type_id: b.service.jobTypeId } } : {}),
    }),
  });
  return { type: "job", id: j.id };
}
