// Utility rebate programs. Each program gets its own page built from the
// shared RebatePage layout, and each page links to the other at the bottom.

export type Logo = { src: string; w: number; h: number; alt: string };

export type RebateProgram = {
  key: "rmp" | "enbridge";
  href: string;
  name: string; // full program name
  short: string; // "Wattsmart" / "ThermWise"
  utility: string; // "Rocky Mountain Power" / "Enbridge Gas"
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSub: string;
  logos: Logo[];
  stats: { amount: string; label: string }[];
  qualifies: { title: string; body: string; energyStar?: boolean }[];
  payment: { title: string; body: string }[];
  paymentIntro: string;
  faqs: { q: string; a: string }[];
  crossBlurb: string; // shown on the OTHER program's page
};

export const rmpLogo: Logo = { src: "/images/wattsmart-pro-network-logo.png", w: 849, h: 244, alt: "Wattsmart Pro Network contractor, Rocky Mountain Power" };
export const rmpPlainLogo: Logo = { src: "/images/rocky-mountain-power-logo.png", w: 298, h: 57, alt: "Rocky Mountain Power" };
export const enbridgeLogo: Logo = { src: "/images/enbridge-thermwise-logo.png", w: 586, h: 77, alt: "Enbridge Gas ThermWise" };

export const guaranteed = { rmp: "$1,450", enbridge80: "$700", enbridge96: "$1,000", total: "$2,150 to $2,450", max: "$4,450" };

const taxCreditFaq = {
  q: "Is there still a federal tax credit for heat pumps and furnaces?",
  a: "No. The federal tax credit for heat pumps and furnaces ended after 2025. That makes utility rebates like Wattsmart and ThermWise the best incentive available today for high-quality HVAC equipment.",
};

const paperworkFaq = {
  q: "Do I have to fill out the rebate paperwork?",
  a: "No. We file all the rebate paperwork for you on every install.",
};

export const programs: Record<"rmp" | "enbridge", RebateProgram> = {
  rmp: {
    key: "rmp",
    href: "/rebates/rocky-mountain-power-wattsmart",
    name: "Rocky Mountain Power Wattsmart",
    short: "Wattsmart",
    utility: "Rocky Mountain Power",
    metaTitle: "Rocky Mountain Power Wattsmart Heat Pump Rebates",
    metaDescription:
      "Get $1,450 in Rocky Mountain Power Wattsmart rebates, guaranteed, on every heat pump we install. Eco Home is a Wattsmart Pro Network contractor and files the paperwork for you.",
    h1: "Rocky Mountain Power Wattsmart rebates for Utah heat pumps",
    heroSub:
      "Get $1,450 in cash back, guaranteed, on every heat pump we install. As a Wattsmart Pro Network contractor, we handle the paperwork for you.",
    logos: [rmpLogo],
    stats: [{ amount: "$1,450", label: "Guaranteed on every heat pump install" }],
    qualifies: [
      { title: "You’re a Rocky Mountain Power customer", body: "The rebate is for homes that get their electricity from Rocky Mountain Power." },
      {
        title: "A licensed, verified contractor installs it",
        body: "Eco Home is licensed and verified, and we’re a Wattsmart Pro Network contractor, one of Rocky Mountain Power’s highest-rated contractors.",
      },
      {
        title: "The equipment meets the efficiency requirements",
        body: "The system has to meet the program’s minimum efficiency and ENERGY STAR requirements. Every heat pump we install qualifies.",
        energyStar: true,
      },
    ],
    paymentIntro: "With Wattsmart, you choose how you get your money.",
    payment: [
      { title: "Instant savings on your invoice", body: "We take the rebate off your invoice right away, and Rocky Mountain Power pays the rebate to Eco Home. You save the money on day one." },
      { title: "A check in the mail", body: "Prefer to pay the full invoice? Rocky Mountain Power mails the rebate check straight to you." },
    ],
    faqs: [
      {
        q: "Who qualifies for Rocky Mountain Power Wattsmart rebates?",
        a: "You need to be a Rocky Mountain Power customer, the equipment has to be installed by a licensed, verified contractor like Eco Home, and it has to meet the program’s minimum efficiency and ENERGY STAR requirements.",
      },
      {
        q: "How much is the Wattsmart heat pump rebate?",
        a: "Eco Home guarantees $1,450 in Wattsmart rebates on every heat pump we install.",
      },
      {
        q: "How do I receive the Wattsmart rebate?",
        a: "You choose. We can take the rebate off your invoice right away, with Rocky Mountain Power paying the rebate to Eco Home, or Rocky Mountain Power can mail a check to you.",
      },
      {
        q: "How do I know if I’m a Rocky Mountain Power customer?",
        a: "Check who sends your electric bill. Some Utah County cities, like Provo, Lehi, Springville and Spanish Fork, run their own city power utilities, so homes there aren’t Rocky Mountain Power customers. Not sure? Ask us and we’ll help you check.",
      },
      {
        q: "What is a Wattsmart Pro Network contractor?",
        a: "Pro Network contractors are vetted by Rocky Mountain Power to install equipment for the Wattsmart program. As a Pro Network contractor, Eco Home qualifies for Rocky Mountain Power’s higher rebate amount.",
      },
      paperworkFaq,
      taxCreditFaq,
    ],
    crossBlurb: "Rocky Mountain Power customers get $1,450 back, guaranteed, on every heat pump we install.",
  },
  enbridge: {
    key: "enbridge",
    href: "/rebates/enbridge-thermwise",
    name: "Enbridge Gas ThermWise",
    short: "ThermWise",
    utility: "Enbridge Gas",
    metaTitle: "Enbridge Gas ThermWise Rebates for Heat Pumps & Furnaces",
    metaDescription:
      "Get $700 to $1,000 in Enbridge Gas ThermWise rebates, guaranteed, on every dual-fuel heat pump we install. Eco Home files the paperwork and Enbridge mails you a check.",
    h1: "Enbridge Gas ThermWise rebates for heat pumps and furnaces",
    heroSub:
      "Get $700 to $1,000 in cash back, guaranteed, on every heat pump and gas furnace system we install. We handle the paperwork, and Enbridge mails the check to you.",
    logos: [enbridgeLogo],
    stats: [
      { amount: "$700", label: "Guaranteed with an 80% furnace" },
      { amount: "$1,000", label: "Guaranteed with a 96%+ furnace" },
    ],
    qualifies: [
      { title: "You’re an Enbridge Gas customer", body: "The rebate is for homes that get their natural gas from Enbridge Gas." },
      {
        title: "A licensed, verified contractor installs it",
        body: "Eco Home is a licensed and verified contractor, so your install qualifies.",
      },
      {
        title: "The equipment meets the efficiency requirements",
        body: "The system has to meet the program’s minimum efficiency and ENERGY STAR requirements. Every heat pump system we install qualifies.",
        energyStar: true,
      },
    ],
    paymentIntro: "ThermWise rebates are paid straight to you.",
    payment: [{ title: "A check in the mail", body: "After your install, we file the paperwork and Enbridge Gas mails the rebate check directly to you." }],
    faqs: [
      {
        q: "Who qualifies for Enbridge Gas ThermWise rebates?",
        a: "You need to be an Enbridge Gas customer, the equipment has to be installed by a licensed, verified contractor like Eco Home, and it has to meet the program’s minimum efficiency and ENERGY STAR requirements.",
      },
      {
        q: "How much is the ThermWise rebate?",
        a: "On every heat pump we install, Eco Home guarantees $700 in ThermWise rebates when it’s paired with an 80% furnace, or $1,000 when it’s paired with a 96%+ furnace.",
      },
      {
        q: "How do I receive the ThermWise rebate?",
        a: "Enbridge Gas mails the rebate check directly to you after we file the paperwork.",
      },
      {
        q: "Can I get Wattsmart and ThermWise rebates on the same system?",
        a: "Yes. If you’re a customer of both Rocky Mountain Power and Enbridge Gas, a heat pump paired with a gas furnace qualifies for both: $1,450 from Wattsmart plus $700 or $1,000 from ThermWise, guaranteed.",
      },
      paperworkFaq,
      taxCreditFaq,
    ],
    crossBlurb: "Enbridge Gas customers get $700 to $1,000 back, guaranteed, on every heat pump and gas furnace system we install.",
  },
};
