import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/heat-pumps`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/smile-guarantee`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
  ];
}
