import Image from "next/image";
import Link from "next/link";
import { rebateLinks, type RebateKey } from "@/lib/rebates";

// "Learn about our other rebates": links each rebate page to the other two.
export function RebateLinks({ current }: { current: RebateKey }) {
  return (
    <>
      <h2 className="display text-3xl sm:text-4xl">Learn about our other rebates</h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {rebateLinks
          .filter((r) => r.key !== current)
          .map((r) => (
            <Link key={r.key} href={r.href} className="group flex flex-col rounded-2xl p-7 ring-1 ring-line hover:bg-sky-soft">
              <span className="flex h-14 items-center gap-4">
                {r.logos.map((l) => (
                  <Image key={l.src} src={l.src} alt={l.alt} width={l.w} height={l.h} sizes="240px" className={`w-auto ${r.logos.length > 1 ? "h-9" : "h-12"}`} />
                ))}
              </span>
              <span className="mt-5 block text-2xl font-extrabold">{r.title}</span>
              <span className="mt-1 block flex-1 text-lg text-ink/75">{r.blurb}</span>
              <span className="mt-4 font-bold text-teal group-hover:underline">{r.cta} →</span>
            </Link>
          ))}
      </div>
    </>
  );
}
