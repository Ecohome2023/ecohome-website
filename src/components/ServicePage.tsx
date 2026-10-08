import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { related, type Service } from "@/lib/services";
import { CheckIcon, MailIcon, PhoneIcon, Stars } from "./icons";
import { ServiceCards } from "./ServiceCards";

const resolve = (href: string) => (href === "INSTANT" ? site.instantPricingUrl : href === "BOOK" ? site.bookingUrl : href);

function SmartLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  const url = resolve(href);
  return url.startsWith("/") ? <Link href={url} className={className}>{children}</Link> : <a href={url} className={className}>{children}</a>;
}

const whyUs = [
  { title: "Open 24/7", body: "Nights, weekends and holidays. A real person answers." },
  { title: "Upfront pricing", body: "You see the price before any work starts." },
  { title: "Smile Guarantee", body: "One year on our workmanship. If it’s not right, we fix it free." },
  { title: "Licensed and insured", body: `Utah contractor license #${site.license}.` },
];

export function ServicePage({ service: s }: { service: Service }) {
  const primaryHero =
    s.kind === "install"
      ? { label: "Get instant pricing", href: site.instantPricingUrl, mail: true }
      : { label: s.kind === "tune-up" ? "Book a tune-up" : "Book service", href: site.bookingUrl, mail: false };

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: s.h1.split(" in ")[0],
      name: s.h1.split(" in ")[0],
      provider: { "@id": `${site.url}/#business` },
      areaServed: ["Utah County, UT", "Salt Lake County, UT"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: s.parent.label, item: `${site.url}${s.parent.href}` },
        { "@type": "ListItem", position: 3, name: s.h1.split(" in ")[0], item: `${site.url}${s.href}` },
      ],
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70">
              <Link href="/" className="hover:underline">Home</Link> <span aria-hidden>/</span>{" "}
              <Link href={s.parent.href} className="hover:underline">{s.parent.label}</Link> <span aria-hidden>/</span> {s.h1.split(" in ")[0]}
            </nav>
            <h1 className="display mt-3 text-[2.4rem] sm:text-6xl">{s.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">{s.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={primaryHero.href} className="flex items-center gap-2 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
                {primaryHero.mail && <MailIcon className="h-5 w-5" />} {primaryHero.label}
              </a>
              {s.kind === "install" ? (
                <a href={site.bookingUrl} className="rounded-full px-7 py-4 text-lg font-bold text-white ring-2 ring-white/60 hover:bg-white/10">Book a free estimate</a>
              ) : (
                <a href={site.phoneHref} className="flex items-center gap-2 rounded-full px-7 py-4 text-lg font-bold text-white ring-2 ring-white/60 hover:bg-white/10">
                  <PhoneIcon className="h-5 w-5" /> {site.phone}
                </a>
              )}
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
              <li className="flex items-center gap-2"><Stars /> {site.rating.value} from {site.rating.count} Google reviews</li>
              {s.trust.map((t) => (
                <li key={t} className="flex items-center gap-1.5"><CheckIcon className="h-4 w-4 text-sky" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image src={s.heroImg.src} alt={s.heroImg.alt} fill preload sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" style={s.heroImg.pos ? { objectPosition: s.heroImg.pos } : undefined} />
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="display text-4xl sm:text-5xl">{s.listTitle}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">{s.listIntro}</p>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {s.list.map((l) => (
            <li key={l.title} className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sky text-ink"><CheckIcon className="h-5 w-5" /></span>
              <span>
                <span className="block text-xl font-extrabold">{l.title}</span>
                <span className="mt-1 block text-mist">{l.body}</span>
              </span>
            </li>
          ))}
        </ul>
        {s.safety && (
          <div className="mt-12 flex flex-col gap-2 rounded-2xl border-l-8 border-alarm-strong bg-sky-soft p-6 sm:flex-row sm:items-center sm:gap-6">
            <p className="shrink-0 whitespace-nowrap text-xl font-extrabold text-alarm-strong">{s.safety.title}</p>
            <p className="text-ink/85">{s.safety.body}</p>
          </div>
        )}
      </section>

      {/* OFFER */}
      <section className="bg-alarm-strong text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="wrap-type text-xl" style={{ textShadow: "none" }}>{s.offer.eyebrow}</p>
            <h2 className="display mt-1 text-3xl sm:text-5xl">{s.offer.title}</h2>
            <p className="mt-3 max-w-2xl text-lg text-white">{s.offer.body}</p>
          </div>
          <div className="grid gap-3">
            <a href={primaryHero.href} className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-lg font-bold text-ink shadow-[0_4px_0_#8a001c] hover:bg-sky-soft">
              {primaryHero.mail && <MailIcon className="h-5 w-5" />} {primaryHero.label}
            </a>
            <a href={site.phoneHref} className="flex items-center justify-center gap-2 rounded-full px-7 py-4 text-lg font-bold ring-2 ring-white/70 hover:bg-white/10">
              <PhoneIcon className="h-5 w-5" /> {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* STEPS + WHY US */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="display text-4xl sm:text-5xl">{s.stepsTitle}</h2>
            <ol className="mt-10 space-y-8">
              {s.steps.map((st, i) => (
                <li key={st.title} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="display grid h-12 w-12 place-items-center rounded-full bg-ink text-xl text-sky">{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-extrabold">{st.title}</h3>
                    <p className="mt-1 text-mist">{st.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl bg-ink p-7 text-white lg:sticky lg:top-32">
            <h2 className="text-2xl font-extrabold">Why homeowners choose Eco Home</h2>
            <ul className="mt-6 space-y-5">
              {whyUs.map((w) => (
                <li key={w.title} className="flex gap-3">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-sky" />
                  <span>
                    <span className="block font-bold">
                      {w.title === "Smile Guarantee" ? <Link href="/smile-guarantee" className="underline underline-offset-4">Smile Guarantee</Link> : w.title}
                    </span>
                    <span className="block text-white/75">{w.body}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 border-t border-white/15 pt-5 font-semibold"><Stars /> {site.rating.value} from {site.rating.count} Google reviews</p>
          </div>
        </div>
      </section>

      {/* PITCH */}
      <section className="bg-sky">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="wrap-type text-2xl text-white">{s.pitch.eyebrow}</p>
            <h2 className="display mt-2 text-4xl text-ink sm:text-5xl">{s.pitch.title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/85">{s.pitch.body}</p>
            <ul className="mt-6 space-y-2.5 text-lg font-semibold text-ink">
              {s.pitch.points.map((p) => (
                <li key={p} className="flex gap-2.5"><CheckIcon className="mt-1.5 h-4 w-4 shrink-0" /><span>{p}</span></li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3">
            <SmartLink href={s.pitch.primary.href} className="flex items-center justify-center rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
              {s.pitch.primary.label}
            </SmartLink>
            <SmartLink href={s.pitch.secondary.href} className="flex items-center justify-center rounded-full bg-white px-7 py-4 text-lg font-bold text-ink shadow-[0_4px_0_var(--color-ink)] hover:bg-sky-soft">
              {s.pitch.secondary.label}
            </SmartLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sky-soft">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">{s.h1.split(" in ")[0]} questions</h2>
          <div className="mt-8 divide-y divide-line rounded-2xl bg-white ring-1 ring-line">
            {s.faqs.map((f) => (
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

      {/* RELATED */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="display text-3xl sm:text-4xl">Related services</h2>
        <div className="mt-8">
          <ServiceCards keys={related[s.key]} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="display text-4xl sm:text-5xl">{s.kind === "repair" ? "Need it fixed today?" : s.kind === "tune-up" ? "Book your tune-up" : "See your price today"}</h2>
            <p className="mt-4 max-w-lg text-lg text-white/85">
              {s.kind === "install"
                ? "Get instant pricing online, or book a free in-home estimate."
                : "Book online in a minute, or call and talk to a real person. We’re open 24/7."}
            </p>
          </div>
          <div className="grid gap-3">
            <a href={primaryHero.href} className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-lg font-bold text-ink shadow-[0_4px_0_#052f3d] hover:bg-sky-soft">
              {primaryHero.mail && <MailIcon className="h-5 w-5" />} {primaryHero.label}
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
