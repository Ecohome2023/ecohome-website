// Service-in-a-city pages at /service-area/[city]/[service]. Only for cities and
// services with real demand and something local to say (see the SEO plan).
// Every page's writing is its own: never copy a block from another page.

type Item = { title: string; body: string };

export type CityService = {
  city: string; // slug in lib/cities
  slug: string; // e.g. "furnace-repair"
  serviceName: string; // short name, e.g. "Furnace repair"
  mainHref: string; // the general service page
  metaTitle: string; // 49 characters or less
  metaDescription: string; // 155 characters or less
  h1: string;
  heroSub: string;
  heroImg: { src: string; alt: string; pos?: string };
  primaryCta: "BOOK" | "INSTANT";
  intro: string[];
  factorsTitle: string;
  factors: Item[];
  listTitle: string;
  listIntro: string;
  list: Item[];
  price: { title: string; body: string; points: string[] };
  job?: { customer: string; title: string; problem: string; solution: string; result: string; img?: string; alt?: string };
  decideTitle?: string;
  decide?: string[];
  safety?: { title: string; body: string };
  faqs: { q: string; a: string }[];
};

export const cityServices: CityService[] = [
  // ---------------------------------------------------------------- FURNACE REPAIR
  {
    city: "american-fork",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in American Fork, UT, Open 24/7",
    metaDescription:
      "Furnace repair from our American Fork shop on Automall Drive. Open 24/7, $129 diagnostic, an upfront price before any work. Call 801-396-0019.",
    h1: "Furnace repair in American Fork, UT",
    heroSub:
      "No heat on a 15° night? Our shop is on Automall Drive in American Fork, and we’re open 24/7. You get a $129 diagnostic and an upfront price before we touch anything.",
    heroImg: { src: "/images/furnace-tech-thumbs-up.jpg", alt: "Eco Home technician beside an open gas furnace after a repair", pos: "50% 35%" },
    primaryCta: "BOOK",
    intro: [
      "When a furnace quits in American Fork, it usually quits at the worst time: a January night when it’s been running for hours to keep up. Because our shop is here in town, a technician isn’t far away.",
      "We fix all major furnace brands, gas and electric, old and new. Every repair starts with a full diagnostic so we fix the cause, not just the symptom, and you see the price before any work begins.",
    ],
    factorsTitle: "Why American Fork furnaces work so hard",
    factors: [
      {
        title: "Long, cold nights",
        body: "January nights in American Fork average around 15°F. A furnace that cycles on and off all night wears out ignitors, flame sensors and blower parts faster than one in a milder town.",
      },
      {
        title: "Winter inversions",
        body: "When an inversion settles over Utah Valley, the same dirty air sits over the city for days. Filters clog faster, airflow drops, and an overheated furnace shuts itself off on its safety limit switch.",
      },
      {
        title: "Older furnaces downtown",
        body: "Many homes near Main Street still run furnaces 20 or more years old. Parts are harder to find, and a repair is sometimes a short-term fix. We’ll tell you honestly when that’s the case.",
      },
    ],
    listTitle: "Furnace problems we fix in American Fork",
    listIntro: "These are the calls we get most once the cold sets in. Many are fixed on the first visit.",
    list: [
      { title: "No heat at all", body: "Often a failed ignitor, a dirty flame sensor, or a tripped pressure switch. We test each one rather than guessing." },
      { title: "Short cycling", body: "The furnace starts, runs a few minutes and shuts off. Usually airflow, a flame sensor, or an oversized furnace." },
      { title: "Blowing cold air", body: "The blower runs but the burners don’t light, or they light and then shut down on a safety switch." },
      { title: "Loud or strange noises", body: "Squealing, banging or rattling from the blower motor, inducer motor or burners." },
      { title: "Some rooms won’t warm up", body: "Common in split-levels and two-story homes. We check airflow, ducts and blower speed before blaming the furnace." },
      { title: "Thermostat problems", body: "A thermostat that won’t call for heat, reads the wrong temperature, or lost its settings." },
    ],
    price: {
      title: "Upfront pricing, no surprises",
      body: "A furnace diagnostic is $129. After we find the problem, you get a price for the repair before any work starts, and you decide.",
      points: ["$129 diagnostic", "Price before any work", "Essential Care Plan members save 10% on repairs", "Repairs backed by our Smile Guarantee"],
    },
    decideTitle: "Repair or replace?",
    decide: [
      "If your furnace is under about 15 years old and the repair is reasonable, repairing it usually makes sense. We’ll say so.",
      "If it’s older and the repair is expensive, it’s worth seeing what a new system costs first. American Fork homes are Rocky Mountain Power and Enbridge Gas customers, so a heat pump paired with a new gas furnace gets at least $2,150 in rebates, guaranteed. New furnaces alone start at $3,990, installed in one day.",
    ],
    safety: {
      title: "Smell gas? Leave first, then call.",
      body: "If you smell rotten eggs near your furnace, get everyone outside, don’t flip switches or use the stove, and call Enbridge Gas at 1-800-767-1689 or 911 from outside. Once the gas company says it’s safe, call us for the furnace.",
    },
    faqs: [
      {
        q: "How quickly can you get to my home in American Fork?",
        a: "Our shop is on Automall Drive in American Fork and we’re open 24/7, so a technician is never far away. Call 801-396-0019 or book online any time.",
      },
      {
        q: "How much does furnace repair cost in American Fork?",
        a: "The diagnostic is $129, and you get an upfront price for the repair before any work starts. Common repairs like an ignitor or flame sensor cost far less than major parts like a blower motor. Essential Care Plan members save 10%.",
      },
      {
        q: "Why does my furnace keep shutting off in winter?",
        a: "Most often because of airflow. A clogged filter, especially during winter inversions, makes the furnace overheat and shut off on its safety switch. A dirty flame sensor is the next most common cause. Both are quick fixes.",
      },
      {
        q: "Should I repair or replace my old furnace?",
        a: "Repair it if it’s under about 15 years old and the fix is reasonable. If it’s older and the repair is costly, compare it with a new system: American Fork homes get at least $2,150 in guaranteed rebates on a heat pump paired with a gas furnace.",
      },
      {
        q: "Do you work on all furnace brands?",
        a: "Yes. We repair all major gas and electric furnace brands. We install ACiQ and Amana when a furnace needs replacing.",
      },
    ],
  },

  // ---------------------------------------------------------------- AC REPAIR
  {
    city: "american-fork",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in American Fork, UT, Open 24/7",
    metaDescription:
      "AC repair from our American Fork shop. Open 24/7, a $129 diagnostic and an upfront price before any work. Warm air, leaks or no power, we fix it.",
    h1: "AC repair in American Fork, UT",
    heroSub:
      "When July afternoons hit the 90s, a broken AC can’t wait. We’re based in American Fork and open 24/7, with a $129 diagnostic and a price before any work.",
    heroImg: { src: "/images/ac-repair-techs-overhead.jpg", alt: "Two Eco Home technicians repairing an outdoor air conditioner", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "American Fork summers average in the low 90s in July, and upstairs bedrooms get hotter than that. When your air conditioner stops cooling and you need air conditioning repair fast, our technicians are close by: the shop is on Automall Drive, and we answer calls and online bookings 24/7.",
      "We repair every major AC and heat pump brand. Every visit starts with a full diagnostic, and you approve the price before we start.",
    ],
    factorsTitle: "What’s hard on air conditioners in American Fork",
    factors: [
      {
        title: "Hot, dry afternoons",
        body: "Long runs in July and August heat stress capacitors and contactors, the two parts that fail most often. A weak capacitor is the top reason an AC hums but won’t start.",
      },
      {
        title: "Cottonwood fluff and dust",
        body: "Early summer cottonwood fluff and dust pack into the outdoor coil. A clogged coil can’t release heat, so the system runs hot and cools poorly.",
      },
      {
        title: "Two-story and split-level homes",
        body: "In many American Fork homes, the upstairs runs several degrees warmer. Sometimes that’s an AC problem, and sometimes it’s ducts or a single-speed system that can’t keep up. We check before we sell you anything.",
      },
    ],
    listTitle: "AC problems we fix in American Fork",
    listIntro: "Many of these are fixed in one visit.",
    list: [
      { title: "Blowing warm air", body: "Usually a failed capacitor, contactor or outdoor fan motor, or low refrigerant from a leak." },
      { title: "AC won’t turn on", body: "Tripped breakers, a bad thermostat, a blown fuse at the disconnect, or a float switch tripped by a clogged drain." },
      { title: "Ice on the lines or coil", body: "Low airflow or low refrigerant. We find the cause instead of just thawing it out." },
      { title: "Water around the furnace", body: "A clogged condensate drain or cracked pan. Caught early, it’s a quick fix before it damages floors." },
      { title: "Upstairs too hot", body: "We check airflow, duct sizing and refrigerant charge, and explain your options honestly." },
      { title: "Loud buzzing or clanking", body: "A failing contactor, fan motor or compressor. Buzzing that won’t stop is worth a call right away." },
    ],
    price: {
      title: "A clear price before any work",
      body: "An AC diagnostic is $129. You get an upfront repair price and decide before we start.",
      points: ["$129 diagnostic", "Upfront repair price", "Essential Care Plan members save 10%", "Repairs backed by our Smile Guarantee"],
    },
    decideTitle: "When it’s time to replace",
    decide: [
      "If your AC is under about 12 years old and the repair is reasonable, fix it.",
      "If it’s older, uses R-22 refrigerant, or needs a compressor, compare the repair with a heat pump. A heat pump cools like an AC and also heats most of the winter, and American Fork homes get $1,450 back from Rocky Mountain Power, guaranteed, on every heat pump we install.",
    ],
    faqs: [
      {
        q: "How quickly can you fix my AC in American Fork?",
        a: "We’re based in American Fork and open 24/7, and many AC repairs are done in one visit. Call 801-396-0019 or book online any time.",
      },
      {
        q: "How much does AC repair cost in American Fork?",
        a: "The diagnostic is $129, and you see the repair price before any work. A capacitor or contactor costs far less than a refrigerant leak repair or compressor. Essential Care Plan members save 10%.",
      },
      {
        q: "Why is my AC running but not cooling?",
        a: "The most common causes are a failed capacitor or fan motor, a dirty outdoor coil, or low refrigerant from a leak. Turn the system off if you see ice, and call us so the compressor isn’t damaged.",
      },
      {
        q: "Why is my upstairs so much hotter than downstairs?",
        a: "Heat rises, and a single-speed AC shuts off before it mixes the air between floors. Leaky or undersized ducts make it worse. A variable-speed heat pump runs longer at lower speed, which evens out the temperature.",
      },
      {
        q: "Should I repair my old AC or replace it with a heat pump?",
        a: "Repair it if it’s under about 12 years old and the fix is reasonable. If it’s older or needs a compressor, a heat pump is often the better buy: American Fork homes get $1,450 from Rocky Mountain Power, guaranteed.",
      },
    ],
  },

  // ---------------------------------------------------------------- HEAT PUMP INSTALLATION
  {
    city: "american-fork",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in American Fork, UT",
    metaDescription:
      "Heat pumps paired with a gas furnace for American Fork homes: $2,150+ in rebates guaranteed, installed in one day, permit pulled. Get instant pricing.",
    h1: "Heat pump installation in American Fork, UT",
    heroSub:
      "A heat pump paired with a gas furnace cools your American Fork home all summer and handles most of the winter heating. At least $2,150 in rebates, guaranteed, and installed in one day.",
    heroImg: { src: "/images/american-fork-heat-pump-install.jpg", alt: "Eco Home technician commissioning a variable-speed heat pump at an American Fork home", pos: "50% 60%" },
    primaryCta: "INSTANT",
    intro: [
      "Most American Fork homes have a gas furnace and a central AC. When the AC wears out, replacing it with an inverter heat pump is the smartest upgrade we know of: it cools like an AC, heats your home most of the winter for less, and your furnace stays as backup for the coldest nights.",
      "We install ACiQ and Amana inverter heat pumps from our shop right here on Automall Drive. Every install includes the permit, a load calculation for your home, haul-away of the old equipment, and the rebate paperwork.",
    ],
    factorsTitle: "Why heat pumps fit American Fork",
    factors: [
      {
        title: "Built for our winters, with backup",
        body: "January nights in American Fork average around 15°F. An inverter heat pump heats efficiently through most of the winter, and the gas furnace takes over on the coldest nights. You’re never short on heat.",
      },
      {
        title: "Both rebates apply here",
        body: "American Fork homes get electricity from Rocky Mountain Power and gas from Enbridge Gas, so a heat pump paired with a gas furnace qualifies for both programs: $1,450 from Wattsmart plus $700 to $1,000 from ThermWise, guaranteed.",
      },
      {
        title: "Sized for 4,600 feet",
        body: "Thinner air at our elevation changes how equipment performs. We run a load calculation for your home instead of matching the old unit’s size, so the system isn’t too big or too small.",
      },
    ],
    listTitle: "What’s included in every American Fork install",
    listIntro: "One price, one day, nothing left for you to handle.",
    list: [
      { title: "Load calculation", body: "Sized to your home’s square footage, insulation, windows and elevation." },
      { title: "Permit and inspection", body: "Pulled through American Fork City’s Building Division on every job. Not every HVAC company does this." },
      { title: "One-day install", body: "Most heat pump installs are done in one day, so you’re comfortable that night." },
      { title: "Rebate paperwork", body: "We file your Wattsmart and ThermWise rebates for you." },
      { title: "Haul-away and cleanup", body: "Your old AC leaves with us, and we leave your home cleaner than we found it." },
      { title: "Smile Guarantee", body: "One year on our workmanship. If anything isn’t right, we fix it free." },
    ],
    price: {
      title: "What it costs",
      body: "Heat pump and gas furnace systems start at $9,990 after incentives. Your exact price depends on your home’s size and the efficiency level you choose.",
      points: ["From $9,990 after incentives", "$2,150 to $2,450 in rebates, guaranteed", "$0 down and 0% interest for 12 months available", "See your price in two minutes with instant pricing"],
    },
    job: {
      customer: "Trent B.",
      title: "Trent’s AC couldn’t cool every room. A variable-speed heat pump fixed it.",
      problem: "Trent’s air conditioner ran, but it wasn’t cooling all the rooms in his American Fork home properly. Some rooms stayed comfortable while others never cooled down.",
      solution: "We recommended a variable-speed heat pump paired with a gas furnace. It adjusts its speed to what the house needs, so it runs longer and steadier and moves air to every room. The furnace takes over the heating on the coldest nights.",
      result: "Every room in Trent’s home now heats and cools evenly, and efficiently.",
    },
    faqs: [
      {
        q: "Does a heat pump work in American Fork winters?",
        a: "Yes, when it’s paired with a gas furnace. January nights in American Fork average around 15°F. The heat pump heats efficiently most of the winter, and the furnace takes over on the coldest nights.",
      },
      {
        q: "How much does a heat pump cost in American Fork?",
        a: "Heat pump and gas furnace systems start at $9,990 after incentives. American Fork homes get at least $2,150 in guaranteed rebates. Use our instant pricing tool for a price sized to your home in about two minutes.",
      },
      {
        q: "What rebates can I get on a heat pump in American Fork?",
        a: "$1,450 from Rocky Mountain Power Wattsmart on every heat pump we install, plus $700 with an 80% furnace or $1,000 with a 96%+ furnace from Enbridge Gas ThermWise. That’s $2,150 to $2,450, guaranteed, and we file the paperwork.",
      },
      {
        q: "Can I keep my gas furnace?",
        a: "Often, yes. If your furnace is in good shape, we can usually pair a new heat pump with it. If it’s near the end of its life, replacing both at once can get you the higher Enbridge rebate with a 96%+ furnace.",
      },
      {
        q: "Do I need a permit for a heat pump in American Fork?",
        a: "Yes. Heat pump installs need a permit and inspection through American Fork City’s Building Division. We pull it on every job, and it’s included in your price.",
      },
    ],
  },
];

export const getCityService = (city: string, slug: string) => cityServices.find((s) => s.city === city && s.slug === slug);
export const servicesForCity = (city: string) => cityServices.filter((s) => s.city === city);
