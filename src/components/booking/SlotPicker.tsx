"use client";

import { useEffect, useState } from "react";
import { fmtDay, fmtRange, dayKey, type Slot } from "@/lib/booking";
import { site } from "@/lib/site";

// Open times for one service, read live from Housecall Pro. Bump `reload` to fetch again.
// slots is null while loading; failed is true when the schedule couldn't be read.
export function useSlots(service: string, reload = 0) {
  const [loaded, setLoaded] = useState<{ service: string; slots: Slot[] | null; n: number }>({ service: "", slots: null, n: 0 });
  useEffect(() => {
    if (!service) return;
    let live = true;
    const done = (slots: Slot[] | null) => live && setLoaded({ service, slots, n: reload });
    fetch(`/api/booking/slots?service=${encodeURIComponent(service)}`)
      .then((r) => r.json())
      .then((d) => done(d.ok ? d.slots : null))
      .catch(() => done(null));
    return () => { live = false; };
  }, [service, reload]);
  const current = loaded.service === service && loaded.n === reload;
  return { slots: current ? loaded.slots : null, failed: current && loaded.slots === null };
}

// Day buttons that scroll sideways, then the open times for the chosen day.
export function SlotPicker({ slots, failed, selected, onSelect }: {
  slots: Slot[] | null;
  failed: boolean;
  selected?: string;
  onSelect: (s: Slot) => void;
}) {
  const [day, setDay] = useState("");
  const days = slots ? [...new Set(slots.map((s) => dayKey(s.start)))] : [];
  const shownDay = days.includes(day) ? day : (selected && days.includes(dayKey(selected)) ? dayKey(selected) : days[0] || "");
  const daySlots = (slots || []).filter((s) => dayKey(s.start) === shownDay);

  if (!slots && !failed) {
    return (
      <div className="mt-8 flex items-center gap-3 text-mist" aria-live="polite">
        <span className="h-6 w-6 animate-spin rounded-full border-4 border-line border-t-alarm-strong" aria-hidden="true" /> Checking the schedule…
      </div>
    );
  }
  if (failed || !slots || slots.length === 0) {
    return (
      <p className="mt-6 rounded-xl bg-[#f2f6f8] p-4 font-semibold">
        {failed ? "We couldn’t load the schedule right now." : "No online times are open in the next two weeks."} Call or text{" "}
        <a href={site.phoneHref} className="underline">{site.phone}</a> and we’ll find you a time.
      </p>
    );
  }
  return (
    <>
      <div role="group" aria-label="Day" className="-mx-1 mt-6 flex gap-2 overflow-x-auto px-1 pb-2">
        {days.map((d) => {
          const first = slots.find((s) => dayKey(s.start) === d)!;
          const [wd, ...md] = fmtDay(first.start).split(" ");
          const on = d === shownDay;
          return (
            <button key={d} type="button" aria-pressed={on} onClick={() => setDay(d)}
              className={`flex min-w-[4.5rem] shrink-0 flex-col items-center rounded-xl border-2 px-3 py-2.5 font-semibold transition-colors ${on ? "border-ink bg-ink text-white" : "border-transparent bg-[#f2f6f8] hover:border-line"}`}>
              <span className="text-sm">{wd.replace(",", "")}</span>
              <span className="text-lg">{md.join(" ")}</span>
            </button>
          );
        })}
      </div>
      <div role="group" aria-label="Time" className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {daySlots.map((s) => {
          const on = selected === s.start;
          return (
            <button key={s.start} type="button" aria-pressed={on} onClick={() => onSelect(s)}
              className={`flex h-14 items-center justify-center whitespace-nowrap rounded-xl border-2 px-2 text-center text-base font-semibold tabular-nums transition-colors sm:text-lg ${on ? "border-ink bg-sky-soft" : "border-transparent bg-[#f2f6f8] hover:border-line"}`}>
              {fmtRange(s.start, s.end)}
            </button>
          );
        })}
      </div>
    </>
  );
}
