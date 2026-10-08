import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Smile Guarantee: 1-Year Workmanship Guarantee",
  description:
    "Eco Home's Smile Guarantee: for one year, if anything goes wrong with the HVAC work we performed, we come back and fix it free, with no trip or diagnostic charge.",
  alternates: { canonical: "/smile-guarantee" },
};

// Terms drafted with John on 2026-10-06. Attorney review pending before launch.
const promises = [
  {
    title: "One full year on our workmanship",
    body: "If anything goes wrong with the heating or cooling work we performed, we come back and fix it free. Parts and labor for the fix are on us.",
  },
  {
    title: "No charge to come out",
    body: "Most companies still charge a trip or diagnostic fee for warranty visits. Guarantee visits from Eco Home cost you nothing.",
  },
  {
    title: "Upfront price, no surprises",
    body: "The price you approve before we start is the price you pay. Nothing gets added to the bill afterward.",
  },
  {
    title: "Stays with your home",
    body: "Selling your house? The guarantee transfers to the new owner for the rest of the year.",
  },
];

const steps = [
  { title: "Call us", body: `Call ${site.phone} any time within one year of your completed service. We’re open 24/7.` },
  { title: "We inspect it", body: "A technician comes out to find the cause, with no trip or diagnostic charge." },
  { title: "We fix it free", body: "If the problem is with the work we did, we fix it at no cost to you." },
];

const notCovered = [
  "Fixing the problem is on us. Repairs to surrounding areas of your home, like drywall or flooring, are not included.",
  "Equipment defects covered by the manufacturer’s warranty (we’ll help you file the claim)",
  "Problems unrelated to the work we performed",
  "Damage from misuse, accidents, or work done by someone else",
];

const terms = [
  "The guarantee lasts one year from the date your service was completed.",
  "It covers the HVAC work Eco Home performed at your property.",
  "Contact us within the one-year period and give us the chance to inspect and fix the problem before anyone else works on it.",
  "Applies to invoices paid in full.",
  "The remedy is repair of our work. The guarantee does not include cash refunds.",
  "If you sell your home, the guarantee transfers to the new owner for the remainder of the one-year period.",
];

export default function SmileGuarantee() {
  return (
    <>
      <section className="relative overflow-hidden bg-alarm text-white">
        <div className="mx-auto grid max-w-7xl items-end gap-8 px-4 pt-14 sm:px-6 md:grid-cols-[1.3fr_0.7fr]">
          <div className="pb-14">
            <p className="wrap-type text-2xl">Smile Guarantee</p>
            <h1 className="display mt-3 text-5xl sm:text-6xl">You smile, or we fix it free</h1>
            <p className="mt-5 max-w-xl text-xl font-medium leading-relaxed text-white/95">
              For one full year, if anything goes wrong with the work we did, we come back and make it right. No trip charge, no diagnostic fee, no surprise bill.
            </p>
          </div>
          <div className="mx-auto w-48 sm:w-60 md:w-full md:max-w-xs">
            <Image src="/images/dan-eco-home-man.png" alt="" width={600} height={795} preload sizes="320px" className="h-auto w-full" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="display text-4xl">What you get</h2>
        <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {promises.map((p) => (
            <li key={p.title} className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sky text-ink"><CheckIcon className="h-5 w-5" /></span>
              <span>
                <span className="block text-xl font-extrabold">{p.title}</span>
                <span className="mt-1 block text-mist">{p.body}</span>
              </span>
            </li>
          ))}
        </ul>

        <h2 className="display mt-20 text-4xl">How it works</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="display grid h-12 w-12 place-items-center rounded-full bg-ink text-xl text-sky">{i + 1}</span>
              <h3 className="mt-4 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-1 text-mist">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl p-7 ring-1 ring-line">
            <h2 className="text-xl font-extrabold">What’s not covered</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-ink/85">
              {notCovered.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl bg-sky-soft p-7">
            <h2 className="text-xl font-extrabold">Guarantee terms</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-ink/85">
              {terms.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4">
          <a href={site.phoneHref} className="flex items-center gap-2 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
            <PhoneIcon className="h-5 w-5" /> Call {site.phone}
          </a>
          <a href={site.bookingUrl} className="rounded-full bg-white px-7 py-4 text-lg font-bold text-ink shadow-[0_4px_0_var(--color-ink)] ring-1 ring-line hover:bg-sky-soft">
            Book service
          </a>
        </div>
      </section>
    </>
  );
}
