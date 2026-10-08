import Link from "next/link";

// Simple layout for the Privacy Policy and Terms of Service.
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-16">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70">
            <Link href="/" className="hover:underline">Home</Link> <span aria-hidden>/</span> {title}
          </nav>
          <h1 className="display mt-3 text-4xl sm:text-5xl">{title}</h1>
          <p className="mt-4 font-semibold text-white/70">Last updated {updated}</p>
        </div>
      </section>
      <div className="post mx-auto max-w-3xl px-4 py-12 sm:px-6">{children}</div>
    </>
  );
}
