import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { services } from "@/lib/services";
import { ServicePage } from "@/components/ServicePage";

const service = services["mini-splits"];

export const metadata: Metadata = pageMeta({ title: service.metaTitle, description: service.metaDescription, path: service.href });

export default function MiniSplits() {
  return <ServicePage service={service} />;
}
