import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { programs, guaranteed, type RebateProgram } from "@/lib/rebates";
import { CheckIcon, MailIcon, PhoneIcon } from "./icons";

const benefits = (p: RebateProgram) => [
  {
    title: "Premium equipment for the price of standard",
    body: "Rebates often bring a premium heat pump system down to about the cost of a standard, low-efficiency system.",
  },
  {
    title: "Free cash, not a loan",
    body: `It’s money from ${p.utility} that you never pay back.`,
  },
  {
    title: "Vetted, ENERGY STAR certified equipment",
    body: "If a system qualifies for a Wattsmart or ThermWise rebate, the program has already checked that it’s high-quality, ENERGY STAR certified equipment.",
  },
  {
    title: "The best incentive left for new HVAC",
    body: "With the federal tax credit for heat pumps and furnaces gone, utility rebates are now the best incentive available for high-quality equipment.",
  },
];

export function RebatePage({ program }: { program: RebateProgram }) {
  const other = programs[program.key === "rmp" ? "enbridge" : "rmp"];

  const stack = [
    { key: "rmp", label: "Rocky Mountain Power Wattsmart", note: "Every heat pump install", amount: guaranteed.rmp, href: programs.rmp.href },
    { key: "enbridge", label: "Enbridge Gas ThermWise", note: "$700 with an 80% furnace, $1,000 with a 96%+ furnace", amount: `${guaranteed.enbridge80} to ${guaranteed.enbridge96}`, href: programs.enbridge.href },
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: program.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: `${program.name} rebates`, item: `${site.url}${program.href}` },
      ],
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70">
              <Link href="/" className="hover:underline">Home</Link> <span aria-hidden>/</span> Rebates <span aria-hidden>/</span> {program.short}
            </nav>
            <h1 className="display mt-3 text-[2.3rem] sm:text-6xl">{program.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">{program.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.instantPricingUrl} className="flex items-center gap-2 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
                <MailIcon className="h-5 w-5" /> See my price after rebates
              </a>
              <a href={site.bookingUrl} className="rounded-full px-7 py-4 text-lg font-bold text-white ring-2 ring-white/60 hover:bg-white/10">
                Book a free estimate
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-7 text-ink">
            {program.logos.map((l) => (
              <Image key={l.src} src={l.src} alt={l.alt} width={l.w} height={l.h} preload sizes="360px" className="h-auto max-h-24 w-full max-w-xs object-contain object-left" />
            ))}
            <div className={`mt-6 grid gap-4 ${program.stats.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {program.stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-sky-soft p-5">
                  <p className="display text-5xl text-teal">{s.amount}</p>
                  <p className="mt-1 font-bold">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 flex gap-2.5 font-semibold">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-teal" /> 100% guaranteed on your final estimate, and we file the paperwork.
            </p>
          </div>
        </div>
      </section>

      {/* WHO QUALIFIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="display text-4xl sm:text-5xl">Who qualifies for {program.short} rebates</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            There are only three requirements, and when Eco Home does your install, we take care of the last two.
          </p>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {program.qualifies.map((q, i) => (
            <li key={q.title} className="rounded-2xl p-6 ring-1 ring-line">
              <div className="flex items-center justify-between gap-4">
                <span className="display grid h-12 w-12 place-items-center rounded-full bg-ink text-xl text-sky">{i + 1}</span>
                {q.energyStar && <Image src="/images/energy-star-logo.svg" alt="ENERGY STAR" width={60} height={61} unoptimized className="h-14 w-auto" />}
              </div>
              <h3 className="mt-4 text-xl font-extrabold">{q.title}</h3>
              <p className="mt-2 text-mist">{q.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* BENEFITS */}
      <section className="bg-sky-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h2 className="display max-w-3xl text-4xl sm:text-5xl">Why these rebates are worth it</h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {benefits(program).map((b, i) => (
              <li key={b.title} className={`rounded-2xl p-7 ${i === 0 ? "bg-ink text-white" : "bg-white"}`}>
                <span className={`grid h-10 w-10 place-items-center rounded-full bg-sky text-ink`}><CheckIcon className="h-5 w-5" /></span>
                <h3 className="mt-4 text-2xl font-extrabold">{b.title}</h3>
                <p className={`mt-2 text-lg ${i === 0 ? "text-white/80" : "text-ink/75"}`}>{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HEAT PUMP + FURNACE STACK */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="wrap-type text-2xl text-sky" style={{ textShadow: "none" }}>Get the most back</p>
            <h2 className="display mt-2 text-4xl sm:text-5xl">A heat pump with a gas furnace earns the biggest rebates</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              A dual-fuel system, a heat pump paired with a gas furnace, is the most efficient way to heat and cool a Utah home for the cost. It’s also the setup that qualifies for the highest rebates, because it can earn from both Rocky Mountain Power and Enbridge Gas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.instantPricingUrl} className="flex items-center gap-2 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#7a0018] hover:brightness-110">
                <MailIcon className="h-5 w-5" /> Price a dual-fuel system
              </a>
              <Link href="/heat-pumps" className="rounded-full px-7 py-4 text-lg font-bold text-white ring-2 ring-white/60 hover:bg-white/10">
                How dual fuel works
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 text-ink sm:p-8">
            <h3 className="text-xl font-extrabold">Guaranteed rebates on a heat pump install</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {stack.map((r) => (
                <li key={r.key} className={`flex flex-wrap items-start justify-between gap-x-6 gap-y-1 py-4`}>
                  <span className="max-w-xs">
                    {r.key === program.key ? (
                      <span className="block text-lg font-bold">{r.label}</span>
                    ) : (
                      <Link href={r.href} className="block text-lg font-bold text-teal underline underline-offset-4 hover:text-ink">{r.label}</Link>
                    )}
                    <span className="block text-sm text-mist">{r.note}</span>
                  </span>
                  <span className="display text-2xl text-teal">{r.amount}</span>
                </li>
              ))}
              <li className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-4">
                <span className="text-lg font-extrabold">Total guaranteed</span>
                <span className="display text-3xl text-alarm-strong">{guaranteed.total}</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-mist">
              Equipment dealer rebates can add up to $2,000 more, for up to {guaranteed.max} in total. Total assumes you’re a customer of both Rocky Mountain Power and Enbridge Gas.
            </p>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="display max-w-3xl text-4xl sm:text-5xl">How you get paid</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/85">{program.paymentIntro}</p>
        <div className={`mt-10 grid max-w-5xl gap-5 ${program.payment.length > 1 ? "md:grid-cols-2" : ""}`}>
          {program.payment.map((p) => (
            <div key={p.title} className="rounded-2xl p-7 ring-1 ring-line">
              <h3 className="text-2xl font-extrabold">{p.title}</h3>
              <p className="mt-2 text-lg text-ink/75">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-alarm-strong text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[auto_1fr]">
          <p className="display text-6xl sm:text-7xl">100%</p>
          <div>
            <h2 className="display text-3xl sm:text-4xl">Every rebate on your estimate is guaranteed</h2>
            <p className="mt-3 max-w-3xl text-lg text-white/90">
              The rebates we show on your final estimate are 100% guaranteed. If we ever make a mistake and a rebate comes in short, we send you a refund for the missing amount.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sky-soft">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">{program.short} rebate questions</h2>
          <div className="mt-8 divide-y divide-line rounded-2xl bg-white ring-1 ring-line">
            {program.faqs.map((f) => (
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

      {/* OTHER PROGRAM */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="display text-3xl sm:text-4xl">Learn about the other rebate</h2>
        <Link href={other.href} className="group mt-8 grid items-center gap-6 rounded-2xl p-7 ring-1 ring-line hover:bg-sky-soft md:grid-cols-[auto_1fr_auto]">
          <Image src={other.logos[0].src} alt={other.logos[0].alt} width={other.logos[0].w} height={other.logos[0].h} sizes="260px" className="h-14 w-auto" />
          <span>
            <span className="block text-2xl font-extrabold">{other.name} rebates</span>
            <span className="mt-1 block text-lg text-ink/75">{other.crossBlurb}</span>
          </span>
          <span className="font-bold text-teal group-hover:underline">Read about {other.short} →</span>
        </Link>
        <p className="mt-8 max-w-4xl text-sm text-mist">
          Eco Home is an independent contractor. Wattsmart is a Rocky Mountain Power program and ThermWise is an Enbridge Gas program. Program rules and rebate amounts are set by the utilities and can change. Guaranteed amounts apply to qualifying installs by Eco Home.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="display text-4xl sm:text-5xl">See your price after rebates</h2>
            <p className="mt-4 max-w-lg text-lg text-white/85">
              Every estimate shows your rebates up front, guaranteed. Get instant pricing online or call us any time.
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
