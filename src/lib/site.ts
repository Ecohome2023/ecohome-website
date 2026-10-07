// Single source of truth for business details. Everything on the site
// (header, footer, schema, page copy) reads from here, so a change made
// once updates every page. NAP must match the Google Business Profile exactly.

export const site = {
  name: "Eco Home Heating & Cooling",
  shortName: "Eco Home",
  url: "https://ecohometoday.com",
  phone: "801-396-0019",
  phoneHref: "tel:+18013960019",
  address: {
    street: "758 Automall Dr #9",
    city: "American Fork",
    region: "UT",
    zip: "84003",
  },
  hoursLabel: "Open 24/7",
  license: "13607597-5501",
  rating: { value: "4.8", count: 112 },
  financingPartner: "GreenSky",
  // Housecall Pro online booking link (every "Book" button uses it).
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ||
    "https://book.housecallpro.com/book/Eco-Home-Heating-and-Air-Experts/7aae129117144ef784412dbd1384725f?v2=true",
  // Instant estimate tool (estimate emailed to the homeowner). Until the tool
  // is built, these buttons fall back to the Housecall Pro booking page.
  instantPricingUrl: process.env.NEXT_PUBLIC_INSTANT_PRICING_URL ||
    "https://book.housecallpro.com/book/Eco-Home-Heating-and-Air-Experts/7aae129117144ef784412dbd1384725f?v2=true",
  // Google Business Profile (renamed to "Eco Home Heating & Cooling", Oct 2026).
  // Replace googleMapEmbed with a fresh embed code once Google approves the name.
  googleProfileUrl: "https://maps.google.com/?cid=16865815162724532104",
  googleProfileShortUrl: "https://maps.app.goo.gl/Kxi6cEzM2EJZas2N6",
  googleMapsUrl: "https://maps.google.com/?cid=16865815162724532104",
  googleMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.486928788933!2d-111.79406182354344!3d40.36094495903202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65196631301ac2c5%3A0xea0f69881597bf88!2sEco%20Home%2C%20Heating%20and%20Air%20Experts!5e1!3m2!1sen!2sus!4v1791329268144!5m2!1sen!2sus",
  geo: { lat: 40.36094, lng: -111.79406 },
  social: [] as string[],
};

// Set SITE_LIVE=true in Vercel only when ecohometoday.com points at this site.
export const isLive = process.env.SITE_LIVE === "true";

export const counties = [
  {
    name: "Utah County",
    cities: [
      "American Fork", "Alpine", "Cedar Hills", "Eagle Mountain", "Elk Ridge",
      "Highland", "Lehi", "Lindon", "Mapleton", "Orem", "Payson",
      "Pleasant Grove", "Provo", "Salem", "Santaquin", "Saratoga Springs",
      "Spanish Fork", "Springville", "Vineyard", "Woodland Hills",
    ],
  },
  {
    name: "Salt Lake County",
    cities: [
      "Bluffdale", "Cottonwood Heights", "Draper", "Herriman", "Holladay",
      "Kearns", "Magna", "Midvale", "Millcreek", "Murray", "Riverton",
      "Salt Lake City", "Sandy", "South Jordan", "South Salt Lake",
      "Taylorsville", "West Jordan", "West Valley City",
    ],
  },
];

export const allCities = counties.flatMap((c) => c.cities);

export type NavLink = { label: string; href: string; built?: boolean };
export type NavItem = NavLink & { children?: NavLink[] };

// Service pages are being built one at a time. Until a page exists
// (built: true), its menu link points to the homepage services section.
const heatPumpRepair = { label: "Heat pump repair", href: "/services/heat-pump-repair" };
const miniSplits = { label: "Ductless mini-splits", href: "/services/mini-splits" };

export const nav: NavItem[] = [
  {
    label: "Heating",
    href: "/heating",
    children: [
      { label: "Furnace repair", href: "/services/furnace-repair" },
      { label: "Furnace replacement", href: "/services/furnace-replacement" },
      heatPumpRepair,
      miniSplits,
      { label: "Heating tune-ups", href: "/services/heating-tune-up" },
    ],
  },
  {
    label: "Cooling",
    href: "/cooling",
    children: [
      { label: "AC repair", href: "/services/ac-repair" },
      { label: "AC replacement", href: "/services/ac-replacement" },
      heatPumpRepair,
      miniSplits,
      { label: "Cooling tune-ups", href: "/services/cooling-tune-up" },
    ],
  },
  { label: "Heat Pumps", href: "/heat-pumps", built: true },
  { label: "Care Plan", href: "/#care-plan", built: true },
  { label: "Specials", href: "/#specials", built: true },
  { label: "About", href: "/#reviews", built: true },
];

export function hrefFor(link: NavLink) {
  return link.built ? link.href : "/#services";
}

export const faqs = [
  {
    q: "Do heat pumps really work in Utah winters?",
    a: "Yes. Today's cold-climate heat pumps keep heating efficiently well below freezing, and most Utah homes pair one with a gas furnace as backup for the coldest nights. That setup, called dual fuel, picks whichever source is cheaper to run at the moment, so you stay warm without paying for it.",
  },
  {
    q: "What does a service visit cost?",
    a: "A full system diagnostic is $129, and furnace tune-ups are $39 right now. You'll get a clear price before any repair work starts.",
  },
  {
    q: "Should I repair or replace my system?",
    a: "If your system is under about 10 years old and the repair is a small share of what a new one costs, repairing usually makes sense. Older systems with big repairs are often better replaced. We'll show you both numbers and let you decide.",
  },
  {
    q: "Are you really available 24/7?",
    a: "Yes. Call any time, day or night, including weekends and holidays, and we'll get a technician headed your way.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We offer financing through GreenSky, including $0-down options for qualified buyers, so a new system doesn't have to wait.",
  },
  {
    q: "What's included in the Essential Care Plan?",
    a: "Two maintenance visits a year, waived dispatch fees, 10% off all repairs, priority scheduling, a 20-point safety check, and $250 a year toward new equipment (up to $1,000). You also get a $250 Visa gift card for every friend you refer who buys a new system.",
  },
];
