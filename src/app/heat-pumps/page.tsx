import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { steps, brandFaqs } from "@/lib/content";
import { SystemOptions } from "@/components/SystemOptions";
import { JobPromises } from "@/components/JobPromises";
import { CheckIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { LoopVideo } from "@/components/LoopVideo";
import { VideoTestimonial } from "@/components/VideoTestimonial";

export const metadata: Metadata = {
  title: "Dual-Fuel Heat Pumps in Utah County & Salt Lake",
  description:
    "Dual-fuel heat pump systems from $9,990 after incentives, with $2,150 in rebates guaranteed and up to $4,450 available. ACiQ and Amana. Serving Utah County and Salt Lake County.",
  alternates: { canonical: "/heat-pumps" },
};

const startingPrice = "$9,990";

const whyDualFuel = [
  { title: "Picks the cheapest fuel", body: "Your thermostat runs the heat pump when electricity is cheaper and switches to the gas furnace when gas is cheaper. You never pay more than you have to." },
  { title: "Steadier comfort", body: "Variable-speed heat pumps run longer at lower speeds, so temperatures stay even instead of swinging hot and cold." },
  { title: "Quieter", body: "Running at low speed most of the time means far less noise than a system that blasts on and off." },
  { title: "Higher efficiency", body: "A heat pump carries higher efficiency ratings than a standard air conditioner, so it costs less to cool your home in the summer." },
  { title: "Does everything a standard system does, and more", body: "It cools like an AC, heats like a furnace on the coldest nights, and adds efficient electric heat the rest of the year." },
];

const rebates = [
  { source: "Rocky Mountain Power Wattsmart", amount: "$1,450", note: "As a Wattsmart Pro Network contractor, we qualify for Rocky Mountain Power’s higher rebate amount." },
  { source: "Enbridge Gas ThermWise", amount: "$700 to $1,000", note: "Depends on the equipment and the program’s requirements." },
  { source: "Equipment dealer rebates", amount: "Up to $2,000", note: "Depends on the equipment you choose." },
];

const faqs = [
  {
    q: "How does a heat pump work?",
    a: "A heat pump moves heat instead of making it. In the winter, it pulls heat out of the outdoor air, even when it’s cold outside, and brings it into your home. In the summer, it runs in reverse and pulls heat out of your home, exactly like an air conditioner. In a dual-fuel system, your gas furnace takes over on the coldest days.",
  },
  {
    q: "I’ve heard heat pumps use more electricity and aren’t worth it. Is that true?",
    a: "Not with a dual-fuel system. A heat pump replaces your air conditioner, and it’s more efficient than a standard AC, so summer cooling costs less. In the winter, it moves several units of heat for every unit of electricity it uses, and the thermostat switches to your gas furnace whenever gas is the cheaper option. You only use electric heat when it saves you money.",
  },
  {
    q: "Does a heat pump also cool my house?",
    a: "Yes. A heat pump is a complete air conditioner that can also heat. It replaces your AC, so you get efficient cooling in the summer and efficient heating in the spring, fall and most of the winter.",
  },
  {
    q: "Gas is cheaper to heat with in Utah. Why would I use electricity?",
    a: "On the coldest days, gas often is the cheaper choice, and that’s exactly why we always install dual-fuel systems. Your furnace handles those days. During milder weather, which is much of Utah’s heating season, the heat pump is often cheaper to run. The system picks the cheapest option automatically, so you get the best of both.",
  },
  {
    q: "How much does a heat pump cost in Utah?",
    a: `Our complete dual-fuel systems start at ${startingPrice} after incentives. Your exact price depends on your home’s size, your ductwork and the equipment you choose. Get instant pricing online or book a free estimate.`,
  },
  ...brandFaqs,
];

const comparison = [
  { label: "Cooling", dual: "Variable-speed heat pump cools efficiently", standard: "Standard AC, usually on/off" },
  { label: "Heating", dual: "Heat pump plus gas furnace, picks the cheaper fuel automatically", standard: "Gas furnace only" },
  { label: "Comfort", dual: "Steady, even temperatures", standard: "Temperature swings as it cycles on and off" },
  { label: "Noise", dual: "Quiet, runs at low speed most of the time", standard: "Louder, runs at full blast" },
  { label: "Efficiency", dual: "Higher efficiency ratings", standard: "Standard efficiency" },
  { label: "Heating backup", dual: "Two heat sources, so one can cover if the other needs repair", standard: "One heat source" },
  { label: "Rebates", dual: "$2,150 guaranteed, up to $4,450", standard: "Fewer rebates available" },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Dual-fuel heat pump installation",
    name: "Heat pump installation",
    provider: { "@id": `${site.url}/#business` },
    areaServed: ["Utah County, UT", "Salt Lake County, UT"],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: { "@type": "PriceSpecification", minPrice: 9990, priceCurrency: "USD" },
      description: "Complete dual-fuel heat pump system, starting price after incentives",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Heat Pumps", item: `${site.url}/heat-pumps` },
    ],
  },
];

export default function HeatPumps() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70">
              <Link href="/" className="hover:underline">Home</Link> <span aria-hidden>/</span> Heat Pumps
            </nav>
            <h1 className="display mt-3 text-[2.4rem] sm:text-6xl">
              Dual-fuel heat pumps for Utah County and Salt Lake County
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Complete systems start at <strong className="text-white">{startingPrice}</strong> after incentives, with <strong className="text-white">$2,150 in rebates guaranteed</strong> on every heat pump install.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.instantPricingUrl} className="flex items-center gap-2 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
                <MailIcon className="h-5 w-5" /> Get instant pricing
              </a>
              <a href={site.bookingUrl} className="rounded-full px-7 py-4 text-lg font-bold text-white ring-2 ring-white/60 hover:bg-white/10">
                Book a free estimate
              </a>
            </div>
            <p className="mt-4 text-sm font-medium text-white/75">0% interest for 12 months available. Subject to credit approval.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image src="/images/heat-pumps-pair.jpg" alt="Two new dual-fuel heat pumps installed by Eco Home beside a Utah home" fill preload sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* WHY DUAL FUEL */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="display text-4xl sm:text-5xl">Why we always install dual fuel</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            A dual-fuel system pairs a heat pump with a high-efficiency gas furnace. We never install all-electric systems in Utah homes. Dual fuel gives you the efficiency of a heat pump with the backup of gas on the coldest nights.
          </p>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {whyDualFuel.map((w) => (
            <li key={w.title} className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sky text-ink"><CheckIcon className="h-5 w-5" /></span>
              <span>
                <span className="block text-xl font-extrabold">{w.title}</span>
                <span className="mt-1 block text-mist">{w.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-sky-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="display text-4xl sm:text-5xl">How a heat pump works</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              A heat pump doesn’t burn fuel to make heat. It moves heat from one place to another, which is why it’s so efficient.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6">
                <p className="wrap-type text-xl text-heat" style={{ textShadow: "none" }}>In winter</p>
                <p className="mt-2 text-ink/85">It pulls heat from the outdoor air and moves it inside. On the coldest days, your gas furnace takes over.</p>
              </div>
              <div className="rounded-2xl bg-white p-6">
                <p className="wrap-type text-xl text-cool" style={{ textShadow: "none" }}>In summer</p>
                <p className="mt-2 text-ink/85">It runs in reverse, pulling heat out of your home and cooling it, just like an air conditioner.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/tech-leveling-heat-pump.jpg" alt="Eco Home technician leveling a new heat pump during installation" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* REBATES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="display text-4xl sm:text-5xl">$2,150 in rebates, guaranteed</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              We guarantee at least $2,150 in rebates on every heat pump we install, and many homeowners qualify for up to $4,450. We file all the rebate paperwork for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl bg-alarm px-6 py-5 text-white">
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
                    <span className="block text-lg font-bold">{r.source}</span>
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

      {/* DUAL FUEL VS STANDARD */}
      <section className="bg-sky-soft">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">Dual fuel vs. a standard AC and furnace</h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/85">
            Both setups heat and cool your home. Here’s how a heat pump with a gas furnace compares to the traditional AC and gas furnace most Utah homes have today.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl bg-white ring-1 ring-line">
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
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={site.instantPricingUrl} className="flex items-center gap-2 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#b80028] hover:brightness-110">
              <MailIcon className="h-5 w-5" /> Price a dual-fuel system
            </a>
            <p className="text-ink/80">Starting at {startingPrice} after incentives.</p>
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h2 className="display max-w-3xl text-4xl sm:text-5xl">Two great options</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Complete dual-fuel systems start at {startingPrice} after incentives. Get both options priced for your home and emailed to you instantly.
          </p>
          <SystemOptions />
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href={site.instantPricingUrl} className="flex items-center gap-2.5 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#7a0018] hover:brightness-110">
              <MailIcon className="h-5 w-5" /> Get my instant estimate
            </a>
            <p className="text-white/75">0% interest for 12 months through {site.financingPartner}, subject to credit approval.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 className="display text-4xl sm:text-5xl">Sized right, tested before we leave</h2>
            <p className="mt-4 text-lg text-mist">A heat pump only performs as well as it’s sized and installed. Here’s how we do every job.</p>
            <ol className="mt-10 space-y-8">
              {steps.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="display grid h-12 w-12 place-items-center rounded-full bg-ink text-xl text-sky">{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-extrabold">{s.title}</h3>
                    <p className="mt-1 text-mist">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="overflow-hidden rounded-2xl bg-ink lg:sticky lg:top-32">
            <LoopVideo src="/video/ductwork-loop.mp4" poster="/video/ductwork-poster.jpg" label="Eco Home technician installing new ductwork" className="aspect-video w-full object-cover" />
            <p className="px-5 py-4 text-sm text-white/80">New trunk line going in on a basement finish in Utah County.</p>
          </div>
        </div>
        <JobPromises />
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-sky-soft">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[300px_1fr]">
          <div className="mx-auto w-full max-w-[300px]">
            <VideoTestimonial id="OaLfF9Z0RqQ" title="Ryan in Provo, Utah, on his experience with Eco Home" caption="Hear from Ryan in Provo, Utah" />
          </div>
          <div>
            <h2 className="display text-4xl sm:text-5xl">Homeowners love the comfort</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              Rated {site.rating.value} stars from {site.rating.count} Google reviews. Every install is backed by our{" "}
              <Link href="/smile-guarantee" className="font-bold text-teal underline underline-offset-4">Smile Guarantee</Link>.
            </p>
            <a href={site.googleMapsUrl} className="mt-6 inline-block font-bold text-teal underline underline-offset-4 hover:text-ink">Read our Google reviews</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="display text-4xl sm:text-5xl">Heat pump questions we hear most</h2>
        <div className="mt-8 divide-y divide-line rounded-2xl ring-1 ring-line">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold">
                {f.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-soft text-xl text-teal transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink/80">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="display text-4xl sm:text-5xl">See your heat pump price today</h2>
            <p className="mt-4 max-w-lg text-lg text-white/85">
              Systems from {startingPrice} after incentives, $2,150 in rebates guaranteed, and 0% interest for 12 months.
            </p>
          </div>
          <div className="grid gap-3">
            <a href={site.instantPricingUrl} className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-lg font-bold text-ink shadow-[0_4px_0_#052f3d] hover:bg-sky-soft">
              <MailIcon className="h-5 w-5" /> Get instant pricing
            </a>
            <a href={site.phoneHref} className="flex items-center justify-center gap-2 rounded-full px-7 py-4 text-lg font-bold ring-2 ring-white/50 hover:bg-white/10">
              <PhoneIcon className="h-5 w-5" /> {site.phone}
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
