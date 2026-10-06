import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Smile Guarantee: You Smile, or We Fix It Free",
  description:
    "Eco Home's Smile Guarantee: if you're not happy with our work, we come back and make it right at no charge. Serving Utah County and Salt Lake County.",
  alternates: { canonical: "/smile-guarantee" },
};

// DRAFT TERMS: approved by John before launch.
const claimDays = 30;

const steps = [
  { title: "Tell us", body: `Call us at ${site.phone} within ${claimDays} days of your service and tell us what isn’t right.` },
  { title: "We come back", body: "We send a technician back out to look at the problem, at no charge to you." },
  { title: "We make it right", body: "If the issue comes from our work, we fix it free. Parts and labor for the fix are on us." },
];

const covered = [
  "Repairs, tune-ups and installations we performed",
  "Our workmanship and the quality of our labor",
  "Follow-up visits needed to fix a problem with our work",
];

const notCovered = [
  "New problems unrelated to the work we did",
  "Damage from accidents, misuse or someone else’s repairs",
  "Equipment defects, which are handled under the manufacturer’s warranty (we’ll help you file it)",
];

export default function SmileGuarantee() {
  return (
    <>
      <section className="relative overflow-hidden bg-alarm text-white">
        <div className="mx-auto grid max-w-7xl items-end gap-8 px-4 pt-14 sm:px-6 md:grid-cols-[1.3fr_0.7fr]">
          <div className="pb-14">
            <p className="wrap-type text-2xl">Smile Guarantee</p>
            <h1 className="display mt-3 text-5xl sm:text-6xl">You smile, or we fix it free</h1>
            <p className="mt-5 max-w-xl text-xl font-medium leading-relaxed text-white/95">
              We want every homeowner smiling when our truck pulls away. If you’re not happy with our work, we come back and make it right at no charge.
            </p>
          </div>
          <div className="mx-auto w-48 sm:w-60 md:w-full md:max-w-xs">
            <Image src="/images/mascot.png" alt="" width={900} height={1192} preload sizes="320px" className="h-auto w-full" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="display text-4xl">How it works</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="display grid h-12 w-12 place-items-center rounded-full bg-ink text-xl text-sky">{i + 1}</span>
              <h3 className="mt-4 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-1 text-mist">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-sky-soft p-7">
            <h2 className="text-xl font-extrabold">What’s covered</h2>
            <ul className="mt-4 space-y-3">
              {covered.map((c) => (
                <li key={c} className="flex gap-3"><CheckIcon className="mt-1 h-5 w-5 shrink-0 text-teal" />{c}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-7 ring-1 ring-line">
            <h2 className="text-xl font-extrabold">What’s not covered</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-ink/85">
              {notCovered.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4">
          <a href={site.phoneHref} className="flex items-center gap-2 rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
            <PhoneIcon className="h-5 w-5" /> Call {site.phone}
          </a>
          <a href={site.bookingUrl} className="rounded-full bg-white px-7 py-4 text-lg font-bold text-ink shadow-[0_4px_0_var(--color-ink)] ring-1 ring-line hover:bg-sky-soft">
            Book service
          </a>
        </div>
      </section>
    </>
  );
}
