import Image from "next/image";
import Link from "next/link";
import { site, counties, faqs } from "@/lib/site";
import { LoopVideo } from "@/components/LoopVideo";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { CheckIcon, MailIcon, PhoneIcon, Stars } from "@/components/icons";
import { Hero, SmileBand } from "@/components/Hero";
import { steps, tiers } from "@/lib/content";

const services = [
  { title: "Heat pumps", body: "Heating and cooling from one efficient outdoor unit, built for Utah winters.", img: "/images/heat-pumps-pair.jpg", alt: "Two new heat pumps installed beside a Utah home", href: "/heat-pumps" },
  { title: "Furnaces", body: "Repairs, replacements and high-efficiency gas furnaces, including dual-fuel setups.", img: "/images/furnace-tech-uniform.jpg", alt: "Eco Home technician in uniform next to a newly installed furnace", pos: "50% 45%" },
  { title: "Air conditioning", body: "Fast AC repair, and replacements for worn-out units before summer hits.", img: "/images/old-ac-unit.jpg", alt: "Aging central air conditioner due for replacement" },
  { title: "Ductless mini-splits", body: "Comfort for basements, additions and rooms your ducts don't reach.", img: "/images/aciq-mini-split-heat-pump.jpg", alt: "Mini-split condenser and heat pump installed on a patio" },
  { title: "Ductwork & duct testing", body: "We measure airflow and fix the ducts so your system can do its job.", img: "/images/ductwork-install.jpg", alt: "Eco Home technician installing new ductwork in a basement" },
  { title: "Tune-ups & maintenance", body: "Seasonal tune-ups that catch problems early and help protect your warranty.", img: "/images/tech-heat-pump-brick.jpg", alt: "Technician checking refrigerant pressures on a heat pump" },
];

const reviews = [
  { name: "Paul Edmunds", text: "Their tech was efficient and polite… resolved immediately." },
  { name: "Stacy Graham", text: "Highly recommend!! Andrew B was fast, professional and did a great job!" },
  { name: "Maria-Isabel Acosta", text: "They're friendly, professional and honest." },
];

const specials = [
  { price: "0%", title: "Interest for 12 months", body: "Get the system you need now and pay it off over 12 months with 0% interest.", fine: `Subject to credit approval. Financing provided by ${site.financingPartner}.`, cta: "Book a free estimate", href: site.bookingUrl },
  { price: "$2,150", title: "Guaranteed heat pump rebates", body: "Get $2,150 in rebates guaranteed when you purchase a new heat pump from Eco Home. We file all the paperwork for you.", fine: "Applies to qualifying heat pump purchases.", cta: "Get instant pricing", href: site.instantPricingUrl },
  { price: "$39", title: "Furnace tune-up", body: "Clean, inspect and tune your furnace before the cold sets in.", fine: "", cta: "Claim this offer", href: site.bookingUrl },
];

const planBenefits = [
  { title: "100% waived dispatch fees", detail: "Never pay for us to drive to your home.", value: "$89 value" },
  { title: "Two maintenance visits a year", detail: "One for cooling, one for heating.", value: "$258 value" },
  { title: "10% off all repairs", detail: "Savings start the day you join." },
  { title: "Priority scheduling", detail: "Skip the line during heat waves and cold snaps." },
  { title: "$250 a year toward new equipment", detail: "Builds every year you’re a member, up to $1,000." },
  { title: "$500 shared referral bonus", detail: "$250 for you and $250 for the friend you refer." },
  { title: "Essential component cleaning", detail: "AC or heat pump, plus furnace." },
  { title: "20-point safety check", detail: "Peace of mind for your family." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Home() {
  return (
    <>
      <Hero variant="navy" />
      <SmileBand />

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 data-reveal className="display text-4xl sm:text-5xl">Where should we start?</h2>
          <p className="mt-4 text-lg text-mist">Repairs, replacements and maintenance for every kind of home comfort system.</p>
        </div>
        <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title} data-reveal style={{ "--d": `${(i % 3) * 100}ms` } as React.CSSProperties}>
              <div className="zoom relative aspect-[4/3] overflow-hidden rounded-2xl bg-sky-soft">
                <Image src={s.img} alt={s.alt} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover" style={"pos" in s ? { objectPosition: s.pos } : undefined} />
              </div>
              <h3 className="mt-4 text-xl font-extrabold">
                {"href" in s && s.href ? <Link href={s.href} className="hover:text-teal hover:underline">{s.title}</Link> : s.title}
              </h3>
              <p className="mt-1 text-mist">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* HEAT PUMPS */}
      <section id="heat-pumps" className="bg-sky-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/tech-leveling-heat-pump.jpg" alt="Eco Home technician leveling a new heat pump at a Utah home" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 data-reveal className="display text-4xl sm:text-5xl">Why heat pumps work in Utah</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/85">
              Modern cold-climate heat pumps keep heating efficiently well below freezing. Pair one with a gas furnace and you get dual fuel: the heat pump handles most of the year, and the furnace takes over on the coldest nights. Your thermostat picks whichever is cheaper to run.
            </p>
            <ul className="mt-6 space-y-3 text-lg">
              {[
                "One outdoor unit for heating and cooling",
                "Dual-fuel backup for January cold snaps",
                "More than 9 out of 10 systems we install are heat pumps",
              ].map((t, i) => (
                <li key={t} data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties} className="flex gap-3"><CheckIcon className="mt-1 h-5 w-5 shrink-0 text-teal" />{t}</li>
              ))}
            </ul>
            <Link href="/heat-pumps" className="mt-8 inline-block rounded-full bg-ink px-6 py-3 font-bold text-white hover:bg-teal">Learn more about heat pumps</Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 data-reveal className="display text-4xl sm:text-5xl">Our sized-right process</h2>
            <p className="mt-4 text-lg text-mist">Most comfort problems come from the wrong size system or tired ducts. Here’s how we get it right the first time.</p>
            <ol className="mt-10 space-y-8">
              {steps.map((s, i) => (
                <li key={s.title} data-reveal style={{ "--d": `${i * 120}ms` } as React.CSSProperties} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="display grid h-12 w-12 place-items-center rounded-full bg-ink text-xl text-sky">{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-extrabold">{s.title}</h3>
                    <p className="mt-1 text-mist">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div data-reveal className="overflow-hidden rounded-2xl bg-ink lg:sticky lg:top-32">
            <LoopVideo
              src="/video/ductwork-loop.mp4"
              poster="/video/ductwork-poster.jpg"
              label="Eco Home technician installing new ductwork"
              className="aspect-video w-full object-cover"
            />
            <p className="px-5 py-4 text-sm text-white/80">New trunk line going in on a basement finish in Utah County.</p>
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section id="options" className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h2 data-reveal className="display max-w-3xl text-4xl sm:text-5xl">Get instant pricing on every new system</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Answer a few quick questions about your home and get an estimate with both options emailed to you instantly. No sales visit needed to see a price.
          </p>
          <ol className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
            {["Answer a few questions about your home", "Compare ACiQ and Amana side by side", "Get your estimate by email, instantly"].map((step, i) => (
              <li key={step} data-reveal style={{ "--d": `${i * 120}ms` } as React.CSSProperties} className="flex items-center gap-3">
                <span className="display grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky text-lg text-ink">{i + 1}</span>
                <span className="font-semibold">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            {tiers.map((t, i) => (
              <div key={t.tier} data-reveal style={{ "--d": `${i * 140}ms` } as React.CSSProperties} className={`rounded-2xl p-7 ${t.featured ? "bg-sky text-ink" : "bg-white/[0.06] ring-1 ring-white/15"}`}>
                <div className="relative -mx-2 -mt-2 mb-6 aspect-[16/10] overflow-hidden rounded-xl">
                  <Image src={t.img} alt={t.alt} fill sizes="(min-width: 768px) 430px, 100vw" className="object-cover" />
                </div>
                <p className={`wrap-type text-2xl ${t.featured ? "text-white" : "text-sky"}`} style={t.featured ? undefined : { textShadow: "none" }}>{t.tier}</p>
                <h3 className="display mt-2 text-3xl">{t.brand}</h3>
                <p className={`mt-3 ${t.featured ? "text-ink/80" : "text-white/75"}`}>{t.line}</p>
                <ul className="mt-6 space-y-2.5">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2.5"><CheckIcon className={`mt-1 h-4 w-4 shrink-0 ${t.featured ? "text-ink" : "text-sky"}`} />{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href={site.instantPricingUrl} className="flex items-center gap-2.5 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#7a0018] hover:brightness-110">
              <MailIcon className="h-5 w-5" /> Get my instant estimate
            </a>
            <p className="text-white/75">Financing through {site.financingPartner}, with $0-down options for qualified buyers.</p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[320px_1fr] md:items-center lg:gap-16">
          <div data-reveal className="mx-auto w-full max-w-[320px]">
            <VideoTestimonial id="OaLfF9Z0RqQ" title="Ryan in Provo, Utah, on his experience with Eco Home" caption="Hear from Ryan in Provo, Utah" />
          </div>
          <div>
            <h2 data-reveal className="display text-4xl sm:text-5xl">What homeowners say</h2>
            <p className="mt-3 flex items-center gap-2 text-lg font-semibold"><Stars className="h-5 w-5" /> {site.rating.value} out of 5 from {site.rating.count} Google reviews</p>
            <div className="mt-10 space-y-8">
              {reviews.map((r, i) => (
                <figure key={r.name} data-reveal style={{ "--d": `${i * 120}ms` } as React.CSSProperties} className="border-l-4 border-sky pl-5">
                  <Stars />
                  <blockquote className="mt-3 text-xl font-medium leading-snug">“{r.text}”</blockquote>
                  <figcaption className="mt-2 font-bold text-mist">{r.name}</figcaption>
                </figure>
              ))}
            </div>
            <a href={site.googleMapsUrl} className="mt-10 inline-block font-bold text-teal underline underline-offset-4 hover:text-ink">Read all reviews on Google</a>
          </div>
        </div>
      </section>

      {/* SPECIALS + PLAN */}
      <section id="specials" className="bg-sky-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h2 data-reveal className="display text-4xl sm:text-5xl">Current specials</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {specials.map((s, i) => (
              <div key={s.title} data-reveal style={{ "--d": `${i * 120}ms` } as React.CSSProperties} className="rounded-2xl border-2 border-dashed border-teal/50 bg-white p-7">
                <p className="display text-5xl text-alarm">{s.price}</p>
                <h3 className="mt-2 text-xl font-extrabold">{s.title}</h3>
                <p className="mt-2 text-mist">{s.body}</p>
                {s.fine && <p className="mt-2 text-sm text-mist/90">{s.fine}</p>}
                <a href={s.href} className="mt-5 inline-block font-bold text-teal underline underline-offset-4 hover:text-ink">{s.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESSENTIAL CARE PLAN */}
      <section id="care-plan" className="bg-teal text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <h2 data-reveal className="display text-4xl sm:text-5xl">The Essential Care Plan</h2>
              <p className="mt-4 max-w-xl text-lg text-white/85">
                Two tune-ups, priority scheduling and savings that grow every year you’re a member.
              </p>
              <ul className="mt-10 divide-y divide-white/15 border-y border-white/15">
                {planBenefits.map((b, i) => (
                  <li key={b.title} data-reveal style={{ "--d": `${i * 60}ms` } as React.CSSProperties} className="flex items-start justify-between gap-6 py-4">
                    <span className="flex gap-3">
                      <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-sky" />
                      <span>
                        <span className="block text-lg font-bold">{b.title}</span>
                        {b.detail && <span className="block text-white/80">{b.detail}</span>}
                      </span>
                    </span>
                    {b.value && <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-sky">{b.value}</span>}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={site.bookingUrl} className="rounded-full bg-white px-7 py-4 text-lg font-bold text-ink shadow-[0_4px_0_#052f3d] hover:bg-sky-soft">
                  Join the plan
                </a>
                <a href={site.phoneHref} className="flex items-center gap-2 rounded-full px-5 py-4 text-lg font-bold text-white ring-2 ring-white/40 hover:bg-white/10">
                  <PhoneIcon className="h-5 w-5" /> {site.phone}
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/images/tech-wiring-capacitor.jpg" alt="Eco Home technician servicing the electrical components of an outdoor unit during a maintenance visit" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-[45%_50%]" />
              </div>
              <div className="rounded-2xl bg-white p-6 text-ink">
                <h3 className="text-xl font-extrabold">How your Replacement Bank works</h3>
                <p className="mt-2 text-ink/80">
                  From the day you join, we credit your account $250 for every year you stay a member. Use up to $1,000 of it as a direct discount on a new complete system (furnace + AC, or heat pump).
                </p>
                <p className="mt-2 text-sm text-mist">Credits are non-transferable and have no cash value.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 text-ink">
                <h3 className="text-xl font-extrabold">How the referral bonus works</h3>
                <p className="mt-2 text-ink/80">
                  Refer a friend who buys a new AC, furnace or heat pump from Eco Home. We send you a $250 Visa gift card, and your friend gets $250 off their new system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section id="service-area" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 data-reveal className="display text-4xl sm:text-5xl">Serving Utah County & Salt Lake County</h2>
            <p className="mt-4 text-lg text-mist">
              Based in American Fork, with technicians on the road across both valleys. Look for the bright blue vans.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {counties.map((c) => (
                <div key={c.name}>
                  <h3 className="text-lg font-extrabold">{c.name}</h3>
                  <ul className="mt-3 columns-2 gap-4 leading-8 text-ink/85">
                    {c.cities.map((city) => <li key={city}>{city}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div data-reveal className="overflow-hidden rounded-2xl ring-1 ring-line">
              <iframe
                title="Map of Eco Home Heating & Cooling in American Fork, Utah"
                src={site.googleMapEmbed}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-80 w-full border-0 lg:h-[30rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sky-soft">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 data-reveal className="display text-4xl sm:text-5xl">Common questions</h2>
          <div data-reveal className="mt-8 divide-y divide-line rounded-2xl bg-white">
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </section>

      {/* FINAL CTA */}
      <section id="estimate" className="relative overflow-hidden bg-sky">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 data-reveal className="display text-4xl text-ink sm:text-5xl">Get a system that fits your home</h2>
            <p className="mt-4 max-w-lg text-lg text-ink/85">
              Get an instant estimate by email, book a visit online, or call and talk to a real person. We’re open 24/7.
            </p>          </div>
          <div data-reveal className="grid gap-4">
            <a href={site.instantPricingUrl} className="rounded-2xl bg-ink p-6 text-white shadow-[0_5px_0_#0a1622] hover:bg-teal">
              <span className="flex items-center gap-2 text-sm font-bold text-sky"><MailIcon className="h-4 w-4" /> Estimate emailed to you instantly</span>
              <span className="display mt-1 block text-3xl">Get instant pricing</span>
            </a>
            <a href={site.bookingUrl} className="group rounded-2xl bg-white p-6 shadow-[0_5px_0_var(--color-ink)] hover:bg-sky-soft">
              <span className="block text-sm font-bold text-teal">Pick a time that works for you</span>
              <span className="display mt-1 block text-3xl text-ink">Book a free estimate</span>
            </a>
            <a href={site.phoneHref} className="rounded-2xl bg-alarm-strong p-6 text-white shadow-[0_5px_0_#8a001c] hover:brightness-110">
              <span className="block text-sm font-bold text-white/90">Call us, day or night</span>
              <span className="display mt-1 flex items-center gap-3 text-3xl"><PhoneIcon className="h-7 w-7" /> {site.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
