import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";
import { BookingForm } from "@/components/booking/BookingForm";
import { CheckIcon, PhoneIcon, Stars } from "@/components/icons";

export const metadata: Metadata = pageMeta({
  title: "Book HVAC Service Online",
  description:
    "Book a furnace tune-up, AC tune-up, repair visit or free new-system estimate with Eco Home. Pick a time that works for you, right on our schedule.",
  path: "/book",
});

const points = [
  "Real open times, straight from our schedule",
  "Takes about a minute",
  "A clear price before any repair work starts",
];

export default async function Book({ searchParams }: { searchParams: Promise<{ [k: string]: string | string[] | undefined }> }) {
  const service = (await searchParams).service;
  return (
    <section className="bg-sky-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="wrap-type text-2xl text-alarm-strong" style={{ textShadow: "none" }}>Book online</p>
          <h1 className="display mt-2 text-4xl sm:text-5xl">Pick a time that works for you</h1>
          <ul className="mt-6 hidden space-y-3 sm:block">
            {points.map((p) => (
              <li key={p} className="flex gap-3 font-semibold">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal" /> {p}
              </li>
            ))}
          </ul>
          <a href={site.googleProfileUrl} className="mt-6 hidden items-center gap-2 font-semibold hover:underline sm:flex">
            <Stars /> {site.rating.value} from {site.rating.count} Google reviews
          </a>
          <p className="mt-6 hidden text-mist lg:block">
            Need help sooner, or after hours? Call{" "}
            <a href={site.phoneHref} className="inline-flex items-center gap-1 font-bold text-ink hover:underline">
              <PhoneIcon className="h-4 w-4" /> {site.phone}
            </a>
            . We’re open 24/7.
          </p>
        </div>

        <BookingForm initialService={typeof service === "string" ? service : ""} />
      </div>
    </section>
  );
}
