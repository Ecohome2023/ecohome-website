import { googleReviews } from "@/lib/reviews";
import { Stars } from "./icons";

// A Google review from a customer in this page's city, shown on its own.
export function FeaturedReview({ path }: { path: string }) {
  const r = googleReviews.find((x) => x.featuredOn?.includes(path));
  if (!r) return null;
  return (
    <figure className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-line">
      <p className="text-sm font-bold uppercase tracking-wider text-alarm-strong">From a neighbor in {r.city}</p>
      <div className="mt-3"><Stars className="h-5 w-5" /></div>
      <blockquote className="mt-3 text-lg leading-relaxed">“{r.text}”</blockquote>
      <figcaption className="mt-3 font-bold">
        {r.name} <span className="font-normal text-mist">· Google review{r.service ? ` · ${r.service}` : ""}</span>
      </figcaption>
    </figure>
  );
}
