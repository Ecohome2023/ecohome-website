"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { CheckIcon } from "./icons";

const needs = ["Repair", "New system estimate", "Tune-up", "Eco Care Plan", "Not sure yet"];
const systems = ["Heat pump", "Furnace + AC", "Mini-split", "Not sure"];
const ages = ["Under 5 years", "5–10 years", "10–15 years", "15+ years", "Not sure"];

function Choice({ options, value, onPick, name }: { options: string[]; value: string; onPick: (v: string) => void; name: string }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2" role="radiogroup" aria-label={name}>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          role="radio"
          aria-checked={value === o}
          onClick={() => onPick(o)}
          className={`rounded-xl border-2 px-4 py-3 text-left font-semibold transition-colors ${
            value === o ? "border-teal bg-sky-soft" : "border-line hover:border-sky"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

export function LeadForm() {
  const [step, setStep] = useState(0);
  const [need, setNeed] = useState("");
  const [system, setSystem] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const [first, ...rest] = String(fd.get("name") || "").trim().split(/\s+/);
    const message = [
      `Needs: ${need}`,
      `System: ${system || "Not given"}`,
      `Age: ${age || "Not given"}`,
      `Preferred time: ${fd.get("when") || "Any"}`,
    ].join("\n");

    const fields = [
      ["firstname", first],
      ["lastname", rest.join(" ")],
      ["phone", fd.get("phone")],
      ["email", fd.get("email")],
      ["address", fd.get("address")],
      ["message", message],
    ].map(([name, value]) => ({ objectTypeId: "0-1", name, value: String(value || "") }));

    setStatus("sending");
    const { portalId, formId } = site.hubspot;
    if (!portalId || !formId) {
      // Preview build: HubSpot not connected yet.
      console.info("HubSpot not configured. Would submit:", fields);
      setStatus("sent");
      return;
    }
    try {
      const hutk = document.cookie.match(/hubspotutk=([^;]+)/)?.[1];
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields,
            context: { pageUri: location.href, pageName: document.title, ...(hutk ? { hutk } : {}) },
          }),
        },
      );
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-white p-8 text-ink" role="status">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-sky text-ink"><CheckIcon className="h-6 w-6" /></span>
        <h3 className="display mt-4 text-2xl">Request received</h3>
        <p className="mt-2 text-mist">
          We’ll call you shortly to confirm a time. Need us sooner? Call{" "}
          <a href={site.phoneHref} className="font-bold text-teal underline">{site.phone}</a>, we’re open 24/7.
        </p>
      </div>
    );
  }

  const input = "w-full rounded-xl border-2 border-line px-4 py-3 outline-none focus:border-teal";

  return (
    <form onSubmit={submit} className="rounded-2xl bg-white p-6 text-ink sm:p-8" noValidate={false}>
      <div className="flex items-center justify-between">
        <p className="font-bold">Step {step + 1} of 3</p>
        <div className="flex gap-1.5" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span key={i} className={`h-1.5 w-8 rounded-full ${i <= step ? "bg-alarm" : "bg-line"}`} />
          ))}
        </div>
      </div>

      {step === 0 && (
        <fieldset className="mt-5">
          <legend className="display mb-4 text-2xl">How can we help?</legend>
          <Choice name="What you need" options={needs} value={need} onPick={(v) => { setNeed(v); setStep(1); }} />
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className="mt-5 space-y-5">
          <legend className="display mb-1 text-2xl">Tell us about your system</legend>
          <div>
            <p className="mb-2 font-semibold text-mist">What do you have now?</p>
            <Choice name="System type" options={systems} value={system} onPick={setSystem} />
          </div>
          <div>
            <p className="mb-2 font-semibold text-mist">About how old is it?</p>
            <Choice name="System age" options={ages} value={age} onPick={setAge} />
          </div>
          <div className="flex justify-between pt-2">
            <button type="button" onClick={() => setStep(0)} className="font-semibold text-mist hover:text-ink">Back</button>
            <button type="button" onClick={() => setStep(2)} className="rounded-full bg-ink px-6 py-3 font-bold text-white hover:bg-teal">
              Continue
            </button>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="mt-5 space-y-3">
          <legend className="display mb-2 text-2xl">Where can we reach you?</legend>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold">Name</span>
            <input name="name" required autoComplete="name" className={input} />
          </label>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold">Phone</span>
              <input name="phone" type="tel" required autoComplete="tel" className={input} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold">Email</span>
              <input name="email" type="email" autoComplete="email" className={input} />
            </label>
          </div>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold">Home address</span>
            <input name="address" required autoComplete="street-address" className={input} />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold">Best day and time</span>
            <input name="when" placeholder="e.g. Tuesday morning" className={input} />
          </label>
          {status === "error" && (
            <p className="rounded-lg bg-[#ffe8ec] px-4 py-3 text-sm font-semibold text-[#a3001f]" role="alert">
              Your request didn’t go through. Check your connection and try again, or call {site.phone}.
            </p>
          )}
          <div className="flex items-center justify-between pt-2">
            <button type="button" onClick={() => setStep(1)} className="font-semibold text-mist hover:text-ink">Back</button>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-alarm px-6 py-3 font-bold text-white shadow-[0_3px_0_#b80028] hover:brightness-110 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Request my appointment"}
            </button>
          </div>
        </fieldset>
      )}
    </form>
  );
}
