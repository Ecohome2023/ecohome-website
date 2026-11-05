import { BOOKING_ZIPS, HUBSPOT_BOOKING_FORM, bookingHubSpotFields, serviceByKey } from "@/lib/booking";
import { EMAIL_RE, HUBSPOT, OPTIONS, cleanName, questions, sizeFor, type EstimateType } from "@/lib/estimator";
import { createBooking, openSlots } from "@/lib/hcp";
import { keepExistingValues } from "@/lib/hubspot";

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
  const fromEstimate = body.source === "instant-estimate";
  const customerNotes = s("notes", 500);
  const notes = fromEstimate ? estimateNotes(body.answers) : customerNotes && `Customer notes: ${customerNotes}`;

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
    const booked = await createBooking({ service, slot, fname, lname, phone, email, street, city, zip, notes, source: fromEstimate ? "/instant-pricing" : "/book" });
    await sendToHubSpot(request, body, { fname, lname, phone, email, street, city, zip }, fromEstimate);
    return Response.json({ ok: true, type: booked.type });
  } catch (e) {
    console.error("Booking failed", e);
    return Response.json({ ok: false, error: "hcp" }, { status: 502 });
  }
}

// Creates or updates the HubSpot contact through the "Online Booking (website)" form.
// The booking is already made, so a HubSpot failure is only logged; the nightly
// eco-crm sync picks the customer up from Housecall Pro anyway.
async function sendToHubSpot(
  request: Request,
  body: Record<string, unknown>,
  c: { fname: string; lname: string; phone: string; email: string; street: string; city: string; zip: string },
  fromEstimate: boolean,
) {
  const ft = (typeof body.firstTouch === "object" && body.firstTouch) || {};
  const t = (k: string, n: number) => {
    const v = (ft as Record<string, unknown>)[k];
    return typeof v === "string" ? v.replace(/[\r\n]/g, " ").trim().slice(0, n) : "";
  };
  const fields = await keepExistingValues(c.email, bookingHubSpotFields(c, {
    channel: t("channel", 40), landing: t("landing", 200), referrer: t("referrer", 120), campaign: t("campaign", 250),
  }, fromEstimate));

  const hutk = (request.headers.get("cookie") || "").match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1];
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim();
  const pageUri = typeof body.pageUri === "string" ? body.pageUri.slice(0, 500) : "https://ecohometoday.com/book";

  try {
    const r = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT.portal}/${HUBSPOT_BOOKING_FORM}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: fields.map(([name, value]) => ({ objectTypeId: "0-1", name, value })),
        context: { pageUri, pageName: "Book Online | Eco Home", ...(hutk ? { hutk } : {}), ...(ip ? { ipAddress: ip } : {}) },
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!r.ok) console.error("HubSpot booking form failed", r.status, await r.text());
  } catch (e) {
    console.error("HubSpot booking form error", e);
  }
}

// The instant pricing answers, written into the Housecall Pro note for the comfort advisor.
// Only known questions and choices are used, so nothing a visitor types reaches the note.
function estimateNotes(raw: unknown): string {
  const a = (typeof raw === "object" && raw) ? (raw as Record<string, unknown>) : {};
  const lines = questions.flatMap((q) => {
    const c = q.choices.find((x) => x.value === a[q.key]);
    return c ? [`${q.title} ${c.label}`] : [];
  });
  if (!lines.length) return "From the instant pricing tool.";
  const type = typeof a.replace === "string" && a.replace in OPTIONS ? (a.replace as EstimateType) : null;
  const tons = typeof a.sqft === "string" && typeof a.built === "string" ? sizeFor(a.sqft, a.built) : "custom";
  const rec = type ? `Instant estimate shown: ${OPTIONS[type].name}${tons !== "custom" ? `, ${OPTIONS[type].size(tons)}` : ""}` : "";
  return ["From the instant pricing tool. Their answers:", ...lines, rec].filter(Boolean).join("\n");
}
