import { PLAN_WINDOW_STARTS, serviceByKey } from "@/lib/booking";
import { openSlots } from "@/lib/hcp";
import { getPlanVisit, schedulePlanVisit } from "@/lib/planVisit";

// Books a Care Plan tune-up: schedules the customer's existing service plan visit
// on Andrew's calendar at the time they picked.

export async function POST(request: Request) {
  let b: Record<string, unknown> = {};
  try {
    b = await request.json();
  } catch {}
  const id = String(b.id ?? "");
  const start = String(b.start ?? "");

  try {
    const visit = await getPlanVisit(id);
    if (!visit) return Response.json({ ok: false, error: "not_found" }, { status: 404 });
    if (visit.status !== "open") return Response.json({ ok: false, error: "already_booked" }, { status: 409 });
    // Check the time is still open right before booking.
    const slot = (await openSlots(serviceByKey("furnace-tune-up")!, PLAN_WINDOW_STARTS)).find((s) => s.start === start);
    if (!slot) return Response.json({ ok: false, error: "taken" }, { status: 409 });
    // Vercel preview links are for clicking through: show the confirmation, book nothing.
    if (process.env.VERCEL_ENV === "preview") return Response.json({ ok: true, preview: true });
    await schedulePlanVisit(id, slot);
    return Response.json({ ok: true });
  } catch (e) {
    console.error("Plan visit booking failed", e);
    return Response.json({ ok: false, error: "hcp" }, { status: 502 });
  }
}
