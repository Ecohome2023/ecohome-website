import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "@/lib/services";

// Photo cards linking to service pages. Used on overview pages and as
// "related services" at the bottom of each service page.
export function ServiceCards({ keys, cols = 3 }: { keys: string[]; cols?: 2 | 3 }) {
  return (
    <ul className={`grid gap-5 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""}`}>
      {keys.map((k) => {
        const c = serviceCards[k];
        return (
          <li key={k}>
            <Link href={c.href} className="zoom group block h-full overflow-hidden rounded-2xl bg-white ring-1 ring-line hover:ring-teal">
              <span className="relative block aspect-[16/10] overflow-hidden">
                <Image src={c.img} alt={c.alt} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover" style={c.pos ? { objectPosition: c.pos } : undefined} />
              </span>
              <span className="block p-6">
                <span className="block text-xl font-extrabold group-hover:text-teal">{c.title}</span>
                <span className="mt-1 block text-mist">{c.blurb}</span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
