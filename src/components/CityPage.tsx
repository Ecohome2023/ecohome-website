import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import type { City } from "@/lib/cities";
import { guaranteed } from "@/lib/rebates";
import { googleReviews } from "@/lib/reviews";
import { CheckIcon, MailIcon, PhoneIcon, Stars } from "./icons";
import { JobPromises } from "./JobPromises";
import { ReviewRotator } from "./ReviewRotator";
import { servicesForCity } from "@/lib/cityServices";

const services = [
  { href: "/services/furnace-repair", title: "Furnace repair", blurb: "No heat, short cycling or strange noises. Upfront price before any work." },
  { href: "/services/ac-repair", title: "AC repair", blurb: "Warm air, a unit that won’t turn on, or rooms that won’t cool." },
  { href: "/services/heat-pump-repair", title: "Heat pump repair", blurb: "Diagnostics and repairs for all major heat pump brands." },
  { href: "/heat-pumps", title: "Heat pump installation", blurb: "Inverter heat pumps paired with a gas furnace, with rebates guaranteed." },
  { href: "/services/furnace-replacement", title: "Furnace replacement", blurb: "New ACiQ and Amana furnaces from $3,990, installed in one day." },
  { href: "/services/ac-replacement", title: "AC replacement", blurb: "Replace your AC with a heat pump that cools and heats." },
  { href: "/services/mini-splits", title: "Ductless mini-splits", blurb: "Garages, additions and hard-to-cool rooms." },
  { href: "/services/heating-tune-up", title: "Tune-ups", blurb: "Seasonal tune-ups that catch problems before they leave you without heat or cooling." },
];

export function CityPage({ city: c }: { city: City }) {
  const path = `/service-area/${c.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: `${site.url}${path}`,
      name: c.h1,
      dateModified: c.updated,
      primaryImageOfPage: `${site.url}${c.job.img}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Heating and air conditioning in ${c.name}, UT`,
      serviceType: "HVAC repair and installation",
      description: c.metaDescription,
      url: `${site.url}${path}`,
      image: `${site.url}${c.job.img}`,
      provider: { "@id": `${site.url}/#business` },
      areaServed: { "@type": "City", name: `${c.name}, UT`, containedInPlace: { "@type": "AdministrativeArea", name: `${c.county}, UT` } },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Service area", item: `${site.url}/#service-area` },
        { "@type": "ListItem", position: 3, name: c.name, item: `${site.url}${path}` },
      ],
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70">
              <Link href="/" className="hover:underline">Home</Link> <span aria-hidden>/</span>{" "}
              <Link href="/#service-area" className="hover:underline">Service area</Link> <span aria-hidden>/</span> {c.name}
            </nav>
            <h1 className="display mt-3 text-[2.4rem] sm:text-6xl">{c.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">{c.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={site.instantPricingUrl} className="flex items-center gap-2 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
                <MailIcon className="h-5 w-5" /> Get instant pricing
              </Link>
              <a href={site.bookingUrl} className="rounded-full px-7 py-4 text-lg font-bold text-white ring-2 ring-white/60 hover:bg-white/10">Book service</a>
              <a href={site.phoneHref} className="flex items-center gap-2 rounded-full px-5 py-4 text-lg font-bold text-sky hover:underline">
                <PhoneIcon className="h-5 w-5" /> {site.phone}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
              <li className="flex items-center gap-2"><Stars /> {site.rating.value} from {site.rating.count} Google reviews</li>
              <li className="flex items-center gap-1.5"><CheckIcon className="h-4 w-4 text-sky" /> Open 24/7</li>
              <li className="flex items-center gap-1.5"><CheckIcon className="h-4 w-4 text-sky" /> Permits pulled on every job</li>
            </ul>
          </div>
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-4 ring-white/10">
              <Image src={c.job.img} alt={c.job.alt} fill preload sizes="(min-width: 1024px) 520px, 100vw" className="object-cover object-[50%_60%]" />
            </div>
            {c.heroCaption && <figcaption className="mt-3 text-sm font-semibold text-white/70">{c.heroCaption}</figcaption>}
          </figure>
        </div>
      </section>

      {/* INTRO + LOCAL FACTS */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
        <div>
          <h2 className="display text-3xl sm:text-4xl">Your {c.name} HVAC company</h2>
          {c.intro.map((p) => (
            <p key={p.slice(0, 20)} className="mt-5 text-lg leading-relaxed text-ink/85">{p}</p>
          ))}
        </div>
        <aside className="rounded-3xl bg-sky-soft p-7">
          <h2 className="text-xl font-extrabold">{c.name} at a glance</h2>
          <dl className="mt-4 divide-y divide-line">
            {c.facts.map((f) => (
              <div key={f.label} className="flex justify-between gap-4 py-3">
                <dt className="font-semibold text-mist">{f.label}</dt>
                <dd className="text-right font-bold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      {/* LOCAL JOB */}
      <section className="bg-sky-soft">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div>
            <p className="wrap-type text-xl text-alarm-strong" style={{ textShadow: "none" }}>A recent {c.name} job</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl">{c.job.title}</h2>
            <dl className="mt-6 space-y-5 text-lg leading-relaxed">
              <div><dt className="font-extrabold">The problem</dt><dd className="mt-1 text-ink/85">{c.job.problem}</dd></div>
              <div><dt className="font-extrabold">What we installed</dt><dd className="mt-1 text-ink/85">{c.job.solution}</dd></div>
            </dl>
          </div>
          <div className="rounded-3xl bg-ink p-7 text-white lg:mt-10">
            <p className="text-sm font-bold uppercase tracking-wider text-sky">The result</p>
            <p className="mt-3 text-2xl font-extrabold leading-snug">{c.job.result}</p>
            <p className="mt-5 font-semibold text-white/70">{c.job.customer}, {c.name}</p>
            <Link href={site.instantPricingUrl} className="mt-6 inline-block rounded-full bg-alarm-strong px-6 py-3 font-bold text-white hover:brightness-110">Price a system like this</Link>
            {c.job.more && <Link href={c.job.more} className="mt-4 block font-bold text-sky hover:underline">Read the full story ›</Link>}
          </div>
        </div>
      </section>

      {/* HOMES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="display max-w-3xl text-3xl sm:text-4xl">What we see in {c.name} homes</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {c.homes.map((h) => (
            <article key={h.title} className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <h3 className="text-xl font-extrabold">{h.title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{h.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* REBATES */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="display text-3xl sm:text-4xl">{c.rmp ? `${guaranteed.total} in rebates, guaranteed, for ${c.name} homes` : `Rebates for ${c.name} homes`}</h2>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              {c.rmp
                ? `${c.name} homes are served by Rocky Mountain Power and Enbridge Gas, so a heat pump paired with a gas furnace qualifies for both programs. We file the paperwork for you.`
                : `${c.name} runs its own city power, so the Rocky Mountain Power rebate doesn’t apply. Enbridge Gas and manufacturer rebates still do, and we file the paperwork for you.`}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
              {c.rmp && <Link href="/rebates/rocky-mountain-power-wattsmart" className="text-sky hover:underline">Wattsmart rebates ›</Link>}
              <Link href="/rebates/enbridge-thermwise" className="text-sky hover:underline">ThermWise rebates ›</Link>
              <Link href="/rebates/dealer-rebates" className="text-sky hover:underline">Dealer rebates ›</Link>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {c.rmp && <li className="rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/15"><p className="display text-4xl text-sky">{guaranteed.rmp}</p><p className="mt-1 font-semibold">Rocky Mountain Power Wattsmart, on every heat pump</p></li>}
            <li className="rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/15"><p className="display text-4xl text-sky">{guaranteed.enbridge80}–{guaranteed.enbridge96}</p><p className="mt-1 font-semibold">Enbridge Gas ThermWise, with a gas furnace</p></li>
            {!c.rmp && <li className="rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/15"><p className="display text-4xl text-sky">$400–$2,000</p><p className="mt-1 font-semibold">Amana and ACiQ dealer rebates, when offered</p></li>}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="display text-3xl sm:text-4xl">HVAC services in {c.name}</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const local = servicesForCity(c.slug).find((l) => l.mainHref === s.href);
            return (
            <li key={s.href}>
              <Link href={local ? `/service-area/${c.slug}/${local.slug}` : s.href} className="block h-full rounded-2xl bg-white p-5 ring-1 ring-line hover:ring-ink">
                <span className="text-lg font-extrabold">{s.title} <span aria-hidden="true" className="text-alarm-strong">›</span></span>
                <span className="mt-2 block text-mist">{!c.rmp && s.href === "/heat-pumps" ? "Inverter heat pumps paired with a gas furnace, with your rebates filed for you." : s.blurb}</span>
              </Link>
            </li>
            );
          })}
        </ul>
        <JobPromises />
      </section>

      {/* REVIEWS */}
      <section className="bg-sky-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="display text-3xl sm:text-4xl">What our customers say</h2>
            <a href={site.googleProfileUrl} className="mt-4 inline-flex items-center gap-2 text-lg font-semibold hover:underline">
              <Stars /> {site.rating.value} from {site.rating.count} Google reviews
            </a>
          </div>
          <ReviewRotator reviews={googleReviews} />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        <h2 className="display text-3xl sm:text-4xl">{c.name} HVAC questions</h2>
        <div className="divide-y divide-line border-y border-line">
          {c.faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold">
                <h3>{f.q}</h3>
                <span className="text-2xl text-alarm-strong transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-mist">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* MAP + NEARBY + CTA */}
      <section className="bg-sky">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="display text-3xl text-ink sm:text-4xl">Heating and cooling help in {c.name}, any time</h2>
            <p className="mt-4 text-lg text-ink/85">Get your price in two minutes, book online, or call. We’re open 24/7.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={site.instantPricingUrl} className="rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#7a0018] hover:brightness-110">Get instant pricing</Link>
              <a href={site.phoneHref} className="flex items-center gap-2 rounded-full bg-white px-6 py-4 text-lg font-bold ring-2 ring-ink"><PhoneIcon className="h-5 w-5" />{site.phone}</a>
            </div>
            <p className="mt-8 font-semibold text-ink">Also serving nearby: {c.nearby.join(", ")}.</p>
          </div>
          <div className="overflow-hidden rounded-3xl ring-4 ring-ink">
            <iframe
              title={`Map to ${site.name} in American Fork`}
              src={c.mapEmbed ?? site.googleMapEmbed}
              className="aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <p className="mx-auto max-w-7xl px-4 pb-10 text-sm text-mist sm:px-6">
        Page updated <time dateTime={c.updated}>{new Date(`${c.updated}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
