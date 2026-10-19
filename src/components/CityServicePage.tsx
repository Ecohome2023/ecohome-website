import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import type { City } from "@/lib/cities";
import { servicesForCity, type CityService } from "@/lib/cityServices";
import { googleReviews } from "@/lib/reviews";
import { CheckIcon, MailIcon, PhoneIcon, Stars } from "./icons";
import { JobPromises } from "./JobPromises";
import { ReviewRotator } from "./ReviewRotator";

export function CityServicePage({ city: c, page: p }: { city: Pick<City, "slug" | "name">; page: CityService }) {
  const cityPath = `/service-area/${c.slug}`;
  const path = `${cityPath}/${p.slug}`;
  const others = servicesForCity(c.slug).filter((s) => s.slug !== p.slug);
  const primary = p.primaryCta === "INSTANT"
    ? { label: "Get instant pricing", href: site.instantPricingUrl, icon: true }
    : { label: "Book a repair", href: site.bookLinks.repair, icon: false };

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: `${site.url}${path}`,
      name: p.h1,
      dateModified: p.updated,
      primaryImageOfPage: `${site.url}${p.heroImg.src}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${p.serviceName} in ${c.name}, UT`,
      serviceType: p.serviceName,
      description: p.metaDescription,
      url: `${site.url}${path}`,
      image: `${site.url}${p.heroImg.src}`,
      provider: { "@id": `${site.url}/#business` },
      areaServed: { "@type": "City", name: `${c.name}, UT` },
      ...(p.offer && { offers: { "@type": "Offer", price: p.offer.price, priceCurrency: "USD", description: p.offer.description } }),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: c.name, item: `${site.url}${cityPath}` },
        { "@type": "ListItem", position: 3, name: p.serviceName, item: `${site.url}${path}` },
      ],
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70">
              <Link href="/" className="hover:underline">Home</Link> <span aria-hidden>/</span>{" "}
              <Link href={cityPath} className="hover:underline">{c.name}</Link> <span aria-hidden>/</span> {p.serviceName}
            </nav>
            <h1 className="display mt-3 text-[2.4rem] sm:text-6xl">{p.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">{p.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={primary.href} className="flex items-center gap-2 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
                {primary.icon && <MailIcon className="h-5 w-5" />} {primary.label}
              </a>
              <a href={site.phoneHref} className="flex items-center gap-2 rounded-full px-7 py-4 text-lg font-bold text-white ring-2 ring-white/60 hover:bg-white/10">
                <PhoneIcon className="h-5 w-5" /> {site.phone}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
              <li className="flex items-center gap-2"><Stars /> {site.rating.value} from {site.rating.count} Google reviews</li>
              <li className="flex items-center gap-1.5"><CheckIcon className="h-4 w-4 text-sky" /> Open 24/7</li>
              <li className="flex items-center gap-1.5"><CheckIcon className="h-4 w-4 text-sky" /> {c.name === site.address.city ? `Based in ${c.name}` : `Serving all of ${c.name}`}</li>
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-4 ring-white/10">
            <Image src={p.heroImg.src} alt={p.heroImg.alt} fill preload sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" style={{ objectPosition: p.heroImg.pos }} />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        {p.intro.map((t) => (
          <p key={t.slice(0, 24)} className="mt-5 text-lg leading-relaxed text-ink/85 first:mt-0 sm:text-xl">{t}</p>
        ))}
      </section>

      {/* LOCAL FACTORS */}
      <section className="bg-sky-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="display text-3xl sm:text-4xl">{p.factorsTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {p.factors.map((f) => (
              <article key={f.title} className="rounded-2xl bg-white p-6 ring-1 ring-line">
                <h3 className="text-xl font-extrabold">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="display text-3xl sm:text-4xl">{p.listTitle}</h2>
        <p className="mt-3 text-lg text-mist">{p.listIntro}</p>
        <ul className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {p.list.map((i) => (
            <li key={i.title} className="flex gap-3">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-alarm-strong" />
              <span><h3 className="text-lg font-extrabold">{i.title}</h3><span className="mt-1 block leading-relaxed text-mist">{i.body}</span></span>
            </li>
          ))}
        </ul>
      </section>

      {/* JOB STORY */}
      {p.job && (
        <section className="bg-sky-soft">
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="wrap-type text-xl text-alarm-strong" style={{ textShadow: "none" }}>A recent {c.name} install</p>
              <h2 className="display mt-2 text-3xl sm:text-4xl">{p.job.title}</h2>
              <dl className="mt-6 space-y-5 text-lg leading-relaxed">
                <div><dt className="font-extrabold">The problem</dt><dd className="mt-1 text-ink/85">{p.job.problem}</dd></div>
                <div><dt className="font-extrabold">What we installed</dt><dd className="mt-1 text-ink/85">{p.job.solution}</dd></div>
              </dl>
              {p.job.before && p.job.after && (
                <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                  {[{ ...p.job.before, label: "Before" }, { ...p.job.after, label: "After" }].map((ph) => (
                    <figure key={ph.label} className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-line">
                      <Image src={ph.src} alt={ph.alt} fill sizes="(min-width: 1024px) 340px, 50vw" className="object-cover" />
                      <figcaption className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-sm font-bold text-white">{ph.label}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
            <div className="rounded-3xl bg-ink p-7 text-white lg:mt-10">
              <p className="text-sm font-bold uppercase tracking-wider text-sky">The result</p>
              <p className="mt-3 text-2xl font-extrabold leading-snug">{p.job.result}</p>
              <p className="mt-5 font-semibold text-white/70">{p.job.customer}, {c.name}</p>
            </div>
          </div>
        </section>
      )}

      {/* PRICE + DECIDE */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="display text-3xl sm:text-4xl">{p.price.title}</h2>
            <p className="mt-4 text-lg text-white/80">{p.price.body}</p>
            <ul className="mt-6 space-y-3">
              {p.price.points.map((t) => (
                <li key={t} className="flex gap-3 font-semibold"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky" />{t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={primary.href} className="rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#7a0018] hover:brightness-110">{primary.label}</a>
              {p.primaryCta === "BOOK" && <Link href="/#care-plan" className="rounded-full px-7 py-4 text-lg font-bold ring-2 ring-white/60 hover:bg-white/10">See the Care Plan</Link>}
            </div>
          </div>
          {p.decide && (
            <div className="rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/15">
              <h2 className="text-2xl font-extrabold">{p.decideTitle}</h2>
              {p.decide.map((t) => <p key={t.slice(0, 24)} className="mt-4 leading-relaxed text-white/80">{t}</p>)}
              <Link href={site.instantPricingUrl} className="mt-6 inline-block font-bold text-sky hover:underline">See what a new system costs ›</Link>
            </div>
          )}
        </div>
      </section>

      {/* SAFETY */}
      {p.safety && (
        <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
          <div className="rounded-3xl border-4 border-alarm-strong p-7">
            <h2 className="text-2xl font-extrabold">{p.safety.title}</h2>
            <p className="mt-3 text-lg leading-relaxed">{p.safety.body}</p>
          </div>
        </section>
      )}

      {/* PROMISES */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
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
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="display text-3xl sm:text-4xl">{p.serviceName} in {c.name}: questions</h2>
        <div className="divide-y divide-line border-y border-line">
          {p.faqs.map((f, i) => (
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

      {/* MORE IN THIS CITY */}
      <section className="bg-sky">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl text-ink">More from Eco Home in {c.name}</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            <li><Link href={cityPath} className="inline-block rounded-full bg-white px-5 py-3 font-bold ring-2 ring-ink hover:bg-sky-soft">All {c.name} heating and AC</Link></li>
            {others.map((o) => (
              <li key={o.slug}><Link href={`${cityPath}/${o.slug}`} className="inline-block rounded-full bg-white px-5 py-3 font-bold ring-2 ring-ink hover:bg-sky-soft">{o.serviceName} in {c.name}</Link></li>
            ))}
            <li><Link href={p.mainHref} className="inline-block rounded-full bg-white px-5 py-3 font-bold ring-2 ring-ink hover:bg-sky-soft">{c.name.endsWith("County") ? `More about ${p.serviceName.toLowerCase()}` : `${p.serviceName} across Utah County`}</Link></li>
          </ul>
        </div>
      </section>

      <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-mist sm:px-6">
        Page updated <time dateTime={p.updated}>{new Date(`${p.updated}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
