/* Arsheo blog — bloc méta d'article : date · auteur + tags.
   Se place juste sous le titre `# {frontmatter.title}` dans chaque page.mdx :
   <PostMeta frontmatter={frontmatter} />. */

import { Badge } from "@/components/ui/Badge";
import { formatPostDate, type PostMeta as PostMetaType } from "@/app/blog/posts";

export function PostMeta({ frontmatter }: { frontmatter: PostMetaType }) {
  return (
    <div style={{ margin: "-4px 0 40px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontFamily: "var(--font-body)",
          fontSize: 15,
          color: "var(--text-muted)",
        }}
      >
        <span className="mono-label" style={{ color: "var(--text-faint)" }}>
          {formatPostDate(frontmatter.date)}
        </span>
        <span style={{ color: "var(--border-strong)" }}>·</span>
        <span>{frontmatter.author}</span>
      </div>

      {frontmatter.tags?.length ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
          {frontmatter.tags.map((tag) => (
            <Badge key={tag} variant="neutral">
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}
    </div>
  );
}
