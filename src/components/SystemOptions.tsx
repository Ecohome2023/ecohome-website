import Image from "next/image";
import { tiers, bothBrands, warrantyNote } from "@/lib/content";
import { CheckIcon } from "./icons";

// The ACiQ and Amana option cards, used on the homepage and the heat pumps page.
export function SystemOptions({ reveal = false }: { reveal?: boolean }) {
  return (
    <>
      <div className="mt-12 max-w-4xl rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/15">
        <p className="font-bold text-sky">Both options include</p>
        <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {bothBrands.map((b) => (
            <li key={b} className="flex gap-2.5"><CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sky" />{b}</li>
          ))}
        </ul>
      </div>
      <div className="mt-5 grid max-w-4xl gap-5 md:grid-cols-2">
        {tiers.map((t, i) => (
          <div
            key={t.tier}
            {...(reveal ? { "data-reveal": "" } : {})}
            style={reveal ? ({ "--d": `${i * 140}ms` } as React.CSSProperties) : undefined}
            className={`rounded-2xl p-7 ${t.featured ? "bg-sky text-ink" : "bg-white/[0.06] ring-1 ring-white/15"}`}
          >
            <div className="relative -mx-2 -mt-2 mb-6 aspect-[16/10] overflow-hidden rounded-xl">
              <Image src={t.img} alt={t.alt} fill sizes="(min-width: 768px) 430px, 100vw" className="object-cover" />
            </div>
            <p className={`wrap-type text-2xl ${t.featured ? "text-white" : "text-sky"}`} style={t.featured ? undefined : { textShadow: "none" }}>{t.tier}</p>
            <h3 className="display mt-2 text-3xl">{t.brand}</h3>
            <p className={`mt-3 ${t.featured ? "text-ink/80" : "text-white/75"}`}>{t.line}</p>
            <ul className="mt-6 space-y-2.5">
              {t.points.map((p) => (
                <li key={p} className="flex gap-2.5"><CheckIcon className={`mt-1 h-4 w-4 shrink-0 ${t.featured ? "text-ink" : "text-sky"}`} />{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 max-w-4xl text-sm text-white/60">{warrantyNote}</p>
    </>
  );
}
