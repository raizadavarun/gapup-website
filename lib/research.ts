import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content/research");

export type ArticleMeta = {
  title: string;
  excerpt: string;
  date: string; // ISO date, e.g. "2026-09-30"
};

export type ArticleSummary = ArticleMeta & { slug: string };

function listSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getAllArticles(): Promise<ArticleSummary[]> {
  const slugs = listSlugs();
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`../content/research/${slug}.mdx`);
      const meta = mod.meta as ArticleMeta;
      return { slug, ...meta };
    })
  );
  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function articleExists(slug: string): boolean {
  return fs.existsSync(path.join(CONTENT_DIR, `${slug}.mdx`));
}
