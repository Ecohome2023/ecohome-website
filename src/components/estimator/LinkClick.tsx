"use client";

import { useEffect } from "react";

// Records that the estimate page was opened from the texted link (?k=<link code>).
// It runs in the browser, so link previews and spam scanners that only fetch the
// link never count. Once per link per browser tab.
export function LinkClick({ k }: { k: string }) {
  useEffect(() => {
    if (!k) return;
    try {
      if (sessionStorage.getItem(`eh_click_${k}`)) return;
      sessionStorage.setItem(`eh_click_${k}`, "1");
    } catch {}
    const body = JSON.stringify({ k });
    if (!navigator.sendBeacon?.("/api/estimate-click", body)) {
      fetch("/api/estimate-click", { method: "POST", body, keepalive: true }).catch(() => {});
    }
  }, [k]);
  return null;
}
