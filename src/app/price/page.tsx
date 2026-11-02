import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { googleReviews } from "@/lib/reviews";
import { EstimateForm } from "@/components/estimator/EstimateForm";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { CheckIcon, PhoneIcon, Stars } from "@/components/icons";

// Landing page for paid ads (A/B test against /instant-pricing). No site header
// or footer (see lib/landing), not indexed, not in the sitemap. Everything on
// the page points back to the pricing form.
export const metadata: Metadata = {
  title: "See Your Heating & Cooling Price in 1 Minute",
  description: "Answer 10 quick questions and see your price for a new heat pump, furnace or dual-fuel system, after rebates. No obligation.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/instant-pricing" },
};

const chips = [
  "$2,150+ in rebates, guaranteed",
  "No obligation",
];

const rebates = [
  { source: "Rocky Mountain Power Wattsmart", amount: "$1,450", note: "As a Wattsmart Pro Network contractor, we qualify for Rocky Mountain Power’s higher rebate amount." },
  { source: "Enbridge Gas ThermWise", amount: "$700 to $1,000", note: "$700 with an 80% furnace, $1,000 with a 96%+ furnace." },
  { source: "Manufacturer dealer rebates", amount: "$400 to $2,000", note: "Offered by Amana and ACiQ on select systems, taken off your invoice instantly." },
];

// Same rows as the heat pump page comparison.
const comparison = [
  { label: "Cooling", dual: "Variable-speed heat pump cools efficiently", standard: "Standard AC, usually on/off" },
  { label: "Heating", dual: "Heat pump plus gas furnace, picks the cheaper fuel automatically", standard: "Gas furnace only" },
  { label: "Comfort", dual: "Steady, even temperatures", standard: "Temperature swings as it cycles on and off" },
  { label: "Noise", dual: "Quiet, runs at low speed most of the time", standard: "Louder, runs at full blast" },
  { label: "Efficiency", dual: "Higher efficiency ratings", standard: "Standard efficiency" },
  { label: "Heating backup", dual: "Two heat sources, so one can cover if the other needs repair", standard: "One heat source" },
  { label: "Rebates", dual: "$2,150 guaranteed, up to $4,450", standard: "Fewer rebates available" },
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
          <h1 className="display mt-1 text-[2rem] leading-tight text-white sm:text-5xl">See your new heating and cooling price in 1 minute</h1>
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

      {/* Dual fuel vs standard (from the heat pump page) */}
      <section className="bg-sky-soft">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl sm:text-4xl">Dual fuel vs. a standard AC and furnace</h2>
          <p className="mt-3 max-w-2xl text-lg text-ink/85">
            Both setups heat and cool your home. Here’s how a heat pump with a gas furnace compares to the traditional AC and gas furnace most Utah homes have today.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl bg-white ring-1 ring-line">
            <table className="w-full table-fixed text-left text-sm sm:text-base">
              <caption className="sr-only">Comparison of a dual-fuel heat pump system and a standard AC with gas furnace</caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[24%] p-3 sm:p-5"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="bg-ink p-3 align-bottom text-white sm:p-5">
                    <span className="block text-xs font-bold text-sky sm:text-sm">What we install</span>
                    <span className="display block text-lg sm:text-2xl">Heat pump + gas furnace</span>
                  </th>
                  <th scope="col" className="p-3 align-bottom sm:p-5">
                    <span className="block text-xs font-bold text-mist sm:text-sm">Traditional</span>
                    <span className="display block text-lg sm:text-2xl">AC + gas furnace</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-t border-line">
                    <th scope="row" className="p-3 align-top font-extrabold sm:p-5">{row.label}</th>
                    <td className="bg-sky/10 p-3 align-top sm:p-5">
                      <span className="flex gap-2"><CheckIcon className="mt-0.5 hidden h-5 w-5 shrink-0 text-teal sm:block" />{row.dual}</span>
                    </td>
                    <td className="p-3 align-top text-mist sm:p-5">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <GetPriceButton />
            <p className="text-ink/80">Dual-fuel systems start at $9,990 after incentives.</p>
          </div>
        </div>
      </section>

      {/* Rebates (from the heat pump page) */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="display text-3xl sm:text-4xl">$2,150 in rebates, guaranteed</h2>
            <p className="mt-3 text-lg leading-relaxed text-ink/85">
              We guarantee at least $2,150 in rebates on every heat pump we install, and many homeowners qualify for up to $4,450. We file all the rebate paperwork for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl bg-alarm-strong px-6 py-5 text-white">
                <p className="display text-4xl">$2,150</p>
                <p className="font-semibold">Guaranteed on every install</p>
              </div>
              <div className="rounded-2xl bg-ink px-6 py-5 text-white">
                <p className="display text-4xl text-sky">$4,450</p>
                <p className="font-semibold">Maximum available</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-extrabold">Where the rebates come from</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {rebates.map((r) => (
                <li key={r.source} className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1 py-5">
                  <span className="max-w-md">
                    <span className="block text-lg font-bold text-teal">{r.source}</span>
                    <span className="block text-mist">{r.note}</span>
                  </span>
                  <span className="display text-2xl text-teal">{r.amount}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-mist">
              Utility rebate programs are run by Rocky Mountain Power and Enbridge Gas, and their amounts can change. The $2,150 guarantee applies to qualifying heat pump installs by Eco Home.
            </p>
          </div>
        </div>
      </section>

      {/* Video testimonial (from the heat pump page) */}
      <section className="bg-sky-soft">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[300px_1fr]">
          <div className="mx-auto w-full max-w-[300px]">
            <VideoTestimonial id="OaLfF9Z0RqQ" title="Ryan in Provo, Utah, on his experience with Eco Home" caption="Hear from Ryan in Provo, Utah" />
          </div>
          <div>
            <h2 className="display text-3xl sm:text-4xl">Homeowners love the comfort</h2>
            <p className="mt-3 text-lg leading-relaxed text-ink/85">
              Rated {site.rating.value} stars from {site.rating.count} Google reviews. Every install is backed by our Smile Guarantee.
            </p>
            <GetPriceButton className="mt-6" />
          </div>
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
