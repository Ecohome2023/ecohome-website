import { bookingServices } from "./booking";
import { hcp } from "./hcp";

// Customer proposal pages (/p/<id>), mirrored from Housecall Pro estimates.
// Housecall Pro stays the system of record; this only reads. Server only.

// The link id is the Housecall Pro estimate id without its "csr_" prefix (32 hex characters).
export const PROPOSAL_ID_RE = /^[0-9a-f]{32}$/;

export type Line = { name: string; amount: number; qty: number; desc: string; warranty: string; specs: string[] };
export type Option = {
  id: string;
  name: string;
  number: string;
  status: string | null; // Housecall Pro approval status: null, "approved", "declined", "expired"
  total: number; // cents, Housecall Pro's own total
  equipment: Line[];
  extras: Line[];
  included: { name: string; desc: string; count: number }[];
  rebates: { name: string; amount: number }[];
  tax: number;
  ahri: string[];
  manualJ: boolean;
};
export type Proposal = { id: string; number: string; firstName: string; city: string; visit: string | null; advisor: string; options: Option[] };

type HcpLine = { name: string; description: string | null; unit_price: number; quantity: number; kind: string };
type HcpOption = { id: string; name: string; option_number: string; total_amount: number; approval_status: string | null };
type HcpEstimate = {
  id: string;
  estimate_number: string;
  customer: { first_name?: string | null; email?: string | null; mobile_number?: string | null };
  address?: { city?: string | null } | null;
  schedule?: { scheduled_start?: string | null } | null;
  assigned_employees?: { first_name?: string; last_name?: string }[];
  options: HcpOption[];
};

// The $0 line online booking puts on an estimate ("Full System (Furnace + AC)" and so on).
const BOOKING_LINES = new Set(bookingServices.filter((s) => s.group === "estimate").map((s) => s.hcpName));

export async function getEstimate(id: string): Promise<HcpEstimate | null> {
  if (!PROPOSAL_ID_RE.test(id)) return null;
  try {
    return await hcp<HcpEstimate>(`/estimates/csr_${id}`);
  } catch (e) {
    if (String(e).includes(" 404")) return null;
    throw e;
  }
}

function shapeOption(o: HcpOption, items: HcpLine[]): Option {
  const opt: Option = {
    id: o.id, name: o.name.trim(), number: o.option_number, status: o.approval_status, total: o.total_amount,
    equipment: [], extras: [], included: [], rebates: [], tax: 0, ahri: [], manualJ: false,
  };
  for (const li of items) {
    const name = li.name.trim();
    const desc = (li.description || "").trim();
    const amount = Math.round(li.unit_price * li.quantity);
    if (li.kind === "tax") { opt.tax += amount; continue; }
    if (li.kind === "fixed discount") { opt.rebates.push({ name, amount }); continue; }
    if (amount === 0 && BOOKING_LINES.has(name)) continue;
    if (/^AHRI Matched System/i.test(name)) { const n = desc.match(/\d{6,}/)?.[0]; if (n) opt.ahri.push(n); continue; }
    if (/^Load Calculation/i.test(name)) { opt.manualJ = true; continue; }
    if (amount === 0) {
      const had = opt.included.find((x) => x.name === name);
      if (had) had.count++;
      else opt.included.push({ name, desc, count: 1 });
      continue;
    }
    // Equipment descriptions carry "Warranty - …" and "SEER2: … · HSPF2: … · Heat at 5°F: …" lines.
    const warranty = desc.match(/Warranty\s*-\s*([^/\n]+)/)?.[1].trim() || "";
    const specs = (desc.match(/SEER2:[^\n/]*/)?.[0] || "").split("·").map((s) => s.trim()).filter(Boolean);
    const line: Line = { name: name.replace(/^(Misc|Amana) - (?=Amana )/, ""), amount, qty: 1, desc: warranty || specs.length ? "" : desc, warranty, specs };
    if (li.kind === "materials" && amount >= 100000) opt.equipment.push(line);
    else {
      const had = opt.extras.find((x) => x.name === line.name && x.amount === amount);
      if (had) had.qty++;
      else opt.extras.push(line);
    }
  }
  opt.equipment.sort((a, b) => b.amount - a.amount);
  return opt;
}

export async function getProposal(id: string): Promise<Proposal | null> {
  const e = await getEstimate(id);
  if (!e) return null;
  const options = await Promise.all(
    [...e.options]
      .sort((a, b) => a.option_number.localeCompare(b.option_number, undefined, { numeric: true }))
      .map(async (o) => {
        const d = await hcp<{ line_items: HcpLine[] }>(`/estimates/${e.id}/options/${o.id}/line_items?page_size=200`);
        return shapeOption(o, d.line_items);
      }),
  );
  const pro = e.assigned_employees?.[0];
  return {
    id,
    number: e.estimate_number,
    firstName: (e.customer.first_name || "").trim(),
    city: (e.address?.city || "").trim(),
    visit: e.schedule?.scheduled_start || null,
    advisor: pro ? `${pro.first_name || ""} ${pro.last_name || ""}`.trim() : "",
    options: options.filter((o) => o.status !== "declined"),
  };
}
