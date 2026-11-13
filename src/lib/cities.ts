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
  rmp: boolean; // Rocky Mountain Power customers (Wattsmart rebate applies). If false, Eco Home matches the $1,450 with its own credit.
  job: { customer: string; title: string; problem: string; solution: string; result: string; img: string; alt: string; more?: string; stats?: { value: string; label: string }[] };
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
  },  {
    slug: "lehi",
    name: "Lehi",
    county: "Utah County",
    metaTitle: "Lehi HVAC: Heating & Cooling, Open 24/7",
    metaDescription:
      "Heating and cooling for Lehi homes, from historic Main Street to Traverse Mountain: furnace and AC repair and dual-fuel heat pump systems. Open 24/7.",
    h1: "Heating and cooling in Lehi, UT",
    heroSub:
      "Our shop is just over the line in American Fork, so Lehi is close. Furnace and AC repairs, tune-ups and dual-fuel heat pump systems, open 24/7 with the permit pulled on every job.",
    intro: [
      "Few cities in Utah have grown like Lehi. It had about 19,000 residents in 2000 and nearly 76,000 by 2020, as Silicon Slopes brought tech jobs and new neighborhoods spread across Traverse Mountain and the west side. Older homes around the Main Street Historic District now sit a few minutes from subdivisions that didn’t exist 20 years ago.",
      "That boom means a lot of Lehi homes are now about 20 years old, and so is their original equipment. At about 4,560 feet, Lehi sees January lows in the mid-teens and July highs around 90°F, so a system has to work hard in both seasons. We size every install with a load calculation, and for most Lehi homes we recommend a heat pump paired with a gas furnace.",
    ],
    facts: [
      { label: "Elevation", value: "About 4,560 ft" },
      { label: "Winter nights", value: "Average low in the mid-teens in January" },
      { label: "Summer days", value: "Average high around 90°F in July" },
      { label: "Electric", value: "Lehi City Power" },
      { label: "Natural gas", value: "Enbridge Gas" },
      { label: "Permits", value: "Lehi City Building and Inspections" },
    ],
    homes: [
      {
        title: "Older homes near Main Street",
        body: "The blocks around Lehi’s Main Street Historic District hold the city’s oldest houses. Many were built long before central air, and their ducts were sized for a furnace alone. We check duct size and airflow before recommending a system, so new equipment isn’t fighting old ductwork.",
      },
      {
        title: "Two-story homes from the 2000s boom",
        body: "Lehi more than doubled between 2000 and 2010. Those homes, often with a loft or bonus room, are now about 20 years old, and the original furnace and AC are wearing out together. The upstairs runs hot in summer because a single-speed AC blasts on and off without mixing the air between floors.",
      },
      {
        title: "Newer homes on Traverse Mountain and the west side",
        body: "Lehi’s newest neighborhoods have bigger homes spread over three levels, from a finished basement to an upstairs loft. One system has to keep all three comfortable, which is where a variable-speed heat pump earns its keep: it runs longer at low speed and keeps air moving to every level.",
      },
    ],
    rmp: false,
    job: {
      customer: "Bryce K.",
      title: "Bryce’s upstairs and loft baked every afternoon. Now the house is even from the basement to the loft.",
      problem:
        "Bryce’s early-2000s home had a hot upstairs and loft by mid-afternoon, with the AC running almost nonstop. In winter, the 20-plus-year-old furnace was loud and uneven: the main floor overheated while the basement stayed cold.",
      solution:
        "A variable-speed heat pump paired with a natural gas furnace. The heat pump cools and handles mild-weather heating, and gas takes over when it gets colder.",
      result:
        "Even temperatures from the basement to the loft, and a quiet system in place of the old furnace’s roar.",
      more: "/service-area/lehi/heat-pump-installation",
      img: "/images/heat-pumps-pair.jpg",
      alt: "Two inverter heat pumps beside a newer home on a paver patio",
    },
    faqs: [
      {
        q: "Do you serve all of Lehi?",
        a: "Yes, from the historic homes near Main Street to Traverse Mountain, the neighborhoods around Thanksgiving Point and the west side. Our shop is right next door in American Fork, and we’re open 24/7.",
      },
      {
        q: "Are there HVAC rebates in Lehi?",
        a: "Yes. Lehi runs its own city power, so the $1,450 Rocky Mountain Power Wattsmart rebate doesn’t apply, but we match it with a $1,450 credit from Eco Home on every heat pump we install, so Lehi homes aren’t left out. Enbridge Gas ThermWise adds $700 to $1,000 when the heat pump is paired with a gas furnace. That’s $2,150 to $2,450, guaranteed, and we file the paperwork.",
      },
      {
        q: "Do I need a permit to replace a furnace or AC in Lehi?",
        a: "Yes. Lehi City’s Building and Inspections department issues the permit, and the finished install is inspected. Not every HVAC company pulls permits. We do on every job, and it’s part of your price.",
      },
      {
        q: "Does a dual-fuel system make sense for a newer Lehi home?",
        a: "Often, yes, especially once the original equipment reaches 15 to 20 years old, or if you’re dealing with a hot upstairs and high summer bills. The heat pump handles cooling and mild-weather heating, and the gas furnace takes over when it’s colder.",
      },
      {
        q: "How much does a new system cost in Lehi?",
        a: "New furnaces start at $3,990, installed in one day. Heat pump and gas furnace systems start at $9,990 after incentives, including our $1,450 match, and 0% interest for 12 months is available. Our instant pricing tool gives you a price for your home in about two minutes.",
      },
    ],
    updated: "2026-10-16",
    nearby: ["American Fork", "Saratoga Springs", "Highland", "Alpine", "Eagle Mountain", "Bluffdale"],
  },  {
    slug: "provo",
    name: "Provo",
    county: "Utah County",
    metaTitle: "Provo HVAC: Heating & Cooling, Open 24/7",
    metaDescription:
      "Heating and cooling for Provo homes, from older houses near downtown to the east bench: furnace and AC repair and dual-fuel heat pumps. Open 24/7.",
    h1: "Heating and cooling in Provo, UT",
    heroSub:
      "Furnace and AC repair, tune-ups and dual-fuel heat pump systems for Provo homes, open 24/7 with the permit pulled on every job. Provo runs its own power, so we match the $1,450 heat pump rebate.",
    intro: [
      "Provo is Utah County’s largest city, with about 115,000 residents in the 2020 census, and one of the oldest in the state: it began as Fort Utah in 1849. That history shows in its housing. Blocks of older homes surround downtown and BYU, postwar ramblers and split-levels climb the east bench, and newer two-story homes fill in the edges of town.",
      "Provo’s weather pushes a system hard at both ends. At the BYU weather station, July afternoons average about 95°F and January nights about 23°F. We size every install with a load calculation for the house in front of us, and for most Provo homes we recommend a variable-speed heat pump paired with a gas furnace.",
    ],
    facts: [
      { label: "People", value: "About 115,000 (2020 census)" },
      { label: "Elevation", value: "About 4,550 ft" },
      { label: "Summer days", value: "July highs average about 95°F" },
      { label: "Winter nights", value: "January lows average about 23°F" },
      { label: "Electric", value: "Provo City Power" },
      { label: "Natural gas", value: "Enbridge Gas" },
    ],
    homes: [
      {
        title: "Older homes near downtown and BYU",
        body: "Many of Provo’s oldest houses were built for a furnace alone, and air conditioning was added later with whatever ducts were already there. Upstairs rooms in these homes often fall behind in July. We look at duct size and return air before recommending equipment, so a new system isn’t choked by old ductwork.",
      },
      {
        title: "Ramblers and split-levels on the east bench",
        body: "Bench homes from the postwar decades usually have a finished basement and a furnace that has been replaced once already. The lower level stays cool while the main floor heats up. A variable-speed blower that runs longer at low speed keeps air moving between levels instead of cycling on and off.",
      },
      {
        title: "Two-story homes built in the last 30 years",
        body: "Newer Provo neighborhoods have bigger two-story homes, and much of their original equipment is now 20 years old or more. The upstairs bedrooms are the first rooms to suffer when a single-speed AC starts to wear out.",
      },
    ],
    rmp: false,
    job: {
      customer: "Brian H.",
      title: "Brian’s upstairs bedrooms hit 80° every afternoon. Now the whole house stays even, and quietly.",
      problem:
        "In Brian’s Provo home, the upstairs bedrooms reached 80° every summer afternoon while the basement stayed cold. The 22-year-old AC outside was loud enough to sound like a generator under the window, and the old single-speed furnace blower couldn’t push enough cool air to the second floor.",
      solution:
        "A variable-speed heat pump paired with a variable-speed gas furnace. The indoor blower adjusts its speed, so it can run for hours at a low, quiet setting and keep cool air moving to the upstairs.",
      result:
        "Steady temperatures upstairs through the afternoon, a system Brian can barely hear, and a dual-fuel setup that picks the cheaper heat source on its own each winter.",
      more: "/service-area/provo/heat-pump-installation",
      img: "/images/tech-heat-pump-brick.jpg",
      alt: "Eco Home technician working on a new outdoor heat pump beside a brick home",
    },
    faqs: [
      {
        q: "Do you serve all of Provo?",
        a: "Yes, from the older neighborhoods around downtown and BYU to the east bench, the Riverbottoms, north Provo and the west side. We’re a short drive up I-15 in American Fork and open 24/7.",
      },
      {
        q: "Provo has its own power company. Do I still get a heat pump rebate?",
        a: "Yes. Provo homes are on Provo City Power, so the Rocky Mountain Power Wattsmart rebate doesn’t apply. We match it with a $1,450 credit from Eco Home on every heat pump we install. Enbridge Gas ThermWise adds $700 to $1,000 when the heat pump is paired with a gas furnace, for $2,150 to $2,450 in all, guaranteed.",
      },
      {
        q: "Do I need a permit to replace a furnace or AC in Provo?",
        a: "Yes. Provo City issues the mechanical permit, and the finished install is inspected. Not every HVAC company pulls permits. We do on every job, and it’s included in your price.",
      },
      {
        q: "Can a new system fix a hot upstairs in an older Provo home?",
        a: "Often, if the ducts can carry the air. We check duct size and return air upstairs first. A variable-speed heat pump helps because it runs longer at low speed and keeps the air between floors mixed, but undersized ducts may need work too, and we’ll tell you if they do.",
      },
      {
        q: "How much does a new heating and cooling system cost in Provo?",
        a: "New furnaces start at $3,990, installed in one day. Heat pump and gas furnace systems start at $9,990 after incentives, including our $1,450 match, and 0% interest for 12 months is available. Instant pricing gives you a number for your home in about a minute.",
      },
    ],
    updated: "2026-11-13",
    nearby: ["Orem", "Springville", "Vineyard", "Mapleton", "Lindon", "Spanish Fork"],
  },
  {
    slug: "pleasant-grove",
    name: "Pleasant Grove",
    county: "Utah County",
    metaTitle: "Pleasant Grove HVAC: Heating & Cooling",
    metaDescription:
      "Heating and cooling for Pleasant Grove homes from our shop next door in American Fork: furnace and AC repair, dual-fuel heat pumps. Open 24/7.",
    h1: "Heating and cooling in Pleasant Grove, UT",
    heroSub:
      "Pleasant Grove is our next-door neighbor. Furnace and AC repair, tune-ups and dual-fuel heat pump systems, open 24/7, with the permit pulled on every job.",
    intro: [
      "Pleasant Grove was settled in 1850 under the name Battle Creek, and today it calls itself Utah’s City of Trees. About 37,700 people lived here in the 2020 census, on the bench below Mount Timpanogos and right on the American Fork border, a few minutes from our shop on Automall Drive.",
      "Homes here range from older houses near the center of town to ramblers with finished basements and two-story homes on the bench. Many now have a furnace and AC old enough to need replacing at the same time. We size every system with a load calculation, and for most Pleasant Grove homes we recommend a variable-speed heat pump paired with a gas furnace.",
    ],
    facts: [
      { label: "People", value: "About 37,700 (2020 census)" },
      { label: "Settled", value: "1850, as Battle Creek" },
      { label: "Known for", value: "Strawberry Days, held every June since 1922" },
      { label: "Electric", value: "Rocky Mountain Power" },
      { label: "Natural gas", value: "Enbridge Gas" },
      { label: "Distance from our shop", value: "A few minutes, right across the American Fork line" },
    ],
    homes: [
      {
        title: "Older homes near the center of town",
        body: "The blocks around Pleasant Grove’s historic center hold the city’s oldest houses. Ducts in these homes were often laid out for a furnace only, so central air added later can struggle to reach every room. We check the ducts before we size new equipment.",
      },
      {
        title: "Ramblers with finished basements",
        body: "A lot of Pleasant Grove homes are single-level ramblers with a finished basement. The basement stays cool all summer while the main floor heats up, and the old single-speed AC cycles off before the air mixes. Longer, slower run times fix much of that.",
      },
      {
        title: "Two-story homes on the bench",
        body: "Many homes higher on the bench are two stories. Upstairs bedrooms in these two-story homes are usually the first rooms to complain when an aging AC starts losing ground in July.",
      },
    ],
    rmp: true,
    job: {
      customer: "Kelsey W.",
      title: "Kelsey’s AC ran from noon to midnight and still couldn’t beat 77°. Now the house stays cool on the hottest days.",
      problem:
        "Kelsey’s 24-year-old air conditioner ran nonstop from noon until midnight on 100° days and still couldn’t bring the house below 77°. The bedrooms stayed warm, and the old system’s loud on-and-off cycling made it worse.",
      solution:
        "A variable-speed heat pump paired with a variable-speed gas furnace, replacing both old units. The new system runs continuously at low power instead of blasting on and off.",
      result:
        "Every room stays evenly cool, even on 100° afternoons, and in winter the system switches between the heat pump and gas on its own to keep heating costs down.",
      more: "/service-area/pleasant-grove/heat-pump-installation",
      img: "/images/tech-leveling-heat-pump.jpg",
      alt: "Eco Home technician leveling a new outdoor heat pump",
    },
    faqs: [
      {
        q: "How close are you to Pleasant Grove?",
        a: "Very close. Our shop is on Automall Drive in American Fork, just across the city line, and we’re open 24/7 for repairs.",
      },
      {
        q: "What heat pump rebates can Pleasant Grove homes get?",
        a: "Pleasant Grove is on Rocky Mountain Power, which pays a $1,450 Wattsmart rebate on every heat pump we install. Enbridge Gas ThermWise adds $700 to $1,000 when it’s paired with a gas furnace. That’s $2,150 to $2,450, guaranteed, and we file both.",
      },
      {
        q: "Does Pleasant Grove require a permit to replace a furnace or AC?",
        a: "Yes. Pleasant Grove City issues the permit, and the work is inspected when it’s finished. Not every HVAC company pulls permits. We do on every job, and it’s included in your price.",
      },
      {
        q: "My basement is cold and my main floor is hot. Is that the AC?",
        a: "Partly. A single-speed system shuts off before the air between floors mixes. A variable-speed heat pump and furnace run longer at low speed and narrow that gap, and we also check the returns and ducts on each level.",
      },
      {
        q: "How much does a new system cost in Pleasant Grove?",
        a: "Furnaces start at $3,990, installed in one day. Heat pump and gas furnace systems start at $9,990 after incentives, with 0% interest for 12 months available. Instant pricing gives you a price for your home in about a minute.",
      },
    ],
    updated: "2026-11-13",
    nearby: ["American Fork", "Lindon", "Cedar Hills", "Highland", "Orem", "Lehi"],
  },
  {
    slug: "saratoga-springs",
    name: "Saratoga Springs",
    county: "Utah County",
    metaTitle: "Saratoga Springs HVAC: Heating & Cooling",
    metaDescription:
      "Heating and cooling for Saratoga Springs homes along Utah Lake: furnace and AC repair and dual-fuel heat pump systems. Open 24/7, permits pulled.",
    h1: "Heating and cooling in Saratoga Springs, UT",
    heroSub:
      "Furnace and AC repair, tune-ups and dual-fuel heat pump systems for Saratoga Springs, open 24/7. We’re about 15 minutes away in American Fork and pull the permit on every job.",
    intro: [
      "Saratoga Springs barely existed as a city 25 years ago. It incorporated in 1997, counted about 1,000 residents in the 2000 census and nearly 38,000 by 2020. It now runs along the west shore of Utah Lake from Pelican Point north toward Camp Williams, at about 4,500 feet.",
      "That growth means most homes here were built in the last 20 years or so, and a lot of them still have their original builder-grade furnace and AC. Those systems are reaching the age where repairs get frequent. For most Saratoga Springs homes we recommend replacing both with a variable-speed heat pump paired with a gas furnace.",
    ],
    facts: [
      { label: "People", value: "About 37,700 (2020 census), up from about 1,000 in 2000" },
      { label: "Incorporated", value: "1997" },
      { label: "Elevation", value: "About 4,500 ft" },
      { label: "Electric", value: "Rocky Mountain Power" },
      { label: "Natural gas", value: "Enbridge Gas" },
      { label: "Permits", value: "Saratoga Springs City" },
    ],
    homes: [
      {
        title: "Early-2000s homes near the lake",
        body: "The first wave of neighborhoods went in near Utah Lake in the early 2000s. Their original furnaces and ACs are now about 20 years old, often single-speed builder models that were sized by rule of thumb rather than a load calculation.",
      },
      {
        title: "Two-story homes with west-facing rooms",
        body: "Saratoga Springs sits on the west side of the valley, with wide-open views across the lake. Rooms that face west soak up the afternoon sun, and a single-speed AC struggles to keep those bedrooms comfortable while the rest of the house is fine.",
      },
      {
        title: "Newer homes on the hills",
        body: "Newer neighborhoods climbing toward the Lake Mountains have bigger homes and longer duct runs. Variable-speed equipment fits these homes well because it can move air slowly and steadily to rooms at the far end of the ductwork.",
      },
    ],
    rmp: true,
    job: {
      customer: "Nate D.",
      title: "Nate’s west-facing bedrooms hit 79° every afternoon, and the old AC drowned out the patio. Both problems are gone.",
      problem:
        "The afternoon sun pushed Nate’s west-facing bedrooms to 79°, and his 19-year-old AC was so loud outside the patio that conversations stopped when it ran. Airflow was uneven, with some rooms always warmer than others.",
      solution:
        "A variable-speed heat pump paired with a variable-speed gas furnace. Most of the day the system runs at around 30% to 50% of its capacity, which is far quieter and keeps air moving to every room.",
      result:
        "The upstairs bedrooms stay cool through the afternoon, the patio is quiet again, and both floors stay closer to the same temperature. In winter, the system chooses the cheaper fuel on its own.",
      more: "/service-area/saratoga-springs/heat-pump-installation",
      img: "/images/heat-pump-install-vacuum.jpg",
      alt: "Technician pulling a vacuum on a newly installed heat pump",
    },
    faqs: [
      {
        q: "Do you serve all of Saratoga Springs?",
        a: "Yes, from the lakeside neighborhoods to the homes climbing toward the Lake Mountains. We’re in American Fork, about 15 minutes away, and open 24/7.",
      },
      {
        q: "What rebates are available in Saratoga Springs?",
        a: "Saratoga Springs is on Rocky Mountain Power, which pays $1,450 through Wattsmart on every heat pump we install. Enbridge Gas ThermWise adds $700 to $1,000 when it’s paired with a gas furnace, for $2,150 to $2,450, guaranteed.",
      },
      {
        q: "Do I need a permit to replace my HVAC in Saratoga Springs?",
        a: "Yes. Saratoga Springs City issues the permit, and the install is inspected. Not every HVAC company pulls permits. We do on every job, and it’s part of your price.",
      },
      {
        q: "My home is about 20 years old. Is it time to replace the original system?",
        a: "Often, yes. Builder-grade furnaces and ACs from the early 2000s are near the end of their typical life. If you’re seeing frequent repairs, hot rooms or high summer bills, compare a new dual-fuel system with the next repair.",
      },
      {
        q: "How much does a new system cost in Saratoga Springs?",
        a: "Furnaces start at $3,990, installed in one day. Heat pump and gas furnace systems start at $9,990 after incentives, and 0% interest for 12 months is available. Instant pricing gives you a number for your home in about a minute.",
      },
    ],
    updated: "2026-11-13",
    nearby: ["Lehi", "Eagle Mountain", "American Fork", "Vineyard", "Highland", "Bluffdale"],
  },
  {
    slug: "eagle-mountain",
    name: "Eagle Mountain",
    county: "Utah County",
    metaTitle: "Eagle Mountain HVAC: Heating & Cooling",
    metaDescription:
      "Heating and cooling for Eagle Mountain homes, from the Ranches to City Center: furnace and AC repair and dual-fuel heat pump systems. Open 24/7.",
    h1: "Heating and cooling in Eagle Mountain, UT",
    heroSub:
      "Furnace and AC repair, tune-ups and dual-fuel heat pump systems for Eagle Mountain, open 24/7, with the permit pulled on every job.",
    intro: [
      "Eagle Mountain incorporated as a town in 1996 and has been one of Utah’s fastest-growing cities ever since. It doubled from about 22,000 residents in 2010 to about 43,600 in 2020, and it covers more than 50 square miles of Cedar Valley.",
      "The city is big enough that its weather isn’t the same everywhere. The Ranches area in the northeast tends to be milder, while City Center to the southwest sits in a rain shadow with colder nights. Either way, most homes here are less than 25 years old, and the first round of furnaces and ACs is wearing out. For most Eagle Mountain homes we recommend a variable-speed heat pump paired with a gas furnace.",
    ],
    facts: [
      { label: "People", value: "About 43,600 (2020 census), double 2010" },
      { label: "Incorporated", value: "1996" },
      { label: "Size", value: "More than 50 square miles" },
      { label: "Electric", value: "Rocky Mountain Power" },
      { label: "Natural gas", value: "Enbridge Gas" },
      { label: "Permits", value: "Eagle Mountain City" },
    ],
    homes: [
      {
        title: "The first neighborhoods",
        body: "Eagle Mountain’s first subdivisions date from the late 1990s and 2000s. Their original builder-grade systems are now 20 years old or more, and that’s where most of our replacement calls come from.",
      },
      {
        title: "City Center and the colder southwest",
        body: "Homes toward City Center see colder nights and more sun. Those cold nights favor a dual-fuel setup: the heat pump handles the mild days, and the gas furnace carries the coldest ones.",
      },
      {
        title: "Newer two-story homes",
        body: "The newest neighborhoods are full of two-story homes with the bedrooms upstairs. When the main floor is chilly and the upstairs is warm, the problem is usually airflow between floors, which a variable-speed blower is designed to fix.",
      },
    ],
    rmp: true,
    job: {
      customer: "Lauren M.",
      title: "Lauren’s 21-year-old AC sounded like a helicopter outside the bedroom. Now both floors are even and the house is quiet.",
      problem:
        "Lauren’s 21-year-old air conditioner was loud enough next to the bedroom window that it sounded like a helicopter taking off, and the vents rattled every time it kicked on. The upstairs bedrooms stayed warm while the main floor felt chilly.",
      solution:
        "A variable-speed heat pump paired with a variable-speed gas furnace. Our crew laid protective runners across the stairs, and before leaving they walked Lauren through the new thermostat step by step.",
      result:
        "No more loud startup blasts or rattling vents, the two floors stay at the same temperature, and in winter the system switches between electric and gas heat on its own.",
      more: "/service-area/eagle-mountain/heat-pump-installation",
      img: "/images/tech-eco-home-shirt-heat-pump.jpg",
      alt: "Eco Home technician installing an outdoor heat pump",
    },
    faqs: [
      {
        q: "Do you serve all of Eagle Mountain?",
        a: "Yes, from the Ranches and Silverlake to City Center and the newer neighborhoods. We’re based in American Fork and open 24/7.",
      },
      {
        q: "Eagle Mountain used to run its own power. Who provides it now?",
        a: "Rocky Mountain Power took over the city’s electric system in the mid-2010s, so Eagle Mountain homes qualify for the $1,450 Wattsmart rebate on every heat pump we install. Enbridge Gas ThermWise adds $700 to $1,000 when it’s paired with a gas furnace.",
      },
      {
        q: "Do I need a permit for a new furnace or AC in Eagle Mountain?",
        a: "Yes. Eagle Mountain City issues the permit and inspects the work. Not every HVAC company pulls permits. We do on every job, and it’s part of the price.",
      },
      {
        q: "Why is my upstairs warm and my main floor cold?",
        a: "Warm air rises, and a single-speed system shuts off before it can mix the air between floors. A variable-speed blower runs longer at low speed and keeps the floors closer together. We also check the upstairs returns.",
      },
      {
        q: "How much does a new system cost in Eagle Mountain?",
        a: "Furnaces start at $3,990, installed in one day. Heat pump and gas furnace systems start at $9,990 after incentives, with 0% interest for 12 months available. Instant pricing gives you a price for your home in about a minute.",
      },
    ],
    updated: "2026-11-13",
    nearby: ["Saratoga Springs", "Lehi", "American Fork", "Highland", "Vineyard", "Bluffdale"],
  },
  {
    slug: "spanish-fork",
    name: "Spanish Fork",
    county: "Utah County",
    metaTitle: "Spanish Fork HVAC: Heating & Cooling",
    metaDescription:
      "Heating and cooling for Spanish Fork homes: furnace and AC repair and dual-fuel heat pumps. Spanish Fork is on city power, so we match the $1,450 rebate.",
    h1: "Heating and cooling in Spanish Fork, UT",
    heroSub:
      "Furnace and AC repair, tune-ups and dual-fuel heat pump systems for Spanish Fork, open 24/7. Spanish Fork runs its own power, so we match the $1,450 heat pump rebate.",
    intro: [
      "Spanish Fork was settled in 1851 and had about 42,600 residents in the 2020 census. Its homes run from older houses near Main Street to newer subdivisions on the edges of town, and many families have lived in the same house long enough to have replaced the furnace at least once.",
      "At about 4,670 feet, Spanish Fork gets real winters. The city’s weather station averages about 66 inches of snow a year and has recorded lows of −20°F. We size every system with a load calculation, and for most Spanish Fork homes we recommend a variable-speed heat pump paired with a gas furnace, so the furnace is there for the coldest nights.",
    ],
    facts: [
      { label: "People", value: "About 42,600 (2020 census)" },
      { label: "Settled", value: "1851" },
      { label: "Elevation", value: "About 4,670 ft" },
      { label: "Snowfall", value: "About 66 inches a year" },
      { label: "Electric", value: "Spanish Fork City Power & Light" },
      { label: "Natural gas", value: "Enbridge Gas" },
    ],
    homes: [
      {
        title: "Older homes near Main Street",
        body: "The center of Spanish Fork has houses that were built long before central air. Ducts sized for heat alone can limit how much cooling reaches the upstairs, so we check them before sizing a new system.",
      },
      {
        title: "Family homes that have been lived in for decades",
        body: "Plenty of Spanish Fork homes are on their second furnace and AC, often both now 20 years old or more. Replacing them together with a matched dual-fuel system means one install and one set of rebates.",
      },
      {
        title: "Newer subdivisions",
        body: "Spanish Fork has added thousands of homes on the edges of town. Their builder-grade equipment is reaching the age where repairs start adding up.",
      },
    ],
    rmp: false,
    job: {
      customer: "Greg P.",
      title: "Greg had to turn up the TV every time his 24-year-old system kicked on. Now he can’t hear it at all.",
      problem:
        "Greg’s furnace and AC were 24 years old, and the airflow was so loud he had to turn up the living room TV every time either one came on. He’d put off replacing them for years because he dreaded having contractors tracking through the house.",
      solution:
        "A variable-speed heat pump paired with a variable-speed gas furnace. Our installers wore shoe covers every time they came inside, kept Greg updated through the day and left the house clean.",
      result:
        "The new system is quiet enough that the TV volume stays where it is, and every room holds the same temperature.",
      more: "/service-area/spanish-fork/heat-pump-installation",
      img: "/images/tech-heat-pump-portrait.jpg",
      alt: "Eco Home technician beside a newly installed outdoor heat pump",
    },
    faqs: [
      {
        q: "Do you serve all of Spanish Fork?",
        a: "Yes, from the older neighborhoods near Main Street to the newer subdivisions on every side of town. We’re open 24/7.",
      },
      {
        q: "Spanish Fork has its own power company. Do I still get a heat pump rebate?",
        a: "Yes. Spanish Fork homes are on Spanish Fork City Power & Light, so the Rocky Mountain Power Wattsmart rebate doesn’t apply. We match it with a $1,450 credit from Eco Home on every heat pump we install, and Enbridge Gas ThermWise adds $700 to $1,000 with a gas furnace. That’s $2,150 to $2,450, guaranteed.",
      },
      {
        q: "Do I need a permit to replace a furnace or AC in Spanish Fork?",
        a: "Yes. Spanish Fork City issues the permit and inspects the finished install. Not every HVAC company pulls permits. We do on every job, and it’s included in your price.",
      },
      {
        q: "Is a heat pump enough for Spanish Fork winters?",
        a: "On its own, it would work hard on the coldest nights. That’s why we pair it with a gas furnace. The heat pump covers mild days, and the furnace takes over when it’s cold.",
      },
      {
        q: "How much does a new system cost in Spanish Fork?",
        a: "Furnaces start at $3,990, installed in one day. Heat pump and gas furnace systems start at $9,990 after incentives, including our $1,450 match, and 0% interest for 12 months is available. Instant pricing gives you a number for your home in about a minute.",
      },
    ],
    updated: "2026-11-13",
    nearby: ["Springville", "Salem", "Mapleton", "Payson", "Provo", "Elk Ridge"],
  },
  {
    slug: "springville",
    name: "Springville",
    county: "Utah County",
    metaTitle: "Springville HVAC: Heating & Cooling",
    metaDescription:
      "Heating and cooling for Springville homes: furnace and AC repair and dual-fuel heat pumps. Springville is on city power, so we match the $1,450 rebate.",
    h1: "Heating and cooling in Springville, UT",
    heroSub:
      "Furnace and AC repair, tune-ups and dual-fuel heat pump systems for Springville, open 24/7. Springville runs its own power, so we match the $1,450 heat pump rebate.",
    intro: [
      "Springville was settled in 1850 along Hobble Creek and is known today as Art City, home of the Springville Museum of Art. About 35,300 people lived here in the 2020 census, at an elevation of about 4,580 feet.",
      "The city mixes older homes near downtown with family neighborhoods built over the last several decades, and many of those homes now have a furnace and AC that are both near the end of their life. For most Springville homes we recommend replacing them together with a variable-speed heat pump paired with a gas furnace.",
    ],
    facts: [
      { label: "People", value: "About 35,300 (2020 census)" },
      { label: "Settled", value: "1850, along Hobble Creek" },
      { label: "Known as", value: "Art City" },
      { label: "Elevation", value: "About 4,580 ft" },
      { label: "Electric", value: "Springville City Power" },
      { label: "Natural gas", value: "Enbridge Gas" },
    ],
    homes: [
      {
        title: "Older homes near downtown",
        body: "Springville’s older neighborhoods around Main Street have homes built long before central air. Their ducts were laid out for heat, and that can leave the upstairs short on cooling. We check ducts before we size equipment.",
      },
      {
        title: "Two-story family homes",
        body: "In Springville’s two-story homes, the upstairs bedrooms are usually the least comfortable rooms in the house. A single-speed system shuts off before the air between floors mixes, so the bedrooms run warm in summer and cool in winter.",
      },
      {
        title: "Basement furnaces that clank",
        body: "Older furnaces in Springville basements often get noisy before they fail, with clanking blowers and loud startups that carry through the floors. A variable-speed furnace ramps up gently and runs quietly.",
      },
    ],
    rmp: false,
    job: {
      customer: "Sarah T.",
      title: "Sarah’s 26-year-old system clanked in the basement and never kept the upstairs comfortable. Now she has to check the thermostat to know it’s running.",
      problem:
        "Sarah’s heating and cooling system was 26 years old. It clanked loudly in the basement, and the upstairs bedrooms were uncomfortable in every season. She wanted a local team that wouldn’t pressure her or cut corners.",
      solution:
        "A variable-speed heat pump paired with a variable-speed gas furnace. Our technicians took extra time balancing airflow to the second floor, sealed each duct connection and walked Sarah through how the dual-fuel system runs on its own year-round.",
      result:
        "The system hums quietly in the background through family dinners and bedtime, and the upstairs is comfortable again.",
      more: "/service-area/springville/heat-pump-installation",
      img: "/images/heat-pump-install-lawn.jpg",
      alt: "Newly installed outdoor heat pump on a pad beside a lawn",
    },
    faqs: [
      {
        q: "Do you serve all of Springville?",
        a: "Yes, from the older homes near downtown to the neighborhoods up toward Hobble Creek Canyon and the west side. We’re open 24/7.",
      },
      {
        q: "Springville runs its own power. Can I still get a heat pump rebate?",
        a: "Yes. Springville homes are on Springville City Power, so the Rocky Mountain Power Wattsmart rebate doesn’t apply. We match it with a $1,450 credit from Eco Home on every heat pump we install, and Enbridge Gas ThermWise adds $700 to $1,000 with a gas furnace. That’s $2,150 to $2,450, guaranteed.",
      },
      {
        q: "Do I need a permit for a new furnace or AC in Springville?",
        a: "Yes. Springville City issues the permit and inspects the work. Not every HVAC company pulls permits. We do on every job, and it’s included in your price.",
      },
      {
        q: "Why are my upstairs bedrooms always uncomfortable?",
        a: "Heat rises, and a single-speed system cycles off before the air between floors mixes. Small upstairs returns make it worse. A variable-speed system and some duct balancing usually fix most of it.",
      },
      {
        q: "How much does a new system cost in Springville?",
        a: "Furnaces start at $3,990, installed in one day. Heat pump and gas furnace systems start at $9,990 after incentives, including our $1,450 match, and 0% interest for 12 months is available. Instant pricing gives you a price for your home in about a minute.",
      },
    ],
    updated: "2026-11-13",
    nearby: ["Provo", "Mapleton", "Spanish Fork", "Orem", "Salem", "Vineyard"],
  },
  {
    slug: "salt-lake-city",
    name: "Salt Lake City",
    county: "Salt Lake County",
    metaTitle: "Salt Lake City HVAC: Heating & Cooling, 24/7",
    metaDescription:
      "Heating and cooling for Salt Lake City homes, from Sugar House bungalows to the east bench: furnace and AC repair, heat pumps, $2,150+ in rebates.",
    h1: "Heating and cooling in Salt Lake City, UT",
    heroSub:
      "Furnace and AC repair, tune-ups and heat pump systems for Salt Lake City homes, open 24/7. We pull the permit on every job and file your rebates for you.",
    intro: [
      "Salt Lake City has some of the oldest homes on the Wasatch Front: Victorians in the Avenues, brick bungalows in Sugar House, and post-war ramblers in Rose Park and on the east bench. Many were built long before central air, and their heating and cooling has been added to and patched over the decades. That’s where most comfort problems here start.",
      "The city sits at about 4,300 feet. January nights average in the mid-20s, July afternoons average in the mid-90s, and winter inversions can trap cold, dirty air in the valley for days. We size every install with a load calculation for your home, and for most Salt Lake City houses we recommend a variable-speed heat pump paired with a gas furnace.",
    ],
    facts: [
      { label: "Elevation", value: "About 4,300 ft" },
      { label: "Winter nights", value: "Average low in the mid-20s in January" },
      { label: "Summer days", value: "Average high in the mid-90s in July" },
      { label: "Electric", value: "Rocky Mountain Power" },
      { label: "Natural gas", value: "Enbridge Gas" },
      { label: "Permits", value: "Salt Lake City Building Services" },
    ],
    homes: [
      {
        title: "Brick bungalows in Sugar House",
        body: "Sugar House is full of brick bungalows from the early 1900s through the 1940s. Many have upstairs bedrooms that the original ductwork barely reaches, so the upstairs bakes in summer while the main floor stays cool. A variable-speed system that runs longer at low speed is what evens that out.",
      },
      {
        title: "Older homes in the Avenues",
        body: "The Avenues is one of Salt Lake City’s oldest neighborhoods, with homes going back to the late 1800s. Thick brick walls, small or missing ducts and tight basements make every install different, and a ductless mini-split is often the cleanest way to cool rooms the ducts never reached.",
      },
      {
        title: "Post-war ramblers in Rose Park and on the east bench",
        body: "Neighborhoods like Rose Park filled with single-story homes after World War II. Their ducts were usually sized for a furnace alone, so when air conditioning was added later, airflow suffered. We check duct size and airflow before recommending equipment.",
      },
    ],
    rmp: true,
    job: {
      customer: "Mark T.",
      title: "Mark’s upstairs hit 82° every summer. The 14° swing between floors is gone.",
      problem:
        "In Mark and Sarah’s 1940s Sugar House bungalow, the upstairs hit 82° all summer while the main floor stayed cold. The 24-year-old furnace clanked, and the old AC rattled outside the home office window.",
      solution:
        "A variable-speed heat pump paired with a high-efficiency gas furnace. It runs steadily at low speed, so air moves evenly between floors, and it switches to gas when temperatures drop below freezing.",
      result: "The 14° swing between floors is gone, and the summer electric bill dropped from $340 to $195.",
      more: "/service-area/salt-lake-city/heat-pump-installation",
      img: "/images/amana-system-side-eco-home-van.jpg",
      alt: "Amana heat pump and gas furnace on pallets beside an Eco Home van",
    },
    faqs: [
      {
        q: "Do you serve all of Salt Lake City?",
        a: "Yes, from the Avenues and Capitol Hill to Sugar House, Rose Park, Glendale and the east bench. We’re open 24/7, and you can call or book online any time.",
      },
      {
        q: "What rebates can Salt Lake City homeowners get on a heat pump?",
        a: "At least $2,150, guaranteed. Salt Lake City is on Rocky Mountain Power and Enbridge Gas, so a heat pump paired with a gas furnace gets $1,450 from Wattsmart plus $700 to $1,000 from ThermWise. Dealer rebates can add more: Mark T. in Sugar House stacked $3,450 in all.",
      },
      {
        q: "Can you install a heat pump in an older Salt Lake City home?",
        a: "Usually, yes. We check the ducts, the electrical panel and where the outdoor unit can go. In older homes with small or missing ducts, a ductless mini-split can cool rooms the ducts never reached.",
      },
      {
        q: "Do I need a permit to replace a furnace or AC in Salt Lake City?",
        a: "Yes. Salt Lake City’s Building Services division issues the permit and inspects the work. Not every HVAC company pulls permits. We do on every job, and it’s included in your price.",
      },
      {
        q: "How much does a new system cost in Salt Lake City?",
        a: "New furnaces start at $3,990, installed in one day. Heat pump and gas furnace systems start at $9,990 after incentives, with $0 down and 0% interest for 12 months available. Instant pricing gives you a number for your home in about two minutes.",
      },
    ],
    updated: "2026-10-19",
    nearby: ["South Salt Lake", "Millcreek", "Holladay", "West Valley City", "North Salt Lake", "Murray"],
  },  {
    slug: "west-valley-city",
    name: "West Valley City",
    county: "Salt Lake County",
    metaTitle: "West Valley City HVAC: Heating & Cooling",
    metaDescription:
      "Heating and cooling for West Valley City homes: furnace and AC repair 24/7, heat pump and gas furnace systems, $2,150+ in rebates guaranteed.",
    h1: "Heating and cooling in West Valley City, UT",
    heroSub:
      "From a furnace that won’t light to a house still cooled by window units, we fix and replace heating and cooling in West Valley City around the clock, permit included.",
    intro: [
      "West Valley City is Utah’s second-largest city, with about 140,000 people in the 2020 census. It only incorporated in 1980, but it already had more than 72,000 residents that year, so a big share of its homes were built in the 1960s and 1970s. Many of those houses are on their second or third furnace, and plenty have air conditioning that was added long after they were built.",
      "Down on the valley floor, inversions park over West Valley City for days each winter, and July afternoons regularly reach the mid-90s. Our recommendation for most homes here is a dual-fuel system, sized with a room-by-room load calculation rather than copied from whatever was there before.",
    ],
    facts: [
      { label: "People", value: "About 140,000 (2020 census)" },
      { label: "Elevation", value: "About 4,300 ft" },
      { label: "January", value: "Lows in the mid-20s on average" },
      { label: "July", value: "Highs in the mid-90s on average" },
      { label: "Electric / gas", value: "Rocky Mountain Power / Enbridge Gas" },
      { label: "Permits", value: "West Valley City Building Inspection Division" },
    ],
    homes: [
      {
        title: "Split-levels and ramblers from the 1960s and 1970s",
        body: "These homes make up much of the older part of the city. Split-levels put three short floors on one system, so the top level runs hot in summer and the lowest level stays cold in winter. A variable-speed system that runs longer and gentler keeps air moving between levels.",
      },
      {
        title: "Homes from the 1980s and 1990s boom",
        body: "West Valley City grew from about 72,000 people in 1980 to nearly 109,000 by 2000. Homes from those years often still have their original ductwork and a second-generation AC, sometimes one that runs on R-22, which is no longer made.",
      },
      {
        title: "Newer homes built since 2000",
        body: "The city added more than 30,000 people between 2000 and 2020. Those newer homes are tighter, but many came with builder-grade equipment that’s now reaching the end of its life, which is a good time to step up to an inverter heat pump.",
      },
    ],
    rmp: true,
    job: {
      customer: "Chris P.",
      title: "Chris’s 30-year-old furnace sounded like a freight train. Now three window units are gone and the house is quiet.",
      problem:
        "Chris’s 1970s split-level had a 30-year-old furnace that rattled through the floorboards every time it kicked on, and the central AC had died three summers earlier. The family got by with three noisy window units, high power bills and stifling back rooms.",
      solution:
        "A variable-speed heat pump paired with a high-efficiency gas furnace, with the window units removed. The heat pump cools and handles mild-weather heating, and the furnace takes over in sub-freezing storms.",
      result: "Quiet, balanced heating and cooling in every room, with $3,450 in rebates stacked.",
      more: "/service-area/west-valley-city/heat-pump-installation",
      img: "/images/tech-eco-home-shirt-heat-pump.jpg",
      alt: "Eco Home technician leveling a new heat pump beside a brick home",
    },
    faqs: [
      {
        q: "Do you serve all of West Valley City?",
        a: "All of it, from the older streets around Valley Fair Mall and the Utah Cultural Celebration Center to the newer subdivisions farther west. Phones and online booking are open 24/7.",
      },
      {
        q: "What rebates can West Valley City homeowners get on a heat pump?",
        a: "A dual-fuel install here earns $2,150 to $2,450 in guaranteed utility rebates: $1,450 from Rocky Mountain Power and $700 to $1,000 from Enbridge Gas. With a manufacturer rebate on top, Chris P. reached $3,450.",
      },
      {
        q: "Can you replace window AC units with central air?",
        a: "Yes. If your home has ducts, a heat pump paired with your furnace cools every room and heats most of the winter. If some rooms have no ducts, a ductless mini-split can cover them.",
      },
      {
        q: "Do I need a permit to replace a furnace or AC in West Valley City?",
        a: "Yes. The city’s Building Inspection Division lists furnace and AC replacement as work that needs a permit and an inspection. Not every HVAC company pulls permits. We do on every job, and it’s part of the price you’re quoted.",
      },
      {
        q: "How much does a new system cost in West Valley City?",
        a: "A furnace by itself starts at $3,990. A full dual-fuel system starts at $9,990 once rebates come off, and 0% financing for 12 months is available. For your home’s number, the instant pricing tool takes about two minutes.",
      },
    ],
    updated: "2026-10-19",
    nearby: ["Salt Lake City", "West Jordan", "Taylorsville", "Kearns", "Magna", "South Salt Lake"],
  },  {
    slug: "west-jordan",
    name: "West Jordan",
    county: "Salt Lake County",
    metaTitle: "West Jordan HVAC: Heating & Cooling, Open 24/7",
    metaDescription:
      "West Jordan heating and cooling: furnace and AC repair any hour, dual-fuel heat pump systems for two-story homes, and $2,150+ in rebates guaranteed.",
    h1: "Heating and cooling in West Jordan, UT",
    heroSub:
      "Two-story homes with hot bedrooms, 20-year-old furnaces, ACs that never shut off: we fix and replace heating and cooling across West Jordan, day or night.",
    intro: [
      "West Jordan has quadrupled since 1980, from about 27,000 people to nearly 117,000 in the 2020 census, which makes it Utah’s third-largest city. Most of that growth came as two-story subdivisions spreading west from the Jordan River, and the homes built in the 1990s and early 2000s are now hitting the age when their original furnaces and air conditioners give out together.",
      "From the historic mills at Gardner Village to the newest streets west of 4800 West, the common complaint is the same: an upstairs that won’t cool in July. A properly sized variable-speed heat pump, paired with a gas furnace for the coldest nights, is the fix we recommend most often here.",
    ],
    facts: [
      { label: "People", value: "Nearly 117,000 (2020 census)" },
      { label: "Growth", value: "About 27,000 in 1980; 68,000 in 2000" },
      { label: "Elevation", value: "About 4,350 ft" },
      { label: "Electric / gas", value: "Rocky Mountain Power / Enbridge Gas" },
      { label: "Landmarks", value: "Gardner Village, Jordan Landing, the Jordan River" },
    ],
    homes: [
      {
        title: "Two-story homes from the 1990s and 2000s",
        body: "West Jordan more than doubled between 1980 and 2000 and kept building after that. These houses usually have one system serving two floors, so bedrooms upstairs, especially west-facing ones, run hot all summer. Their original equipment is now 20 to 25 years old.",
      },
      {
        title: "Older homes near the Jordan River and Gardner Village",
        body: "The east side of the city has its oldest neighborhoods, settled back when West Jordan was farms and mills. Smaller ducts and add-on air conditioning are common, so we check airflow before sizing anything new.",
      },
      {
        title: "Newer homes west of 4800 West",
        body: "The fastest recent growth has been on the city’s west side. Those homes are tighter and better insulated, but many came with entry-level equipment that’s worth upgrading to an inverter heat pump when it wears out.",
      },
    ],
    rmp: true,
    job: {
      customer: "Jared N.",
      title: "Jared’s west-facing bedrooms never cooled. A variable-speed system fixed both floors and cut his summer bill 43%.",
      problem:
        "Jared’s late-1990s two-story near Jordan Landing ran the AC nonstop all summer, yet the west-facing bedrooms never cooled. His 22-year-old furnace short-cycled during cold snaps.",
      solution:
        "A dual-fuel system: a variable-speed heat pump matched with a gas furnace that adjusts its speed to keep both floors even.",
      result: "Both levels stay comfortable, and his summer electric bill fell from $290 to $165 a month.",
      more: "/service-area/west-jordan/heat-pump-installation",
      img: "/images/aciq-system-eco-home-van.jpg",
      alt: "ACiQ heat pump and matching gas furnace in front of an Eco Home van",
    },
    faqs: [
      {
        q: "What part of West Jordan do you cover?",
        a: "The whole city, from the older streets near Gardner Village and the Jordan River to Jordan Landing and the newer neighborhoods west of 4800 West. Call or book online 24/7.",
      },
      {
        q: "Which rebates apply in West Jordan?",
        a: "West Jordan homes are Rocky Mountain Power and Enbridge Gas customers, so a heat pump with a gas furnace earns $1,450 plus $700 to $1,000, guaranteed. Jared N. added a $1,000 dealer rebate for $3,150 total.",
      },
      {
        q: "Why are my upstairs bedrooms hot when the AC never shuts off?",
        a: "In two-story homes, heat rises and a single-speed AC cycles off before the air mixes. West-facing rooms also take the afternoon sun. A variable-speed system that runs longer and slower usually solves it.",
      },
      {
        q: "Is a permit required to replace a furnace or AC in West Jordan?",
        a: "Yes, a mechanical permit and inspection through West Jordan’s building department. Not every HVAC company pulls permits. We do on every job, and the cost is in your quote.",
      },
      {
        q: "What does a new system cost in West Jordan?",
        a: "Furnaces alone start at $3,990. A full dual-fuel system starts at $9,990 after rebates, and you can take 12 months at 0%. Our instant pricing tool gives a home-specific number in two minutes.",
      },
    ],
    updated: "2026-10-19",
    nearby: ["West Valley City", "South Jordan", "Taylorsville", "Riverton", "Kearns", "Herriman"],
  },
];

export const citySlugs = cities.map((c) => c.slug);
export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
// The page for a city name, if it has one yet.
export const cityHref = (name: string) => (citySlugs.includes(slugify(name)) ? `/service-area/${slugify(name)}` : null);
