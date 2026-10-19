import { citySlugs } from "./cities";
import { countySlugs } from "./counties";
import { cityServices } from "./cityServices";
// Redirects from the old WordPress site (ecohometoday.com before October 2026).
// permanent: true  = the old page is gone for good (308).
// permanent: false = temporary (307) until we rebuild that page; then delete
//                    the rule so the new page lives at the old address.

type R = { source: string; destination: string; permanent: boolean };

const p = (source: string, destination: string): R => ({ source, destination, permanent: true });
const t = (source: string, destination: string): R => ({ source, destination, permanent: false });

export const oldSiteRedirects: R[] = [
  // Junk links the WordPress editor left behind: drop the suffix, then the
  // normal rules below send the page where it belongs
  p("/:path*/_wp_link_placeholder", "/:path*"),

  // Old pages Google still crawls (Search Console 404 report, Oct 2026)
  p("/heat-pump", "/heat-pumps"),
  p("/0-down-and-0-interest-cloned", "/#specials"),
  p("/utah-home-efficiency", "/instant-pricing"),
  p("/weather", "/"),
  p("/rebate-savings", "/rebates/rocky-mountain-power-wattsmart"),
  t("/rebates", "/rebates/rocky-mountain-power-wattsmart"), // until there is a rebates overview page
  p("/new-construction-bid-requests", "/"),
  p("/:path*/feed", "/:path*"),
  // Old solar posts (/utah-solar-ending-soon, /solar-pto-permission-to-operate,
  // /understanding-the-solar-city-...) are left as 404 on purpose: not HVAC.

  // Old service and offer pages
  p("/pages/heat-pumps", "/heat-pumps"),
  p("/pages/mini-splits", "/services/mini-splits"),
  p("/pages/air-conditioner-repair", "/services/ac-repair"),
  p("/pages/air-conditioner-maintenance", "/services/cooling-tune-up"),
  p("/pages/air-conditioner-replacement", "/services/ac-replacement"),
  p("/pages/air-conditioner-repair-in-ogden", "/services/ac-repair"),
  p("/pages/air-conditioner-repair-in-orem", "/service-area/orem/ac-repair"),
  p("/pages/0-down-0-interest", "/#specials"),
  p("/0-down-and-0-interest", "/#specials"),
  p("/free-quote-quiz", "/#options"),
  p("/air-conditioner-help", "/services/ac-repair"),
  p("/trusted-ac-repair-in-orem-utah", "/service-area/orem/ac-repair"),
  p("/air-conditioner-replacement-orem", "/service-area/orem/heat-pump-installation"),
  p("/air-conditioner-replacement-salt-lake-city", "/services/ac-replacement"),
  p("/air-conditioner-replacement-ogden", "/services/ac-replacement"),
  p("/pages/affordable-hvac/:slug*", "/heating"),
  p("/pages/heating-maintenance", "/services/heating-tune-up"),
  p("/pages/tune-up", "/services/heating-tune-up"),
  p("/pages/heating-repair", "/services/furnace-repair"),
  p("/pages/heating-installation", "/services/furnace-replacement"),
  p("/pages/furnace", "/services/furnace-replacement"),
  p("/pages/air-conditioner-installation", "/services/ac-replacement"),
  p("/pages/service-and-maintenance-plans", "/#care-plan"),
  p("/pages/financing", "/#specials"),
  p("/pages/no-money-out-of-pocket", "/#specials"),
  p("/pages/contact-form", "/#estimate"),
  p("/new-29-tune-up", "/services/heating-tune-up"),
  p("/hvac-calculator", "/#options"),
  p("/sticker", "/"),
  p("/tester-testing", "/"),
  p("/projects/:slug*", "/"),
  p("/pages/:slug*", "/"),

  // Old city pages for cities that now have a page: point them at it for good
  ...citySlugs.flatMap((c) => [
    p(`/service-area/${c}-heat-pump`, cityServices.some((s) => s.city === c && s.slug === "heat-pump-installation") ? `/service-area/${c}/heat-pump-installation` : `/service-area/${c}`),
    p(`/service-area/${c}-air-conditioner`, `/service-area/${c}`),
  ]),

  // Old city pages: temporary until each city page is rebuilt
  t("/service-area", "/#service-area"),
  t("/service-area/:city(.*)-air-conditioner", "/cooling"),
  // Old city URLs without a new page yet. Cities with a page (lib/cities) are left out.
  t(`/service-area/:slug((?!(?:${[...citySlugs, ...countySlugs].join("|")})(?:/|$)).*)`, "/heat-pumps"),

  // Blog posts: migrated ones point to /blog; the rest are temporary until migrated
  p("/utah-ductless-mini-split-guide", "/blog/utah-ductless-mini-split-guide"),
  p("/utah-hvac-tune-up-spring-checklist", "/blog/utah-hvac-tune-up-spring-checklist"),
  p("/utah-heat-pump-vs-gas-furnace-2026", "/blog/utah-heat-pump-vs-gas-furnace-2026"),
  p("/utah-heat-pump-vs-gas-furnace-on-the-wasatch-front", "/blog/utah-heat-pump-vs-gas-furnace-2026"),
  t("/utah-hvac-filtration-wildfire-smoke", "/services/cooling-tune-up"),
  t("/utah-smart-thermostat-savings", "/heat-pumps"),
  p("/utah-hvac-sizing-elevation-guide", "/blog/utah-hvac-sizing-elevation-guide"),
  t("/utah-inversion-air-quality-action-plan", "/services/heating-tune-up"),
  p("/the-2026-guide-to-utah-hvac-rebates-how-to-save-thousands-this-year", "/blog/the-2026-guide-to-utah-hvac-rebates-how-to-save-thousands-this-year"),
  t("/is-furnace-replacement-worth-the-investment", "/services/furnace-replacement"),
  t("/hvac-replacement-cost-a-breakdown-by-system-type", "/heat-pumps"),
  p("/hvac-refrigerants-are-changing-heres-what-utah-homeowners-need-to-know", "/blog/hvac-refrigerants-are-changing-heres-what-utah-homeowners-need-to-know"),
  t("/6-signs-its-time-for-an-hvac-system-upgrade", "/services/ac-replacement"),
  t("/proper-hvac-system-maintenance", "/services/heating-tune-up"),
  t("/why-heat-pumps-are-the-eco-friendly-choice-for-your-home", "/heat-pumps"),
  t("/6-energy-efficient-home-improvements-that-lower-your-utility-bills", "/rebates/rocky-mountain-power-wattsmart"),

  // Retired posts that no longer match our approach (dual fuel, not all-electric; expired tax credit)
  p("/top-reasons-to-switch-to-all-electric-heating-and-cooling-in-your-home", "/heat-pumps"),
  p("/4-benefits-of-all-electric-hvac-systems", "/heat-pumps"),
  p("/the-biggest-tax-credit-of-the-decade-is-disappearing-dec-31st-2025", "/rebates/rocky-mountain-power-wattsmart"),
  p("/groks-thoughts-traditional-ac-vs-heat-pump", "/services/ac-replacement"),

  // WordPress system pages
  p("/feed", "/"),
  p("/category/:slug*", "/"),
  p("/tag/:slug*", "/"),
  p("/author/:slug*", "/"),
  p("/wp-content/:path*", "/"),
  p("/wp-admin/:path*", "/"),
  p("/wp-login.php", "/"),
  p("/contact", "/#estimate"),
  p("/contact-us", "/#estimate"),
  p("/about", "/#reviews"),
  p("/about-us", "/#reviews"),
];
