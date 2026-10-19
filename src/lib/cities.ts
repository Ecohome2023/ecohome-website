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
