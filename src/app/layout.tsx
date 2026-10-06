import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site, allCities, isLive } from "@/lib/site";

const archivo = localFont({
  src: "../fonts/archivo.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-archivo",
  display: "swap",
});

// Italic is only used for small accents, so it isn't preloaded.
const archivoItalic = localFont({
  src: "../fonts/archivo-italic.woff2",
  weight: "100 900",
  style: "italic",
  variable: "--font-archivo-italic",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Heat Pump & HVAC Services | Utah County & Salt Lake | Eco Home",
    template: "%s | Eco Home Heating & Cooling",
  },
  description:
    "Heat pump, furnace and AC installation and repair in Utah County and Salt Lake County. Systems sized to your home. Get instant pricing. Open 24/7. Call 801-396-0019.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "Eco Home Heating & Cooling | Heat Pump & HVAC Experts in Utah",
    description:
      "Heat pumps, furnaces and AC for Utah County and Salt Lake County. Open 24/7.",
    images: [{ url: "/images/van-wrap.jpg", width: 2000, height: 1326, alt: "Eco Home Heating & Cooling service van" }],
  },
  robots: isLive ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0ad2ff",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["HVACBusiness", "LocalBusiness"],
  "@id": `${site.url}/#business`,
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  image: `${site.url}/images/van-wrap.jpg`,
  telephone: "+1-801-396-0019",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: allCities.map((c) => ({ "@type": "City", name: `${c}, UT` })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "HVAC services",
    itemListElement: [
      "Heat pump installation", "Heat pump repair", "Dual-fuel systems",
      "Furnace repair", "Furnace replacement", "AC repair", "AC replacement",
      "Ductless mini-splits", "Ductwork and duct testing", "Indoor air quality",
      "HVAC tune-ups and maintenance",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${archivoItalic.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </body>
    </html>
  );
}
