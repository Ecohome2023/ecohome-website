// Instant estimate tool: the questions, sizing, prices and HubSpot field mapping.
// Ported from the eco-estimate project (github.com/djritchie7-afk/eco-estimate).
// The decision numbers in comments refer to that repo's docs/decisions/.
// Pure TypeScript so the form, the estimate page and the API route share it.

import serviceArea from "./service-area.json";

export const SERVICE_AREA = serviceArea as Record<string, "core" | "extended">;

// HubSpot form "Instant Estimate (custom page)". Public IDs, not secrets.
export const HUBSPOT = { portal: "45369792", form: "84bafeb2-e55b-406e-9dd3-589352135312" };

export type Choice = { value: string; label: string; sqft?: number };
export type Question = { key: string; title: string; help: string; choices: Choice[] };

export const questions: Question[] = [
  {
    key: "replace",
    title: "What are you looking to replace?",
    help: "So we can show you the right equipment.",
    choices: [
      { value: "system", label: "Heating + Cooling" },
      { value: "ac", label: "Cooling only" },
      { value: "furnace", label: "Heating only" },
    ],
  },
  {
    key: "hometype",
    title: "What type of home is it?",
    help: "So we know where the equipment can go.",
    choices: [
      { value: "Single Family", label: "Single-family house" },
      { value: "Townhome", label: "Townhome" },
      { value: "Condo/apartment", label: "Condo" },
      { value: "Mobile/Manufactured", label: "Manufactured home" },
    ],
  },
  {
    key: "setup",
    title: "What do you have now?",
    help: "Pick the closest match. Not sure is fine.",
    choices: [
      { value: "furnace_central_ac", label: "Gas furnace + central AC" },
      { value: "furnace_no_ac", label: "Gas furnace, no AC" },
      { value: "furnace_swamp_cooler", label: "Furnace + swamp cooler" },
      { value: "heat_pump", label: "Heat pump" },
      { value: "boiler_radiant", label: "Boiler or radiant heat" },
      { value: "not_sure", label: "Not sure" },
    ],
  },
  {
    key: "age",
    title: "How old is your current system?",
    help: "A best guess is fine. Most systems last 15 to 20 years.",
    choices: [
      { value: "under_10", label: "Under 10 years" },
      { value: "10_15", label: "10 to 15 years" },
      { value: "15_20", label: "15 to 20 years" },
      { value: "20_plus", label: "20+ years" },
      { value: "not_sure", label: "Not sure" },
    ],
  },
  {
    key: "condition",
    title: "How is it running?",
    help: "This helps us know how quickly to reach out.",
    // Values are the existing HubSpot property options; keep them as is.
    choices: [
      { value: "Yes", label: "Not working" },
      { value: "No", label: "On its last leg" },
      { value: "Getting Older", label: "Getting older" },
      { value: "Works Fine", label: "Works fine, just planning ahead" },
    ],
  },
  {
    key: "sqft",
    title: "About how big is your home?",
    help: "Total finished square feet, including a finished basement.",
    choices: [
      { value: "Less than 1,000 sqft", label: "Under 1,000 sq ft", sqft: 900 },
      { value: "1,001-1,600 sqft", label: "1,000 to 1,600 sq ft", sqft: 1300 },
      { value: "1,601-2,000 sqft", label: "1,600 to 2,000 sq ft", sqft: 1800 },
      { value: "2,001-3,000 sqft", label: "2,000 to 3,000 sq ft", sqft: 2500 },
      { value: "3,001-4,000 sqft", label: "3,000 to 4,000 sq ft", sqft: 3500 },
      { value: "4,000-5,000 sqft", label: "4,000 to 5,000 sq ft", sqft: 4500 },
      { value: "5000+ sqft", label: "5,000+ sq ft", sqft: 5500 },
    ],
  },
  {
    key: "built",
    title: "When was your home built?",
    help: "Older homes usually have less insulation, so they need a little more system.",
    choices: [
      { value: "before_1980", label: "Before 1980" },
      { value: "1980_1999", label: "1980 to 1999" },
      { value: "2000_2014", label: "2000 to 2014" },
      { value: "2015_plus", label: "2015 or newer" },
      { value: "not_sure", label: "Not sure" },
    ],
  },
  {
    key: "timeline",
    title: "How soon are you looking to get this done?",
    help: "So we can match you with the right availability.",
    choices: [
      { value: "ASAP", label: "As soon as possible" },
      { value: "Within 2 weeks", label: "Within two weeks" },
      { value: "Within a Month", label: "Within a month" },
      { value: "Not Sure", label: "Not sure, still planning" },
    ],
  },
];

// ---------- Sizing (decision 0004) ----------
// Square feet one ton covers, by build era. Square footage includes a finished
// basement, which needs little cooling, so these run higher than textbook figures.
const SQFT_PER_TON: Record<string, number> = { before_1980: 550, "1980_1999": 650, "2000_2014": 750, "2015_plus": 900, not_sure: 650 };
export const TON_SIZES = ["2", "2.5", "3", "4", "5"] as const;
export type Tons = (typeof TON_SIZES)[number];

export function sizeFor(sqftValue: string, built: string): Tons | "custom" {
  const sqft = questions.find((q) => q.key === "sqft")!.choices.find((c) => c.value === sqftValue)?.sqft ?? 1800;
  const need = sqft / (SQFT_PER_TON[built] ?? SQFT_PER_TON.not_sure);
  return TON_SIZES.find((t) => Number(t) >= need) ?? "custom"; // over 5 tons: usually two systems, priced in person
}

// Instant estimates are for homes with a gas furnace. "Not sure" still gets one.
export const HAS_GAS = new Set(["furnace_central_ac", "furnace_no_ac", "furnace_swamp_cooler", "not_sure"]);

// ---------- Prices after incentives ----------
type Range = { low: number; high: number };
const between = (a: Range, k: number, n: number) => Math.round((a.low + ((a.high - a.low) * k) / (n - 1)) / 100) * 100;

// Heat pump + gas furnace, 15 to 20 SEER2 (decisions 0006 to 0008, owner's numbers).
const SYSTEM_PRICES: Record<Tons, Range> = {
  "2": { low: 10000, high: 16000 },
  "2.5": { low: 10800, high: 17000 },
  "3": { low: 11600, high: 17500 },
  "4": { low: 12500, high: 18500 },
  "5": { low: 14000, high: 20000 },
};
// "Cooling only" is a heat pump that works with the existing furnace (decision 0015).
// Still priced from the traditional AC numbers until heat pump-only prices are set (0013).
const HEAT_PUMP_PRICES: Record<Tons, Range> = {
  "2": { low: 7200, high: 11200 },
  "2.5": { low: 7500, high: 11500 },
  "3": { low: 7600, high: 11600 },
  "4": { low: 9000, high: 13000 },
  "5": { low: 9300, high: 13300 },
};
// Furnace only, sized in BTU to match the home (decision 0014).
const FURNACE_SIZES: Record<Tons, Range & { btu: number }> = {
  "2": { btu: 40000, low: 5000, high: 7300 },
  "2.5": { btu: 60000, low: 5100, high: 7500 },
  "3": { btu: 80000, low: 5300, high: 8000 },
  "4": { btu: 100000, low: 5400, high: 8300 },
  "5": { btu: 120000, low: 5500, high: 8500 },
};

const OLD_SEER2 = 9.5; // a 10 SEER unit, the federal minimum until 2006
const seer2Levels = [15, 16, 17, 18, 19, 20].map((s) => ({ label: `${s} SEER2`, big: `${Math.round((1 - OLD_SEER2 / s) * 100)}%` }));
const furnaceLevels = [
  { afue: "80%", stage: "Single-Stage" },
  { afue: "80%", stage: "Two-Stage" },
  { afue: "96%", stage: "Single-Stage" },
  { afue: "96%", stage: "Two-Stage" },
  { afue: "97%+", stage: "Modulating" },
].map((f) => ({ label: `${f.afue} AFUE · ${f.stage}`, big: f.afue }));

const seer2Tips = {
  eff: { title: "What is SEER2?", body: "SEER2 is an efficiency rating, like miles per gallon for your cooling. Higher number, lower energy bills." },
  save: {
    title: "Energy savings",
    body: "The percentage shows potential cooling savings compared to a 10 SEER unit, the federal minimum until 2006. Many systems being replaced today are 10 SEER or lower. Heating savings depend on your gas and electric rates, so we confirm them at your visit.",
  },
};

export type EstimateType = "system" | "ac" | "furnace";

export const OPTIONS: Record<EstimateType, {
  name: string;
  noun: string;
  specs: string[];
  img: { src: string; alt: string; contain?: boolean };
  size: (t: Tons) => string;
  levels: { label: string; big: string }[];
  price: (t: Tons, k: number) => number;
  fit: Record<string, string>;
  effP: string;
  bigLabel: string;
  tips: typeof seer2Tips;
}> = {
  system: {
    name: "Heat Pump + Gas Furnace",
    noun: "system",
    specs: ["15 to 20 SEER2 inverter heat pump", "ACiQ or Amana", "New gas furnace backup", "Smart thermostat"],
    img: { src: "/images/amana-dual-fuel-system.png", alt: "Amana heat pump, gas furnace, evaporator coil and smart thermostat", contain: true },
    size: (t) => `${t} Ton`,
    levels: seer2Levels,
    price: (t, k) => between(SYSTEM_PRICES[t], k, seer2Levels.length),
    fit: {
      furnace_central_ac: "Replaces your furnace and AC with a heat pump and a new gas furnace backup.",
      furnace_no_ac: "Adds whole-home cooling, and the heat pump handles most of your heating too.",
      furnace_swamp_cooler: "Replaces your swamp cooler with quiet central cooling that works on humid days.",
      not_sure: "We’ll confirm what you have now and the right setup at your visit.",
    },
    effP: "The more efficient, the more you save on energy.",
    bigLabel: "Energy savings",
    tips: seer2Tips,
  },
  ac: {
    name: "Heat Pump",
    noun: "heat pump",
    specs: ["15 to 20 SEER2 inverter heat pump", "ACiQ or Amana", "New evaporator coil", "Works with your gas furnace"],
    img: { src: "/images/heat-pump-brick-home.jpg", alt: "Heat pump installed beside a brick home" },
    size: (t) => `${t} Ton`,
    levels: seer2Levels,
    price: (t, k) => between(HEAT_PUMP_PRICES[t], k, seer2Levels.length),
    fit: {
      furnace_central_ac: "Replaces your AC with a heat pump that cools in summer and handles most of your heating. Your furnace stays as backup.",
      furnace_no_ac: "Adds a heat pump that cools your home and handles most of your heating through your furnace’s ductwork. Your furnace stays as backup.",
      furnace_swamp_cooler: "Replaces your swamp cooler with a quiet heat pump that cools on humid days and handles most of your heating. Your furnace stays as backup.",
      not_sure: "We’ll confirm what you have now and the right setup at your visit.",
    },
    effP: "The more efficient, the more you save on energy.",
    bigLabel: "Energy savings",
    tips: seer2Tips,
  },
  furnace: {
    name: "Gas Furnace",
    noun: "furnace",
    specs: ["80%, 96% or 97%+ AFUE", "Single-stage, two-stage or modulating", "ACiQ or Amana"],
    img: { src: "/images/aciq-furnace-basement-install.jpg", alt: "New ACiQ gas furnace installed in a basement" },
    size: (t) => `${FURNACE_SIZES[t].btu.toLocaleString("en-US")} BTU`,
    levels: furnaceLevels,
    price: (t, k) => between(FURNACE_SIZES[t], k, furnaceLevels.length),
    fit: {
      furnace_central_ac: "Replaces your furnace. Your AC stays.",
      furnace_no_ac: "Replaces your furnace with a new, more efficient one.",
      furnace_swamp_cooler: "Replaces your furnace. Your swamp cooler stays.",
      not_sure: "Replaces your furnace. We’ll confirm what you have now at your visit.",
    },
    effP: "Higher efficiency means lower gas bills. More stages mean steadier, quieter heat.",
    bigLabel: "AFUE",
    tips: {
      eff: { title: "What is AFUE?", body: "AFUE is how much of your gas becomes heat in your home. A 96% furnace turns 96 cents of every gas dollar into heat; an 80% furnace turns 80." },
      save: {
        title: "Single-stage, two-stage, modulating",
        body: "Single-stage runs full blast or off. Two-stage runs on low most of the time, so it’s quieter and keeps rooms more even. Modulating adjusts in small steps for the steadiest, quietest heat.",
      },
    },
  },
};

// ---------- Financing (decision 0010) ----------
export const FIN = { years: 20, apr: 11.99 };
export function monthly(price: number) {
  const r = FIN.apr / 100 / 12, n = FIN.years * 12;
  return (price * r) / (1 - Math.pow(1 + r, -n));
}

export const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
export const cleanName = (s: string | undefined | null) => (s || "").replace(/[^\p{L}\p{M}' .-]/gu, "").trim().slice(0, 30);

// ---------- Email typo check ----------
// HubSpot accepts a typo'd address but never creates a contact from it, so the
// lead would be lost behind a success screen.
const TLD_FIX: Record<string, string> = { con: "com", cmo: "com", ocm: "com", vom: "com", xom: "com", comm: "com", coom: "com", cpm: "com", nett: "net", ner: "net", ogr: "org", orgg: "org" };
const DOMAIN_FIX: Record<string, string> = {
  "gmial.com": "gmail.com", "gmai.com": "gmail.com", "gmal.com": "gmail.com", "gnail.com": "gmail.com",
  "gamil.com": "gmail.com", "gmaill.com": "gmail.com", "gmail.co": "gmail.com", "gmail.cm": "gmail.com",
  "yaho.com": "yahoo.com", "yahooo.com": "yahoo.com", "yhoo.com": "yahoo.com", "yahoo.co": "yahoo.com",
  "hotmial.com": "hotmail.com", "hotmal.com": "hotmail.com", "hotmai.com": "hotmail.com",
  "outlok.com": "outlook.com", "outloo.com": "outlook.com",
  "iclod.com": "icloud.com", "icoud.com": "icloud.com", "icloud.co": "icloud.com",
};
export function emailFix(e: string): string | null {
  const at = e.lastIndexOf("@"), user = e.slice(0, at);
  let domain = e.slice(at + 1).toLowerCase();
  const parts = domain.split("."), tld = parts.pop()!;
  if (TLD_FIX[tld]) domain = parts.concat(TLD_FIX[tld]).join(".");
  if (DOMAIN_FIX[domain]) domain = DOMAIN_FIX[domain];
  const fixed = user + "@" + domain;
  return fixed.toLowerCase() === e.toLowerCase() ? null : fixed;
}
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---------- Submission ----------
export type Answers = Record<string, string>;

export function estimateResult(a: Answers) {
  const tons = sizeFor(a.sqft, a.built);
  const gas = HAS_GAS.has(a.setup);
  const instant = gas && tons !== "custom";
  const q = new URLSearchParams({ fname: a.fname, tons, setup: a.setup, type: a.replace });
  return { tons, gas, instant, link: `/instant-pricing/estimate?${q}` };
}

// HubSpot contact property -> value. Every name must be on the HubSpot form, or
// HubSpot silently drops it. Market, Lead Type and Lead Source are sent here
// because hidden-field defaults don't apply to Forms API submissions.
export function hubspotFields(a: Answers) {
  const { tons, gas } = estimateResult(a);
  return [
    ["firstname", a.fname], ["lastname", a.lname], ["phone", a.phone], ["email", a.email],
    ["zip", a.zip], ["service_area", SERVICE_AREA[a.zip]], ["estimate_replacing", a.replace],
    ["what_type_of_home_do_you_have_", a.hometype], ["current_hvac_setup", a.setup],
    ["system_age", a.age], ["hvac_functioning_", a.condition],
    ["what_is_the_square_footage_of_your_home_", a.sqft], ["home_built_era", a.built],
    ["estimate_tons", gas ? tons : ""], ["replace_timeline", a.timeline],
    ["sms_estimate_consent", "true"], ["market", "Utah (HVAC)"], ["lead_type", "HVAC"], ["lead_source", "Instant Estimate"],
  ].filter(([, v]) => v) as [string, string][];
}

// Server-side check of a submission: every answer must be one of the choices.
export function validate(a: Answers): string | null {
  if (!/^\d{5}$/.test(a.zip || "") || !SERVICE_AREA[a.zip]) return "zip";
  for (const q of questions) if (!q.choices.some((c) => c.value === a[q.key])) return q.key;
  if (!cleanName(a.fname)) return "fname";
  if (!/^\d{10}$/.test(a.phone || "")) return "phone";
  if (!EMAIL_RE.test(a.email || "") || a.email.length > 120) return "email";
  if (a.consent !== "true") return "consent";
  return null;
}
