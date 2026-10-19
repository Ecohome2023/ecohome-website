import { BOOKABLE_PROS, DAYS_AHEAD, TZ, WINDOW_STARTS, dayKey, type BookingService, type Slot } from "./booking";

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
  // Ask in half-hour pieces, then keep each of our one-hour windows whose two halves are both free.
  const q = new URLSearchParams({ show_for_days: String(DAYS_AHEAD), service_id: service.serviceId, service_duration: "30" });
  for (const id of BOOKABLE_PROS) q.append("employee_ids[]", id);
  const d = await hcp<{ booking_windows: { start_time: string; end_time: string; available: boolean }[] }>(
    `/company/schedule_availability/booking_windows?${q}`,
  );
  const local = (iso: string) => `${dayKey(iso)} ${new Date(iso).toLocaleTimeString("en-GB", { timeZone: TZ, hour: "2-digit", minute: "2-digit" })}`;
  const covered = new Set(d.booking_windows.map((w) => local(w.start_time)));
  const halves = new Map(d.booking_windows.filter((w) => w.available).map((w) => [local(w.start_time), w]));
  const days = [...new Set(d.booking_windows.map((w) => dayKey(w.start_time)))];
  const soon = Date.now() + 60 * 60 * 1000; // nothing starting within the hour
  let busy: [number, number][] | null = null;
  const slots: Slot[] = [];
  for (const day of days) {
    for (const t of WINDOW_STARTS) {
      const [h, m] = t.split(":").map(Number);
      const next = `${String(h + Math.floor((m + 30) / 60)).padStart(2, "0")}:${String((m + 30) % 60).padStart(2, "0")}`;
      if (covered.has(`${day} ${t}`)) {
        const first = halves.get(`${day} ${t}`);
        const second = halves.get(`${day} ${next}`);
        if (first && second && Date.parse(first.start_time) > soon) slots.push({ start: first.start_time, end: second.end_time });
        continue;
      }
      // Outside the hours Housecall Pro reports (the 5:30 window): check Andrew's own calendar.
      const start = utahToUtc(day, t);
      const end = start + 60 * 60 * 1000;
      if (start <= soon) continue;
      busy ??= await busyTimes(Date.now(), Date.now() + (DAYS_AHEAD + 1) * 86400000);
      if (!busy.some(([a, b]) => a < end && b > start)) slots.push({ start: new Date(start).toISOString(), end: new Date(end).toISOString() });
    }
  }
  return slots;
}

// A Utah wall-clock time on a date, as UTC milliseconds (handles daylight saving).
function utahToUtc(day: string, hhmm: string): number {
  const [y, mo, dd] = day.split("-").map(Number);
  const [h, mi] = hhmm.split(":").map(Number);
  const guess = Date.UTC(y, mo - 1, dd, h, mi);
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-US", { timeZone: TZ, hourCycle: "h23", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric" })
    .formatToParts(new Date(guess)).map((x) => [x.type, Number(x.value)]));
  const wall = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute);
  return guess - (wall - guess);
}

type Scheduled = { schedule?: { scheduled_start?: string; scheduled_end?: string; start_time?: string; end_time?: string } | null; work_status?: string; assigned_employees?: { id: string }[] };

// Times the online-bookable pros are busy: their jobs, estimates and calendar blocks (events).
async function busyTimes(from: number, to: number): Promise<[number, number][]> {
  const range = new URLSearchParams({ scheduled_start_min: new Date(from - 86400000).toISOString(), scheduled_start_max: new Date(to).toISOString(), page_size: "100" });
  for (const id of BOOKABLE_PROS) range.append("employee_ids[]", id);
  const [jobs, estimates] = await Promise.all([
    hcp<{ jobs: Scheduled[] }>(`/jobs?${range}`),
    hcp<{ estimates: Scheduled[] }>(`/estimates?${range}`),
  ]);
  // Events have no date filter: newest start first, stop once they are in the past.
  const events: Scheduled[] = [];
  for (let page = 1; page <= 5; page++) {
    const e = await hcp<{ events: Scheduled[]; total_pages: number }>(`/events?page=${page}&page_size=100&sort_by=start_time&sort_direction=desc`);
    events.push(...e.events);
    const last = e.events.at(-1)?.schedule?.start_time;
    if (page >= e.total_pages || !last || Date.parse(last) < from - 86400000) break;
  }
  const mine = (x: Scheduled) => !x.assigned_employees?.length || x.assigned_employees.some((p) => BOOKABLE_PROS.includes(p.id));
  const span = (x: Scheduled): [number, number] | null => {
    const a = Date.parse(x.schedule?.scheduled_start || x.schedule?.start_time || "");
    const b = Date.parse(x.schedule?.scheduled_end || x.schedule?.end_time || "");
    return a && b ? [a, b] : null;
  };
  return [...jobs.jobs, ...estimates.estimates, ...events]
    .filter((x) => !/cancel/i.test(x.work_status || "") && mine(x))
    .map(span)
    .filter((x): x is [number, number] => !!x);
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
  notes: string; // extra lines for the Housecall Pro note
  source: string; // where on the site it was booked
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

  const notes = [`Booked on ecohometoday.com${b.source}`, b.notes].filter(Boolean).join("\n");
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
