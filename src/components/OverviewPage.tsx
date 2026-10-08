import Link from "next/link";
import { site } from "@/lib/site";
import { CheckIcon, MailIcon, PhoneIcon, Stars } from "./icons";
import { ServiceCards } from "./ServiceCards";
import { JobPromises } from "./JobPromises";

// "All heating services" / "All cooling services" overview pages.
export function OverviewPage({
  label,
  path,
  h1,
  intro,
  cards,
  faqs,
}: {
  label: string;
  path: string;
  h1: string;
  intro: string;
  cards: string[];
  faqs: { q: string; a: string }[];
}) {
  const schema = [
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
        { "@type": "ListItem", position: 2, name: label, item: `${site.url}${path}` },
      ],
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70">
            <Link href="/" className="hover:underline">Home</Link> <span aria-hidden>/</span> {label}
          </nav>
          <h1 className="display mt-3 max-w-4xl text-[2.4rem] sm:text-6xl">{h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.bookingUrl} className="rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
              Book service
            </a>
            <a href={site.phoneHref} className="flex items-center gap-2 rounded-full px-7 py-4 text-lg font-bold text-white ring-2 ring-white/60 hover:bg-white/10">
              <PhoneIcon className="h-5 w-5" /> {site.phone}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
            <li className="flex items-center gap-2"><Stars /> {site.rating.value} from {site.rating.count} Google reviews</li>
            <li className="flex items-center gap-1.5"><CheckIcon className="h-4 w-4 text-sky" /> Open 24/7</li>
            <li className="flex items-center gap-1.5"><CheckIcon className="h-4 w-4 text-sky" /> Permit pulled on every job</li>
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="display text-4xl sm:text-5xl">Our {label.toLowerCase()} services</h2>
        <div className="mt-10">
          <ServiceCards keys={cards} />
        </div>
      </section>

      {/* DUAL FUEL */}
      <section className="bg-sky">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="wrap-type text-2xl text-white">Our recommendation</p>
            <h2 className="display mt-2 text-4xl text-ink sm:text-5xl">A heat pump with a gas furnace is the ideal Utah system</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/85">
              A dual-fuel system heats and cools your home efficiently all year. The heat pump handles cooling and most of your heating, and the gas furnace takes over on the coldest nights. It’s the most efficient setup for the cost, and it qualifies for the biggest rebates.
            </p>
            <ul className="mt-6 space-y-2.5 text-lg font-semibold text-ink">
              <li className="flex gap-2.5"><CheckIcon className="mt-1.5 h-4 w-4 shrink-0" /><span>$2,150 in rebates guaranteed, and we file the paperwork</span></li>
              <li className="flex gap-2.5"><CheckIcon className="mt-1.5 h-4 w-4 shrink-0" /><span>Complete systems from $9,990 after incentives</span></li>
              <li className="flex gap-2.5"><CheckIcon className="mt-1.5 h-4 w-4 shrink-0" /><span>ACiQ and Amana inverter heat pumps</span></li>
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

      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
        <JobPromises />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="display text-4xl sm:text-5xl">{label} questions</h2>
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
            <h2 className="display text-4xl sm:text-5xl">We’re here day or night</h2>
            <p className="mt-4 max-w-lg text-lg text-white/85">Book online in a minute, or give us a call. We’re open 24/7.</p>
          </div>
          <div className="grid gap-3">
            <a href={site.bookingUrl} className="flex items-center justify-center rounded-full bg-white px-7 py-4 text-lg font-bold text-ink shadow-[0_4px_0_#052f3d] hover:bg-sky-soft">Book service</a>
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
