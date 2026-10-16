import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/meta";
import { getCity } from "@/lib/cities";
import { cityServices, getCityService } from "@/lib/cityServices";
import { CityServicePage } from "@/components/CityServicePage";

export const dynamicParams = false;

export function generateStaticParams() {
  return cityServices.map((s) => ({ city: s.city, service: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/service-area/[city]/[service]">): Promise<Metadata> {
  const { city, service } = await params;
  const p = getCityService(city, service);
  if (!p) return {};
  return pageMeta({ title: p.metaTitle, description: p.metaDescription, path: `/service-area/${city}/${service}`, image: p.heroImg });
}

export default async function Page({ params }: PageProps<"/service-area/[city]/[service]">) {
  const { city, service } = await params;
  const c = getCity(city);
  const p = getCityService(city, service);
  if (!c || !p) notFound();
  return <CityServicePage city={c} page={p} />;
}
