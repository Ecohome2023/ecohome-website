"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { recordFirstTouch } from "@/lib/attribution";

// Records where the visitor first came from, and counts phone-number taps by
// channel in Vercel Analytics (a call can't reach HubSpot as a form can).
export function Attribution() {
  useEffect(() => {
    const ft = recordFirstTouch();
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href^="tel:"]');
      if (!a) return;
      track("Phone tap", { channel: ft.channel, page: location.pathname });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
