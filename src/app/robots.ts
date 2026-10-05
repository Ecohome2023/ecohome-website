import type { MetadataRoute } from "next";
import { site, isLive } from "@/lib/site";

// Until launch, keep search engines off the preview so it can't compete
// with the current ecohometoday.com.
export default function robots(): MetadataRoute.Robots {
  if (!isLive) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
