import type { Metadata } from "next";
import { programs } from "@/lib/rebates";
import { RebatePage } from "@/components/RebatePage";

const program = programs.enbridge;

export const metadata: Metadata = {
  title: program.metaTitle,
  description: program.metaDescription,
  alternates: { canonical: program.href },
};

export default function EnbridgeRebates() {
  return <RebatePage program={program} />;
}
