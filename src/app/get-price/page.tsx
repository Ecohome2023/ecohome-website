import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { EstimateForm } from "@/components/estimator/EstimateForm";
import { PhoneIcon, Stars } from "@/components/icons";

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

export default function GetPriceSqueeze() {
  return (
    <div className="flex min-h-dvh flex-col bg-ink">
      <div className="bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-1.5 sm:px-6">
          <Image src="/images/logo.png" alt="Eco Home Heating & Cooling" width={152} height={60} sizes="120px" preload className="h-8 w-auto shrink-0 sm:h-10" />
          <p className="flex items-center gap-1.5 text-xs font-semibold text-ink sm:text-sm"><Stars className="h-3.5 w-3.5" /> {site.rating.value} · {site.rating.count} reviews</p>
          <a href={site.phoneHref} className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold text-ink ring-2 ring-ink hover:bg-sky-soft">
            <PhoneIcon className="h-4 w-4" /> <span className="hidden sm:inline">{site.phone}</span><span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-3 py-3 sm:px-6 sm:pb-5 sm:pt-[6vh]">
        <h1 className="display text-balance text-center text-[1.45rem] leading-tight text-white sm:text-3xl">See your heating &amp; cooling price in 1 minute</h1>
        <div id="pricing" className="mt-3 sm:mt-5">
          <EstimateForm compact />
        </div>
      </main>

      <p className="px-4 pb-2 text-center text-xs text-white/60">
        Utah contractor license #{site.license} ·{" "}
        <a href="/privacy-policy" className="hover:underline">Privacy</a> ·{" "}
        <a href="/terms-of-service" className="hover:underline">Terms</a>
      </p>
    </div>
  );
}
