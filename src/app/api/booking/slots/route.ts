import { serviceByKey } from "@/lib/booking";
import { openSlots } from "@/lib/hcp";

// Open booking times for one service, read live from Housecall Pro.
export async function GET(request: Request) {
  const service = serviceByKey(new URL(request.url).searchParams.get("service") || "");
  if (!service) return Response.json({ ok: false, error: "unknown_service" }, { status: 400 });
  try {
    return Response.json({ ok: true, slots: await openSlots(service) });
  } catch (e) {
    console.error("Booking slots failed", e);
    return Response.json({ ok: false, error: "hcp" }, { status: 502 });
  }
}
