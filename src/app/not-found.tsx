import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/heat-pumps", label: "Dual-fuel heat pumps" },
  { href: "/heating", label: "Heating services" },
  { href: "/cooling", label: "Cooling services" },
  { href: "/rebates/rocky-mountain-power-wattsmart", label: "Rebates" },
  { href: "/#care-plan", label: "Essential Care Plan" },
  { href: "/#specials", label: "Specials" },
];

export default function NotFound() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="wrap-type text-2xl text-sky" style={{ textShadow: "none" }}>Page not found</p>
        <h1 className="display mt-2 text-4xl sm:text-6xl">We couldn’t find that page</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80">
          It may have moved when we updated our website. Here are some good places to start, or give us a call. We’re open 24/7.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block rounded-xl bg-white/[0.07] px-5 py-4 font-bold ring-1 ring-white/15 hover:bg-white/15">{l.label} →</Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">Go to the homepage</Link>
          <a href={site.phoneHref} className="flex items-center gap-2 rounded-full px-7 py-4 text-lg font-bold text-white ring-2 ring-white/60 hover:bg-white/10">
            <PhoneIcon className="h-5 w-5" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
