"use client";

import { useEffect, useState } from "react";
import type { Review } from "@/lib/reviews";
import { Stars } from "./icons";

// Shows one Google review at a time and cycles through them. Every review is in
// the page's HTML (only the active one is visible), so search engines read all.
export function ReviewRotator({ reviews, interval = 7000 }: { reviews: Review[]; interval?: number }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reviews.length < 2) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % reviews.length), interval);
    return () => clearInterval(t);
  }, [paused, reviews.length, interval]);

  const go = (d: number) => setI((n) => (n + d + reviews.length) % reviews.length);

  return (
    <div
      className="relative rounded-3xl bg-white p-7 text-ink ring-1 ring-line sm:p-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Google reviews"
    >
      <div className="grid">
        {reviews.map((r, n) => (
          <figure
            key={r.name}
            aria-hidden={n !== i}
            className={`col-start-1 row-start-1 transition-opacity duration-500 ${n === i ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <Stars className="h-5 w-5" />
            <blockquote className="mt-4 text-xl font-medium leading-relaxed sm:text-2xl">“{r.text}”</blockquote>
            <figcaption className="mt-5 font-bold">
              {r.name} <span className="font-normal text-mist">· Google review{r.service ? ` · ${r.service}` : ""}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <button type="button" onClick={() => go(-1)} aria-label="Previous review" className="grid h-10 w-10 place-items-center rounded-full ring-2 ring-ink hover:bg-sky-soft">
          <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true"><path d="M11.5 3 5.5 9l6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next review" className="grid h-10 w-10 place-items-center rounded-full ring-2 ring-ink hover:bg-sky-soft">
          <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true"><path d="M6.5 3l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="ml-2 flex gap-1.5" aria-hidden="true">
          {reviews.map((r, n) => (
            <span key={r.name} className={`h-2 rounded-full transition-all ${n === i ? "w-6 bg-alarm-strong" : "w-2 bg-line"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
