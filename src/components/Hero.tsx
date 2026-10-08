import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { CheckIcon, MailIcon, PhoneIcon, Stars } from "./icons";

type Variant = "navy" | "photo" | "light";

const headline = "Heat pump & HVAC experts for Utah County and Salt Lake County";
const sub = "Sized to your home and tested before we leave. Get instant pricing, and reach us day or night.";

function Ctas({ dark }: { dark: boolean }) {
  return (
    <>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={site.bookingUrl} className="rounded-full bg-alarm-strong px-7 py-4 text-lg font-bold text-white shadow-[0_4px_0_#8a001c] hover:brightness-110">
          Book service
        </a>
        <a
          href={site.instantPricingUrl}
          className={`flex items-center gap-2 rounded-full px-7 py-4 text-lg font-bold ${
            dark ? "text-white ring-2 ring-white/60 hover:bg-white/10" : "bg-white text-ink ring-2 ring-ink hover:bg-sky-soft"
          }`}
        >
          <MailIcon className="h-5 w-5" /> Get instant pricing
        </a>
      </div>
      <p className={`mt-3 text-sm font-medium ${dark ? "text-white/75" : "text-ink/70"}`}>
        Answer a few quick questions and see your price instantly.
      </p>
    </>
  );
}

function Trust({ dark }: { dark: boolean }) {
  return (
    <ul className={`mt-8 flex flex-wrap gap-x-6 gap-y-2 font-semibold ${dark ? "text-white" : "text-ink"}`}>
      <li className="flex items-center gap-2"><Stars /> {site.rating.value} from {site.rating.count} Google reviews</li>
      <li className="flex items-center gap-1.5"><CheckIcon className={`h-4 w-4 ${dark ? "text-sky" : "text-teal"}`} /> Licensed & insured</li>
      <li className="flex items-center gap-1.5"><CheckIcon className={`h-4 w-4 ${dark ? "text-sky" : "text-teal"}`} /> Local to American Fork</li>
    </ul>
  );
}

export function SmileBand() {
  return (
    <div className="bg-alarm-strong text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-5 sm:px-6 md:flex-row md:items-center">
        <div>
          <p className="text-xl font-bold">
            <span className="wrap-type text-xl" style={{ textShadow: "none" }}>Smile Guarantee:</span>{" "}
            you smile, or we fix it free.
          </p>
          <Link href="/smile-guarantee" className="mt-1 inline-block text-sm font-semibold underline underline-offset-4 hover:no-underline">
            Conditions apply. Click to learn more
          </Link>
        </div>
        <a href={site.phoneHref} className="display flex items-center gap-3 text-3xl hover:underline sm:text-4xl">
          <PhoneIcon className="h-7 w-7" /> {site.phone}
        </a>
      </div>
    </div>
  );
}

export function Hero({ variant = "navy" }: { variant?: Variant }) {
  if (variant === "photo") {
    return (
      <section className="relative overflow-hidden bg-ink">
        <Image src="/images/tech-portrait.jpg" alt="Eco Home technician next to a newly installed heat pump" fill preload sizes="100vw" className="object-cover object-[85%_30%]" />
        <div className="absolute inset-0 bg-ink/85 lg:hidden" aria-hidden />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink from-25% via-ink/70 via-50% to-transparent to-75% lg:block" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="max-w-2xl text-white">
            <h1 className="display text-[2.5rem] sm:text-6xl">{headline}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">{sub}</p>
            <Ctas dark />
            <Trust dark />
          </div>
        </div>
      </section>
    );
  }

  if (variant === "light") {
    return (
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <h1 className="display text-[2.5rem] text-ink sm:text-6xl">{headline}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl">{sub}</p>
            <Ctas dark={false} />
            <Trust dark={false} />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/tech-portrait.jpg" alt="Eco Home technician next to a newly installed heat pump" fill preload sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-[65%_30%]" />
            <span className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-heat to-cool" aria-hidden />
          </div>
        </div>
      </section>
    );
  }

  // navy (default)
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div className="text-white">
          <h1 className="display text-[2.5rem] sm:text-6xl">{headline}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">{sub}</p>
          <Ctas dark />
          <Trust dark />
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image src="/images/tech-portrait.jpg" alt="Eco Home technician next to a newly installed heat pump" fill preload sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-[65%_30%]" />
          </div>
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-ink shadow-lg">
            <Stars className="h-4 w-4" />
            <span className="text-sm font-bold">{site.rating.value} · {site.rating.count} Google reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
