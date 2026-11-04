import { BOOKABLE_PROS, type Slot } from "./booking";
import { hcp } from "./hcp";

// Care Plan tune-up booking (/plan/<visit>). Each service plan visit becomes a $0 job
// that needs scheduling; the link carries that job's id (without "job_"), and booking
// schedules that same job on Andrew's calendar, so it stays the plan visit. Server only.

export const VISIT_ID_RE = /^[0-9a-f]{32}$/;

type HcpJob = {
  id: string;
  description: string | null;
  work_status: string;
  total_amount: number;
  customer: { first_name?: string | null };
  address?: { street?: string | null; city?: string | null } | null;
  schedule?: { scheduled_start?: string | null; scheduled_end?: string | null } | null;
};

type HcpLine = { name: string; kind: string };

export type PlanVisit = {
  id: string;
  plan: string; // plan name from its discount line, or "Care Plan"
  firstName: string;
  address: string;
  status: "open" | "booked" | "closed";
  start: string | null;
  end: string | null;
};

async function getJob(id: string): Promise<HcpJob | null> {
  if (!VISIT_ID_RE.test(id)) return null;
  try {
    return await hcp<HcpJob>(`/jobs/job_${id}`);
  } catch (e) {
    if (String(e).includes(" 404")) return null;
    throw e;
  }
}

// Visit names: Housecall Pro's "Visit #N", or ours like "Fall 2026 Tune-Up".
const VISIT_NAME_RE = /^(Visit #\d+|(Winter|Spring|Summer|Fall) \d{4} Tune-Up)$/;

// Only service plan visits can be booked from a plan link: a $0 job that carries its
// plan's "<plan> discount" line (paid plans) or has a visit name (plans with no discount,
// like the free year).
export async function getPlanVisit(id: string): Promise<PlanVisit | null> {
  const j = await getJob(id);
  if (!j || j.total_amount !== 0) return null;
  const lines = (await hcp<{ line_items?: HcpLine[]; data?: HcpLine[] }>(`/jobs/${j.id}/line_items`));
  const discount = (lines.line_items || lines.data || []).find((l) => l.kind === "percent discount" && / discount$/.test(l.name.trim()));
  if (!discount && !VISIT_NAME_RE.test((j.description || "").trim())) return null;
  const start = j.schedule?.scheduled_start || null;
  const status = j.work_status === "needs scheduling" ? "open" : j.work_status === "scheduled" && start ? "booked" : "closed";
  return {
    id,
    plan: discount ? discount.name.trim().replace(/ discount$/, "") : "Care Plan",
    firstName: (j.customer.first_name || "").trim(),
    address: [j.address?.street, j.address?.city].filter(Boolean).join(", "),
    status,
    start,
    end: j.schedule?.scheduled_end || null,
  };
}

// Put the plan visit on Andrew's calendar at the chosen one-hour window.
export async function schedulePlanVisit(id: string, slot: Slot) {
  await hcp(`/jobs/job_${id}/schedule`, {
    method: "PUT",
    body: JSON.stringify({
      start_time: slot.start,
      end_time: slot.end,
      arrival_window_in_minutes: 0,
      notify: true,
      dispatched_employees: BOOKABLE_PROS.map((employee_id) => ({ employee_id })),
    }),
  });
}
