"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { questions, SERVICE_AREA, estimateResult, emailFix, EMAIL_RE, type Answers } from "@/lib/estimator";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon } from "@/components/icons";

// One question per screen: ZIP, eight choice questions, then contact details.
const STEPS = ["zip", ...questions.map((q) => q.key), "contact"];
const KEYS = "ABCDEFGH";

type Status = "asking" | "sending" | "done";

export function EstimateForm() {
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
    const started = Date.now();
    let ok = false;
    try {
      const r = await fetch("/api/instant-estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...a, email: a.email.trim(), pageUri: location.href }),
      });
      ok = r.ok;
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
  const input = "w-full border-0 border-b-2 border-line bg-transparent px-0 py-2 text-2xl font-medium text-ink outline-none placeholder:text-mist/50 focus:border-ink";

  return (
    <div ref={cardRef} className="scroll-mt-28 rounded-3xl bg-white p-6 shadow-[0_6px_0_#14283a] ring-2 ring-ink sm:p-10">
      {/* progress */}
      <div className="flex gap-1.5" aria-hidden="true">
        {STEPS.map((s, i) => (
          <span key={s} className={`h-1.5 flex-1 rounded-full transition-colors ${status !== "asking" || i < step ? "bg-ink" : i === step ? "bg-alarm-strong" : "bg-line"}`} />
        ))}
      </div>

      {status === "asking" && (
        <form key={key} noValidate onSubmit={(e) => { e.preventDefault(); next(); }} className="step-in mt-8 min-h-[22rem]">
          <p className="text-sm font-bold tracking-wide text-alarm-strong">
            Question {step + 1} of {STEPS.length}
          </p>

          {key === "zip" && (
            <>
              <h2 ref={headingRef} tabIndex={-1} id="q" className="display mt-2 text-3xl outline-none sm:text-4xl">What’s your ZIP code?</h2>
              <p className="mt-3 text-lg text-mist">We use this to check that you’re in our service area.</p>
              <input
                aria-labelledby="q" className={`${input} mt-8`} inputMode="numeric" autoComplete="postal-code" maxLength={5} placeholder="84003"
                value={answers.zip || ""} onChange={(e) => set("zip", e.target.value.replace(/\D/g, ""))} autoFocus={step > 0}
              />
            </>
          )}

          {question && (
            <>
              <h2 ref={headingRef} tabIndex={-1} id="q" className="display mt-2 text-3xl outline-none sm:text-4xl">{question.title}</h2>
              <p className="mt-3 text-lg text-mist">{question.help}</p>
              <div role="group" aria-labelledby="q" className="mt-7 grid gap-2.5">
                {question.choices.map((c, i) => {
                  const on = answers[key] === c.value;
                  return (
                    <button
                      key={c.value} type="button" aria-pressed={on} onClick={() => choose(c.value)}
                      className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-left text-lg font-semibold transition-colors ${on ? "border-ink bg-sky-soft" : "border-transparent bg-[#f2f6f8] hover:border-line"}`}
                    >
                      <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-md border text-sm font-bold ${on ? "border-ink bg-ink text-white" : "border-line bg-white text-mist"}`}>{KEYS[i]}</span>
                      {c.label}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {key === "contact" && (
            <>
              <h2 ref={headingRef} tabIndex={-1} id="q" className="display mt-2 text-3xl outline-none sm:text-4xl">Where should we send your estimate?</h2>
              <p className="mt-3 text-lg text-mist">You’ll see it right away, and we’ll text you a link to come back to it.</p>
              <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5">
                <label className="block"><span className="text-sm font-semibold text-mist">First name</span>
                  <input className={input} autoComplete="given-name" placeholder="Sam" value={answers.fname || ""} onChange={(e) => set("fname", e.target.value)} /></label>
                <label className="block"><span className="text-sm font-semibold text-mist">Last name</span>
                  <input className={input} autoComplete="family-name" placeholder="Jones" value={answers.lname || ""} onChange={(e) => set("lname", e.target.value)} /></label>
                <label className="col-span-2 block"><span className="text-sm font-semibold text-mist">Mobile phone</span>
                  <input className={input} type="tel" inputMode="tel" autoComplete="tel" placeholder="(801) 555-0123" value={answers.phone || ""}
                    onChange={(e) => {
                      const d = e.target.value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);
                      set("phone", d.length > 6 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : d.length > 3 ? `(${d.slice(0, 3)}) ${d.slice(3)}` : d);
                    }} /></label>
                <label className="col-span-2 block"><span className="text-sm font-semibold text-mist">Email</span>
                  <input className={input} type="email" inputMode="email" autoComplete="email" placeholder="sam@example.com" value={answers.email || ""} onChange={(e) => set("email", e.target.value)} /></label>
              </div>
              <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-mist">
                <input type="checkbox" className="mt-0.5 h-5 w-5 shrink-0 accent-ink" checked={answers.consent === "true"} onChange={(e) => set("consent", e.target.checked ? "true" : "")} />
                <span>I agree to receive texts from {site.name} about my estimate. Message and data rates may apply. Reply STOP to opt out. See our <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.</span>
              </label>
            </>
          )}

          <p role="alert" className="mt-4 min-h-6 font-semibold text-alarm-strong">{error}</p>
          {fix && (
            <button type="button" onClick={() => { set("email", fix); setFix(null); setError(""); }} className="mt-1 rounded-lg border-2 border-ink px-4 py-2 font-semibold">
              Use {fix}
            </button>
          )}

          <div className="mt-6 flex gap-3">
            <button
              type="button" aria-label="Back" disabled={step === 0} onClick={() => { setError(""); setFix(null); setStep((s) => s - 1); }}
              className="grid w-16 place-items-center rounded-full border-2 border-ink bg-white disabled:opacity-30"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M11.5 3 5.5 9l6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="submit" className="flex-1 rounded-full bg-alarm-strong px-6 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
              {key === "contact" ? "See my estimate" : "OK"}
            </button>
          </div>
          <p className="mt-3 hidden text-center text-sm text-mist [@media(pointer:fine)]:block">or press <b>Enter ↵</b></p>
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
              <a href={site.bookingUrl} target="_blank" rel="noopener" className="rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
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
  );
}
