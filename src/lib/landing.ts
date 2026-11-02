// Paid-ad landing pages. These pages hide the site header and footer so
// visitors stay on the page, and they're kept out of search (noindex, not in
// the sitemap). Add a path here when you add a new landing page.
export const landingPaths = ["/price"];
export const isLandingPath = (path: string) => landingPaths.some((p) => path === p || path.startsWith(`${p}/`));
