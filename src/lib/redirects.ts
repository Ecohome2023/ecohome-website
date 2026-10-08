// Redirects from the old WordPress site (ecohometoday.com before October 2026).
// permanent: true  = the old page is gone for good (308).
// permanent: false = temporary (307) until we rebuild that page; then delete
//                    the rule so the new page lives at the old address.

type R = { source: string; destination: string; permanent: boolean };

const p = (source: string, destination: string): R => ({ source, destination, permanent: true });
const t = (source: string, destination: string): R => ({ source, destination, permanent: false });

export const oldSiteRedirects: R[] = [
  // Old service and offer pages
  p("/pages/heat-pumps", "/heat-pumps"),
  p("/pages/mini-splits", "/services/mini-splits"),
  p("/pages/air-conditioner-repair", "/services/ac-repair"),
  p("/pages/air-conditioner-maintenance", "/services/cooling-tune-up"),
  p("/pages/air-conditioner-replacement", "/services/ac-replacement"),
  p("/pages/air-conditioner-repair-in-ogden", "/services/ac-repair"),
  p("/pages/air-conditioner-repair-in-orem", "/services/ac-repair"),
  p("/pages/0-down-0-interest", "/#specials"),
  p("/0-down-and-0-interest", "/#specials"),
  p("/free-quote-quiz", "/#options"),
  p("/air-conditioner-help", "/services/ac-repair"),
  p("/trusted-ac-repair-in-orem-utah", "/services/ac-repair"),
  p("/air-conditioner-replacement-orem", "/services/ac-replacement"),
  p("/air-conditioner-replacement-salt-lake-city", "/services/ac-replacement"),
  p("/air-conditioner-replacement-ogden", "/services/ac-replacement"),
  p("/pages/:slug*", "/"),

  // Old city pages: temporary until each city page is rebuilt
  t("/service-area", "/#service-area"),
  t("/service-area/american-fork", "/"),
  t("/service-area/:slug*", "/heat-pumps"),

  // Blog posts we plan to bring over: temporary until migrated
  t("/utah-ductless-mini-split-guide", "/services/mini-splits"),
  t("/utah-hvac-tune-up-spring-checklist", "/services/cooling-tune-up"),
  t("/utah-heat-pump-vs-gas-furnace-2026", "/heat-pumps"),
  t("/utah-hvac-filtration-wildfire-smoke", "/services/cooling-tune-up"),
  t("/utah-smart-thermostat-savings", "/heat-pumps"),
  t("/utah-hvac-sizing-elevation-guide", "/heat-pumps"),
  t("/utah-inversion-air-quality-action-plan", "/services/heating-tune-up"),
  t("/the-2026-guide-to-utah-hvac-rebates-how-to-save-thousands-this-year", "/rebates/rocky-mountain-power-wattsmart"),
  t("/is-furnace-replacement-worth-the-investment", "/services/furnace-replacement"),
  t("/hvac-replacement-cost-a-breakdown-by-system-type", "/heat-pumps"),
  t("/hvac-refrigerants-are-changing-heres-what-utah-homeowners-need-to-know", "/services/ac-replacement"),
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
