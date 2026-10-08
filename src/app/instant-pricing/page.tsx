import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";
import { EstimateForm } from "@/components/estimator/EstimateForm";
import { CheckIcon, PhoneIcon, Stars } from "@/components/icons";

export const metadata: Metadata = pageMeta({
  title: "Instant HVAC Pricing for Utah Homes",
  description:
    "Answer 10 quick questions and see a price for a new heat pump, furnace or dual-fuel system, after rebates, sized to your Utah home. No obligation.",
  path: "/instant-pricing",
});

const points = [
  "Takes about two minutes",
  "Sized to your home’s square footage and age",
  "Prices shown after Rocky Mountain Power and Enbridge rebates",
  "No obligation, nothing to sign",
];

export default function InstantPricing() {
  return (
    <section className="bg-sky-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="wrap-type text-2xl text-alarm-strong" style={{ textShadow: "none" }}>Instant pricing</p>
          <h1 className="display mt-2 text-4xl sm:text-5xl">See your price in two minutes</h1>
          <p className="mt-4 hidden max-w-xl text-lg leading-relaxed text-ink/80 sm:block">
            Tell us about your home and get a personalized estimate for a new heating and cooling system, right on the next screen.
          </p>
          <ul className="mt-6 hidden space-y-3 sm:block">
            {points.map((p) => (
              <li key={p} className="flex gap-3 font-semibold">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal" /> {p}
              </li>
            ))}
          </ul>
          <a href={site.googleProfileUrl} className="mt-6 hidden items-center gap-2 font-semibold hover:underline sm:flex">
            <Stars /> {site.rating.value} from {site.rating.count} Google reviews
          </a>
          <p className="mt-6 hidden text-mist lg:block">
            Rather talk it through? Call{" "}
            <a href={site.phoneHref} className="inline-flex items-center gap-1 font-bold text-ink hover:underline">
              <PhoneIcon className="h-4 w-4" /> {site.phone}
            </a>
            . We’re open 24/7.
          </p>
        </div>

        <EstimateForm />
      </div>
    </section>
  );
}
