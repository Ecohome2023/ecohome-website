import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { programs } from "@/lib/rebates";
import { RebatePage } from "@/components/RebatePage";

const program = programs.rmp;

export const metadata: Metadata = pageMeta({ title: program.metaTitle, description: program.metaDescription, path: program.href });

export default function RmpRebates() {
  return <RebatePage program={program} />;
}
