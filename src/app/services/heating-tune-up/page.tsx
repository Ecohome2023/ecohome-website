import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { services } from "@/lib/services";
import { ServicePage } from "@/components/ServicePage";

const service = services["heating-tune-up"];

export const metadata: Metadata = pageMeta({ title: service.metaTitle, description: service.metaDescription, path: service.href });

export default function HeatingTuneUp() {
  return <ServicePage service={service} />;
}
