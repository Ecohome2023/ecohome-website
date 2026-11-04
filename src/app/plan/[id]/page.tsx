import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { fmtDay, fmtRange } from "@/lib/booking";
import { getPlanVisit } from "@/lib/planVisit";
import { PlanBooking } from "@/components/booking/PlanBooking";
import { CheckIcon, PhoneIcon } from "@/components/icons";

// A Care Plan member's link to schedule their tune-up. Private link: never indexed.
export const metadata: Metadata = {
  title: "Schedule Your Tune-Up",
  robots: { index: false, follow: false },
};

export default async function PlanVisitPage({ params }: PageProps<"/plan/[id]">) {
  const { id } = await params;
  const v = await getPlanVisit(id);
  if (!v) notFound();

  return (
    <section className="bg-sky-soft">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 md:py-14">
        <p className="wrap-type text-2xl text-alarm-strong" style={{ textShadow: "none" }}>{v.plan}</p>
        <h1 className="display mt-2 text-4xl sm:text-5xl">{v.firstName ? `${v.firstName}, your free tune-up is due` : "Your free tune-up is due"}</h1>
        {v.address && <p className="mt-3 text-lg text-ink/80">At {v.address}</p>}

        <div className="mt-8">
          {v.status === "open" && <PlanBooking id={v.id} firstName={v.firstName} />}
          {v.status === "booked" && v.start && v.end && (
            <div className="rounded-3xl bg-white p-6 ring-2 ring-ink sm:p-8">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#1e8e4f] text-white"><CheckIcon className="h-6 w-6" /></span>
              <h2 className="display mt-4 text-3xl">You’re already booked.</h2>
              <p className="mt-3 rounded-xl bg-sky-soft px-4 py-3 text-lg font-semibold">{fmtDay(v.start)}, {fmtRange(v.start, v.end)}</p>
              <p className="mt-4 text-lg text-mist">Need a different time? Call or text us.</p>
              <a href={site.phoneHref} className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-4 text-lg font-bold"><PhoneIcon className="h-5 w-5" /> {site.phone}</a>
            </div>
          )}
          {v.status === "closed" && (
            <div className="rounded-3xl bg-white p-6 ring-2 ring-ink sm:p-8">
              <h2 className="display text-3xl">This visit is already taken care of.</h2>
              <p className="mt-3 text-lg text-mist">Questions about your Care Plan? Call or text us.</p>
              <a href={site.phoneHref} className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-4 text-lg font-bold"><PhoneIcon className="h-5 w-5" /> {site.phone}</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
