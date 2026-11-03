import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { EstimateForm, type FormQuote } from "@/components/estimator/EstimateForm";
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

// One short quote under the form, changing with each question. Each is an exact
// excerpt of a Google review in lib/reviews ("…" marks a cut); the check below
// drops any quote that no longer matches its review word for word.
const excerpts: { name: string; text: string }[] = [
  { name: "Chris P.", text: "The install went flawless and looks great." },
  { name: "Savanna K.", text: "Andrew was amazing. Professional, knowledgeable and friendly!" },
  { name: "Stacy G.", text: "…they came in the lowest and knew what they were doing." },
  { name: "Jared N.", text: "…very professional and quick with the installation" },
  { name: "Patrick T.", text: "I really appreciate their honesty and willingness to go the second mile." },
  { name: "Rebecca M.", text: "He saved us thousands of dollars." },
  { name: "Maria-Isabel A.", text: "They're friendly, professional and honest." },
  { name: "Paul E.", text: "Their tech was efficient and polite… resolved immediately." },
];
const quotes: FormQuote[] = excerpts.flatMap(({ name, text }) => {
  const r = googleReviews.find((g) => g.name === name);
  const exact = text.replace(/^…/, "");
  return r && r.text.toLowerCase().includes(exact.toLowerCase()) ? [{ text, name, city: r.city }] : [];
});

export default function GetPriceSqueeze() {
  return (
    <div className="flex min-h-dvh flex-col bg-ink">
      <div className="bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-1.5 sm:px-6 lg:max-w-6xl">
          <Image src="/images/logo.png" alt="Eco Home Heating & Cooling" width={152} height={60} sizes="120px" preload className="h-8 w-auto shrink-0 sm:h-10" />
          <p className="flex items-center gap-1.5 text-xs font-semibold text-ink sm:text-sm"><Stars className="h-3.5 w-3.5" /> {site.rating.value} · {site.rating.count} reviews</p>
          <a href={site.phoneHref} className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold text-ink ring-2 ring-ink hover:bg-sky-soft">
            <PhoneIcon className="h-4 w-4" /> <span className="hidden sm:inline">{site.phone}</span><span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>

      <main className="mx-auto w-full max-w-2xl flex-1 px-3 py-3 sm:px-6 sm:pb-3 sm:pt-[3vh] lg:max-w-4xl">
        <div className="text-center">
          <p className="wrap-type text-base text-sky sm:text-xl" style={{ textShadow: "none" }}>Free instant pricing</p>
          <h1 className="display mt-0.5 text-balance text-[1.45rem] leading-tight text-white sm:text-3xl tall:text-[2.6rem]">See your heating &amp; cooling price in 1 minute</h1>
          <p className="mt-1.5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm font-semibold text-white sm:mt-2 sm:text-base lg:gap-x-6">
            <span className="flex items-center gap-1"><CheckIcon className="h-4 w-4 text-sky" /> $2,150+ in rebates, guaranteed</span>
            <span className="flex items-center gap-1"><CheckIcon className="h-4 w-4 text-sky" /> No obligation</span>
            <span className="hidden items-center gap-1 lg:flex"><CheckIcon className="h-4 w-4 text-sky" /> Licensed, permitted on every job</span>
          </p>
        </div>
        <div id="pricing" className="mx-auto mt-3 sm:mt-4 lg:max-w-3xl">
          <EstimateForm compact quotes={quotes} />
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
