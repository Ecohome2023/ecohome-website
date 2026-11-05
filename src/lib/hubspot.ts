// HubSpot CRM API for server routes: find a contact and update its properties.
// Needs HUBSPOT_TOKEN (a HubSpot service key with contacts read/write) in Vercel.

const API = "https://api.hubapi.com/crm/v3/objects/contacts";

type Contact = { id: string; properties: Record<string, string | null> };

async function call<T>(path: string, init: RequestInit, ms = 8000): Promise<T> {
  const r = await fetch(API + path, {
    ...init,
    headers: { Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`, "Content-Type": "application/json" },
    signal: AbortSignal.timeout(ms),
  });
  if (!r.ok) throw new Error(`HubSpot ${init.method} ${path} ${r.status}: ${(await r.text()).slice(0, 200)}`);
  return r.json() as Promise<T>;
}

// The contact with this email, or else this mobile number.
export async function findContact(email: string, phone: string, properties: string[]): Promise<Contact | null> {
  const tries = [
    email && { propertyName: "email", operator: "EQ", value: email.toLowerCase() },
    phone && { propertyName: "phone", operator: "CONTAINS_TOKEN", value: phone.replace(/\D/g, "").slice(-10) },
  ].filter(Boolean);
  for (const filter of tries) {
    const d = await call<{ results: Contact[] }>("/search", {
      method: "POST",
      body: JSON.stringify({ filterGroups: [{ filters: [filter] }], properties, limit: 1 }),
    });
    if (d.results[0]) return d.results[0];
  }
  return null;
}

// The contact with exactly this email, giving up after `ms`. Used by the write-once guard.
export async function findContactByEmail(email: string, properties: string[], ms: number): Promise<Contact | null> {
  const d = await call<{ results: Contact[] }>("/search", {
    method: "POST",
    body: JSON.stringify({ filterGroups: [{ filters: [{ propertyName: "email", operator: "EQ", value: email.toLowerCase() }] }], properties, limit: 1 }),
  }, ms);
  return d.results[0] ?? null;
}

export function updateContact(id: string, properties: Record<string, string>) {
  return call(`/${id}`, { method: "PATCH", body: JSON.stringify({ properties }) });
}

// Lead Source and Lead Status are write-once: if the contact already exists with a
// value for one of these, leave it out so a form submission doesn't overwrite it.
// Best-effort: without HUBSPOT_TOKEN, or if the lookup fails or takes longer than
// 2 seconds, every field is sent as is, so a lead is never lost or held up.
export const WRITE_ONCE = ["lead_source", "hs_lead_status"];

export async function keepExistingValues(email: string, fields: [string, string][]): Promise<[string, string][]> {
  const names = fields.map(([n]) => n).filter((n) => WRITE_ONCE.includes(n));
  if (!names.length || !email || !process.env.HUBSPOT_TOKEN) return fields;
  try {
    const contact = await findContactByEmail(email, names, 2000);
    if (!contact) return fields;
    return fields.filter(([n]) => !names.includes(n) || !contact.properties[n]);
  } catch (e) {
    console.error("HubSpot write-once lookup skipped", e);
    return fields;
  }
}
