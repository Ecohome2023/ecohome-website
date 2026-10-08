"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site, nav, hrefFor, type NavItem } from "@/lib/site";
import { PhoneIcon, StarIcon } from "./icons";

// Heating menus get the brand red accent, cooling menus the brand blue.
const accent: Record<string, string> = { Heating: "bg-heat", Cooling: "bg-cool", Rebates: "bg-alarm" };

function Chevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 7.5l5 5 5-5" />
    </svg>
  );
}

function DesktopMenu({ item, open, setOpen }: { item: NavItem; open: boolean; setOpen: (v: boolean) => void }) {
  const id = `menu-${item.label.toLowerCase()}`;
  return (
    <li className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 py-2 hover:text-teal"
      >
        {item.label} <Chevron open={open} />
      </button>
      {open && (
        <div id={id} className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_32px_rgba(20,40,58,0.18)] ring-1 ring-line">
            <span className={`block h-1.5 ${accent[item.label] ?? "bg-sky"}`} aria-hidden />
            <ul className="py-2">
              {item.children!.map((c) => (
                <li key={c.label}>
                  <Link href={hrefFor(c)} onClick={() => setOpen(false)} className="block px-5 py-2.5 font-semibold hover:bg-sky-soft">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            {item.allLabel && (
              <Link
                href={hrefFor(item)}
                onClick={() => setOpen(false)}
                className="block border-t border-line px-5 py-3 text-sm font-bold text-teal hover:bg-sky-soft"
              >
                {item.allLabel}
              </Link>
            )}
          </div>
        </div>
      )}
    </li>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null); // open desktop dropdown
  const [section, setSection] = useState<string | null>(null); // open mobile accordion
  const navRef = useRef<HTMLElement>(null);

  // Close dropdowns on Escape or a click outside the menu.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [menu]);

  const closeMobile = () => { setMobileOpen(false); setSection(null); };

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

        <nav ref={navRef} aria-label="Main" className="ml-2 hidden flex-1 lg:block xl:ml-6">
          <ul className="flex items-center gap-4 whitespace-nowrap text-[15px] font-semibold xl:gap-6">
            {nav.map((item) =>
              item.children ? (
                <DesktopMenu
                  key={item.label}
                  item={item}
                  open={menu === item.label}
                  setOpen={(v) => setMenu(v ? item.label : null)}
                />
              ) : (
                <li key={item.label}>
                  <Link href={hrefFor(item)} className="py-2 hover:text-teal">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-full px-3 py-2 font-bold hover:bg-sky-soft"
          >
            <PhoneIcon className="h-5 w-5 text-alarm" />
            <span className="hidden whitespace-nowrap sm:inline lg:hidden xl:inline">{site.phone}</span>
            <span className="sr-only sm:hidden lg:inline xl:hidden">Call {site.phone}</span>
          </a>
          <a
            href={site.bookingUrl}
            className="whitespace-nowrap rounded-full bg-alarm-strong px-4 py-2.5 text-sm font-bold text-white shadow-[0_3px_0_#b80028] hover:brightness-110 sm:px-5 sm:text-base"
          >
            Book service
          </a>
          <button
            type="button"
            className="rounded-md p-2 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="max-h-[calc(100vh-7rem)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-line last:border-0">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={section === item.label}
                      onClick={() => setSection(section === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between py-3 text-lg font-semibold"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className={`h-2.5 w-2.5 rounded-full ${accent[item.label] ?? "bg-sky"}`} aria-hidden />
                        {item.label}
                      </span>
                      <Chevron open={section === item.label} />
                    </button>
                    {section === item.label && (
                      <ul className="pb-3 pl-5">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <Link href={hrefFor(c)} onClick={closeMobile} className="block py-2 font-medium text-ink/85">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={hrefFor(item)} onClick={closeMobile} className="block py-3 text-lg font-semibold">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
