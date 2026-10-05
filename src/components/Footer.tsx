import Image from "next/image";
import Link from "next/link";
import { site, nav, counties } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Image src="/images/logo-white.png" alt="Eco Home Heating & Cooling" width={1450} height={573} className="h-14 w-auto" />
          {/* NAP: must match Google Business Profile exactly */}
          <address className="mt-6 not-italic leading-relaxed text-white/85">
            <strong className="text-white">{site.name}</strong>
            <br />
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.zip}
            <br />
            <a href={site.phoneHref} className="font-bold text-sky hover:underline">{site.phone}</a>
          </address>
          <p className="mt-3 text-white/85">{site.hoursLabel}</p>
          <p className="mt-1 text-sm text-white/60">Utah contractor license #{site.license}</p>
        </div>

        <div>
          <h2 className="font-bold text-sky">Explore</h2>
          <ul className="mt-4 space-y-2 text-white/85">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white hover:underline">{n.label}</Link></li>
            ))}
            <li><a href={site.bookingUrl} className="hover:text-white hover:underline">Book service</a></li>
            <li><a href={site.googleMapsUrl} className="hover:text-white hover:underline">Directions</a></li>
          </ul>
        </div>

        {counties.map((c) => (
          <div key={c.name}>
            <h2 className="font-bold text-sky">{c.name}</h2>
            <ul className="mt-4 columns-2 gap-4 text-sm leading-7 text-white/75">
              {c.cities.map((city) => <li key={city}>{city}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-sm text-white/55 sm:px-6">
          © {year} {site.name}. Financing provided by {site.financingPartner}, subject to credit approval.
        </p>
      </div>
    </footer>
  );
}
