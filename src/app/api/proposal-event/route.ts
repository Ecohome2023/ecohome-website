import { getEstimate } from "@/lib/proposal";
import { findContact, updateContact } from "@/lib/hubspot";

// The customer opened their proposal page, or picked an option to approve.
// Updates the HubSpot contact so a workflow can tell Andrew:
//   view   → Last proposal view, Proposal views
//   choose → Proposal option chosen, Proposal chosen at
// Contact details come from Housecall Pro, never from the browser.

export async function POST(request: Request) {
  let b: Record<string, unknown> = {};
  try {
    b = JSON.parse(await request.text());
  } catch {}
  const id = String(b.id ?? "");
  const type = b.type === "choose" ? "choose" : b.type === "view" ? "view" : "";
  if (!type || !process.env.HUBSPOT_TOKEN || process.env.VERCEL_ENV === "preview") return new Response(null, { status: 204 });

  try {
    const e = await getEstimate(id);
    if (!e) return new Response(null, { status: 204 });
    const c = await findContact(e.customer.email || "", e.customer.mobile_number || "", ["proposal_views"]);
    if (!c) return new Response(null, { status: 204 });
    const now = String(Date.now());
    if (type === "view") {
      await updateContact(c.id, { last_proposal_view: now, proposal_views: String((Number(c.properties.proposal_views) || 0) + 1) });
    } else {
      const option = e.options.find((o) => o.id === b.option);
      if (!option) return new Response(null, { status: 204 });
      await updateContact(c.id, { proposal_option_chosen: `#${e.estimate_number}: ${option.name.trim()}`, proposal_chosen_at: now });
    }
  } catch (err) {
    console.error("Proposal event not recorded", err);
  }
  return new Response(null, { status: 204 });
}
