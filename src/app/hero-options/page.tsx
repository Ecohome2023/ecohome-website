import type { Metadata } from "next";
import { Hero, SmileBand } from "@/components/Hero";

// Temporary page for choosing a homepage hero. Remove after a choice is made.
export const metadata: Metadata = { title: "Hero options", robots: { index: false, follow: false } };

const options = [
  { id: "navy", label: "Option A: Navy with photo" },
  { id: "photo", label: "Option B: Full-width photo" },
  { id: "light", label: "Option C: Light and clean" },
] as const;

export default function HeroOptions() {
  return (
    <>
      {options.map((o) => (
        <div key={o.id} id={o.id}>
          <p className="bg-sky-soft px-6 py-3 text-center text-lg font-extrabold">{o.label}</p>
          <Hero variant={o.id} />
          <SmileBand />
          <div className="h-16 bg-white" />
        </div>
      ))}
    </>
  );
}
