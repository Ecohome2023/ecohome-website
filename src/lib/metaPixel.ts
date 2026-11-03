// Meta (Facebook/Instagram) pixel, for measuring and optimizing Meta ads. Like
// Google Analytics, it only loads on the live site (SITE_LIVE=true).
// Events: PageView on every page (the pixel also counts in-site navigation),
// Lead when an instant-pricing form is submitted, Contact on a phone-number tap.
export const META_PIXEL_ID = "385425857855240";

type Fbq = (...args: unknown[]) => void;

// Sends a standard event to Meta if the pixel is on the page.
export function metaEvent(name: string, params: Record<string, string | number> = {}) {
  (window as unknown as { fbq?: Fbq }).fbq?.("track", name, params);
}
