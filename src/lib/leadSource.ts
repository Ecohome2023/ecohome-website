// HubSpot Lead Source for website leads. Lead Source says where a lead came from
// (Google, Facebook, Organic). The form a lead filled in is already recorded by
// HubSpot as First/Recent Conversion, so a form's name ("Instant Estimate") is
// never sent as a Lead Source. Pure, so the browser and the server can share it.

// lead_channel comes from classify() in lib/attribution. "Referral" there means a
// referring website, not a person's referral, so it maps to Organic, never to the
// "Referral" Lead Source.
export function leadSourceFromChannel(channel: string | undefined | null): "Google" | "Facebook" | "Organic" {
  if (channel === "Paid search") return "Google";
  if (channel === "Paid social") return "Facebook";
  return "Organic";
}
