// HubSpot CRM API for server routes: find a contact and update its properties.
// Needs HUBSPOT_TOKEN (a HubSpot service key with contacts read/write) in Vercel.

const API = "https://api.hubapi.com/crm/v3/objects/contacts";

type Contact = { id: string; properties: Record<string, string | null> };

async function call<T>(path: string, init: RequestInit): Promise<T> {
  const r = await fetch(API + path, {
    ...init,
    headers: { Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`, "Content-Type": "application/json" },
    signal: AbortSignal.timeout(8000),
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

export function updateContact(id: string, properties: Record<string, string>) {
  return call(`/${id}`, { method: "PATCH", body: JSON.stringify({ properties }) });
}
