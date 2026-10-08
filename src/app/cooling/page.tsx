import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { coolingCards } from "@/lib/services";
import { OverviewPage } from "@/components/OverviewPage";

export const metadata: Metadata = pageMeta({
  title: "Cooling Services in Utah County & Salt Lake",
  description: "AC replacement and repair, heat pumps, ductless mini-splits and AC tune-ups in Utah County and Salt Lake County. Open 24/7, permits on every job.",
  path: "/cooling",
});

const faqs = [
  {
    "q": "Should I replace my AC with a heat pump?",
    "a": "For most Utah homes, yes. A heat pump cools exactly like an air conditioner, adds efficient heat for most of the year, and comes with $2,150 in rebates guaranteed, so it often costs about the same as a standard AC."
  },
  {
    "q": "Do you offer emergency AC repair?",
    "a": "Yes. We’re open 24/7, including nights, weekends and holidays. Call 801-396-0019 any time."
  },
  {
    "q": "How much does AC repair cost?",
    "a": "A full diagnostic is $129, and you’ll get a clear, upfront price before any repair starts. Essential Care Plan members save 10% on every repair."
  },
  {
    "q": "When should I get an AC tune-up?",
    "a": "Once a year, ideally in the spring before the summer heat. AC tune-ups are $129, and Essential Care Plan members get a cooling and a heating tune-up every year."
  }
];

export default function Cooling() {
  return (
    <OverviewPage
      label="Cooling"
      path="/cooling"
      h1="Cooling services in Utah County and Salt Lake County"
      intro="AC repair and replacement, heat pumps, ductless mini-splits and tune-ups, all from a local team that’s open 24/7."
      cards={coolingCards}
      faqs={faqs}
    />
  );
}
