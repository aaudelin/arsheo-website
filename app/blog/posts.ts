import fs from "node:fs";
import path from "node:path";

/** Métadonnées d'un article, exportées par chaque app/blog/<slug>/page.mdx via `frontmatter`. */
export type PostMeta = {
  title: string;
  description: string;
  date: string; // ISO YYYY-MM-DD
  author: string;
  tags: string[];
  slug: string;
};

const BLOG_DIR = path.join(process.cwd(), "app/blog");

/**
 * Liste tous les articles publiés (un dossier = un article), triés du plus
 * récent au plus ancien. Lit le `frontmatter` exporté par chaque page.mdx.
 */
export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`./${slug}/page.mdx`);
      return { ...(mod.frontmatter as PostMeta), slug };
    }),
  );

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

/** Date longue en français : "9 juin 2026". */
export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
