import type { Metadata } from "next";
import { programs } from "@/lib/rebates";
import { RebatePage } from "@/components/RebatePage";

const program = programs.rmp;

export const metadata: Metadata = {
  title: program.metaTitle,
  description: program.metaDescription,
  alternates: { canonical: program.href },
};

export default function RmpRebates() {
  return <RebatePage program={program} />;
}
