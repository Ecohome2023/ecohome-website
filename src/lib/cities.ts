// City pages at /service-area/[slug]. Each city has its own writing, local
// facts, a real job from that city and its own photo (see the page rules in the
// SEO keyword plan). Don't add a city until it has all of these.

export type CityFaq = { q: string; a: string };

export type City = {
  slug: string;
  name: string;
  county: string;
  metaTitle: string; // 49 characters or less (" | Eco Home" is added)
  metaDescription: string; // 155 characters or less
  h1: string;
  heroSub: string;
  intro: string[];
  facts: { label: string; value: string }[];
  homes: { title: string; body: string }[];
  rmp: boolean; // Rocky Mountain Power customers (Wattsmart rebate applies)
  job: { customer: string; title: string; problem: string; solution: string; result: string; img: string; alt: string; more?: string };
  faqs: CityFaq[];
  nearby: string[];
  updated: string; // YYYY-MM-DD, change when the page is meaningfully edited
  mapEmbed?: string;
};

export const cities: City[] = [
  {
    slug: "american-fork",
    name: "American Fork",
    county: "Utah County",
    metaTitle: "American Fork HVAC: Heating & Cooling, 24/7",
    metaDescription:
      "Heating and cooling from our American Fork shop: furnace and AC repair, heat pump installs, $2,150+ in guaranteed rebates, permits pulled. Open 24/7.",
    h1: "Heating and cooling in American Fork, UT",
    heroSub:
      "Our shop is on Automall Drive in American Fork, so we’re usually minutes from your door. Repairs, tune-ups and new heat pump and furnace systems, with the permit pulled on every job.",
    intro: [
      "American Fork is home for Eco Home Heating & Cooling. Our shop sits at 758 Automall Drive, and our technicians drive these streets every day. When your furnace quits on a January night or your AC can’t keep up in July, help is close by.",
      "At the foot of Mount Timpanogos, American Fork sits at about 4,600 feet. January nights average around 15°F and July afternoons average in the low 90s, so your system works hard in both seasons. That’s why we size every system with a load calculation for your home instead of guessing from the old unit, and why we recommend a heat pump paired with a gas furnace for most American Fork homes.",
    ],
    facts: [
      { label: "Elevation", value: "About 4,600 ft" },
      { label: "Winter nights", value: "Average low around 15°F in January" },
      { label: "Summer days", value: "Average high in the low 90s in July" },
      { label: "Electric", value: "Rocky Mountain Power" },
      { label: "Natural gas", value: "Enbridge Gas" },
      { label: "Permits", value: "American Fork City Building Division" },
    ],
    homes: [
      {
        title: "Older homes near Main Street",
        body: "Many homes around downtown and the historic old city hall were built long before central air was common. Ducts are often small or patched together, so we check airflow and duct sizing before recommending a system. A heat pump with a variable-speed blower can cool these homes evenly without tearing into walls.",
      },
      {
        title: "Split-level and two-story homes from the 1970s to 1990s",
        body: "A common problem in these homes is a hot upstairs and a cold basement. A single-speed AC runs full blast and shuts off, so it never mixes the air between floors. Variable-speed equipment runs longer at lower speed, which evens out the temperature room to room.",
      },
      {
        title: "Newer homes on the west side",
        body: "Newer builds toward the Lehi border are tighter and better insulated, but many came with the cheapest builder-grade equipment. When that first system wears out, it’s a chance to step up to an inverter heat pump and pick up the full rebates.",
      },
    ],
    rmp: true,
    job: {
      customer: "Trent B.",
      title: "Trent’s AC couldn’t cool every room. Now every room heats and cools evenly.",
      problem:
        "Trent’s AC ran, but some rooms in his home never cooled down.",
      solution:
        "A variable-speed heat pump with a gas furnace backup now moves steady air to every room, and the furnace covers the coldest nights.",
      result:
        "Every room in Trent’s home now heats and cools evenly, and the system uses less energy doing it.",
      more: "/service-area/american-fork/heat-pump-installation",
      img: "/images/american-fork-heat-pump-install.jpg",
      alt: "Eco Home technician checking the refrigerant charge on a new variable-speed heat pump at Trent B.’s home in American Fork",
    },
    faqs: [
      {
        q: "Do you serve all of American Fork?",
        a: "Yes. Our shop is at 758 Automall Drive in American Fork, so we cover the whole city, from downtown and the neighborhoods near American Fork Canyon to the newer west side. We’re open 24/7: call or book online any time.",
      },
      {
        q: "What rebates can American Fork homeowners get on a new heat pump?",
        a: "At least $2,150, guaranteed. American Fork homes are Rocky Mountain Power customers, so every heat pump we install gets $1,450 in Wattsmart rebates, plus $700 to $1,000 from Enbridge Gas when it’s paired with a gas furnace. We file all the paperwork.",
      },
      {
        q: "Do I need a permit to replace a furnace or AC in American Fork?",
        a: "Yes. Replacing a furnace, AC or heat pump needs a permit and inspection through American Fork City’s Building Division. Not every HVAC company pulls permits. We do on every job, and it’s included in your price.",
      },
      {
        q: "Will a heat pump keep my American Fork home warm in winter?",
        a: "Yes, when it’s paired with a gas furnace. January nights in American Fork average around 15°F. An inverter heat pump heats efficiently through most of the winter, and the gas furnace takes over on the coldest nights, so you’re never short on heat.",
      },
      {
        q: "How much does a new furnace or heat pump cost in American Fork?",
        a: "New furnaces start at $3,990, installed in one day. Heat pump and gas furnace systems start at $9,990 after incentives. For a price sized to your home, use our instant pricing tool; it takes about two minutes.",
      },
    ],
    updated: "2026-10-16",
    nearby: ["Lehi", "Highland", "Pleasant Grove", "Cedar Hills", "Lindon", "Alpine"],
  },
];

export const citySlugs = cities.map((c) => c.slug);
export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
// The page for a city name, if it has one yet.
export const cityHref = (name: string) => (citySlugs.includes(slugify(name)) ? `/service-area/${slugify(name)}` : null);
