"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site, nav } from "@/lib/site";
import { PhoneIcon, StarIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_var(--color-line)]">
      {/* Utility strip */}
      <div className="bg-teal text-white text-[13px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 sm:px-6">
          <p className="flex items-center gap-1.5 font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-sky" aria-hidden />
            {site.hoursLabel}, including weekends and holidays
          </p>
          <p className="hidden items-center gap-5 sm:flex">
            <span className="flex items-center gap-1">
              <StarIcon className="h-3.5 w-3.5 text-[#ffc83d]" />
              {site.rating.value} from {site.rating.count} Google reviews
            </span>
            <span>Licensed &amp; insured, Utah #{site.license}</span>
          </p>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0" aria-label="Eco Home Heating & Cooling, home">
          <Image
            src="/images/logo.png"
            alt="Eco Home Heating & Cooling"
            width={1450}
            height={573}
            preload
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav aria-label="Main" className="ml-6 hidden flex-1 lg:block">
          <ul className="flex items-center gap-6 text-[15px] font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="py-2 hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-full px-3 py-2 font-bold hover:bg-sky-soft"
          >
            <PhoneIcon className="h-5 w-5 text-alarm" />
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sr-only sm:hidden">Call {site.phone}</span>
          </a>
          <a
            href={site.bookingUrl}
            className="rounded-full bg-alarm-strong px-4 py-2.5 text-sm font-bold text-white shadow-[0_3px_0_#b80028] hover:brightness-110 sm:px-5 sm:text-base"
          >
            Book service
          </a>
          <button
            type="button"
            className="rounded-md p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 text-lg font-semibold last:border-0"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
