"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Marks [data-reveal] elements as "in" when they scroll into view.
// Re-runs on every page change so new pages animate too.
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    (window as unknown as { __revealReady?: boolean }).__revealReady = true;
    if (!root.classList.contains("motion")) return;
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
