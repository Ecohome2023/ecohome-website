import { HUBSPOT, hubspotFields, validate, cleanName, type Answers } from "@/lib/estimator";

// Receives the instant estimate form and forwards it to the HubSpot form
// "Instant Estimate (custom page)". Sending from our server instead of the
// browser means ad blockers can't stop the lead from reaching HubSpot.
// The Forms API submit endpoint is public, so no key is needed.

const KEYS = ["zip", "replace", "hometype", "setup", "age", "condition", "sqft", "built", "timeline", "fname", "lname", "phone", "email", "consent"];

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const a: Answers = {};
  for (const k of KEYS) a[k] = String(body[k] ?? "").trim().slice(0, 120);
  a.fname = cleanName(a.fname);
  a.lname = cleanName(a.lname);
  a.phone = a.phone.replace(/\D/g, "").slice(-10);

  const bad = validate(a);
  if (bad) return Response.json({ ok: false, error: bad }, { status: 422 });

  const cookies = request.headers.get("cookie") || "";
  const hutk = cookies.match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1];
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim();
  const pageUri = typeof body.pageUri === "string" ? body.pageUri.slice(0, 500) : "https://ecohometoday.com/instant-pricing";

  const payload = {
    fields: hubspotFields(a).map(([name, value]) => ({ objectTypeId: "0-1", name, value })),
    context: { pageUri, pageName: "Instant Pricing | Eco Home", ...(hutk ? { hutk } : {}), ...(ip ? { ipAddress: ip } : {}) },
  };

  try {
    const r = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT.portal}/${HUBSPOT.form}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
    });
    if (!r.ok) {
      console.error("HubSpot submission failed", r.status, await r.text());
      return Response.json({ ok: false, error: "hubspot" }, { status: 502 });
    }
  } catch (e) {
    console.error("HubSpot submission error", e);
    return Response.json({ ok: false, error: "hubspot" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
