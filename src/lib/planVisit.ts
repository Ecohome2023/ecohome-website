import { BOOKABLE_PROS, type Slot } from "./booking";
import { hcp } from "./hcp";

// Care Plan tune-up booking (/plan/<visit>). Housecall Pro creates each service plan
// visit as a $0 job named "Visit #N" that needs scheduling; the link carries that
// job's id (without "job_"), and booking schedules that same job on Andrew's calendar,
// so it stays the plan visit. Server only.

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

export type PlanVisit = {
  id: string;
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

// Only service plan visits ("Visit #N", $0) can be booked from a plan link.
export async function getPlanVisit(id: string): Promise<PlanVisit | null> {
  const j = await getJob(id);
  if (!j || !/^Visit #\d+/.test(j.description || "") || j.total_amount !== 0) return null;
  const start = j.schedule?.scheduled_start || null;
  const status = j.work_status === "needs scheduling" ? "open" : j.work_status === "scheduled" && start ? "booked" : "closed";
  return {
    id,
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
