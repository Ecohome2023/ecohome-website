// Tells Bing (and other IndexNow engines) about every page after a production
// build, so new and changed pages get crawled within hours. Runs as postbuild;
// does nothing outside Vercel production. The key file lives in /public.
import { readFileSync } from "node:fs";

const KEY = "31f49587fe00ce7fafc77b8813b1a0ad";
const HOST = "ecohometoday.com";

if (process.env.VERCEL_ENV !== "production") process.exit(0);
try {
  const xml = readFileSync(".next/server/app/sitemap.xml.body", "utf8");
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const r = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
    signal: AbortSignal.timeout(10000),
  });
  console.log(`IndexNow: submitted ${urlList.length} URLs, status ${r.status}`);
} catch (e) {
  console.log("IndexNow: skipped", e?.message ?? e); // never fail the build over this
}
