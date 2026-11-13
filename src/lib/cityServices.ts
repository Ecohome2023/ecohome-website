// Service-in-a-city pages at /service-area/[city]/[service]. Only for cities and
// services with real demand and something local to say (see the SEO plan).
// Every page's writing is its own: never copy a block from another page.

type Item = { title: string; body: string };

export type CityService = {
  city: string; // slug in lib/cities or lib/counties
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
  offer?: { price: number; description: string }; // the starting price shown on the page, for search and AI tools; leave off when the city’s price differs
  updated: string; // YYYY-MM-DD, change when the page is meaningfully edited
  job?: { customer: string; title: string; problem: string; solution: string; result: string; img?: string; alt?: string; before?: { src: string; alt: string }; after?: { src: string; alt: string }; stats?: { value: string; label: string }[] };
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
    heroImg: { src: "/images/american-fork-furnace-repair-lennox.jpg", alt: "Lennox gas furnace opened up for an Eco Home repair in an American Fork basement", pos: "50% 45%" },
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
    heroImg: { src: "/images/old-ac-unit.jpg", alt: "Older outdoor AC unit beside a home, ready for service", pos: "50% 50%" },
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
  // ================================================================ LEHI
  // Lehi runs its own city power, so no Rocky Mountain Power rebate. Eco Home
  // matches the $1,450 with its own credit (owner's call, 2026-10-16).
  // ---------------------------------------------------------------- FURNACE REPAIR
  {
    city: "lehi",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Lehi, UT, Open 24/7",
    metaDescription:
      "Lehi furnace repair from our shop next door in American Fork. Open 24/7, a $129 diagnostic and the repair price before any work. Call 801-396-0019.",
    h1: "Furnace repair in Lehi, UT",
    heroSub:
      "Furnace quit on a January night in Lehi? Our shop is right next door in American Fork, and we’re open 24/7. A $129 diagnostic, and the repair price before any work.",
    heroImg: { src: "/images/aciq-furnace-basement-install.jpg", alt: "Gas furnace installed in a basement utility room", pos: "50% 40%" },
    primaryCta: "BOOK",
    intro: [
      "Thousands of Lehi homes went up in the 2000s, and the furnaces that came with them are now about 20 years old. That’s the age when ignitors, inducer motors and control boards start to fail, usually on the coldest nights of the year.",
      "We repair every major furnace brand, including the builder-grade models that came with many newer homes. Your technician finds the real cause and gives you the price before any work starts.",
    ],
    factorsTitle: "What Lehi furnaces are up against",
    factors: [
      {
        title: "Mid-teen January nights",
        body: "January nights in Lehi average in the mid-teens. A furnace runs long and starts often in that cold, which is hardest on the ignitor, inducer motor and blower.",
      },
      {
        title: "Original equipment turning 20",
        body: "Many Lehi homes still have the furnace they were built with. At around 20 years, parts get harder to find and repairs add up, so we’ll tell you honestly when a repair is worth it.",
      },
      {
        title: "Three levels, one furnace",
        body: "Bigger homes with a basement, main floor and loft ask a lot of one furnace. Uneven heat between floors is often an airflow issue, and we check that before replacing parts.",
      },
    ],
    listTitle: "Furnace repairs we make in Lehi",
    listIntro: "Most are fixed on the first visit.",
    list: [
      { title: "No heat", body: "We test the ignitor, flame sensor, pressure switch and board, then replace only the part that failed." },
      { title: "Loud startups", body: "A roar or boom at startup can mean delayed ignition or a failing inducer motor. Both are worth checking before they cause bigger damage." },
      { title: "Short cycling", body: "It runs a few minutes and shuts off. Common causes are a dirty flame sensor, a clogged filter or an oversized furnace." },
      { title: "Main floor hot, basement cold", body: "Usually airflow or ducts, not the furnace itself. We’ll show you what we find." },
      { title: "Cold air from the vents", body: "The blower runs but the burners don’t stay lit, often a safety switch doing its job. We find out why." },
      { title: "Thermostat trouble", body: "A smart thermostat with the wrong settings or wiring can keep a good furnace from running right." },
    ],
    price: {
      title: "The price before the work",
      body: "A furnace diagnostic is $129. You see the cost of the repair up front and decide before we begin.",
      points: ["$129 diagnostic", "Price up front", "Essential Care Plan members save 10%", "Covered by our Smile Guarantee"],
    },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-10-16",
    decideTitle: "Is it time to replace?",
    decide: [
      "If your furnace is younger than about 15 years and the repair is reasonable, repair it.",
      "If it’s the original furnace from a 2000s build and needs a major part, price a replacement first. In Lehi, a heat pump paired with a new gas furnace gets at least $2,150 in rebates, guaranteed: our $1,450 match for the Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas. A furnace on its own starts at $3,990, installed in one day.",
    ],
    safety: {
      title: "Gas smell? Leave the house first.",
      body: "If you notice a rotten-egg smell, get everyone out without touching light switches or appliances. Once you’re outside, call Enbridge Gas at 1-800-767-1689 or 911. Call us for the furnace after the gas company clears the home.",
    },
    faqs: [
      {
        q: "How soon can you get to my Lehi home?",
        a: "Our shop is right next door in American Fork, and we’re open 24/7. Call 801-396-0019 or book online any time.",
      },
      {
        q: "How much does furnace repair cost in Lehi?",
        a: "$129 for the diagnostic, then an upfront price for the repair. A flame sensor or ignitor is a small repair; a blower or inducer motor costs more. Essential Care Plan members save 10%.",
      },
      {
        q: "Why does my furnace roar when it starts?",
        a: "Often the inducer motor is wearing out, or the burners are lighting late. Both get worse over time, so have it checked before it stops heating.",
      },
      {
        q: "My Lehi home is about 20 years old. Should I repair the original furnace?",
        a: "For a small part, usually yes. For a big repair, compare it with a new system first. In Lehi, a heat pump paired with a new gas furnace gets at least $2,150 in rebates, including our $1,450 match.",
      },
      {
        q: "Do you repair builder-grade furnaces?",
        a: "Yes. We repair all major brands, including the builder-grade models that came with many newer homes.",
      },
    ],
  },

  // ---------------------------------------------------------------- AC REPAIR
  {
    city: "lehi",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Lehi, UT, Open 24/7",
    metaDescription:
      "Lehi AC repair from right next door in American Fork. Open 24/7, a $129 diagnostic and an upfront repair price. Hot upstairs, warm air, no power.",
    h1: "AC repair in Lehi, UT",
    heroSub:
      "Upstairs bedrooms baking by mid-afternoon? We’re right next door in American Fork and open 24/7, with a $129 diagnostic and a price before any work.",
    heroImg: { src: "/images/tech-eco-home-shirt-heat-pump.jpg", alt: "Eco Home technician leveling an outdoor unit beside a brick home", pos: "45% 50%" },
    primaryCta: "BOOK",
    intro: [
      "Lehi’s two-story homes and lofts take the brunt of summer. July afternoons average around 90°F, and heat rises, so the upstairs is usually the first place an aging AC falls behind. When you need air conditioning repair, we take calls and online bookings 24/7.",
      "We repair every major AC and heat pump brand. You get a full diagnostic, a clear explanation of what failed and the price before we start.",
    ],
    factorsTitle: "Why Lehi air conditioners struggle",
    factors: [
      {
        title: "Hot upstairs and lofts",
        body: "In a two-story home, the upstairs can run several degrees warmer than the main floor. A single-speed AC cycles off before that air mixes, so the bedrooms never catch up.",
      },
      {
        title: "Original equipment from the boom",
        body: "Lehi more than doubled in size between 2000 and 2010, and many of those homes still have their first AC. Capacitors, contactors and fan motors wear out with age and heat.",
      },
      {
        title: "Construction dust",
        body: "With new neighborhoods still going up, dust collects on outdoor coils. A dirty coil can’t shed heat, so the system runs longer and cools less.",
      },
    ],
    listTitle: "AC repairs we handle in Lehi",
    listIntro: "Many are done in one visit.",
    list: [
      { title: "Warm air from the vents", body: "Most often a failed capacitor, contactor or outdoor fan motor, or a refrigerant leak." },
      { title: "Upstairs won’t cool", body: "We check airflow, ductwork and refrigerant charge before suggesting anything." },
      { title: "Unit won’t start", body: "A tripped breaker, a blown disconnect fuse, a thermostat problem or a full condensate drain." },
      { title: "Ice on the lines", body: "Low airflow or low refrigerant. Turn it off and call; running it frozen can ruin the compressor." },
      { title: "Water near the furnace", body: "A plugged condensate line or cracked pan, easy to fix if it’s caught early." },
      { title: "Runs nonstop", body: "An AC that never shuts off may be undersized, low on refrigerant or losing cool air through leaky ducts." },
    ],
    price: {
      title: "Price first, then the repair",
      body: "Every AC call starts with a $129 diagnostic. You get the repair price before any work.",
      points: ["$129 diagnostic", "Upfront pricing", "10% off for Essential Care Plan members", "Smile Guarantee on repairs"],
    },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-10-16",
    decideTitle: "Repair it or move to a heat pump?",
    decide: [
      "If the AC is under about 12 years old and the repair is reasonable, repair it.",
      "If it’s the original unit from a 2000s build, or it needs a compressor, compare the repair with a heat pump paired with a gas furnace. It cools the upstairs more evenly and heats most of the winter. Lehi homes don’t get the Rocky Mountain Power rebate, so we match it with a $1,450 credit from Eco Home on every heat pump we install.",
    ],
    faqs: [
      {
        q: "Can you get to my Lehi home quickly?",
        a: "We’re right next door in American Fork and open 24/7. Call 801-396-0019 or book online, and many AC repairs are finished in one visit.",
      },
      {
        q: "How much does AC repair cost in Lehi?",
        a: "A $129 diagnostic, then an upfront price. Replacing a capacitor or contactor costs much less than a leak repair or a compressor. Essential Care Plan members save 10%.",
      },
      {
        q: "Why is my upstairs so hot?",
        a: "Heat rises, and a single-speed AC shuts off before it mixes the air between floors. Undersized return ducts upstairs make it worse. A variable-speed system runs longer and keeps the floors closer in temperature.",
      },
      {
        q: "Is it a problem if my AC runs nonstop?",
        a: "On the hottest afternoons, long run times are normal. If it runs all day and the house still won’t cool, it may be low on refrigerant, losing air through the ducts or too small for the house.",
      },
      {
        q: "Are there rebates on a new AC or heat pump in Lehi?",
        a: "Lehi runs its own city power, so the Rocky Mountain Power rebate doesn’t apply. We match it with a $1,450 credit on every heat pump we install, and Enbridge Gas adds $700 to $1,000 when it’s paired with a gas furnace.",
      },
    ],
  },

  // ---------------------------------------------------------------- HEAT PUMP INSTALLATION
  {
    city: "lehi",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Lehi, UT",
    metaDescription:
      "Heat pump + gas furnace systems for Lehi homes from $9,990 after incentives. We match the $1,450 Rocky Mountain Power rebate. One-day install.",
    h1: "Heat pump installation in Lehi, UT",
    heroSub:
      "A variable-speed heat pump paired with a gas furnace keeps a Lehi home even from the basement to the loft, and picks the cheaper heat source on its own.",
    heroImg: { src: "/images/aciq-system-eco-home-van.jpg", alt: "An ACiQ heat pump and matching gas furnace on pallets in front of an Eco Home van", pos: "58% 60%" },
    primaryCta: "INSTANT",
    intro: [
      "Lehi summers are hot and winter nights get cold. A dual-fuel system handles both: a variable-speed heat pump does the cooling and the mild-weather heating, and a natural gas furnace takes over when it’s colder. The system chooses the cheaper source automatically.",
      "We’ve helped more than 2,000 Utah homeowners with their heating and cooling, including homeowners all over Lehi. Every install includes a load calculation, the Lehi permit, haul-away of the old equipment and the rebate paperwork.",
    ],
    factorsTitle: "Why dual fuel fits Lehi",
    factors: [
      {
        title: "Made for multi-level homes",
        body: "Lehi’s two- and three-level homes need steady air to every floor. Variable-speed equipment runs longer at low speed instead of blasting on and off, which evens out the basement, main floor and loft.",
      },
      {
        title: "We match the rebate Lehi misses",
        body: "Lehi runs its own city power, so the $1,450 Rocky Mountain Power rebate doesn’t apply here. We match it with a $1,450 credit from Eco Home, so Lehi homes aren’t left out. Enbridge Gas adds $700 to $1,000 when the heat pump is paired with a gas furnace: $2,150 to $2,450 in all, guaranteed.",
      },
      {
        title: "Backup for cold nights",
        body: "January nights average in the mid-teens. The heat pump covers most of the heating season efficiently, and the gas furnace handles the coldest nights, so you’re never short on heat.",
      },
    ],
    listTitle: "Included in every Lehi install",
    listIntro: "One price, nothing left for you to chase.",
    list: [
      { title: "Load calculation", body: "Sized to your home’s square footage, levels, windows and insulation, not just the old unit." },
      { title: "Lehi permit and inspection", body: "Pulled through Lehi City’s Building and Inspections department. Not every HVAC company pulls permits. We do on every job." },
      { title: "Airflow to every level", body: "We check ducts and returns so the loft and basement get their share." },
      { title: "Installed in one day", body: "Most installs are completed in one day." },
      { title: "Rebates handled for you", body: "We apply our $1,450 match and file your Enbridge Gas rebate." },
      { title: "Smile Guarantee", body: "A year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: {
      title: "What it costs in Lehi",
      body: "Heat pump and gas furnace systems start at $9,990 after incentives, including our $1,450 match for the Rocky Mountain Power rebate. Your exact price depends on your home’s size and the efficiency you choose.",
      points: ["From $9,990 after incentives", "$1,450 Rocky Mountain Power match from Eco Home", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"],
    },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives including Eco Home's $1,450 match" },
    updated: "2026-10-16",
    job: {
      customer: "Bryce K.",
      title: "Bryce’s upstairs and loft got hot by mid-afternoon. A dual-fuel system evened out every floor.",
      problem: "Bryce’s home was built in the early 2000s, big enough for a growing family, but the original system was showing its age. In summer, the upstairs bedrooms and loft got hot by mid-afternoon while the AC ran almost nonstop, and the electric bills kept climbing. In winter, the furnace, by then more than 20 years old, was loud and inconsistent: the main floor overheated, the basement stayed cold, and every startup could be heard across the house.",
      solution: "We replaced it with a dual-fuel system: a variable-speed heat pump paired with a natural gas furnace. The heat pump handles the cooling and mild-weather heating, gas takes over when it’s colder, and the system decides which is cheaper on its own.",
      result: "Even temperatures from the basement to the loft, more efficient summer cooling, and a quiet system in place of the old furnace’s roar.",
    },
    faqs: [
      {
        q: "Do heat pumps work in Lehi winters?",
        a: "Yes, paired with a gas furnace. January nights in Lehi average in the mid-teens. The heat pump heats efficiently through most of the season, and the furnace takes over on the coldest nights.",
      },
      {
        q: "What rebates can I get on a heat pump in Lehi?",
        a: "Lehi homes are on Lehi City Power, so the Rocky Mountain Power Wattsmart rebate doesn’t apply. We match it with a $1,450 credit from Eco Home. Enbridge Gas ThermWise adds $700 with an 80% furnace or $1,000 with a 96%+ furnace when it’s paired with a heat pump. That’s $2,150 to $2,450, guaranteed, and we handle the paperwork.",
      },
      {
        q: "Will a heat pump cool my upstairs and loft?",
        a: "That’s one of the main reasons Lehi homeowners choose one. A variable-speed heat pump runs longer at lower speed, which keeps air moving to the upper floor instead of cycling off before it gets there. We also check the ducts and returns upstairs.",
      },
      {
        q: "Is financing available?",
        a: "Yes. 0% interest for 12 months is available, along with longer-term financing. We’ll go over the options at your estimate.",
      },
      {
        q: "Do I need a permit for a heat pump in Lehi?",
        a: "Yes. Lehi City Building and Inspections issues the permit and inspects the install. We pull it on every job, and it’s included in your price.",
      },
    ],
  },
  // ================================================================ PROVO
  // ---------------------------------------------------------------- FURNACE REPAIR
  {
    city: "provo",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Provo, UT, Open 24/7",
    metaDescription:
      "Provo furnace repair, open 24/7. A $129 diagnostic and the repair price up front, for older Provo homes and newer ones alike. Call 801-396-0019.",
    h1: "Furnace repair in Provo, UT",
    heroSub:
      "No heat in Provo? We’re open 24/7. Your technician finds the cause, gives you the price, and only then starts the repair. The diagnostic is $129.",
    heroImg: { src: "/images/furnace-tech-uniform.jpg", alt: "Eco Home technician beside a newly installed gas furnace", pos: "50% 35%" },
    primaryCta: "BOOK",
    intro: [
      "Provo has some of the oldest housing in Utah County, and plenty of its furnaces sit in tight basement closets or crawlspaces that were never meant for modern equipment. When one of them stops on a January night, you need someone who has worked on all of it.",
      "We repair every major brand of gas and electric furnace. The repair price comes before any work, and if a repair isn’t worth the money, we say so.",
    ],
    factorsTitle: "What makes Provo furnaces fail",
    factors: [
      {
        title: "Nights in the low 20s",
        body: "January nights in Provo average about 23°F. On those nights a furnace starts dozens of times, and each start wears on the ignitor, the inducer motor and the blower.",
      },
      {
        title: "Tight installs in older homes",
        body: "Furnaces squeezed into small closets or crawlspaces run hotter and are harder to keep clean. Poor clearance and blocked return air cause many of the overheating shutdowns we see near downtown.",
      },
      {
        title: "Rentals and student housing",
        body: "Around BYU, many furnaces serve rental units with filters that don’t get changed on schedule. A clogged filter starves the furnace of air and trips its safety limit.",
      },
    ],
    listTitle: "Common furnace repairs in Provo",
    listIntro: "Your technician carries the common parts, so many repairs are done in one trip.",
    list: [
      { title: "Furnace won’t light", body: "We check the ignitor, flame sensor, gas valve and control board, then replace only what failed." },
      { title: "Shuts off after a few minutes", body: "Usually a dirty flame sensor or an overheating limit switch caused by poor airflow." },
      { title: "Banging or booming at startup", body: "Gas lighting late in the burners. It’s worth fixing before it cracks a heat exchanger." },
      { title: "Blower runs, no warm air", body: "A safety switch has shut the burners off. We find out why instead of just resetting it." },
      { title: "Rental unit with no heat", body: "We work with landlords and tenants and can send the repair price to whoever approves it." },
    ],
    price: {
      title: "Know the price before we start",
      body: "The furnace diagnostic is $129. You get the repair price up front and choose whether to go ahead.",
      points: ["$129 diagnostic", "Repair price before work", "Essential Care Plan members save 10%", "Backed by our Smile Guarantee"],
    },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or replace in Provo?",
    decide: [
      "Repair a furnace younger than about 15 years when the repair is a reasonable fraction of a new one.",
      "For an older furnace that needs a heat exchanger, inducer or control board, look at replacement first. In Provo, a heat pump paired with a new gas furnace qualifies for at least $2,150 in rebates, guaranteed: our $1,450 match, since Provo City Power customers don’t get the Rocky Mountain Power rebate, plus $700 to $1,000 from Enbridge Gas. A furnace alone starts at $3,990, installed in one day.",
    ],
    safety: {
      title: "Smell gas? Get outside first.",
      body: "If you smell rotten eggs, take everyone outside and don’t flip switches or use your phone inside. From outside, call Enbridge Gas at 1-800-767-1689 or 911. Once the gas company says the home is safe, call us about the furnace.",
    },
    faqs: [
      {
        q: "Are you open nights and weekends for Provo furnace repair?",
        a: "Yes, we’re open 24/7. Call 801-396-0019 or book online any time.",
      },
      {
        q: "What does furnace repair cost in Provo?",
        a: "The diagnostic is $129, and you get the repair price before any work. Replacing a flame sensor is a small job; an inducer or blower motor costs more. Essential Care Plan members save 10%.",
      },
      {
        q: "I rent my Provo home. Can you work with my landlord?",
        a: "Yes. We can diagnose the problem and send the repair price to your landlord or property manager for approval.",
      },
      {
        q: "Why does my furnace keep shutting off?",
        a: "The most common causes are a dirty flame sensor, a clogged filter or blocked return air, which make the furnace overheat and trip its safety switch. Change the filter first; if it still shuts off, call us.",
      },
      {
        q: "My furnace is in a tiny closet. Can you still service it?",
        a: "Yes. Many older Provo homes have furnaces in tight spaces. We’ll also check that it has enough clearance and return air, since that affects how long it lasts.",
      },
    ],
  },

  // ---------------------------------------------------------------- AC REPAIR
  {
    city: "provo",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Provo, UT, Open 24/7",
    metaDescription:
      "Provo AC repair, open 24/7: warm air, a hot upstairs or a unit that won’t start. $129 diagnostic and the repair price before any work.",
    h1: "AC repair in Provo, UT",
    heroSub:
      "July afternoons in Provo average about 95°F. If your AC is losing that fight, we’re open 24/7, with a $129 diagnostic and the price before any repair.",
    heroImg: { src: "/images/heat-pump-install-lawn.jpg", alt: "Outdoor unit on a pad beside a lawn after an Eco Home service call", pos: "50% 55%" },
    primaryCta: "BOOK",
    intro: [
      "Provo’s July afternoons average about 95°F at the BYU weather station, and an aging air conditioner shows it fast: warm air from the vents, an upstairs that never cools, or an outdoor unit that hums and won’t start.",
      "We repair all major AC and heat pump brands. You’ll hear what failed in plain terms and see the repair price before we do anything.",
    ],
    factorsTitle: "Why Provo ACs give out in July",
    factors: [
      {
        title: "Mid-90s afternoons",
        body: "When it’s 95°F outside, an AC runs most of the afternoon. Heat is hard on capacitors, contactors and fan motors, the parts that fail most often.",
      },
      {
        title: "AC added to homes built without it",
        body: "Many older Provo homes got central air decades after they were built, using ducts sized for heat. Upstairs rooms in those homes are often starved for cool air.",
      },
      {
        title: "Cottonwood fluff and dirt",
        body: "Outdoor coils collect fluff, grass clippings and dust. A coil that can’t shed heat makes the compressor work harder and the house warmer.",
      },
    ],
    listTitle: "AC repairs we make in Provo",
    listIntro: "Most are diagnosed and repaired in the same visit.",
    list: [
      { title: "Blowing warm air", body: "Often a failed capacitor or contactor; sometimes a refrigerant leak we track down and repair." },
      { title: "Outdoor unit hums but won’t run", body: "Classic capacitor failure. Shut it off so the compressor doesn’t overheat, then call." },
      { title: "Upstairs stays hot", body: "We measure airflow and refrigerant charge and check the upstairs returns." },
      { title: "Frozen refrigerant line", body: "Low airflow or low charge. Turn the AC off and let it thaw before we test it." },
      { title: "Water around the furnace", body: "A clogged condensate drain or cracked pan, usually a quick fix." },
    ],
    price: {
      title: "You approve the price first",
      body: "AC diagnostics are $129. Your technician prices the repair before starting it.",
      points: ["$129 diagnostic", "Upfront repair price", "10% off for Essential Care Plan members", "Smile Guarantee on our work"],
    },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Fix the AC or upgrade?",
    decide: [
      "An AC under about 12 years old with a reasonable repair is usually worth fixing.",
      "If it’s older, needs a compressor or has a refrigerant leak, compare the repair with a heat pump paired with a gas furnace. Provo City Power customers don’t get the Rocky Mountain Power rebate, so we match it with a $1,450 credit from Eco Home on every heat pump we install.",
    ],
    faqs: [
      {
        q: "How fast can you fix my AC in Provo?",
        a: "We’re open 24/7, and most AC repairs are finished in one visit. Call 801-396-0019 or book online.",
      },
      {
        q: "How much does AC repair cost in Provo?",
        a: "The diagnostic is $129, then you get an upfront price. A capacitor or contactor costs far less than a leak repair or a new compressor. Essential Care Plan members save 10%.",
      },
      {
        q: "Why won’t my older Provo home cool upstairs?",
        a: "If central air was added after the house was built, the upstairs ducts and returns are often too small. We measure airflow before recommending anything, so you don’t pay for equipment that can’t fix the problem.",
      },
      {
        q: "My outdoor unit is humming but the fan isn’t spinning. What should I do?",
        a: "Turn the AC off at the thermostat. That’s usually a failed capacitor, and running it that way can overheat the compressor. Then give us a call.",
      },
      {
        q: "Is there a rebate if I replace my AC with a heat pump in Provo?",
        a: "Yes. We match the $1,450 Rocky Mountain Power rebate with our own credit, since Provo is on city power, and Enbridge Gas adds $700 to $1,000 when the heat pump is paired with a gas furnace.",
      },
    ],
  },

  // ---------------------------------------------------------------- HEAT PUMP INSTALLATION
  {
    city: "provo",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Provo, UT",
    metaDescription:
      "Dual-fuel heat pump systems for Provo homes from $9,990 after incentives. Provo is on city power, so we match the $1,450 rebate. Permit included.",
    h1: "Heat pump installation in Provo, UT",
    heroSub:
      "A variable-speed heat pump with a gas furnace cools a Provo home through 95° afternoons, heats most of the winter, and lets the furnace take the coldest nights.",
    heroImg: { src: "/images/heat-pump-brick-home.jpg", alt: "New outdoor heat pump installed beside a brick home", pos: "50% 55%" },
    primaryCta: "INSTANT",
    intro: [
      "A dual-fuel system pairs a variable-speed heat pump with a natural gas furnace. The heat pump does all the cooling and most of the heating, and the furnace takes over when it gets cold enough that gas is the cheaper choice. The system switches on its own.",
      "We’ve helped more than 2,000 Utah homeowners with their heating and cooling. Every Provo install includes a load calculation, the city permit and inspection, removal of the old equipment, and the rebate paperwork, including our $1,450 match.",
    ],
    factorsTitle: "Why Provo homes suit dual fuel",
    factors: [
      {
        title: "We cover the rebate Provo doesn’t get",
        body: "Provo runs its own power utility, so the $1,450 Rocky Mountain Power Wattsmart rebate isn’t available here. We match it with a $1,450 credit from Eco Home. With $700 to $1,000 from Enbridge Gas, that’s $2,150 to $2,450, guaranteed.",
      },
      {
        title: "Hot summers, cold nights",
        body: "Provo’s summers run into the mid-90s and January nights into the low 20s. A heat pump handles the summer and the mild part of winter efficiently, and the gas furnace is there for the coldest stretches.",
      },
      {
        title: "Even temperatures in every kind of home",
        body: "Whether it’s an older two-story near downtown or a split-level on the bench, variable-speed equipment runs longer at lower speeds, which keeps the upstairs and basement closer to the thermostat setting.",
      },
    ],
    listTitle: "What every Provo install includes",
    listIntro: "One price covers all of it.",
    list: [
      { title: "A load calculation", body: "We size the system for your home’s square footage, windows, insulation and levels, not for the old unit’s label." },
      { title: "The Provo permit and inspection", body: "Not every HVAC company pulls permits. We do on every job, and it’s part of your price." },
      { title: "Ducts and returns checked", body: "Especially in older homes, where the ducts may limit what any system can do." },
      { title: "Old equipment hauled away", body: "We remove and dispose of the old furnace and AC." },
      { title: "Rebates handled", body: "We apply the $1,450 match and file your Enbridge Gas rebate." },
      { title: "Smile Guarantee", body: "One year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: {
      title: "What it costs in Provo",
      body: "Heat pump and gas furnace systems start at $9,990 after incentives, including our $1,450 match. The final price depends on your home’s size and the efficiency you choose.",
      points: ["From $9,990 after incentives", "$1,450 rebate match from Eco Home", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"],
    },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives including Eco Home's $1,450 match" },
    updated: "2026-11-13",
    job: {
      customer: "Brian H.",
      title: "A hot second floor and a 22-year-old AC that sounded like a generator. Brian’s Provo home now cools evenly and quietly.",
      problem: "Brian’s upstairs bedrooms hit 80° every summer afternoon while the basement stayed cold. The old single-speed furnace blower couldn’t move enough cool air up to the second floor, and the 22-year-old outdoor unit was loud enough to hear from inside.",
      solution: "We installed a variable-speed heat pump with a variable-speed gas furnace. The modulating blower runs at a low, steady speed most of the day, which keeps cool air reaching the second floor instead of short blasts that never make it upstairs.",
      result: "No more hot spots upstairs, a system that runs quietly inside and out, and heating that switches between the heat pump and gas automatically when winter comes.",
    },
    faqs: [
      {
        q: "Do I get the Rocky Mountain Power heat pump rebate in Provo?",
        a: "No, because Provo homes are on Provo City Power. We match that $1,450 rebate with our own credit on every heat pump we install, and Enbridge Gas ThermWise adds $700 with an 80% furnace or $1,000 with a 96%+ furnace.",
      },
      {
        q: "Will a heat pump keep my Provo home warm in January?",
        a: "Paired with a gas furnace, yes. The heat pump heats efficiently through most of the season, and the furnace takes over on the coldest nights, so you always have plenty of heat.",
      },
      {
        q: "Can a heat pump work in an older Provo home?",
        a: "Usually. The bigger question is the ductwork. We check duct size and return air before we recommend a system, and we’ll tell you if the ducts need changes to get the comfort you want.",
      },
      {
        q: "How long does a heat pump install take?",
        a: "Most installs are done in one day, including the permit inspection scheduling and haul-away.",
      },
      {
        q: "Is financing available in Provo?",
        a: "Yes. 0% interest for 12 months is available, along with longer-term options. We’ll walk through them at your estimate.",
      },
    ],
  },

  // ================================================================ PLEASANT GROVE
  // ---------------------------------------------------------------- FURNACE REPAIR
  {
    city: "pleasant-grove",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Pleasant Grove, UT",
    metaDescription:
      "Pleasant Grove furnace repair from our shop just over the line in American Fork. Open 24/7, $129 diagnostic, repair price before any work.",
    h1: "Furnace repair in Pleasant Grove, UT",
    heroSub:
      "Our shop is minutes from Pleasant Grove, and we’re open 24/7. A $129 diagnostic, then the repair price before anything gets fixed.",
    heroImg: { src: "/images/furnace-install.jpg", alt: "Gas furnace in a utility room after an Eco Home service visit", pos: "50% 40%" },
    primaryCta: "BOOK",
    intro: [
      "Being next door matters most when the heat goes out. Our shop on Automall Drive is just across the city line from Pleasant Grove, so a technician isn’t coming from the other end of the valley.",
      "We work on every major furnace brand, from 30-year-old units in older homes near the center of town to high-efficiency furnaces in newer homes on the bench. You see the repair price before we start.",
    ],
    factorsTitle: "Why Pleasant Grove furnaces wear out",
    factors: [
      {
        title: "Basement furnaces working two floors",
        body: "In a rambler with a finished basement, one furnace heats both levels. Uneven heat often comes from the ducts or returns, not the furnace, and we check that before changing parts.",
      },
      {
        title: "Second and third furnaces",
        body: "Many older Pleasant Grove homes are on their second or third furnace, sometimes installed without the venting or return air updated to match. Those mismatches shorten a furnace’s life.",
      },
      {
        title: "Long heating season on the bench",
        body: "Homes on the bench below Timpanogos see cold nights from October into April. That long season adds up to a lot of starts for ignitors and inducer motors.",
      },
    ],
    listTitle: "Furnace problems we fix in Pleasant Grove",
    listIntro: "We bring the common parts, so many fixes happen on the first visit.",
    list: [
      { title: "Clicking but no flame", body: "The ignitor may be cracked, or the gas valve isn’t opening. We test each step of the startup sequence." },
      { title: "Heat comes on, then quits", body: "A flame sensor coated in buildup or an overheating limit. A clean sensor and a fresh filter fix many of these." },
      { title: "Basement freezing, main floor warm", body: "Usually return air or duct balance. We measure before recommending anything." },
      { title: "Squealing or grinding blower", body: "A worn blower motor bearing or belt. It’s cheaper to fix early than after the motor seizes." },
      { title: "Error codes blinking", body: "We read the furnace’s fault code and trace the cause." },
    ],
    price: {
      title: "Upfront, every time",
      body: "We charge $129 for the furnace diagnostic and give you the repair price before any work.",
      points: ["$129 diagnostic", "Price before repair", "Essential Care Plan members save 10%", "Smile Guarantee"],
    },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Worth repairing?",
    decide: [
      "A furnace under about 15 years old with a modest repair is usually worth fixing.",
      "If it’s older and needs a major part, compare a replacement. Pleasant Grove is on Rocky Mountain Power, so a heat pump paired with a new gas furnace gets the $1,450 Wattsmart rebate plus $700 to $1,000 from Enbridge Gas: at least $2,150, guaranteed. A furnace by itself starts at $3,990, installed in one day.",
    ],
    safety: {
      title: "Rotten-egg smell? Leave first, call second.",
      body: "Take everyone outside without using light switches or appliances. From outside, call Enbridge Gas at 1-800-767-1689 or 911. Call us once the gas company has cleared the house.",
    },
    faqs: [
      {
        q: "How quickly can you get to Pleasant Grove?",
        a: "Our shop is just across the line in American Fork, and we’re open 24/7. Call 801-396-0019 or book online.",
      },
      {
        q: "How much is furnace repair in Pleasant Grove?",
        a: "$129 for the diagnostic, then a set price for the repair before we start. Small parts like a flame sensor or ignitor cost much less than a blower or inducer motor. Essential Care Plan members save 10%.",
      },
      {
        q: "Why is my basement so much colder than upstairs in winter?",
        a: "Cold air settles, and basement returns and supply registers are often too few or poorly placed. We check airflow on each level before blaming the furnace.",
      },
      {
        q: "My furnace is blinking a code. Can you read it?",
        a: "Yes. Most furnaces flash a fault code on the control board. We read it, test the part it points to, and fix the actual cause.",
      },
      {
        q: "Should I fix a 25-year-old furnace?",
        a: "Small repairs, maybe. For a major part, a replacement is usually the better deal, especially with $2,150 or more in rebates on a heat pump and gas furnace system in Pleasant Grove.",
      },
    ],
  },

  // ---------------------------------------------------------------- AC REPAIR
  {
    city: "pleasant-grove",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Pleasant Grove, UT, Open 24/7",
    metaDescription:
      "AC repair in Pleasant Grove from our American Fork shop next door. Open 24/7, a $129 diagnostic and an upfront price for warm air or no cooling.",
    h1: "AC repair in Pleasant Grove, UT",
    heroSub:
      "AC running all afternoon and the house still won’t cool? We’re minutes away in American Fork and open 24/7, with a $129 diagnostic and an upfront repair price.",
    heroImg: { src: "/images/tech-heat-pump-brick.jpg", alt: "Eco Home technician servicing an outdoor unit beside a brick home", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "A Pleasant Grove AC that runs from noon until midnight is telling you something. It might be a failing part, a refrigerant leak or a system that’s simply worn out, and we’ll find out which.",
      "We fix all major AC and heat pump brands. You’ll get a straight explanation and the price before any repair.",
    ],
    factorsTitle: "Why Pleasant Grove ACs fall behind",
    factors: [
      {
        title: "Long run times on 100° days",
        body: "On the hottest days an AC can run for hours without a break. That heat and run time wear out capacitors, contactors and outdoor fan motors.",
      },
      {
        title: "Aging original units",
        body: "Plenty of Pleasant Grove ACs are past 20 years old. Older systems lose capacity as coils corrode and refrigerant slowly leaks out.",
      },
      {
        title: "Trees and yard debris",
        body: "The City of Trees earns its name. Leaves, seeds and cottonwood fluff clog outdoor coils, so the unit can’t get rid of heat.",
      },
    ],
    listTitle: "AC repairs we handle in Pleasant Grove",
    listIntro: "Most repairs are done in one visit.",
    list: [
      { title: "Never shuts off", body: "We check refrigerant charge, coil condition and duct leaks to see why it can’t catch up." },
      { title: "Warm air at the vents", body: "Commonly a bad capacitor, contactor or fan motor." },
      { title: "AC won’t turn on", body: "A tripped breaker, failed disconnect fuse, thermostat issue or a float switch tripped by a full drain." },
      { title: "Clogged outdoor coil", body: "We clean the coil so the system can shed heat again." },
      { title: "Ice on the copper lines", body: "Turn the system off. Ice means low airflow or low refrigerant, and running it can damage the compressor." },
    ],
    price: {
      title: "Diagnostic first, price second, repair third",
      body: "The AC diagnostic is $129. You approve the repair price before we do the work.",
      points: ["$129 diagnostic", "Upfront pricing", "Essential Care Plan members save 10%", "Smile Guarantee"],
    },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or replace your AC?",
    decide: [
      "If the AC is under about 12 years old and the repair is reasonable, fix it.",
      "If it’s older, needs a compressor or is leaking refrigerant, look at a heat pump paired with a gas furnace. In Pleasant Grove that system gets the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas.",
    ],
    faqs: [
      {
        q: "Can you come today for AC repair in Pleasant Grove?",
        a: "We’re next door in American Fork and open 24/7. Call 801-396-0019 or book online and we’ll get you on the schedule.",
      },
      {
        q: "What does AC repair cost in Pleasant Grove?",
        a: "The diagnostic is $129, then you get an upfront price. A capacitor is a small repair; a leak or compressor is a much bigger one. Essential Care Plan members save 10%.",
      },
      {
        q: "Why does my AC run all day and never reach the temperature I set?",
        a: "It may be low on refrigerant, have a dirty coil, be losing air through leaky ducts, or be too small for the house. We test for each of these.",
      },
      {
        q: "Should I hose off my outdoor unit?",
        a: "A gentle rinse from the inside out with the power off helps. Don’t use a pressure washer, which bends the fins. A tune-up includes a proper coil cleaning.",
      },
      {
        q: "Is a heat pump a good replacement for my AC?",
        a: "For most Pleasant Grove homes, yes. Paired with a gas furnace, it cools more evenly and heats much of the winter, and it qualifies for at least $2,150 in rebates.",
      },
    ],
  },

  // ---------------------------------------------------------------- HEAT PUMP INSTALLATION
  {
    city: "pleasant-grove",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Pleasant Grove, UT",
    metaDescription:
      "Heat pump + gas furnace systems for Pleasant Grove from $9,990 after incentives, with $2,150+ in Rocky Mountain Power and Enbridge rebates.",
    h1: "Heat pump installation in Pleasant Grove, UT",
    heroSub:
      "A variable-speed heat pump and gas furnace keep a Pleasant Grove home evenly cool on 100° days and warm through the winter, with $2,150 or more in rebates.",
    heroImg: { src: "/images/heat-pump-install-lawn.jpg", alt: "Newly installed outdoor heat pump on a pad beside a lawn", pos: "50% 55%" },
    primaryCta: "INSTANT",
    intro: [
      "Most Pleasant Grove homes that call us about a new system have the same story: an AC and furnace that are both around 20 years old. Replacing them together with a dual-fuel system means one install, one set of rebates and equipment designed to work as a pair.",
      "The heat pump handles cooling and most of the heating; the gas furnace covers the coldest nights. We’ve helped more than 2,000 Utah homeowners, and every install includes a load calculation, the Pleasant Grove permit, haul-away and the rebate paperwork.",
    ],
    factorsTitle: "Why dual fuel makes sense in Pleasant Grove",
    factors: [
      {
        title: "Rocky Mountain Power rebate",
        body: "Pleasant Grove is on Rocky Mountain Power. As a Wattsmart Pro Network contractor, we get you the $1,450 Wattsmart rebate on every heat pump we install, plus $700 to $1,000 from Enbridge Gas: $2,150 to $2,450, guaranteed.",
      },
      {
        title: "Cooling that keeps up in July",
        body: "Variable-speed heat pumps run longer at lower output, so the house stays at the set temperature instead of falling behind all afternoon.",
      },
      {
        title: "Main floor and basement closer together",
        body: "Steady, low-speed airflow mixes the air between levels, which narrows the gap between a warm main floor and a cool basement.",
      },
    ],
    listTitle: "Included in every Pleasant Grove install",
    listIntro: "No add-ons to chase later.",
    list: [
      { title: "Load calculation", body: "Sized to your house, not copied from the old unit." },
      { title: "Pleasant Grove permit", body: "Pulled and inspected. Not every HVAC company pulls permits. We do on every job." },
      { title: "Variable-speed furnace", body: "Paired with the heat pump so both run quietly at low speed most of the time." },
      { title: "Thermostat set up", body: "We configure the dual-fuel switchover and show you how it works." },
      { title: "Rebates filed", body: "Rocky Mountain Power and Enbridge Gas paperwork handled for you." },
      { title: "Smile Guarantee", body: "A year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: {
      title: "Pleasant Grove pricing",
      body: "Heat pump and gas furnace systems start at $9,990 after incentives. Your price depends on the size of your home and the efficiency you choose.",
      points: ["From $9,990 after incentives", "$1,450 Rocky Mountain Power rebate", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"],
    },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-11-13",
    job: {
      customer: "Kelsey W.",
      title: "A 24-year-old AC that couldn’t get below 77° on 100° days. Kelsey’s house now stays cool all afternoon.",
      problem: "Kelsey’s old AC ran from noon to midnight on the hottest days and the house still sat at 77° or warmer, with the bedrooms the worst of it.",
      solution: "We replaced the AC and furnace together with a variable-speed heat pump and a variable-speed gas furnace. Instead of loud on-and-off blasts, the system runs steadily at low power.",
      result: "Every room stays evenly cool even on 100° days, and in winter the system picks between electric and gas heat on its own.",
    },
    faqs: [
      {
        q: "What rebates can I get on a heat pump in Pleasant Grove?",
        a: "Rocky Mountain Power pays $1,450 through Wattsmart on every heat pump we install, and Enbridge Gas ThermWise pays $700 with an 80% furnace or $1,000 with a 96%+ furnace. That’s $2,150 to $2,450, guaranteed, and we file it all.",
      },
      {
        q: "Will a heat pump keep up on 100° days?",
        a: "Yes, when it’s sized correctly. That’s why every install starts with a load calculation. A variable-speed heat pump also runs longer at lower speed, which keeps the temperature steady instead of letting the house drift.",
      },
      {
        q: "Should I replace my AC and furnace at the same time?",
        a: "If both are around 20 years old, usually yes. Replacing them together costs less than two separate jobs, qualifies for both rebates and gives you a matched system.",
      },
      {
        q: "How long will the install take?",
        a: "Most are finished in one day, including removing the old equipment.",
      },
      {
        q: "Can I finance a new system?",
        a: "Yes. 0% interest for 12 months is available, along with longer-term financing.",
      },
    ],
  },

  // ================================================================ SARATOGA SPRINGS
  // ---------------------------------------------------------------- FURNACE REPAIR
  {
    city: "saratoga-springs",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Saratoga Springs, UT",
    metaDescription:
      "Saratoga Springs furnace repair, open 24/7. Builder-grade and high-efficiency furnaces, a $129 diagnostic and the price before any work.",
    h1: "Furnace repair in Saratoga Springs, UT",
    heroSub:
      "No heat in Saratoga Springs? We’re open 24/7. A $129 diagnostic tells us what failed, and you get the repair price before any work.",
    heroImg: { src: "/images/aciq-furnace-basement-install.jpg", alt: "High-efficiency gas furnace installed in a basement", pos: "50% 45%" },
    primaryCta: "BOOK",
    intro: [
      "Most furnaces in Saratoga Springs were installed when the house was built, and in the older neighborhoods that was 20 years ago. Builder-grade furnaces of that age commonly need ignitors, inducer motors and control boards.",
      "We repair every major brand, including the builder models found in most Saratoga Springs homes. We find the cause, give you the price, and only then make the repair.",
    ],
    factorsTitle: "What Saratoga Springs furnaces deal with",
    factors: [
      {
        title: "Builder-grade equipment",
        body: "Entry-level furnaces put in during construction work fine for years, but their parts tend to wear out sooner than those in higher-end models, especially once they pass 15 years.",
      },
      {
        title: "High-efficiency condensate",
        body: "Many homes here have 90%+ furnaces that make water as they run. A clogged drain line or frozen condensate pipe will shut the furnace down on a cold night.",
      },
      {
        title: "Long duct runs",
        body: "Bigger homes put rooms far from the furnace. When a blower motor weakens, those far rooms are the first to go cold.",
      },
    ],
    listTitle: "Furnace repairs we make in Saratoga Springs",
    listIntro: "Many are finished on the first trip.",
    list: [
      { title: "Shut down on a cold night", body: "A frozen or clogged condensate line is a common cause in high-efficiency furnaces. We clear it and protect it." },
      { title: "Ignitor glows but no flame", body: "Often a failing gas valve or flame sensor. We test before replacing." },
      { title: "Far rooms stay cold", body: "We check the blower, the filter and duct dampers before anything else." },
      { title: "Loud whine from the furnace", body: "An inducer motor on its way out. Better replaced before it stops the furnace completely." },
      { title: "Thermostat says heat, nothing happens", body: "Wiring, settings or a failed control board. We trace it step by step." },
    ],
    price: {
      title: "The repair price comes first",
      body: "Diagnostic visits are $129. You get the cost of the repair before we start.",
      points: ["$129 diagnostic", "Repair price before work", "10% off for Essential Care Plan members", "Smile Guarantee"],
    },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or replace the original furnace?",
    decide: [
      "If the furnace is under about 15 years old and the repair is small, fix it.",
      "If it’s the original builder furnace from the early 2000s and needs a big part, price a replacement. Saratoga Springs is on Rocky Mountain Power, so a heat pump paired with a new gas furnace gets at least $2,150 in rebates, guaranteed. A furnace on its own starts at $3,990, installed in one day.",
    ],
    safety: {
      title: "If you smell gas, leave the house.",
      body: "Get everyone outside and don’t touch switches or appliances on the way out. Call Enbridge Gas at 1-800-767-1689 or 911 from outside. Call us after the gas company says it’s safe.",
    },
    faqs: [
      {
        q: "Do you do emergency furnace repair in Saratoga Springs?",
        a: "Yes, we’re open 24/7. Call 801-396-0019 or book online at any hour.",
      },
      {
        q: "How much does furnace repair cost in Saratoga Springs?",
        a: "The diagnostic is $129, then you get a firm repair price. A flame sensor or condensate fix is a small repair; an inducer or blower motor costs more. Essential Care Plan members save 10%.",
      },
      {
        q: "Why did my furnace stop working when it got really cold?",
        a: "In high-efficiency furnaces, the condensate pipe can freeze or clog, and the furnace shuts down to protect itself. We clear it and can reroute or insulate it so it doesn’t happen again.",
      },
      {
        q: "Is a builder-grade furnace worth repairing?",
        a: "Under about 15 years old, usually. After that, repairs come more often, and a new heat pump and gas furnace system with $2,150 or more in rebates is often the better value.",
      },
      {
        q: "Why are the rooms over my garage always cold?",
        a: "They’re usually at the end of a long duct run, with exterior walls and a cold garage below. We check airflow to those rooms and can often improve it.",
      },
    ],
  },

  // ---------------------------------------------------------------- AC REPAIR
  {
    city: "saratoga-springs",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Saratoga Springs, UT, Open 24/7",
    metaDescription:
      "AC repair in Saratoga Springs, open 24/7. Hot west-facing rooms, warm air or a loud unit: $129 diagnostic and the repair price before work.",
    h1: "AC repair in Saratoga Springs, UT",
    heroSub:
      "West-facing bedrooms baking every afternoon? We’re open 24/7, with a $129 diagnostic and a repair price before we touch anything.",
    heroImg: { src: "/images/old-ac-unit.jpg", alt: "Older outdoor AC unit beside a home, ready for service", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "Saratoga Springs is on the west side of the valley, and many homes catch the full afternoon sun. That’s when an aging AC shows its weak spots: warm air, rooms that never cool, or a unit that cycles on and off.",
      "We fix every major AC and heat pump brand. You get a clear diagnosis and the price before any repair.",
    ],
    factorsTitle: "Why Saratoga Springs ACs struggle",
    factors: [
      {
        title: "Afternoon sun on west-facing rooms",
        body: "Rooms that face west can run several degrees warmer than the rest of the house. A single-speed AC satisfies the thermostat and shuts off before those rooms catch up.",
      },
      {
        title: "Wind-blown dust",
        body: "Open land and ongoing construction around the city blow dust into outdoor coils, which cuts cooling capacity.",
      },
      {
        title: "First-generation equipment",
        body: "The ACs that came with early-2000s homes are now about 20 years old, and capacitors, contactors and fan motors are wearing out.",
      },
    ],
    listTitle: "AC problems we fix in Saratoga Springs",
    listIntro: "Most are fixed in a single visit.",
    list: [
      { title: "One side of the house is hot", body: "We measure airflow to those rooms and check duct sizing and dampers." },
      { title: "Loud outdoor unit", body: "Worn fan motors, loose panels and failing compressors all get louder. We find which it is." },
      { title: "Warm air", body: "Usually a capacitor, contactor or fan motor, sometimes low refrigerant." },
      { title: "Short cycling", body: "Running a few minutes and stopping often points to an oversized unit, a bad sensor or a refrigerant problem." },
      { title: "Dirty coil", body: "We clean it so the system can reject heat and cool properly." },
    ],
    price: {
      title: "Pricing you see first",
      body: "Every AC visit starts with a $129 diagnostic, and you approve the repair price before we begin.",
      points: ["$129 diagnostic", "Upfront repair price", "Essential Care Plan members save 10%", "Smile Guarantee on repairs"],
    },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Is it time for a new system?",
    decide: [
      "Under about 12 years old with a reasonable repair, keep it running.",
      "If it’s the original AC from an early-2000s build, or the compressor is failing, compare a heat pump paired with a gas furnace. In Saratoga Springs, it qualifies for the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas.",
    ],
    faqs: [
      {
        q: "How soon can you fix my AC in Saratoga Springs?",
        a: "We’re open 24/7 and finish most AC repairs in one visit. Call 801-396-0019 or book online.",
      },
      {
        q: "What does AC repair cost in Saratoga Springs?",
        a: "The diagnostic is $129, then an upfront price. Capacitors and contactors are inexpensive; refrigerant leaks and compressors cost more. Essential Care Plan members save 10%.",
      },
      {
        q: "Why are my west-facing bedrooms so much hotter?",
        a: "They absorb the afternoon sun, and a single-speed AC shuts off as soon as the thermostat is satisfied. A variable-speed system runs longer at low speed, which keeps cooling those rooms. Window coverings help too.",
      },
      {
        q: "My AC is so loud we can’t use the patio. Can that be fixed?",
        a: "Sometimes a worn fan motor or loose panel is the cause, and that’s a repair. If the unit itself is old and loud, a variable-speed heat pump runs at a fraction of its capacity most of the day and is much quieter.",
      },
      {
        q: "Do I get a rebate if I replace my AC with a heat pump?",
        a: "Yes. Saratoga Springs is on Rocky Mountain Power, which pays $1,450 on every heat pump we install, and Enbridge Gas adds $700 to $1,000 with a gas furnace.",
      },
    ],
  },

  // ---------------------------------------------------------------- HEAT PUMP INSTALLATION
  {
    city: "saratoga-springs",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Saratoga Springs, UT",
    metaDescription:
      "Dual-fuel heat pump systems for Saratoga Springs from $9,990 after incentives. $2,150+ in Rocky Mountain Power and Enbridge rebates, guaranteed.",
    h1: "Heat pump installation in Saratoga Springs, UT",
    heroSub:
      "Replace a 20-year-old builder AC and furnace with a variable-speed heat pump and gas furnace that keep west-facing rooms cool and run quietly.",
    heroImg: { src: "/images/amana-system-side-eco-home-van.jpg", alt: "Amana heat pump and furnace beside an Eco Home van", pos: "55% 55%" },
    primaryCta: "INSTANT",
    intro: [
      "When a Saratoga Springs home’s original AC and furnace are both near 20, replacing them together with a dual-fuel system is usually the best value. A variable-speed heat pump does the cooling and most of the heating, and a gas furnace takes over on the coldest nights.",
      "We’ve helped more than 2,000 Utah homeowners with heating and cooling. Each Saratoga Springs install includes a load calculation, the city permit and inspection, haul-away of the old units and the rebate filing.",
    ],
    factorsTitle: "Why Saratoga Springs homes choose dual fuel",
    factors: [
      {
        title: "Quiet enough for the patio",
        body: "A variable-speed heat pump spends most of its time at low output, so it’s far quieter outside than an old single-speed AC that runs at full blast.",
      },
      {
        title: "Better cooling for sunny rooms",
        body: "Longer, steadier run times keep cooling the rooms that take the afternoon sun, instead of shutting off as soon as the hallway thermostat is happy.",
      },
      {
        title: "$2,150 or more back",
        body: "Rocky Mountain Power pays $1,450 through Wattsmart, and Enbridge Gas pays $700 to $1,000 when the heat pump is paired with a gas furnace. That’s guaranteed, and we file the paperwork.",
      },
    ],
    listTitle: "What a Saratoga Springs install includes",
    listIntro: "Everything, at one price.",
    list: [
      { title: "Load calculation", body: "Builder systems were often sized by rule of thumb. We size yours to the house." },
      { title: "City permit and inspection", body: "Not every HVAC company pulls permits. We do on every job, and it’s included." },
      { title: "Matched variable-speed equipment", body: "Heat pump and furnace built to work together at low speed." },
      { title: "Airflow balanced", body: "We set the system so far rooms and west-facing rooms get their share." },
      { title: "Rebate paperwork", body: "Filed with Rocky Mountain Power and Enbridge Gas for you." },
      { title: "Smile Guarantee", body: "One year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: {
      title: "Cost in Saratoga Springs",
      body: "Heat pump and gas furnace systems start at $9,990 after incentives. Your price depends on your home’s size and the efficiency you choose.",
      points: ["From $9,990 after incentives", "$1,450 Rocky Mountain Power rebate", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"],
    },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-11-13",
    job: {
      customer: "Nate D.",
      title: "A loud 19-year-old AC and 79° bedrooms. Nate’s Saratoga Springs home is now cool upstairs and quiet outside.",
      problem: "Nate’s west-facing bedrooms reached 79° in the afternoon, and the 19-year-old AC outside the patio was loud enough to stop a conversation. Some rooms were always warmer than others.",
      solution: "We installed a variable-speed heat pump with a variable-speed gas furnace, running at around 30% to 50% speed most of the day.",
      result: "The bedrooms stay cool, both floors are closer to the same temperature, and the patio is quiet. In winter it switches to gas on its own when that’s cheaper.",
    },
    faqs: [
      {
        q: "What heat pump rebates are there in Saratoga Springs?",
        a: "Rocky Mountain Power pays a $1,450 Wattsmart rebate on every heat pump we install. Enbridge Gas ThermWise adds $700 with an 80% furnace or $1,000 with a 96%+ furnace. That’s $2,150 to $2,450, guaranteed.",
      },
      {
        q: "How quiet is a variable-speed heat pump?",
        a: "Much quieter than an old single-speed AC. It runs at low output most of the time, so you’ll often have to listen for it, and it ramps up only on the hottest afternoons.",
      },
      {
        q: "Will it fix my hot west-facing rooms?",
        a: "It helps a lot, because it keeps running at low speed instead of shutting off early. We also check ductwork and airflow to those rooms as part of the install.",
      },
      {
        q: "How long does installation take?",
        a: "Most installs are finished in one day.",
      },
      {
        q: "Is financing available?",
        a: "Yes. 0% interest for 12 months is available, plus longer-term options.",
      },
    ],
  },

  // ================================================================ EAGLE MOUNTAIN
  // ---------------------------------------------------------------- FURNACE REPAIR
  {
    city: "eagle-mountain",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Eagle Mountain, UT",
    metaDescription:
      "Eagle Mountain furnace repair, open 24/7, including cold nights out toward City Center. $129 diagnostic and the repair price before any work.",
    h1: "Furnace repair in Eagle Mountain, UT",
    heroSub:
      "Eagle Mountain nights get cold, especially out toward City Center. If your furnace quits, we’re open 24/7, with a $129 diagnostic and a price before any repair.",
    heroImg: { src: "/images/furnace-tech-thumbs-up.jpg", alt: "Eco Home technician with a thumbs up beside a new furnace", pos: "50% 35%" },
    primaryCta: "BOOK",
    intro: [
      "Eagle Mountain’s furnaces have a lot in common: most were installed when the house was built, many are builder-grade models, and a growing number are 20 years old. That’s when parts like ignitors, flame sensors and inducer motors start to fail.",
      "We repair all major furnace brands. You get the cause, the repair price, and our honest take on whether the repair is worth it.",
    ],
    factorsTitle: "What Eagle Mountain furnaces face",
    factors: [
      {
        title: "Colder nights in Cedar Valley",
        body: "Parts of Eagle Mountain, especially around City Center, sit in a rain shadow with colder nights than the rest of the valley. Furnaces there run long and start often.",
      },
      {
        title: "A big city spread out",
        body: "Eagle Mountain covers more than 50 square miles, and some homes are a long drive from anywhere. Our technicians carry the common parts, so most repairs don’t wait on a parts run.",
      },
      {
        title: "Dust and filters",
        body: "New construction and open land mean more dust. Filters clog faster, and a clogged filter is one of the most common reasons a furnace overheats and shuts off.",
      },
    ],
    listTitle: "Furnace repairs we do in Eagle Mountain",
    listIntro: "Most are completed on the first visit.",
    list: [
      { title: "No heat at all", body: "We test the thermostat, ignitor, flame sensor, pressure switch and board in order, and replace only what failed." },
      { title: "Overheating shutdowns", body: "Often a clogged filter or closed vents. If that’s not it, we check the blower and limit switch." },
      { title: "Upstairs too warm, downstairs cold", body: "An airflow problem more than a furnace problem. We measure and adjust." },
      { title: "Rattling vents", body: "Loose duct connections or a blower running too fast. Both can be fixed." },
      { title: "Furnace short cycles", body: "A dirty flame sensor or an oversized furnace. We find which." },
    ],
    price: {
      title: "No surprises on the price",
      body: "A furnace diagnostic costs $129, and you approve the repair price before any work.",
      points: ["$129 diagnostic", "Repair price up front", "Essential Care Plan members save 10%", "Smile Guarantee"],
    },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Fix it or replace it?",
    decide: [
      "If the furnace is younger than about 15 years and the repair is reasonable, repair it.",
      "If it’s the original furnace and needs a major part, compare replacement. Eagle Mountain is on Rocky Mountain Power, so a heat pump paired with a new gas furnace gets the $1,450 Wattsmart rebate plus $700 to $1,000 from Enbridge Gas, at least $2,150 guaranteed. A furnace alone starts at $3,990, installed in one day.",
    ],
    safety: {
      title: "Gas smell means get out.",
      body: "If you smell rotten eggs, leave the house with everyone and don’t use switches or appliances. Call Enbridge Gas at 1-800-767-1689 or 911 from outside, then call us once it’s safe.",
    },
    faqs: [
      {
        q: "Will you come out to Eagle Mountain for a furnace repair at night?",
        a: "Yes. We’re open 24/7 and serve all of Eagle Mountain. Call 801-396-0019 or book online.",
      },
      {
        q: "How much does furnace repair cost in Eagle Mountain?",
        a: "The diagnostic is $129, then you get an upfront price for the repair. A flame sensor costs much less than an inducer or blower motor. Essential Care Plan members save 10%.",
      },
      {
        q: "How often should I change my furnace filter in Eagle Mountain?",
        a: "Check it monthly, especially if construction is going on nearby. A standard 1-inch filter often needs replacing every one to two months here.",
      },
      {
        q: "Why do my vents rattle when the furnace starts?",
        a: "A single-speed blower comes on at full speed all at once, which can shake loose ducts and registers. We tighten what’s loose, and a variable-speed furnace ramps up gently.",
      },
      {
        q: "My furnace is the original. Should I replace it?",
        a: "If it’s around 20 years old and needs a big repair, replacement is usually the better deal, especially with $2,150 or more in rebates on a heat pump and gas furnace system.",
      },
    ],
  },

  // ---------------------------------------------------------------- AC REPAIR
  {
    city: "eagle-mountain",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Eagle Mountain, UT, Open 24/7",
    metaDescription:
      "Eagle Mountain AC repair, open 24/7. Loud units, warm air or a hot upstairs: $129 diagnostic and a clear repair price before any work starts.",
    h1: "AC repair in Eagle Mountain, UT",
    heroSub:
      "Loud outdoor unit, warm air or a hot upstairs in Eagle Mountain? We’re open 24/7, with a $129 diagnostic and the repair price before any work.",
    heroImg: { src: "/images/tech-heat-pump-install.jpg", alt: "Technician connecting gauges to an outdoor unit", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "Eagle Mountain’s summers are sunny and dry, and many homes here have their original AC, now 15 to 25 years old. Those units get louder and less effective as they age.",
      "We repair all major AC and heat pump brands. You’ll know what failed and what it costs before we start.",
    ],
    factorsTitle: "Why Eagle Mountain ACs wear down",
    factors: [
      {
        title: "Lots of sun",
        body: "Cedar Valley gets plenty of sunshine, which keeps an AC running through long summer afternoons and wears on its electrical parts.",
      },
      {
        title: "Dust on the outdoor coil",
        body: "Open land and new construction coat outdoor coils with dust. A dirty coil can’t release heat, so the system runs longer and cools less.",
      },
      {
        title: "Units next to bedroom windows",
        body: "Many homes have the outdoor unit right beside a bedroom. As fan motors and compressors age, the noise gets hard to sleep through.",
      },
    ],
    listTitle: "AC repairs we handle in Eagle Mountain",
    listIntro: "Many are fixed in one trip.",
    list: [
      { title: "Unit is suddenly much louder", body: "A failing fan motor, a loose fan blade or a struggling compressor. We find out which." },
      { title: "Warm air from vents", body: "Usually a capacitor, contactor or refrigerant problem." },
      { title: "Hot upstairs", body: "We check refrigerant charge, airflow and the upstairs returns." },
      { title: "Won’t start", body: "A breaker, disconnect fuse, thermostat or condensate float switch." },
      { title: "Coil cleaning", body: "We clean dust off the outdoor coil so it can shed heat again." },
    ],
    price: {
      title: "See the price before the repair",
      body: "The AC diagnostic is $129, and you approve the repair price first.",
      points: ["$129 diagnostic", "Upfront pricing", "10% off for Essential Care Plan members", "Smile Guarantee"],
    },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair, or switch to a heat pump?",
    decide: [
      "An AC under about 12 years old with a reasonable repair is worth fixing.",
      "If it’s the original unit or needs a compressor, compare a variable-speed heat pump paired with a gas furnace. In Eagle Mountain it gets the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas, and it’s much quieter.",
    ],
    faqs: [
      {
        q: "Can you repair my AC in Eagle Mountain today?",
        a: "We’re open 24/7 and finish most AC repairs in one visit. Call 801-396-0019 or book online.",
      },
      {
        q: "How much does AC repair cost in Eagle Mountain?",
        a: "The diagnostic is $129, then an upfront repair price. A capacitor is a small repair; a refrigerant leak or compressor is a bigger one. Essential Care Plan members save 10%.",
      },
      {
        q: "Why did my AC suddenly get so loud?",
        a: "A worn fan motor bearing, a loose or bent fan blade, or a compressor starting to struggle. Turn it off if it’s grinding or screeching, and call us.",
      },
      {
        q: "Is there a quieter option than my current AC?",
        a: "Yes. A variable-speed heat pump runs at low output most of the day, so it’s far quieter than a single-speed AC that’s always at full blast.",
      },
      {
        q: "Do Eagle Mountain homes get the Rocky Mountain Power rebate?",
        a: "Yes. Eagle Mountain is served by Rocky Mountain Power, which pays $1,450 on every heat pump we install. Enbridge Gas adds $700 to $1,000 with a gas furnace.",
      },
    ],
  },

  // ---------------------------------------------------------------- HEAT PUMP INSTALLATION
  {
    city: "eagle-mountain",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Eagle Mountain, UT",
    metaDescription:
      "Heat pump + gas furnace systems for Eagle Mountain from $9,990 after incentives, with $2,150+ in rebates guaranteed. Quiet, even, one-day installs.",
    h1: "Heat pump installation in Eagle Mountain, UT",
    heroSub:
      "A variable-speed heat pump and gas furnace keep an Eagle Mountain home even between floors and quiet outside, with the furnace covering the cold Cedar Valley nights.",
    heroImg: { src: "/images/heat-pumps-pair.jpg", alt: "Two new inverter heat pumps beside a home", pos: "50% 55%" },
    primaryCta: "INSTANT",
    intro: [
      "Eagle Mountain’s first-generation furnaces and ACs are wearing out at the same time, and replacing them together with a dual-fuel system is usually the best move. The heat pump handles cooling and most of the heating, and the gas furnace takes over when it’s cold enough that gas costs less.",
      "We’ve helped more than 2,000 Utah homeowners with heating and cooling. Every Eagle Mountain install includes a load calculation, the city permit and inspection, removal of the old equipment and the rebate paperwork.",
    ],
    factorsTitle: "Why dual fuel fits Eagle Mountain",
    factors: [
      {
        title: "Cold nights, sunny days",
        body: "Eagle Mountain gets a lot of sun and some of the colder nights in the area. A heat pump covers the sunny, mild days efficiently, and the furnace takes the coldest nights.",
      },
      {
        title: "Quiet, even comfort",
        body: "Variable-speed equipment starts gently and runs at low speed most of the day, so there are no loud startup blasts and the upstairs and main floor stay closer together.",
      },
      {
        title: "Guaranteed rebates",
        body: "Rocky Mountain Power pays $1,450 through Wattsmart on every heat pump we install, and Enbridge Gas pays $700 to $1,000 with a gas furnace: $2,150 to $2,450, guaranteed.",
      },
    ],
    listTitle: "Part of every Eagle Mountain install",
    listIntro: "Included in your price.",
    list: [
      { title: "Load calculation", body: "Your system is sized for your house, which matters in the colder parts of the city." },
      { title: "Eagle Mountain permit", body: "Not every HVAC company pulls permits. We do on every job, and the inspection is scheduled for you." },
      { title: "Floors and stairs protected", body: "Runners and drop cloths down before any equipment comes through the house." },
      { title: "Thermostat walkthrough", body: "We set up the dual-fuel switchover and show you how to use it." },
      { title: "Rebates filed", body: "We handle the Rocky Mountain Power and Enbridge Gas paperwork." },
      { title: "Smile Guarantee", body: "A year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: {
      title: "Cost in Eagle Mountain",
      body: "Heat pump and gas furnace systems start at $9,990 after incentives. The exact price depends on your home’s size and the efficiency you choose.",
      points: ["From $9,990 after incentives", "$1,450 Rocky Mountain Power rebate", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"],
    },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-11-13",
    job: {
      customer: "Lauren M.",
      title: "A rattling 21-year-old AC and a warm upstairs. Lauren’s Eagle Mountain home is now quiet and even.",
      problem: "Lauren’s old AC was loud right outside the bedroom window, the vents rattled at every startup, and the upstairs stayed warmer than the main floor.",
      solution: "We installed a variable-speed heat pump and a variable-speed gas furnace, protected the stairs with runners during the work, and walked Lauren through the new smart thermostat before we left.",
      result: "Quiet, gentle startups, both floors at the same temperature, and automatic switching between electric and gas heat in winter.",
    },
    faqs: [
      {
        q: "Do heat pumps work in Eagle Mountain’s cold?",
        a: "Yes, paired with a gas furnace. The heat pump handles most of the heating season, and the furnace takes over on the coldest nights, which matters in the colder parts of the city.",
      },
      {
        q: "What rebates are available in Eagle Mountain?",
        a: "Rocky Mountain Power pays $1,450 on every heat pump we install, and Enbridge Gas ThermWise adds $700 with an 80% furnace or $1,000 with a 96%+ furnace. That’s $2,150 to $2,450, guaranteed.",
      },
      {
        q: "Will it be quieter than my old AC?",
        a: "Much quieter. A variable-speed heat pump runs at low output most of the time and ramps up only when it needs to.",
      },
      {
        q: "How long does an install take?",
        a: "Most are completed in one day.",
      },
      {
        q: "Can I finance a new system?",
        a: "Yes, including 0% interest for 12 months. Longer plans are available if you’d rather have a lower monthly payment.",
      },
    ],
  },

  // ================================================================ SPANISH FORK
  // ---------------------------------------------------------------- FURNACE REPAIR
  {
    city: "spanish-fork",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Spanish Fork, UT, Open 24/7",
    metaDescription:
      "Spanish Fork furnace repair, open 24/7 through cold, snowy winters. A $129 diagnostic and the repair price before any work. Call 801-396-0019.",
    h1: "Furnace repair in Spanish Fork, UT",
    heroSub:
      "Spanish Fork winters bring real cold. If your furnace stops, we’re open 24/7, with a $129 diagnostic and the repair price before any work.",
    heroImg: { src: "/images/american-fork-furnace-repair-lennox.jpg", alt: "Gas furnace opened up for a repair in a basement", pos: "50% 45%" },
    primaryCta: "BOOK",
    intro: [
      "Spanish Fork averages about 66 inches of snow a year and has seen lows of −20°F. A furnace that has been running all season can give out on exactly the night you need it most.",
      "We repair all major furnace brands, from older units in long-time family homes to high-efficiency furnaces in newer subdivisions. You get the price before we start.",
    ],
    factorsTitle: "What wears out Spanish Fork furnaces",
    factors: [
      {
        title: "A long, snowy season",
        body: "With winters this snowy, a furnace runs from fall into spring. More run time means more wear on blowers, ignitors and inducer motors.",
      },
      {
        title: "Snow around vents",
        body: "High-efficiency furnaces vent through the side of the house. Drifting snow can block the intake or exhaust and shut the furnace down until it’s cleared.",
      },
      {
        title: "Loud, aging blowers",
        body: "In older homes, a worn blower motor or a dirty blower wheel makes the furnace louder every year before it finally fails.",
      },
    ],
    listTitle: "Furnace repairs in Spanish Fork",
    listIntro: "Most are done on the first visit.",
    list: [
      { title: "Furnace stopped after a snowstorm", body: "Check the vent pipes outside for snow. If they’re clear and it still won’t run, call us." },
      { title: "No ignition", body: "We test the ignitor, flame sensor and gas valve and replace the part that failed." },
      { title: "Loud airflow or rumbling", body: "A dirty blower wheel, worn motor or ducts that are too small. We find the cause." },
      { title: "Runs, then shuts off", body: "Often a dirty flame sensor or a clogged filter tripping the high limit." },
      { title: "Uneven heat between rooms", body: "We check duct balance and blower speed before suggesting parts." },
    ],
    price: {
      title: "Price before the repair",
      body: "We charge $129 for the diagnostic and give you the repair price before starting.",
      points: ["$129 diagnostic", "Upfront price", "Essential Care Plan members save 10%", "Smile Guarantee"],
    },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or replace?",
    decide: [
      "Repair a furnace under about 15 years old when the cost is reasonable.",
      "For an older furnace that needs a major part, compare a new system. Spanish Fork is on city power, so the Rocky Mountain Power rebate doesn’t apply, but we match it with a $1,450 credit on every heat pump we install. With Enbridge Gas’s $700 to $1,000, a heat pump and new gas furnace get at least $2,150, guaranteed. A furnace alone starts at $3,990, installed in one day.",
    ],
    safety: {
      title: "Smell gas? Leave right away.",
      body: "Get everyone out without touching switches or appliances. From outside, call Enbridge Gas at 1-800-767-1689 or 911. Call us once the gas company has made the home safe.",
    },
    faqs: [
      {
        q: "Are you available for furnace emergencies in Spanish Fork?",
        a: "Yes, 24/7. Call 801-396-0019 or book online at any hour.",
      },
      {
        q: "What does furnace repair cost in Spanish Fork?",
        a: "The diagnostic is $129, then an upfront repair price. Small parts cost much less than a blower or inducer motor. Essential Care Plan members save 10%.",
      },
      {
        q: "My furnace stopped during a snowstorm. What should I check?",
        a: "If you have a high-efficiency furnace, look outside for the two white PVC pipes and clear any snow from around them. If it still won’t restart, call us.",
      },
      {
        q: "Why is my furnace so loud?",
        a: "A dirty blower wheel, a worn motor or undersized ducts can all make loud airflow. Some of that is a repair; if the furnace is old, a variable-speed model is much quieter.",
      },
      {
        q: "Is it worth fixing a 24-year-old furnace?",
        a: "For a small part, maybe. For a big one, a new heat pump and gas furnace system with our $1,450 match and Enbridge rebates is usually the better value.",
      },
    ],
  },

  // ---------------------------------------------------------------- AC REPAIR
  {
    city: "spanish-fork",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Spanish Fork, UT, Open 24/7",
    metaDescription:
      "Spanish Fork AC repair, open 24/7. Warm air, a loud unit or rooms that won’t cool: $129 diagnostic and the repair price before any work.",
    h1: "AC repair in Spanish Fork, UT",
    heroSub:
      "AC blowing warm or roaring every time it starts? We’re open 24/7 for Spanish Fork, with a $129 diagnostic and an upfront repair price.",
    heroImg: { src: "/images/tech-leveling-heat-pump.jpg", alt: "Technician working on an outdoor condenser", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "Spanish Fork summers are hot and dry, and many homes here have ACs past 20 years old. The common signs of trouble are warm air, rooms that never cool down and a unit that gets louder every year.",
      "We repair all major AC and heat pump brands, and you get the price before we start.",
    ],
    factorsTitle: "Why Spanish Fork ACs fail",
    factors: [
      {
        title: "Aging equipment",
        body: "An AC past 20 years has worn electrical parts and coils that have lost efficiency. It runs longer and cools less.",
      },
      {
        title: "Farm and field dust",
        body: "Fields and open land around Spanish Fork send dust and debris into outdoor coils, especially during harvest and windy days.",
      },
      {
        title: "Ducts that weren’t built for AC",
        body: "In older homes, central air was often added to ductwork sized for heat. Upstairs rooms get too little cool air.",
      },
    ],
    listTitle: "AC repairs we make in Spanish Fork",
    listIntro: "Usually finished in one visit.",
    list: [
      { title: "Warm air", body: "A failed capacitor, contactor or fan motor, or a refrigerant leak." },
      { title: "Very loud airflow indoors", body: "Often too much air for the ducts or a blower set too high. We check and adjust." },
      { title: "Upstairs too hot", body: "We look at airflow, returns and refrigerant charge." },
      { title: "Frozen lines", body: "Turn it off. It’s low airflow or low refrigerant, and we’ll find which." },
      { title: "AC won’t start", body: "A breaker, fuse, thermostat or condensate switch, in most cases." },
    ],
    price: {
      title: "The price, then the work",
      body: "The AC diagnostic is $129. You approve the repair price before we begin.",
      points: ["$129 diagnostic", "Upfront repair price", "10% off for Essential Care Plan members", "Smile Guarantee"],
    },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair it or replace it?",
    decide: [
      "Under about 12 years old with a reasonable repair, fix it.",
      "If it’s older, leaking refrigerant or needs a compressor, compare a heat pump paired with a gas furnace. Spanish Fork homes don’t get the Rocky Mountain Power rebate, so we match it with a $1,450 credit from Eco Home.",
    ],
    faqs: [
      {
        q: "How soon can you fix my AC in Spanish Fork?",
        a: "We’re open 24/7, and most AC repairs are done in one visit. Call 801-396-0019 or book online.",
      },
      {
        q: "How much is AC repair in Spanish Fork?",
        a: "The diagnostic is $129, then an upfront price. A capacitor is inexpensive; a leak or compressor costs much more. Essential Care Plan members save 10%.",
      },
      {
        q: "Why is the air from my vents so loud?",
        a: "Usually the blower is pushing more air than the ducts can carry, or the duct runs are restricted. We can often adjust it, and a variable-speed system is much quieter.",
      },
      {
        q: "How often should my outdoor unit be cleaned?",
        a: "Once a year at a tune-up, and more often if you live near fields. A clean coil cools better and costs less to run.",
      },
      {
        q: "Is there a rebate for a heat pump in Spanish Fork?",
        a: "Yes. We match the $1,450 Rocky Mountain Power rebate with our own credit, since Spanish Fork is on city power, and Enbridge Gas adds $700 to $1,000 with a gas furnace.",
      },
    ],
  },

  // ---------------------------------------------------------------- HEAT PUMP INSTALLATION
  {
    city: "spanish-fork",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Spanish Fork, UT",
    metaDescription:
      "Dual-fuel heat pump systems for Spanish Fork from $9,990 after incentives. Spanish Fork is on city power, so we match the $1,450 rebate ourselves.",
    h1: "Heat pump installation in Spanish Fork, UT",
    heroSub:
      "A variable-speed heat pump and gas furnace for Spanish Fork: quiet cooling all summer, efficient heat on mild days, and gas for snowy, below-zero nights.",
    heroImg: { src: "/images/ductwork-install.jpg", alt: "New ductwork connected to a furnace during an install", pos: "50% 50%" },
    primaryCta: "INSTANT",
    intro: [
      "Spanish Fork’s winters are cold and snowy, so we pair every heat pump with a gas furnace. The heat pump does all the cooling and handles heating on mild days, and the furnace takes over when it’s cold enough that gas is cheaper. The system decides on its own.",
      "We’ve helped more than 2,000 Utah homeowners with heating and cooling. Every Spanish Fork install includes a load calculation, the city permit, removal of the old equipment and the rebate paperwork, including our $1,450 match.",
    ],
    factorsTitle: "Why dual fuel fits Spanish Fork",
    factors: [
      {
        title: "We match the rebate city power doesn’t offer",
        body: "Spanish Fork homes are on Spanish Fork City Power & Light, so the $1,450 Rocky Mountain Power rebate doesn’t apply. We match it with a $1,450 credit from Eco Home. Add $700 to $1,000 from Enbridge Gas, and you get $2,150 to $2,450, guaranteed.",
      },
      {
        title: "Gas backup for real winters",
        body: "With about 66 inches of snow a year and nights that can drop below zero, a gas furnace backup means you never run short of heat.",
      },
      {
        title: "Quiet in the living room",
        body: "Variable-speed equipment moves air slowly and steadily, so it doesn’t roar through the vents the way an old single-speed system does.",
      },
    ],
    listTitle: "Every Spanish Fork install includes",
    listIntro: "One price.",
    list: [
      { title: "Load calculation", body: "Sized for your home, with the cold nights in mind." },
      { title: "Spanish Fork permit", body: "Not every HVAC company pulls permits. We do on every job, and it’s part of your price." },
      { title: "Shoe covers and clean work", body: "Booties on every trip inside, floors protected, and the work area left clean." },
      { title: "Ductwork checked", body: "We look for restrictions that make airflow loud and fix what we find." },
      { title: "$1,450 match and Enbridge rebate", body: "We apply our credit and file your Enbridge Gas paperwork." },
      { title: "Smile Guarantee", body: "A year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: {
      title: "What it costs in Spanish Fork",
      body: "Heat pump and gas furnace systems start at $9,990 after incentives, including our $1,450 match. Your price depends on your home’s size and the efficiency you choose.",
      points: ["From $9,990 after incentives", "$1,450 rebate match from Eco Home", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"],
    },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives including Eco Home's $1,450 match" },
    updated: "2026-11-13",
    job: {
      customer: "Greg P.",
      title: "A 24-year-old system loud enough to drown out the TV. Greg’s Spanish Fork home is now quiet and even.",
      problem: "Every time Greg’s old furnace or AC came on, he had to turn up the TV to hear over the airflow. He’d put off replacing the 24-year-old system because he didn’t want a crew making a mess of the house.",
      solution: "We installed a variable-speed heat pump with a variable-speed gas furnace. The crew wore shoe covers on every trip inside, kept Greg posted through the day and left no mess behind.",
      result: "A system that’s nearly silent compared to the old one, and every room at the same temperature.",
    },
    faqs: [
      {
        q: "Do I get the Rocky Mountain Power rebate in Spanish Fork?",
        a: "Spanish Fork City Power & Light customers can’t get the Wattsmart rebate, so we credit you the same $1,450 ourselves. The Enbridge Gas ThermWise rebate is separate and still yours: $700 or $1,000, depending on the new furnace’s efficiency.",
      },
      {
        q: "Will a heat pump keep my house warm on below-zero nights?",
        a: "With a gas furnace backup, yes. The furnace takes over when it gets that cold, so the house stays warm.",
      },
      {
        q: "How much quieter is a variable-speed system?",
        a: "Much quieter. It runs at low speed most of the time, so you hear a soft hum instead of a rush of air when it starts.",
      },
      {
        q: "Will the install make a mess?",
        a: "No. Our crew wears shoe covers, protects floors and cleans up before leaving. Most installs are finished in one day.",
      },
      {
        q: "Do you offer financing in Spanish Fork?",
        a: "Yes. Ask about 0% interest for 12 months when you get your price; longer terms are available too.",
      },
    ],
  },

  // ================================================================ SPRINGVILLE
  // ---------------------------------------------------------------- FURNACE REPAIR
  {
    city: "springville",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Springville, UT, Open 24/7",
    metaDescription:
      "Springville furnace repair, open 24/7. Clanking, no heat or a furnace that won’t stay lit: $129 diagnostic and the repair price before any work.",
    h1: "Furnace repair in Springville, UT",
    heroSub:
      "Furnace clanking, short cycling or not heating at all? We’re open 24/7 in Springville, with a $129 diagnostic and an upfront price before any repair.",
    heroImg: { src: "/images/aciq-furnace-basement-install.jpg", alt: "Gas furnace in a basement utility room", pos: "50% 40%" },
    primaryCta: "BOOK",
    intro: [
      "A furnace that clanks, rattles or booms is often telling you it’s close to failing. In Springville, where plenty of basement furnaces are 20 to 30 years old, we hear those sounds a lot.",
      "We repair every major furnace brand. You get a clear explanation of what’s wrong, the price before we start, and an honest answer about whether the repair makes sense.",
    ],
    factorsTitle: "Why Springville furnaces give out",
    factors: [
      {
        title: "Old basement furnaces",
        body: "Many Springville homes still run a furnace that’s 20 or more years old. Motors, bearings and heat exchangers wear out with age, and the noise usually comes first.",
      },
      {
        title: "Months of heating",
        body: "A Springville furnace runs from late fall into spring. Every season adds thousands of starts, and each one wears on the ignitor, inducer motor and blower.",
      },
      {
        title: "Ductwork from another era",
        body: "Older homes often have ducts and returns that are too small for the furnace now installed, which makes it run hot and trip its safety limit.",
      },
    ],
    listTitle: "Furnace repairs we make in Springville",
    listIntro: "Most are fixed on the first visit.",
    list: [
      { title: "Clanking or banging", body: "A loose blower wheel, a failing motor mount or delayed ignition. We find the source." },
      { title: "No heat", body: "We test each part of the startup sequence and replace only what failed." },
      { title: "Shuts off on its own", body: "Common causes are a dirty flame sensor, a clogged filter or poor return air." },
      { title: "Weak airflow upstairs", body: "We check the blower, filter and duct balance to the second floor." },
      { title: "Burning or dusty smell", body: "Normal briefly at the first start of the season; if it lingers, we inspect it." },
    ],
    price: {
      title: "Up-front pricing",
      body: "Diagnostics are $129. You see the repair price and decide before any work.",
      points: ["$129 diagnostic", "Price before repair", "Essential Care Plan members save 10%", "Smile Guarantee"],
    },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "When to stop repairing",
    decide: [
      "Repair a furnace under about 15 years old when the cost is a small part of a new one.",
      "For a furnace 20 years or older that needs a major repair, compare replacement first. Springville is on city power, so we match the $1,450 Rocky Mountain Power rebate ourselves on every heat pump we install. Paired with a new gas furnace and Enbridge Gas’s $700 to $1,000, that’s at least $2,150, guaranteed. A furnace alone starts at $3,990, installed in one day.",
    ],
    safety: {
      title: "Gas smell? Leave first.",
      body: "If you smell rotten eggs, get everyone outside without touching switches or appliances. Call Enbridge Gas at 1-800-767-1689 or 911 from outside. Call us after the gas company says it’s safe.",
    },
    faqs: [
      {
        q: "Can you come for a furnace repair in Springville tonight?",
        a: "We’re open 24/7. Call 801-396-0019 or book online.",
      },
      {
        q: "How much does furnace repair cost in Springville?",
        a: "The diagnostic is $129, then an upfront repair price. Small parts are inexpensive; motors cost more. Essential Care Plan members save 10%.",
      },
      {
        q: "Is a clanking furnace dangerous?",
        a: "The clank is usually mechanical, like a loose blower wheel or worn motor, but booming at startup can mean delayed ignition, which can damage the furnace. Have it checked soon either way.",
      },
      {
        q: "Why does my furnace smell when it first turns on?",
        a: "Dust burning off the burners and heat exchanger after summer is normal for a few minutes. A smell that lasts, or smells electrical, needs an inspection.",
      },
      {
        q: "My furnace is 26 years old. Should I repair it?",
        a: "Usually only for a small part. At that age, a new heat pump and gas furnace system, with our $1,450 match and Enbridge rebates, is often the better value.",
      },
    ],
  },

  // ---------------------------------------------------------------- AC REPAIR
  {
    city: "springville",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Springville, UT, Open 24/7",
    metaDescription:
      "Springville AC repair, open 24/7. Warm upstairs, no cooling or a noisy unit: $129 diagnostic and a clear repair price before we start.",
    h1: "AC repair in Springville, UT",
    heroSub:
      "Upstairs too warm or the AC blowing warm air? We’re open 24/7 for Springville, with a $129 diagnostic and the repair price before any work.",
    heroImg: { src: "/images/tech-heat-pump-brick.jpg", alt: "Technician servicing an outdoor unit beside a brick home", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "In a lot of Springville homes, the AC isn’t completely broken; it just can’t keep the upstairs comfortable anymore. Sometimes that’s a failing part, and sometimes it’s an old system or ducts that were never sized for cooling.",
      "We repair all major AC and heat pump brands, and we explain what we find before quoting the repair.",
    ],
    factorsTitle: "Why Springville ACs fall short",
    factors: [
      {
        title: "Upstairs bedrooms",
        body: "Two-story homes put the bedrooms where the heat collects. A worn or single-speed AC is the first to fall behind there.",
      },
      {
        title: "Older systems",
        body: "Many Springville ACs are past 20 years old. Capacitors and contactors fail more often, and coils lose efficiency.",
      },
      {
        title: "Ducts sized for heat",
        body: "In older homes, cooling was added to ducts designed for a furnace. Upstairs rooms often get too little cool air as a result.",
      },
    ],
    listTitle: "AC repairs we handle in Springville",
    listIntro: "Most are completed in one visit.",
    list: [
      { title: "Upstairs won’t cool", body: "We measure airflow, refrigerant charge and return air upstairs." },
      { title: "Warm air", body: "A capacitor, contactor, fan motor or refrigerant leak, most often." },
      { title: "Outdoor unit humming, not running", body: "Usually a failed capacitor. Turn it off and call." },
      { title: "Water around the furnace", body: "A clogged condensate line or failed pan. We clear it and check for damage." },
      { title: "Noisy outdoor unit", body: "Worn fan motors and loose panels get louder over time." },
    ],
    price: {
      title: "Know the cost first",
      body: "The AC diagnostic is $129. You approve the repair price before we start.",
      points: ["$129 diagnostic", "Upfront repair price", "10% off for Essential Care Plan members", "Smile Guarantee"],
    },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Fix it or move to a heat pump?",
    decide: [
      "An AC under about 12 years old with a reasonable repair is worth fixing.",
      "If it’s older or needs a compressor, compare a heat pump paired with a gas furnace. Springville homes don’t get the Rocky Mountain Power rebate, so we match it with a $1,450 credit from Eco Home on every heat pump we install.",
    ],
    faqs: [
      {
        q: "How fast can you repair my AC in Springville?",
        a: "We’re open 24/7, and most AC repairs are finished in one visit. Call 801-396-0019 or book online.",
      },
      {
        q: "What does AC repair cost in Springville?",
        a: "The diagnostic is $129, then you get an upfront price. A capacitor costs far less than a leak repair or compressor. Essential Care Plan members save 10%.",
      },
      {
        q: "Can you fix a hot upstairs without replacing everything?",
        a: "Sometimes. If the problem is a dirty coil, low refrigerant or a blocked return, a repair helps. If the ducts or the system itself are the limit, we’ll show you what it would take.",
      },
      {
        q: "Why is water pooling near my furnace in summer?",
        a: "The AC’s condensate line is probably clogged, or the drain pan has cracked. Turn the AC off to limit water damage and call us.",
      },
      {
        q: "Are there heat pump rebates in Springville?",
        a: "Yes. We match the $1,450 Rocky Mountain Power rebate with our own credit, since Springville is on city power, and Enbridge Gas adds $700 to $1,000 with a gas furnace.",
      },
    ],
  },

  // ---------------------------------------------------------------- HEAT PUMP INSTALLATION
  {
    city: "springville",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Springville, UT",
    metaDescription:
      "Dual-fuel heat pump systems for Springville from $9,990 after incentives. Springville is on city power, so we match the $1,450 rebate. Permit included.",
    h1: "Heat pump installation in Springville, UT",
    heroSub:
      "A variable-speed heat pump and gas furnace bring a Springville home’s upstairs back in line with the rest of the house, and run quietly enough to forget about.",
    heroImg: { src: "/images/tech-portrait.jpg", alt: "Smiling Eco Home technician beside a new outdoor heat pump", pos: "60% 35%" },
    primaryCta: "INSTANT",
    intro: [
      "A dual-fuel system pairs a variable-speed heat pump with a gas furnace. The heat pump cools all summer and heats on mild days; the furnace takes over when it’s cold. The system chooses between them automatically.",
      "We’ve helped more than 2,000 Utah homeowners with their heating and cooling. Each Springville install includes a load calculation, the city permit and inspection, removal of the old equipment, airflow balancing and the rebate paperwork, including our $1,450 match.",
    ],
    factorsTitle: "Why dual fuel fits Springville",
    factors: [
      {
        title: "A rebate match for city power",
        body: "Springville homes are on Springville City Power, which isn’t part of Rocky Mountain Power’s Wattsmart program. We match the $1,450 rebate with our own credit, and Enbridge Gas adds $700 to $1,000: $2,150 to $2,450, guaranteed.",
      },
      {
        title: "Upstairs comfort",
        body: "Variable-speed equipment runs longer at lower speed, which keeps air moving to the second floor. We also balance the airflow during the install.",
      },
      {
        title: "Quiet in every room",
        body: "Low-speed operation and gentle startups replace the clanks and blasts of an old single-speed system.",
      },
    ],
    listTitle: "Included in every Springville install",
    listIntro: "One price for all of it.",
    list: [
      { title: "Load calculation", body: "Sized to your house, not to the old equipment." },
      { title: "Springville permit", body: "Not every HVAC company pulls permits. We do on every job, and it’s included." },
      { title: "Airflow balanced to each floor", body: "We set dampers and blower speed so the upstairs gets its share." },
      { title: "Sealed duct connections", body: "Every connection at the new equipment is sealed so air goes where it should." },
      { title: "$1,450 match and Enbridge rebate", body: "Applied and filed for you." },
      { title: "Smile Guarantee", body: "One year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: {
      title: "Springville pricing",
      body: "Heat pump and gas furnace systems start at $9,990 after incentives, including our $1,450 match. Your price depends on your home’s size and the efficiency you choose.",
      points: ["From $9,990 after incentives", "$1,450 rebate match from Eco Home", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"],
    },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives including Eco Home's $1,450 match" },
    updated: "2026-11-13",
    job: {
      customer: "Sarah T.",
      title: "A 26-year-old system that clanked in the basement and left the upstairs uncomfortable. Sarah’s Springville home is now quiet and even.",
      problem: "Sarah’s old system clanked loudly in the basement and never kept the upstairs bedrooms comfortable, summer or winter.",
      solution: "We installed a variable-speed heat pump and variable-speed gas furnace, balanced airflow to the second floor, sealed every duct connection and showed Sarah how the dual-fuel system switches on its own.",
      result: "A system that hums quietly in the background, without disturbing dinner or bedtime, and comfortable bedrooms upstairs.",
    },
    faqs: [
      {
        q: "Do I get the Rocky Mountain Power rebate in Springville?",
        a: "Not directly. Springville City Power customers aren’t in the Wattsmart program, so Eco Home pays the $1,450 as a credit instead. Your Enbridge Gas ThermWise rebate still applies: $700 if the new furnace is 80% efficient, $1,000 if it’s 96% or higher.",
      },
      {
        q: "Will a heat pump help my upstairs bedrooms?",
        a: "Yes, especially with airflow balancing. A variable-speed system keeps air moving to the second floor instead of shutting off before the bedrooms catch up.",
      },
      {
        q: "Does a heat pump work in Springville’s winters?",
        a: "Paired with a gas furnace, yes. The heat pump handles the mild days, and the furnace takes the cold nights.",
      },
      {
        q: "How long will my Springville install take?",
        a: "One day for most homes, from removing the old equipment to the final walkthrough.",
      },
      {
        q: "Can I spread out the cost?",
        a: "Yes. You can choose 0% interest for 12 months or a longer-term plan. We’ll go over both when we price your home.",
      },
    ],
  },

  // ================================================================ HIGHLAND
  {
    city: "highland",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Highland, UT, Open 24/7",
    metaDescription:
      "Highland furnace repair from our shop down the road in American Fork. Open 24/7, a $129 diagnostic and the repair price before any work.",
    h1: "Furnace repair in Highland, UT",
    heroSub:
      "Furnace out in Highland? We’re just down the road in American Fork and open 24/7, with a $129 diagnostic and the price before any repair.",
    heroImg: { src: "/images/furnace-tech-uniform.jpg", alt: "Eco Home technician beside a gas furnace", pos: "50% 35%" },
    primaryCta: "BOOK",
    intro: [
      "Highland homes are big, and their furnaces work hard to heat two floors and a basement all winter. When one fails, our shop in American Fork is only a few minutes away.",
      "We repair every major furnace brand, including the high-efficiency models common in Highland’s larger homes. You see the price before we start.",
    ],
    factorsTitle: "What Highland furnaces are up against",
    factors: [
      { title: "Lots of square footage", body: "A large home asks a furnace to move a lot of air. Weak blowers, dirty filters and undersized returns all show up first in the rooms farthest from it." },
      { title: "A long heating season", body: "From late fall into spring, a Highland furnace starts thousands of times, and each start wears on the ignitor, inducer motor and blower." },
      { title: "Two furnaces in some homes", body: "Some larger Highland homes have a furnace for each level. We service both and check that they aren’t working against each other." },
    ],
    listTitle: "Furnace repairs in Highland",
    listIntro: "Many are finished on the first visit.",
    list: [
      { title: "No heat on one floor", body: "Often a duct damper, a zoning problem or a second furnace that has failed. We trace it." },
      { title: "Ignition failures", body: "We test the ignitor, flame sensor and gas valve and replace only what’s bad." },
      { title: "Condensate shutdowns", body: "High-efficiency furnaces stop if their drain clogs or freezes. We clear and protect it." },
      { title: "Noisy blower", body: "Worn motor bearings or a dirty blower wheel. Fixing it early is cheaper." },
      { title: "Furnace cycles on and off", body: "A dirty flame sensor, a clogged filter or an oversized unit." },
    ],
    price: { title: "Price before the repair", body: "The diagnostic is $129. You approve the repair price before any work.", points: ["$129 diagnostic", "Upfront price", "Essential Care Plan members save 10%", "Smile Guarantee"] },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or replace?",
    decide: [
      "Fix a furnace under about 15 years old when the repair is reasonable.",
      "If it’s older and needs a major part, compare replacement. Highland is on Rocky Mountain Power, so a heat pump with a new gas furnace gets the $1,450 Wattsmart rebate plus $700 to $1,000 from Enbridge Gas, at least $2,150 guaranteed. A furnace alone starts at $3,990, installed in one day.",
    ],
    safety: { title: "Gas smell? Get out first.", body: "Leave with everyone and don’t touch switches or appliances. Call Enbridge Gas at 1-800-767-1689 or 911 from outside, then call us when it’s safe." },
    faqs: [
      { q: "How fast can you get to Highland?", a: "Our shop is a few minutes away in American Fork, and we’re open 24/7. Call 801-396-0019 or book online." },
      { q: "How much does furnace repair cost in Highland?", a: "$129 for the diagnostic, then an upfront repair price. Essential Care Plan members save 10%." },
      { q: "My home has two furnaces. Can you service both?", a: "Yes. We’ll check each one and make sure they’re set up to share the load properly." },
      { q: "Why is one floor always colder?", a: "Usually airflow: returns, ducts or dampers. In larger homes it can also be a zoning issue. We measure before suggesting anything." },
      { q: "Should I replace a 23-year-old furnace?", a: "For a major repair, usually yes, especially with $2,150 or more in rebates on a heat pump and gas furnace system." },
    ],
  },
  {
    city: "highland",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Highland, UT, Open 24/7",
    metaDescription:
      "Highland AC repair, open 24/7. Hot upstairs, warm air or a loud unit by the patio: $129 diagnostic and the repair price before work.",
    h1: "AC repair in Highland, UT",
    heroSub:
      "Upstairs bedrooms warm and the outdoor unit rattling? We’re minutes from Highland and open 24/7, with a $129 diagnostic and an upfront price.",
    heroImg: { src: "/images/tech-heat-pump-install.jpg", alt: "Technician connecting gauges to an outdoor unit", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "In a big Highland home, the AC has a long way to push cool air. As it ages, the upstairs is usually the first place you notice, followed by a louder outdoor unit.",
      "We repair all major AC and heat pump brands, and you get the price before we begin.",
    ],
    factorsTitle: "Why Highland ACs struggle",
    factors: [
      { title: "Long duct runs", body: "Rooms far from the air handler need strong, steady airflow. A weak blower or leaky duct leaves them warm." },
      { title: "Aging second-round equipment", body: "Many Highland homes are on their second AC, and those units are now reaching 20 years old." },
      { title: "Yard debris", body: "Big yards and mature trees put grass clippings and leaves into outdoor coils." },
    ],
    listTitle: "AC repairs we make in Highland",
    listIntro: "Most are completed in one visit.",
    list: [
      { title: "Upstairs won’t cool", body: "We check airflow, refrigerant charge and the upstairs returns." },
      { title: "Rattling outdoor unit", body: "Loose panels, a failing fan motor or a worn compressor mount." },
      { title: "Warm air", body: "Commonly a capacitor, contactor or refrigerant leak." },
      { title: "AC won’t start", body: "A breaker, disconnect fuse, thermostat or condensate float switch." },
      { title: "Iced lines", body: "Low airflow or low refrigerant. Turn it off and call." },
    ],
    price: { title: "Upfront AC pricing", body: "AC diagnostics are $129. You get the repair price first.", points: ["$129 diagnostic", "Price before repair", "10% off for Essential Care Plan members", "Smile Guarantee"] },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Fix it or replace it?",
    decide: [
      "Under about 12 years old with a reasonable repair, fix it.",
      "If it’s older or needs a compressor, compare a heat pump paired with a gas furnace. In Highland it gets the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas.",
    ],
    faqs: [
      { q: "Can you fix my AC in Highland today?", a: "We’re a few minutes away and open 24/7. Most repairs are done in one visit. Call 801-396-0019." },
      { q: "What does AC repair cost in Highland?", a: "The diagnostic is $129, then an upfront price. Capacitors are inexpensive; compressors and leaks cost more. Essential Care Plan members save 10%." },
      { q: "Why is my outdoor unit rattling?", a: "Loose panels or fan blades, a failing fan motor, or a compressor that’s wearing out. Have it checked before a small problem gets bigger." },
      { q: "Why are the bedrooms over the garage so warm?", a: "They’re usually at the end of the longest duct run with a hot garage below. We check airflow to those rooms and can often improve it." },
      { q: "Is a heat pump quieter than my AC?", a: "Yes. A variable-speed heat pump runs at low output most of the time, so it’s much quieter next to a patio." },
    ],
  },
  {
    city: "highland",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Highland, UT",
    metaDescription:
      "Dual-fuel heat pump systems for Highland homes from $9,990 after incentives, with $2,150+ in Rocky Mountain Power and Enbridge rebates.",
    h1: "Heat pump installation in Highland, UT",
    heroSub:
      "A variable-speed heat pump and gas furnace keep a big Highland home even across every floor, quietly, with $2,150 or more in rebates.",
    heroImg: { src: "/images/amana-system-side-eco-home-van.jpg", alt: "Amana heat pump and furnace beside an Eco Home van", pos: "55% 55%" },
    primaryCta: "INSTANT",
    intro: [
      "For a large Highland home, a dual-fuel system is often the best fit: a variable-speed heat pump handles cooling and mild-weather heating, and a gas furnace takes over on cold nights. Both run at low speed most of the time, which is what keeps three levels even.",
      "We’ve helped more than 2,000 Utah homeowners. Every Highland install includes a load calculation, the city permit, removal of the old equipment and the rebate filing.",
    ],
    factorsTitle: "Why Highland homes choose dual fuel",
    factors: [
      { title: "Comfort on every floor", body: "Longer, slower run times mix the air between the basement, main floor and upstairs." },
      { title: "Quiet by the patio", body: "Variable-speed outdoor units are far quieter than old single-speed ACs." },
      { title: "Rebates", body: "$1,450 from Rocky Mountain Power and $700 to $1,000 from Enbridge Gas: $2,150 to $2,450, guaranteed." },
    ],
    listTitle: "Included in a Highland install",
    listIntro: "All in one price.",
    list: [
      { title: "Load calculation", body: "Sized for your home’s square footage and levels." },
      { title: "Highland permit", body: "Not every HVAC company pulls permits. We do on every job." },
      { title: "Floors protected", body: "Shoe covers and runners, important with hardwood floors." },
      { title: "Airflow set for each level", body: "We balance the system so every floor gets its share." },
      { title: "Rebate paperwork", body: "Rocky Mountain Power and Enbridge Gas, filed for you." },
      { title: "Smile Guarantee", body: "One year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: { title: "Highland pricing", body: "Heat pump and gas furnace systems start at $9,990 after incentives. Your price depends on your home’s size and the efficiency you choose.", points: ["From $9,990 after incentives", "$1,450 Rocky Mountain Power rebate", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"] },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-11-13",
    job: {
      customer: "Rachel S.",
      title: "A rattling 23-year-old system beside the patio. Rachel and Matt’s Highland home is now quiet and even.",
      problem: "The old AC rattled next to the back patio, the upstairs bedrooms were uncomfortable, and they’d put off replacing it to avoid pushy sales and a mess on their hardwood floors.",
      solution: "A variable-speed heat pump with a variable-speed gas furnace, installed with shoe covers and runners throughout the house and a clean mechanical room at the end.",
      result: "A quiet hum instead of a full-blast start, a peaceful patio and the same temperature on both floors.",
    },
    faqs: [
      { q: "What rebates apply in Highland?", a: "Rocky Mountain Power’s $1,450 Wattsmart rebate on every heat pump we install, plus Enbridge Gas ThermWise: $700 with an 80% furnace or $1,000 with a 96%+ furnace." },
      { q: "Can one heat pump handle a big Highland home?", a: "Most of the time, when it’s sized with a load calculation. For very large homes we’ll tell you if two systems or zoning would work better." },
      { q: "Will you protect our floors?", a: "Yes. Shoe covers on every trip inside and runners through the work path." },
      { q: "How long does it take?", a: "Most installs are done in a day." },
      { q: "Is there financing?", a: "Yes, including 0% interest for 12 months." },
    ],
  },

  // ================================================================ LINDON
  {
    city: "lindon",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Lindon, UT, Open 24/7",
    metaDescription:
      "Lindon furnace repair from our American Fork shop a few minutes away. Open 24/7, a $129 diagnostic and an upfront repair price.",
    h1: "Furnace repair in Lindon, UT",
    heroSub:
      "No heat in Lindon? We’re a few minutes away and open 24/7. The diagnostic is $129, and you get the repair price before we start.",
    heroImg: { src: "/images/american-fork-furnace-repair-lennox.jpg", alt: "Gas furnace opened up for a repair", pos: "50% 45%" },
    primaryCta: "BOOK",
    intro: [
      "Many Lindon furnaces are 20 years old or more, and they usually give warning before they fail: louder startups, rumbling vents or heat that comes and goes.",
      "We repair every major furnace brand. You get the cause, the price and an honest opinion on whether to repair or replace.",
    ],
    factorsTitle: "Why Lindon furnaces wear out",
    factors: [
      { title: "Age", body: "At 20-plus years, inducer motors, blower motors and control boards fail more often." },
      { title: "Basement installs on larger homes", body: "One basement furnace often heats a big rambler plus its basement, with long duct runs to the far rooms." },
      { title: "Clogged filters", body: "A clogged filter makes the furnace overheat and shut off. It’s the most common no-heat call we get." },
    ],
    listTitle: "Furnace repairs in Lindon",
    listIntro: "Usually fixed on the first trip.",
    list: [
      { title: "Roaring vents", body: "A blower running too fast for the ducts, or a dirty blower wheel. We adjust or clean it." },
      { title: "No ignition", body: "Ignitor, flame sensor or gas valve. We test each." },
      { title: "Heat comes and goes", body: "Often a dirty flame sensor or a limit switch tripping from poor airflow." },
      { title: "Loud startup", body: "Delayed ignition or a failing inducer. Worth fixing soon." },
      { title: "Thermostat problems", body: "Wiring or settings that keep the furnace from running right." },
    ],
    price: { title: "Price comes first", body: "We charge $129 for the diagnostic and price the repair before any work.", points: ["$129 diagnostic", "Price before work", "Essential Care Plan members save 10%", "Smile Guarantee"] },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Is a repair worth it?",
    decide: [
      "Under about 15 years old with a modest repair, yes.",
      "At 20-plus years with a major repair, compare replacement. A heat pump paired with a new gas furnace in Lindon gets the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas. A furnace alone starts at $3,990, installed in one day.",
    ],
    safety: { title: "Smell gas? Leave the house.", body: "Get everyone out without using switches or appliances. From outside, call Enbridge Gas at 1-800-767-1689 or 911. Call us once it’s safe." },
    faqs: [
      { q: "Are you open nights for Lindon furnace repair?", a: "Yes, 24/7. Call 801-396-0019 or book online." },
      { q: "How much is furnace repair in Lindon?", a: "$129 for the diagnostic, then an upfront price. Essential Care Plan members save 10%." },
      { q: "Can you make my furnace quieter?", a: "Sometimes. Cleaning the blower wheel or adjusting the blower speed helps. An old single-speed furnace will always be louder than a variable-speed one." },
      { q: "Why does my furnace keep shutting off?", a: "Check the filter first. If it’s clean, a dirty flame sensor or a limit switch is the likely cause." },
      { q: "Should I replace a 25-year-old furnace?", a: "For anything beyond a small repair, it’s usually time, especially with $2,150 or more in rebates on a dual-fuel system." },
    ],
  },
  {
    city: "lindon",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Lindon, UT, Open 24/7",
    metaDescription:
      "Lindon AC repair, open 24/7. Stuffy upstairs, warm air or a noisy unit: $129 diagnostic and a clear price before we fix anything.",
    h1: "AC repair in Lindon, UT",
    heroSub:
      "Stuffy bedrooms or warm air from the vents? We’re a few minutes from Lindon and open 24/7, with a $129 diagnostic and an upfront repair price.",
    heroImg: { src: "/images/old-ac-unit.jpg", alt: "Older outdoor AC unit beside a home", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "When a Lindon AC starts to fail, it usually shows up as stuffy upstairs rooms first, then warm air at the vents, then a unit that won’t start at all.",
      "We repair all major AC and heat pump brands and price the repair before we begin.",
    ],
    factorsTitle: "Why Lindon ACs fall behind",
    factors: [
      { title: "Older units", body: "Many Lindon ACs are past 20 years old, with tired electrical parts and coils that have lost efficiency." },
      { title: "Upstairs heat", body: "In two-story homes, heat rises and a single-speed AC shuts off before the upstairs catches up." },
      { title: "Yard and field dust", body: "Larger lots and open space put dust and clippings into outdoor coils." },
    ],
    listTitle: "AC repairs in Lindon",
    listIntro: "Most are done in one visit.",
    list: [
      { title: "Stuffy upstairs", body: "We measure airflow and refrigerant and check the upstairs returns." },
      { title: "Warm air", body: "Usually a capacitor, contactor, fan motor or refrigerant leak." },
      { title: "Unit hums, won’t run", body: "A failed capacitor, most often. Turn it off and call." },
      { title: "Water leak inside", body: "A clogged condensate line or cracked pan." },
      { title: "Dirty coil", body: "We clean it so the system can cool properly." },
    ],
    price: { title: "No-surprise pricing", body: "The diagnostic is $129, and you approve the repair price before we start.", points: ["$129 diagnostic", "Upfront repair price", "10% off for Essential Care Plan members", "Smile Guarantee"] },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or upgrade?",
    decide: [
      "Under about 12 years old with a reasonable repair, fix it.",
      "Older, or needing a compressor? Compare a heat pump paired with a gas furnace. In Lindon it qualifies for the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas.",
    ],
    faqs: [
      { q: "How quickly can you fix my AC in Lindon?", a: "We’re a few minutes away, open 24/7, and finish most repairs in one visit." },
      { q: "What does AC repair cost in Lindon?", a: "The diagnostic is $129, then an upfront price. Essential Care Plan members save 10%." },
      { q: "Why are my bedrooms stuffy even with the AC on?", a: "Usually low airflow upstairs, from small returns, leaky ducts or a weak blower. We check each." },
      { q: "My outdoor unit is humming but not running. What now?", a: "Turn the AC off at the thermostat; it’s likely a capacitor. Running it that way can damage the compressor." },
      { q: "Is replacing my AC with a heat pump worth it?", a: "For most Lindon homes, yes. It cools more evenly and quietly, heats much of the winter and qualifies for at least $2,150 in rebates with a gas furnace." },
    ],
  },
  {
    city: "lindon",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Lindon, UT",
    metaDescription:
      "Heat pump + gas furnace systems for Lindon homes from $9,990 after incentives, with $2,150+ in Rocky Mountain Power and Enbridge rebates.",
    h1: "Heat pump installation in Lindon, UT",
    heroSub:
      "A variable-speed heat pump and gas furnace end the roaring vents and stuffy bedrooms in a Lindon home, with $2,150 or more in rebates.",
    heroImg: { src: "/images/heat-pump-brick-home.jpg", alt: "New outdoor heat pump beside a brick home", pos: "50% 55%" },
    primaryCta: "INSTANT",
    intro: [
      "A dual-fuel system pairs a variable-speed heat pump with a gas furnace. The heat pump cools and handles mild-weather heating; the furnace covers the cold nights. Because both run at low speed most of the time, they’re far quieter than the system they replace.",
      "We’ve helped more than 2,000 Utah homeowners. Every Lindon install includes a load calculation, the city permit, duct sealing at the equipment, airflow balancing and the rebate paperwork.",
    ],
    factorsTitle: "Why Lindon homes choose dual fuel",
    factors: [
      { title: "Quiet vents", body: "Variable-speed blowers start slowly and move air gently, so no more pausing the movie." },
      { title: "Even temperatures", body: "Longer run times at low speed keep the upstairs and main floor closer together." },
      { title: "Rebates", body: "Rocky Mountain Power pays $1,450 and Enbridge Gas $700 to $1,000: $2,150 to $2,450, guaranteed." },
    ],
    listTitle: "What a Lindon install includes",
    listIntro: "One price.",
    list: [
      { title: "Load calculation", body: "Sized to your home, not the old unit." },
      { title: "Lindon permit", body: "Not every HVAC company pulls permits. We do on every job." },
      { title: "Sealed duct connections", body: "So the air goes where it should, quietly." },
      { title: "Balanced airflow", body: "Set for each floor before we leave." },
      { title: "Thermostat walkthrough", body: "We show you how the dual-fuel switchover works." },
      { title: "Smile Guarantee", body: "One year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: { title: "Lindon pricing", body: "Heat pump and gas furnace systems start at $9,990 after incentives, depending on your home’s size and the efficiency you choose.", points: ["From $9,990 after incentives", "$1,450 Rocky Mountain Power rebate", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"] },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-11-13",
    job: {
      customer: "Trevor K.",
      title: "A 25-year-old system that roared through the floor vents. Trevor’s Lindon home is now quiet and even.",
      problem: "The old system was so loud through the floor vents that the family paused movies when it started, and the upstairs was stuffy all year.",
      solution: "We installed a variable-speed heat pump and gas furnace, sealed the duct connections, balanced the airflow and set up the smart thermostat with Trevor.",
      result: "Near-silent operation, no hot or cold spots, and automatic switching to gas when it’s colder.",
    },
    faqs: [
      { q: "What rebates can I get in Lindon?", a: "Rocky Mountain Power’s $1,450 Wattsmart rebate on every heat pump we install, plus $700 or $1,000 from Enbridge Gas ThermWise depending on the furnace’s efficiency." },
      { q: "How much quieter will it be?", a: "Much quieter. Variable-speed equipment runs at low output most of the day and ramps up gently." },
      { q: "Will my upstairs finally be comfortable?", a: "That’s the main reason Lindon homeowners make the switch. We also balance airflow and check the upstairs returns." },
      { q: "How long does installation take?", a: "One day for most homes." },
      { q: "Can I finance it?", a: "Yes. 0% interest for 12 months is available, along with longer terms." },
    ],
  },

  // ================================================================ PAYSON
  {
    city: "payson",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Payson, UT, Open 24/7",
    metaDescription:
      "Payson furnace repair, open 24/7. Clanking, no heat or weak airflow: $129 diagnostic and the repair price before any work. Call 801-396-0019.",
    h1: "Furnace repair in Payson, UT",
    heroSub:
      "Furnace clanking or not heating in Payson? We’re open 24/7, with a $129 diagnostic and the repair price before any work.",
    heroImg: { src: "/images/furnace-install.jpg", alt: "Gas furnace in a utility room", pos: "50% 40%" },
    primaryCta: "BOOK",
    intro: [
      "A Payson furnace that clanks at night or barely reaches the back bedrooms is usually an older unit wearing out. We find out exactly what’s failing.",
      "We repair all major furnace brands and price the repair before we start.",
    ],
    factorsTitle: "What Payson furnaces deal with",
    factors: [
      { title: "Age", body: "Many Payson furnaces are 20 years old or more. Blowers, inducers and ignitors fail more often at that age." },
      { title: "Long duct runs", body: "Single-level homes push air a long way to the back bedrooms, which is hard on a weak blower." },
      { title: "Winter at the south end of the valley", body: "Cold nights from fall through spring mean long run times and thousands of starts each season." },
    ],
    listTitle: "Furnace repairs in Payson",
    listIntro: "Most are fixed on the first trip.",
    list: [
      { title: "Clanking or banging", body: "A loose blower wheel, worn motor mount or delayed ignition." },
      { title: "Weak heat in back rooms", body: "Blower, filter, ducts or returns. We measure before replacing anything." },
      { title: "No heat", body: "We test the startup sequence step by step." },
      { title: "Short cycling", body: "Dirty flame sensor, clogged filter or an oversized furnace." },
      { title: "Burning smell that won’t go away", body: "We inspect for overheating parts or wiring." },
    ],
    price: { title: "Upfront furnace pricing", body: "The diagnostic is $129. You get the repair price before any work.", points: ["$129 diagnostic", "Price before repair", "Essential Care Plan members save 10%", "Smile Guarantee"] },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair, or time for new?",
    decide: [
      "Repair a furnace under about 15 years old when the cost is reasonable.",
      "For an older furnace with a major repair, compare replacement. Payson is on city power, so we match the $1,450 Rocky Mountain Power rebate ourselves on every heat pump we install. With Enbridge Gas’s $700 to $1,000, a heat pump and new gas furnace get at least $2,150. A furnace alone starts at $3,990, installed in one day.",
    ],
    safety: { title: "If you smell gas", body: "Leave the house with everyone and don’t use switches or appliances. Call Enbridge Gas at 1-800-767-1689 or 911 from outside, then call us when it’s safe." },
    faqs: [
      { q: "Do you come to Payson for emergency furnace repair?", a: "Yes, we’re open 24/7. Call 801-396-0019 or book online." },
      { q: "How much does furnace repair cost in Payson?", a: "$129 for the diagnostic, then an upfront price. Essential Care Plan members save 10%." },
      { q: "Why does my furnace clank at night?", a: "Most often a loose blower wheel or worn motor. A boom at startup can be delayed ignition, which should be checked soon." },
      { q: "Why is the back of my house cold?", a: "It’s the end of the duct line. We check the blower, the filter, the ducts and the returns." },
      { q: "Is a 22-year-old furnace worth fixing?", a: "For small parts, maybe. For major ones, a dual-fuel system with our $1,450 match and Enbridge rebates is usually the better value." },
    ],
  },
  {
    city: "payson",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Payson, UT, Open 24/7",
    metaDescription:
      "Payson AC repair, open 24/7. Warm air, a noisy unit or rooms that won’t cool: $129 diagnostic and a repair price before we start.",
    h1: "AC repair in Payson, UT",
    heroSub:
      "AC blowing warm or the back rooms never cooling? We’re open 24/7 for Payson, with a $129 diagnostic and an upfront repair price.",
    heroImg: { src: "/images/tech-heat-pump-brick.jpg", alt: "Technician servicing an outdoor unit beside a brick home", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "Payson summers are hot, and an older AC shows it in the rooms farthest from the air handler first. We find out whether it’s a part, a refrigerant problem or the ducts.",
      "We repair all major AC and heat pump brands and price every repair before we start.",
    ],
    factorsTitle: "Why Payson ACs fall short",
    factors: [
      { title: "Older equipment", body: "ACs past 20 years have worn electrical parts and corroded coils." },
      { title: "Far rooms", body: "Long duct runs mean the back bedrooms get the least cool air." },
      { title: "Dust", body: "Fields and open space around town coat outdoor coils with dust." },
    ],
    listTitle: "AC repairs in Payson",
    listIntro: "Most are completed in one visit.",
    list: [
      { title: "Back rooms stay warm", body: "We check airflow, ducts and refrigerant charge." },
      { title: "Warm air", body: "Capacitor, contactor, fan motor or a refrigerant leak." },
      { title: "Loud outdoor unit", body: "A worn fan motor, loose panels or a struggling compressor." },
      { title: "Won’t turn on", body: "Breaker, fuse, thermostat or condensate switch." },
      { title: "Frozen lines", body: "Turn it off and call; it’s an airflow or refrigerant problem." },
    ],
    price: { title: "You see the price first", body: "AC diagnostics are $129. You approve the repair price before we start.", points: ["$129 diagnostic", "Upfront repair price", "10% off for Essential Care Plan members", "Smile Guarantee"] },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or replace your AC?",
    decide: [
      "Under about 12 years old with a reasonable repair, fix it.",
      "If it’s older or needs a compressor, compare a heat pump paired with a gas furnace. Payson homes don’t get the Rocky Mountain Power rebate, so we match it with a $1,450 credit from Eco Home.",
    ],
    faqs: [
      { q: "Can you fix my AC in Payson today?", a: "We’re open 24/7, and most repairs are done in one visit. Call 801-396-0019." },
      { q: "What does AC repair cost in Payson?", a: "The diagnostic is $129, then an upfront repair price. Essential Care Plan members save 10%." },
      { q: "Why won’t my back bedrooms cool?", a: "They’re at the end of the longest ducts. Low airflow, leaky ducts or a weak blower are the usual causes." },
      { q: "How often should my AC be serviced?", a: "Once a year, ideally in spring. A tune-up cleans the coil and catches weak parts before summer." },
      { q: "Are there heat pump rebates in Payson?", a: "Yes. We match the $1,450 Rocky Mountain Power rebate with our own credit, since Payson is on city power, and Enbridge Gas adds $700 to $1,000 with a gas furnace." },
    ],
  },
  {
    city: "payson",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Payson, UT",
    metaDescription:
      "Dual-fuel heat pump systems for Payson from $9,990 after incentives. Payson is on city power, so we match the $1,450 rebate. Permit included.",
    h1: "Heat pump installation in Payson, UT",
    heroSub:
      "A variable-speed heat pump and gas furnace bring quiet, even comfort to every room of a Payson home, with our $1,450 rebate match.",
    heroImg: { src: "/images/aciq-system-eco-home-van.jpg", alt: "ACiQ heat pump and furnace in front of an Eco Home van", pos: "58% 60%" },
    primaryCta: "INSTANT",
    intro: [
      "A dual-fuel system pairs a variable-speed heat pump with a gas furnace. The heat pump cools all summer and heats on mild days, and the furnace takes over on cold nights, switching automatically.",
      "We’ve helped more than 2,000 Utah homeowners. Every Payson install includes a load calculation, the city permit, removal of the old equipment, airflow setup and the rebate paperwork, including our $1,450 match.",
    ],
    factorsTitle: "Why dual fuel fits Payson",
    factors: [
      { title: "A rebate match for Payson power", body: "Payson City Power customers can’t get the Wattsmart rebate, so we credit the $1,450 ourselves. Enbridge Gas adds $700 to $1,000: $2,150 to $2,450, guaranteed." },
      { title: "Air to every room", body: "Steady, low-speed airflow keeps reaching the back bedrooms instead of shutting off early." },
      { title: "Quiet nights", body: "Gentle startups and low-speed running replace the clanks of an old system." },
    ],
    listTitle: "Every Payson install includes",
    listIntro: "One price.",
    list: [
      { title: "Load calculation", body: "Sized for your home, not the old unit." },
      { title: "Payson permit", body: "Not every HVAC company pulls permits. We do on every job." },
      { title: "Hallways protected", body: "Drop cloths down and a tidy work area all day." },
      { title: "Blower calibrated", body: "Set so air reaches every room gently and evenly." },
      { title: "$1,450 match and Enbridge rebate", body: "Applied and filed for you." },
      { title: "Smile Guarantee", body: "One year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: { title: "Payson pricing", body: "Heat pump and gas furnace systems start at $9,990 after incentives, including our $1,450 match.", points: ["From $9,990 after incentives", "$1,450 rebate match from Eco Home", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"] },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives including Eco Home's $1,450 match" },
    updated: "2026-11-13",
    job: {
      customer: "Melissa J.",
      title: "A clanking 22-year-old system and cold back bedrooms. Melissa’s Payson home is now quiet in every room.",
      problem: "The old furnace and AC clanked loudly enough to wake the kids and couldn’t get enough air to the back bedrooms.",
      solution: "A variable-speed heat pump with a variable-speed gas furnace, installed with drop cloths in the hallways and the blower calibrated for even airflow.",
      result: "Quiet nights and back bedrooms that match the living room.",
    },
    faqs: [
      { q: "Do Payson homes get the Rocky Mountain Power rebate?", a: "No. Payson runs its own power, so we pay the $1,450 as a credit instead. Your Enbridge Gas ThermWise rebate of $700 or $1,000 still applies." },
      { q: "I’m on SESD, not Payson City Power. Does the match still apply?", a: "Yes. Any home not on Rocky Mountain Power gets our $1,450 match on every heat pump we install." },
      { q: "Will a heat pump reach my back bedrooms?", a: "Yes, with the airflow set up correctly. Variable-speed equipment runs longer at low speed, which keeps air moving to the far rooms." },
      { q: "How long does an install take?", a: "Usually one day." },
      { q: "Is financing available?", a: "Yes. 0% interest for 12 months is available, along with longer terms." },
    ],
  },

  // ================================================================ VINEYARD
  {
    city: "vineyard",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Vineyard, UT, Open 24/7",
    metaDescription:
      "Vineyard furnace repair, open 24/7, including the builder-grade furnaces in most newer homes. $129 diagnostic and the price before any work.",
    h1: "Furnace repair in Vineyard, UT",
    heroSub:
      "No heat in Vineyard? We’re open 24/7. A $129 diagnostic finds the problem, and you get the repair price before we start.",
    heroImg: { src: "/images/aciq-furnace-basement-install.jpg", alt: "High-efficiency gas furnace in a utility room", pos: "50% 45%" },
    primaryCta: "BOOK",
    intro: [
      "Vineyard’s furnaces are young, but builder-grade models can still fail early, especially their condensate drains, flame sensors and control boards.",
      "We repair every major brand, and many Vineyard repairs are quick fixes once we find the cause.",
    ],
    factorsTitle: "Common Vineyard furnace issues",
    factors: [
      { title: "Condensate problems", body: "High-efficiency furnaces drain water. A clogged trap or frozen pipe shuts the furnace down on a cold night." },
      { title: "Builder-grade parts", body: "Entry-level furnaces use parts that can wear out sooner, even in homes only 10 years old." },
      { title: "Closets and attics", body: "Townhome furnaces in tight closets or attics need clear return air to avoid overheating." },
    ],
    listTitle: "Furnace repairs in Vineyard",
    listIntro: "Many are finished in one visit.",
    list: [
      { title: "Shuts down on cold nights", body: "Often a frozen or clogged condensate line. We clear and protect it." },
      { title: "Won’t ignite", body: "Flame sensor, ignitor or pressure switch. We test each." },
      { title: "Error code blinking", body: "We read the code and fix the actual cause." },
      { title: "Loud vents", body: "A blower set too high for the ducts. We adjust it." },
      { title: "Upstairs too cold", body: "Airflow and returns, checked and balanced." },
    ],
    price: { title: "Upfront furnace pricing", body: "The diagnostic is $129. You approve the repair price before any work.", points: ["$129 diagnostic", "Price before repair", "Essential Care Plan members save 10%", "Smile Guarantee"] },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or upgrade?",
    decide: [
      "Most Vineyard furnaces are young enough that a repair makes sense.",
      "If you’re dealing with noise, uneven floors or repeated repairs, compare an upgrade. A heat pump with a variable-speed gas furnace gets the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas.",
    ],
    safety: { title: "Smell gas? Leave first.", body: "Get everyone outside without using switches or appliances. Call Enbridge Gas at 1-800-767-1689 or 911 from outside, then call us once it’s safe." },
    faqs: [
      { q: "Do you do emergency furnace repair in Vineyard?", a: "Yes, 24/7. Call 801-396-0019 or book online." },
      { q: "How much does furnace repair cost in Vineyard?", a: "$129 for the diagnostic, then an upfront price. Essential Care Plan members save 10%." },
      { q: "Why did my newer furnace stop working when it got cold?", a: "A frozen or clogged condensate line is the most common cause in high-efficiency furnaces. We clear it and can insulate or reroute it." },
      { q: "Is my furnace still under warranty?", a: "Many Vineyard furnaces still have parts coverage. We’ll check the model and serial number and tell you what’s covered." },
      { q: "Can you service furnaces in townhome closets or attics?", a: "Yes. We also check that they have enough return air and clearance." },
    ],
  },
  {
    city: "vineyard",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Vineyard, UT, Open 24/7",
    metaDescription:
      "Vineyard AC repair, open 24/7. Loud builder-grade units, warm air or a hot upstairs: $129 diagnostic and the price before any repair.",
    h1: "AC repair in Vineyard, UT",
    heroSub:
      "Loud AC by the patio or a hot upstairs? We’re open 24/7 for Vineyard, with a $129 diagnostic and an upfront price.",
    heroImg: { src: "/images/tech-eco-home-shirt-heat-pump.jpg", alt: "Eco Home technician working on an outdoor unit", pos: "45% 50%" },
    primaryCta: "BOOK",
    intro: [
      "Vineyard’s ACs are mostly builder-grade single-speed units. They tend to be loud, cycle often and leave upstairs bedrooms warmer than the rest of the house.",
      "We repair all major brands and tell you plainly whether a repair or an upgrade makes more sense.",
    ],
    factorsTitle: "Why Vineyard ACs struggle",
    factors: [
      { title: "Single-speed equipment", body: "On-off cycling means loud startups and upstairs rooms that never catch up." },
      { title: "Lake-area dust and bugs", body: "Outdoor coils near the lake and open land collect dust, bugs and cottonwood fluff." },
      { title: "Tight side yards", body: "Units squeezed between homes can recirculate their own hot air, which cuts cooling." },
    ],
    listTitle: "AC repairs in Vineyard",
    listIntro: "Most are done in one visit.",
    list: [
      { title: "Hot upstairs", body: "We check airflow, refrigerant charge and the upstairs returns." },
      { title: "Loud unit", body: "Fan motors, loose panels and failing compressors all get louder." },
      { title: "Warm air", body: "A capacitor, contactor or refrigerant problem, most often." },
      { title: "Dirty coil", body: "Cleaned so the unit can shed heat again." },
      { title: "Won’t start", body: "Breaker, fuse, thermostat or condensate switch." },
    ],
    price: { title: "Price first, every time", body: "The diagnostic is $129. You approve the repair before we start.", points: ["$129 diagnostic", "Upfront repair price", "10% off for Essential Care Plan members", "Smile Guarantee"] },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair it or upgrade?",
    decide: [
      "If the repair is small and the noise doesn’t bother you, repair it.",
      "If the AC is loud, the upstairs is never comfortable or it needs a compressor, compare a variable-speed heat pump with a gas furnace. In Vineyard it gets the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas.",
    ],
    faqs: [
      { q: "Can you fix my AC in Vineyard today?", a: "We’re open 24/7 and finish most repairs in one visit." },
      { q: "What does AC repair cost in Vineyard?", a: "The diagnostic is $129, then an upfront price. Essential Care Plan members save 10%." },
      { q: "Why is my builder-grade AC so loud?", a: "Single-speed units run at full blast every time. A worn fan motor or loose panel makes it worse; we can fix those, but a variable-speed unit is much quieter." },
      { q: "Why is my upstairs warmer?", a: "Heat rises and a single-speed AC shuts off before the upstairs cools. Small returns upstairs add to it." },
      { q: "Do I get a rebate for upgrading to a heat pump?", a: "Yes. Rocky Mountain Power pays $1,450 on every heat pump we install, and Enbridge Gas adds $700 to $1,000 with a gas furnace." },
    ],
  },
  {
    city: "vineyard",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Vineyard, UT",
    metaDescription:
      "Replace builder-grade equipment with a quiet dual-fuel heat pump system in Vineyard from $9,990 after incentives. $2,150+ in rebates guaranteed.",
    h1: "Heat pump installation in Vineyard, UT",
    heroSub:
      "Trade a loud builder-grade AC for a variable-speed heat pump and gas furnace: quiet by the patio, even upstairs, with $2,150 or more in rebates.",
    heroImg: { src: "/images/heat-pump-install-vacuum.jpg", alt: "Technician pulling a vacuum on a new heat pump", pos: "50% 50%" },
    primaryCta: "INSTANT",
    intro: [
      "In a Vineyard home, upgrading from builder-grade equipment to a dual-fuel system is mostly about comfort and noise. A variable-speed heat pump runs quietly at low output, keeps the upstairs even, and pairs with a gas furnace for the coldest nights.",
      "We’ve helped more than 2,000 Utah homeowners. Every Vineyard install includes a load calculation, the permit, haul-away of the old units and the rebate filing.",
    ],
    factorsTitle: "Why Vineyard homeowners upgrade",
    factors: [
      { title: "Quiet for close neighbors", body: "Variable-speed outdoor units spend most of the day at low output, far quieter than a single-speed AC." },
      { title: "Even upstairs", body: "Steady, low-speed airflow keeps bedrooms close to the thermostat." },
      { title: "Rebates", body: "$1,450 from Rocky Mountain Power and $700 to $1,000 from Enbridge Gas, guaranteed." },
    ],
    listTitle: "Every Vineyard install includes",
    listIntro: "All for one price.",
    list: [
      { title: "Load calculation", body: "Builder systems are often oversized or undersized. We size yours to the house." },
      { title: "Permit and inspection", body: "Not every HVAC company pulls permits. We do on every job." },
      { title: "Shoe covers and runners", body: "Your floors stay clean." },
      { title: "Thermostat setup", body: "Dual-fuel switchover configured and explained." },
      { title: "Rebates filed", body: "Rocky Mountain Power and Enbridge Gas paperwork handled." },
      { title: "Smile Guarantee", body: "One year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: { title: "Vineyard pricing", body: "Heat pump and gas furnace systems start at $9,990 after incentives, depending on your home and the efficiency you choose.", points: ["From $9,990 after incentives", "$1,450 Rocky Mountain Power rebate", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"] },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-11-13",
    job: {
      customer: "Megan C.",
      title: "A builder-grade AC that sounded like a lawnmower. Megan and Jordan’s Vineyard home is now quiet inside and out.",
      problem: "The original AC was loud beside the patio and close to the neighbors, the vents roared at every start, and the upstairs never felt right.",
      solution: "A variable-speed heat pump with a variable-speed gas furnace, installed with shoe covers and floor runners, plus a walkthrough of the new thermostat.",
      result: "A quiet hum, a usable patio and both floors at the same temperature.",
    },
    faqs: [
      { q: "What rebates apply in Vineyard?", a: "Rocky Mountain Power pays $1,450 on every heat pump we install, and Enbridge Gas ThermWise pays $700 with an 80% furnace or $1,000 with a 96%+ furnace." },
      { q: "Is it worth replacing a 10-year-old builder system?", a: "If it’s loud, uneven or needs a big repair, often yes. The rebates cover a large share of the cost." },
      { q: "How quiet is a variable-speed heat pump?", a: "Much quieter than a builder-grade AC. Most of the day it runs at a fraction of its capacity." },
      { q: "How long does it take?", a: "Most installs are done in one day." },
      { q: "Can I finance it?", a: "Yes. 0% interest for 12 months is available, plus longer-term plans." },
    ],
  },

  // ================================================================ ALPINE
  {
    city: "alpine",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Alpine, UT, Open 24/7",
    metaDescription:
      "Alpine furnace repair from our American Fork shop, open 24/7. A $129 diagnostic and the repair price before any work. Call 801-396-0019.",
    h1: "Furnace repair in Alpine, UT",
    heroSub:
      "No heat in Alpine? We’re a short drive away and open 24/7. The diagnostic is $129, and you get the repair price before we start.",
    heroImg: { src: "/images/furnace-tech-thumbs-up.jpg", alt: "Eco Home technician beside a furnace", pos: "50% 35%" },
    primaryCta: "BOOK",
    intro: [
      "Alpine’s larger homes ask a lot of one furnace, and a lot of those furnaces are original to the house. Noise and uneven heat are usually the first signs one is wearing out.",
      "We repair all major furnace brands and price the repair before any work.",
    ],
    factorsTitle: "What Alpine furnaces face",
    factors: [
      { title: "Big homes", body: "More square footage means longer run times and more strain on the blower and inducer." },
      { title: "Bench location", body: "Homes against the mountains see cold winter nights, which keeps furnaces cycling." },
      { title: "Original equipment", body: "Furnaces near 20 years old fail more often, and parts get harder to find." },
    ],
    listTitle: "Furnace repairs in Alpine",
    listIntro: "Usually done on the first visit.",
    list: [
      { title: "Rattling or rumbling", body: "Loose ducts, a dirty blower wheel or a worn motor." },
      { title: "No heat", body: "Ignitor, flame sensor, pressure switch or board, tested one by one." },
      { title: "One floor cold", body: "Airflow, dampers or returns. We measure first." },
      { title: "Short cycling", body: "Dirty flame sensor, clogged filter or oversized furnace." },
      { title: "Condensate shutdown", body: "High-efficiency furnace drains clogged or frozen." },
    ],
    price: { title: "Price before the work", body: "The diagnostic is $129, and you see the repair price before we begin.", points: ["$129 diagnostic", "Upfront price", "Essential Care Plan members save 10%", "Smile Guarantee"] },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or replace?",
    decide: [
      "Repair a furnace younger than about 15 years when the cost is reasonable.",
      "For an original furnace needing a big repair, compare replacement. In Alpine, a heat pump with a new gas furnace gets the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas. A furnace alone starts at $3,990, installed in one day.",
    ],
    safety: { title: "Gas smell? Get outside.", body: "Leave with everyone, without using switches or appliances. Call Enbridge Gas at 1-800-767-1689 or 911 from outside, and call us once it’s safe." },
    faqs: [
      { q: "Will you come to Alpine at night?", a: "Yes, we’re open 24/7. Call 801-396-0019." },
      { q: "How much does furnace repair cost in Alpine?", a: "$129 for the diagnostic, then an upfront price. Essential Care Plan members save 10%." },
      { q: "Why is my basement so cold in winter?", a: "Cold air settles, and basements often have too few returns. We check airflow on each level." },
      { q: "Can you find parts for older furnaces?", a: "Usually. For very old units we’ll tell you if a part is hard to get and what that means for a repair." },
      { q: "Should I replace the furnace that came with the house?", a: "If it’s near 20 years and needs a major part, compare a dual-fuel system with $2,150 or more in rebates." },
    ],
  },
  {
    city: "alpine",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Alpine, UT, Open 24/7",
    metaDescription:
      "Alpine AC repair, open 24/7. Upstairs too warm, warm air or a noisy unit: $129 diagnostic and an upfront price before any repair.",
    h1: "AC repair in Alpine, UT",
    heroSub:
      "Upstairs too warm or the AC rattling? We’re open 24/7 for Alpine, with a $129 diagnostic and a repair price before we start.",
    heroImg: { src: "/images/tech-heat-pump-brick.jpg", alt: "Technician working on an outdoor unit beside a brick home", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "In a large Alpine home, an aging AC usually loses the upstairs first. We find out whether it’s a failing part, low refrigerant or an airflow problem.",
      "We repair all major AC and heat pump brands and price every repair before we start.",
    ],
    factorsTitle: "Why Alpine ACs struggle",
    factors: [
      { title: "Large homes", body: "Long duct runs and more rooms mean a weak blower or low charge shows up quickly." },
      { title: "Original units", body: "Many ACs are as old as the house, with worn capacitors and fan motors." },
      { title: "Trees and debris", body: "Mature trees drop leaves and seeds into outdoor coils." },
    ],
    listTitle: "AC repairs in Alpine",
    listIntro: "Most are done in one visit.",
    list: [
      { title: "Upstairs too warm", body: "We check airflow, returns and refrigerant charge." },
      { title: "Noisy unit", body: "Fan motor, panels or compressor, found and fixed." },
      { title: "Warm air", body: "Usually a capacitor, contactor or refrigerant leak." },
      { title: "Won’t start", body: "Breaker, fuse, thermostat or condensate switch." },
      { title: "Clogged coil", body: "Cleaned so the AC can cool properly." },
    ],
    price: { title: "Upfront pricing", body: "AC diagnostics are $129, and you approve the repair price first.", points: ["$129 diagnostic", "Upfront repair price", "10% off for Essential Care Plan members", "Smile Guarantee"] },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or replace the AC?",
    decide: [
      "Under about 12 years old with a reasonable repair, fix it.",
      "Older or needing a compressor? Compare a variable-speed heat pump with a gas furnace. In Alpine it gets the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas.",
    ],
    faqs: [
      { q: "How soon can you repair my AC in Alpine?", a: "We’re open 24/7, and most repairs are done in one visit." },
      { q: "What does AC repair cost in Alpine?", a: "$129 for the diagnostic, then an upfront price. Essential Care Plan members save 10%." },
      { q: "Can one AC cool a large Alpine home?", a: "Yes, if it’s sized correctly and the ducts are right. In some very large homes, a second system or zoning works better." },
      { q: "Why does my AC rattle?", a: "Loose panels, a failing fan motor or a compressor wearing out. Get it checked before it becomes a bigger repair." },
      { q: "Is a heat pump a good replacement?", a: "For most Alpine homes, yes, paired with a gas furnace for the coldest nights." },
    ],
  },
  {
    city: "alpine",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Alpine, UT",
    metaDescription:
      "Dual-fuel heat pump systems for Alpine homes from $9,990 after incentives, with $2,150+ in Rocky Mountain Power and Enbridge rebates.",
    h1: "Heat pump installation in Alpine, UT",
    heroSub:
      "A variable-speed heat pump and gas furnace keep a large Alpine home even from the basement up, quietly, with $2,150 or more in rebates.",
    heroImg: { src: "/images/tech-portrait.jpg", alt: "Eco Home technician beside a new outdoor heat pump", pos: "60% 35%" },
    primaryCta: "INSTANT",
    intro: [
      "For a larger Alpine home, a dual-fuel system means steady, quiet comfort across every level. The heat pump handles cooling and mild-weather heating, and the gas furnace covers cold winter nights against the mountains.",
      "We’ve helped more than 2,000 Utah homeowners. Every Alpine install includes a load calculation, the city permit, duct sealing at the equipment, airflow balancing and the rebate filing.",
    ],
    factorsTitle: "Why Alpine homes choose dual fuel",
    factors: [
      { title: "Even comfort in big homes", body: "Low-speed, long run times mix the air between floors." },
      { title: "Gas backup for cold nights", body: "The furnace takes over when it’s cold enough that gas is cheaper." },
      { title: "Rebates", body: "Rocky Mountain Power pays $1,450 and Enbridge Gas $700 to $1,000: $2,150 to $2,450, guaranteed." },
    ],
    listTitle: "Included in an Alpine install",
    listIntro: "One price for all of it.",
    list: [
      { title: "Load calculation", body: "Sized to your home’s square footage and levels." },
      { title: "Alpine permit", body: "Not every HVAC company pulls permits. We do on every job." },
      { title: "Stairs and hallways protected", body: "Drop cloths down before equipment comes in." },
      { title: "Ductwork sealed and balanced", body: "So every floor gets its share of air." },
      { title: "Rebate paperwork", body: "Filed with Rocky Mountain Power and Enbridge Gas." },
      { title: "Smile Guarantee", body: "One year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: { title: "Alpine pricing", body: "Heat pump and gas furnace systems start at $9,990 after incentives, with the final price set by square footage, number of floors and the equipment tier.", points: ["From $9,990 after incentives", "$1,450 Rocky Mountain Power rebate", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"] },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-11-13",
    job: {
      customer: "David L.",
      title: "The original system rattled through the floorboards. David’s Alpine home is now quiet and even.",
      problem: "The furnace and AC that came with the home rattled up through the floorboards at dinner, and the upstairs never matched the downstairs.",
      solution: "A variable-speed heat pump with a variable-speed gas furnace, with sealed ductwork and airflow balanced between floors.",
      result: "A quiet hum and the same temperature in every room.",
    },
    faqs: [
      { q: "What rebates are there in Alpine?", a: "Rocky Mountain Power’s $1,450 Wattsmart rebate on every heat pump we install, plus Enbridge Gas ThermWise: $700 with an 80% furnace or $1,000 with a 96%+ furnace." },
      { q: "Can a heat pump heat an Alpine home in January?", a: "On its own it would work hard. With a gas furnace behind it, the furnace carries the deep-cold nights and the heat pump handles everything else." },
      { q: "Can it fix uneven floors?", a: "It helps a lot, along with duct sealing and balancing, which are part of every install." },
      { q: "Will you be in my house for days?", a: "No. Most Alpine installs, even in larger homes, are finished in a day." },
      { q: "Do you offer payment plans?", a: "Yes. You can choose 0% interest for 12 months." },
    ],
  },

  // ================================================================ CEDAR HILLS
  {
    city: "cedar-hills",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Cedar Hills, UT, Open 24/7",
    metaDescription:
      "Cedar Hills furnace repair from our shop minutes away in American Fork. Open 24/7, $129 diagnostic and the repair price before work.",
    h1: "Furnace repair in Cedar Hills, UT",
    heroSub:
      "We’re a few minutes below Cedar Hills in American Fork and open 24/7. $129 diagnostic, and the repair price before anything gets fixed.",
    heroImg: { src: "/images/aciq-furnace-basement-install.jpg", alt: "Gas furnace in a basement utility room", pos: "50% 40%" },
    primaryCta: "BOOK",
    intro: [
      "Cedar Hills furnaces mostly heat two-story homes from the basement, and many are reaching the age where blowers, inducers and ignitors start to fail.",
      "Because we’re so close, a Cedar Hills no-heat call usually doesn’t wait long. You get the price before we start.",
    ],
    factorsTitle: "Why Cedar Hills furnaces fail",
    factors: [
      { title: "Heating upstairs from the basement", body: "Pushing warm air up two floors is hard on a weak blower and shows up as cold bedrooms." },
      { title: "Bench winters", body: "Homes on the bench see cold nights and long heating seasons." },
      { title: "Age", body: "Original furnaces from the 1990s and 2000s are wearing out." },
    ],
    listTitle: "Furnace repairs in Cedar Hills",
    listIntro: "Most are fixed on the first trip.",
    list: [
      { title: "Blasting or noisy vents", body: "Blower speed or a dirty blower wheel. We adjust or clean it." },
      { title: "No heat", body: "We test each step of the startup and replace only what failed." },
      { title: "Cold upstairs", body: "Airflow and returns checked and balanced." },
      { title: "Shuts off early", body: "Flame sensor, filter or limit switch." },
      { title: "Vibration", body: "Loose panels, ducts or a worn motor." },
    ],
    price: { title: "Price before the repair", body: "Diagnostics are $129. You approve the repair price before we start.", points: ["$129 diagnostic", "Price up front", "Essential Care Plan members save 10%", "Smile Guarantee"] },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or replace?",
    decide: [
      "Repair it if it’s under about 15 years old and the repair is reasonable.",
      "If it’s older and needs a big part, compare replacement. A heat pump with a new gas furnace in Cedar Hills gets the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas. A furnace alone starts at $3,990, installed in one day.",
    ],
    safety: { title: "Gas smell? Leave right away.", body: "Get out without touching switches or appliances. Call Enbridge Gas at 1-800-767-1689 or 911 from outside, then call us when it’s safe." },
    faqs: [
      { q: "How fast can you get to Cedar Hills?", a: "We’re a few minutes away and open 24/7. Call 801-396-0019." },
      { q: "How much does furnace repair cost in Cedar Hills?", a: "$129 for the diagnostic, then an upfront price. Essential Care Plan members save 10%." },
      { q: "Why do my vents blast air when the furnace starts?", a: "A single-speed blower starts at full speed. We can sometimes adjust it; a variable-speed furnace ramps up gently." },
      { q: "Why are the bedrooms cold in winter?", a: "Warm air has to travel up two floors. We check the blower, ducts and returns." },
      { q: "Is my 25-year-old furnace worth repairing?", a: "Small repairs, maybe. Major ones, compare a dual-fuel system with $2,150 or more in rebates." },
    ],
  },
  {
    city: "cedar-hills",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Cedar Hills, UT, Open 24/7",
    metaDescription:
      "Cedar Hills AC repair, minutes from our American Fork shop. Open 24/7, $129 diagnostic and an upfront price for noise, warm air or hot rooms.",
    h1: "AC repair in Cedar Hills, UT",
    heroSub:
      "AC vibrating under the bedroom window or blowing warm? We’re minutes away and open 24/7, with a $129 diagnostic and an upfront price.",
    heroImg: { src: "/images/tech-leveling-heat-pump.jpg", alt: "Technician working on an outdoor unit", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "In Cedar Hills, AC problems tend to show up as warm upstairs bedrooms and outdoor units that get louder every year.",
      "We repair all major AC and heat pump brands and price the repair before we start.",
    ],
    factorsTitle: "Why Cedar Hills ACs fall behind",
    factors: [
      { title: "Bedrooms upstairs", body: "Heat rises, and a single-speed AC shuts off before the upstairs cools." },
      { title: "Units near windows", body: "Wear and vibration in an old unit carry right into the bedroom." },
      { title: "Age", body: "Many ACs are 20 years old, with worn capacitors and fan motors." },
    ],
    listTitle: "AC repairs in Cedar Hills",
    listIntro: "Usually done in one visit.",
    list: [
      { title: "Vibrating unit", body: "Loose mounting, a worn fan motor or a failing compressor." },
      { title: "Warm air", body: "A capacitor, contactor or refrigerant leak." },
      { title: "Hot upstairs", body: "Airflow, returns and refrigerant checked." },
      { title: "Won’t start", body: "Breaker, fuse, thermostat or condensate switch." },
      { title: "Dirty coil", body: "Cleaned so the unit cools properly." },
    ],
    price: { title: "Upfront AC repair pricing", body: "The diagnostic is $129, and you get the repair price first.", points: ["$129 diagnostic", "Upfront price", "10% off for Essential Care Plan members", "Smile Guarantee"] },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or replace?",
    decide: [
      "Under about 12 years old with a reasonable repair, fix it.",
      "If it’s older or needs a compressor, compare a heat pump with a gas furnace. In Cedar Hills it gets the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas.",
    ],
    faqs: [
      { q: "Can you fix my AC in Cedar Hills today?", a: "We’re minutes away, open 24/7 and finish most repairs in one visit." },
      { q: "How much does AC repair cost in Cedar Hills?", a: "$129 for the diagnostic, then an upfront price. Essential Care Plan members save 10%." },
      { q: "Why does my outdoor unit shake?", a: "Loose mounting, a bent fan blade or a worn compressor. Turn it off if it’s violent and call us." },
      { q: "Can a new system be quieter by my bedroom?", a: "Yes. A variable-speed heat pump spends most of its time at low output and is much quieter." },
      { q: "Are there rebates for a heat pump in Cedar Hills?", a: "Yes. $1,450 from Rocky Mountain Power plus $700 to $1,000 from Enbridge Gas with a gas furnace." },
    ],
  },
  {
    city: "cedar-hills",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Cedar Hills, UT",
    metaDescription:
      "Heat pump + gas furnace systems for Cedar Hills from $9,990 after incentives, installed from our shop minutes away. $2,150+ in rebates.",
    h1: "Heat pump installation in Cedar Hills, UT",
    heroSub:
      "A variable-speed heat pump and gas furnace end the vent blasts and window rattles in a Cedar Hills home, with $2,150 or more in rebates.",
    heroImg: { src: "/images/heat-pumps-pair.jpg", alt: "Two new inverter heat pumps beside a home", pos: "50% 55%" },
    primaryCta: "INSTANT",
    intro: [
      "A dual-fuel system pairs a variable-speed heat pump with a gas furnace. It cools quietly all summer, heats efficiently on mild days and lets the furnace take over when it’s cold, switching automatically.",
      "We’ve helped more than 2,000 Utah homeowners, and Cedar Hills is right next to our shop. Every install includes a load calculation, the permit, haul-away and the rebate filing.",
    ],
    factorsTitle: "Why Cedar Hills homes choose dual fuel",
    factors: [
      { title: "Quiet startups", body: "Variable-speed equipment ramps up gently instead of blasting on." },
      { title: "Cooler bedrooms", body: "Long, low-speed run times keep the upstairs comfortable." },
      { title: "Rebates", body: "$1,450 from Rocky Mountain Power and $700 to $1,000 from Enbridge Gas: $2,150 to $2,450, guaranteed." },
    ],
    listTitle: "Every Cedar Hills install includes",
    listIntro: "One price.",
    list: [
      { title: "Load calculation", body: "Sized for your house, not the old unit." },
      { title: "Permit and inspection", body: "Not every HVAC company pulls permits. We do on every job." },
      { title: "A neat, communicated install", body: "We keep you posted and keep the work area clean." },
      { title: "Thermostat setup", body: "Dual-fuel switchover set and explained." },
      { title: "Rebates filed", body: "Rocky Mountain Power and Enbridge Gas paperwork handled." },
      { title: "Smile Guarantee", body: "One year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: { title: "Cedar Hills pricing", body: "Heat pump and gas furnace systems start at $9,990 after incentives, depending on your home’s size and the efficiency you choose.", points: ["From $9,990 after incentives", "$1,450 Rocky Mountain Power rebate", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"] },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-11-13",
    job: {
      customer: "Danielle W.",
      title: "Wind-tunnel vents and a unit shaking under the bedroom window. Danielle’s Cedar Hills home is now near-silent.",
      problem: "Air blasted out of the vents at every start, and the outdoor unit vibrated beneath the bedroom window.",
      solution: "A variable-speed heat pump with a variable-speed gas furnace, installed neatly with clear updates through the day and a walkthrough of how the system works.",
      result: "Smooth, quiet operation inside and out, with no startup blasts.",
    },
    faqs: [
      { q: "What rebates apply in Cedar Hills?", a: "Rocky Mountain Power pays $1,450 on every heat pump we install, and Enbridge Gas ThermWise pays $700 with an 80% furnace or $1,000 with a 96%+ furnace." },
      { q: "How quiet is it?", a: "Very. It runs at low output most of the day, so there are no loud startups." },
      { q: "How long does an install take?", a: "One day for most homes." },
      { q: "Will my upstairs stay cooler?", a: "Yes. Steady, low-speed airflow keeps air moving to the bedrooms." },
      { q: "Can I finance it?", a: "Yes. 0% interest for 12 months is available." },
    ],
  },

  // ================================================================ MAPLETON
  {
    city: "mapleton",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Mapleton, UT, Open 24/7",
    metaDescription:
      "Mapleton furnace repair, open 24/7. A $129 diagnostic and the repair price before any work, for older and newer homes. Call 801-396-0019.",
    h1: "Furnace repair in Mapleton, UT",
    heroSub:
      "Furnace out in Mapleton? We’re open 24/7, with a $129 diagnostic and the repair price before any work.",
    heroImg: { src: "/images/furnace-tech-uniform.jpg", alt: "Eco Home technician beside a gas furnace", pos: "50% 35%" },
    primaryCta: "BOOK",
    intro: [
      "Mapleton winters below Maple Mountain are cold, and a furnace that has been running since October is most likely to fail in the middle of a cold snap.",
      "We repair all major furnace brands and give you the repair price before we start.",
    ],
    factorsTitle: "What Mapleton furnaces deal with",
    factors: [
      { title: "Cold nights near the mountain", body: "Long run times and frequent starts wear on ignitors, inducers and blowers." },
      { title: "Original equipment", body: "Many furnaces are as old as the house and nearing 20 years." },
      { title: "Long duct runs", body: "Larger homes and rural layouts push air a long way, which strains a weak blower." },
    ],
    listTitle: "Furnace repairs in Mapleton",
    listIntro: "Usually done on the first visit.",
    list: [
      { title: "Rattling vents", body: "Loose registers, ducts or a blower starting too hard." },
      { title: "No heat", body: "Ignitor, flame sensor, pressure switch or board." },
      { title: "Upstairs too cold", body: "Airflow and returns, measured and adjusted." },
      { title: "Shuts off early", body: "Flame sensor, filter or limit switch." },
      { title: "Loud startup", body: "Delayed ignition or a failing inducer." },
    ],
    price: { title: "Upfront price", body: "The diagnostic is $129. You approve the repair price first.", points: ["$129 diagnostic", "Price before repair", "Essential Care Plan members save 10%", "Smile Guarantee"] },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or replace?",
    decide: [
      "Repair a furnace under about 15 years old when the cost is reasonable.",
      "For an original furnace that needs a major part, compare replacement. A heat pump with a new gas furnace gets $1,450 (Rocky Mountain Power’s rebate, or our match on SESD) plus $700 to $1,000 from Enbridge Gas. A furnace alone starts at $3,990, installed in one day.",
    ],
    safety: { title: "Smell gas?", body: "Leave with everyone, without using switches or appliances. Call Enbridge Gas at 1-800-767-1689 or 911 from outside, then call us when it’s safe." },
    faqs: [
      { q: "Do you do emergency furnace repair in Mapleton?", a: "Yes, 24/7. Call 801-396-0019." },
      { q: "How much does furnace repair cost in Mapleton?", a: "$129 for the diagnostic, then an upfront price. Essential Care Plan members save 10%." },
      { q: "Why do my vents rattle when the furnace starts?", a: "A single-speed blower comes on at full speed and shakes loose registers and ducts. We tighten what’s loose; a variable-speed furnace starts gently." },
      { q: "Why is my upstairs cold?", a: "Warm air has to travel farther and upstairs returns are often small. We check airflow on each floor." },
      { q: "Should I replace the original furnace?", a: "If it needs a major repair and it’s near 20 years old, compare a dual-fuel system with $2,150 or more in rebates." },
    ],
  },
  {
    city: "mapleton",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Mapleton, UT, Open 24/7",
    metaDescription:
      "Mapleton AC repair, open 24/7. Warm air, a hot upstairs or a loud unit: $129 diagnostic and the repair price before we start.",
    h1: "AC repair in Mapleton, UT",
    heroSub:
      "Upstairs warm or the AC getting louder? We’re open 24/7 for Mapleton, with a $129 diagnostic and an upfront repair price.",
    heroImg: { src: "/images/old-ac-unit.jpg", alt: "Older outdoor AC unit beside a home", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "Mapleton’s older ACs tend to lose the upstairs first and get noisier each summer. We find out whether it’s a part, the refrigerant or the airflow.",
      "We repair all major AC and heat pump brands and price the repair before any work.",
    ],
    factorsTitle: "Why Mapleton ACs struggle",
    factors: [
      { title: "Upstairs heat", body: "A single-speed AC shuts off before two-story bedrooms cool down." },
      { title: "Field dust", body: "Open land and farm fields coat outdoor coils with dust." },
      { title: "Aging units", body: "Original ACs near 20 years have worn electrical parts." },
    ],
    listTitle: "AC repairs in Mapleton",
    listIntro: "Most are done in one visit.",
    list: [
      { title: "Hot upstairs", body: "Airflow, returns and refrigerant charge checked." },
      { title: "Warm air", body: "Capacitor, contactor or refrigerant leak." },
      { title: "Loud outdoor unit", body: "Fan motor, panels or compressor." },
      { title: "Won’t start", body: "Breaker, fuse, thermostat or condensate switch." },
      { title: "Dirty coil", body: "Cleaned so the system cools well again." },
    ],
    price: { title: "You approve the price", body: "AC diagnostics are $129, and the repair is priced before we start.", points: ["$129 diagnostic", "Upfront repair price", "10% off for Essential Care Plan members", "Smile Guarantee"] },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or upgrade?",
    decide: [
      "Under about 12 years old with a reasonable repair, fix it.",
      "If it’s older or needs a compressor, compare a heat pump with a gas furnace and $2,150 or more in rebates.",
    ],
    faqs: [
      { q: "Can you fix my AC in Mapleton today?", a: "We’re open 24/7, and most repairs are done in one visit." },
      { q: "What does AC repair cost in Mapleton?", a: "$129 for the diagnostic, then an upfront price. Essential Care Plan members save 10%." },
      { q: "How often should I clean my outdoor unit?", a: "At least once a year, more if you’re near fields. A tune-up includes a coil cleaning." },
      { q: "Why is my AC louder every year?", a: "Fan motor bearings and compressors wear. A noisy unit is worth checking before it fails." },
      { q: "Do I get a rebate for a heat pump?", a: "Yes, $1,450 either way: Rocky Mountain Power’s rebate, or our match if you’re on SESD. Enbridge Gas adds $700 to $1,000 with a gas furnace." },
    ],
  },
  {
    city: "mapleton",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Mapleton, UT",
    metaDescription:
      "Dual-fuel heat pump systems for Mapleton from $9,990 after incentives, with $2,150+ in rebates on Rocky Mountain Power or SESD. Permit included.",
    h1: "Heat pump installation in Mapleton, UT",
    heroSub:
      "A variable-speed heat pump and gas furnace for Mapleton: quiet, even on both floors, and backed up by gas for cold nights below the mountain.",
    heroImg: { src: "/images/heat-pump-install-lawn.jpg", alt: "New outdoor heat pump beside a lawn", pos: "50% 55%" },
    primaryCta: "INSTANT",
    intro: [
      "A dual-fuel system pairs a variable-speed heat pump with a gas furnace. The heat pump cools and handles mild-weather heating; the furnace takes the cold nights. It switches on its own.",
      "We’ve helped more than 2,000 Utah homeowners. Every Mapleton install includes a load calculation, the city permit, removal of the old equipment and the rebate paperwork.",
    ],
    factorsTitle: "Why dual fuel fits Mapleton",
    factors: [
      { title: "$1,450 on any power company", body: "Rocky Mountain Power homes get the Wattsmart rebate; SESD homes get our matching credit. Enbridge Gas adds $700 to $1,000." },
      { title: "Quiet operation", body: "Low-speed running replaces loud on-off cycling and rattling vents." },
      { title: "Even floors", body: "Long, steady run times keep the upstairs and main floor together." },
    ],
    listTitle: "Every Mapleton install includes",
    listIntro: "All in one price.",
    list: [
      { title: "Load calculation", body: "Sized to your home." },
      { title: "Mapleton permit", body: "Not every HVAC company pulls permits. We do on every job." },
      { title: "Shoe covers and runners", body: "Your floors stay clean." },
      { title: "Clean basement", body: "We leave the mechanical area cleaner than we found it." },
      { title: "Rebates handled", body: "Wattsmart or our match, plus Enbridge Gas." },
      { title: "Smile Guarantee", body: "One year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: { title: "Mapleton pricing", body: "Heat pump and gas furnace systems start at $9,990 after incentives, depending on your home and the efficiency you choose.", points: ["From $9,990 after incentives", "$1,450 rebate or our match", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"] },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-11-13",
    job: {
      customer: "Jenna R.",
      title: "Rattling vents and an uneven upstairs. Jenna and Tyler’s Mapleton home is now quiet and even.",
      problem: "The original furnace and AC rattled the vents during movie nights, and the upstairs never matched the main floor.",
      solution: "A variable-speed heat pump with a variable-speed gas furnace, installed with shoe covers and runners and a spotless basement at the end.",
      result: "A quiet hum and the same temperature on both floors.",
    },
    faqs: [
      { q: "What rebates can I get in Mapleton?", a: "$1,450 from Rocky Mountain Power, or our matching credit if you’re on SESD, plus $700 or $1,000 from Enbridge Gas ThermWise." },
      { q: "Do heat pumps work in Mapleton winters?", a: "With a gas furnace backup, yes. The furnace covers the coldest nights." },
      { q: "Will it stop the rattling?", a: "Variable-speed equipment starts gently, and we tighten loose ducts and registers during the install." },
      { q: "How long does it take?", a: "Usually one day." },
      { q: "Is there financing?", a: "Yes. 0% interest for 12 months is available." },
    ],
  },

  // ================================================================ SANTAQUIN
  {
    city: "santaquin",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Santaquin, UT, Open 24/7",
    metaDescription:
      "Santaquin furnace repair, open 24/7. Roaring vents, no heat or short cycling: $129 diagnostic and the repair price before any work.",
    h1: "Furnace repair in Santaquin, UT",
    heroSub:
      "No heat in Santaquin? We’re open 24/7, with a $129 diagnostic and an upfront price before any repair.",
    heroImg: { src: "/images/american-fork-furnace-repair-lennox.jpg", alt: "Gas furnace opened up for a repair", pos: "50% 45%" },
    primaryCta: "BOOK",
    intro: [
      "At the south end of the valley, Santaquin homes see long, cold winters. Furnaces that roar, short cycle or quit on cold nights are the calls we get most.",
      "We repair all major furnace brands and price every repair before we begin.",
    ],
    factorsTitle: "Why Santaquin furnaces wear out",
    factors: [
      { title: "Long heating season", body: "Months of run time wear on blowers, ignitors and inducers." },
      { title: "Builder-grade models", body: "Newer homes often have entry-level furnaces with parts that wear sooner." },
      { title: "Older mismatched systems", body: "In older homes, a newer furnace on old ducts can run hot and trip its limit." },
    ],
    listTitle: "Furnace repairs in Santaquin",
    listIntro: "Most are fixed in one visit.",
    list: [
      { title: "Roaring vents", body: "Blower speed or duct restrictions. We adjust and check." },
      { title: "No ignition", body: "Ignitor, flame sensor or gas valve." },
      { title: "Short cycling", body: "Flame sensor, filter, limit switch or oversizing." },
      { title: "Condensate shutdown", body: "Clogged or frozen drain on a high-efficiency furnace." },
      { title: "Uneven heat", body: "Airflow and duct balance checked." },
    ],
    price: { title: "Price comes first", body: "The diagnostic is $129. You approve the repair price before we start.", points: ["$129 diagnostic", "Upfront price", "Essential Care Plan members save 10%", "Smile Guarantee"] },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or replace?",
    decide: [
      "Under about 15 years old with a reasonable repair, fix it.",
      "If it’s older or keeps needing repairs, compare replacement. In Santaquin, a heat pump with a new gas furnace gets the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas. A furnace alone starts at $3,990, installed in one day.",
    ],
    safety: { title: "Gas smell? Leave first.", body: "Get everyone outside without using switches or appliances. Call Enbridge Gas at 1-800-767-1689 or 911, then call us once it’s safe." },
    faqs: [
      { q: "Do you come to Santaquin for emergency repairs?", a: "Yes, 24/7. Call 801-396-0019." },
      { q: "How much does furnace repair cost in Santaquin?", a: "$129 for the diagnostic, then an upfront price. Essential Care Plan members save 10%." },
      { q: "Why does my furnace roar through the vents?", a: "The blower may be set too high or the ducts too small. We can often adjust it; a variable-speed furnace is quieter." },
      { q: "Why does my furnace short cycle?", a: "Common causes are a dirty flame sensor, a clogged filter or a furnace too big for the house." },
      { q: "Should I replace my builder-grade furnace?", a: "If it’s reliable, no. If it needs a major part or keeps failing, compare a dual-fuel system with $2,150 or more in rebates." },
    ],
  },
  {
    city: "santaquin",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Santaquin, UT, Open 24/7",
    metaDescription:
      "Santaquin AC repair, open 24/7. Buzzing units, warm air or rooms that won’t cool: $129 diagnostic and an upfront repair price.",
    h1: "AC repair in Santaquin, UT",
    heroSub:
      "AC buzzing by the patio or blowing warm? We’re open 24/7 for Santaquin, with a $129 diagnostic and the price before any repair.",
    heroImg: { src: "/images/tech-heat-pump-install.jpg", alt: "Technician connecting gauges to an outdoor unit", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "Santaquin summers are hot and dry. A buzzing outdoor unit or warm air from the vents usually means a part is failing, and we can usually fix it in one visit.",
      "We repair all major AC and heat pump brands and price the repair before we start.",
    ],
    factorsTitle: "Why Santaquin ACs fail",
    factors: [
      { title: "Heat and long run times", body: "Hot afternoons wear capacitors, contactors and fan motors." },
      { title: "Dust from fields and construction", body: "Outdoor coils clog quickly in a growing town." },
      { title: "Single-speed builder units", body: "Loud by design, and they cycle hard." },
    ],
    listTitle: "AC repairs in Santaquin",
    listIntro: "Most are done in one visit.",
    list: [
      { title: "Buzzing unit", body: "A failing contactor or capacitor, often. We test and replace it." },
      { title: "Warm air", body: "Electrical parts or a refrigerant leak." },
      { title: "Rooms won’t cool", body: "Airflow, ducts and refrigerant checked." },
      { title: "Won’t start", body: "Breaker, fuse, thermostat or condensate switch." },
      { title: "Coil cleaning", body: "So the system can shed heat again." },
    ],
    price: { title: "Upfront AC pricing", body: "The diagnostic is $129, and you approve the repair price first.", points: ["$129 diagnostic", "Upfront repair price", "10% off for Essential Care Plan members", "Smile Guarantee"] },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair or replace?",
    decide: [
      "Under about 12 years old with a reasonable repair, fix it.",
      "If it’s older or needs a compressor, compare a variable-speed heat pump with a gas furnace. In Santaquin it gets the $1,450 Rocky Mountain Power rebate plus $700 to $1,000 from Enbridge Gas.",
    ],
    faqs: [
      { q: "Can you fix my AC in Santaquin today?", a: "We’re open 24/7 and finish most repairs in one visit." },
      { q: "What does AC repair cost in Santaquin?", a: "$129 for the diagnostic, then an upfront price. Essential Care Plan members save 10%." },
      { q: "Why is my AC buzzing?", a: "A buzz often comes from a failing contactor or capacitor. Turn it off if it’s buzzing without running, and call us." },
      { q: "Can I get a quieter AC?", a: "Yes. A variable-speed heat pump runs at low output most of the time and is far quieter." },
      { q: "Is there a heat pump rebate in Santaquin?", a: "Yes. $1,450 from Rocky Mountain Power on every heat pump we install, plus $700 to $1,000 from Enbridge Gas with a gas furnace." },
    ],
  },
  {
    city: "santaquin",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Santaquin, UT",
    metaDescription:
      "Dual-fuel heat pump systems for Santaquin from $9,990 after incentives, with $2,150+ in Rocky Mountain Power and Enbridge rebates guaranteed.",
    h1: "Heat pump installation in Santaquin, UT",
    heroSub:
      "A variable-speed heat pump and gas furnace bring quiet cooling and efficient heat to a Santaquin home, with $2,150 or more in rebates.",
    heroImg: { src: "/images/aciq-system-eco-home-van.jpg", alt: "ACiQ heat pump and furnace in front of an Eco Home van", pos: "58% 60%" },
    primaryCta: "INSTANT",
    intro: [
      "A dual-fuel system pairs a variable-speed heat pump with a gas furnace. The heat pump cools quietly and handles mild-weather heating, and the furnace takes over on Santaquin’s cold nights.",
      "We’ve helped more than 2,000 Utah homeowners. Every Santaquin install includes a load calculation, the city permit, duct sealing at the equipment, airflow balancing and the rebate filing.",
    ],
    factorsTitle: "Why dual fuel fits Santaquin",
    factors: [
      { title: "Quiet patios", body: "Variable-speed units run softly most of the day." },
      { title: "No hot or cold spots", body: "Balanced, steady airflow evens out the house." },
      { title: "Rebates", body: "$1,450 from Rocky Mountain Power and $700 to $1,000 from Enbridge Gas, guaranteed." },
    ],
    listTitle: "Every Santaquin install includes",
    listIntro: "One price.",
    list: [
      { title: "Load calculation", body: "Sized for your house." },
      { title: "Santaquin permit", body: "Not every HVAC company pulls permits. We do on every job." },
      { title: "Sealed duct transitions", body: "So air goes where it should, quietly." },
      { title: "Balanced airflow", body: "Set before we leave." },
      { title: "Rebates filed", body: "Rocky Mountain Power and Enbridge Gas." },
      { title: "Smile Guarantee", body: "One year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: { title: "Santaquin pricing", body: "Heat pump and gas furnace systems start at $9,990 after incentives, depending on your home and the efficiency you choose.", points: ["From $9,990 after incentives", "$1,450 Rocky Mountain Power rebate", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"] },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-11-13",
    job: {
      customer: "Brandon M.",
      title: "A buzzing AC by the patio and a roaring furnace. Brandon’s Santaquin home is now quiet inside and out.",
      problem: "The old outdoor unit buzzed beside the back patio, and the furnace roared through the floor vents in winter.",
      solution: "A variable-speed heat pump with a variable-speed gas furnace, sealed duct transitions and balanced airflow, with Brandon walked through each step.",
      result: "Near-silent operation, even temperatures and automatic dual-fuel switching.",
    },
    faqs: [
      { q: "What rebates can I get in Santaquin?", a: "Rocky Mountain Power pays $1,450 on every heat pump we install, and Enbridge Gas ThermWise pays $700 with an 80% furnace or $1,000 with a 96%+ furnace." },
      { q: "Is it cold enough in Santaquin that a heat pump won’t keep up?", a: "Some nights, yes, which is why we pair it with gas. The system switches to the furnace when that’s the better choice." },
      { q: "How quiet is it?", a: "Much quieter than a single-speed AC, especially outside by the patio." },
      { q: "When will the new system be running?", a: "The same day we start, for most Santaquin homes." },
      { q: "Can I pay over time?", a: "Yes. There’s a 0% interest option for 12 months." },
    ],
  },

  // ================================================================ SALEM
  {
    city: "salem",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Salem, UT, Open 24/7",
    metaDescription:
      "Salem, UT furnace repair, open 24/7. Banging at startup, cold rooms or no heat: $129 diagnostic and the repair price before any work.",
    h1: "Furnace repair in Salem, UT",
    heroSub:
      "Salem furnace banging, blowing cool or not starting? We come out 24/7, charge $129 to diagnose it and price the fix before we touch it.",
    heroImg: { src: "/images/furnace-install.jpg", alt: "Gas furnace in a utility room after a service visit", pos: "50% 40%" },
    primaryCta: "BOOK",
    intro: [
      "A lot of Salem’s homes went up in the building boom of the 2000s and 2010s, and their original furnaces are now at the age where ignitors, inducer motors and blower bearings start to go.",
      "Our technicians work on every major brand. You see the price of the repair and decide before anything is replaced.",
    ],
    factorsTitle: "Common Salem furnace problems",
    factors: [
      { title: "Boom-era equipment", body: "Furnaces installed when the neighborhood was built are now 10 to 20 years old." },
      { title: "Builder-grade blowers", body: "Single-speed motors start at full blast, which is hard on bearings and loud in the hallway." },
      { title: "Skipped maintenance", body: "Dirty flame sensors and clogged filters cause most of the no-heat calls we get." },
    ],
    listTitle: "What we fix in Salem",
    listIntro: "Most furnaces are running again the same visit.",
    list: [
      { title: "Bang or boom at startup", body: "Usually delayed ignition from dirty burners. We clean and test them." },
      { title: "Blowing cool air", body: "Ignitor, flame sensor or a tripped limit switch." },
      { title: "Squealing blower", body: "Worn bearings or a failing motor." },
      { title: "Won’t turn on", body: "Thermostat, power, pressure switch or control board." },
      { title: "Water around the furnace", body: "Blocked condensate line or a failed pump." },
    ],
    price: { title: "How pricing works", body: "A $129 visit covers the diagnosis. Then you get a written repair price and choose whether to go ahead.", points: ["$129 diagnostic", "Written price first", "Essential Care Plan members save 10%", "Smile Guarantee"] },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Fix it or replace it?",
    decide: [
      "A furnace younger than about 15 years with a modest repair is usually worth fixing.",
      "If yours is original to the house and needs an inducer, board or heat exchanger, get a replacement price too. Because Salem homes aren’t on Rocky Mountain Power, Eco Home credits the $1,450 heat pump rebate ourselves; add Enbridge Gas’s $700 to $1,000 and a dual-fuel system gets at least $2,150. A furnace by itself starts at $3,990, installed in one day.",
    ],
    safety: { title: "Smell gas? Get outside first.", body: "Don’t flip switches or use appliances. From outside, call Enbridge Gas at 1-800-767-1689 or 911, then call us once it’s safe." },
    faqs: [
      { q: "Can you come tonight for a furnace in Salem?", a: "Yes. We’re open 24/7. Call 801-396-0019." },
      { q: "What does a furnace repair visit cost in Salem?", a: "The diagnostic is $129. You get the repair price before we start, and Essential Care Plan members get 10% off." },
      { q: "Why does my furnace bang when it lights?", a: "Gas is building up before it ignites, usually because of dirty burners or a weak ignitor. It’s worth having checked soon." },
      { q: "How often should a Salem furnace be serviced?", a: "Once a year, in the fall. A tune-up cleans the flame sensor and burners and catches worn parts early." },
      { q: "My furnace came with the house. Should I replace it?", a: "Not just for its age. If it needs a costly part, compare a dual-fuel system with our $1,450 credit and the Enbridge rebate." },
    ],
  },
  {
    city: "salem",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Salem, UT, Open 24/7",
    metaDescription:
      "Salem, UT AC repair, open 24/7. Frozen lines, a unit that hums but won’t run, or warm air: $129 diagnostic and an upfront repair price.",
    h1: "AC repair in Salem, UT",
    heroSub:
      "AC humming but not cooling, or ice on the lines? Salem homeowners can reach us 24/7 for a $129 diagnostic and a price before the repair.",
    heroImg: { src: "/images/tech-leveling-heat-pump.jpg", alt: "Technician working on an outdoor unit", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "Salem’s July and August afternoons push air conditioners hard, and the parts that fail first are the small electrical ones: capacitors, contactors and fan motors.",
      "We service all major AC and heat pump brands, and you approve the repair price before we do the work.",
    ],
    factorsTitle: "What breaks Salem ACs",
    factors: [
      { title: "Hot afternoons", body: "Long run times overheat capacitors and fan motors." },
      { title: "Construction and field dust", body: "New building around town leaves outdoor coils caked, so the unit works harder." },
      { title: "Low refrigerant", body: "A slow leak shows up as ice on the line set or weak cooling." },
    ],
    listTitle: "Salem AC repairs",
    listIntro: "Most are handled in one visit.",
    list: [
      { title: "Hums but won’t start", body: "Often a failed capacitor. We test it and replace it on the spot." },
      { title: "Ice on the lines", body: "Low airflow or low refrigerant. We find which and fix the cause." },
      { title: "Fan not spinning", body: "Fan motor or capacitor." },
      { title: "Water inside", body: "Clogged condensate drain or a tripped float switch." },
      { title: "Weak cooling", body: "Dirty coil, refrigerant or ducts." },
    ],
    price: { title: "Price before repair", body: "$129 gets a technician out to find the problem. You okay the repair price before work begins.", points: ["$129 diagnostic", "Approve the price first", "10% off for Essential Care Plan members", "Smile Guarantee"] },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-11-13",
    decideTitle: "Repair the AC or switch to a heat pump?",
    decide: [
      "An AC under about 12 years old with a capacitor, contactor or motor problem is worth repairing.",
      "If it needs a compressor or a coil, look at a variable-speed heat pump with a gas furnace instead. It replaces the AC and adds efficient heat, and Eco Home covers the $1,450 rebate Salem homes can’t get from Rocky Mountain Power.",
    ],
    faqs: [
      { q: "Do you do same-week AC repair in Salem?", a: "We’re open 24/7 and most Salem repairs are finished on the first visit." },
      { q: "How much is an AC diagnostic in Salem?", a: "$129. The repair is priced before we start, and plan members save 10%." },
      { q: "Why is there ice on my AC lines?", a: "Usually a dirty filter, a blocked coil or low refrigerant. Turn the AC off to let it thaw and call us." },
      { q: "My AC hums but the fan won’t spin. What is it?", a: "Most often a failed capacitor. It’s a quick repair, but running it like that can damage the motor." },
      { q: "Can I get a rebate on a heat pump in Salem?", a: "Yes. We credit $1,450 to match the Rocky Mountain Power rebate, and Enbridge Gas pays $700 to $1,000 with a new gas furnace." },
    ],
  },
  {
    city: "salem",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Salem, UT",
    metaDescription:
      "Salem, UT dual-fuel heat pump systems from $9,990 after incentives. We credit the $1,450 rebate Salem City power can’t get. Permit included.",
    h1: "Heat pump installation in Salem, UT",
    heroSub:
      "Replace a tired furnace and AC with one quiet dual-fuel system. Salem homes get our $1,450 credit in place of the Rocky Mountain Power rebate.",
    heroImg: { src: "/images/amana-system-side-eco-home-van.jpg", alt: "Amana heat pump and furnace beside an Eco Home van", pos: "55% 55%" },
    primaryCta: "INSTANT",
    intro: [
      "In a dual-fuel setup, a variable-speed heat pump cools the house in summer and heats it through fall and spring. When a cold snap arrives, the gas furnace takes over without you touching the thermostat.",
      "Eco Home has helped more than 2,000 Utah homeowners. A Salem install comes with a room-by-room load calculation, the Salem City permit, haul-away of the old equipment, and the paperwork for our $1,450 credit and the Enbridge rebate.",
    ],
    factorsTitle: "Why Salem homes choose dual fuel",
    factors: [
      { title: "The rebate gap, covered", body: "Salem City power and SESD customers don’t qualify for Wattsmart. We credit $1,450, and Enbridge Gas adds $700 to $1,000, for $2,150 to $2,450, guaranteed." },
      { title: "Heat from two sources", body: "Electric heat on mild days, gas on the coldest nights, picked automatically." },
      { title: "Calm, steady airflow", body: "Variable speed means fewer loud startups and no blasts of air." },
    ],
    listTitle: "Included with every Salem install",
    listIntro: "All in one price.",
    list: [
      { title: "Manual J load calculation", body: "Equipment sized to the house, not copied from the old unit." },
      { title: "Salem City permit and inspection", body: "Not every HVAC company pulls permits. We do on every job." },
      { title: "Floors and halls covered", body: "Protection down before any equipment comes in." },
      { title: "Airflow measured and set", body: "So rooms at the end of the ducts get their share." },
      { title: "Thermostat setup and walkthrough", body: "You leave knowing how to run it." },
      { title: "Smile Guarantee", body: "One year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: { title: "What it costs in Salem", body: "Dual-fuel systems start at $9,990 after incentives, with our $1,450 credit already counted. Your price depends on the home and the efficiency you pick.", points: ["From $9,990 after incentives", "$1,450 credit from Eco Home", "$2,150 to $2,450 in rebates, guaranteed", "0% interest for 12 months available"] },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives including Eco Home's $1,450 match" },
    updated: "2026-11-13",
    job: {
      customer: "Stephanie H.",
      title: "Stephanie wanted a crew she could trust. Her Salem home got a quiet system and comfortable back rooms.",
      problem: "Her aging system was noisy at night and weak at the far end of the house, and she didn’t want a crew that cut corners or left a mess.",
      solution: "We installed a variable-speed heat pump and gas furnace, kept the house covered and tidy, set the blower for even airflow and walked her through the thermostat.",
      result: "A quiet house at night, and back bedrooms that keep up with the rest of the home.",
    },
    faqs: [
      { q: "Why don’t Salem homes get the Wattsmart rebate?", a: "Wattsmart is a Rocky Mountain Power program, and Salem has its own city power. Eco Home credits the same $1,450, and the Enbridge Gas ThermWise rebate of $700 or $1,000 applies as usual." },
      { q: "Part of Salem is on SESD. Does the credit still apply?", a: "Yes. Every home that isn’t on Rocky Mountain Power gets the $1,450 credit on any heat pump we install." },
      { q: "Do I still need a gas furnace with a heat pump?", a: "For Utah winters we recommend it. The furnace covers the coldest nights so the heat pump never struggles." },
      { q: "How long is a Salem install?", a: "One day for most homes." },
      { q: "Can I spread out the cost?", a: "Yes. 0% interest for 12 months is available." },
    ],
  },

  // ================================================================ SALT LAKE CITY
  // ---------------------------------------------------------------- FURNACE REPAIR
  {
    city: "salt-lake-city",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in Salt Lake City, UT, Open 24/7",
    metaDescription:
      "Salt Lake City furnace repair, open 24/7. A $129 diagnostic and the repair price before any work. Clanking, no heat or short cycling, all brands.",
    h1: "Furnace repair in Salt Lake City, UT",
    heroSub:
      "No heat on a January night in Salt Lake City? We’re open 24/7. Start with a $129 diagnostic, and see the repair price before any work.",
    heroImg: { src: "/images/furnace-tech-thumbs-up.jpg", alt: "Eco Home technician beside an open gas furnace after a repair", pos: "50% 35%" },
    primaryCta: "BOOK",
    intro: [
      "Salt Lake City has some of the oldest furnaces on the Wasatch Front, tucked into the basements of bungalows and ramblers that have been through decades of winters. A furnace that clanks, short cycles or won’t light usually gives some warning first, and catching it early often keeps the repair small.",
      "We repair all major furnace brands. Every visit starts with a full diagnostic, and you approve the price before any work begins.",
    ],
    factorsTitle: "What’s hard on Salt Lake City furnaces",
    factors: [
      {
        title: "Inversion season",
        body: "Winter inversions can hold dirty air in the Salt Lake Valley for days. Filters clog faster, airflow drops, and an overheating furnace shuts itself off on its limit switch. A fresh filter is the first thing to check.",
      },
      {
        title: "Older furnaces in tight basements",
        body: "Many Salt Lake City furnaces sit in small basement utility rooms that were never designed for them. Dust and poor combustion air wear out inducer motors and flame sensors faster.",
      },
      {
        title: "Long January nights",
        body: "January lows average in the mid-20s here. A furnace that runs long cycles all night puts the most wear on its ignitor, blower motor and control board.",
      },
    ],
    listTitle: "Furnace repairs we handle in Salt Lake City",
    listIntro: "Many are fixed on the first visit.",
    list: [
      { title: "Clanking or banging", body: "A loose blower wheel, a failing inducer motor or delayed ignition. All of them get worse if they’re ignored." },
      { title: "No heat", body: "We test the ignitor, flame sensor, pressure switch and control board, and replace only what failed." },
      { title: "Short cycling", body: "Usually a dirty flame sensor, a clogged filter or a furnace that’s too big for the house." },
      { title: "Hot upstairs, cold main floor", body: "Often an airflow or duct balance problem in an older home, not a bad furnace." },
      { title: "A burning or gas smell", body: "Dust burning off at the first cold snap is normal. A gas smell is not: leave the house and call Enbridge Gas first." },
      { title: "Thermostat problems", body: "Wiring or settings that keep a good furnace from responding." },
    ],
    price: {
      title: "A clear price before any repair",
      body: "A furnace diagnostic is $129. You see the repair price up front and decide before we start.",
      points: ["$129 diagnostic", "Upfront repair price", "Essential Care Plan members save 10%", "Backed by our Smile Guarantee"],
    },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-10-19",
    decideTitle: "Repair or replace?",
    decide: [
      "If your furnace is under about 15 years old and the repair is reasonable, repair it, and we’ll tell you so.",
      "If it’s past 20 years old, clanking, or needs a major part, price a replacement first. Mark T. in Sugar House replaced a 24-year-old furnace and AC with a heat pump and high-efficiency furnace and stacked $3,450 in rebates. A furnace on its own starts at $3,990, installed in one day.",
    ],
    safety: {
      title: "Smell gas? Leave, then call.",
      body: "If you smell rotten eggs, get everyone outside and don’t flip switches or light anything. From outside, call Enbridge Gas at 1-800-767-1689 or 911. Call us for the furnace once the gas company says the home is safe.",
    },
    faqs: [
      {
        q: "Do you offer 24/7 furnace repair in Salt Lake City?",
        a: "Yes. We’re open 24/7, including nights, weekends and holidays. Call 801-396-0019 or book online any time.",
      },
      {
        q: "How much does furnace repair cost in Salt Lake City?",
        a: "The diagnostic is $129, and you see the repair price before any work. Flame sensors and ignitors are small repairs; blower and inducer motors cost more. Essential Care Plan members save 10%.",
      },
      {
        q: "Why does my furnace clank when it runs?",
        a: "Usually a loose blower wheel, a worn motor mount or a failing inducer motor. It rarely fixes itself, so have it checked before a small repair turns into a big one.",
      },
      {
        q: "Why does my furnace keep shutting off during inversions?",
        a: "Dirty air clogs the filter faster, the furnace overheats, and its safety switch shuts it down. Replace the filter first; if it keeps happening, call us.",
      },
      {
        q: "Is my 20-year-old furnace worth fixing?",
        a: "For a small part, often yes. For a major repair, compare it with a new system: Salt Lake City homes get at least $2,150 in guaranteed rebates on a heat pump paired with a gas furnace.",
      },
    ],
  },

  // ---------------------------------------------------------------- AC REPAIR
  {
    city: "salt-lake-city",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in Salt Lake City, UT, Open 24/7",
    metaDescription:
      "Salt Lake City AC repair, open 24/7: a $129 diagnostic and an upfront repair price. Warm air, a hot upstairs or a noisy outdoor unit, all brands.",
    h1: "AC repair in Salt Lake City, UT",
    heroSub:
      "July afternoons in Salt Lake City average in the mid-90s. If your AC quits, we’re open 24/7, with a $129 diagnostic and a price before any work.",
    heroImg: { src: "/images/tech-eco-home-shirt-heat-pump.jpg", alt: "Eco Home technician working on an outdoor unit beside a brick home", pos: "45% 50%" },
    primaryCta: "BOOK",
    intro: [
      "Older Salt Lake City homes ask a lot of an air conditioner. Upstairs bedrooms in bungalows and story-and-a-half homes heat up fast, and an aging AC can run all afternoon without catching up. When you need air conditioning repair, we take calls and online bookings 24/7.",
      "We fix all major AC and heat pump brands. You get a full diagnostic, a clear explanation of what failed and the price before we start.",
    ],
    factorsTitle: "What wears out Salt Lake City air conditioners",
    factors: [
      {
        title: "Mid-90s July afternoons",
        body: "Long run times in July and August wear out capacitors, contactors and fan motors, the parts that fail most often.",
      },
      {
        title: "Hot upstairs rooms",
        body: "In older homes, upstairs rooms often have few or undersized ducts. Sometimes the AC is fine and the problem is airflow, so we check both.",
      },
      {
        title: "Outdoor units in tight spaces",
        body: "Many city lots put the outdoor unit against a wall or under a window. Poor airflow around the coil makes it run hotter, louder and less efficiently.",
      },
    ],
    listTitle: "AC repairs we make in Salt Lake City",
    listIntro: "Most are handled in one visit.",
    list: [
      { title: "Warm air", body: "A failed capacitor, contactor or fan motor, a dirty coil, or low refrigerant from a leak." },
      { title: "A loud or vibrating outdoor unit", body: "Worn motor bearings, a loose fan blade or a unit that’s settled off level." },
      { title: "Upstairs won’t cool", body: "We check airflow, return ducts and refrigerant charge before recommending anything." },
      { title: "Won’t turn on", body: "A tripped breaker, a blown disconnect fuse, a thermostat problem or a full condensate drain." },
      { title: "Ice on the lines", body: "Low airflow or low refrigerant. Turn it off and call so the compressor isn’t damaged." },
      { title: "Water near the furnace", body: "A plugged condensate line or cracked drain pan, a quick fix if it’s caught early." },
    ],
    price: {
      title: "Upfront pricing on every AC repair",
      body: "Every AC repair starts with a $129 diagnostic, and you see the price for the fix before we begin.",
      points: ["$129 diagnostic", "Price before any work", "10% off for Essential Care Plan members", "Smile Guarantee on repairs"],
    },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-10-19",
    decideTitle: "When to stop repairing it",
    decide: [
      "An AC under about 12 years old with a reasonable repair is usually worth fixing.",
      "If it’s older, runs on R-22 or needs a compressor, compare the repair with a heat pump. It cools like an AC, heats most of the winter, and Salt Lake City homes get $1,450 back from Rocky Mountain Power, guaranteed, on every heat pump we install.",
    ],
    faqs: [
      {
        q: "How fast can you get to my Salt Lake City home?",
        a: "We’re open 24/7 and take calls and online bookings any time. Call 801-396-0019, and many AC repairs are finished in one visit.",
      },
      {
        q: "How much does AC repair cost in Salt Lake City?",
        a: "A $129 diagnostic, then an upfront price. A capacitor or contactor costs much less than a refrigerant leak repair or a compressor. Essential Care Plan members save 10%.",
      },
      {
        q: "Why is the upstairs of my older home so hot?",
        a: "Older Salt Lake City homes often have few or undersized ducts upstairs, and heat rises. A single-speed AC shuts off before it mixes the air. A variable-speed heat pump runs longer and steadier, which is how Mark T. in Sugar House got rid of a 14° difference between floors.",
      },
      {
        q: "Why is my outdoor AC unit so loud?",
        a: "Worn fan motor bearings, a loose fan blade or a failing compressor are common causes. A unit that suddenly gets louder should be checked soon.",
      },
      {
        q: "Should I repair my old AC or replace it with a heat pump?",
        a: "Repair it if it’s under about 12 years old and the fix is reasonable. If it’s older or needs a compressor, a heat pump is usually the better buy, with a guaranteed $1,450 Rocky Mountain Power rebate.",
      },
    ],
  },

  // ---------------------------------------------------------------- HEAT PUMP INSTALLATION
  {
    city: "salt-lake-city",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in Salt Lake City, UT",
    metaDescription:
      "Heat pump and gas furnace systems for Salt Lake City homes from $9,990 after incentives. $2,150+ in rebates guaranteed, permit pulled, one-day install.",
    h1: "Heat pump installation in Salt Lake City, UT",
    heroSub:
      "A variable-speed heat pump paired with a gas furnace evens out older Salt Lake City homes from the basement to the upstairs bedrooms. At least $2,150 in rebates, guaranteed.",
    heroImg: { src: "/images/tech-portrait.jpg", alt: "Eco Home technician standing next to an outdoor heat pump", pos: "45% 40%" },
    primaryCta: "INSTANT",
    intro: [
      "For most Salt Lake City homes, the best upgrade is dual fuel: a variable-speed heat pump paired with a high-efficiency gas furnace. The heat pump cools all summer and heats on mild days, and the furnace takes over when temperatures drop below freezing. The system picks the cheaper source on its own.",
      "We’ve helped more than 2,000 Utah homeowners with their heating and cooling. Every Salt Lake City install includes a load calculation, the city permit, haul-away of the old equipment and the rebate paperwork.",
    ],
    factorsTitle: "Why dual fuel fits Salt Lake City",
    factors: [
      {
        title: "Made for older, uneven homes",
        body: "Bungalows and story-and-a-half homes often run much warmer upstairs. A variable-speed heat pump runs continuously at low speed, which keeps air moving between floors instead of blasting on and off.",
      },
      {
        title: "Rebates that stack",
        body: "Salt Lake City homes are on Rocky Mountain Power and Enbridge Gas, so dual fuel qualifies for $1,450 from Wattsmart plus $700 to $1,000 from ThermWise, guaranteed. Dealer rebates can add more when they’re offered.",
      },
      {
        title: "Quiet enough for a home office",
        body: "City lots put the outdoor unit close to windows and neighbors. A variable-speed heat pump runs at low speed most of the time, so it’s far quieter than an old single-stage AC.",
      },
    ],
    listTitle: "Every Salt Lake City install includes",
    listIntro: "One price, nothing left for you to chase.",
    list: [
      { title: "A load calculation", body: "Sized to your home’s square footage, insulation, windows and floors, not the old unit’s label." },
      { title: "The Salt Lake City permit", body: "Pulled through Building Services and inspected. Not every HVAC company pulls permits. We do on every job." },
      { title: "A duct and airflow check", body: "Especially in older homes, so the upstairs gets its share." },
      { title: "A one-day install", body: "Most systems are finished in a single day." },
      { title: "Rebate filing", body: "We submit your Wattsmart, ThermWise and any dealer rebates." },
      { title: "The Smile Guarantee", body: "A year on our workmanship. If something isn’t right, we fix it free." },
    ],
    price: {
      title: "What it costs in Salt Lake City",
      body: "Heat pump and gas furnace systems start at $9,990 after incentives, with $0 down and 0% interest for 12 months available. Your exact price depends on your home’s size and the efficiency you choose.",
      points: ["From $9,990 after incentives", "$2,150 to $2,450 in rebates, guaranteed", "Dealer rebates when offered", "$0 down and 0% interest for 12 months available"],
    },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-10-19",
    job: {
      customer: "Mark T.",
      title: "Mark and Sarah’s upstairs hit 82° all summer. A dual-fuel system ended the 14° swing.",
      problem: "Mark and Sarah live in a 1940s brick bungalow in Sugar House. “Our upstairs was 82° all summer, but the main floor was freezing,” Mark said. Their 24-year-old furnace clanked in the basement, the aging AC vibrated right outside the home office window, and July and August electric bills routinely climbed past $340.",
      solution: "We replaced both with a variable-speed heat pump paired with a high-efficiency natural gas furnace. The variable-speed compressor runs continuously at low speed, circulating air evenly between floors, and the system uses the heat pump on mild spring and fall days and switches to gas when temperatures drop below freezing. Their rebates stacked to $3,450: $1,450 from Rocky Mountain Power, $1,000 from Enbridge Gas and a $1,000 dealer rebate taken off the invoice, with $0 down and 0% interest for 12 months.",
      result: "The 14° difference between floors is gone, the system runs whisper-quiet, and their summer electric bill dropped from $340 to $195.",
      stats: [
        { value: "24 years", label: "Age of the old furnace and AC" },
        { value: "14°", label: "Swing between floors, now gone" },
        { value: "$340 → $195", label: "Summer electric bill" },
        { value: "$3,450", label: "Rebates stacked" },
      ],
    },
    faqs: [
      {
        q: "Do heat pumps work in Salt Lake City winters?",
        a: "Yes, paired with a gas furnace. January nights average in the mid-20s here. The heat pump handles mild days efficiently, and the furnace takes over when temperatures drop below freezing.",
      },
      {
        q: "How much can a heat pump save in Salt Lake City?",
        a: "It depends on the home, but Mark T. in Sugar House saw his summer electric bill drop from $340 to $195 after replacing a 24-year-old AC and furnace with a variable-speed heat pump and gas furnace.",
      },
      {
        q: "What rebates can I get on a heat pump in Salt Lake City?",
        a: "$1,450 from Rocky Mountain Power Wattsmart on every heat pump we install, plus $700 with an 80% furnace or $1,000 with a 96%+ furnace from Enbridge Gas ThermWise. Dealer rebates can add more when they’re offered.",
      },
      {
        q: "Will a heat pump work in my older Salt Lake City home?",
        a: "Usually. We check your ducts, electrical panel and where the outdoor unit can go. Older homes with small ducts sometimes need a few changes, and we tell you before we quote.",
      },
      {
        q: "Do I need a permit for a heat pump in Salt Lake City?",
        a: "Yes. Salt Lake City Building Services issues the permit and inspects the install. We pull it on every job, and it’s included in your price.",
      },
    ],
  },

  // ================================================================ WEST VALLEY CITY
  // ---------------------------------------------------------------- FURNACE REPAIR
  {
    city: "west-valley-city",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in West Valley City, UT, 24/7",
    metaDescription:
      "West Valley City furnace repair, open 24/7: a $129 diagnostic and the repair price before any work. Loud, old or not heating, all major brands.",
    h1: "Furnace repair in West Valley City, UT",
    heroSub:
      "Furnace rattling, short cycling or not heating at all? We’re open 24/7 for West Valley City homes, with a $129 diagnostic and the price before any work.",
    heroImg: { src: "/images/furnace-install.jpg", alt: "Eco Home technician working inside an open gas furnace", pos: "60% 50%" },
    primaryCta: "BOOK",
    intro: [
      "A lot of West Valley City homes were built in the 1960s and 1970s, and some are still running furnaces that are 25 or 30 years old. Those furnaces usually tell you they’re struggling before they quit: louder startups, rattling ducts, longer warm-up times. Catching it early keeps the repair small.",
      "Our techs work on every major brand. They find the actual cause, explain it in plain terms, and quote the fix before doing anything.",
    ],
    factorsTitle: "What wears out West Valley City furnaces",
    factors: [
      {
        title: "Age",
        body: "Furnaces past 20 years start losing parts that are hard to find, from inducer motors to control boards. We’ll tell you honestly when a repair is a good investment and when it isn’t.",
      },
      {
        title: "Valley-floor inversions",
        body: "West Valley City sits low in the Salt Lake Valley, where inversion air settles. Filters clog faster, and a furnace starved of air overheats and shuts itself off. Check the filter first.",
      },
      {
        title: "Split-level layouts",
        body: "In a split-level, one furnace serves three short floors. Rooms that never warm up are often an airflow problem rather than a bad furnace, and we check that before replacing parts.",
      },
    ],
    listTitle: "Furnace repairs we make in West Valley City",
    listIntro: "Plenty are fixed on the first visit.",
    list: [
      { title: "Loud rattling or rumbling", body: "Loose panels, a worn blower wheel or a failing inducer motor. The noise usually grows before the part fails." },
      { title: "Furnace won’t fire", body: "Ignitor, flame sensor, pressure switch or board: each gets tested so you only pay for the failed part." },
      { title: "Short cycling", body: "Often a dirty flame sensor, a clogged filter or an overheating furnace." },
      { title: "Cold lower level", body: "Common in split-levels. We check airflow and duct balance before blaming the furnace." },
      { title: "Yellow or flickering flame", body: "A sign of poor combustion that should be checked soon, for safety as much as comfort." },
      { title: "Blower that won’t stop", body: "A stuck relay, a thermostat fan set to ON, or a control board fault." },
    ],
    price: {
      title: "The price comes first",
      body: "Every furnace repair starts with a $129 diagnostic. You see the repair price before any work and decide whether to go ahead.",
      points: ["$129 to diagnose", "You approve the price first", "10% off for Care Plan members", "Smile Guarantee on the work"],
    },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-10-19",
    decideTitle: "Repair it, or replace it?",
    decide: [
      "A furnace younger than roughly 15 years with a modest repair bill is almost always worth fixing.",
      "If it’s 25 or 30 years old and getting louder, price a replacement before you put money into it. That’s what Chris P. did: his 30-year-old furnace came out, a dual-fuel system went in, and $3,450 in rebates came off. If you only want a furnace, ours start at $3,990, installed in one day.",
    ],
    safety: {
      title: "Gas smell? Get out first.",
      body: "If you smell rotten eggs, leave the house with everyone, without flipping switches or lighting anything. Once you’re outside, call Enbridge Gas at 1-800-767-1689 or 911. Call us for the furnace after the gas company clears the home.",
    },
    faqs: [
      {
        q: "Is your furnace repair available 24/7 in West Valley City?",
        a: "Yes. Nights, weekends and holidays included. Call 801-396-0019 or book online whenever the heat goes out.",
      },
      {
        q: "How much does furnace repair cost in West Valley City?",
        a: "A visit starts at $129 for the diagnostic. Flame sensors and ignitors are inexpensive fixes; blower and inducer motors are the bigger ones. Care Plan members get 10% off either way.",
      },
      {
        q: "Why is my old furnace so loud?",
        a: "A worn blower wheel, a failing inducer motor or loose ductwork are the usual causes. A furnace that’s getting louder every winter is telling you something, so have it checked before January.",
      },
      {
        q: "Should I repair a 30-year-old furnace?",
        a: "Only for a small, inexpensive part. Before a major repair, get a replacement price, because a dual-fuel system in West Valley City comes with at least $2,150 in guaranteed rebates.",
      },
      {
        q: "Why is the bottom level of my split-level so cold?",
        a: "Cool air settles in the lowest level, and a single-speed furnace shuts off before the air mixes. Duct balance and a variable-speed system usually fix it.",
      },
    ],
  },

  // ---------------------------------------------------------------- AC REPAIR
  {
    city: "west-valley-city",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in West Valley City, UT, Open 24/7",
    metaDescription:
      "West Valley City AC repair, open 24/7. A $129 diagnostic and an upfront price. Warm air, a dead unit or hot back rooms, we fix all major brands.",
    h1: "AC repair in West Valley City, UT",
    heroSub:
      "West Valley City summers average in the mid-90s in July. If your AC stops cooling, we’re open 24/7, with a $129 diagnostic and a price before any work.",
    heroImg: { src: "/images/tech-leveling-heat-pump.jpg", alt: "Eco Home technician working on an outdoor unit", pos: "50% 50%" },
    primaryCta: "BOOK",
    intro: [
      "When a central AC dies in West Valley City, a lot of families fall back on window units, and some never go back. If that’s you, or your AC is limping through another summer, we can tell you whether it’s worth an air conditioning repair or whether it’s time for something better.",
      "Every brand of central AC and heat pump is fair game. We’ll show you what broke, tell you what it costs to fix, and let you decide.",
    ],
    factorsTitle: "Why West Valley City ACs fail",
    factors: [
      {
        title: "Hot valley-floor summers",
        body: "July afternoons in the mid-90s keep an AC running for hours. Capacitors, contactors and fan motors take the most wear.",
      },
      {
        title: "Second-generation equipment",
        body: "Many homes from the 1980s and 1990s are on their second AC, and some of those still run R-22 refrigerant, which is no longer produced.",
      },
      {
        title: "Back rooms far from the furnace",
        body: "In long ramblers and split-levels, the rooms farthest from the furnace get the least air. Sometimes the fix is airflow, not the AC.",
      },
    ],
    listTitle: "AC repairs we make in West Valley City",
    listIntro: "Most are done in one visit.",
    list: [
      { title: "AC stopped cooling", body: "Usually a bad capacitor or contactor, a fan motor that quit, a coil packed with dirt, or a leak." },
      { title: "AC won’t turn on", body: "Breakers, disconnect fuses, the thermostat or a drain safety switch. We check them in order." },
      { title: "Hot back bedrooms", body: "We check airflow and duct balance to the far rooms before recommending anything." },
      { title: "Ice on the copper lines", body: "Ice means the system is starved of air or refrigerant. Turn the AC off to protect the compressor and call us." },
      { title: "Water leaking indoors", body: "A plugged condensate drain or cracked pan, usually a quick fix when caught early." },
      { title: "Loud outdoor unit", body: "Worn fan bearings, a loose blade or a struggling compressor." },
    ],
    price: {
      title: "An upfront price on every AC repair",
      body: "We charge $129 to diagnose the problem, then quote the repair. Nothing happens until you say yes.",
      points: ["$129 to diagnose", "Quote before any work", "Care Plan members save 10%", "Repairs covered by the Smile Guarantee"],
    },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-10-19",
    decideTitle: "Repair, or move past window units for good?",
    decide: [
      "If your AC is under about 12 years old and the repair is reasonable, fix it.",
      "If it’s older, on R-22, or already dead and replaced by window units, look at a heat pump. It cools the whole house through your ducts, does most of the winter heating, and comes with a guaranteed $1,450 Wattsmart rebate.",
    ],
    faqs: [
      {
        q: "How quickly can you get to my West Valley City home?",
        a: "Any hour, any day. Call 801-396-0019 or book online; most AC problems we see are fixed in a single trip.",
      },
      {
        q: "How much does AC repair cost in West Valley City?",
        a: "Diagnosis is $129, and the repair is quoted before we start. Capacitors and contactors are on the low end; leak repairs and compressors on the high end. Care Plan members save 10%.",
      },
      {
        q: "My central AC died and we’re using window units. What should I do?",
        a: "Get a price on a heat pump before another summer of window units. It cools the whole house through your existing ducts, heats most of the winter with your furnace as backup, and gets a guaranteed $1,450 rebate.",
      },
      {
        q: "Why are the back rooms always hotter?",
        a: "They’re usually the farthest from the furnace, so they get the least air. Leaky or undersized ducts make it worse. We check airflow before recommending anything.",
      },
      {
        q: "Can you still repair an R-22 air conditioner?",
        a: "Yes, but R-22 is no longer produced, so recharging is expensive. If yours needs refrigerant or a major part, a heat pump is usually the better buy.",
      },
    ],
  },

  // ---------------------------------------------------------------- HEAT PUMP INSTALLATION
  {
    city: "west-valley-city",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in West Valley City, UT",
    metaDescription:
      "Heat pump and gas furnace systems for West Valley City homes from $9,990 after incentives. $2,150+ in rebates guaranteed, installed in one day.",
    h1: "Heat pump installation in West Valley City, UT",
    heroSub:
      "Replace an old furnace, a dead AC or a house full of window units with one quiet system: a variable-speed heat pump paired with a gas furnace. At least $2,150 in rebates, guaranteed.",
    heroImg: { src: "/images/heat-pumps-pair.jpg", alt: "Two inverter heat pumps installed on a paver patio beside a home", pos: "35% 50%" },
    primaryCta: "INSTANT",
    intro: [
      "Most West Valley City homes are best served by dual fuel. An inverter heat pump does the cooling and the shoulder-season heating, a new gas furnace handles sub-freezing weather, and the thermostat hands off between them based on whichever costs less to run at that temperature.",
      "More than 2,000 Utah homeowners have trusted us with their heating and cooling. In West Valley City, that means sizing the system to your house, getting it permitted and inspected, hauling off the old furnace, AC and window units, and filing every rebate.",
    ],
    factorsTitle: "Why dual fuel fits West Valley City",
    factors: [
      {
        title: "One system instead of window units",
        body: "A heat pump uses your existing ducts to cool every room at once, quietly, so the window units can come out for good.",
      },
      {
        title: "Both rebates apply",
        body: "Homes here buy power from Rocky Mountain Power and gas from Enbridge, so one dual-fuel install earns two utility rebates: $1,450 for the heat pump and $700 to $1,000 for the furnace. Manufacturer rebates sometimes stack on top.",
      },
      {
        title: "Cheapest fuel, automatically",
        body: "January nights here average in the mid-20s. The heat pump handles mild days, and the furnace takes over when it’s colder and gas costs less to run.",
      },
    ],
    listTitle: "Every West Valley City install includes",
    listIntro: "One price covers all of it.",
    list: [
      { title: "Sizing that fits the house", body: "We measure rooms, windows, insulation and levels instead of copying the old unit’s tonnage." },
      { title: "The West Valley City permit", body: "Pulled through the Building Inspection Division and inspected. Not every HVAC company pulls permits. We do on every job." },
      { title: "Window unit removal", body: "If you’ve been getting by with window units, we take them out when the new system goes in." },
      { title: "In and out in a day", body: "Most West Valley City installs start in the morning and are running by evening." },
      { title: "Paperwork handled", body: "Wattsmart, ThermWise and dealer rebate forms are filed by our office, not you." },
      { title: "Backed by the Smile Guarantee", body: "Our workmanship is covered for a year; if anything we did isn’t right, the fix is free." },
    ],
    price: {
      title: "What it costs in West Valley City",
      body: "A dual-fuel system starts at $9,990 once rebates come off. The final number depends on square footage and which efficiency tier you pick, and you can spread it out at 0% for the first 12 months.",
      points: ["Starts at $9,990 after rebates", "Utility rebates of $2,150 to $2,450, guaranteed", "Manufacturer rebates when available", "0% for 12 months on approved credit"],
    },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-10-19",
    job: {
      customer: "Chris P.",
      title: "Chris’s 30-year-old furnace sounded like a freight train. Dual fuel replaced it, and the window units.",
      problem: "Chris had been nursing a 30-year-old furnace along in his 1970s split-level. “It sounded like a freight train rattling through the floorboards every time it kicked on, and we were terrified it would give out in January,” he told us. His central AC had stopped working three summers earlier, so the family relied on noisy window units that ran constantly, ran up the power bill and still left the back rooms stifling.",
      solution: "We removed the window units and replaced the old equipment with a variable-speed heat pump and a high-efficiency natural gas furnace. The heat pump cools quietly on the hottest days and handles mild-weather heating, and the system switches to the gas furnace during sub-freezing storms, when gas is the cheaper fuel. Chris’s incentives added up to $3,450, made up of the $1,450 Wattsmart rebate, $1,000 from ThermWise and $1,000 from the manufacturer off the invoice, and he financed the rest at 0% for a year.",
      result: "Three window units gone, a furnace that no longer shakes the floor, and balanced, quiet heating and cooling in every room.",
      stats: [
        { value: "30 years", label: "Age of the old furnace" },
        { value: "3", label: "Window units removed" },
        { value: "$3,450", label: "Rebates stacked" },
        { value: "0%", label: "Interest for 12 months" },
      ],
    },
    faqs: [
      {
        q: "Do heat pumps work in West Valley City winters?",
        a: "Paired with a gas furnace, yes. On a 40° day the heat pump is the cheaper heat; on a 10° night the furnace is. A dual-fuel thermostat switches between them for you.",
      },
      {
        q: "Can a heat pump replace my window AC units?",
        a: "Yes, if your home has ducts. A heat pump cools every room through the ducts, much more quietly than window units. Rooms without ducts can get a ductless mini-split.",
      },
      {
        q: "What rebates can I get on a heat pump in West Valley City?",
        a: "Wattsmart pays $1,450 per heat pump we install. ThermWise adds $700 for an 80% furnace or $1,000 for a 96%+ model. When Amana or ACiQ run a dealer rebate, that comes off the invoice too, as it did for Chris P.",
      },
      {
        q: "How much does a heat pump cost in West Valley City?",
        a: "Dual-fuel systems start at $9,990 after rebates. For a number specific to your house, the instant pricing tool asks a few questions and gives you a price in about two minutes.",
      },
      {
        q: "Do I need a permit for a heat pump in West Valley City?",
        a: "Yes, the city’s Building Inspection Division inspects every heat pump and furnace install. The permit is part of every Eco Home job and part of the quoted price.",
      },
    ],
  },

  // ================================================================ WEST JORDAN
  // ---------------------------------------------------------------- FURNACE REPAIR
  {
    city: "west-jordan",
    slug: "furnace-repair",
    serviceName: "Furnace repair",
    mainHref: "/services/furnace-repair",
    metaTitle: "Furnace Repair in West Jordan, UT, Open 24/7",
    metaDescription:
      "West Jordan furnace repair any hour: $129 to diagnose, and you approve the repair price first. Short cycling, no heat or a cold upstairs, all brands.",
    h1: "Furnace repair in West Jordan, UT",
    heroSub:
      "Furnace short-cycling in a cold snap, or not lighting at all? West Jordan homeowners can reach us 24/7. It’s $129 to diagnose, and you see the repair price first.",
    heroImg: { src: "/images/aciq-furnace-basement-install.jpg", alt: "Gas furnace installed in a basement utility room", pos: "50% 40%" },
    primaryCta: "BOOK",
    intro: [
      "Thousands of West Jordan homes went up in the 1990s and 2000s, and the furnaces installed back then are now 20 to 25 years old. At that age, short cycling during cold snaps is one of the first warning signs, followed by slow warm-ups and louder starts.",
      "Our technicians service every major brand. They track down what’s actually failing and give you a firm price before touching it.",
    ],
    factorsTitle: "Why West Jordan furnaces start failing",
    factors: [
      {
        title: "Original equipment hitting 20-plus",
        body: "Most of the city’s furnaces date to the building boom. Past 20 years, ignitors, inducer motors and control boards wear out, and parts get harder to source.",
      },
      {
        title: "Cold snaps after mild weeks",
        body: "A furnace that idles through a mild stretch and then runs hard through a cold snap gets the most strain. That’s when weak flame sensors and pressure switches show up.",
      },
      {
        title: "Two floors, one furnace",
        body: "One furnace pushing air to two stories often overheats the main floor while the upstairs lags. That’s usually airflow and ducts, which we check before replacing parts.",
      },
    ],
    listTitle: "Furnace problems we fix in West Jordan",
    listIntro: "A first visit takes care of many of them.",
    list: [
      { title: "Short cycling in cold weather", body: "Starts, runs a few minutes, quits. Usually a flame sensor, a choked filter or an overheating heat exchanger." },
      { title: "Won’t light", body: "Each part in the ignition sequence is tested until we find the one that failed." },
      { title: "Upstairs too cold", body: "Typically duct balance or blower speed in a two-story home." },
      { title: "Long, loud startups", body: "An inducer motor on its way out, or burners lighting late." },
      { title: "Constant blower", body: "A stuck relay, a board fault or a thermostat fan left on." },
      { title: "Smart thermostat problems", body: "Miswired or misconfigured thermostats can stop a healthy furnace from running." },
    ],
    price: {
      title: "Know the cost before we start",
      body: "Diagnosis is $129. You get the repair price, in writing, and nothing happens until you approve it.",
      points: ["$129 diagnosis", "Written price before work", "Care Plan members save 10%", "Smile Guarantee on repairs"],
    },
    offer: { price: 129, description: "Furnace diagnostic; repair priced upfront before any work" },
    updated: "2026-10-19",
    decideTitle: "Fix the old furnace, or move on?",
    decide: [
      "Under 15 years old with a modest repair? Keep it running.",
      "Twenty-plus years old and short cycling? Compare the repair to a new dual-fuel system first. Jared N. near Jordan Landing replaced his 22-year-old furnace and AC together, took $3,150 in rebates, and cut his summer electric bill 43%. Furnaces alone start at $3,990, installed in one day.",
    ],
    safety: {
      title: "Smell gas? Everyone out.",
      body: "A rotten-egg smell means leave now. Don’t use switches, phones or anything that could spark inside. From outside, call Enbridge Gas at 1-800-767-1689 or 911, then call us once the gas company clears the house.",
    },
    faqs: [
      {
        q: "Can I get furnace repair in West Jordan at night or on weekends?",
        a: "Yes. We’re open 24/7, holidays included. Call 801-396-0019 or book online.",
      },
      {
        q: "What does furnace repair cost in West Jordan?",
        a: "$129 to diagnose, then a written repair price. A flame sensor or ignitor is a small bill; an inducer or blower motor is a larger one. Care Plan members get 10% off.",
      },
      {
        q: "Why does my furnace short cycle when it gets really cold?",
        a: "A dirty flame sensor or clogged filter is the usual cause. The furnace either loses its flame signal or overheats and shuts itself off.",
      },
      {
        q: "My furnace is 22 years old. Is it worth repairing?",
        a: "For a cheap part, maybe. For anything significant, get a replacement price: West Jordan homes receive at least $2,150 in guaranteed rebates on a heat pump plus gas furnace.",
      },
      {
        q: "Do you fix furnaces that came with the house?",
        a: "Yes, including builder-grade units from the 1990s and 2000s, and every major brand.",
      },
    ],
  },

  // ---------------------------------------------------------------- AC REPAIR
  {
    city: "west-jordan",
    slug: "ac-repair",
    serviceName: "AC repair",
    mainHref: "/services/ac-repair",
    metaTitle: "AC Repair in West Jordan, UT, Open 24/7",
    metaDescription:
      "West Jordan AC repair, 24/7. $129 to diagnose, written price before work. Hot west-facing rooms, warm air or an AC that never stops running.",
    h1: "AC repair in West Jordan, UT",
    heroSub:
      "AC running all afternoon and the upstairs still hot? We repair air conditioners across West Jordan 24/7, with a $129 diagnosis and a price you approve first.",
    heroImg: { src: "/images/tech-heat-pump-install.jpg", alt: "Eco Home technician connecting gauges to an outdoor unit beside a basement window", pos: "45% 50%" },
    primaryCta: "BOOK",
    intro: [
      "West Jordan’s two-story homes are hard on air conditioners. Bedrooms that face west soak up afternoon sun, the AC runs for hours, and a 20-year-old unit eventually can’t keep pace. If you need air conditioning repair, call any time.",
      "We work on every major AC and heat pump brand, show you what’s wrong, and quote the fix before doing it.",
    ],
    factorsTitle: "What pushes West Jordan ACs to the limit",
    factors: [
      {
        title: "West-facing upstairs rooms",
        body: "Afternoon sun on the west side of a two-story house adds heat faster than an aging single-speed AC can remove it.",
      },
      {
        title: "Nonstop summer run times",
        body: "Running from June through August without a break wears capacitors, contactors and outdoor fan motors first.",
      },
      {
        title: "Equipment from the building boom",
        body: "Units installed in the late 1990s and early 2000s are past their expected life, and some still run R-22.",
      },
    ],
    listTitle: "AC repairs we handle in West Jordan",
    listIntro: "We finish most in one trip.",
    list: [
      { title: "Never shuts off", body: "Low refrigerant, a dirty coil, leaky ducts or a unit that’s simply too small." },
      { title: "Warm air", body: "Often a capacitor, contactor or fan motor; sometimes a leak." },
      { title: "Hot upstairs bedrooms", body: "We look at return air, duct sizing and charge before quoting anything." },
      { title: "Won’t start", body: "Breaker, disconnect fuse, thermostat or a tripped condensate switch." },
      { title: "Frozen lines", body: "Turn it off. Ice points to airflow or refrigerant problems that can kill a compressor." },
      { title: "Leaking water", body: "A clogged drain line or cracked pan near the furnace." },
    ],
    price: {
      title: "Straightforward AC repair pricing",
      body: "$129 covers the diagnosis. You get the repair price in writing and decide from there.",
      points: ["$129 diagnosis", "Written price first", "10% off with the Care Plan", "Smile Guarantee"],
    },
    offer: { price: 129, description: "AC diagnostic; repair priced upfront before any work" },
    updated: "2026-10-19",
    decideTitle: "Is it worth fixing?",
    decide: [
      "An AC younger than about 12 years with a reasonable repair: fix it.",
      "An original late-1990s or 2000s unit, an R-22 system or a failed compressor: look at a heat pump instead. It cools both floors more evenly and comes with a guaranteed $1,450 Rocky Mountain Power rebate in West Jordan.",
    ],
    faqs: [
      {
        q: "Do you do emergency AC repair in West Jordan?",
        a: "Yes, around the clock. Call 801-396-0019 or book online, and most repairs wrap up on the first visit.",
      },
      {
        q: "What does AC repair cost in West Jordan?",
        a: "$129 to diagnose. Capacitors and contactors are inexpensive; leak repairs and compressors are not. You see the number first, and Care Plan members save 10%.",
      },
      {
        q: "Why won’t my west-facing bedrooms cool down?",
        a: "Afternoon sun heats them faster than an older single-speed AC can cool them, and they’re often at the end of the duct run. Jared N. near Jordan Landing fixed exactly this with a variable-speed heat pump.",
      },
      {
        q: "My AC runs all day. Is that normal?",
        a: "On a 100° afternoon, long runs are fine. If it runs all day and the house never cools, it may be low on refrigerant, losing air through ducts or undersized.",
      },
      {
        q: "Should I replace a 20-year-old AC with a heat pump?",
        a: "Usually. A heat pump cools like an AC, heats most of the winter with your furnace as backup, and earns a guaranteed $1,450 rebate here.",
      },
    ],
  },

  // ---------------------------------------------------------------- HEAT PUMP INSTALLATION
  {
    city: "west-jordan",
    slug: "heat-pump-installation",
    serviceName: "Heat pump installation",
    mainHref: "/heat-pumps",
    metaTitle: "Heat Pump Installation in West Jordan, UT",
    metaDescription:
      "Dual-fuel heat pump systems for West Jordan two-story homes from $9,990 after incentives, with $2,150+ in guaranteed rebates and a one-day install.",
    h1: "Heat pump installation in West Jordan, UT",
    heroSub:
      "A variable-speed heat pump and gas furnace keep both floors of a West Jordan two-story comfortable, and they cost less to run than the system you have. At least $2,150 in rebates, guaranteed.",
    heroImg: { src: "/images/heat-pump-install-vacuum.jpg", alt: "New inverter heat pump on its pad with gauges and a vacuum pump connected during an install", pos: "50% 55%" },
    primaryCta: "INSTANT",
    intro: [
      "In a West Jordan two-story, the problem is rarely the size of the AC. It’s that a single-speed system blasts cold air, shuts off and lets the upstairs bake. A variable-speed heat pump runs slower and longer, so cool air reaches the second floor and stays there. Paired with a gas furnace, it also handles most of the winter heating.",
      "Eco Home has installed heating and cooling for more than 2,000 Utah homeowners. A West Jordan install covers sizing, the permit and inspection, removing the old equipment and every rebate form.",
    ],
    factorsTitle: "Why West Jordan homes do well with dual fuel",
    factors: [
      {
        title: "Built for two floors",
        body: "Variable-speed airflow keeps the upstairs much closer to the main floor’s temperature than a single-speed system that blasts on and off.",
      },
      {
        title: "Guaranteed rebates here",
        body: "As Rocky Mountain Power and Enbridge Gas customers, West Jordan homeowners get $1,450 for the heat pump and $700 to $1,000 for the furnace. Manufacturer rebates can stack on top.",
      },
      {
        title: "Cheaper heating most of the winter",
        body: "On mild winter days the heat pump heats for less than gas. When it’s truly cold, the furnace takes over, and the thermostat handles the switch.",
      },
    ],
    listTitle: "What a West Jordan install includes",
    listIntro: "Everything below is in the price.",
    list: [
      { title: "Room-by-room sizing", body: "We calculate the load for each floor instead of matching the old unit." },
      { title: "Permit and inspection", body: "Through West Jordan’s building department. Not every HVAC company pulls permits. We do on every job." },
      { title: "Upstairs airflow check", body: "Returns and supply ducts to the second floor get looked at before we quote." },
      { title: "Done in a day", body: "Most systems are installed and running the same day we start." },
      { title: "All the rebate forms", body: "Wattsmart, ThermWise and any dealer rebate, filed by us." },
      { title: "One-year Smile Guarantee", body: "If our workmanship isn’t right, we come back and fix it at no charge." },
    ],
    price: {
      title: "Dual fuel pricing in West Jordan",
      body: "Systems start at $9,990 after rebates. Size and efficiency tier set the final price, and 12 months at 0% interest is available.",
      points: ["$9,990 and up after rebates", "$2,150–$2,450 in utility rebates, guaranteed", "Manufacturer rebates when offered", "12 months at 0%"],
    },
    offer: { price: 9990, description: "Heat pump and gas furnace system, starting price after incentives" },
    updated: "2026-10-19",
    job: {
      customer: "Jared N.",
      title: "Jared’s west-facing bedrooms never cooled. Now both floors do, and his summer bill is down 43%.",
      problem: "Jared lives in a late-1990s two-story near Jordan Landing. “Our AC ran non-stop from June to August, but the west-facing bedrooms that take the afternoon sun never cooled down,” he told us. His 22-year-old furnace had started short-cycling during winter cold snaps, and summer electric bills averaged $290 a month.",
      solution: "We installed a dual-fuel system: a variable-speed heat pump matched with a natural gas furnace. Instead of blasting on and off, the variable-speed motor adjusts itself to hold the same temperature on both levels. In winter, the system runs the heat pump when it’s the cheaper option and switches to gas when it’s colder. Jared’s rebates came to $3,150: $1,450 from Rocky Mountain Power, $700 from Enbridge Gas and a $1,000 dealer rebate off the invoice, with 12 months at 0%.",
      result: "Both floors stay comfortable, the furnace no longer short-cycles, and his summer electric bill dropped from $290 to $165 a month.",
      stats: [
        { value: "22 years", label: "Age of the old system" },
        { value: "$290 → $165", label: "Summer electric bill" },
        { value: "43%", label: "Lower summer bill" },
        { value: "$3,150", label: "Rebates stacked" },
      ],
    },
    faqs: [
      {
        q: "Will a heat pump cool the upstairs of my two-story home?",
        a: "Yes, that’s where variable speed helps most. It runs longer at lower speed, so cool air keeps reaching the second floor. Jared N. in West Jordan solved his hot west-facing bedrooms this way.",
      },
      {
        q: "How much can a heat pump lower my bills in West Jordan?",
        a: "It depends on the house. Jared N.’s summer electric bill went from $290 to $165 a month, a 43% drop, after replacing a 22-year-old system.",
      },
      {
        q: "What rebates do West Jordan homes get?",
        a: "Rocky Mountain Power pays $1,450 per heat pump we install. Enbridge Gas adds $700 for an 80% furnace or $1,000 for 96%+. Dealer rebates, when offered, come off the invoice.",
      },
      {
        q: "Does a heat pump work in winter here?",
        a: "With a gas furnace as backup, yes. The heat pump handles mild days and the furnace takes the coldest ones.",
      },
      {
        q: "Is a permit needed for a heat pump in West Jordan?",
        a: "Yes. We pull the permit and schedule the inspection on every install, at no extra charge.",
      },
    ],
  },

  // ================================================================ UTAH COUNTY
  // ---------------------------------------------------------------- AC REPLACEMENT
  {
    city: "utah-county",
    slug: "ac-replacement",
    serviceName: "AC replacement",
    mainHref: "/services/ac-replacement",
    metaTitle: "AC Replacement in Utah County, UT",
    metaDescription:
      "Replacing an AC in Utah County? A heat pump cools like an AC and heats most of the winter. $2,150+ in rebates guaranteed, installed in one day.",
    h1: "AC replacement in Utah County, UT",
    heroSub:
      "When your air conditioner wears out, replace it with a heat pump. It cools like an AC, heats most of the winter alongside your gas furnace, and gets a guaranteed $1,450 rebate in every Utah County city.",
    heroImg: { src: "/images/heat-pump-install-lawn.jpg", alt: "New inverter heat pump installed in place of an old air conditioner beside a Utah home", pos: "55% 50%" },
    primaryCta: "INSTANT",
    intro: [
      "Most Utah County homes have a gas furnace and a central air conditioner, and a central AC usually lasts about 12 to 15 years. When yours gives out, there’s a better choice than another AC: an inverter heat pump. It cools your home all summer just like an air conditioner, and it heats most of the winter for less, with your gas furnace taking over on the coldest nights.",
      "That’s the replacement we recommend for nearly every Utah County home, and it’s what we installed for Trent B. in American Fork, Charles H. in Orem and Bryce K. in Lehi. Every replacement includes a load calculation, the permit, haul-away of the old unit and the rebate paperwork.",
    ],
    factorsTitle: "Why a heat pump beats a new AC in Utah County",
    factors: [
      {
        title: "Same cooling, plus heat",
        body: "A heat pump is an air conditioner that can also run in reverse. In summer it cools exactly like an AC. From fall to spring it heats your home on all but the coldest days, so your gas furnace runs much less.",
      },
      {
        title: "A guaranteed rebate in every city",
        body: "Most Utah County cities are on Rocky Mountain Power, which pays $1,450 on every heat pump we install. Provo, Lehi, Springville and Spanish Fork run their own city power, so we match the $1,450 there with a credit from Eco Home.",
      },
      {
        title: "Made for Utah County winters",
        body: "January lows here run from the mid-teens in Lehi and American Fork to around 20°F in Orem. Paired with your gas furnace, a variable-speed heat pump handles that easily, because the furnace covers the coldest nights.",
      },
    ],
    listTitle: "Signs your AC is ready to be replaced",
    listIntro: "If two or more of these sound familiar, get a replacement price before paying for another repair.",
    list: [
      { title: "It’s past 12 to 15 years old", body: "Breakdowns get more frequent and efficiency keeps sliding as an AC reaches the end of its life." },
      { title: "It still runs on R-22", body: "R-22 refrigerant is no longer produced, so a leak on an older unit gets expensive to recharge." },
      { title: "The repair bills keep coming", body: "Several repairs in two summers, or one big quote for a compressor, usually means it’s time." },
      { title: "Upstairs rooms never cool", body: "Common in Utah County two-story homes. Sometimes it’s ducts, often it’s a tired single-speed system." },
      { title: "Summer power bills keep rising", body: "An aging AC uses more electricity for the same cooling, and the bill shows it." },
      { title: "Ice, leaks or loud noises", body: "Frozen lines, water around the furnace, or grinding and buzzing from the outdoor unit are worth a look now." },
    ],
    price: {
      title: "What AC replacement costs in Utah County",
      body: "A heat pump paired with a gas furnace starts at $9,990 after incentives. If your furnace still has years left, we can usually keep it and replace only the AC with a heat pump, which costs less. Instant pricing gives you a number for your home in about two minutes.",
      points: ["Heat pump + furnace systems from $9,990 after incentives", "$1,450 rebate guaranteed in every Utah County city", "0% interest for 12 months available", "Load calculation, permit and haul-away included"],
    },
    offer: { price: 9990, description: "Heat pump and gas furnace system replacing a central AC, starting price after incentives" },
    updated: "2026-10-19",
    decideTitle: "Replace just the AC, or the furnace too?",
    decide: [
      "If your furnace is younger than about 15 years and working well, we’ll usually keep it and replace only the AC with a heat pump. You get the heat pump’s efficiency without paying for a new furnace.",
      "If the furnace is as old as the AC, replacing both at once is usually cheaper than two separate jobs, and pairing the heat pump with a 96%+ furnace raises the Enbridge Gas rebate to $1,000.",
    ],
    faqs: [
      {
        q: "Should I replace my AC with a heat pump in Utah County?",
        a: "For most homes, yes. A heat pump cools like an AC, heats most of the winter alongside your gas furnace, and gets a guaranteed $1,450 rebate in every Utah County city. A new AC only cools.",
      },
      {
        q: "How much does it cost to replace an AC in Utah County?",
        a: "Heat pump and gas furnace systems start at $9,990 after incentives. Keeping a good furnace and replacing only the AC with a heat pump costs less. Instant pricing gives you a price for your home in about two minutes.",
      },
      {
        q: "I live in Provo, Lehi, Springville or Spanish Fork. Do I still get the rebate?",
        a: "Yes. Those cities run their own power, so the Rocky Mountain Power rebate doesn’t apply, but we match the $1,450 with a credit from Eco Home on every heat pump we install.",
      },
      {
        q: "How long does an AC replacement take?",
        a: "Most are done in one day, including recovering the refrigerant from the old unit and hauling it away.",
      },
      {
        q: "Do I need a permit to replace my AC in Utah County?",
        a: "Yes. Each city’s building department issues it, and Utah County handles homes in unincorporated areas. Not every HVAC company pulls permits. We do on every job.",
      },
    ],
  },
];

export const getCityService = (city: string, slug: string) => cityServices.find((s) => s.city === city && s.slug === slug);
export const servicesForCity = (city: string) => cityServices.filter((s) => s.city === city);
