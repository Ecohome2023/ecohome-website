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
  offer: { price: number; description: string }; // the starting price shown on the page, for search and AI tools
  updated: string; // YYYY-MM-DD, change when the page is meaningfully edited
  job?: { customer: string; title: string; problem: string; solution: string; result: string; img?: string; alt?: string; before?: { src: string; alt: string }; after?: { src: string; alt: string } };
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
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-10-16",
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
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-10-16",
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
    heroImg: { src: "/images/heat-pump-install-vacuum.jpg", alt: "New inverter heat pump on its pad with gauges and a vacuum pump connected during an Eco Home installation", pos: "50% 55%" },
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
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-10-16",
    job: {
      customer: "Trent B.",
      title: "Trent’s AC couldn’t cool every room. A variable-speed heat pump fixed it.",
      problem: "Trent’s air conditioner ran, but it wasn’t cooling all the rooms in his American Fork home properly. Some rooms stayed comfortable while others never cooled down.",
      solution: "We recommended a variable-speed heat pump paired with a gas furnace. It adjusts its speed to what the house needs, so it runs longer and steadier and moves air to every room. The furnace takes over the heating on the coldest nights.",
      result: "Every room in Trent’s home now heats and cools evenly, and efficiently.",
      before: { src: "/images/old-ac-unit.jpg", alt: "Trent B.’s old air conditioner at his American Fork home before the upgrade" },
      after: { src: "/images/american-fork-heat-pump-install.jpg", alt: "Eco Home technician checking the new variable-speed heat pump at Trent B.’s home in American Fork" },
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
  // ================================================================ OREM
  // ---------------------------------------------------------------- FURNACE REPAIR
  {
    city: "orem",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Orem, UT, Open 24/7",
    metaDescription:
      "Orem furnace repair, open 24/7: a $129 diagnostic and the repair price before any work. No heat, short cycling, banging at startup. Call 801-396-0019.",
    h1: "Furnace repair in Orem, UT",
    heroSub:
      "Furnace out on a 20° night in Orem? We’re open 24/7 and a short drive up I-15. Start with a $129 diagnostic, and see the repair price before any work.",
    heroImg: { src: "/images/furnace-install.jpg", alt: "Eco Home technician working inside an open gas furnace", pos: "60% 50%" },
    primaryCta: "BOOK",
    intro: [
      "Orem has a lot of furnaces that have been running for decades. Much of the city was built between the 1950s and the 1980s, and a furnace that has carried a house through 20 Utah winters tends to fail in familiar ways.",
      "We service every major furnace brand. Each visit begins with a complete diagnostic, so we fix what’s actually wrong, and you approve the price before we pick up a tool.",
    ],
    factorsTitle: "What wears out Orem furnaces",
    factors: [
      {
        title: "Cold starts, all winter",
        body: "January nights in Orem average near 20°F. Every start heats and cools the ignitor, inducer motor and heat exchanger, and after enough winters those parts crack or wear out.",
      },
      {
        title: "Inversion season",
        body: "When winter inversions settle over Utah Valley, filters load up fast. A choked filter starves the furnace of air, so it overheats and shuts down on its limit switch. Check the filter before you call; it’s an easy fix.",
      },
      {
        title: "Original ductwork",
        body: "Older Orem homes often still have their original ducts. Leaks and undersized returns make a furnace run hotter and work harder, which shortens its life. We look at airflow before blaming the furnace.",
      },
    ],
    listTitle: "Furnace repairs we handle in Orem",
    listIntro: "Call or book any time. Plenty of these are fixed on the first visit.",
    list: [
      { title: "Furnace won’t start", body: "We test the ignitor, flame sensor, pressure switch and control board one by one, so you only pay for the part that failed." },
      { title: "A bang when it lights", body: "Delayed ignition, often from dirty burners. It’s hard on the heat exchanger, so don’t put it off." },
      { title: "Turns on and off every few minutes", body: "Short cycling usually points to a dirty flame sensor, a clogged filter or a furnace that’s overheating." },
      { title: "Cold basement, warm main floor", body: "Often an airflow or duct problem rather than a bad furnace. We check before recommending anything." },
      { title: "A smell that won’t go away", body: "A little dust burning off at the first cold snap is normal. A smell that lingers, or smells electrical, needs a look." },
      { title: "Blower that never stops", body: "A stuck relay, a thermostat fan set to ON instead of AUTO, or a control board fault." },
    ],
    price: {
      title: "Know the price first",
      body: "Every furnace repair starts with a $129 diagnostic. Then you get an upfront price for the fix and decide whether to go ahead.",
      points: ["$129 diagnostic", "Upfront repair price", "10% off repairs for Essential Care Plan members", "Backed by our Smile Guarantee"],
    },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-10-16",
    decideTitle: "Fix it or replace it?",
    decide: [
      "Under about 15 years old with a reasonable repair bill? Fix it, and we’ll tell you so.",
      "Past 20 years, banging at startup, or facing a big repair like an inducer motor or heat exchanger? Get a replacement price before you spend on it. Orem homes are on Rocky Mountain Power and Enbridge Gas, so a heat pump paired with a new gas furnace gets at least $2,150 in rebates, guaranteed. A furnace on its own starts at $3,990, installed in one day.",
    ],
    safety: {
      title: "Smell gas? Get out, then call.",
      body: "If you smell rotten eggs, take everyone outside without flipping switches or lighting anything. Once you’re outside, call Enbridge Gas at 1-800-767-1689 or 911. When the gas company says the home is safe, call us to repair the furnace.",
    },
    faqs: [
      {
        q: "Do you offer emergency furnace repair in Orem?",
        a: "Yes. We’re open 24/7, including nights, weekends and holidays. Call 801-396-0019 or book online and we’ll get a technician headed to your Orem home.",
      },
      {
        q: "What does furnace repair cost in Orem?",
        a: "It starts with a $129 diagnostic. You get the repair price before any work, and small parts like a flame sensor or ignitor cost much less than a blower or inducer motor. Essential Care Plan members save 10%.",
      },
      {
        q: "Why does my furnace bang when it turns on?",
        a: "Usually delayed ignition: gas builds up for a moment before it lights, often because the burners are dirty. It strains the heat exchanger, so have it checked soon.",
      },
      {
        q: "Why is my basement cold when the furnace is running?",
        a: "Cool air settles low, and a single-speed furnace shuts off before it mixes the air between floors. Duct problems make it worse. We check airflow first; a variable-speed system often solves it for good.",
      },
      {
        q: "Is a 20-year-old furnace worth repairing?",
        a: "For a small part, often yes. For a major repair, compare it with a new system first: Orem homes get at least $2,150 in guaranteed rebates on a heat pump paired with a gas furnace.",
      },
    ],
  },

  // ---------------------------------------------------------------- AC REPAIR
  {
    city: "orem",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Orem, UT, Open 24/7",
    metaDescription:
      "Orem AC repair, open 24/7. A $129 diagnostic and an upfront repair price. Warm air, frozen lines or a unit that won’t start: we fix all major brands.",
    h1: "AC repair in Orem, UT",
    heroSub:
      "Orem afternoons average in the low 90s by July. If your AC quits, we’re open 24/7 with a $129 diagnostic and a repair price before any work.",
    heroImg: { src: "/images/tech-heat-pump-install.jpg", alt: "Eco Home technician connecting gauges to an outdoor unit beside a basement window", pos: "45% 50%" },
    primaryCta: "BOOK",
    intro: [
      "When an older AC in Orem gives out, it’s usually in the middle of a hot stretch, after weeks of running most of the afternoon. That’s when you need air conditioning repair you can count on, and we take calls and online bookings around the clock.",
      "We repair all major AC and heat pump brands. Your technician finds the cause, shows you what failed and gives you the price before starting.",
    ],
    factorsTitle: "Why Orem air conditioners give out",
    factors: [
      {
        title: "Long afternoon run times",
        body: "July highs in the low 90s keep an AC running for hours. The capacitor and contactor take the most wear, and a weak capacitor is why many units hum but never start.",
      },
      {
        title: "West-facing rooms",
        body: "Bedrooms on the west side of a house take the full afternoon sun. An older single-speed AC can run all afternoon and still not cool them down.",
      },
      {
        title: "Systems near the end of their life",
        body: "Older Orem homes often have an AC that’s 15 to 20 years old. Many of those run on R-22 refrigerant, which is no longer produced, so recharging after a leak gets expensive.",
      },
    ],
    listTitle: "AC repairs we make in Orem",
    listIntro: "Most are handled in a single visit.",
    list: [
      { title: "Running but not cooling", body: "A bad capacitor, a failed outdoor fan motor, a dirty coil or a refrigerant leak. We test before replacing anything." },
      { title: "Won’t turn on at all", body: "Check the breaker first. If that’s fine, it may be the thermostat, the disconnect fuse or a drain safety switch." },
      { title: "Frozen lines", body: "Ice on the copper lines means low airflow or low refrigerant. Shut the system off and call so the compressor isn’t damaged." },
      { title: "Water leaking indoors", body: "A plugged condensate drain or cracked drain pan, usually a quick repair when it’s caught early." },
      { title: "Rooms that never cool", body: "We look at airflow, ducts and refrigerant charge, then explain your options honestly." },
      { title: "Humming, buzzing or rattling", body: "Often a contactor, fan motor or loose panel. A loud buzz that doesn’t stop needs attention soon." },
    ],
    price: {
      title: "Upfront pricing on every repair",
      body: "Every AC repair starts with a $129 diagnostic. You get the price for the fix before we begin.",
      points: ["$129 diagnostic", "Price before work starts", "Essential Care Plan members save 10%", "Smile Guarantee on every repair"],
    },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-10-16",
    decideTitle: "Repair or upgrade?",
    decide: [
      "An AC under about 12 years old with a reasonable repair is usually worth fixing.",
      "If yours is older, runs on R-22 or needs a new compressor, look at a heat pump before you pay for the repair. It cools like an AC, heats most of the winter, and Orem homes get $1,450 back from Rocky Mountain Power, guaranteed, on every heat pump we install.",
    ],
    faqs: [
      {
        q: "How fast can you get to my home in Orem?",
        a: "We’re open 24/7 and a short drive up I-15 in American Fork. Call 801-396-0019 or book online any time, and many AC repairs are finished in one visit.",
      },
      {
        q: "How much is AC repair in Orem?",
        a: "A $129 diagnostic, then an upfront price for the repair. A capacitor or contactor costs far less than fixing a refrigerant leak or replacing a compressor. Essential Care Plan members save 10%.",
      },
      {
        q: "Why won’t my AC cool the bedrooms on the west side?",
        a: "Those rooms take the hottest afternoon sun. An older single-speed AC often can’t keep up, and undersized ducts make it worse. A variable-speed heat pump runs longer at lower speed and moves steadier air to those rooms.",
      },
      {
        q: "My AC uses R-22. Can you still repair it?",
        a: "Yes, but R-22 is no longer produced, so the refrigerant is expensive. If yours needs a recharge or a big repair, a heat pump is usually the better buy, especially with the $1,450 Rocky Mountain Power rebate Orem homes get.",
      },
      {
        q: "Do you repair heat pumps too?",
        a: "Yes. We repair heat pumps and central air conditioners from all major brands, and we install ACiQ and Amana when it’s time to replace.",
      },
    ],
  },

  // ---------------------------------------------------------------- HEAT PUMP INSTALLATION
  {
    city: "orem",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Orem, UT",
    metaDescription:
      "Heat pump and gas furnace systems for Orem homes from $9,990 after incentives. $2,150+ in rebates guaranteed, permit pulled, installed in one day.",
    h1: "Heat pump installation in Orem, UT",
    heroSub:
      "A variable-speed heat pump paired with a gas furnace cools your Orem home quietly in summer and picks the cheaper heat source all winter. At least $2,150 in rebates, guaranteed.",
    heroImg: { src: "/images/tech-leveling-heat-pump.jpg", alt: "Eco Home technician setting a new heat pump on its pad next to a brick home", pos: "40% 50%" },
    primaryCta: "INSTANT",
    intro: [
      "For most Orem homes, the best system is dual fuel: a variable-speed heat pump paired with a gas furnace. The heat pump does the cooling and handles mild winter days, and the furnace takes over when it gets cold. The system decides which one is cheaper to run, so you don’t have to.",
      "We’ve helped more than 2,000 Utah homeowners with their heating and cooling, and older Orem homes like Charles’s are some of the best candidates for dual fuel. We install ACiQ and Amana inverter heat pumps across Orem, and every job includes a load calculation, the city permit, removal of the old equipment and the rebate paperwork.",
    ],
    factorsTitle: "Why dual fuel works in Orem",
    factors: [
      {
        title: "Mild days on the heat pump, cold nights on gas",
        body: "Orem averages lows near 20°F in January, but plenty of winter days are milder than that. The heat pump heats efficiently on those days, and the gas furnace covers the coldest stretches.",
      },
      {
        title: "Two utilities, two rebates",
        body: "Orem homes are on Rocky Mountain Power and Enbridge Gas, so dual fuel qualifies for both rebate programs: $1,450 from Wattsmart and $700 to $1,000 from ThermWise, guaranteed.",
      },
      {
        title: "Made for older Orem layouts",
        body: "A variable-speed system runs longer at low speed, which helps homes with finished basements and split levels even out the temperature between floors. We inspect the ducts first and tell you if they need sealing.",
      },
    ],
    listTitle: "Every Orem install includes",
    listIntro: "One price covers all of it.",
    list: [
      { title: "A load calculation", body: "We size the system to your home’s square footage, insulation, windows and sun exposure, not the old unit’s label." },
      { title: "The Orem permit", body: "Pulled through the city’s Building Safety Division and inspected. Not every HVAC company pulls permits. We do on every job." },
      { title: "A duct check", body: "We look for leaks and undersized returns and recommend fixes only when they make a real difference." },
      { title: "A one-day install", body: "Most systems are finished in a single day." },
      { title: "Rebate filing", body: "We submit your Wattsmart and ThermWise rebates for you." },
      { title: "Haul-away and the Smile Guarantee", body: "We take the old equipment, clean up, and back our workmanship with a one-year Smile Guarantee." },
    ],
    price: {
      title: "What dual fuel costs in Orem",
      body: "Heat pump and gas furnace systems start at $9,990 after incentives. Your price depends on your home’s size and the efficiency you choose.",
      points: ["From $9,990 after incentives", "$2,150 to $2,450 in guaranteed rebates", "0% interest for 12 months available", "Get your price online in about two minutes"],
    },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-10-16",
    job: {
      customer: "Charles H.",
      title: "Charles’s furnace was older than his kids. A dual-fuel system replaced it and the old AC.",
      problem: "Charles’s furnace was more than 20 years old. It came on with a loud bang and rattled the ductwork. All winter the basement felt cold while the main floor ran warm. Summer was worse: the aging AC ran nearly all afternoon, the bedrooms on the west side never cooled off, and the electric bills kept going up.",
      solution: "We replaced the whole system with dual fuel: a variable-speed heat pump paired with a new gas furnace. Instead of blasting on and off, it runs longer at low speed, so air moves evenly between the basement and the main floor. It cools more efficiently than the old AC, and in winter it uses the heat pump on mild days and switches to gas when temperatures drop.",
      result: "No more bang at startup, a quiet hum outside, and even temperatures from the basement to the west-side bedrooms.",
    },
    faqs: [
      {
        q: "Do I still need a gas furnace if I get a heat pump?",
        a: "In a dual-fuel system, the furnace is the backup for the coldest days. The system switches between the two automatically, using whichever is cheaper to run.",
      },
      {
        q: "Will a heat pump work in an older Orem home with original ductwork?",
        a: "Usually, yes. We inspect the ducts during the estimate. Sometimes we recommend sealing or small changes so a variable-speed system can do its best work.",
      },
      {
        q: "How much does a heat pump cost in Orem?",
        a: "Heat pump and gas furnace systems start at $9,990 after incentives, and 0% interest for 12 months is available. Get a price sized to your home with our instant pricing tool in about two minutes.",
      },
      {
        q: "What rebates do Orem homes get on a heat pump?",
        a: "$1,450 from Rocky Mountain Power Wattsmart on every heat pump we install, plus $700 with an 80% furnace or $1,000 with a 96%+ furnace from Enbridge Gas ThermWise. That’s $2,150 to $2,450, guaranteed, and we file it for you.",
      },
      {
        q: "Do I need a permit for a heat pump in Orem?",
        a: "Yes. Orem requires a permit for heating and air conditioning work, issued by the city’s Building Safety Division. We pull it on every job, and it’s included in your price.",
      },
    ],
  },
];

export const getCityService = (city: string, slug: string) => cityServices.find((s) => s.city === city && s.slug === slug);
export const servicesForCity = (city: string) => cityServices.filter((s) => s.city === city);
