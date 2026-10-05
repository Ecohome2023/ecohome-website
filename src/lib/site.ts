// Single source of truth for business details. Everything on the site
// (header, footer, schema, page copy) reads from here, so a change made
// once updates every page. NAP must match the Google Business Profile exactly.

export const site = {
  name: "Eco Home Heating & Cooling",
  shortName: "Eco Home",
  url: "https://ecohometoday.com",
  phone: "801-396-0019",
  phoneHref: "tel:+18013960019",
  address: {
    street: "758 Automall Dr #9",
    city: "American Fork",
    region: "UT",
    zip: "84003",
  },
  hoursLabel: "Open 24/7",
  license: "13607597-5501",
  rating: { value: "4.8", count: 112 },
  financingPartner: "GreenSky",
  // Housecall Pro online booking link. Replace with the real link from
  // Housecall Pro > Online Booking > Booking link.
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "#book",
  // HubSpot form (Marketing > Forms). Portal ID + form GUID.
  hubspot: {
    portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "",
    formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || "",
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Eco+Home+Heating+%26+Cooling+758+Automall+Dr+American+Fork+UT",
  social: [] as string[],
};

export const counties = [
  {
    name: "Utah County",
    cities: [
      "American Fork", "Alpine", "Cedar Hills", "Eagle Mountain", "Elk Ridge",
      "Highland", "Lehi", "Lindon", "Mapleton", "Orem", "Payson",
      "Pleasant Grove", "Provo", "Salem", "Santaquin", "Saratoga Springs",
      "Spanish Fork", "Springville", "Vineyard", "Woodland Hills",
    ],
  },
  {
    name: "Salt Lake County",
    cities: [
      "Bluffdale", "Cottonwood Heights", "Draper", "Herriman", "Holladay",
      "Kearns", "Magna", "Midvale", "Millcreek", "Murray", "Riverton",
      "Salt Lake City", "Sandy", "South Jordan", "South Salt Lake",
      "Taylorsville", "West Jordan", "West Valley City",
    ],
  },
];

export const allCities = counties.flatMap((c) => c.cities);

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Heat Pumps", href: "/#heat-pumps" },
  { label: "Pricing", href: "/#options" },
  { label: "Service Areas", href: "/#service-area" },
  { label: "Specials", href: "/#specials" },
  { label: "Eco Care Plan", href: "/#eco-care" },
];

export const faqs = [
  {
    q: "Do heat pumps really work in Utah winters?",
    a: "Yes. Today's cold-climate heat pumps keep heating efficiently well below freezing, and most Utah homes pair one with a gas furnace as backup for the coldest nights. That setup, called dual fuel, picks whichever source is cheaper to run at the moment, so you stay warm without paying for it.",
  },
  {
    q: "What does a service visit cost?",
    a: "A full system diagnostic is $129. Our safety inspection is free, and furnace tune-ups are $39 right now. You'll get a clear price before any repair work starts.",
  },
  {
    q: "Should I repair or replace my system?",
    a: "If your system is under about 10 years old and the repair is a small share of what a new one costs, repairing usually makes sense. Older systems with big repairs are often better replaced. We'll show you both numbers and let you decide.",
  },
  {
    q: "Are you really available 24/7?",
    a: "Yes. Call any time, day or night, including weekends and holidays, and we'll get a technician headed your way.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We offer financing through GreenSky, including $0-down options for qualified buyers, so a new system doesn't have to wait.",
  },
  {
    q: "What's included in the Eco Care Plan?",
    a: "Two tune-ups a year (cooling in spring, heating in fall), priority scheduling, member discounts on repairs, and filter changes at each visit. Ask us about current pricing.",
  },
];
