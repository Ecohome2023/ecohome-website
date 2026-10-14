import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/meta";
import { cities, getCity } from "@/lib/cities";
import { CityPage } from "@/components/CityPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/service-area/[city]">): Promise<Metadata> {
  const c = getCity((await params).city);
  if (!c) return {};
  return pageMeta({ title: c.metaTitle, description: c.metaDescription, path: `/service-area/${c.slug}` });
}

export default async function Page({ params }: PageProps<"/service-area/[city]">) {
  const c = getCity((await params).city);
  if (!c) notFound();
  return <CityPage city={c} />;
}
