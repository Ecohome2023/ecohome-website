import { jobPromises } from "@/lib/content";
import { CheckIcon } from "./icons";

// "On every job" promises: permits, haul-away and cleanup.
export function JobPromises({ reveal = false }: { reveal?: boolean }) {
  return (
    <div className="mt-16">
      <h2 {...(reveal ? { "data-reveal": "" } : {})} className="display text-3xl sm:text-4xl">On every job, no exceptions</h2>
      <ul className="mt-8 grid gap-5 md:grid-cols-3">
        {jobPromises.map((p, i) => (
          <li
            key={p.title}
            {...(reveal ? { "data-reveal": "" } : {})}
            style={reveal ? ({ "--d": `${i * 120}ms` } as React.CSSProperties) : undefined}
            className={`rounded-2xl p-6 ${i === 0 ? "bg-ink text-white" : "bg-white ring-1 ring-line"}`}
          >
            <span className={`grid h-10 w-10 place-items-center rounded-full ${i === 0 ? "bg-alarm-strong text-white" : "bg-sky text-ink"}`}>
              <CheckIcon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-xl font-extrabold">{p.title}</h3>
            <p className={`mt-2 ${i === 0 ? "text-white/80" : "text-mist"}`}>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
