import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { googleReviews } from "@/lib/reviews";
import { EstimateForm } from "@/components/estimator/EstimateForm";
import { CheckIcon, PhoneIcon, Stars } from "@/components/icons";

// Landing page for paid ads (A/B test against /instant-pricing). No site header
// or footer (see lib/landing), not indexed, not in the sitemap. Everything on
// the page points back to the pricing form.
export const metadata: Metadata = {
  title: "See Your Heating & Cooling Price in 2 Minutes",
  description: "Answer 10 quick questions and see your price for a new heat pump, furnace or dual-fuel system, after rebates. No obligation.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/instant-pricing" },
};

const chips = [
  "$2,150+ in rebates, guaranteed",
  "Prices shown after rebates",
  "No obligation",
];

const steps = [
  { n: "1", title: "Answer 10 quick questions", body: "Your home’s size, age and what you have now. About two minutes, all taps." },
  { n: "2", title: "See your price on the spot", body: "A price sized to your home, with rebates already taken off, plus monthly payment options." },
  { n: "3", title: "Book a free visit if you like it", body: "We confirm the details in person. Nothing to sign until you’re ready." },
];

const results = [
  { stat: "$340 → $195", label: "Summer electric bill", who: "Mark T., Salt Lake City" },
  { stat: "43% lower", label: "Summer electric bill", who: "Jared N., West Jordan" },
  { stat: "3 window units", label: "Gone for good", who: "Chris P., West Valley City" },
];

const reviewNames = ["Rebecca M.", "Savanna K.", "Jared N."];

function GetPriceButton({ className = "" }: { className?: string }) {
  return (
    <a href="#pricing" className={`inline-flex items-center justify-center rounded-full bg-alarm-strong px-8 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110 ${className}`}>
      Get my price
    </a>
  );
}

export default function PriceLanding() {
  const reviews = reviewNames.map((n) => googleReviews.find((r) => r.name === n)).filter((r) => r !== undefined);
  return (
    <>
      {/* Top bar: logo and phone only */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Image src="/images/logo.png" alt="Eco Home Heating & Cooling" width={152} height={60} sizes="152px" preload className="h-10 w-auto sm:h-11" />
          <a href={site.phoneHref} className="flex items-center gap-2 rounded-full px-4 py-2 font-bold text-ink ring-2 ring-ink hover:bg-sky-soft">
            <PhoneIcon className="h-4 w-4" /> <span className="hidden sm:inline">{site.phone}</span><span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>

      {/* Headline + form */}
      <section className="bg-sky-soft">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-6 sm:px-6 md:py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <p className="wrap-type text-xl text-alarm-strong" style={{ textShadow: "none" }}>Free instant pricing</p>
            <h1 className="display mt-1 text-[2rem] leading-tight sm:text-5xl">See your new heating and cooling price in 2 minutes</h1>
            <p className="mt-3 flex items-center gap-2 font-semibold"><Stars /> {site.rating.value} from {site.rating.count} Google reviews</p>
            <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-3">
              {chips.map((c) => (
                <li key={c} className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold ring-1 ring-line lg:bg-transparent lg:p-0 lg:text-base lg:ring-0">
                  <CheckIcon className="h-4 w-4 shrink-0 text-teal" /> {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 hidden leading-relaxed text-ink/80 lg:block">
              Heat pumps, furnaces and dual-fuel systems for homes in Utah County and Salt Lake County. Licensed, permitted on every job, and backed by our Smile Guarantee.
            </p>
          </div>
          <div id="pricing" className="scroll-mt-4">
            <EstimateForm />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="display text-3xl sm:text-4xl">How it works</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-extrabold text-white">{s.n}</span>
              <h3 className="mt-4 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-mist">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Real results */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl sm:text-4xl">Real Utah homes, real results</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {results.map((r) => (
              <li key={r.who} className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/15">
                <p className="display text-3xl text-sky">{r.stat}</p>
                <p className="mt-1 font-semibold">{r.label}</p>
                <p className="mt-3 text-sm text-white/70">{r.who}</p>
              </li>
            ))}
          </ul>
          <GetPriceButton className="mt-10" />
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="display text-3xl sm:text-4xl">What homeowners say</h2>
        <p className="mt-2 flex items-center gap-2 font-semibold"><Stars /> {site.rating.value} from {site.rating.count} Google reviews</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <Stars className="h-4 w-4" />
              <blockquote className="mt-3 leading-relaxed">“{r.text}”</blockquote>
              <figcaption className="mt-3 text-sm font-bold">{r.name}{r.city ? `, ${r.city}` : ""} <span className="font-normal text-mist">· Google review</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Final push */}
      <section className="bg-sky">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="display text-3xl text-ink sm:text-4xl">Your price is two minutes away</h2>
            <p className="mt-2 text-lg text-ink/85">At least $2,150 in rebates, guaranteed. 0% interest for 12 months available.</p>
          </div>
          <GetPriceButton />
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-ink text-sm text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name} · Utah contractor license #{site.license}</p>
          <p className="flex gap-4">
            <a href="/privacy-policy" className="hover:underline">Privacy policy</a>
            <a href="/terms-of-service" className="hover:underline">Terms</a>
          </p>
        </div>
      </footer>
    </>
  );
}
