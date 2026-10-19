import bookingZips from "./booking-zips.json";

// Online booking at /book, built on the Housecall Pro API. Open times come
// straight from Housecall Pro, so a slot disappears as soon as Andrew is booked.
// IDs below come from our Housecall Pro account (price book, employees, job types).

// Only Andrew takes online bookings for now. Add John's ID here to open his calendar too.
export const BOOKABLE_PROS = ["pro_31c6aa5cca9442a1816696ed987067b3"]; // Andrew Brady

// HubSpot form "Online Booking (website)": every booking also creates or updates the contact.
export const HUBSPOT_BOOKING_FORM = "0375f5be-5974-490c-9b9a-bd8e55fa9b5e";

// Arrival windows offered online, Utah time: each is one hour from these start
// times (the same times set in Housecall Pro). A window shows only when Andrew is
// free for the whole hour and it falls inside Housecall Pro's business hours.
export const WINDOW_STARTS = ["08:30", "10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];

// How many days of open times to show.
export const DAYS_AHEAD = 14;

// ZIP codes in our Housecall Pro service zones (Spanish Fork to Ogden).
export const BOOKING_ZIPS = new Set<string>(bookingZips);

export type Need = "repair" | "tune-up" | "new";

// The three choices on the first screen.
export const needs: { key: Need; title: string; sub: string; price: string }[] = [
  { key: "new", title: "New system", sub: "Furnace, AC, heat pump or mini-split", price: "Free estimate" },
  { key: "repair", title: "Repair", sub: "Something isn’t working right", price: "$129" },
  { key: "tune-up", title: "Tune-up", sub: "Furnace or AC", price: "From $39" },
];

export type BookingService = {
  key: string;
  group: "service" | "estimate"; // books as a job or an estimate in Housecall Pro
  need: Need; // first screen of the booking form
  name: string; // shown to the customer
  hcpName: string; // line item name in Housecall Pro
  serviceId: string; // Housecall Pro price book service
  price: number; // cents
  priceLabel: string;
  blurb: string;
  jobTypeId?: string;
};

const TUNE_UP = "jbt_d2d656dcd90042398c6c0e5d60d723b8";
const SERVICE_CALL = "jbt_727fc66baf1d46428422ce7fc92c2059";

export const bookingServices: BookingService[] = [
  {
    key: "furnace-tune-up", group: "service", need: "tune-up", name: "Furnace tune-up", hcpName: "Heating Tune-Up ($39 Furnace Special)",
    serviceId: "olit_3fce648b4c90424ba4e48b5d7062687f", price: 3900, priceLabel: "$39",
    blurb: "Clean, inspect and tune your furnace before the cold sets in.", jobTypeId: TUNE_UP,
  },
  {
    key: "cooling-tune-up", group: "service", need: "tune-up", name: "AC tune-up and coil cleaning", hcpName: "Cooling System + Coil Tune-Up",
    serviceId: "olit_a793c96f85a74315a3672f7849e05475", price: 12900, priceLabel: "$129",
    blurb: "A full cooling tune-up, including cleaning the coil.", jobTypeId: TUNE_UP,
  },
  {
    key: "repair", group: "service", need: "repair", name: "Repair or service visit", hcpName: "Service Visit (Diagnostic)",
    serviceId: "olit_922de6ded87e46ecaf9589a6f979b4bc", price: 12900, priceLabel: "$129",
    blurb: "Something not working right? We find the real problem and give you a price before any repair.", jobTypeId: SERVICE_CALL,
  },
  {
    key: "estimate-full-system", group: "estimate", need: "new", name: "Full system (furnace + AC)", hcpName: "Full System (Furnace + AC)",
    serviceId: "olit_742c11c10bae4dc2bdce9a792088462f", price: 0, priceLabel: "Free", blurb: "",
  },
  {
    key: "estimate-heat-pump", group: "estimate", need: "new", name: "Heat pump", hcpName: "Heat Pumps",
    serviceId: "olit_0b34ee5ee6504d11ac448477127e7ffc", price: 0, priceLabel: "Free", blurb: "",
  },
  {
    key: "estimate-furnace", group: "estimate", need: "new", name: "Furnace only", hcpName: "Furnace Only",
    serviceId: "olit_757226c7c06546a7b9accadaa7550bbe", price: 0, priceLabel: "Free", blurb: "",
  },
  {
    key: "estimate-ac", group: "estimate", need: "new", name: "AC only", hcpName: "AC Only",
    serviceId: "olit_8131aa977509468bb4930660af000742", price: 0, priceLabel: "Free", blurb: "",
  },
  {
    key: "estimate-mini-split", group: "estimate", need: "new", name: "Ductless mini-split", hcpName: "Mini Splits",
    serviceId: "olit_0859afcadbfe408697e63210175a0f0f", price: 0, priceLabel: "Free", blurb: "",
  },
];

export const serviceByKey = (k: string) => bookingServices.find((s) => s.key === k);

export type Slot = { start: string; end: string }; // ISO times, UTC

// Times shown in Utah time whatever the visitor's device is set to.
export const TZ = "America/Denver";
export const fmtDay = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { timeZone: TZ, weekday: "short", month: "short", day: "numeric" });
export const fmtTime = (iso: string) =>
  new Date(iso).toLocaleTimeString("en-US", { timeZone: TZ, hour: "numeric", minute: "2-digit" }).replace(":00", "");
// "8:30–9:30 AM", "11:30–12:30 PM": the AM/PM once, at the end, like Housecall Pro.
export const fmtRange = (start: string, end: string) => {
  const t = (iso: string) => new Date(iso).toLocaleTimeString("en-US", { timeZone: TZ, hour: "numeric", minute: "2-digit" });
  return `${t(start).replace(/\s?[AP]M$/, "")}–${t(end)}`;
};
export const dayKey = (iso: string) => new Date(iso).toLocaleDateString("en-CA", { timeZone: TZ });
