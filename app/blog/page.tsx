import type { Metadata } from "next";
import { Container } from "@/components/sections/_shared";
import { PostCard } from "@/components/blog/PostCard";
import { getAllPosts } from "@/app/blog/posts";

export const metadata: Metadata = {
  title: "Blog Arsheo",
  description:
    "Notes calmes sur la dette technique, le self-healing code, la fiabilité en production et l'automatisation utile. Par l'équipe Arsheo.",
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <Container max={1180} style={{ paddingTop: "clamp(48px, 7vw, 96px)", paddingBottom: "var(--section-y)" }}>
      {/* En-tête de section */}
      <div style={{ marginBottom: 56 }}>
        <div className="mono-label" style={{ marginBottom: 16 }}>
          Blog
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            fontSize: "clamp(2.2rem, 1.4rem + 2.6vw, 3.4rem)",
            lineHeight: 1.06,
            color: "var(--ink)",
            margin: 0,
            maxWidth: "20ch",
          }}
        >
          Ce qu&apos;on observe pendant qu&apos;on dépile.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.22rem",
            lineHeight: 1.55,
            color: "var(--text-muted)",
            margin: "22px 0 0",
            maxWidth: "52ch",
          }}
        >
          Dette technique, self-healing, fiabilité en production, automatisation utile.
        </p>
      </div>

      {/* Grille d'articles */}
      {posts.length ? (
        <div
          className="arsheo-cards-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}>
          Le premier article arrive bientôt.
        </p>
      )}
    </Container>
  );
}
