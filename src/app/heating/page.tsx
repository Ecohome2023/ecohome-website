import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { heatingCards } from "@/lib/services";
import { OverviewPage } from "@/components/OverviewPage";

export const metadata: Metadata = pageMeta({
  title: "Heating Services in Utah County & Salt Lake",
  description: "Furnace replacement and repair, heat pumps, mini-splits and $39 furnace tune-ups in Utah County and Salt Lake County. Open 24/7, permits on every job.",
  path: "/heating",
});

const faqs = [
  {
    "q": "What heating system is best for a Utah home?",
    "a": "For most Utah homes, a heat pump paired with a gas furnace. The heat pump heats efficiently through most of the winter, and the furnace takes over on the coldest nights. It’s the most efficient setup for the cost, and it comes with $2,150 in rebates guaranteed."
  },
  {
    "q": "Do you offer emergency heating repair?",
    "a": "Yes. We’re open 24/7, including nights, weekends and holidays. Call 801-396-0019 any time."
  },
  {
    "q": "How much does a furnace tune-up cost?",
    "a": "Furnace tune-ups are $39 right now. Essential Care Plan members get a heating and a cooling tune-up every year."
  },
  {
    "q": "How much does a new furnace cost?",
    "a": "New ACiQ and Amana furnaces start at $3,990, installed in one day. Complete dual-fuel systems start at $9,990 after incentives."
  }
];

export default function Heating() {
  return (
    <OverviewPage
      label="Heating"
      path="/heating"
      h1="Heating services in Utah County and Salt Lake County"
      intro="Furnace repair and replacement, heat pumps, ductless mini-splits and tune-ups, all from a local team that’s open 24/7."
      cards={heatingCards}
      faqs={faqs}
    />
  );
}
