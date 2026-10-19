// County hub pages at /service-area/[slug]. A county page sums up the real jobs
// and city pages we already have there; don't add a county until at least one
// of its cities has a page with a real job.

import { counties as countyLists } from "./site";

export type County = {
  slug: string;
  name: string; // "Utah County"
  metaTitle: string; // 49 characters or less (" | Eco Home" is added)
  metaDescription: string; // 155 characters or less
  h1: string;
  heroSub: string;
  heroImg: { src: string; alt: string; caption?: string; pos?: string };
  intro: string[];
  facts: { label: string; value: string }[];
  jobs: { city: string; customer: string; problem: string; result: string }[]; // city = slug in lib/cities
  rebates: { title: string; body: string; points: { amount: string; label: string }[] };
  faqs: { q: string; a: string }[];
  updated: string; // YYYY-MM-DD
};

export const countyPages: County[] = [
  {
    slug: "utah-county",
    name: "Utah County",
    metaTitle: "Utah County HVAC Company: Heating & Cooling",
    metaDescription:
      "Heating and cooling across Utah County from our American Fork shop: repairs 24/7, heat pump and furnace systems, $2,150+ in rebates guaranteed.",
    h1: "Your HVAC company for Utah County",
    heroSub:
      "Our shop is in American Fork, in the middle of Utah County. From Lehi to Payson, we repair, tune up and replace furnaces, air conditioners and heat pumps, with the permit pulled on every job.",
    heroImg: {
      src: "/images/american-fork-heat-pump-install.jpg",
      alt: "Eco Home technician commissioning a new heat pump at Trent B.’s home in American Fork, Utah County",
      caption: "Trent B.’s new heat pump in American Fork",
      pos: "50% 60%",
    },
    intro: [
      "Utah County is Utah’s second-largest county, with more than 650,000 people in the 2020 census, and it added about 16,000 more in the last year alone. It runs from century-old homes near Main Streets in American Fork and Lehi to brand-new subdivisions in Saratoga Springs and Eagle Mountain, and a heating and cooling company here has to know both.",
      "We’re based on Automall Drive in American Fork, so most of the county is a short drive away. Every replacement starts with a load calculation for your home, and for most Utah County homes we recommend the same setup: a variable-speed heat pump paired with a gas furnace. It cools all summer, heats most of the winter for less, and the furnace takes over on the coldest nights.",
    ],
    facts: [
      { label: "People", value: "More than 650,000 (2020 census)" },
      { label: "Valley elevation", value: "About 4,500 to 5,000 ft" },
      { label: "Electric", value: "Rocky Mountain Power in most cities; Provo, Lehi, Springville and Spanish Fork run city power" },
      { label: "Natural gas", value: "Enbridge Gas" },
      { label: "Permits", value: "Each city’s building department; Utah County for unincorporated areas" },
    ],
    jobs: [
      {
        city: "american-fork",
        customer: "Trent B.",
        problem: "His AC ran, but some rooms never cooled down.",
        result: "A variable-speed heat pump with a gas furnace now heats and cools every room evenly.",
      },
      {
        city: "orem",
        customer: "Charles H.",
        problem: "A 20-year-old furnace that banged at startup, a cold basement and west-side bedrooms that never cooled.",
        result: "A dual-fuel system replaced both, and the basement and main floor now stay even.",
      },
      {
        city: "lehi",
        customer: "Bryce K.",
        problem: "An early-2000s home with a hot upstairs and loft, and a loud, uneven 20-year-old furnace.",
        result: "Even temperatures from the basement to the loft, and a quiet system in place of the roar.",
      },
    ],
    rebates: {
      title: "$2,150 to $2,450 in rebates, guaranteed, anywhere in Utah County",
      body: "Most Utah County cities are on Rocky Mountain Power, which pays $1,450 on every heat pump we install. Provo, Lehi, Springville and Spanish Fork run their own city power, so we match that $1,450 with a credit from Eco Home. Enbridge Gas adds $700 to $1,000 when the heat pump is paired with a gas furnace. We file the paperwork either way.",
      points: [
        { amount: "$1,450", label: "Rocky Mountain Power Wattsmart, or our match in city-power towns" },
        { amount: "$700–$1,000", label: "Enbridge Gas ThermWise, with a gas furnace" },
      ],
    },
    faqs: [
      {
        q: "Which Utah County cities do you serve?",
        a: "All of them, from Lehi, Saratoga Springs and Eagle Mountain in the north to Spanish Fork, Salem and Payson in the south. Our shop is in American Fork, and we’re open 24/7.",
      },
      {
        q: "Who should I hire to replace my AC in Utah County?",
        a: "Look for a licensed contractor who runs a load calculation instead of copying the old unit’s size, pulls the permit, and puts the equipment, warranty and rebates in writing. We do all of that on every job, and for most Utah County homes we recommend replacing the AC with a heat pump paired with your gas furnace.",
      },
      {
        q: "What rebates are there in cities with their own power, like Provo or Lehi?",
        a: "Provo, Lehi, Springville and Spanish Fork run city power, so the Rocky Mountain Power rebate doesn’t apply. We match it with a $1,450 credit from Eco Home on every heat pump we install, and Enbridge Gas rebates still apply.",
      },
      {
        q: "Do I need a permit to replace a furnace or AC in Utah County?",
        a: "Yes. Each city’s building department issues the permit, and Utah County handles homes in unincorporated areas. Not every HVAC company pulls permits. We do on every job, and it’s included in your price.",
      },
      {
        q: "How much does a new heating and cooling system cost in Utah County?",
        a: "New furnaces start at $3,990, installed in one day. Heat pump and gas furnace systems start at $9,990 after incentives, and 0% interest for 12 months is available. Instant pricing gives you a number for your home in about two minutes.",
      },
    ],
    updated: "2026-10-19",
  },
];

export const countySlugs = countyPages.map((c) => c.slug);
export const getCounty = (slug: string) => countyPages.find((c) => c.slug === slug);
export const countyCities = (c: County) => countyLists.find((l) => l.name === c.name)?.cities ?? [];
// The county page for a county name from lib/site, if it has one yet.
export const countyHref = (name: string) => {
  const c = countyPages.find((p) => p.name === name);
  return c ? `/service-area/${c.slug}` : null;
};
