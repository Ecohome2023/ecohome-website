import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { reviews } from "@/lib/content";
import { OPTIONS, TON_SIZES, FIN, cleanName, type EstimateType, type Tons } from "@/lib/estimator";
import { EstimateCard } from "@/components/estimator/EstimateCard";
import { MobileBookBar } from "@/components/estimator/MobileBookBar";
import { JobPromises } from "@/components/JobPromises";
import { CheckIcon, PhoneIcon, Stars } from "@/components/icons";

// Personal page: never indexed, never in the sitemap.
export const metadata: Metadata = {
  title: "Your Estimate",
  robots: { index: false, follow: false },
};

const visitChecks = [
  "Look at your furnace, AC and ductwork",
  "Run a load calculation so the system is sized right",
  "Check which Rocky Mountain Power and Enbridge rebates you qualify for",
  "Build options to fit your budget and go over payment plans",
];

const process = [
  { t: "Size & inspect", d: "Book a free in-home visit. A comfort advisor runs a load calculation and checks your current system and ducts." },
  { t: "Plan & budget", d: "We confirm sizing, apply your rebates, and help you pick the payment plan that fits." },
  { t: "Install & enjoy", d: "Pick your install date. Most installs are done in one day, and we handle the rebate paperwork." },
];

const faqs = [
  { q: "Why a heat pump with a gas furnace?", a: "The heat pump cools in summer and heats on most winter days using electricity, more efficiently than a furnace. On the coldest Utah nights the gas furnace takes over, so you’re never short on heat. It’s also the setup that qualifies for the biggest rebates." },
  { q: "Is the price on this page final?", a: "It’s an estimate. Your exact price is set at the free in-home visit, after we measure your home and check your current system and ducts." },
  { q: "What rebates can I get?", a: "On every heat pump we install, we guarantee $1,450 from Rocky Mountain Power Wattsmart, plus $700 to $1,000 from Enbridge ThermWise when it’s paired with a gas furnace. We confirm what you qualify for at your visit and file the paperwork for you." },
  { q: "Do you offer financing?", a: `Yes. The monthly payment on this page is an estimate based on a ${FIN.years}-year plan. We also offer $0 down and 0% interest for 12 months through ${site.financingPartner}. Financing is subject to credit approval, and we’ll go over your options at your visit.` },
  { q: "How fast can you install?", a: "Often as soon as the next day after your free visit. Most installs take about a day, so your new system is usually running the same day." },
  { q: "Will I need new ductwork?", a: "Most replacements use your existing ducts. If we find crushed, leaking or undersized ducts at your visit, we’ll show you and include options to fix them." },
  { q: "Do I need a permit?", a: "Yes, and we take care of it. Not every HVAC company pulls permits. We do on every job, and it’s included in your price." },
];

export default async function EstimatePage({ searchParams }: PageProps<"/instant-pricing/estimate">) {
  const sp = await searchParams;
  const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) || "";
  const name = cleanName(one(sp.fname));
  const tons: Tons = (TON_SIZES as readonly string[]).includes(one(sp.tons)) ? (one(sp.tons) as Tons) : "3";
  const type: EstimateType = one(sp.type) in OPTIONS ? (one(sp.type) as EstimateType) : "system";
  const setup = one(sp.setup);
  const o = OPTIONS[type];

  return (
    <>
      <section className="bg-sky-soft">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 md:pt-14">
          <p className="wrap-type text-2xl text-alarm-strong" style={{ textShadow: "none" }}>Your instant estimate</p>
          <h1 className="display mt-2 max-w-4xl text-4xl sm:text-5xl">
            {name ? `${name}, here’s the ${o.noun} we recommend` : `Here’s the ${o.noun} we recommend`}
          </h1>
          <p className="mt-3 text-lg text-ink/80">Slide to compare efficiency levels, then book a free visit to lock in your price.</p>

          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_1.05fr]">
            <article className="overflow-hidden rounded-3xl bg-white ring-1 ring-line">
              <div className={`relative aspect-[4/3] ${o.img.contain ? "bg-white" : ""}`}>
                <Image src={o.img.src} alt={o.img.alt} fill preload sizes="(min-width: 1024px) 600px, 100vw" className={o.img.contain ? "object-contain p-6" : "object-cover"} />
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="flex flex-wrap items-center gap-3 text-2xl font-extrabold">
                  {o.name}
                  <span className="rounded-full bg-sky px-3 py-1 text-base font-bold tabular-nums text-ink">{o.size(tons)}</span>
                </h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {o.specs.map((s) => (
                    <li key={s} className="flex gap-2"><CheckIcon className="mt-1 h-4 w-4 shrink-0 text-teal" />{s}</li>
                  ))}
                </ul>
                <p className="mt-5 rounded-xl bg-sky-soft p-4 font-semibold">{o.fit[setup] || o.fit.not_sure}</p>
                <p className="mt-5 flex items-center gap-2 font-semibold">
                  <svg width="22" height="18" viewBox="0 0 20 16" aria-hidden="true"><path d="M1 2h11v9H1zM12 5h4l3 3v3h-7z" fill="var(--color-alarm-strong)" /><circle cx="5" cy="13" r="2" fill="var(--color-alarm-strong)" /><circle cx="15" cy="13" r="2" fill="var(--color-alarm-strong)" /></svg>
                  Installed as soon as tomorrow
                </p>
              </div>
            </article>

            <div id="estimate-card">
              <EstimateCard type={type} tons={tons} />
            </div>
          </div>

          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-mist">
            Due to many variables, we can’t give an exact price until we measure and inspect your home. Prices are shown after utility rebates, and we confirm your exact rebates at your visit.
            Monthly payments are estimates for illustration only, based on the estimated price at {FIN.apr}% APR over {FIN.years} years with no money down. This is not an offer of credit.
            Financing is subject to credit approval by a third-party lender; your actual rate, term and payment may differ. Energy savings compare cooling efficiency with a 10 SEER unit; actual savings depend on usage, rates and weather.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/images/furnace-tech-uniform.jpg" alt="Eco Home technician in uniform" fill sizes="(min-width: 768px) 600px, 100vw" className="object-cover" />
          </div>
          <div>
            <span className="rounded-full bg-alarm-strong px-3 py-1 text-sm font-bold text-white">FREE</span>
            <h2 className="display mt-3 text-3xl sm:text-4xl">In-home estimate visit</h2>
            <p className="mt-3 text-lg text-mist">To lock in your price and make sure everything is right for your home, a comfort advisor will:</p>
            <ul className="mt-5 space-y-3">
              {visitChecks.map((c) => (
                <li key={c} className="flex gap-3 font-semibold"><CheckIcon className="mt-1 h-5 w-5 shrink-0 text-alarm-strong" />{c}</li>
              ))}
            </ul>
            <a href={site.bookingUrl} target="_blank" rel="noopener" className="mt-7 inline-block rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
              Book my free visit
            </a>
          </div>
        </div>

        <h2 className="display mt-20 text-3xl sm:text-4xl">Simple 3-step process</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {process.map((s, i) => (
            <li key={s.t} className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <span className="display grid h-10 w-10 place-items-center rounded-full bg-sky text-lg">{i + 1}</span>
              <h3 className="mt-4 text-xl font-extrabold">{s.t}</h3>
              <p className="mt-2 text-mist">{s.d}</p>
            </li>
          ))}
        </ol>

        <JobPromises />
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="display text-3xl sm:text-4xl">What our customers say</h2>
          <a href={site.googleProfileUrl} className="mt-3 inline-flex items-center gap-2 font-semibold hover:underline">
            <Stars /> {site.rating.value} from {site.rating.count} Google reviews
          </a>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <li key={r.name} className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/15">
                <Stars />
                <p className="mt-3 text-lg">“{r.text}”</p>
                <p className="mt-4 font-bold text-sky">{r.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="display text-3xl sm:text-4xl">Questions about your estimate</h2>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold">
                {f.q}<span className="text-2xl text-alarm-strong transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-mist">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-sky">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="display text-3xl sm:text-4xl">Ready to get comfortable?</h2>
            <p className="mt-2 text-lg">Book your free in-home visit, or <Link href="/heat-pumps" className="font-semibold underline">learn more about heat pumps</Link>.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={site.bookingUrl} target="_blank" rel="noopener" className="rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#7a0018] hover:brightness-110">Book my free visit</a>
            <a href={site.phoneHref} className="flex items-center gap-2 rounded-full bg-white px-6 py-4 text-lg font-bold ring-2 ring-ink"><PhoneIcon className="h-5 w-5" />{site.phone}</a>
          </div>
        </div>
      </section>

      <MobileBookBar watch="estimate-card" />
    </>
  );
}
