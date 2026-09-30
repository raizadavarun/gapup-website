import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { getAllArticles } from "@/lib/research";

export const metadata: Metadata = {
  title: "Research — MoNor",
  description:
    "Research publications and insights from MoNor — methodology notes, empirical observations, and perspective on systematic decision-making.",
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ResearchPage() {
  const articles = await getAllArticles();

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="py-28 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <SectionLabel className="mb-4">Research</SectionLabel>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            Publications &
            <br />
            <span className="text-text-muted italic font-normal">Insights</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
            Selected findings from our research process — methodology notes,
            empirical observations, and perspective on systematic
            decision-making.
          </p>
        </div>
      </section>

      {articles.length === 0 ? (
        <section className="py-40 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-primary/60 text-sm tracking-[0.3em] uppercase mb-8">
              — Forthcoming —
            </p>
            <h2 className="font-serif text-2xl font-semibold tracking-tight mb-4">
              Research publications and insights coming soon.
            </h2>
            <p className="text-text-muted leading-relaxed mb-10">
              We are preparing selected work from our quantitative research
              process. Check back here or get in touch to be notified when we
              publish.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-muted hover:text-text hover:border-text transition-colors font-mono text-xs tracking-[0.15em] uppercase"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      ) : (
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto divide-y divide-border">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/research/${article.slug}`}
                className="group block py-10 first:pt-0"
              >
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-text-muted/70 mb-3">
                  {formatDate(article.date)}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-text-muted leading-relaxed max-w-2xl mb-3">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-primary">
                  Read Article &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
