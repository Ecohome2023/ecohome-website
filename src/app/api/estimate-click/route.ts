import { LINK_CODE_RE } from "@/lib/estimator";

// Someone opened their texted estimate link: find the HubSpot contact with that
// link code and update "Last estimate link click" and "Estimate link clicks".
// Needs HUBSPOT_TOKEN (a HubSpot private app token with contacts read/write) in Vercel.

const API = "https://api.hubapi.com/crm/v3/objects/contacts";

export async function POST(request: Request) {
  let k = "";
  try {
    k = String(JSON.parse(await request.text()).k ?? "");
  } catch {}
  const token = process.env.HUBSPOT_TOKEN;
  if (!LINK_CODE_RE.test(k) || !token || process.env.VERCEL_ENV === "preview") return new Response(null, { status: 204 });

  const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
  try {
    const r = await fetch(`${API}/search`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        filterGroups: [{ filters: [{ propertyName: "estimate_link_code", operator: "EQ", value: k }] }],
        properties: ["estimate_link_clicks"],
        limit: 1,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!r.ok) throw new Error(`search ${r.status}: ${(await r.text()).slice(0, 200)}`);
    const c = (await r.json()).results?.[0] as { id: string; properties: { estimate_link_clicks?: string | null } } | undefined;
    if (!c) return new Response(null, { status: 204 });

    const u = await fetch(`${API}/${c.id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({
        properties: {
          last_estimate_link_click: String(Date.now()),
          estimate_link_clicks: String((Number(c.properties.estimate_link_clicks) || 0) + 1),
        },
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!u.ok) throw new Error(`update ${u.status}: ${(await u.text()).slice(0, 200)}`);
  } catch (e) {
    console.error("Estimate link click not recorded", e);
  }
  return new Response(null, { status: 204 });
}
