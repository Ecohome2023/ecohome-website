import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { CheckIcon, MailIcon, PhoneIcon, Stars } from "@/components/icons";
import { JobPromises } from "@/components/JobPromises";
import { SystemOptions } from "@/components/SystemOptions";

export const metadata: Metadata = {
  title: "AC Replacement in Utah County & Salt Lake",
  description:
    "Replacing your air conditioner? Upgrade to an ACiQ or Amana heat pump that cools like an AC and adds efficient heat, with $2,150 in rebates guaranteed. Serving Utah County and Salt Lake County.",
  alternates: { canonical: "/services/ac-replacement" },
};

const dualFuelPrice = "$9,990";

const signs = [
  { title: "It’s 12 to 15 years old or more", body: "Most central air conditioners last about 12 to 15 years. Past that point, breakdowns get more common and efficiency keeps dropping." },
  { title: "It uses R-22 refrigerant", body: "Many older systems use R-22, which is no longer produced in the U.S. If yours leaks, recharging it is expensive and getting harder to do." },
  { title: "Repairs keep adding up", body: "If a repair costs a big share of a new system, or you’ve had several repairs in a couple of summers, replacing usually makes more sense." },
  { title: "Your summer power bills are climbing", body: "An older AC uses more electricity to make the same cooling. A rising bill with no change in how you use it is a common sign." },
  { title: "It can’t keep up on hot days", body: "If the house never quite cools down in July, or upstairs rooms stay hot, the system may be failing or sized wrong for your home." },
  { title: "Strange noises or leaks", body: "Grinding, squealing, banging, or water and ice around the unit are all worth a look before they turn into a breakdown." },
];

const comparison = [
  { label: "Cooling", hp: "Cools just like an AC, with efficiency up to 21 SEER2", ac: "Cools only" },
  { label: "Heating", hp: "Adds efficient heat for spring, fall and most of winter, with your gas furnace as backup", ac: "No heating" },
  { label: "Comfort", hp: "Inverter runs at low speed for steady, even temperatures", ac: "Usually on/off, so temperatures swing" },
  { label: "Noise", hp: "Quiet, as low as 45 decibels on Amana models", ac: "Louder, runs at full blast" },
  { label: "Rebates", hp: "$2,150 guaranteed, up to $4,450", ac: "Few or no rebates" },
  { label: "Cost after rebates", hp: "Often about the same as a standard AC", ac: "No rebates to bring the price down" },
];

const installDay = [
  { title: "Free in-home estimate", body: "We check your existing furnace, electrical, ductwork and the size of your home, then recommend the system that fits. You get a clear price, with your rebates shown up front, and we pull the permit for your job." },
  { title: "Out with the old", body: "On install day, we safely recover the refrigerant from your old AC, disconnect it and haul it away." },
  { title: "Install the new heat pump", body: "We set the new outdoor unit and connect the refrigerant lines, electrical and thermostat, and set it up to work with your gas furnace." },
  { title: "Test before we leave", body: "We check refrigerant pressures, temperatures and airflow in both cooling and heating modes. Then we clean up, leave your home cleaner than we found it, and walk you through your new system." },
];

const faqs = [
  {
    q: "Should I replace my AC with another AC or a heat pump?",
    a: "For most Utah homes, a heat pump. It cools exactly like an air conditioner, adds efficient heat for most of the year, and qualifies for $2,150 in guaranteed rebates that a standard AC doesn’t. After rebates, a heat pump often costs about the same as a standard AC.",
  },
  {
    q: "How much does AC replacement cost in Utah?",
    a: `It depends on your home’s size, your ductwork, your existing furnace and the equipment you choose. Complete dual-fuel systems, a heat pump with a gas furnace, start at ${dualFuelPrice} after incentives. Get instant pricing online or book a free estimate to see your exact price with rebates included.`,
  },
  {
    q: "Can a heat pump work with my existing gas furnace?",
    a: "In many homes, yes. The heat pump replaces your AC and your furnace becomes the backup heat on the coldest nights. During your free estimate, we check whether your furnace is a good match. If it’s getting older too, replacing both at once means one install instead of two.",
  },
  {
    q: "Do heat pumps really work in Utah winters?",
    a: "Yes. Today’s inverter heat pumps keep heating efficiently well below freezing, and with a gas furnace as backup, you’re covered on the coldest nights. The system picks whichever is cheaper to run at the moment.",
  },
  {
    q: "How long does an air conditioner last?",
    a: "Most central air conditioners last about 12 to 15 years. Regular maintenance helps yours reach the long end of that range.",
  },
  {
    q: "Do you pull a permit for AC replacement?",
    a: "Yes, on every job. A permit means a city or county inspector checks the work for safety and code, and it protects you when you sell your home. Not every HVAC company pulls permits, so it’s worth asking anyone you get a quote from.",
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
    serviceType: "Air conditioner replacement",
    name: "AC replacement",
    provider: { "@id": `${site.url}/#business` },
    areaServed: ["Utah County, UT", "Salt Lake County, UT"],
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
      { "@type": "ListItem", position: 2, name: "AC Replacement", item: `${site.url}/services/ac-replacement` },
    ],
  },
];

export default function AcReplacement() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70">
              <Link href="/" className="hover:underline">Home</Link> <span aria-hidden>/</span> AC Replacement
            </nav>
            <h1 className="display mt-3 text-[2.4rem] sm:text-6xl">
              AC replacement in Utah County and Salt Lake County
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Replacing your air conditioner? Upgrade to a <strong className="text-white">heat pump</strong>. It cools just like an AC, adds efficient heat, and comes with <strong className="text-white">$2,150 in rebates guaranteed</strong>.
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
            <Image src="/images/tech-heat-pump-install.jpg" alt="Eco Home technician connecting refrigerant gauges to a new heat pump that replaced an air conditioner" fill preload sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-[60%_50%]" />
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="display text-4xl sm:text-5xl">Signs it’s time to replace your AC</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            If two or more of these sound familiar, it’s worth getting a free estimate before your AC quits on the hottest day of the year.
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

      {/* HEAT PUMP PITCH */}
      <section className="bg-sky">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="wrap-type text-2xl text-white">Our recommendation</p>
            <h2 className="display mt-2 text-4xl text-ink sm:text-5xl">Don’t just replace your AC. Upgrade to a heat pump.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/85">
              A heat pump is an air conditioner that can also heat. It takes the place of your AC and pairs with your gas furnace to create a dual-fuel system, the most efficient way to heat and cool a Utah home for the cost. And thanks to rebates, it often costs about the same as a standard AC.
            </p>
            <ul className="mt-6 space-y-2.5 text-lg font-semibold text-ink">
              <li className="flex gap-2.5"><CheckIcon className="mt-1.5 h-4 w-4 shrink-0" /><span>Cools exactly like an air conditioner</span></li>
              <li className="flex gap-2.5"><CheckIcon className="mt-1.5 h-4 w-4 shrink-0" /><span>Heats efficiently for most of the year, with your furnace as backup</span></li>
              <li className="flex gap-2.5"><CheckIcon className="mt-1.5 h-4 w-4 shrink-0" /><span>$2,150 in <Link href="/rebates/rocky-mountain-power-wattsmart" className="underline underline-offset-4">Wattsmart</Link> and <Link href="/rebates/enbridge-thermwise" className="underline underline-offset-4">ThermWise</Link> rebates guaranteed, and we file the paperwork</span></li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.instantPricingUrl} className="flex items-center gap-2 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
                <MailIcon className="h-5 w-5" /> Price a heat pump
              </a>
              <Link href="/heat-pumps" className="flex items-center rounded-full bg-white px-7 py-4 text-lg font-bold text-ink shadow-[0_4px_0_var(--color-ink)] hover:bg-sky-soft">
                How heat pumps work
              </Link>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-4 ring-white">
              <Image src="/images/heat-pump-brick-home.jpg" alt="New heat pump installed by Eco Home beside a brick Utah home" fill sizes="(min-width: 1024px) 384px, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-sm font-semibold text-ink/80">A new heat pump that replaced an old air conditioner.</figcaption>
          </figure>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="display text-4xl sm:text-5xl">Heat pump vs. a new standard AC</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/85">
          Both cool your home. Here’s what you get when you choose a heat pump instead.
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-line">
          <table className="w-full table-fixed text-left text-sm sm:text-base">
            <caption className="sr-only">Comparison of a heat pump and a standard air conditioner</caption>
            <thead>
              <tr>
                <th scope="col" className="w-[24%] p-3 sm:p-5"><span className="sr-only">Feature</span></th>
                <th scope="col" className="bg-ink p-3 align-bottom text-white sm:p-5">
                  <span className="block text-xs font-bold text-sky sm:text-sm">What we recommend</span>
                  <span className="display block text-lg sm:text-2xl">Heat pump</span>
                </th>
                <th scope="col" className="p-3 align-bottom sm:p-5">
                  <span className="block text-xs font-bold text-mist sm:text-sm">Traditional</span>
                  <span className="display block text-lg sm:text-2xl">Standard AC</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-t border-line">
                  <th scope="row" className="p-3 align-top font-extrabold sm:p-5">{row.label}</th>
                  <td className="bg-sky/10 p-3 align-top sm:p-5">
                    <span className="flex gap-2"><CheckIcon className="mt-0.5 hidden h-5 w-5 shrink-0 text-teal sm:block" /><span>{row.hp}</span></span>
                  </td>
                  <td className="p-3 align-top text-mist sm:p-5">{row.ac}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-mist">
          Rebates assume you’re a Rocky Mountain Power and Enbridge Gas customer. See how{" "}
          <Link href="/rebates/rocky-mountain-power-wattsmart" className="font-semibold text-teal underline underline-offset-4">Wattsmart</Link>,{" "}
          <Link href="/rebates/enbridge-thermwise" className="font-semibold text-teal underline underline-offset-4">ThermWise</Link> and{" "}
          <Link href="/rebates/dealer-rebates" className="font-semibold text-teal underline underline-offset-4">dealer rebates</Link> work.
        </p>
      </section>

      {/* OPTIONS */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h2 className="display max-w-3xl text-4xl sm:text-5xl">Two great heat pump options</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Both pair with a gas furnace and qualify for the same rebates. Get both priced for your home and emailed to you instantly.
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

      {/* INSTALL DAY */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 className="display text-4xl sm:text-5xl">How your install goes</h2>
            <p className="mt-4 text-lg text-mist">From the first visit to the final test, here’s what to expect.</p>
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
              <Image src="/images/tech-eco-home-shirt-heat-pump.jpg" alt="Eco Home technician leveling a new heat pump beside a Utah home" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="mt-5 rounded-2xl bg-ink p-6 text-white">
              <p className="font-bold text-sky">Is your furnace getting older too?</p>
              <p className="mt-1 text-white/85">
                Replacing both at once means one install instead of two, and a matched system. See our{" "}
                <Link href="/services/furnace-replacement" className="font-bold text-white underline underline-offset-4">furnace replacement</Link> options.
              </p>
            </div>
          </div>
        </div>
        <JobPromises />
      </section>

      {/* FAQ */}
      <section className="bg-sky-soft">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">AC replacement questions</h2>
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
            <h2 className="display text-4xl sm:text-5xl">See your heat pump price today</h2>
            <p className="mt-4 max-w-lg text-lg text-white/85">
              $2,150 in rebates guaranteed, 0% interest for 12 months, and every install backed by our{" "}
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
