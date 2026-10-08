import type { Metadata } from "next";
import { site } from "./site";

export const ogImage = { url: "/images/og-share.jpg", width: 1200, height: 630, alt: "Eco Home Heating & Cooling technician next to a heat pump" };

// Page metadata with its own social-share title, description and link.
// Keep titles under about 49 characters so " | Eco Home" fits in Google results.
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: site.name, title: `${title} | Eco Home`, description, url: path, images: [ogImage] },
  };
}
