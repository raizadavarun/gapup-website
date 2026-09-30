import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import { getAllArticles, articleExists, type ArticleMeta } from "@/lib/research";

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!articleExists(slug)) return {};
  const mod = await import(`@/content/research/${slug}.mdx`);
  const meta = mod.meta as ArticleMeta;
  return {
    title: `${meta.title} — MoNor Research`,
    description: meta.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!articleExists(slug)) notFound();

  const mod = await import(`@/content/research/${slug}.mdx`);
  const meta = mod.meta as ArticleMeta;
  const ArticleContent = mod.default;

  return (
    <div className="pt-32">
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-text-muted hover:text-text transition-colors mb-8"
          >
            &larr; All Research
          </Link>
          <SectionLabel className="mb-4">Research</SectionLabel>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            {meta.title}
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl mb-6">
            {meta.excerpt}
          </p>
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-text-muted/70">
            {formatDate(meta.date)}
          </p>
        </div>
      </section>

      <article className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ArticleContent />
        </div>
      </article>
    </div>
  );
}
