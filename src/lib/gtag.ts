// Google Analytics 4. The tag only loads on the live site (SITE_LIVE=true),
// so previews and local testing don't add fake visits.
export const GA_ID = "G-6KKXFCD1V6";

type Gtag = (...args: unknown[]) => void;

// Sends an event to Google Analytics if the tag is on the page.
export function gaEvent(name: string, params: Record<string, string | number> = {}) {
  (window as unknown as { gtag?: Gtag }).gtag?.("event", name, params);
}
