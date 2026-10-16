import Link from "next/link";
import { cityServices } from "@/lib/cityServices";
import { getCity } from "@/lib/cities";

// Links a general service page to its city versions, e.g. /services/furnace-repair
// to "Furnace repair in American Fork". Shows nothing until a city version exists.
export function CityLinks({ mainHref }: { mainHref: string }) {
  const pages = cityServices.filter((p) => p.mainHref === mainHref);
  if (!pages.length) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
      <h2 className="display text-3xl sm:text-4xl">{pages[0].serviceName} by city</h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {pages.map((p) => (
          <li key={p.city}>
            <Link href={`/service-area/${p.city}/${p.slug}`} className="inline-block rounded-full bg-white px-5 py-3 font-bold ring-2 ring-ink hover:bg-sky-soft">
              {p.serviceName} in {getCity(p.city)?.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
