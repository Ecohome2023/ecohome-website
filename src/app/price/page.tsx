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
          <Image src="/images/logo.png" alt="Eco Home Heating & Cooling" width={152} height={60} sizes="152px" preload className="h-10 w-auto shrink-0 sm:h-11" />
          <p className="flex-1 text-center text-xs font-semibold leading-snug text-ink/80 sm:text-sm">
            Licensed &amp; insured<span className="hidden sm:inline"> · </span><br className="sm:hidden" />Utah #{site.license}
          </p>
          <a href={site.phoneHref} className="flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-bold text-ink ring-2 ring-ink hover:bg-sky-soft">
            <PhoneIcon className="h-4 w-4" /> <span className="hidden sm:inline">{site.phone}</span><span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>

      {/* Headline + form, centered on navy so the white form stands out */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-4 py-6 text-center sm:px-6 md:py-12">
          <p className="wrap-type text-xl text-sky" style={{ textShadow: "none" }}>Free instant pricing</p>
          <h1 className="display mt-1 text-[2rem] leading-tight text-white sm:text-5xl">See your new heating and cooling price in 2 minutes</h1>
          <p className="mt-3 flex items-center justify-center gap-2 font-semibold text-white"><Stars /> {site.rating.value} from {site.rating.count} Google reviews</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {chips.map((c) => (
              <li key={c} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/25">
                <CheckIcon className="h-4 w-4 shrink-0 text-sky" /> {c}
              </li>
            ))}
          </ul>
          <div id="pricing" className="mt-6 scroll-mt-4 text-left md:mt-8">
            <EstimateForm />
          </div>
          <p className="mt-6 hidden text-sm leading-relaxed text-white/70 sm:block">
            Heat pumps, furnaces and dual-fuel systems for homes in Utah County and Salt Lake County. Licensed, permitted on every job, and backed by our Smile Guarantee.
          </p>
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
      <section className="overflow-hidden bg-sky">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-12 sm:px-6 md:flex-row md:items-end md:gap-10">
          <div className="pb-0 md:flex-1 md:pb-12">
            <p className="wrap-type text-xl text-ink" style={{ textShadow: "none" }}>Smile Guarantee</p>
            <h2 className="display mt-2 text-3xl text-ink sm:text-4xl">You smile, or we fix it free</h2>
            <p className="mt-3 max-w-xl text-lg text-ink/85">
              For one full year, if anything goes wrong with the work we did, we come back and make it right. No trip charge, no diagnostic fee, no surprise bill.
            </p>
            <GetPriceButton className="mt-6" />
          </div>
          <Image src="/images/dan-eco-home-man.png" alt="Dan, the Eco Home Man" width={600} height={795} sizes="240px" className="mx-auto h-auto w-44 shrink-0 sm:w-52 md:mx-0 md:w-60" />
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
