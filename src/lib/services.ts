// Content for the service pages built from the shared ServicePage layout.
// Prices used here: $129 diagnostic, $39 furnace tune-up special,
// Essential Care Plan (two visits a year, 10% off repairs, waived dispatch fees).

export type ServiceKey =
  | "furnace-repair"
  | "heat-pump-repair"
  | "mini-splits"
  | "heating-tune-up"
  | "ac-repair"
  | "cooling-tune-up";

type Item = { title: string; body: string };

export type Service = {
  key: ServiceKey;
  href: string;
  kind: "repair" | "tune-up" | "install";
  parent: { label: string; href: string };
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSub: string;
  heroImg: { src: string; alt: string; pos?: string };
  trust: string[];
  listTitle: string;
  listIntro: string;
  list: Item[];
  offer: { eyebrow: string; title: string; body: string };
  stepsTitle: string;
  steps: Item[];
  pitch: { eyebrow: string; title: string; body: string; points: string[]; primary: { label: string; href: string }; secondary: { label: string; href: string } };
  safety?: { title: string; body: string };
  faqs: { q: string; a: string }[];
};


const repairSteps = (thing: string): Item[] => [
  { title: "Call or book online, day or night", body: "We’re open 24/7, including weekends and holidays. Tell us what’s going on and we’ll get a technician headed your way." },
  { title: "Find the real problem", body: `Your technician runs a full diagnostic on your ${thing} to find what’s actually wrong, not just the symptom.` },
  { title: "A clear price before any work", body: "You get an upfront price for the repair before we start. No surprises on the bill." },
  { title: "Fix it and test it", body: "We make the repair, test the whole system, clean up, and walk you through what we did. The work is backed by our Smile Guarantee." },
];

const carePlanPoints = [
  "Two maintenance visits a year, one for heating and one for cooling",
  "10% off all repairs and waived dispatch fees",
  "Priority scheduling during heat waves and cold snaps",
  "$250 a year toward new equipment, up to $1,000",
];

export const services: Record<ServiceKey, Service> = {
  "furnace-repair": {
    key: "furnace-repair",
    href: "/services/furnace-repair",
    kind: "repair",
    parent: { label: "Heating", href: "/heating" },
    metaTitle: "Furnace Repair in Utah County & Salt Lake",
    metaDescription: "24/7 furnace repair in Utah County and Salt Lake County. A $129 diagnostic, an upfront price before any work, and repairs backed by our Smile Guarantee.",
    h1: "Furnace repair in Utah County and Salt Lake County",
    heroSub: "No heat? We’re open 24/7. You get a $129 diagnostic and an upfront price before we fix anything.",
    heroImg: { src: "/images/furnace-tech-uniform.jpg", alt: "Eco Home technician beside a furnace he just repaired", pos: "50% 45%" },
    trust: ["Open 24/7", "Upfront pricing", "Smile Guarantee"],
    listTitle: "Common furnace problems we fix",
    listIntro: "If your furnace is doing any of these, give us a call before a small problem turns into a cold night.",
    list: [
      { title: "No heat at all", body: "Often a failed igniter, flame sensor, control board or safety switch. We find the cause and get the heat back on." },
      { title: "Blowing cold air", body: "The fan runs but the burners don’t light, or they light and shut off. Usually a sensor, gas or venting issue." },
      { title: "Turns on and off constantly", body: "Short cycling wears out parts and wastes gas. It can come from a dirty sensor, a clogged filter or an overheating furnace." },
      { title: "Strange noises", body: "Banging, squealing or rattling can point to a blower, motor or ignition problem." },
      { title: "Some rooms stay cold", body: "Weak airflow, a failing blower motor or duct problems can leave parts of the house cold." },
      { title: "Your bills jumped", body: "A furnace that’s struggling burns more gas to make the same heat." },
    ],
    offer: { eyebrow: "Clear pricing", title: "$129 diagnostic, upfront repair price", body: "A full diagnostic is $129. You’ll get a clear price for the repair before any work starts, and Essential Care Plan members save 10% on every repair." },
    stepsTitle: "How a furnace repair works",
    steps: repairSteps("furnace"),
    pitch: {
      eyebrow: "Repair or replace?",
      title: "Is your furnace 15 years old or more?",
      body: "If your furnace is older and the repair is a big share of what a new one costs, replacing usually makes more sense. When you replace it, adding a heat pump gives you a dual-fuel system, the most efficient way to heat and cool a Utah home for the cost, with $2,150 in rebates guaranteed.",
      points: ["New furnaces from $3,990, installed in one day", "Dual-fuel systems from $9,990 after incentives", "We’ll show you both numbers and let you decide"],
      primary: { label: "Furnace replacement options", href: "/services/furnace-replacement" },
      secondary: { label: "How dual fuel works", href: "/heat-pumps" },
    },
    safety: { title: "Smell gas?", body: "Leave your home right away and call 911 or your gas company from outside. Don’t flip switches or use your phone inside. Once you’re safe, we can help with the repair." },
    faqs: [
      { q: "How much does furnace repair cost?", a: "A full diagnostic is $129. The repair price depends on what’s wrong, and you’ll get a clear, upfront price before any work starts. Essential Care Plan members save 10% on every repair." },
      { q: "Do you offer emergency furnace repair?", a: "Yes. We’re open 24/7, including nights, weekends and holidays. Call 801-396-0019 any time." },
      { q: "Should I repair or replace my furnace?", a: "If your furnace is under about 15 years old and the repair is a small share of what a new one costs, repairing usually makes sense. If it’s older and the repair is expensive, replacing is often the better value. We’ll show you both numbers and let you decide." },
      { q: "Why does my furnace keep turning on and off?", a: "That’s called short cycling. Common causes are a dirty flame sensor, a clogged filter, an overheating furnace or a thermostat problem. Short cycling wears parts out faster, so it’s worth having it checked." },
      { q: "Is my furnace repair guaranteed?", a: "Yes. Our Smile Guarantee covers our workmanship for one year. If something we fixed isn’t right, we come back and make it right at no charge." },
    ],
  },

  "heat-pump-repair": {
    key: "heat-pump-repair",
    href: "/services/heat-pump-repair",
    kind: "repair",
    parent: { label: "Heat Pumps", href: "/heat-pumps" },
    metaTitle: "Heat Pump Repair in Utah County & Salt Lake",
    metaDescription: "24/7 heat pump repair in Utah County and Salt Lake County from heat pump specialists. A $129 diagnostic and an upfront price before any work starts.",
    h1: "Heat pump repair in Utah County and Salt Lake County",
    heroSub: "Heat pumps are our specialty. We’re open 24/7, with a $129 diagnostic and an upfront price before any repair.",
    heroImg: { src: "/images/tech-heat-pump-brick.jpg", alt: "Eco Home technician checking refrigerant pressures on a heat pump", pos: "50% 60%" },
    trust: ["Heat pump specialists", "Open 24/7", "Smile Guarantee"],
    listTitle: "Common heat pump problems we fix",
    listIntro: "Heat pumps work hard all year, heating in winter and cooling in summer. Here’s what to watch for.",
    list: [
      { title: "Not heating or not cooling", body: "Often a refrigerant leak, a failed capacitor, a reversing valve problem or a thermostat setting." },
      { title: "Covered in ice that won’t clear", body: "Some frost in winter is normal, and the unit clears it with a defrost cycle. A thick block of ice that stays is not." },
      { title: "Running all the time", body: "A heat pump that never shuts off may be low on refrigerant, have dirty coils or be sized wrong for the home." },
      { title: "Loud or unusual noises", body: "Grinding, rattling or buzzing can point to a fan motor, compressor or electrical problem." },
      { title: "Backup heat running constantly", body: "If your furnace or backup heat runs much more than usual, the heat pump may not be pulling its weight." },
      { title: "Higher power bills", body: "A struggling heat pump uses more electricity to deliver the same comfort." },
    ],
    offer: { eyebrow: "Clear pricing", title: "$129 diagnostic, upfront repair price", body: "A full diagnostic is $129. You’ll get a clear price for the repair before any work starts, and Essential Care Plan members save 10% on every repair." },
    stepsTitle: "How a heat pump repair works",
    steps: repairSteps("heat pump"),
    pitch: {
      eyebrow: "Older heat pump?",
      title: "Upgrade to a modern inverter heat pump",
      body: "If your heat pump is older and repairs keep adding up, a new inverter heat pump paired with your gas furnace runs quieter, keeps temperatures steadier and costs less to run. Every heat pump we install comes with $2,150 in rebates guaranteed.",
      points: ["ACiQ and Amana inverter heat pumps", "$2,150 in rebates guaranteed, and we file the paperwork", "Dual-fuel systems from $9,990 after incentives"],
      primary: { label: "See heat pump options", href: "/heat-pumps" },
      secondary: { label: "How the rebates work", href: "/rebates/rocky-mountain-power-wattsmart" },
    },
    faqs: [
      { q: "How much does heat pump repair cost?", a: "A full diagnostic is $129. The repair price depends on what’s wrong, and you’ll get a clear, upfront price before any work starts. Essential Care Plan members save 10% on every repair." },
      { q: "Is it normal for my heat pump to have frost on it in winter?", a: "Yes. A light layer of frost is normal in cold weather, and the heat pump clears it with a defrost cycle. You may even see steam while it defrosts. A thick block of ice that doesn’t clear is a sign something’s wrong." },
      { q: "Why is my heat pump blowing cool air in heat mode?", a: "During a defrost cycle, a heat pump can briefly blow cooler air, which is normal. If it keeps blowing cool air, it could be low on refrigerant, have a reversing valve problem or a thermostat issue." },
      { q: "Do you offer emergency heat pump repair?", a: "Yes. We’re open 24/7, including nights, weekends and holidays. Call 801-396-0019 any time." },
      { q: "Should I repair or replace my heat pump?", a: "If your heat pump is fairly new and the repair is minor, repairing makes sense. If it’s older and needs a major repair like a compressor, a new inverter heat pump is often the better value, especially with $2,150 in rebates guaranteed." },
    ],
  },

  "mini-splits": {
    key: "mini-splits",
    href: "/services/mini-splits",
    kind: "install",
    parent: { label: "Cooling", href: "/cooling" },
    metaTitle: "Ductless Mini-Splits in Utah County & Salt Lake",
    metaDescription: "Ductless mini-split heat pumps from $4,390 after rebates for basements, additions, garages and rooms your ducts can’t reach. Permit and install included.",
    h1: "Ductless mini-splits in Utah County and Salt Lake County",
    heroSub: "Efficient heating and cooling for basements, additions, garages and any room your ducts don’t reach. Installs start at $4,390 after Wattsmart rebates ($4,990 before rebates).",
    heroImg: { src: "/images/aciq-mini-split-heat-pump.jpg", alt: "Ductless mini-split heat pump installed by Eco Home on a Utah patio" },
    trust: ["From $4,390 after rebates", "$600 to $1,700 in rebates", "Permit pulled on every job"],
    listTitle: "Where mini-splits make sense",
    listIntro: "A mini-split is a small heat pump that heats and cools one area without any ductwork.",
    list: [
      { title: "Finished basements", body: "Keep a basement comfortable year-round without running new ducts through finished ceilings." },
      { title: "Additions and bonus rooms", body: "Rooms over garages and new additions are often too hot or too cold. A mini-split fixes that." },
      { title: "Garages and workshops", body: "Turn a garage or shop into a space you can use in July and January." },
      { title: "Homes without ductwork", body: "Older homes with boilers or baseboard heat can add efficient cooling and heating without ducts." },
      { title: "One room that never feels right", body: "A mini-split gives that room its own temperature control." },
      { title: "ADUs and mother-in-law apartments", body: "Give a separate living space its own heating and cooling and its own thermostat." },
    ],
    offer: { eyebrow: "Clear pricing", title: "Mini-splits from $4,390 after rebates", body: "Installs start at $4,990 before rebates. That includes the permit, the wall mount, a line hide to keep the refrigerant lines neat, and the electrical work, the parts that make an install safe and clean. Rocky Mountain Power customers then get $600 to $1,700 back through Wattsmart, bringing the starting price to $4,390." },
    stepsTitle: "How a mini-split install works",
    steps: [
      { title: "Free in-home estimate", body: "We look at the space, measure it and recommend the right size and number of indoor units. You get a clear price, and we pull the permit for your job." },
      { title: "Plan the placement", body: "We choose where the indoor unit and outdoor unit go, with a small line set connecting them through the wall." },
      { title: "Install and connect", body: "We mount the units, run the lines and electrical, and set everything up to the manufacturer’s specifications." },
      { title: "Test before we leave", body: "We test heating and cooling, show you how to use the remote, and leave your home cleaner than we found it." },
    ],
    pitch: {
      eyebrow: "Whole-home comfort",
      title: "Need heating and cooling for the whole house?",
      body: "For most Utah homes with ductwork, a central heat pump paired with a gas furnace is the best value for the whole house. It heats and cools every room, and every install comes with $2,150 in rebates guaranteed.",
      points: ["ACiQ and Amana inverter heat pumps", "$2,150 in rebates guaranteed", "Dual-fuel systems from $9,990 after incentives"],
      primary: { label: "See heat pump options", href: "/heat-pumps" },
      secondary: { label: "Get instant pricing", href: "INSTANT" },
    },
    faqs: [
      { q: "What is a ductless mini-split?", a: "A mini-split is a small heat pump with an outdoor unit and one or more indoor units mounted on the wall or ceiling. It heats and cools without any ductwork, and each indoor unit has its own controls." },
      { q: "Can a mini-split heat my basement in a Utah winter?", a: "Yes. Mini-splits are heat pumps, and today’s models keep heating efficiently well below freezing. They’re a great fit for basements, additions and other rooms that are hard to keep comfortable." },
      { q: "How much does a mini-split cost?", a: "Mini-split installs start at $4,990 before rebates, or $4,390 after the Wattsmart rebate for Rocky Mountain Power customers. That includes the permit, the wall mount, a line hide and the electrical work. Your exact price depends on the size of the space and how many indoor units you need." },
      { q: "Are there rebates for mini-splits?", a: "Yes. Rocky Mountain Power customers can get $600 to $1,700 back through the Wattsmart program on qualifying mini-splits, and we file the paperwork for you." },
      { q: "Do you pull a permit for mini-split installs?", a: "Yes, on every job. A permit means a city or county inspector checks the work for safety and code, and it protects you when you sell your home." },
      { q: "Should I get a mini-split or a central heat pump?", a: "For one room or area, like a basement or addition, a mini-split is usually the right choice. For the whole house, a central heat pump paired with your gas furnace is usually the better value." },
    ],
  },

  "heating-tune-up": {
    key: "heating-tune-up",
    href: "/services/heating-tune-up",
    kind: "tune-up",
    parent: { label: "Heating", href: "/heating" },
    metaTitle: "$39 Furnace Tune-Ups in Utah County & Salt Lake",
    metaDescription: "Get your furnace cleaned, inspected and tuned before winter for $39, with safety checks and carbon monoxide testing. Utah County and Salt Lake County.",
    h1: "Furnace tune-ups in Utah County and Salt Lake County",
    heroSub: "Clean, inspect and tune your furnace before the cold sets in. Furnace tune-ups are $39 right now, regularly $129.",
    heroImg: { src: "/images/furnace-install.jpg", alt: "Eco Home technician inspecting the inside of a furnace during a tune-up" },
    trust: ["$39 furnace tune-up", "Safety checks included", "Smile Guarantee"],
    listTitle: "What’s included in a furnace tune-up",
    listIntro: "Your technician checks the parts that keep your furnace safe, efficient and reliable.",
    list: [
      { title: "Safety checks", body: "We inspect the heat exchanger and venting, test the safety controls and check for carbon monoxide." },
      { title: "Burners and flame sensor", body: "We clean the flame sensor and check the burners and igniter so the furnace lights reliably." },
      { title: "Gas pressure", body: "We check that your furnace is getting the right gas pressure to run safely and efficiently." },
      { title: "Blower and airflow", body: "We inspect the blower and check airflow and temperature rise across the furnace." },
      { title: "Filter and thermostat", body: "We check your filter and make sure your thermostat is talking to the furnace correctly." },
      { title: "A clear report", body: "We tell you what we found, what’s in good shape and anything to keep an eye on. No pressure." },
    ],
    offer: { eyebrow: "Limited-time special", title: "$39 furnace tune-up", body: "Get your furnace ready for winter for $39, regularly $129. It’s the easiest way to catch small problems before they become a no-heat call on the coldest night of the year." },
    stepsTitle: "How a tune-up works",
    steps: [
      { title: "Book online or call", body: "Pick a time that works for you. We’re open 24/7." },
      { title: "Inspect and clean", body: "Your technician cleans and inspects your furnace from top to bottom." },
      { title: "Test everything", body: "We run the furnace through a full cycle and test the safety controls and carbon monoxide levels." },
      { title: "Walk you through it", body: "You get a clear rundown of what we found, and we leave your home cleaner than we found it." },
    ],
    pitch: {
      eyebrow: "Save all year",
      title: "Get two tune-ups a year with the Essential Care Plan",
      body: "The Essential Care Plan covers a heating tune-up and a cooling tune-up every year, plus savings that grow the longer you’re a member.",
      points: carePlanPoints,
      primary: { label: "See the Essential Care Plan", href: "/#care-plan" },
      secondary: { label: "Book a tune-up", href: "BOOK" },
    },
    faqs: [
      { q: "How much is a furnace tune-up?", a: "Furnace tune-ups are regularly $129, and they’re $39 right now. Essential Care Plan members get a heating and a cooling tune-up every year as part of their plan." },
      { q: "How often should I get my furnace tuned up?", a: "Once a year, ideally in the fall before the cold weather starts." },
      { q: "Does a tune-up help my warranty?", a: "Many manufacturers expect regular maintenance, and keeping a record of yearly tune-ups helps protect your warranty." },
      { q: "What if you find a problem?", a: "We’ll explain what we found and give you a clear, upfront price before any repair. You decide what to do, with no pressure." },
      { q: "Do you check for carbon monoxide?", a: "Yes. Every furnace tune-up includes safety checks and carbon monoxide testing." },
    ],
  },

  "ac-repair": {
    key: "ac-repair",
    href: "/services/ac-repair",
    kind: "repair",
    parent: { label: "Cooling", href: "/cooling" },
    metaTitle: "AC Repair in Utah County & Salt Lake",
    metaDescription: "24/7 AC repair in Utah County and Salt Lake County. A $129 diagnostic, an upfront price before any work, and repairs backed by our Smile Guarantee.",
    h1: "AC repair in Utah County and Salt Lake County",
    heroSub: "AC out on a hot day? We’re open 24/7. You get a $129 diagnostic and an upfront price before we fix anything.",
    heroImg: { src: "/images/ac-repair-techs-overhead.jpg", alt: "Two Eco Home technicians repairing an air conditioner, seen from above" },
    trust: ["Open 24/7", "Upfront pricing", "Smile Guarantee"],
    listTitle: "Common AC problems we fix",
    listIntro: "If your air conditioner is doing any of these, give us a call before it quits on the hottest day of the year.",
    list: [
      { title: "Blowing warm air", body: "Often low refrigerant, a failed capacitor, a bad contactor or a dirty outdoor coil." },
      { title: "Won’t turn on", body: "Could be a tripped breaker, a failed capacitor, a thermostat problem or a safety switch." },
      { title: "Ice on the lines or coil", body: "Usually low refrigerant or poor airflow from a clogged filter or a blower problem." },
      { title: "Water leaking inside", body: "A clogged condensate drain or a cracked drain pan can cause water damage if it’s not fixed." },
      { title: "Loud or unusual noises", body: "Grinding, squealing or buzzing can point to a fan motor, compressor or electrical problem." },
      { title: "Can’t keep up on hot days", body: "The house never cools down, or upstairs rooms stay hot. The system may be failing or undersized." },
    ],
    offer: { eyebrow: "Clear pricing", title: "$129 diagnostic, upfront repair price", body: "A full diagnostic is $129. You’ll get a clear price for the repair before any work starts, and Essential Care Plan members save 10% on every repair." },
    stepsTitle: "How an AC repair works",
    steps: repairSteps("air conditioner"),
    pitch: {
      eyebrow: "Repair or replace?",
      title: "Is your AC 12 years old or more?",
      body: "If your air conditioner is older, uses R-22 refrigerant or needs a major repair, replacing it with a heat pump is often the better value. A heat pump cools exactly like an AC, adds efficient heat, and comes with $2,150 in rebates guaranteed, so it often costs about the same as a standard AC.",
      points: ["Cools like an AC, and heats too", "$2,150 in rebates guaranteed, and we file the paperwork", "We’ll show you both numbers and let you decide"],
      primary: { label: "AC replacement options", href: "/services/ac-replacement" },
      secondary: { label: "How heat pumps work", href: "/heat-pumps" },
    },
    faqs: [
      { q: "How much does AC repair cost?", a: "A full diagnostic is $129. The repair price depends on what’s wrong, and you’ll get a clear, upfront price before any work starts. Essential Care Plan members save 10% on every repair." },
      { q: "Do you offer emergency AC repair?", a: "Yes. We’re open 24/7, including nights, weekends and holidays. Call 801-396-0019 any time." },
      { q: "Why is my AC blowing warm air?", a: "Common causes are low refrigerant from a leak, a failed capacitor, a dirty outdoor coil or a thermostat problem. Check that your filter is clean and the breaker isn’t tripped, then give us a call." },
      { q: "My AC uses R-22. Should I repair it?", a: "R-22 is no longer produced in the U.S., so recharging an R-22 system is expensive. If yours has a leak, replacing it with a heat pump is usually the better investment." },
      { q: "Is my AC repair guaranteed?", a: "Yes. Our Smile Guarantee covers our workmanship for one year. If something we fixed isn’t right, we come back and make it right at no charge." },
    ],
  },

  "cooling-tune-up": {
    key: "cooling-tune-up",
    href: "/services/cooling-tune-up",
    kind: "tune-up",
    parent: { label: "Cooling", href: "/cooling" },
    metaTitle: "AC Tune-Ups in Utah County & Salt Lake",
    metaDescription: "$129 AC and heat pump tune-ups in Utah County and Salt Lake County. We clean, test and tune your system so it’s ready for summer. Book online 24/7.",
    h1: "AC tune-ups in Utah County and Salt Lake County",
    heroSub: "Get your air conditioner or heat pump cleaned, tested and tuned before the summer heat hits. AC tune-ups are $129.",
    heroImg: { src: "/images/tech-wiring-capacitor.jpg", alt: "Eco Home technician testing the electrical parts of an outdoor unit during an AC tune-up", pos: "45% 50%" },
    trust: ["$129 AC tune-up", "AC and heat pumps", "Smile Guarantee"],
    listTitle: "What’s included in an AC tune-up",
    listIntro: "Your technician checks the parts that keep your system cooling efficiently all summer.",
    list: [
      { title: "Refrigerant pressures", body: "We check your system’s refrigerant pressures and temperatures to make sure it’s charged and cooling properly." },
      { title: "Outdoor coil cleaning", body: "We clean the outdoor coil so your system can get rid of heat and run efficiently." },
      { title: "Electrical parts", body: "We test the capacitor, contactor and electrical connections, the parts that most often fail on hot days." },
      { title: "Drain line", body: "We check the condensate drain so water doesn’t back up and leak into your home." },
      { title: "Airflow and filter", body: "We check airflow and your filter so cool air reaches every room." },
      { title: "A clear report", body: "We tell you what we found, what’s in good shape and anything to keep an eye on. No pressure." },
    ],
    offer: { eyebrow: "Clear pricing", title: "$129 AC tune-up, or two a year with the Care Plan", body: "An AC or heat pump tune-up is $129. Essential Care Plan members get a cooling tune-up and a heating tune-up every year, plus 10% off repairs, waived dispatch fees and priority scheduling when the heat waves hit." },
    stepsTitle: "How a tune-up works",
    steps: [
      { title: "Book online or call", body: "Pick a time that works for you. Spring is the best time, before the summer rush." },
      { title: "Clean and inspect", body: "Your technician cleans the outdoor coil and inspects the system from top to bottom." },
      { title: "Test everything", body: "We test refrigerant pressures, electrical parts and airflow with the system running." },
      { title: "Walk you through it", body: "You get a clear rundown of what we found, and we leave your home cleaner than we found it." },
    ],
    pitch: {
      eyebrow: "Save all year",
      title: "Get two tune-ups a year with the Essential Care Plan",
      body: "The Essential Care Plan covers a cooling tune-up and a heating tune-up every year, plus savings that grow the longer you’re a member.",
      points: carePlanPoints,
      primary: { label: "See the Essential Care Plan", href: "/#care-plan" },
      secondary: { label: "Book a tune-up", href: "BOOK" },
    },
    faqs: [
      { q: "How much is an AC tune-up?", a: "An AC or heat pump tune-up is $129. Essential Care Plan members get a cooling tune-up and a heating tune-up every year as part of their plan." },
      { q: "How often should I get my AC tuned up?", a: "Once a year, ideally in the spring before the summer heat. If you have a heat pump, which works year-round, a tune-up in spring and fall is best." },
      { q: "Do you tune up heat pumps too?", a: "Yes. Heat pumps are our specialty, and we tune them up for both cooling and heating." },
      { q: "Does a tune-up help my warranty?", a: "Many manufacturers expect regular maintenance, and keeping a record of yearly tune-ups helps protect your warranty." },
      { q: "What if you find a problem?", a: "We’ll explain what we found and give you a clear, upfront price before any repair. You decide what to do, with no pressure." },
      { q: "Is a tune-up included in the Essential Care Plan?", a: "Yes. Members get a cooling tune-up and a heating tune-up every year, plus 10% off repairs, waived dispatch fees and priority scheduling." },
    ],
  },
};

// Cards for the overview pages and "related services" links.
export const serviceCards: Record<string, { href: string; title: string; blurb: string; img: string; alt: string; pos?: string }> = {
  "furnace-replacement": { href: "/services/furnace-replacement", title: "Furnace replacement", blurb: "New ACiQ and Amana furnaces from $3,990, installed in one day.", img: "/images/aciq-furnace-basement-install.jpg", alt: "New ACiQ furnace installed in a Utah basement", pos: "50% 40%" },
  "furnace-repair": { href: "/services/furnace-repair", title: "Furnace repair", blurb: "24/7 repairs with a $129 diagnostic and an upfront price.", img: "/images/furnace-tech-uniform.jpg", alt: "Eco Home technician beside a repaired furnace", pos: "50% 45%" },
  "heat-pumps": { href: "/heat-pumps", title: "Dual-fuel heat pumps", blurb: "Our top pick for Utah homes, with $2,150 in rebates guaranteed.", img: "/images/heat-pumps-pair.jpg", alt: "Two new heat pumps beside a Utah home" },
  "heat-pump-repair": { href: "/services/heat-pump-repair", title: "Heat pump repair", blurb: "Repairs from heat pump specialists, day or night.", img: "/images/tech-heat-pump-brick.jpg", alt: "Technician checking a heat pump", pos: "50% 60%" },
  "mini-splits": { href: "/services/mini-splits", title: "Ductless mini-splits", blurb: "Heating and cooling for basements, additions and garages, from $4,390 after rebates.", img: "/images/aciq-mini-split-heat-pump.jpg", alt: "Ductless mini-split heat pump on a patio" },
  "heating-tune-up": { href: "/services/heating-tune-up", title: "Furnace tune-ups", blurb: "Clean, inspect and tune your furnace for $39.", img: "/images/furnace-install.jpg", alt: "Technician inspecting a furnace" },
  "ac-replacement": { href: "/services/ac-replacement", title: "AC replacement", blurb: "Upgrade to a heat pump that cools like an AC and heats too.", img: "/images/tech-heat-pump-install.jpg", alt: "Technician installing a new heat pump", pos: "60% 50%" },
  "ac-repair": { href: "/services/ac-repair", title: "AC repair", blurb: "24/7 repairs with a $129 diagnostic and an upfront price.", img: "/images/ac-repair-techs-overhead.jpg", alt: "Two technicians repairing an air conditioner" },
  "cooling-tune-up": { href: "/services/cooling-tune-up", title: "AC tune-ups", blurb: "Clean, test and tune your AC or heat pump for $129.", img: "/images/tech-wiring-capacitor.jpg", alt: "Technician testing an outdoor unit", pos: "45% 50%" },
};

export const heatingCards = ["heat-pumps", "furnace-replacement", "furnace-repair", "heat-pump-repair", "mini-splits", "heating-tune-up"];
export const coolingCards = ["heat-pumps", "ac-replacement", "ac-repair", "heat-pump-repair", "mini-splits", "cooling-tune-up"];

export const related: Record<ServiceKey, string[]> = {
  "furnace-repair": ["furnace-replacement", "heat-pumps", "heating-tune-up"],
  "heat-pump-repair": ["heat-pumps", "cooling-tune-up", "ac-replacement"],
  "mini-splits": ["heat-pumps", "ac-replacement", "furnace-replacement"],
  "heating-tune-up": ["furnace-repair", "furnace-replacement", "heat-pumps"],
  "ac-repair": ["ac-replacement", "heat-pumps", "cooling-tune-up"],
  "cooling-tune-up": ["ac-repair", "ac-replacement", "heat-pumps"],
};
