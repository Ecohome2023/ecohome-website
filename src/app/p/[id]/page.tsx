import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { getProposal } from "@/lib/proposal";
import { ProposalView } from "@/components/proposal/ProposalView";
import { CheckIcon } from "@/components/icons";

// A customer's proposal, read live from their Housecall Pro estimate. Private link: never indexed.
export const metadata: Metadata = {
  title: "Your Proposal",
  robots: { index: false, follow: false },
};

// What Andrew checks at every startup. Placeholder list until the owner confirms it.
const startupChecks = [
  ["Line set pressure test", "Pressurized with nitrogen and checked for leaks before any refrigerant goes in."],
  ["Deep vacuum", "Evacuated to 500 microns or lower and held, to remove moisture and air."],
  ["Refrigerant charge", "Set by superheat and subcooling to the manufacturer’s spec."],
  ["Airflow and static pressure", "Blower set for your system size and total static pressure measured."],
  ["Gas pressure", "Inlet and manifold gas pressure set to the furnace spec."],
  ["Combustion and CO safety", "Flue draft and carbon monoxide checked on the new furnace."],
  ["Temperature split", "Heating and cooling temperature rise and drop measured at the vents."],
  ["Drain and safety switch", "Condensate drain flowing and float switch tested."],
  ["Thermostat setup", "Programmed and walked through with you."],
  ["Your startup report", "Every reading above written down and left with you."],
];

export default async function ProposalPage({ params }: PageProps<"/p/[id]">) {
  const { id } = await params;
  const p = await getProposal(id);
  if (!p || p.options.length === 0) notFound();
  const visit = p.visit && new Date(p.visit).toLocaleDateString("en-US", { timeZone: "America/Denver", weekday: "short", month: "short", day: "numeric", year: "numeric" });

  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-4 pb-10 pt-10 sm:px-6">
          <p className="text-sm font-bold text-[#cfe9f2]">Utah contractor license #{site.license}</p>
          <h1 className="display mt-2 text-4xl sm:text-5xl">{p.firstName ? `${p.firstName}, here’s your proposal` : "Your home comfort proposal"}</h1>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-[#cfe9f2]">
            <span>Proposal <b className="text-white tabular-nums">#{p.number}</b></span>
            {visit && <span>Visit <b className="text-white">{visit}</b></span>}
            {p.advisor && <span>Comfort advisor <b className="text-white">{p.advisor}</b></span>}
            {p.city && <span>Home in <b className="text-white">{p.city}</b></span>}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <ProposalView p={p} />

        <section className="mt-12" aria-labelledby="checks">
          <p id="checks" className="text-sm font-extrabold uppercase tracking-wider text-mist">What we check before we leave</p>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {startupChecks.map(([t, d]) => (
              <li key={t} className="flex gap-3 rounded-xl bg-[#f2f6f8] p-4">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[#1e8e4f]" />
                <span><b className="block">{t}</b><span className="text-mist">{d}</span></span>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-sm text-mist">
          Prices are from your Housecall Pro estimate #{p.number} and update if Andrew changes it. {site.name} · License #{site.license} · {site.phone}
        </p>
      </div>
    </>
  );
}
