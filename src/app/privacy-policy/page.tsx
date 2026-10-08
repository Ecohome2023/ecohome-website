import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Eco Home Heating & Cooling collects, uses and protects your information when you visit our website, book service or contact us.",
  path: "/privacy-policy",
});

export default function PrivacyPolicy() {
  const addr = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.zip}`;
  return (
    <LegalPage title="Privacy Policy" updated="October 8, 2026">
      <p>
        {site.name} (“Eco Home,” “we,” “us”) respects your privacy. This policy explains what information we collect when you visit ecohometoday.com, book service, request an estimate or contact us, and how we use it.
      </p>

      <h2>Information we collect</h2>
      <h3>Information you give us</h3>
      <p>When you call us, book service, request an estimate or become a customer, we may collect your name, phone number, email address, service address, details about your home and equipment, and any notes you share with us.</p>
      <h3>Information collected automatically</h3>
      <p>
        We use privacy-friendly website analytics to understand how many people visit our site and which pages are useful. This analytics does not use cookies and does not identify you personally. Like most websites, our hosting provider may also record basic technical information, such as your browser type and IP address, to keep the site secure and running.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To schedule and perform service, send estimates and invoices, and follow up on your job</li>
        <li>To answer your questions and contact you about your appointment</li>
        <li>To process rebates, financing applications and warranty registrations on your behalf</li>
        <li>To improve our website and services</li>
        <li>To send occasional offers or reminders, such as tune-up reminders. You can opt out at any time.</li>
      </ul>

      <h2>When we share information</h2>
      <p>We do not sell your personal information. We share it only when needed to serve you, for example with:</p>
      <ul>
        <li>Our scheduling and customer software, including Housecall Pro, which powers our online booking</li>
        <li>Utility rebate programs, such as Rocky Mountain Power Wattsmart and Enbridge Gas ThermWise, when we file rebates for you</li>
        <li>Our financing partner, {site.financingPartner}, if you choose to apply for financing</li>
        <li>Equipment manufacturers, to register your warranty</li>
        <li>City or county offices, when we pull permits for your job</li>
        <li>Anyone we’re required to share with by law</li>
      </ul>

      <h2>Third-party services on our site</h2>
      <p>
        Our site links to and embeds a few outside services. Booking links take you to Housecall Pro. Our map is provided by Google Maps, and our customer videos are hosted on YouTube and only load when you press play. These services have their own privacy policies and may use cookies when you interact with them.
      </p>

      <h2>How we protect your information</h2>
      <p>We use reasonable safeguards to protect your information and limit access to the people who need it to serve you. No method of storing or sending information online is completely secure, but we work to keep your information safe.</p>

      <h2>Your choices</h2>
      <p>You can ask us to update or correct your information, stop sending you marketing messages, or delete information we no longer need to keep. Just contact us using the information below.</p>

      <h2>Children’s privacy</h2>
      <p>Our website and services are meant for adults. We don’t knowingly collect information from children under 13.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The date at the top shows when it was last updated.</p>

      <h2>Contact us</h2>
      <p>
        {site.name}<br />
        {addr}<br />
        <a href={site.phoneHref}>{site.phone}</a><br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>See also our <Link href="/terms-of-service">Terms of Service</Link>.</p>
    </LegalPage>
  );
}
