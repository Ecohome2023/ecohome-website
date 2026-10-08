import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { services } from "@/lib/services";
import { ServicePage } from "@/components/ServicePage";

const service = services["ac-repair"];

export const metadata: Metadata = pageMeta({ title: service.metaTitle, description: service.metaDescription, path: service.href });

export default function AcRepair() {
  return <ServicePage service={service} />;
}
