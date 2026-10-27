"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon } from "@/components/icons";
import type { Option, Proposal } from "@/lib/proposal";

// Slice by FNBO Bank: 11.99% APR, up to 20 years. The example uses the longest term.
const SLICE_APR = 11.99, SLICE_MONTHS = 240;
const monthly = (cents: number) => {
  const r = SLICE_APR / 100 / 12;
  return Math.round(((cents / 100) * r) / (1 - Math.pow(1 + r, -SLICE_MONTHS)));
};
const usd = (c: number) => (c / 100).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: c % 100 ? 2 : 0 });
const rebateTotal = (o: Option) => o.rebates.reduce((a, r) => a + r.amount, 0);
const subtotal = (o: Option) => o.equipment.reduce((a, l) => a + l.amount, 0) + o.extras.reduce((a, l) => a + l.amount * l.qty, 0);
const outdoorUnits = (o: Option) => o.equipment.filter((l) => /condenser|heat pump|\bAC\b/i.test(l.name));

function send(body: object) {
  const s = JSON.stringify(body);
  if (!navigator.sendBeacon?.("/api/proposal-event", s)) fetch("/api/proposal-event", { method: "POST", body: s, keepalive: true }).catch(() => {});
}

export function ProposalView({ p }: { p: Proposal }) {
  const [cur, setCur] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const [chosen, setChosen] = useState<string | null>(null);
  const o = p.options[cur];

  // One view per proposal per browser tab. It runs in the browser, so link previews don't count.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(`eh_view_${p.id}`)) return;
      sessionStorage.setItem(`eh_view_${p.id}`, "1");
    } catch {}
    send({ id: p.id, type: "view" });
  }, [p.id]);

  function pick(i: number) {
    setCur(i);
    setConfirming(false);
  }
  function approve() {
    send({ id: p.id, type: "choose", option: o.id });
    setChosen(o.id);
    setConfirming(false);
  }

  const smsBody = encodeURIComponent(`Question about proposal #${p.number}`);
  const card = "rounded-2xl border-2 p-4 text-left transition-colors";

  return (
    <>
      {p.options.length > 1 && (
        <section aria-labelledby="pick">
          <p id="pick" className="text-sm font-extrabold uppercase tracking-wider text-mist">Your options</p>
          <div role="group" aria-label="Options" className="mt-3 grid gap-3 sm:grid-cols-2">
            {p.options.map((x, i) => (
              <button key={x.id} type="button" aria-pressed={i === cur} onClick={() => pick(i)}
                className={`${card} ${i === cur ? "border-ink bg-white shadow-[0_5px_0_#14283a]" : "border-transparent bg-[#f2f6f8] hover:border-line"}`}>
                <span className="block text-lg font-extrabold">{x.name}</span>
                <span className="display block text-3xl tabular-nums">{usd(x.total)}</span>
                <span className="block text-sm text-mist tabular-nums">
                  or about ${monthly(x.total)}/mo{rebateTotal(x) ? ` · ${usd(rebateTotal(x))} in rebates` : ""}
                </span>
                {x.status === "approved" && <span className="mt-2 inline-block rounded-full bg-[#1e8e4f] px-3 py-0.5 text-sm font-bold text-white">Approved</span>}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10 grid gap-8" aria-live="polite">
        <div>
          {p.options.length > 1 && <p className="text-sm font-extrabold uppercase tracking-wider text-mist">Option {cur + 1} of {p.options.length}</p>}
          <h2 className="display mt-1 text-3xl sm:text-4xl">{o.name}</h2>
        </div>

        <Group title="Equipment">
          {o.equipment.map((l, i) => (
            <Row key={i} name={l.name} right={usd(l.amount)}>
              {(l.specs.length > 0 || l.warranty) && (
                <span className="col-span-2 flex flex-wrap gap-1.5">
                  {l.specs.map((s) => <span key={s} className="rounded-full bg-sky-soft px-2.5 py-0.5 text-sm font-bold">{s}</span>)}
                  {l.warranty && <span className="rounded-full bg-[#e9f7ef] px-2.5 py-0.5 text-sm font-bold text-[#14532d]">Warranty: {l.warranty}</span>}
                </span>
              )}
              {l.desc && <span className="col-span-2 text-mist">{l.desc}</span>}
            </Row>
          ))}
        </Group>

        {o.extras.length > 0 && (
          <Group title="Installation and add-ons">
            {o.extras.map((l, i) => (
              <Row key={i} name={`${l.name}${l.qty > 1 ? ` ×${l.qty}` : ""}`} right={usd(l.amount * l.qty)}>
                {l.desc && <span className="col-span-2 text-mist">{l.desc}</span>}
              </Row>
            ))}
          </Group>
        )}

        {o.included.length > 0 && (
          <Group title="Included at no charge">
            {o.included.map((l) => (
              <Row key={l.name} name={l.name} right="Included" green>
                {l.desc && <span className="col-span-2 text-mist">{l.desc}</span>}
              </Row>
            ))}
          </Group>
        )}

        <Group title="System details">
          <div className="grid gap-2.5 py-3 sm:grid-cols-2">
            {o.ahri.map((a) => <Fact key={a} k="AHRI certificate" v={`#${a}`} />)}
            {outdoorUnits(o).length > 0 && o.ahri.length === 0 && <Fact k="AHRI certificate" v="Ask Andrew for the AHRI match" />}
            <Fact k="Load calculation" v="A Manual J load calculation was done for your home. Ask Andrew for the report." />
            <Fact k="Permit" v="We pull the permit and schedule the final inspection." />
          </div>
        </Group>

        <div className="grid gap-3 rounded-3xl bg-ink p-6 text-white">
          <div className="flex justify-between gap-3 text-[#cfe9f2]"><span>Equipment and installation</span><span className="tabular-nums">{usd(subtotal(o))}</span></div>
          {o.rebates.map((r, i) => (
            <div key={i} className="flex justify-between gap-3 text-[#cfe9f2]"><span>{r.name}</span><span className="tabular-nums text-[#8ff0b5]">−{usd(r.amount)}</span></div>
          ))}
          {o.tax > 0 && <div className="flex justify-between gap-3 text-[#cfe9f2]"><span>Tax</span><span className="tabular-nums">{usd(o.tax)}</span></div>}
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-[#2f4a61] pt-3">
            <span className="font-bold">Your price</span>
            <span className="display text-4xl tabular-nums">{usd(o.total)}</span>
          </div>
          <div className="rounded-xl bg-[#1d3850] p-3.5">
            <b className="block text-xl tabular-nums">About ${monthly(o.total)}/month</b>
            <span className="block text-sm leading-snug text-[#cfe9f2]">
              Example with {site.financingPartner}: {usd(o.total)} financed at {SLICE_APR}% APR for {SLICE_MONTHS} months (20 years), {SLICE_MONTHS} payments of about ${monthly(o.total)}. Subject to credit approval.
            </span>
          </div>

          {o.status === "approved" || chosen === o.id ? (
            <div className="flex gap-3 rounded-xl bg-white p-4 text-ink">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#1e8e4f] text-white"><CheckIcon className="h-5 w-5" /></span>
              <span>
                <b className="block">{o.status === "approved" ? "You approved this option." : `Thanks${p.firstName ? `, ${p.firstName}` : ""}. We got your choice.`}</b>
                {o.status !== "approved" && <>Andrew will reach out to finalize the paperwork and set your install date. Questions? Call or text <a href={site.phoneHref} className="font-bold underline">{site.phone}</a>.</>}
              </span>
            </div>
          ) : confirming ? (
            <div className="grid gap-3 rounded-xl bg-white p-4 text-ink">
              <b>Approve {o.name} for {usd(o.total)}?</b>
              <span className="text-mist">We&rsquo;ll let Andrew know. He&rsquo;ll send the final agreement to sign and set your install date. Nothing is charged today.</span>
              <div className="grid gap-2 sm:grid-cols-2">
                <button type="button" onClick={approve} className="rounded-full bg-alarm-strong px-5 py-3.5 text-lg font-bold text-white shadow-[0_4px_0_#8a001c]">Yes, approve it</button>
                <button type="button" onClick={() => setConfirming(false)} className="rounded-full border-2 border-ink px-5 py-3.5 text-lg font-bold">Not yet</button>
              </div>
            </div>
          ) : (
            <div className="grid gap-2.5 sm:grid-cols-2">
              <button type="button" onClick={() => setConfirming(true)} className="rounded-full bg-alarm-strong px-5 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
                Approve this option
              </button>
              <a href={`sms:+18013960019?&body=${smsBody}`} className="flex items-center justify-center gap-2 rounded-full border-2 border-[#cfe9f2] px-5 py-4 text-lg font-bold">
                <PhoneIcon className="h-5 w-5" /> Ask Andrew a question
              </a>
            </div>
          )}
        </div>
      </section>

      {p.options.length > 1 && <Compare options={p.options} />}
    </>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-extrabold uppercase tracking-wider text-mist">{title}</h3>
      <ul className="mt-1 divide-y divide-line border-y border-line">{children}</ul>
    </div>
  );
}

function Row({ name, right, green, children }: { name: string; right: string; green?: boolean; children?: React.ReactNode }) {
  return (
    <li className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1.5 py-3.5">
      <span className="font-bold">{name}</span>
      <span className={`font-bold tabular-nums ${green ? "text-[#1e8e4f]" : ""}`}>{right}</span>
      {children}
    </li>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border-2 border-line px-4 py-3">
      <span className="block text-xs font-extrabold uppercase tracking-wider text-mist">{k}</span>
      <span className="font-bold">{v}</span>
    </div>
  );
}

function Compare({ options }: { options: Option[] }) {
  const spec = (o: Option, re: RegExp) => o.equipment.flatMap((l) => l.specs).map((s) => s.match(re)?.[1]).filter(Boolean).join(" + ") || "—";
  const rows: [string, (o: Option) => React.ReactNode][] = [
    ["Your price", (o) => <b className="tabular-nums">{usd(o.total)}</b>],
    ["Monthly (example)", (o) => <span className="tabular-nums">~${monthly(o.total)}/mo</span>],
    ["Rebates", (o) => <span className="tabular-nums">{usd(rebateTotal(o))}</span>],
    ["Outdoor units", (o) => outdoorUnits(o).map((l) => <span key={l.name} className="block">{l.name}</span>)],
    ["SEER2", (o) => spec(o, /SEER2:\s*(.+)/)],
    ["Heat at 5°F", (o) => spec(o, /5°F:\s*(.+)/)],
    ["AHRI", (o) => o.ahri.length ? o.ahri.map((a) => <span key={a} className="block tabular-nums">#{a}</span>) : "—"],
  ];
  return (
    <section className="mt-12" aria-labelledby="cmp">
      <p id="cmp" className="text-sm font-extrabold uppercase tracking-wider text-mist">Side by side</p>
      <div className="mt-3 overflow-x-auto rounded-2xl border-2 border-line">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead className="bg-[#f2f6f8]"><tr><th className="p-3" />{options.map((o) => <th key={o.id} scope="col" className="p-3">{o.name}</th>)}</tr></thead>
          <tbody>
            {rows.map(([k, f]) => (
              <tr key={k} className="border-t border-line align-top">
                <th scope="row" className="p-3 font-bold text-mist">{k}</th>
                {options.map((o) => <td key={o.id} className="p-3">{f(o)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
