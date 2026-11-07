"use client";

import { gaEvent } from "@/lib/gtag";
import { metaEvent } from "@/lib/metaPixel";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { questions, SERVICE_AREA, estimateResult, emailFix, EMAIL_RE, looksMasked, ESTIMATE_CONTACT_KEY, type Answers } from "@/lib/estimator";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon } from "@/components/icons";
import { HomeIcon } from "./HomeIcons";
import { firstTouch } from "@/lib/attribution";
import { track } from "@vercel/analytics";
import { EquipmentIcon } from "./EquipmentIcons";

// One question per screen: ZIP, eight choice questions, then contact details.
// Order of the screens (keys from questions in lib/estimator, plus zip and contact).
const STEPS = ["hometype", "setup", "replace", "sqft", "age", "condition", "built", "timeline", "zip", "contact"];
// Questions shown as picture tiles, and how many tiles per row on wider screens.
const ICON_STEPS: Record<string, string> = { hometype: "grid-cols-2", setup: "grid-cols-2 sm:grid-cols-3", replace: "grid-cols-3" };
const KEYS = "ABCDEFGH";

type Status = "asking" | "sending" | "done";

// compact: tighter spacing so every question fits on one phone screen with no
// scrolling (the /get-price squeeze page). Default layout is unchanged.
// below: shown under the form while questions are being answered (hidden on the
// contact step, which needs the room for its fields).
export function EstimateForm({ compact = false, below }: { compact?: boolean; below?: ReactNode } = {}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [error, setError] = useState("");
  const [fix, setFix] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("asking");
  const [saveFailed, setSaveFailed] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const advancing = useRef(false);

  const key = STEPS[step];
  const question = questions.find((q) => q.key === key);

  // Move focus to the new question so keyboard and screen reader users follow along.
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    headingRef.current?.focus({ preventScroll: true });
    const top = cardRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) cardRef.current?.scrollIntoView({ block: "start" });
  }, [step, status]);

  const set = (k: string, v: string) => setAnswers((a) => ({ ...a, [k]: v }));

  function check(a: Answers): boolean {
    setError(""); setFix(null);
    if (key === "zip") {
      const z = (a.zip || "").trim();
      if (!/^\d{5}$/.test(z)) return setError("Please enter a 5-digit ZIP code."), false;
      if (!SERVICE_AREA[z]) return setError(`Sorry, that ZIP is outside the area we serve. Call ${site.phone} and we’ll see what we can do.`), false;
    }
    if (question && !a[key]) return setError("Please choose one."), false;
    if (key === "contact") {
      const p = (a.phone || "").replace(/\D/g, "");
      const e = (a.email || "").trim();
      if (!(a.fname || "").trim()) return setError("Please add your first name."), false;
      if (p.length !== 10 && !(p.length === 11 && p[0] === "1")) return setError("Please enter a 10-digit mobile number."), false;
      if (!EMAIL_RE.test(e)) return setError("Please enter a valid email."), false;
      if (looksMasked(e)) return setError("Please type your full email address."), false;
      const f = emailFix(e);
      if (f) { setFix(f); return setError(`Check your email. Did you mean ${f}?`), false; }
      if (a.consent !== "true") return setError("Please check the box so we can text you your estimate."), false;
    }
    return true;
  }

  function next(a: Answers = answers) {
    if (!check(a)) return;
    if (key === "contact") return submit(a);
    setStep((s) => s + 1);
  }

  function choose(value: string) {
    if (advancing.current) return; // a second quick tap must not skip a question
    advancing.current = true;
    const a = { ...answers, [key]: value };
    setAnswers(a);
    setError("");
    // brief pause so the selection registers before the next question slides in
    setTimeout(() => { advancing.current = false; next(a); }, 220);
  }

  async function submit(a: Answers) {
    setStatus("sending");
    // Kept in this browser tab only, so the visit calendar on the estimate page
    // doesn't ask for name, phone and email again.
    try { sessionStorage.setItem(ESTIMATE_CONTACT_KEY, JSON.stringify({ ...a, email: a.email.trim() })); } catch {}
    const started = Date.now();
    let ok = false;
    try {
      const r = await fetch("/api/instant-estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...a, email: a.email.trim(), pageUri: location.href, firstTouch: firstTouch() }),
      });
      ok = r.ok;
      if (ok) {
        track("Estimate submitted", { channel: firstTouch()?.channel ?? "Unknown" });
        gaEvent("generate_lead", { form: "instant_pricing" });
        metaEvent("Lead", { content_name: "instant_pricing" });
      }
    } catch {
      ok = false;
    }
    setSaveFailed(!ok);
    // keep the "building" moment long enough that it doesn't flash
    setTimeout(() => setStatus("done"), Math.max(0, 1300 - (Date.now() - started)));
  }

  // Keyboard: Enter for OK, letter keys pick a choice.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (status !== "asking") return;
      const t = e.target as HTMLElement;
      if (e.key === "Enter" && !(t instanceof HTMLInputElement && t.type === "checkbox") && !(t instanceof HTMLButtonElement || t instanceof HTMLAnchorElement)) {
        e.preventDefault(); next(); return;
      }
      if (question && !(t instanceof HTMLInputElement) && e.key.length === 1 && !e.metaKey && !e.ctrlKey) {
        const i = KEYS.indexOf(e.key.toUpperCase());
        if (i >= 0 && i < question.choices.length) choose(question.choices[i].value);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const result = status === "done" ? estimateResult(answers) : null;
  const input = `w-full border-0 border-b-2 border-line bg-transparent px-0 ${compact ? "py-1.5 text-xl sm:py-1 sm:text-lg lg:py-2 lg:text-2xl" : "py-2 text-2xl"} font-medium text-ink outline-none placeholder:text-mist/50 focus:border-ink`;
  const c = compact
    ? { card: "p-4 sm:p-5 lg:px-12 lg:py-9", body: "mt-4 sm:mt-3 lg:mt-5", h: "text-[1.65rem] leading-tight sm:text-3xl lg:text-[2.25rem]", help: "mt-1.5 text-base sm:hidden lg:mt-2 lg:block lg:text-lg", group: "mt-4 sm:mt-3 lg:mt-6", tile: "gap-1.5 px-2 pb-3 pt-3.5 text-base sm:gap-1 sm:pb-2.5 sm:pt-3 lg:gap-2 lg:pb-4 lg:pt-5 lg:text-lg", icon: "h-11 w-auto sm:h-9 lg:h-14", row: "py-3.5 text-base sm:py-2.5 lg:py-4 lg:text-lg", rowGap: "gap-2.5 sm:gap-2 lg:gap-3", err: "mt-2 empty:hidden", btns: "mt-4 sm:mt-3 lg:mt-6", ok: "py-4 sm:py-3 lg:py-4", badge: "hidden sm:grid", enter: "hidden" }
    : { card: "p-6 sm:p-10", body: "mt-8 min-h-[22rem]", h: "text-3xl sm:text-4xl", help: "mt-3 text-lg", group: "mt-7", tile: "px-3 pb-4 pt-5", icon: "h-16 w-auto sm:h-20", row: "py-3.5 text-lg", rowGap: "gap-2.5", err: "mt-4 min-h-6", btns: "mt-6", ok: "py-4", badge: "grid", enter: "hidden [@media(pointer:fine)]:block" };

  const showBelow = below && status === "asking" && key !== "contact";

  return (
    <>
    <div ref={cardRef} className={`scroll-mt-28 rounded-3xl bg-white shadow-[0_6px_0_#14283a] ring-2 ring-ink ${c.card}`}>
      {/* progress */}
      <div className="flex gap-1.5" aria-hidden="true">
        {STEPS.map((s, i) => (
          <span key={s} className={`h-1.5 flex-1 rounded-full transition-colors ${status !== "asking" || i < step ? "bg-ink" : i === step ? "bg-alarm-strong" : "bg-line"}`} />
        ))}
      </div>

      {status === "asking" && (
        <form key={key} noValidate onSubmit={(e) => { e.preventDefault(); next(); }} className={`step-in ${c.body}`}>

          {key === "zip" && (
            <>
              <h2 ref={headingRef} tabIndex={-1} id="q" className={`display mt-2 outline-none ${c.h}`}>What’s your ZIP code?</h2>
              <p className={`${c.help} text-mist`}>We use this to check that you’re in our service area.</p>
              <input
                aria-labelledby="q" className={`${input} ${compact ? "mt-5 lg:mt-8" : "mt-8"}`} inputMode="numeric" autoComplete="postal-code" maxLength={5} placeholder="84003"
                value={answers.zip || ""} onChange={(e) => set("zip", e.target.value.replace(/\D/g, ""))} autoFocus={step > 0}
              />
            </>
          )}

          {question && (
            <>
              <h2 ref={headingRef} tabIndex={-1} id="q" className={`display mt-2 outline-none ${c.h}`}>{question.title}</h2>
              <p className={`${c.help} text-mist`}>{question.help}</p>
              {ICON_STEPS[key] ? (
              <div role="group" aria-labelledby="q" className={`${c.group} grid gap-3 ${ICON_STEPS[key]}`}>
                {question.choices.map((ch, i) => {
                  const on = answers[key] === ch.value;
                  return (
                    <button
                      key={ch.value} type="button" aria-pressed={on} onClick={() => choose(ch.value)}
                      className={`relative flex rounded-2xl border-2 font-semibold leading-tight flex-col items-center text-center ${compact ? "" : "gap-2"} ${c.tile} ${compact ? "" : key === "replace" ? "text-base sm:text-lg" : "text-lg"} transition-colors ${on ? "border-ink bg-sky-soft" : "border-transparent bg-[#f2f6f8] hover:border-line"}`}
                    >
                      <span className={`absolute left-2.5 top-2.5 ${c.badge} h-6 w-6 place-items-center rounded-md border text-xs font-bold ${on ? "border-ink bg-ink text-white" : "border-line bg-white text-mist"}`}>{KEYS[i]}</span>
                      {key === "hometype" ? <HomeIcon kind={ch.value} className={c.icon} /> : <EquipmentIcon qkey={key} value={ch.value} className={c.icon} />}
                      {ch.label}
                    </button>
                  );
                })}
              </div>
              ) : (
              <div role="group" aria-labelledby="q" className={`${c.group} grid ${c.rowGap} ${compact ? (question.choices.length > 4 ? "grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-1") : ""}`}>
                {question.choices.map((ch, i) => {
                  const on = answers[key] === ch.value;
                  return (
                    <button
                      key={ch.value} type="button" aria-pressed={on} onClick={() => choose(ch.value)}
                      className={`flex w-full items-center gap-3 rounded-xl border-2 ${compact && question.choices.length > 4 ? "whitespace-nowrap px-3 text-[14px] sm:px-4 sm:text-base" : "px-4"} text-left font-semibold ${c.row} transition-colors ${on ? "border-ink bg-sky-soft" : "border-transparent bg-[#f2f6f8] hover:border-line"}`}
                    >
                      <span className={`${c.badge} h-7 w-7 shrink-0 place-items-center rounded-md border text-sm font-bold ${on ? "border-ink bg-ink text-white" : "border-line bg-white text-mist"}`}>{KEYS[i]}</span>
                      {ch.label}
                    </button>
                  );
                })}
              </div>
              )}
            </>
          )}

          {key === "contact" && (
            <>
              <h2 ref={headingRef} tabIndex={-1} id="q" className={`display mt-2 outline-none ${c.h}`}>Where should we send your estimate?</h2>
              <p className={`${c.help} text-mist`}>You’ll see it right away, and we’ll text you a link to come back to it.</p>
              <div className={`grid grid-cols-2 gap-x-5 ${compact ? "mt-4 gap-y-4 sm:mt-2 sm:gap-y-2 lg:mt-6 lg:gap-y-6" : "mt-6 gap-y-5"}`}>
                <label className="block"><span className={`${compact ? "text-sm sm:text-xs lg:text-sm" : "text-sm"} font-semibold text-mist`}>First name</span>
                  <input className={input} autoComplete="given-name" placeholder="Sam" value={answers.fname || ""} onChange={(e) => set("fname", e.target.value)} /></label>
                <label className="block"><span className={`${compact ? "text-sm sm:text-xs lg:text-sm" : "text-sm"} font-semibold text-mist`}>Last name</span>
                  <input className={input} autoComplete="family-name" placeholder="Jones" value={answers.lname || ""} onChange={(e) => set("lname", e.target.value)} /></label>
                <label className="col-span-2 block"><span className={`${compact ? "text-sm sm:text-xs lg:text-sm" : "text-sm"} font-semibold text-mist`}>Mobile phone</span>
                  <input className={input} type="tel" inputMode="tel" autoComplete="tel" placeholder="(801) 555-0123" value={answers.phone || ""}
                    onChange={(e) => {
                      const d = e.target.value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);
                      set("phone", d.length > 6 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : d.length > 3 ? `(${d.slice(0, 3)}) ${d.slice(3)}` : d);
                    }} /></label>
                <label className="col-span-2 block"><span className={`${compact ? "text-sm sm:text-xs lg:text-sm" : "text-sm"} font-semibold text-mist`}>Email</span>
                  <input className={input} type="email" inputMode="email" autoComplete="email" placeholder="sam@example.com" value={answers.email || ""} onChange={(e) => set("email", e.target.value)} /></label>
              </div>
              <label className={`flex items-start gap-3 text-mist ${compact ? "mt-5 text-sm leading-snug sm:mt-3 lg:mt-6" : "mt-6 text-sm leading-relaxed"}`}>
                <input type="checkbox" className="mt-0.5 h-5 w-5 shrink-0 accent-ink" checked={answers.consent === "true"} onChange={(e) => set("consent", e.target.checked ? "true" : "")} />
                <span>I agree to receive texts from {site.name} about my estimate. Message and data rates may apply. Reply STOP to opt out. See our <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.</span>
              </label>
            </>
          )}

          <p role="alert" className={`${c.err} font-semibold text-alarm-strong`}>{error}</p>
          {fix && (
            <button type="button" onClick={() => { set("email", fix); setFix(null); setError(""); }} className="mt-1 rounded-lg border-2 border-ink px-4 py-2 font-semibold">
              Use {fix}
            </button>
          )}

          <div className={`${c.btns} flex gap-3`}>
            <button
              type="button" aria-label="Back" disabled={step === 0} onClick={() => { setError(""); setFix(null); setStep((s) => s - 1); }}
              className="grid w-16 place-items-center rounded-full border-2 border-ink bg-white disabled:opacity-30"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M11.5 3 5.5 9l6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="submit" className={`flex-1 rounded-full bg-alarm-strong px-6 ${c.ok} text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110`}>
              {key === "contact" ? "See my estimate" : "OK"}
            </button>
          </div>
          <p className={`mt-3 ${c.enter} text-center text-sm text-mist`}>or press <b>Enter ↵</b></p>
        </form>
      )}

      {status === "sending" && (
        <div className="mt-8 flex min-h-[22rem] flex-col justify-center" aria-live="polite">
          <span className="h-9 w-9 animate-spin rounded-full border-4 border-line border-t-alarm-strong" aria-hidden="true" />
          <h2 className="display mt-5 text-3xl">Building your estimate…</h2>
        </div>
      )}

      {status === "done" && result && (
        <div className="step-in mt-8 min-h-[22rem]" aria-live="polite">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#1e8e4f] text-white"><CheckIcon className="h-6 w-6" /></span>
          <h2 ref={headingRef} tabIndex={-1} className="display mt-5 text-3xl outline-none sm:text-4xl">
            {result.instant ? `${answers.fname.trim()}, your estimate is ready.` : `Thanks, ${answers.fname.trim()}. We’ll be in touch.`}
          </h2>
          <p className="mt-3 text-lg text-mist">
            {result.instant
              ? "Tap below to see your personalized estimate. We’ll follow up by text if we have any questions."
              : result.gas
                ? "Homes your size often need two systems, so we price them in person. We’ll text you to set up a free visit, or book one now."
                : "Homes with a heat pump or boiler need a quick look before we can price a new system. We’ll text you to set up a free visit, or book one now."}
          </p>
          {saveFailed && (
            <p className="mt-4 rounded-xl bg-alarm-strong/10 p-4 font-semibold text-alarm-strong">
              We couldn’t save your answers. Please call or text <a href={site.phoneHref} className="underline">{site.phone}</a> and we’ll get you taken care of.
            </p>
          )}
          <div className="mt-7 flex flex-wrap gap-3">
            {result.instant ? (
              <Link href={result.link} className="rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
                See my estimate →
              </Link>
            ) : (
              <a href={site.bookLinks.estimate} className="rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
                Book a free visit →
              </a>
            )}
            <a href={site.phoneHref} className="flex items-center gap-2 rounded-full border-2 border-ink px-6 py-4 text-lg font-bold">
              <PhoneIcon className="h-5 w-5" /> {site.phone}
            </a>
          </div>
        </div>
      )}
    </div>
    {showBelow && below}
    </>
  );
}
