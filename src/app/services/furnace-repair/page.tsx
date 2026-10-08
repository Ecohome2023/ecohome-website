import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { services } from "@/lib/services";
import { ServicePage } from "@/components/ServicePage";

const service = services["furnace-repair"];

export const metadata: Metadata = pageMeta({ title: service.metaTitle, description: service.metaDescription, path: service.href });

export default function FurnaceRepair() {
  return <ServicePage service={service} />;
}
