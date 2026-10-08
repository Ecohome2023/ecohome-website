"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";

// Phone-only bar that slides up once the estimate card has scrolled away.
// A scroll check rather than an IntersectionObserver: a fast fling can skip
// past the card without it ever intersecting.
export function MobileBookBar({ watch }: { watch: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    let queued = false;
    const update = () => {
      queued = false;
      const el = document.getElementById(watch);
      setOn(!!el && el.getBoundingClientRect().bottom < 0);
    };
    const onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
    addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => removeEventListener("scroll", onScroll);
  }, [watch]);
  return (
    <div
      inert={!on}
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-line bg-white p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-transform duration-300 md:hidden ${on ? "translate-y-0" : "translate-y-full"}`}
    >
      <a href={site.bookingUrl} target="_blank" rel="noopener" className="flex-1 rounded-full bg-alarm-strong py-3.5 text-center text-lg font-bold text-white">
        Book my free visit
      </a>
      <a href={site.phoneHref} aria-label={`Call ${site.phone}`} className="grid w-14 place-items-center rounded-full border-2 border-ink">
        <PhoneIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
