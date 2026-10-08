import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/meta";
import { posts, formatDate } from "@/lib/blog";
import { ServiceCards } from "@/components/ServiceCards";

export const metadata: Metadata = pageMeta({
  title: "Utah Heating & Cooling Guides",
  description: "Straight answers on heat pumps, furnaces, AC, rebates and maintenance for Utah homes, from the team at Eco Home Heating & Cooling.",
  path: "/blog",
});

export default function Blog() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70">
            <Link href="/" className="hover:underline">Home</Link> <span aria-hidden>/</span> Blog
          </nav>
          <h1 className="display mt-3 max-w-4xl text-[2.4rem] sm:text-6xl">Utah heating and cooling guides</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Straight answers on heat pumps, furnaces, AC, rebates and maintenance for Utah homes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        {posts.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="zoom group block h-full overflow-hidden rounded-2xl ring-1 ring-line hover:ring-teal">
                  {p.img && (
                    <span className="relative block aspect-[16/10] overflow-hidden">
                      <Image src={p.img.src} alt={p.img.alt} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                    </span>
                  )}
                  <span className="block p-6">
                    <span className="block text-sm font-semibold text-mist">{formatDate(p.date)}</span>
                    <span className="mt-1 block text-xl font-extrabold group-hover:text-teal">{p.title}</span>
                    <span className="mt-2 block text-mist">{p.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="max-w-3xl">
            <h2 className="display text-3xl sm:text-4xl">New guides are on the way</h2>
            <p className="mt-4 text-lg text-ink/85">In the meantime, here are the questions Utah homeowners ask us most.</p>
          </div>
        )}
        <div className="mt-14">
          <h2 className="display text-3xl sm:text-4xl">Popular topics</h2>
          <div className="mt-8">
            <ServiceCards keys={["heat-pumps", "furnace-replacement", "ac-replacement"]} />
          </div>
        </div>
      </section>
    </>
  );
}
