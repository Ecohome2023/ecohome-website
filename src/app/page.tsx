import Image from "next/image";
import Link from "next/link";
import { site, counties, faqs } from "@/lib/site";
import { LoopVideo } from "@/components/LoopVideo";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { CheckIcon, PhoneIcon, Stars } from "@/components/icons";

const services = [
  { title: "Heat pumps", body: "Heating and cooling from one efficient outdoor unit, built for Utah winters.", img: "/images/heat-pumps-pair.jpg", alt: "Two new heat pumps installed beside a Utah home" },
  { title: "Furnaces", body: "Repairs, replacements and high-efficiency gas furnaces, including dual-fuel setups.", img: "/images/furnace-tech-thumbs-up.jpg", alt: "Eco Home technician next to a newly installed furnace" },
  { title: "Air conditioning", body: "Fast AC repair, and replacements for worn-out units before summer hits.", img: "/images/old-ac-unit.jpg", alt: "Aging central air conditioner due for replacement" },
  { title: "Ductless mini-splits", body: "Comfort for basements, additions and rooms your ducts don't reach.", img: "/images/aciq-mini-split-heat-pump.jpg", alt: "Mini-split condenser and heat pump installed on a patio" },
  { title: "Ductwork & duct testing", body: "We measure airflow and fix the ducts so your system can do its job.", img: "/images/ductwork-install.jpg", alt: "Eco Home technician installing new ductwork in a basement" },
  { title: "Tune-ups & maintenance", body: "Seasonal tune-ups that catch problems early and help protect your warranty.", img: "/images/tech-heat-pump-brick.jpg", alt: "Technician checking refrigerant pressures on a heat pump" },
];

const steps = [
  { title: "Load calculation", body: "We run a room-by-room Manual J calculation so the equipment matches how your house actually gains and loses heat." },
  { title: "Duct testing", body: "We measure static pressure and airflow before we quote. A great system on undersized ducts still runs poorly." },
  { title: "Right-sized install", body: "Equipment sized to the numbers, not a guess or whatever the last system was." },
  { title: "Performance check", body: "Before we leave, we test the system's pressures, temperatures and airflow, and show you the results." },
];

const tiers = [
  { tier: "Good", brand: "ACiQ", line: "Dependable comfort at the lowest upfront cost.", points: ["Solid efficiency for the price", "Great fit for rentals and budget-minded upgrades", "Factory warranty included"] },
  { tier: "Better", brand: "Daikin", line: "Variable-speed comfort with quieter, steadier temperatures.", points: ["Inverter technology adjusts output to demand", "Lower monthly energy bills", "Our most popular choice"], featured: true },
  { tier: "Best", brand: "Amana", line: "Premium performance and our longest coverage.", points: ["Top-tier efficiency and cold-weather heating", "Quietest of the three", "The strongest warranty we offer"] },
];

const reviews = [
  { name: "Paul Edmunds", text: "Their tech was efficient and polite… resolved immediately." },
  { name: "Stacy Graham", text: "Highly recommend!! Andrew B was fast, professional and did a great job!" },
  { name: "Maria-Isabel Acosta", text: "They're friendly, professional and honest." },
];

const specials = [
  { price: "Free", title: "Safety inspection", body: "A safety check of your furnace or heat pump, so you know your family is breathing easy this winter." },
  { price: "$39", title: "Furnace tune-up", body: "Clean, inspect and tune your furnace before the cold sets in." },
  { price: "$129", title: "System diagnostic", body: "Something's not right? We'll find the cause and give you a clear price to fix it." },
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

function Mountains({ className }: { className?: string }) {
  // Wasatch-style ridgeline, echoing the van wrap
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className={className} aria-hidden>
      <path fill="#7fe8ff" d="M0 150 L120 96 L210 132 L330 52 L430 118 L520 84 L640 140 L760 64 L860 110 L980 40 L1090 120 L1190 88 L1300 132 L1440 70 V220 H0Z" opacity=".55" />
      <path fill="#2cd8ff" d="M0 180 L140 138 L260 168 L380 110 L500 160 L620 126 L760 172 L900 118 L1020 160 L1160 124 L1290 166 L1440 128 V220 H0Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-sky">
        <Mountains className="absolute inset-x-0 bottom-0 h-40 w-full sm:h-56" />
        <div className="relative mx-auto grid max-w-7xl items-end gap-6 px-4 pt-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:pt-16">
          <div className="pb-6 md:pb-20">
            <h1 className="display text-[2.5rem] text-ink sm:text-6xl lg:text-[4.25rem]">
              Heat pump & HVAC experts for Utah County and Salt Lake County
            </h1>
            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-ink/85 sm:text-xl">
              Sized to your home, tested before we leave, and priced with three clear options. Day or night, we pick up.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.bookingUrl} className="rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#b80028] hover:brightness-110">
                Book service
              </a>
              <a href={site.bookingUrl} className="rounded-full bg-white px-7 py-4 text-lg font-bold text-ink shadow-[0_4px_0_var(--color-ink)] hover:bg-sky-soft">
                Get a free estimate
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-semibold text-ink">
              <li className="flex items-center gap-2"><Stars /> {site.rating.value} from {site.rating.count} Google reviews</li>
              <li className="flex items-center gap-1.5"><CheckIcon className="h-4 w-4" /> Licensed & insured</li>
              <li className="flex items-center gap-1.5"><CheckIcon className="h-4 w-4" /> Local to American Fork</li>
            </ul>
          </div>
          <div className="relative mx-auto -mt-6 w-52 sm:w-72 md:mt-0 md:w-full md:max-w-md">
            <Image
              src="/images/mascot.png"
              alt="Eco Home technician mascot"
              width={900}
              height={1192}
              preload
              sizes="(min-width: 768px) 420px, 320px"
              className="relative z-10 h-auto w-full"
            />
          </div>
        </div>
        {/* Red band, like the van wrap */}
        <div className="relative z-20 bg-alarm text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-5 sm:px-6 md:flex-row md:items-center">
            <div>
              <p className="text-xl font-bold">
                <span className="wrap-type text-xl">Smile Guarantee:</span>{" "}
                you smile, or we fix it free.
              </p>
              <Link href="/smile-guarantee" className="mt-1 inline-block text-sm font-semibold underline underline-offset-4 hover:no-underline">
                Conditions apply. Click to learn more
              </Link>
            </div>
            <a href={site.phoneHref} className="display flex items-center gap-3 text-3xl hover:underline sm:text-4xl">
              <PhoneIcon className="h-7 w-7" /> {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="display text-4xl sm:text-5xl">Where should we start?</h2>
          <p className="mt-4 text-lg text-mist">Repairs, replacements and maintenance for every kind of home comfort system.</p>
        </div>
        <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.title}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sky-soft">
                <Image src={s.img} alt={s.alt} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-1 text-mist">{s.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-mist">
          Also: indoor air quality, humidifiers, air purification and smart thermostats.
        </p>
      </section>

      {/* HEAT PUMPS */}
      <section id="heat-pumps" className="bg-sky-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/tech-leveling-heat-pump.jpg" alt="Eco Home technician leveling a new heat pump at a Utah home" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 className="display text-4xl sm:text-5xl">Why heat pumps work in Utah</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/85">
              Modern cold-climate heat pumps keep heating efficiently well below freezing. Pair one with a gas furnace and you get dual fuel: the heat pump handles most of the year, and the furnace takes over on the coldest nights. Your thermostat picks whichever is cheaper to run.
            </p>
            <ul className="mt-6 space-y-3 text-lg">
              {[
                "One outdoor unit for heating and cooling",
                "Dual-fuel backup for January cold snaps",
                "More than 9 out of 10 systems we install are heat pumps",
              ].map((t) => (
                <li key={t} className="flex gap-3"><CheckIcon className="mt-1 h-5 w-5 shrink-0 text-teal" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 className="display text-4xl sm:text-5xl">Our sized-right process</h2>
            <p className="mt-4 text-lg text-mist">Most comfort problems come from the wrong size system or tired ducts. Here’s how we get it right the first time.</p>
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
          <h2 className="display max-w-3xl text-4xl sm:text-5xl">Three clear options on every new system</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Every replacement quote comes with a Good, Better and Best option, priced upfront. Pick what fits your home and budget. No pressure.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.tier} className={`rounded-2xl p-7 ${t.featured ? "bg-sky text-ink" : "bg-white/[0.06] ring-1 ring-white/15"}`}>
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
            <a href={site.bookingUrl} className="rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#7a0018] hover:brightness-110">
              Book a free estimate
            </a>
            <p className="text-white/75">Financing through {site.financingPartner}, with $0-down options for qualified buyers.</p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[320px_1fr] md:items-center lg:gap-16">
          <div className="mx-auto w-full max-w-[320px]">
            <VideoTestimonial id="OaLfF9Z0RqQ" title="Ryan in Provo, Utah, on his experience with Eco Home" caption="Hear from Ryan in Provo, Utah" />
          </div>
          <div>
            <h2 className="display text-4xl sm:text-5xl">What homeowners say</h2>
            <p className="mt-3 flex items-center gap-2 text-lg font-semibold"><Stars className="h-5 w-5" /> {site.rating.value} out of 5 from {site.rating.count} Google reviews</p>
            <div className="mt-10 space-y-8">
              {reviews.map((r) => (
                <figure key={r.name} className="border-l-4 border-sky pl-5">
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
          <h2 className="display text-4xl sm:text-5xl">Current specials</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {specials.map((s) => (
              <div key={s.title} className="rounded-2xl border-2 border-dashed border-teal/50 bg-white p-7">
                <p className="display text-5xl text-alarm">{s.price}</p>
                <h3 className="mt-2 text-xl font-extrabold">{s.title}</h3>
                <p className="mt-2 text-mist">{s.body}</p>
                <a href={site.bookingUrl} className="mt-5 inline-block font-bold text-teal underline underline-offset-4 hover:text-ink">Claim this offer</a>
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
              <h2 className="display text-4xl sm:text-5xl">The Essential Care Plan</h2>
              <p className="mt-4 max-w-xl text-lg text-white/85">
                Two tune-ups, priority scheduling and savings that grow every year you’re a member.
              </p>
              <ul className="mt-10 divide-y divide-white/15 border-y border-white/15">
                {planBenefits.map((b) => (
                  <li key={b.title} className="flex items-start justify-between gap-6 py-4">
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
                <Image src="/images/tech-portrait.jpg" alt="Smiling Eco Home technician beside a heat pump" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-[60%_30%]" />
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
            <h2 className="display text-4xl sm:text-5xl">Serving Utah County & Salt Lake County</h2>
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
          <div className="space-y-5">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-sky-soft">
              <Image src="/images/van-wrap.jpg" alt="Eco Home Heating & Cooling service van" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-contain" />
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-line">
              <iframe
                title="Map of Eco Home Heating & Cooling in American Fork, Utah"
                src="https://www.google.com/maps?q=758+Automall+Dr+%239,+American+Fork,+UT+84003&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sky-soft">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">Common questions</h2>
          <div className="mt-8 divide-y divide-line rounded-2xl bg-white">
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
            <h2 className="display text-4xl text-ink sm:text-5xl">Get a system that fits your home</h2>
            <p className="mt-4 max-w-lg text-lg text-ink/85">
              Book a free estimate online, or call and talk to a real person. We’re open 24/7.
            </p>
          </div>
          <div className="grid gap-4">
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
