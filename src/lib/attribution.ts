// First-touch lead attribution: where a visitor came from on their first visit.
// Stored in the visitor's own browser and sent with the instant estimate, so
// HubSpot shows which channel produced each lead. No third-party tracking code.

export type FirstTouch = {
  channel: string;
  landing: string;
  referrer: string;
  campaign: string;
  at: string;
};

const KEY = "eh_first_touch";

const AI = /(^|\.)(chatgpt\.com|openai\.com|perplexity\.ai|copilot\.microsoft\.com|gemini\.google\.com|bard\.google\.com|claude\.ai|you\.com|meta\.ai)$/;
const SEARCH = /(^|\.)(google\.[a-z.]+|bing\.com|duckduckgo\.com|yahoo\.com|ecosia\.org|brave\.com|search\.brave\.com)$/;
const SOCIAL = /(^|\.)(facebook\.com|fb\.com|instagram\.com|tiktok\.com|youtube\.com|nextdoor\.com|x\.com|twitter\.com|linkedin\.com|pinterest\.com|reddit\.com)$/;

export function classify(referrerHost: string, p: URLSearchParams): string {
  const src = (p.get("utm_source") || "").toLowerCase();
  const med = (p.get("utm_medium") || "").toLowerCase();
  const camp = (p.get("utm_campaign") || "").toLowerCase();
  if (camp === "gbp" || src === "gbp" || src.includes("business_profile")) return "Google Business Profile";
  if (p.get("gclid") || p.get("gbraid") || p.get("wbraid") || /cpc|ppc|paid/.test(med)) return "Paid search";
  if (src && /chatgpt|openai|perplexity|copilot|gemini/.test(src)) return "AI assistant";
  if (referrerHost && AI.test(referrerHost)) return "AI assistant";
  if (referrerHost && SEARCH.test(referrerHost)) return "Organic search";
  if (/social/.test(med) || (referrerHost && SOCIAL.test(referrerHost))) return "Social";
  if (src) return "Referral";
  if (referrerHost) return "Referral";
  return "Direct";
}

function read(): FirstTouch | null {
  try {
    const v = localStorage.getItem(KEY);
    return v ? (JSON.parse(v) as FirstTouch) : null;
  } catch {
    return null;
  }
}

// Called once per page load. Keeps the first visit's details; never overwrites them.
export function recordFirstTouch(): FirstTouch {
  const existing = read();
  if (existing) return existing;
  const p = new URLSearchParams(location.search);
  let referrerHost = "";
  try {
    const r = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, "") : "";
    referrerHost = r && r !== location.hostname.replace(/^www\./, "") ? r : "";
  } catch {}
  const campaign = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid"]
    .filter((k) => p.get(k))
    .map((k) => `${k}=${p.get(k)}`)
    .join(" | ")
    .slice(0, 250);
  const ft: FirstTouch = {
    channel: classify(referrerHost, p),
    landing: location.pathname.slice(0, 200),
    referrer: referrerHost.slice(0, 120),
    campaign,
    at: new Date().toISOString(),
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(ft));
  } catch {}
  return ft;
}

export function firstTouch(): FirstTouch | null {
  return typeof window === "undefined" ? null : read() ?? recordFirstTouch();
}
