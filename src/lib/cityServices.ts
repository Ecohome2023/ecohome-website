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
    heroImg: { src: "/images/tech-wiring-capacitor.jpg", alt: "Eco Home technician testing the wiring and capacitor inside an air conditioner", pos: "50% 50%" },
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
    heroImg: { src: "/images/ac-repair-techs-overhead.jpg", alt: "Two Eco Home technicians repairing an outdoor air conditioner", pos: "50% 50%" },
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
