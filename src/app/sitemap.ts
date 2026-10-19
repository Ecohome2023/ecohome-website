import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { posts } from "@/lib/blog";
import { cities } from "@/lib/cities";
import { countyPages } from "@/lib/counties";
import { cityServices } from "@/lib/cityServices";

// lastModified only where we know the real date (city pages, blog posts).
// Stamping every page with the build time teaches Google to ignore the dates.
export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts: MetadataRoute.Sitemap = posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date, changeFrequency: "yearly", priority: 0.6 }));
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/instant-pricing`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/heat-pumps`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/services/furnace-replacement`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/services/ac-replacement`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/heating`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/cooling`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services/furnace-repair`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/services/ac-repair`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/services/heat-pump-repair`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services/mini-splits`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services/heating-tune-up`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/services/cooling-tune-up`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/rebates/rocky-mountain-power-wattsmart`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/rebates/enbridge-thermwise`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/rebates/dealer-rebates`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/blog`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${site.url}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/terms-of-service`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/smile-guarantee`, changeFrequency: "yearly", priority: 0.4 },
    ...countyPages.map((c) => ({ url: `${site.url}/service-area/${c.slug}`, lastModified: c.updated, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...cities.map((c) => ({ url: `${site.url}/service-area/${c.slug}`, lastModified: c.updated, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...cityServices.map((p) => ({ url: `${site.url}/service-area/${p.city}/${p.slug}`, lastModified: p.updated, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...blogPosts,
  ];
}
