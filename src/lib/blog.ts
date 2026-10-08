// Blog posts. Each post's body is HTML we wrote or migrated from the old
// WordPress site. Add new posts to the top of the list.

export type Post = {
  slug: string;
  title: string;
  description: string; // under 155 characters, used for Google and the blog index
  date: string; // YYYY-MM-DD
  img?: { src: string; alt: string };
  html: string;
};

export const posts: Post[] = [];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (d: string) =>
  new Date(`${d}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
