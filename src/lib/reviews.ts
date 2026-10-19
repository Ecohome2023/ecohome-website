// 5-star Google reviews from homeowners, quoted as written (trimmed with "…"
// only where shown). Source: Eco Home's Google Business Profile, Oct 2026.
// To add more, copy the text from Google exactly and use first name + last initial.
// featuredOn: page paths where this review is shown on its own, as a local
// review (only pages for the city the customer lives in).
export type Review = { name: string; text: string; service?: string; city?: string; featuredOn?: string[] };

export const googleReviews: Review[] = [
  {
    name: "Rebecca M.",
    service: "Heating repair",
    city: "American Fork",
    featuredOn: ["/service-area/american-fork/furnace-repair", "/service-area/american-fork"],
    text: "He was able to fix our heater. Where others said we needed to buy a new one. He saved us thousands of dollars. Being that were selling our home we really didn't want to buy a new one.",
  },
  {
    name: "Patrick T.",
    service: "AC repair",
    text: "Garritt came and figured out the issue, luckily it was a minor fix. I really appreciate their honesty and willingness to go the second mile. He showed me each thing and made sure everything was in order.",
  },
  {
    name: "Stacy G.",
    service: "AC repair",
    text: "So grateful for Eco saving us this summer! We got a few bids for a pricey fix, and they came in the lowest and knew what they were doing. Highly recommend!! Andrew B was fast, professional and did a great job!",
  },
  {
    name: "Savanna K.",
    service: "AC repair",
    text: "Andrew was amazing. Professional, knowledgeable and friendly! … He came and did diagnostics and then the repairs for my AC unit. He communicates well responds quickly.",
  },
  { name: "Paul E.", text: "Their tech was efficient and polite… resolved immediately." },
  { name: "Maria-Isabel A.", text: "They're friendly, professional and honest." },
];
