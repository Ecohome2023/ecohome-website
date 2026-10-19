import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/meta";
import { cities, getCity } from "@/lib/cities";
import { CityPage } from "@/components/CityPage";
import { countyPages, getCounty } from "@/lib/counties";
import { CountyPage } from "@/components/CountyPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...cities, ...countyPages].map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/service-area/[city]">): Promise<Metadata> {
  const slug = (await params).city;
  const county = getCounty(slug);
  if (county) return pageMeta({ title: county.metaTitle, description: county.metaDescription, path: `/service-area/${county.slug}`, image: county.heroImg });
  const c = getCity(slug);
  if (!c) return {};
  return pageMeta({ title: c.metaTitle, description: c.metaDescription, path: `/service-area/${c.slug}`, image: { src: c.job.img, alt: c.job.alt } });
}

export default async function Page({ params }: PageProps<"/service-area/[city]">) {
  const slug = (await params).city;
  const county = getCounty(slug);
  if (county) return <CountyPage county={county} />;
  const c = getCity(slug);
  if (!c) notFound();
  return <CityPage city={c} />;
}
