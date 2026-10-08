import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { CheckIcon, MailIcon, PhoneIcon, Stars } from "@/components/icons";
import { JobPromises } from "@/components/JobPromises";

export const metadata: Metadata = pageMeta({ title: "Furnace Replacement in Utah County & Salt Lake", description: "New ACiQ and Amana gas furnaces from $3,990, installed in one day. 80% and 96%+ efficient options. Serving Utah County and Salt Lake County. Open 24/7.", path: "/services/furnace-replacement" });

const startingPrice = "$3,990";
const dualFuelPrice = "$9,990";

const signs = [
  { title: "It’s 15 years old or more", body: "Most gas furnaces last about 15 to 20 years. Past that point, repairs come more often and efficiency keeps dropping." },
  { title: "Repairs keep adding up", body: "If a repair costs a big share of a new furnace, or you’ve had several repairs in a couple of years, replacing usually makes more sense." },
  { title: "Your gas bills are climbing", body: "An older furnace burns more gas to make the same heat. A rising bill with no change in how you use it is a common sign." },
  { title: "Some rooms never get warm", body: "Uneven heat can mean the furnace can no longer keep up, or that it was never sized right for your home." },
  { title: "A cracked heat exchanger", body: "A cracked heat exchanger can let carbon monoxide escape into your home. It’s a safety issue, and usually a sign it’s time to replace." },
  { title: "Strange noises or smells", body: "Banging, rattling, squealing, or a burning smell that doesn’t go away after the first few uses of the season are worth a look." },
];

const efficiency = [
  {
    label: "Standard efficiency",
    pct: "80%",
    summary: "Turns about 80 cents of every gas dollar into heat.",
    points: [
      "Lower upfront cost",
      "Vents through your existing metal flue",
      "Often the right fit when venting a high-efficiency furnace would be difficult or costly",
    ],
  },
  {
    label: "High efficiency",
    pct: "96%+",
    summary: "Turns 96 cents or more of every gas dollar into heat.",
    points: [
      "Uses roughly 17% less gas than an 80% furnace for the same heat",
      "Lower monthly gas bills for as long as you own it",
      "Vents through PVC pipe out a side wall or the roof",
    ],
    featured: true,
  },
];

const installDay = [
  { title: "Free in-home estimate", body: "We check your venting, gas line, ductwork and the size of your home, then recommend the furnace that fits. You get a clear price before any work is scheduled, and we pull the permit for your job." },
  { title: "Out with the old", body: "On install day, we safely disconnect your old furnace and haul it away." },
  { title: "Install the new furnace", body: "We set the new furnace and connect the gas, venting, electrical and thermostat, all to the manufacturer’s specifications." },
  { title: "Test before we leave", body: "We check gas pressure, combustion and temperature rise, and test for carbon monoxide. Then we clean up, leave the space cleaner than we found it, and walk you through your new system." },
];

const faqs = [
  {
    q: "How much does furnace replacement cost in Utah?",
    a: `Furnace replacement with Eco Home starts at ${startingPrice}. Your exact price depends on the furnace’s efficiency (80% or 96%+), its size, the brand you choose, and any venting or gas line work your home needs. Get instant pricing online or book a free estimate.`,
  },
  {
    q: "Should I get an 80% or a 96% furnace?",
    a: "It depends on your home. A 96%+ furnace uses roughly 17% less gas for the same heat, so it costs less to run every winter. An 80% furnace costs less upfront and vents through your existing metal flue, which can make it the better choice when running new venting would be difficult or expensive. We’ll look at your home and recommend the one that makes the most sense.",
  },
  {
    q: "How long does it take to replace a furnace?",
    a: "Most furnace replacements are done in a single day.",
  },
  {
    q: "How long does a furnace last?",
    a: "Most gas furnaces last about 15 to 20 years. Regular maintenance helps yours reach the long end of that range.",
  },
  {
    q: "Should I replace my air conditioner at the same time?",
    a: `If your AC is getting older, it’s worth considering. Replacing your AC with a heat pump while you replace the furnace gives you a dual-fuel system, the most efficient way to heat and cool a Utah home for the cost. Every heat pump install comes with $2,150 in rebates guaranteed, and complete dual-fuel systems start at ${dualFuelPrice} after incentives.`,
  },
  {
    q: "Do you pull a permit for furnace replacement?",
    a: "Yes, on every job. A permit means a city or county inspector checks the work for safety and code, and it protects you when you sell your home. Not every HVAC company pulls permits, so it’s worth asking anyone you get a quote from.",
  },
  {
    q: "Which furnace brands do you install?",
    a: "We install ACiQ and Amana gas furnaces. ACiQ is our most economical option. Amana furnaces come with a lifetime heat exchanger warranty.",
  },
  {
    q: "Do you offer financing?",
    a: `Yes. We offer 0% interest for 12 months through ${site.financingPartner}, subject to credit approval.`,
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Furnace replacement",
    name: "Furnace replacement",
    provider: { "@id": `${site.url}/#business` },
    areaServed: ["Utah County, UT", "Salt Lake County, UT"],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: { "@type": "PriceSpecification", minPrice: 3990, priceCurrency: "USD" },
      description: "Gas furnace replacement, starting price",
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
      { "@type": "ListItem", position: 2, name: "Furnace Replacement", item: `${site.url}/services/furnace-replacement` },
    ],
  },
];

export default function FurnaceReplacement() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70">
              <Link href="/" className="hover:underline">Home</Link> <span aria-hidden>/</span> Furnace Replacement
            </nav>
            <h1 className="display mt-3 text-[2.4rem] sm:text-6xl">
              Furnace replacement in Utah County and Salt Lake County
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              New ACiQ and Amana gas furnaces from <strong className="text-white">{startingPrice}</strong>, installed in <strong className="text-white">one day</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.instantPricingUrl} className="flex items-center gap-2 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
                <MailIcon className="h-5 w-5" /> Get instant pricing
              </a>
              <a href={site.bookingUrl} className="rounded-full px-7 py-4 text-lg font-bold text-white ring-2 ring-white/60 hover:bg-white/10">
                Book a free estimate
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
              <li className="flex items-center gap-2"><Stars /> {site.rating.value} from {site.rating.count} Google reviews</li>
              <li className="flex items-center gap-1.5"><CheckIcon className="h-4 w-4 text-sky" /> 0% interest for 12 months</li>
              <li className="flex items-center gap-1.5"><CheckIcon className="h-4 w-4 text-sky" /> Permit pulled on every job</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image src="/images/furnace-tech-thumbs-up.jpg" alt="Eco Home technician giving a thumbs up beside a new gas furnace" fill preload sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-[50%_60%]" />
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="display text-4xl sm:text-5xl">Signs it’s time to replace your furnace</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            A furnace rarely fails without warning. If two or more of these sound familiar, it’s worth getting a free estimate before the coldest part of winter.
          </p>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {signs.map((s) => (
            <li key={s.title} className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sky text-ink"><CheckIcon className="h-5 w-5" /></span>
              <span>
                <span className="block text-xl font-extrabold">{s.title}</span>
                <span className="mt-1 block text-mist">{s.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 80 VS 96 */}
      <section className="bg-sky-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="display text-4xl sm:text-5xl">80% or 96%+? We’ll recommend the right one</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              A furnace’s efficiency rating (AFUE) tells you how much of the gas it burns turns into heat for your home. Which one fits depends on your venting, where your furnace sits, your budget and how long you plan to stay.
            </p>
          </div>
          <div className="mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
            {efficiency.map((e) => (
              <div key={e.label} className={`rounded-2xl p-7 ${e.featured ? "bg-ink text-white" : "bg-white ring-1 ring-line"}`}>
                <p className={`font-bold ${e.featured ? "text-sky" : "text-teal"}`}>{e.label}</p>
                <p className="display mt-1 text-6xl">{e.pct}</p>
                <p className={`mt-3 ${e.featured ? "text-white/80" : "text-ink/80"}`}>{e.summary}</p>
                <ul className="mt-6 space-y-2.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2.5"><CheckIcon className={`mt-1 h-4 w-4 shrink-0 ${e.featured ? "text-sky" : "text-teal"}`} />{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="display text-4xl sm:text-5xl">The furnaces we install</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              We install two brands, so you always get a straight comparison and a fair price.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl p-6 ring-1 ring-line">
                <Image src="/images/aciq-logo.png" alt="ACiQ" width={739} height={281} sizes="140px" className="h-11 w-auto" />
                <p className="mt-4 font-bold">Great value</p>
                <p className="mt-1 text-mist">Our most economical furnace, with dependable heat and a factory warranty.</p>
              </div>
              <div className="rounded-2xl p-6 ring-1 ring-line">
                <Image src="/images/amana-logo.png" alt="Amana" width={900} height={190} sizes="200px" className="h-9 w-auto" />
                <p className="mt-6 font-bold">Premium</p>
                <p className="mt-1 text-mist">A lifetime heat exchanger warranty, the best coverage in its class.</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-mist">Manufacturer warranties require product registration. Ask us for the full terms.</p>
          </div>
          <figure className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src="/images/aciq-furnace-basement-install.jpg" alt="New ACiQ gas furnace installed by Eco Home in a Utah County basement" fill sizes="(min-width: 1024px) 384px, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-mist">A new ACiQ furnace we installed in a Utah County basement.</figcaption>
          </figure>
        </div>
      </section>

      {/* DUAL FUEL UPSELL */}
      <section className="bg-sky">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="wrap-type text-2xl text-white">Make it dual fuel</p>
            <h2 className="display mt-2 text-4xl text-ink sm:text-5xl">Replacing your furnace? Add a heat pump while you’re at it.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/85">
              A heat pump replaces your air conditioner and pairs with your new furnace. It heats your home efficiently for most of the year, and your furnace takes over on the coldest nights. It’s the most efficient way to heat and cool a Utah home for the cost, and doing it now means one install instead of two.
            </p>
            <ul className="mt-6 space-y-2.5 text-lg font-semibold text-ink">
              <li className="flex gap-2.5"><CheckIcon className="mt-1.5 h-4 w-4 shrink-0" /><span>$2,150 in <Link href="/rebates/rocky-mountain-power-wattsmart" className="underline underline-offset-4">Wattsmart</Link> and <Link href="/rebates/enbridge-thermwise" className="underline underline-offset-4">ThermWise</Link> rebates guaranteed, and we file the paperwork</span></li>
              <li className="flex gap-2.5"><CheckIcon className="mt-1.5 h-4 w-4 shrink-0" /> Complete systems from {dualFuelPrice} after incentives</li>
              <li className="flex gap-2.5"><CheckIcon className="mt-1.5 h-4 w-4 shrink-0" /> More efficient cooling than a standard AC</li>
            </ul>
          </div>
          <div className="grid gap-3">
            <a href={site.instantPricingUrl} className="flex items-center justify-center gap-2 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
              <MailIcon className="h-5 w-5" /> Price a dual-fuel system
            </a>
            <Link href="/heat-pumps" className="flex items-center justify-center rounded-full bg-white px-7 py-4 text-lg font-bold text-ink shadow-[0_4px_0_var(--color-ink)] hover:bg-sky-soft">
              How dual fuel works
            </Link>
          </div>
        </div>
      </section>

      {/* INSTALL DAY */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 className="display text-4xl sm:text-5xl">Installed in one day</h2>
            <p className="mt-4 text-lg text-mist">Most furnace replacements are done the same day we start. Here’s how it goes.</p>
            <ol className="mt-10 space-y-8">
              {installDay.map((s, i) => (
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
          <div className="lg:sticky lg:top-32">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/furnace-install.jpg" alt="Eco Home technician connecting a new furnace during a one-day install" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="mt-5 rounded-2xl bg-ink p-6 text-white">
              <p className="font-bold text-sky">Keep it running like new</p>
              <p className="mt-1 text-white/85">
                Our <Link href="/#care-plan" className="font-bold text-white underline underline-offset-4">Essential Care Plan</Link> includes two tune-ups a year, 10% off repairs and $250 a year toward your next system.
              </p>
            </div>
          </div>
        </div>
        <JobPromises />
      </section>

      {/* FAQ */}
      <section className="bg-sky-soft">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">Furnace replacement questions</h2>
          <div className="mt-8 divide-y divide-line rounded-2xl bg-white ring-1 ring-line">
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="display text-4xl sm:text-5xl">Get your furnace price today</h2>
            <p className="mt-4 max-w-lg text-lg text-white/85">
              Furnaces from {startingPrice}, installed in one day, with 0% interest for 12 months. Backed by our{" "}
              <Link href="/smile-guarantee" className="font-bold text-white underline underline-offset-4">Smile Guarantee</Link>.
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
