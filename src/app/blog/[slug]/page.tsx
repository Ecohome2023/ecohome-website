import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/meta";
import { posts, getPost, formatDate } from "@/lib/blog";
import { site } from "@/lib/site";
import { MailIcon, PhoneIcon } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({ title: post.seoTitle ?? post.title, description: post.description, path: `/blog/${post.slug}` });
}

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@id": `${site.url}/#business` },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    ...(post.img ? { image: `${site.url}${post.img.src}` } : {}),
  };

  return (
    <>
      <article>
        <header className="bg-ink text-white">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70">
              <Link href="/" className="hover:underline">Home</Link> <span aria-hidden>/</span>{" "}
              <Link href="/blog" className="hover:underline">Blog</Link>
            </nav>
            <h1 className="display mt-3 text-4xl sm:text-5xl">{post.title}</h1>
            <p className="mt-4 font-semibold text-white/70">{formatDate(post.date)} · {site.name}</p>
          </div>
        </header>
        {post.img && (
          <div className="mx-auto -mt-2 max-w-3xl px-4 pt-10 sm:px-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src={post.img.src} alt={post.img.alt} fill preload sizes="(min-width: 768px) 720px, 100vw" className="object-cover" />
            </div>
          </div>
        )}
        <div className="post mx-auto max-w-3xl px-4 py-12 sm:px-6" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <section className="bg-teal text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="display text-4xl sm:text-5xl">Questions about your home?</h2>
            <p className="mt-4 max-w-lg text-lg text-white/85">Get instant pricing online, or give us a call. We’re open 24/7.</p>
          </div>
          <div className="grid gap-3">
            <a href={site.instantPricingUrl} className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-lg font-bold text-ink shadow-[0_4px_0_#052f3d] hover:bg-sky-soft">
              <MailIcon className="h-5 w-5" /> Get instant pricing
            </a>
            <a href={site.phoneHref} className="flex items-center justify-center gap-2 rounded-full px-7 py-4 text-lg font-bold ring-2 ring-white/50 hover:bg-white/10">
              <PhoneIcon className="h-5 w-5" /> {site.phone}
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
