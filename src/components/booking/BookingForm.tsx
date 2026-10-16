"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { firstTouch } from "@/lib/attribution";
import { bookingServices, needs, serviceByKey, BOOKING_ZIPS, fmtDay, fmtTime, dayKey, type Slot } from "@/lib/booking";
import { EMAIL_RE, emailFix } from "@/lib/estimator";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon } from "@/components/icons";

// Short screens: what you need, which one (tune-ups and new systems only), ZIP, pick a time, your details.
const ALL_STEPS = ["need", "service", "zip", "time", "details"];
type Status = "asking" | "sending" | "done";
type F = Record<string, string>;

export function BookingForm({ initialService = "" }: { initialService?: string }) {
  const start = serviceByKey(initialService);
  const [f, setF] = useState<F>(start ? { need: start.need, service: start.key } : {});
  const steps = f.need === "repair" ? ALL_STEPS.filter((s) => s !== "service") : ALL_STEPS;
  const [step, setStep] = useState(start ? steps.indexOf("zip") : 0);
  const [error, setError] = useState("");
  const [fix, setFix] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("asking");
  const [previewOnly, setPreviewOnly] = useState(false);
  // Open times, tagged with the service they belong to (null while loading).
  const [loaded, setLoaded] = useState<{ service: string; slots: Slot[] | null; n: number }>({ service: "", slots: null, n: 0 });
  const [reload, setReload] = useState(0);
  const [day, setDay] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  const key = steps[step];
  const service = serviceByKey(f.service);
  const set = (k: string, v: string) => setF((x) => ({ ...x, [k]: v }));

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    headingRef.current?.focus({ preventScroll: true });
    const top = cardRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) cardRef.current?.scrollIntoView({ block: "start" });
  }, [step, status]);

  // Load open times whenever the service changes.
  useEffect(() => {
    if (!f.service) return;
    let live = true;
    const done = (slots: Slot[] | null) => live && setLoaded({ service: f.service, slots, n: reload });
    fetch(`/api/booking/slots?service=${encodeURIComponent(f.service)}`)
      .then((r) => r.json())
      .then((d) => done(d.ok ? d.slots : null))
      .catch(() => done(null));
    return () => { live = false; };
  }, [f.service, reload]);
  const current = loaded.service === f.service && loaded.n === reload;
  const slots = current ? loaded.slots : null;
  const slotsFailed = current && loaded.slots === null;

  const days = slots ? [...new Set(slots.map((s) => dayKey(s.start)))] : [];
  const shownDay = days.includes(day) ? day : days[0] || "";
  const daySlots = (slots || []).filter((s) => dayKey(s.start) === shownDay);
  const picked = slots?.find((s) => s.start === f.start);

  function check(): boolean {
    setError(""); setFix(null);
    if ((key === "need" || key === "service") && !service) return setError("Please choose one."), false;
    if (key === "zip") {
      const z = (f.zip || "").trim();
      if (!/^\d{5}$/.test(z)) return setError("Please enter a 5-digit ZIP code."), false;
      if (!BOOKING_ZIPS.has(z)) return setError(`Sorry, we can’t book that ZIP online. Call ${site.phone} and we’ll see what we can do.`), false;
    }
    if (key === "time" && !picked) return setError("Please pick a time."), false;
    if (key === "details") {
      const p = (f.phone || "").replace(/\D/g, "");
      const e = (f.email || "").trim();
      if (!(f.fname || "").trim() || !(f.lname || "").trim()) return setError("Please add your first and last name."), false;
      if (p.length !== 10 && !(p.length === 11 && p[0] === "1")) return setError("Please enter a 10-digit mobile number."), false;
      if (!EMAIL_RE.test(e)) return setError("Please enter a valid email."), false;
      const fx = emailFix(e);
      if (fx) { setFix(fx); return setError(`Check your email. Did you mean ${fx}?`), false; }
      if (!(f.street || "").trim() || !(f.city || "").trim()) return setError("Please add your street address and city."), false;
      if (f.consent !== "true") return setError("Please check the box so we can text you about your visit."), false;
    }
    return true;
  }

  function next() {
    if (!check()) return;
    if (key === "details") return submit();
    setStep((s) => s + 1);
  }

  async function submit() {
    setStatus("sending");
    try {
      const r = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, email: (f.email || "").trim(), consent: f.consent === "true", pageUri: location.href, firstTouch: firstTouch() }),
      });
      const d = await r.json().catch(() => ({}));
      if (d.ok) {
        if (d.preview) { setPreviewOnly(true); return setStatus("done"); }
        track("Booking made", { service: f.service });
        return setStatus("done");
      }
      setStatus("asking");
      if (d.error === "taken") {
        // Someone just took it. Refresh the times and go back to pick another.
        set("start", ""); setReload((n) => n + 1);
        setStep(steps.indexOf("time"));
        return setError("Sorry, that time was just taken. Please pick another.");
      }
      if (d.error === "outside_area") { setStep(steps.indexOf("zip")); return setError(`Sorry, we can’t book that ZIP online. Call ${site.phone}.`); }
      setError(typeof d.error === "string" && d.error.includes(" ") ? d.error : `We couldn’t book that. Please call or text ${site.phone} and we’ll get you scheduled.`);
    } catch {
      setStatus("asking");
      setError(`We couldn’t book that. Please call or text ${site.phone} and we’ll get you scheduled.`);
    }
  }

  const input = "w-full border-0 border-b-2 border-line bg-transparent px-0 py-2 text-xl font-medium text-ink outline-none placeholder:text-mist/50 focus:border-ink";
  const choice = (on: boolean) =>
    `flex w-full items-center justify-between gap-3 rounded-xl border-2 px-4 py-3.5 text-left text-lg font-semibold transition-colors ${on ? "border-ink bg-sky-soft" : "border-transparent bg-[#f2f6f8] hover:border-line"}`;

  return (
    <div ref={cardRef} className="min-w-0 scroll-mt-28 rounded-3xl bg-white p-6 shadow-[0_6px_0_#14283a] ring-2 ring-ink sm:p-10">
      <div className="flex gap-1.5" aria-hidden="true">
        {steps.map((s, i) => (
          <span key={s} className={`h-1.5 flex-1 rounded-full transition-colors ${status !== "asking" || i < step ? "bg-ink" : i === step ? "bg-alarm-strong" : "bg-line"}`} />
        ))}
      </div>

      {status === "asking" && (
        <form key={key} noValidate onSubmit={(e) => { e.preventDefault(); next(); }} className="step-in mt-8 min-h-[22rem]">
          {key === "need" && (
            <>
              <h2 ref={headingRef} tabIndex={-1} id="q" className="display mt-2 text-3xl outline-none sm:text-4xl">What do you need?</h2>
              <div role="group" aria-labelledby="q" className="mt-7 grid gap-3">
                {needs.map((n) => (
                  <button key={n.key} type="button" aria-pressed={f.need === n.key} className={choice(f.need === n.key)}
                    onClick={() => {
                      // Repair has one option, so it skips the "which one" screen.
                      setF((x) => ({ ...x, need: n.key, service: n.key === "repair" ? "repair" : x.need === n.key ? x.service : "", start: "" }));
                      setError(""); setStep(1);
                    }}>
                    <span className="text-xl">{n.title}<span className="mt-0.5 block text-base font-normal text-mist">{n.sub}</span></span>
                    <span className="shrink-0 text-base">{n.price}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {key === "service" && (
            <>
              <h2 ref={headingRef} tabIndex={-1} id="q" className="display mt-2 text-3xl outline-none sm:text-4xl">
                {f.need === "tune-up" ? "Which tune-up?" : "What are you thinking about?"}
              </h2>
              {f.need === "new" && <p className="mt-3 text-lg text-mist">Estimates are free, with no obligation.</p>}
              <div role="group" aria-labelledby="q" className="mt-7 grid gap-2.5">
                {bookingServices.filter((s) => s.need === f.need).map((s) => (
                  <button key={s.key} type="button" aria-pressed={f.service === s.key} className={choice(f.service === s.key)}
                    onClick={() => { setF((x) => ({ ...x, service: s.key, start: "" })); setError(""); setStep((n) => n + 1); }}>
                    <span>{s.name}{s.blurb && <span className="mt-0.5 block text-sm font-normal text-mist">{s.blurb}</span>}</span>
                    {f.need === "tune-up" && <span className="shrink-0 text-base">{s.priceLabel}</span>}
                  </button>
                ))}
              </div>
            </>
          )}

          {key === "zip" && (
            <>
              <h2 ref={headingRef} tabIndex={-1} id="q" className="display mt-2 text-3xl outline-none sm:text-4xl">What’s your ZIP code?</h2>
              <p className="mt-3 text-lg text-mist">We use this to check that you’re in our service area.</p>
              <input aria-labelledby="q" className={`${input} mt-8 text-2xl`} inputMode="numeric" autoComplete="postal-code" maxLength={5} placeholder="84003"
                value={f.zip || ""} onChange={(e) => set("zip", e.target.value.replace(/\D/g, ""))} autoFocus />
            </>
          )}

          {key === "time" && (
            <>
              <h2 ref={headingRef} tabIndex={-1} id="q" className="display mt-2 text-3xl outline-none sm:text-4xl">Pick a time</h2>
              <p className="mt-3 text-lg text-mist">Your technician arrives within the hour you choose.</p>
              {!slots && !slotsFailed && (
                <div className="mt-8 flex items-center gap-3 text-mist" aria-live="polite">
                  <span className="h-6 w-6 animate-spin rounded-full border-4 border-line border-t-alarm-strong" aria-hidden="true" /> Checking the schedule…
                </div>
              )}
              {(slotsFailed || (slots && slots.length === 0)) && (
                <p className="mt-6 rounded-xl bg-[#f2f6f8] p-4 font-semibold">
                  {slotsFailed ? "We couldn’t load the schedule right now." : "No online times are open in the next two weeks."} Call or text{" "}
                  <a href={site.phoneHref} className="underline">{site.phone}</a> and we’ll find you a time.
                </p>
              )}
              {slots && slots.length > 0 && (
                <>
                  <div role="group" aria-label="Day" className="-mx-1 mt-6 flex gap-2 overflow-x-auto px-1 pb-2">
                    {days.map((d) => {
                      const first = slots.find((s) => dayKey(s.start) === d)!;
                      const [wd, ...md] = fmtDay(first.start).split(" ");
                      const on = d === shownDay;
                      return (
                        <button key={d} type="button" aria-pressed={on} onClick={() => setDay(d)}
                          className={`flex min-w-[4.5rem] shrink-0 flex-col items-center rounded-xl border-2 px-3 py-2.5 font-semibold transition-colors ${on ? "border-ink bg-ink text-white" : "border-transparent bg-[#f2f6f8] hover:border-line"}`}>
                          <span className="text-sm">{wd.replace(",", "")}</span>
                          <span className="text-lg">{md.join(" ")}</span>
                        </button>
                      );
                    })}
                  </div>
                  <div role="group" aria-label="Time" className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {daySlots.map((s) => {
                      const on = f.start === s.start;
                      return (
                        <button key={s.start} type="button" aria-pressed={on} onClick={() => { set("start", s.start); setError(""); }}
                          className={`rounded-xl border-2 px-3 py-3 text-center text-lg font-semibold transition-colors ${on ? "border-ink bg-sky-soft" : "border-transparent bg-[#f2f6f8] hover:border-line"}`}>
                          {fmtTime(s.start)}–{fmtTime(s.end)}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </>
          )}

          {key === "details" && (
            <>
              <h2 ref={headingRef} tabIndex={-1} id="q" className="display mt-2 text-3xl outline-none sm:text-4xl">Your details</h2>
              {service && picked && (
                <p className="mt-3 rounded-xl bg-sky-soft px-4 py-3 font-semibold">
                  {service.name} · {fmtDay(picked.start)}, {fmtTime(picked.start)}–{fmtTime(picked.end)}
                </p>
              )}
              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-5">
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
                <label className="col-span-2 block"><span className="text-sm font-semibold text-mist">Street address</span>
                  <input className={input} autoComplete="street-address" value={f.street || ""} onChange={(e) => set("street", e.target.value)} /></label>
                <label className="block"><span className="text-sm font-semibold text-mist">City</span>
                  <input className={input} autoComplete="address-level2" value={f.city || ""} onChange={(e) => set("city", e.target.value)} /></label>
                <label className="block"><span className="text-sm font-semibold text-mist">ZIP</span>
                  <input className={`${input} text-mist`} value={f.zip || ""} readOnly tabIndex={-1} /></label>
                <label className="col-span-2 block"><span className="text-sm font-semibold text-mist">Anything we should know? (optional)</span>
                  <input className={input} placeholder="Gate code, what’s going on with your system…" value={f.notes || ""} onChange={(e) => set("notes", e.target.value)} /></label>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={f.website || ""} onChange={(e) => set("website", e.target.value)} />
              </div>
              <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-mist">
                <input type="checkbox" className="mt-0.5 h-5 w-5 shrink-0 accent-ink" checked={f.consent === "true"} onChange={(e) => set("consent", e.target.checked ? "true" : "")} />
                <span>I agree to receive texts from {site.name} about my visit. Message and data rates may apply. Reply STOP to opt out. See our <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.</span>
              </label>
            </>
          )}

          <p role="alert" className="mt-4 min-h-6 font-semibold text-alarm-strong">{error}</p>
          {fix && (
            <button type="button" onClick={() => { set("email", fix); setFix(null); setError(""); }} className="mt-1 rounded-lg border-2 border-ink px-4 py-2 font-semibold">
              Use {fix}
            </button>
          )}

          <div className={`mt-6 flex gap-3 ${key === "need" ? "hidden" : ""}`}>
            <button type="button" aria-label="Back" disabled={step === 0} onClick={() => { setError(""); setFix(null); setStep((s) => s - 1); }}
              className="grid h-14 w-16 place-items-center rounded-full border-2 border-ink bg-white disabled:opacity-30">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M11.5 3 5.5 9l6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {key !== "need" && key !== "service" && (
              <button type="submit" className="flex-1 rounded-full bg-alarm-strong px-6 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
                {key === "details" ? "Book my visit" : "OK"}
              </button>
            )}
          </div>
        </form>
      )}

      {status === "sending" && (
        <div className="mt-8 flex min-h-[22rem] flex-col justify-center" aria-live="polite">
          <span className="h-9 w-9 animate-spin rounded-full border-4 border-line border-t-alarm-strong" aria-hidden="true" />
          <h2 className="display mt-5 text-3xl">Booking your visit…</h2>
        </div>
      )}

      {status === "done" && service && picked && (
        <div className="step-in mt-8 min-h-[22rem]" aria-live="polite">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#1e8e4f] text-white"><CheckIcon className="h-6 w-6" /></span>
          <h2 ref={headingRef} tabIndex={-1} className="display mt-5 text-3xl outline-none sm:text-4xl">You’re booked, {(f.fname || "").trim()}.</h2>
          <p className="mt-3 rounded-xl bg-sky-soft px-4 py-3 text-lg font-semibold">
            {service.name}<br />{fmtDay(picked.start)}, {fmtTime(picked.start)}–{fmtTime(picked.end)}
          </p>
          {previewOnly && <p className="mt-4 rounded-xl bg-alarm-strong/10 p-4 font-semibold text-alarm-strong">Preview link: nothing was booked in Housecall Pro.</p>}
          <p className="mt-4 text-lg text-mist">You’re on our schedule. Need to change something? Call or text us.</p>
          <a href={site.phoneHref} className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-4 text-lg font-bold">
            <PhoneIcon className="h-5 w-5" /> {site.phone}
          </a>
        </div>
      )}
    </div>
  );
}
