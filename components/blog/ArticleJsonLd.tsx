import { JsonLd } from "@/components/JsonLd";
import type { PostMeta } from "@/app/blog/posts";

const BASE_URL = "https://arsheo.com";

/**
 * Balisage Schema.org BlogPosting pour un article — rich snippet Google
 * (titre, auteur, date, fil de marque). Construit à partir du `frontmatter`
 * de chaque page.mdx, donc toujours synchronisé avec le contenu publié.
 */
export function ArticleJsonLd({ frontmatter }: { frontmatter: Omit<PostMeta, "slug"> & { slug: string } }) {
  const url = `${BASE_URL}/blog/${frontmatter.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    inLanguage: "fr-FR",
    keywords: frontmatter.tags?.join(", "),
    author: { "@type": "Person", name: frontmatter.author },
    publisher: { "@id": `${BASE_URL}/#organization` },
    image: `${BASE_URL}/arsheo-og.png`,
  };
  return <JsonLd data={data} />;
}
