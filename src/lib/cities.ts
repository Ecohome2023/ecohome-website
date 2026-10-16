// City pages at /service-area/[slug]. Each city has its own writing, local
// facts and a real job from that city (see the page rules in the SEO keyword
// plan). Don't add a city without a real job. Until the job's own photos come in,
// a general photo can stand in; leave heroCaption off so it isn't credited to the job.

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
  heroCaption?: string; // only when the hero photo is from this city's job
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
    heroCaption: "Trent B.’s new heat pump and gas furnace system in American Fork",
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
  },  {
    slug: "orem",
    name: "Orem",
    county: "Utah County",
    metaTitle: "Orem HVAC: Heating & Cooling, Open 24/7",
    metaDescription:
      "Heating and cooling for Orem homes: furnace and AC repair, heat pump and gas furnace systems, $2,150+ in guaranteed rebates. Open 24/7, permits pulled.",
    h1: "Heating and cooling in Orem, UT",
    heroSub:
      "We’re a short drive up I-15 from Orem and open 24/7. Furnace and AC repairs, tune-ups and new heat pump and furnace systems, with the permit pulled on every job.",
    intro: [
      "Orem started as orchards and farms on the bench above Provo. It grew fast once Geneva Steel opened in the 1940s, and again in the 1970s, when the population doubled in ten years. That history shows up in the heating and cooling: ductwork laid out decades ago, basements finished long after the house was built, and furnaces and air conditioners replaced at different times.",
      "At about 4,770 feet, Orem averages lows near 20°F in January and highs in the low 90s in July. A system here has to handle both. That’s why we size every install with a load calculation for your home, and why we recommend a heat pump paired with a gas furnace for most Orem houses.",
    ],
    facts: [
      { label: "Elevation", value: "About 4,770 ft" },
      { label: "Winter nights", value: "Average low near 20°F in January" },
      { label: "Summer days", value: "Average high in the low 90s in July" },
      { label: "Electric", value: "Rocky Mountain Power" },
      { label: "Natural gas", value: "Enbridge Gas" },
      { label: "Permits", value: "Orem City Building Safety Division" },
    ],
    homes: [
      {
        title: "Postwar ramblers from the 1950s and 1960s",
        body: "Orem’s population nearly tripled in the 1940s as Geneva Steel brought workers to the valley, and building kept going through the 1960s. Many of these single-story homes were designed around a furnace and had air conditioning added later, on ducts never sized for it. We measure airflow before recommending equipment, so a new system isn’t held back by old ducts.",
      },
      {
        title: "1970s and 1980s homes with finished basements",
        body: "Orem doubled in size between 1970 and 1980. Homes from that boom often have a cold basement and a warm main floor, because a single-speed furnace blasts on and off without ever mixing the air between levels. A variable-speed system runs longer and gentler, which evens it out.",
      },
      {
        title: "Older homes that have been added onto",
        body: "Orem was never laid out in regular city blocks. Many of its oldest homes started as farmhouses along the main roads and have been added onto over the years. Additions and converted garages often sit beyond the reach of the original ducts, where a ductless mini-split is usually the cleanest fix.",
      },
    ],
    rmp: true,
    job: {
      customer: "Charles H.",
      title: "Charles’s 20-year-old furnace banged and rattled. Now one dual-fuel system keeps the whole house even.",
      problem:
        "Charles’s furnace was more than 20 years old and started with a loud bang that rattled the ducts. The basement stayed cold all winter, and in summer the old AC ran all afternoon without cooling the west-side bedrooms.",
      solution:
        "A variable-speed heat pump paired with a new gas furnace. It runs longer at low speed to keep air moving between floors, and it uses the heat pump on mild days and gas when it gets cold.",
      result:
        "No more bang at startup, and the basement and main floor now stay at an even temperature.",
      more: "/service-area/orem/heat-pump-installation",
      img: "/images/heat-pump-brick-home.jpg",
      alt: "Inverter heat pump mounted on the brick wall of a Utah home",
    },
    faqs: [
      {
        q: "Do you serve all of Orem?",
        a: "Yes, every Orem neighborhood, from the homes around Utah Valley University to the east bench and the Vineyard border. We’re a short drive up I-15 in American Fork and open 24/7: call or book online any time.",
      },
      {
        q: "What rebates can Orem homeowners get on a new heat pump?",
        a: "Orem is on Rocky Mountain Power for electricity and Enbridge Gas for natural gas, so both rebate programs apply. Pair a heat pump with a gas furnace and you get $1,450 back from Wattsmart and another $700 to $1,000 from Enbridge: $2,150 or more, guaranteed. We handle the paperwork.",
      },
      {
        q: "Do I need a permit to replace a furnace or AC in Orem?",
        a: "Yes. Orem’s Building Safety Division issues permits for heating and air conditioning work, and an inspector checks the finished install. Not every HVAC company pulls permits. We do on every job, and the cost is built into your price.",
      },
      {
        q: "Why is my Orem basement so much colder than the main floor?",
        a: "Cool air settles low, and a single-speed furnace shuts off before it mixes the air between levels. Leaky or undersized ducts make it worse. A variable-speed system runs longer at lower speed, which keeps the floors much closer in temperature.",
      },
      {
        q: "How much does a new furnace or heat pump cost in Orem?",
        a: "A new furnace on its own starts at $3,990 and goes in in one day. A full heat pump and gas furnace system starts at $9,990 after incentives, and 0% interest for 12 months is available. Our instant pricing tool gives you a price for your home in about two minutes.",
      },
    ],
    updated: "2026-10-16",
    nearby: ["Vineyard", "Lindon", "Provo", "Pleasant Grove", "American Fork", "Lehi"],
  },
];

export const citySlugs = cities.map((c) => c.slug);
export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
// The page for a city name, if it has one yet.
export const cityHref = (name: string) => (citySlugs.includes(slugify(name)) ? `/service-area/${slugify(name)}` : null);
