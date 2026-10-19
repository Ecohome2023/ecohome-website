"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { firstTouch } from "@/lib/attribution";
import { BOOKING_ZIPS, fmtDay, fmtRange, serviceByKey, type Slot } from "@/lib/booking";
import { EMAIL_RE, ESTIMATE_CONTACT_KEY, emailFix, type Answers, type EstimateType } from "@/lib/estimator";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon } from "@/components/icons";
import { SlotPicker, useSlots } from "@/components/booking/SlotPicker";

// The free estimate visit that matches what they priced.
const SERVICE_FOR: Record<EstimateType, string> = {
  system: "estimate-full-system",
  ac: "estimate-heat-pump",
  furnace: "estimate-furnace",
};

// The answers saved by the instant pricing form in this tab. Absent when the
// estimate link is opened later (from the text message), so then we ask.
const noSubscribe = () => () => {};
function readSaved() {
  try { return sessionStorage.getItem(ESTIMATE_CONTACT_KEY); } catch { return null; }
}

type Status = "asking" | "sending" | "done";

export function EstimateVisitBooking({ type }: { type: EstimateType }) {
  const raw = useSyncExternalStore(noSubscribe, readSaved, () => null);
  const saved = useMemo<Answers | null>(() => {
    try { const a = raw ? JSON.parse(raw) : null; return a && a.fname && a.phone && a.email && a.zip ? a : null; } catch { return null; }
  }, [raw]);

  const service = serviceByKey(SERVICE_FOR[type])!;
  const [f, setF] = useState<Record<string, string>>({});
  const [slot, setSlot] = useState<Slot | null>(null);
  const [reload, setReload] = useState(0);
  const [error, setError] = useState("");
  const [fix, setFix] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("asking");
  const [previewOnly, setPreviewOnly] = useState(false);
  const { slots, failed } = useSlots(service.key, reload);
  const set = (k: string, v: string) => setF((x) => ({ ...x, [k]: v }));

  const c = saved ? { fname: saved.fname, lname: saved.lname, phone: saved.phone, email: saved.email, zip: saved.zip } : f;
  const zipKnownOutside = !!saved && !BOOKING_ZIPS.has(saved.zip);

  function check(): boolean {
    setError(""); setFix(null);
    if (!slot) return setError("Please pick a time."), false;
    if (!saved) {
      const p = (f.phone || "").replace(/\D/g, "");
      const e = (f.email || "").trim();
      if (!(f.fname || "").trim() || !(f.lname || "").trim()) return setError("Please add your first and last name."), false;
      if (p.length !== 10 && !(p.length === 11 && p[0] === "1")) return setError("Please enter a 10-digit mobile number."), false;
      if (!EMAIL_RE.test(e)) return setError("Please enter a valid email."), false;
      const fx = emailFix(e);
      if (fx) { setFix(fx); return setError(`Check your email. Did you mean ${fx}?`), false; }
      if (!/^\d{5}$/.test(f.zip || "")) return setError("Please enter a 5-digit ZIP code."), false;
      if (!BOOKING_ZIPS.has(f.zip || "")) return setError(`Sorry, we can’t book that ZIP online. Call ${site.phone} and we’ll set up your visit.`), false;
    }
    if (!(f.street || "").trim() || !(f.city || "").trim()) return setError("Please add your street address and city."), false;
    if (f.consent !== "true") return setError("Please check the box so we can text you about your visit."), false;
    return true;
  }

  async function submit() {
    if (!check() || !slot) return;
    setStatus("sending");
    try {
      const r = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...c, street: f.street, city: f.city, website: f.website, email: (c.email || "").trim(),
          service: service.key, start: slot.start, consent: true,
          source: "instant-estimate", answers: saved || {}, pageUri: location.href, firstTouch: firstTouch(),
        }),
      });
      const d = await r.json().catch(() => ({}));
      if (d.ok) {
        if (d.preview) setPreviewOnly(true);
        else track("Booking made", { service: service.key, from: "instant-estimate" });
        return setStatus("done");
      }
      setStatus("asking");
      if (d.error === "taken") { setSlot(null); setReload((n) => n + 1); return setError("Sorry, that time was just taken. Please pick another."); }
      if (d.error === "outside_area") return setError(`Sorry, we can’t book that ZIP online. Call ${site.phone} and we’ll set up your visit.`);
      setError(typeof d.error === "string" && d.error.includes(" ") ? d.error : `We couldn’t book that. Please call or text ${site.phone} and we’ll get you scheduled.`);
    } catch {
      setStatus("asking");
      setError(`We couldn’t book that. Please call or text ${site.phone} and we’ll get you scheduled.`);
    }
  }

  const input = "w-full border-0 border-b-2 border-line bg-transparent px-0 py-2 text-xl font-medium text-ink outline-none placeholder:text-mist/50 focus:border-ink";
  const card = "min-w-0 rounded-3xl bg-white p-6 shadow-[0_6px_0_#14283a] ring-2 ring-ink sm:p-8";

  if (zipKnownOutside) {
    return (
      <div className={card}>
        <h3 className="display text-2xl">Let’s set up your visit</h3>
        <p className="mt-2 text-lg text-mist">We schedule visits in your area by phone. Call or text and we’ll find a time that works.</p>
        <a href={site.phoneHref} className="mt-5 inline-flex items-center gap-2 rounded-full bg-alarm-strong px-6 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c]">
          <PhoneIcon className="h-5 w-5" /> {site.phone}
        </a>
      </div>
    );
  }

  if (status === "done" && slot) {
    return (
      <div className={`${card} step-in`} aria-live="polite">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#1e8e4f] text-white"><CheckIcon className="h-6 w-6" /></span>
        <h3 className="display mt-4 text-3xl">You’re booked, {(c.fname || "").trim()}.</h3>
        <p className="mt-3 rounded-xl bg-sky-soft px-4 py-3 text-lg font-semibold">
          Free in-home estimate<br />{fmtDay(slot.start)}, {fmtRange(slot.start, slot.end)}
        </p>
        {previewOnly && <p className="mt-4 rounded-xl bg-alarm-strong/10 p-4 font-semibold text-alarm-strong">Preview link: nothing was booked in Housecall Pro.</p>}
        <p className="mt-4 text-lg text-mist">You’re on our schedule. Need to change something? Call or text us.</p>
        <a href={site.phoneHref} className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-4 text-lg font-bold">
          <PhoneIcon className="h-5 w-5" /> {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={(e) => { e.preventDefault(); submit(); }} className={card}>
      <h3 className="display text-2xl sm:text-3xl">Pick a time for your free visit</h3>
      <p className="mt-2 text-mist">Your comfort advisor arrives within the hour you choose.</p>
      <SlotPicker slots={slots} failed={failed} selected={slot?.start} onSelect={(s) => { setSlot(s); setError(""); }} />

      <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5">
        {!saved && (
          <>
            <label className="block"><span className="text-sm font-semibold text-mist">First name</span>
              <input className={input} autoComplete="given-name" value={f.fname || ""} onChange={(e) => set("fname", e.target.value)} /></label>
            <label className="block"><span className="text-sm font-semibold text-mist">Last name</span>
              <input className={input} autoComplete="family-name" value={f.lname || ""} onChange={(e) => set("lname", e.target.value)} /></label>
            <label className="col-span-2 block"><span className="text-sm font-semibold text-mist">Mobile phone</span>
              <input className={input} type="tel" inputMode="tel" autoComplete="tel" placeholder="(801) 555-0123" value={f.phone || ""}
                onChange={(e) => {
                  const d = e.target.value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);
                  set("phone", d.length > 6 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : d.length > 3 ? `(${d.slice(0, 3)}) ${d.slice(3)}` : d);
                }} /></label>
            <label className="col-span-2 block"><span className="text-sm font-semibold text-mist">Email</span>
              <input className={input} type="email" inputMode="email" autoComplete="email" value={f.email || ""} onChange={(e) => set("email", e.target.value)} /></label>
          </>
        )}
        <label className="col-span-2 block"><span className="text-sm font-semibold text-mist">Street address</span>
          <input className={input} autoComplete="street-address" value={f.street || ""} onChange={(e) => set("street", e.target.value)} /></label>
        <label className="block"><span className="text-sm font-semibold text-mist">City</span>
          <input className={input} autoComplete="address-level2" value={f.city || ""} onChange={(e) => set("city", e.target.value)} /></label>
        <label className="block"><span className="text-sm font-semibold text-mist">ZIP</span>
          {saved
            ? <input className={`${input} text-mist`} value={saved.zip} readOnly tabIndex={-1} />
            : <input className={input} inputMode="numeric" autoComplete="postal-code" maxLength={5} value={f.zip || ""} onChange={(e) => set("zip", e.target.value.replace(/\D/g, ""))} />}
        </label>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={f.website || ""} onChange={(e) => set("website", e.target.value)} />
      </div>
      <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-mist">
        <input type="checkbox" className="mt-0.5 h-5 w-5 shrink-0 accent-ink" checked={f.consent === "true"} onChange={(e) => set("consent", e.target.checked ? "true" : "")} />
        <span>I agree to receive texts from {site.name} about my visit. Message and data rates may apply. Reply STOP to opt out. See our <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.</span>
      </label>

      <p role="alert" className="mt-4 min-h-6 font-semibold text-alarm-strong">{error}</p>
      {fix && (
        <button type="button" onClick={() => { set("email", fix); setFix(null); setError(""); }} className="mt-1 rounded-lg border-2 border-ink px-4 py-2 font-semibold">
          Use {fix}
        </button>
      )}
      <button type="submit" disabled={status === "sending"} className="mt-4 w-full rounded-full bg-alarm-strong px-6 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110 disabled:opacity-70">
        {status === "sending" ? "Booking your visit…" : "Book my free visit"}
      </button>
    </form>
  );
}
