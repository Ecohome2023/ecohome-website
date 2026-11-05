// Run with: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { leadSourceFromChannel } from "./leadSource";
import { classify } from "./attribution";
import { hubspotFields, type Answers } from "./estimator";
import { bookingHubSpotFields } from "./booking";
import { keepExistingValues } from "./hubspot";

const LEAD_SOURCE_OPTIONS = ["Google", "Facebook", "Referral", "Instant Estimate", "Chat GBT", "Organic"];

test("every lead_channel maps to the right Lead Source", () => {
  const expected: Record<string, string> = {
    "Paid search": "Google",
    "Paid social": "Facebook",
    "Organic search": "Organic",
    "AI assistant": "Organic",
    "Google Business Profile": "Organic",
    Social: "Organic",
    Referral: "Organic", // a referring website, not a person's referral
    Direct: "Organic",
    Unknown: "Organic",
    "": "Organic",
  };
  for (const [channel, source] of Object.entries(expected)) assert.equal(leadSourceFromChannel(channel), source, channel);
  assert.equal(leadSourceFromChannel(undefined), "Organic");
  assert.equal(leadSourceFromChannel(null), "Organic");
});

test("classify() channels feed the mapping (ad tags -> Google / Facebook)", () => {
  const src = (host: string, qs: string) => leadSourceFromChannel(classify(host, new URLSearchParams(qs)));
  assert.equal(src("", "gclid=abc"), "Google");
  assert.equal(src("", "utm_source=google&utm_medium=cpc"), "Google");
  assert.equal(src("", "utm_source=facebook&utm_medium=paid"), "Facebook");
  assert.equal(src("", "utm_medium=paid_social"), "Facebook");
  assert.equal(src("google.com", ""), "Organic");
  assert.equal(src("facebook.com", "fbclid=x"), "Organic");
  assert.equal(src("chatgpt.com", ""), "Organic");
  assert.equal(src("", "utm_source=gbp"), "Organic");
  assert.equal(src("someblog.com", ""), "Organic");
  assert.equal(src("", ""), "Organic");
});

const answers: Answers = {
  zip: "84043", replace: "system", hometype: "Single Family", setup: "furnace_central_ac", age: "15_20",
  condition: "Getting Older", sqft: "1,601-2,000 sqft", built: "1980_1999", timeline: "ASAP",
  fname: "Sam", lname: "Test", phone: "8015550100", email: "sam@example.com", consent: "true", link_code: "Ab3cD",
};

test("Instant Estimate payload: source from channel, MQL status, no lead_type", () => {
  for (const [channel, source] of [["Paid search", "Google"], ["Paid social", "Facebook"], ["Referral", "Organic"], ["", "Organic"]]) {
    const f = Object.fromEntries(hubspotFields({ ...answers, lead_channel: channel }));
    assert.equal(f.lead_source, source, channel);
    assert.equal(f.hs_lead_status, "MQL Eco Home");
    assert.ok(!("lead_type" in f), "lead_type must not be sent");
    assert.ok(!Object.values(f).includes("Instant Estimate"), "no field may be 'Instant Estimate'");
    assert.ok(LEAD_SOURCE_OPTIONS.includes(f.lead_source));
  }
});

const contact = { fname: "Sam", lname: "Test", phone: "8015550100", email: "sam@example.com", street: "1 Main St", city: "Lehi", zip: "84043" };

test("booking payload: source from channel, never 'Call in/Online Booking', no Lead Status", () => {
  for (const [channel, source] of [["Paid search", "Google"], ["Paid social", "Facebook"], ["Direct", "Organic"]]) {
    const f = Object.fromEntries(bookingHubSpotFields(contact, { channel }, false));
    assert.equal(f.lead_source, source, channel);
    assert.equal(f.market, "Utah (HVAC)");
    assert.ok(!("hs_lead_status" in f));
    assert.ok(!Object.values(f).includes("Call in/Online Booking"));
    assert.ok(!Object.values(f).includes("Instant Estimate"));
  }
  const noFt = Object.fromEntries(bookingHubSpotFields(contact, {}, false));
  assert.equal(noFt.lead_source, "Organic");
});

test("booking from the instant estimate page sends no lead_source or market", () => {
  const f = Object.fromEntries(bookingHubSpotFields(contact, { channel: "Paid search" }, true));
  assert.ok(!("lead_source" in f));
  assert.ok(!("market" in f));
  assert.equal(f.lead_channel, "Paid search");
});

// ---- write-once guard ----
const fields: [string, string][] = [["email", "sam@example.com"], ["lead_source", "Google"], ["hs_lead_status", "MQL Eco Home"]];
const realFetch = globalThis.fetch;
async function withFetch(impl: typeof fetch, token: string | undefined, run: () => Promise<void>) {
  const old = process.env.HUBSPOT_TOKEN;
  if (token === undefined) delete process.env.HUBSPOT_TOKEN; else process.env.HUBSPOT_TOKEN = token;
  globalThis.fetch = impl;
  try { await run(); } finally { globalThis.fetch = realFetch; if (old === undefined) delete process.env.HUBSPOT_TOKEN; else process.env.HUBSPOT_TOKEN = old; }
}
const found = (properties: Record<string, string | null>) =>
  (async () => new Response(JSON.stringify({ results: [{ id: "1", properties }] }), { status: 200 })) as typeof fetch;

test("guard: existing values are kept, empty ones are filled", async () => {
  await withFetch(found({ lead_source: "Referral", hs_lead_status: "" }), "t", async () => {
    assert.deepEqual(await keepExistingValues("sam@example.com", fields), [["email", "sam@example.com"], ["hs_lead_status", "MQL Eco Home"]]);
  });
  await withFetch(found({ lead_source: "Google", hs_lead_status: "CUSTOMER" }), "t", async () => {
    assert.deepEqual(await keepExistingValues("sam@example.com", fields), [["email", "sam@example.com"]]);
  });
});

test("guard: new contact, no token, error, or slow lookup -> send everything", async () => {
  await withFetch((async () => new Response(JSON.stringify({ results: [] }))) as typeof fetch, "t", async () => {
    assert.deepEqual(await keepExistingValues("sam@example.com", fields), fields);
  });
  let called = false;
  await withFetch((async () => { called = true; return new Response("{}"); }) as typeof fetch, undefined, async () => {
    assert.deepEqual(await keepExistingValues("sam@example.com", fields), fields);
    assert.equal(called, false, "no lookup without a token");
  });
  await withFetch((async () => new Response("nope", { status: 500 })) as typeof fetch, "t", async () => {
    assert.deepEqual(await keepExistingValues("sam@example.com", fields), fields);
  });
  // Never answers: only the 2-second timeout ends it.
  // (The keep-alive timer stands in for the open network socket a real request has.)
  const hang = ((_: unknown, init?: RequestInit) => new Promise<Response>((_, reject) => {
    const keepAlive = setTimeout(() => {}, 10000);
    init?.signal?.addEventListener("abort", () => { clearTimeout(keepAlive); reject(init.signal!.reason); });
  })) as typeof fetch;
  await withFetch(hang, "t", async () => {
    const t0 = Date.now();
    assert.deepEqual(await keepExistingValues("sam@example.com", fields), fields);
    const ms = Date.now() - t0;
    assert.ok(ms >= 1900 && ms < 3000, `gave up after ${ms} ms`);
  });
});
