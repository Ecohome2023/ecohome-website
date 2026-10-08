import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { programs } from "@/lib/rebates";
import { RebatePage } from "@/components/RebatePage";

const program = programs.enbridge;

export const metadata: Metadata = pageMeta({ title: program.metaTitle, description: program.metaDescription, path: program.href });

export default function EnbridgeRebates() {
  return <RebatePage program={program} />;
}
