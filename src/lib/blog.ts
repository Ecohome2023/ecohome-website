import data from "./posts.json";

// Blog posts live in posts.json. Each body is HTML we wrote or migrated (and
// fact-checked) from the old WordPress site. Newest first.

export type Post = {
  slug: string;
  title: string;
  seoTitle?: string; // shorter title for Google results, under 49 characters
  description: string; // under 155 characters, used for Google and the blog index
  date: string; // YYYY-MM-DD
  img?: { src: string; alt: string };
  html: string;
};

export const posts: Post[] = data;

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (d: string) =>
  new Date(`${d}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
