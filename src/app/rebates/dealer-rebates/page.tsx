import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { dealer, guaranteed } from "@/lib/rebates";
import { RebateLinks } from "@/components/RebateLinks";
import { CheckIcon, MailIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = pageMeta({ title: "Amana & ACiQ Dealer Rebates on Heat Pumps", description: "Amana and ACiQ dealer rebates of $400 to $2,000 on select heat pumps and dual-fuel systems, taken off your invoice instantly, on top of utility rebates.", path: "/rebates/dealer-rebates" });

const howItWorks = [
  { title: "They come from the manufacturer", body: "Dealer rebates are offered directly by Amana and ACiQ on specific heat pumps and dual-fuel systems." },
  { title: "Taken off your invoice instantly", body: "There’s no form to mail in and no check to wait for. The rebate comes straight off your invoice." },
  { title: "Offers change through the year", body: "Which systems qualify, and for how much, depends on what the manufacturers are offering at the time." },
];

const stack = [
  { label: "Rocky Mountain Power Wattsmart", note: "Every heat pump install", amount: guaranteed.rmp, href: "/rebates/rocky-mountain-power-wattsmart" },
  { label: "Enbridge Gas ThermWise", note: "$700 with an 80% furnace, $1,000 with a 96%+ furnace", amount: `${guaranteed.enbridge80} to ${guaranteed.enbridge96}`, href: "/rebates/enbridge-thermwise" },
  { label: "Manufacturer dealer rebates", note: "On select systems, when available", amount: dealer.range, href: null },
];

const faqs = [
  {
    q: "What are manufacturer dealer rebates?",
    a: "They’re rebates that Amana and ACiQ offer directly on specific heat pumps and dual-fuel systems. They’re separate from utility rebates, so you can get both.",
  },
  {
    q: "How much are dealer rebates?",
    a: "They normally range from $400 to $2,000, depending on the system and what the manufacturer is offering at the time.",
  },
  {
    q: "How do I receive a dealer rebate?",
    a: "It’s taken off your invoice right away. There’s nothing to mail in and no check to wait for.",
  },
  {
    q: "Can I combine dealer rebates with Wattsmart and ThermWise rebates?",
    a: "Yes. Dealer rebates come on top of your Rocky Mountain Power Wattsmart and Enbridge Gas ThermWise rebates. Together, a heat pump paired with a gas furnace can qualify for up to $4,450.",
  },
  {
    q: "Which systems qualify for dealer rebates right now?",
    a: "It changes throughout the year. Your Eco Home Comfort Advisor will know exactly which dealer rebates are available and how much each system qualifies for, and every rebate on your final estimate is guaranteed.",
  },
];

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
      { "@type": "ListItem", position: 2, name: "Manufacturer dealer rebates", item: `${site.url}${dealer.href}` },
    ],
  },
];

export default function DealerRebates() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70">
              <Link href="/" className="hover:underline">Home</Link> <span aria-hidden>/</span> Rebates <span aria-hidden>/</span> Dealer rebates
            </nav>
            <h1 className="display mt-3 text-[2.3rem] sm:text-6xl">Amana and ACiQ dealer rebates on heat pumps</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              On top of your utility rebates, the manufacturers often offer <strong className="text-white">{dealer.range}</strong> off select heat pumps and dual-fuel systems, taken off your invoice instantly.
            </p>
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
            <div className="flex items-center gap-5">
              {dealer.logos.map((l) => (
                <Image key={l.src} src={l.src} alt={l.alt} width={l.w} height={l.h} preload sizes="200px" className="h-10 w-auto" />
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-sky-soft p-5">
              <p className="display text-5xl text-teal">{dealer.range}</p>
              <p className="mt-1 font-bold">Off select heat pumps and dual-fuel systems</p>
            </div>
            <p className="mt-5 flex gap-2.5 font-semibold">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-teal" /> Taken off your invoice instantly, on top of your utility rebates.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="display text-4xl sm:text-5xl">How dealer rebates work</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            Every so often, Amana and ACiQ offer extra savings on specific heat pumps and dual-fuel systems. Here’s what to know.
          </p>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {howItWorks.map((h, i) => (
            <li key={h.title} className="rounded-2xl p-6 ring-1 ring-line">
              <span className="display grid h-12 w-12 place-items-center rounded-full bg-ink text-xl text-sky">{i + 1}</span>
              <h3 className="mt-4 text-xl font-extrabold">{h.title}</h3>
              <p className="mt-2 text-mist">{h.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* COMFORT ADVISOR */}
      <section className="bg-sky">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="wrap-type text-2xl text-white">The good news</p>
            <h2 className="display mt-2 text-4xl text-ink sm:text-5xl">Your Comfort Advisor tracks every offer for you</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/85">
              You don’t have to hunt for deals. Your Eco Home Comfort Advisor will know exactly which dealer rebates are available and how much each system qualifies for, and every rebate on your final estimate is guaranteed.
            </p>
          </div>
          <div className="grid gap-3">
            <a href={site.bookingUrl} className="flex items-center justify-center rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
              Book a free estimate
            </a>
            <a href={site.phoneHref} className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-lg font-bold text-ink shadow-[0_4px_0_var(--color-ink)] hover:bg-sky-soft">
              <PhoneIcon className="h-5 w-5" /> {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="wrap-type text-2xl text-sky" style={{ textShadow: "none" }}>Stack your savings</p>
            <h2 className="display mt-2 text-4xl sm:text-5xl">Dealer rebates stack on top of utility rebates</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              A heat pump paired with a gas furnace is the ideal system for most Utah homes, and it’s the setup that qualifies for the most rebates. Combine Wattsmart, ThermWise and dealer rebates, and a premium system often costs about the same as a standard one.
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
            <h3 className="text-xl font-extrabold">Rebates on a heat pump and gas furnace system</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {stack.map((r) => (
                <li key={r.label} className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1 py-4">
                  <span className="max-w-xs">
                    {r.href ? (
                      <Link href={r.href} className="block text-lg font-bold text-teal underline underline-offset-4 hover:text-ink">{r.label}</Link>
                    ) : (
                      <span className="block text-lg font-bold">{r.label}</span>
                    )}
                    <span className="block text-sm text-mist">{r.note}</span>
                  </span>
                  <span className="display text-2xl text-teal">{r.amount}</span>
                </li>
              ))}
              <li className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-4">
                <span className="text-lg font-extrabold">Up to</span>
                <span className="display text-3xl text-alarm-strong">{guaranteed.max}</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-mist">
              Utility rebates of {guaranteed.total} are guaranteed on every heat pump install. Dealer rebates depend on current manufacturer offers. Total assumes you’re a customer of both Rocky Mountain Power and Enbridge Gas.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
        <p className="font-bold text-teal">Our goal</p>
        <p className="display mt-3 text-3xl leading-tight sm:text-4xl">
          To educate Utah homeowners on smart heating and cooling, showing them how pairing a heat pump with a gas furnace creates the ideal system for their home, backed by maximum utility rebates.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-sky-soft">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">Dealer rebate questions</h2>
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

      {/* OTHER REBATES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <RebateLinks current="dealer" />
        <p className="mt-8 max-w-4xl text-sm text-mist">
          Dealer rebates are offered by the equipment manufacturers, apply to specific systems, and change over time. Eco Home is an independent contractor. Wattsmart is a Rocky Mountain Power program and ThermWise is an Enbridge Gas program.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="display text-4xl sm:text-5xl">See your price after every rebate</h2>
            <p className="mt-4 max-w-lg text-lg text-white/85">
              Every estimate shows your utility and dealer rebates up front, and every rebate on your final estimate is guaranteed.
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
