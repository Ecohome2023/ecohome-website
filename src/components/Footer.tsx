import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, nav, counties, hrefFor } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr] lg:grid-cols-[1.3fr_1fr_2.2fr]">
        <div>
          <Image src="/images/logo-white.png" alt="Eco Home Heating & Cooling" width={152} height={60} sizes="152px" className="h-14 w-auto" />
          {/* NAP: must match Google Business Profile exactly */}
          <address className="mt-6 not-italic leading-relaxed text-white/85">
            <strong className="text-white">{site.name}</strong>
            <br />
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.zip}
            <br />
            <a href={site.phoneHref} className="font-bold text-sky hover:underline">{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-white hover:underline">{site.email}</a>
          </address>
          <p className="mt-3 text-white/85">{site.hoursLabel}</p>
          <p className="mt-1 text-sm text-white/60">Utah contractor license #{site.license}</p>
          <div className="mt-6 flex items-end gap-3">
            <Image src="/images/dan-eco-home-man.png" alt="Dan, the Eco Home Man" width={600} height={795} sizes="120px" className="h-32 w-auto shrink-0" />
            <Link href="/smile-guarantee" className="block flex-1 rounded-xl bg-alarm-strong px-4 py-3 hover:brightness-110">
              <span className="wrap-type block text-lg" style={{ textShadow: "none" }}>Smile Guarantee</span>
              <span className="block text-sm font-semibold">You smile, or we fix it free. Conditions apply, see terms.</span>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-sky">Explore</h2>
          <ul className="mt-4 space-y-2 text-white/85">
            {nav.map((n) => (
              n.label === "Rebates" ? (
                <Fragment key={n.label}>
                  <li><Link href="/rebates/rocky-mountain-power-wattsmart" className="hover:text-white hover:underline">Wattsmart rebates</Link></li>
                  <li><Link href="/rebates/enbridge-thermwise" className="hover:text-white hover:underline">ThermWise rebates</Link></li>
                  <li><Link href="/rebates/dealer-rebates" className="hover:text-white hover:underline">Dealer rebates</Link></li>
                </Fragment>
              ) : (
                <li key={n.label}><Link href={hrefFor(n)} className="hover:text-white hover:underline">{n.label}</Link></li>
              )
            ))}
            <li><Link href="/blog" className="hover:text-white hover:underline">Blog</Link></li>
            <li><a href={site.bookingUrl} className="hover:text-white hover:underline">Book service</a></li>
            <li><a href={site.googleMapsUrl} className="hover:text-white hover:underline">Directions</a></li>
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <h2 className="font-bold text-sky">Service area</h2>
          <div className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {counties.map((c) => (
              <div key={c.name}>
                <h3 className="text-sm font-bold text-white">{c.name}</h3>
                <p className="mt-1 text-sm leading-6 text-white/70">{c.cities.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-white/60 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. Financing provided by {site.financingPartner}, subject to credit approval.</p>
          <ul className="flex gap-5">
            <li><Link href="/blog" className="hover:text-white hover:underline">Blog</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-white hover:underline">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
