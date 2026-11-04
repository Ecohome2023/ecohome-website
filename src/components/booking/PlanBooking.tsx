"use client";

import { useState } from "react";
import { fmtDay, fmtRange, type Slot } from "@/lib/booking";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon } from "@/components/icons";
import { SlotPicker, useSlots } from "@/components/booking/SlotPicker";

// Pick a time for a Care Plan tune-up. The visit already exists in Housecall Pro;
// booking puts it on Andrew's calendar.
export function PlanBooking({ id, firstName }: { id: string; firstName: string }) {
  const [slot, setSlot] = useState<Slot | null>(null);
  const [reload, setReload] = useState(0);
  const [status, setStatus] = useState<"asking" | "sending" | "done">("asking");
  const [error, setError] = useState("");
  const [previewOnly, setPreviewOnly] = useState(false);
  const { slots, failed } = useSlots("furnace-tune-up", reload, true);
  const card = "min-w-0 rounded-3xl bg-white p-6 shadow-[0_6px_0_#14283a] ring-2 ring-ink sm:p-8";

  async function book() {
    if (!slot) return setError("Please pick a time.");
    setStatus("sending");
    setError("");
    try {
      const r = await fetch("/api/plan-visit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, start: slot.start }) });
      const d = await r.json().catch(() => ({}));
      if (d.ok) {
        setPreviewOnly(!!d.preview);
        return setStatus("done");
      }
      setStatus("asking");
      if (d.error === "taken") { setSlot(null); setReload((n) => n + 1); return setError("Sorry, that time was just taken. Please pick another."); }
      if (d.error === "already_booked") return setError(`This visit is already on our schedule. Call or text ${site.phone} to change it.`);
      setError(`We couldn’t book that. Please call or text ${site.phone} and we’ll get you scheduled.`);
    } catch {
      setStatus("asking");
      setError(`We couldn’t book that. Please call or text ${site.phone} and we’ll get you scheduled.`);
    }
  }

  if (status === "done" && slot) {
    return (
      <div className={card} aria-live="polite">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#1e8e4f] text-white"><CheckIcon className="h-6 w-6" /></span>
        <h2 className="display mt-4 text-3xl">You’re booked{firstName ? `, ${firstName}` : ""}.</h2>
        <p className="mt-3 rounded-xl bg-sky-soft px-4 py-3 text-lg font-semibold">Care Plan tune-up<br />{fmtDay(slot.start)}, {fmtRange(slot.start, slot.end)}</p>
        {previewOnly && <p className="mt-4 rounded-xl bg-alarm-strong/10 p-4 font-semibold text-alarm-strong">Preview link: nothing was booked in Housecall Pro.</p>}
        <p className="mt-4 text-lg text-mist">Your technician arrives within that hour. Need to change it? Call or text us.</p>
        <a href={site.phoneHref} className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-4 text-lg font-bold"><PhoneIcon className="h-5 w-5" /> {site.phone}</a>
      </div>
    );
  }

  return (
    <div className={card}>
      <h2 className="display text-2xl sm:text-3xl">Pick a time for your tune-up</h2>
      <p className="mt-2 text-mist">Your technician arrives within the hour you choose.</p>
      <SlotPicker slots={slots} failed={failed} selected={slot?.start} onSelect={(s) => { setSlot(s); setError(""); }} />
      <p role="alert" className="mt-4 min-h-6 font-semibold text-alarm-strong">{error}</p>
      <button type="button" onClick={book} disabled={status === "sending" || !slot}
        className="mt-2 w-full rounded-full bg-alarm-strong px-6 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110 disabled:opacity-60">
        {status === "sending" ? "Booking your tune-up…" : slot ? `Book ${fmtDay(slot.start)}, ${fmtRange(slot.start, slot.end)}` : "Pick a time above"}
      </button>
    </div>
  );
}
