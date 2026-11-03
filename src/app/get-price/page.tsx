import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { EstimateForm } from "@/components/estimator/EstimateForm";
import { googleReviews } from "@/lib/reviews";
import { CheckIcon, PhoneIcon, Stars } from "@/components/icons";

// Squeeze-page version of the paid-ad landing page (A/B test against /price and
// /instant-pricing): one headline and the form, sized to fit one screen with no
// scrolling. No site header or footer (see lib/landing), not indexed, not in the
// sitemap.
export const metadata: Metadata = {
  title: "See Your Heating & Cooling Price in 1 Minute",
  description: "Answer a few quick questions and see your price for a new heat pump, furnace or dual-fuel system, after rebates. No obligation.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/instant-pricing" },
};

// The review under the form: an exact excerpt of Rebecca M.'s Google review in
// lib/reviews. It only shows while it still matches that review word for word.
const reviewText = "He was able to fix our heater. Where others said we needed to buy a new one. He saved us thousands of dollars.";
const review = googleReviews.find((r) => r.name === "Rebecca M." && r.text.startsWith(reviewText));

export default function GetPriceSqueeze() {
  return (
    <div className="flex min-h-dvh flex-col bg-ink">
      <div className="bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-1.5 sm:px-6 lg:max-w-6xl">
          <Image src="/images/logo.png" alt="Eco Home Heating & Cooling" width={152} height={60} sizes="120px" preload className="h-8 w-auto shrink-0 sm:h-10" />
          <p className="flex-1 text-center text-xs font-semibold leading-snug text-ink/80 sm:text-sm">
            Utah contractor license<span className="hidden sm:inline"> </span><br className="sm:hidden" />#{site.license}
          </p>
          <a href={site.phoneHref} className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold text-ink ring-2 ring-ink hover:bg-sky-soft">
            <PhoneIcon className="h-4 w-4" /> <span className="hidden sm:inline">{site.phone}</span><span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>

      <main className="mx-auto w-full max-w-2xl flex-1 px-3 py-4 sm:px-6 sm:py-2.5 sm:pb-2 sm:pt-[3vh] lg:max-w-4xl">
        <div className="text-center">
          <p className="wrap-type text-base text-sky sm:text-xl" style={{ textShadow: "none" }}>Free instant pricing</p>
          <h1 className="display mt-0.5 text-balance text-[1.6rem] leading-tight text-white sm:text-3xl tall:text-[2.6rem]">See your heating &amp; cooling price in 1 minute</h1>
          <p className="mt-1.5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm font-semibold text-white sm:mt-2 sm:text-base lg:gap-x-6">
            <span className="flex items-center gap-1"><CheckIcon className="h-4 w-4 text-sky" /> $2,150+ in rebates, guaranteed</span>
            <span className="flex items-center gap-1"><CheckIcon className="h-4 w-4 text-sky" /> No obligation</span>
            <span className="hidden items-center gap-1 lg:flex"><CheckIcon className="h-4 w-4 text-sky" /> Licensed, permitted on every job</span>
          </p>
        </div>
        <div id="pricing" className="mx-auto mt-4 lg:max-w-3xl">
          <EstimateForm
            compact
            below={
              <div className="mx-auto mt-4 max-w-xl text-center sm:mt-3">
                {review && (
                  <figure>
                    <blockquote className="text-sm font-semibold leading-snug text-white sm:text-[15px]">“{reviewText}”</blockquote>
                    <figcaption className="mt-0.5 text-xs text-white/65">{review.name}, {review.city} · Google review</figcaption>
                  </figure>
                )}
                <p className="mt-1 flex items-center justify-center gap-1.5 text-[13px] font-semibold text-white sm:text-sm"><Stars className="h-4 w-4" /> {site.rating.value} from {site.rating.count} Google reviews</p>
              </div>
            }
          />
        </div>
      </main>

      <p className="px-4 pb-1.5 text-center text-xs text-white/60">
        <a href="/privacy-policy" className="hover:underline">Privacy</a> ·{" "}
        <a href="/terms-of-service" className="hover:underline">Terms</a>
      </p>
    </div>
  );
}
