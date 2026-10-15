import { BOOKING_ZIPS, serviceByKey } from "@/lib/booking";
import { EMAIL_RE, cleanName } from "@/lib/estimator";
import { createBooking, openSlots } from "@/lib/hcp";

// Books a visit in Housecall Pro: finds or creates the customer, then creates
// the job (tune-ups, repairs) or estimate (free estimates) on Andrew's calendar.

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_json" }, { status: 400 });
  }
  // Hidden field people never see; bots fill it in. Pretend it worked.
  if (body.website) return Response.json({ ok: true, type: "job" });
  const s = (k: string, n: number) => (typeof body[k] === "string" ? (body[k] as string).replace(/[\r\n]+/g, " ").trim().slice(0, n) : "");

  const service = serviceByKey(s("service", 40));
  const start = s("start", 40);
  const fname = cleanName(s("fname", 60));
  const lname = cleanName(s("lname", 60));
  const phone = s("phone", 30).replace(/\D/g, "").slice(-10);
  const email = s("email", 120).toLowerCase();
  const street = s("street", 120);
  const city = s("city", 60);
  const zip = s("zip", 5);
  const notes = s("notes", 500);

  if (!service || !start) return Response.json({ ok: false, error: "Please pick a service and a time." }, { status: 422 });
  if (!fname || !lname) return Response.json({ ok: false, error: "Please add your first and last name." }, { status: 422 });
  if (phone.length !== 10) return Response.json({ ok: false, error: "Please enter a 10-digit mobile number." }, { status: 422 });
  if (!EMAIL_RE.test(email)) return Response.json({ ok: false, error: "Please enter a valid email." }, { status: 422 });
  if (!street || !city) return Response.json({ ok: false, error: "Please add your street address and city." }, { status: 422 });
  if (!BOOKING_ZIPS.has(zip)) return Response.json({ ok: false, error: "outside_area" }, { status: 422 });
  if (body.consent !== true) return Response.json({ ok: false, error: "Please check the box so we can text you about your visit." }, { status: 422 });

  try {
    // Check the time is still open right before booking, so two people can't take the same slot.
    const slot = (await openSlots(service)).find((x) => x.start === start);
    if (!slot) return Response.json({ ok: false, error: "taken" }, { status: 409 });
    // Vercel preview links are for clicking through: show the confirmation, book nothing.
    if (process.env.VERCEL_ENV === "preview") return Response.json({ ok: true, type: service.group === "estimate" ? "estimate" : "job", preview: true });
    const booked = await createBooking({ service, slot, fname, lname, phone, email, street, city, zip, notes });
    return Response.json({ ok: true, type: booked.type });
  } catch (e) {
    console.error("Booking failed", e);
    return Response.json({ ok: false, error: "hcp" }, { status: 502 });
  }
}
