import type { NextConfig } from "next";
import { oldSiteRedirects } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [new URL("https://i.ytimg.com/vi/**")],
  },
  async redirects() {
    return oldSiteRedirects;
  },
};

export default nextConfig;
