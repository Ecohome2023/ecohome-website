// Content shared by more than one page.

export const steps = [
  { title: "Load calculation", body: "We run a room-by-room Manual J calculation so the equipment matches how your house actually gains and loses heat." },
  { title: "Duct testing", body: "We measure static pressure and airflow before we quote. A great system on undersized ducts still runs poorly." },
  { title: "Right-sized install", body: "Equipment sized to the numbers, not a guess or whatever the last system was." },
  { title: "Performance check", body: "Before we leave, we test the system's pressures, temperatures and airflow, and show you the results." },
];

// The two brands we install. Every system is a dual-fuel setup: an inverter
// heat pump paired with a high-efficiency gas furnace.
export const tiers = [
  {
    tier: "Great value",
    brand: "ACiQ",
    logo: { src: "/images/aciq-logo.png", w: 739, h: 281 },
    img: "/images/aciq-system-eco-home-van.jpg",
    alt: "ACiQ heat pump and gas furnace ready for installation, with the Eco Home van behind them",
    line: "The same comfort and rebates at a lower upfront cost.",
    points: [
      "Up to 19 SEER2 efficiency",
      "10-year parts and 12-year compressor warranty",
      "Our most economical dual-fuel system",
    ],
  },
  {
    tier: "Premium",
    brand: "Amana",
    logo: { src: "/images/amana-logo.png", w: 900, h: 190 },
    img: "/images/amana-system-side-eco-home-van.jpg",
    alt: "Side view of an Amana heat pump and gas furnace ready for installation, with the Eco Home van behind them",
    line: "The best warranty in its class, and our quietest system.",
    points: [
      "Lifetime compressor and lifetime heat exchanger warranty, plus 10-year parts",
      "As quiet as 45 decibels, about the soft hum of a refrigerator. Great if your unit sits by a patio or backyard.",
      "Up to 21 SEER2 efficiency",
    ],
    featured: true,
  },
];

// What both brands share, shown above the option cards.
export const bothBrands = [
  "Inverter heat pump paired with a gas furnace",
  "Same heating and cooling output",
  "Qualify for the same rebates",
  "Even temperatures on every level of your home",
];

export const warrantyNote =
  "Manufacturer warranties require product registration. Ask us for the full terms.";

// Brand questions, used on the heat pumps page.
export const brandFaqs = [
  {
    q: "Should I choose ACiQ or Amana?",
    a: "Both are inverter heat pumps paired with a gas furnace. Both deliver the same heating and cooling output, qualify for the same rebates and keep every level of your home at an even temperature. ACiQ costs less upfront and reaches up to 19 SEER2, with a 10-year parts and 12-year compressor warranty. Amana reaches up to 21 SEER2, runs as quietly as 45 decibels, and has the best warranty in its class: 10-year parts, plus lifetime coverage on the compressor and the heat exchanger.",
  },
  {
    q: "Why do you install Amana instead of Daikin?",
    a: "Amana is made by Daikin, and the two brands share the same parts. The difference is the warranty. Amana covers the compressor and the heat exchanger for life, which makes it the clear choice when you’re comparing the two.",
  },
];
