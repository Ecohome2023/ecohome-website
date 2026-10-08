"use client";

import { useEffect, useRef, useState } from "react";
import { OPTIONS, FIN, monthly, usd, type EstimateType, type Tons } from "@/lib/estimator";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon } from "@/components/icons";

function Tip({ id, title, body, label }: { id: string; title: string; body: React.ReactNode; label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: Event) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("click", close);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("click", close); document.removeEventListener("keydown", esc); };
  }, [open]);
  return (
    <span ref={ref} className="relative inline-block align-middle">
      <button
        type="button" aria-expanded={open} aria-controls={id} aria-label={label} onClick={() => setOpen((o) => !o)}
        className="grid h-6 w-6 place-items-center rounded-full border-2 border-ink text-xs font-extrabold leading-none hover:bg-sky-soft"
      >?</button>
      {open && (
        <span id={id} role="note" className="absolute right-0 top-8 z-20 block w-72 rounded-xl bg-ink p-4 text-left text-sm font-normal leading-relaxed text-white shadow-xl">
          <b className="mb-1 block text-sky">{title}</b>
          {body}
        </span>
      )}
    </span>
  );
}

const benefits = [
  { t: "Permit pulled", d: "Not every HVAC company pulls permits. We do on every job.", r: "Included" },
  { t: "Rebate filing", d: "We file your Rocky Mountain Power and Enbridge rebates for you", r: "Included" },
  { t: "Old equipment hauled away", d: "And we leave your home cleaner than we found it", r: "Included" },
  { t: "Smile Guarantee", d: "One year on our workmanship. If anything goes wrong, we fix it free.", r: "Included" },
];

export function EstimateCard({ type, tons }: { type: EstimateType; tons: Tons }) {
  const o = OPTIONS[type];
  const max = o.levels.length - 1;
  const [k, setK] = useState(0);
  const level = o.levels[k];
  const price = o.price(tons, k);
  const p = (k / max) * 100;

  return (
    <div className="rounded-3xl bg-white p-6 ring-2 ring-ink shadow-[0_6px_0_#14283a] sm:p-8">
      <p className="text-sm font-bold uppercase tracking-wider text-mist">Your estimate</p>
      <div className="mt-1 flex flex-wrap items-baseline gap-x-2">
        <span className="display text-5xl tabular-nums sm:text-6xl">{usd(price)}</span>
        <span className="font-semibold text-mist">after incentives</span>
      </div>
      <p className="mt-2 font-semibold">
        or about <span className="tabular-nums">{usd(monthly(price))}</span>/mo
        <span className="font-normal text-mist"> · {FIN.years} yr · {FIN.apr}% APR · estimate</span>
      </p>
      <p className="mt-1 text-sm text-mist">Range for your home: {usd(o.price(tons, 0))} to {usd(o.price(tons, max))}</p>

      <section aria-labelledby="eff-h" className="mt-7 rounded-2xl bg-sky-soft p-5">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <h3 id="eff-h" className="text-lg font-extrabold">Efficiency level</h3>
            <p className="text-sm text-mist">{o.effP}</p>
          </div>
          <Tip id="tip-eff" label={o.tips.eff.title} title={o.tips.eff.title} body={o.tips.eff.body} />
        </div>
        <input
          type="range" min={0} max={max} step={1} value={k} onChange={(e) => setK(+e.target.value)}
          aria-label="Efficiency level" aria-valuetext={`${level.label}, ${usd(price)}`}
          className="estimate-range mt-5 w-full" style={{ "--p": `${p}%` } as React.CSSProperties}
        />
        <div className="mt-1 flex justify-between text-xs font-bold tracking-wider text-mist"><span>STANDARD</span><span>MOST EFFICIENT</span></div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="font-extrabold">{level.label}</p>
            {type !== "furnace" && <p className="text-sm text-mist"><b className="tabular-nums text-ink">{level.big}</b> {o.bigLabel.toLowerCase()}</p>}
          </div>
          <Tip id="tip-save" label={o.tips.save.title} title={o.tips.save.title} body={o.tips.save.body} />
        </div>
      </section>

      <section aria-label="Included with your install" className="mt-7">
        <p className="text-sm font-bold uppercase tracking-wider text-mist">Included with your install</p>
        <ul className="mt-3 divide-y divide-line">
          {benefits.map((b) => (
            <li key={b.t} className="flex items-start justify-between gap-4 py-3">
              <span className="flex gap-2.5"><CheckIcon className="mt-1 h-4 w-4 shrink-0 text-teal" /><span><b className="block">{b.t}</b><span className="text-sm text-mist">{b.d}</span></span></span>
              <span className="shrink-0 text-sm font-bold text-teal">{b.r}</span>
            </li>
          ))}
          <li className="flex items-start justify-between gap-4 py-3">
            <span className="flex gap-2.5"><CheckIcon className="mt-1 h-4 w-4 shrink-0 text-teal" /><span>
              <b className="flex items-center gap-2">Essential Care Plan
                <Tip id="tip-care" label="What the Essential Care Plan includes" title="Essential Care Plan" body={
                  <>Your first year is on us. It includes:
                    <ul className="mt-2 list-disc space-y-1 pl-4">
                      <li>Two maintenance visits a year</li><li>No dispatch fees</li><li>10% off repairs</li>
                      <li>Priority scheduling during heat waves and cold snaps</li><li>$250 a year toward new equipment</li>
                    </ul></>
                } /></b>
              <span className="text-sm text-mist">Two tune-ups a year, priority scheduling and 10% off repairs</span></span></span>
            <span className="shrink-0 text-sm font-bold text-teal">1 year free</span>
          </li>
        </ul>
      </section>

      <div className="mt-7 rounded-2xl bg-ink p-6 text-white">
        <h3 className="display text-2xl">Lock in your price</h3>
        <p className="mt-2 text-white/80">Book a free in-home visit. No obligation. We confirm sizing and exactly which rebates you qualify for.</p>
        <a href={site.bookingUrl} target="_blank" rel="noopener" className="mt-5 block rounded-full bg-alarm-strong px-6 py-4 text-center text-lg font-bold text-white shadow-[0_4px_0_#7a0018] hover:brightness-110">
          Book my free visit
        </a>
        <a href={site.phoneHref} className="mt-3 flex items-center justify-center gap-2 font-bold text-sky hover:underline">
          <PhoneIcon className="h-4 w-4" /> or call {site.phone}
        </a>
      </div>
    </div>
  );
}
