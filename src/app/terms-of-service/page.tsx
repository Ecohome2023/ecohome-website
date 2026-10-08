import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description: "The terms for using the Eco Home Heating & Cooling website, including pricing, rebates, financing, guarantees and links to other sites.",
  path: "/terms-of-service",
});

export default function TermsOfService() {
  const addr = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.zip}`;
  return (
    <LegalPage title="Terms of Service" updated="October 8, 2026">
      <p>
        These terms apply to your use of ecohometoday.com, operated by {site.name} (“Eco Home,” “we,” “us”). By using this website, you agree to these terms. The work we do in your home is covered by your written estimate or contract, which controls if it differs from anything on this website.
      </p>

      <h2>Pricing and offers</h2>
      <p>
        Prices on this website, such as “starting at” and “from” prices, are general starting points. Your actual price depends on your home, your equipment and the work needed, and is shown on your written estimate. Specials and promotions may change or end at any time and may not be combined unless stated.
      </p>

      <h2>Rebates</h2>
      <p>
        Utility rebates are offered by Rocky Mountain Power and Enbridge Gas, and dealer rebates by equipment manufacturers. Their programs, rules and amounts are set by them and can change. The rebates shown on your final Eco Home estimate are guaranteed as described in that estimate. Eco Home is an independent contractor and is not affiliated with these utilities or manufacturers beyond our participation in their programs.
      </p>

      <h2>Financing</h2>
      <p>Financing is provided by {site.financingPartner} and is subject to credit approval. Terms are set by the lender.</p>

      <h2>Guarantees and warranties</h2>
      <p>
        Our <Link href="/smile-guarantee">Smile Guarantee</Link> is described, with its terms, on its own page. Equipment warranties are provided by the manufacturer, may require product registration, and are subject to the manufacturer’s terms.
      </p>

      <h2>Online booking and instant pricing</h2>
      <p>Our booking and estimate tools may be provided by outside services, such as Housecall Pro. Instant pricing gives you an estimate based on the information you provide. Your final price is confirmed after we see your home.</p>

      <h2>Website content</h2>
      <p>
        The information on this website is for general education about heating and cooling. It isn’t a substitute for an in-home evaluation by a licensed technician. If you smell gas or suspect carbon monoxide, leave your home and call 911 or your gas company right away.
      </p>
      <p>The text, photos, logos and other content on this site belong to Eco Home or are used with permission. Please don’t copy or reuse them without our written permission. Brand names and logos of manufacturers and utilities belong to their owners.</p>

      <h2>Links to other websites</h2>
      <p>Our site links to outside websites, like booking, financing and utility rebate pages. We’re not responsible for their content or practices.</p>

      <h2>Limitation of liability</h2>
      <p>
        This website is provided “as is.” To the fullest extent allowed by law, Eco Home is not liable for any damages that result from using, or being unable to use, this website or the information on it.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of Utah.</p>

      <h2>Changes to these terms</h2>
      <p>We may update these terms from time to time. The date at the top shows when they were last updated.</p>

      <h2>Contact us</h2>
      <p>
        {site.name}<br />
        {addr}<br />
        <a href={site.phoneHref}>{site.phone}</a>
      </p>
      <p>See also our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
    </LegalPage>
  );
}
