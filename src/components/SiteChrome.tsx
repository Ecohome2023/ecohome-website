"use client";

import { usePathname } from "next/navigation";
import { isLandingPath } from "@/lib/landing";

// Renders the site header or footer everywhere except on paid-ad landing pages.
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return isLandingPath(path) ? null : <>{children}</>;
}
