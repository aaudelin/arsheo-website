/* Arsheo blog — carte d'article dans l'index /blog.
   Verre dépoli posé sur le halo chaud de la page, hover calme (remontée légère). */

import { Badge } from "@/components/ui/Badge";
import { AIcons } from "@/components/sections/_shared";
import { formatPostDate, type PostMeta } from "@/app/blog/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="arsheo-glasscard"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "30px 28px 26px",
        borderRadius: "var(--r-card)",
        textDecoration: "none",
        background: "linear-gradient(180deg, rgba(255,252,247,.82), rgba(255,249,240,.60))",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        backdropFilter: "blur(18px) saturate(140%)",
        border: "1px solid rgba(255,255,255,.78)",
        boxShadow: "var(--glass-shadow), var(--glass-inset)",
      }}
    >
      <div className="mono-label" style={{ color: "var(--text-faint)", marginBottom: 16 }}>
        {formatPostDate(post.date)}
      </div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          fontSize: 22,
          lineHeight: 1.18,
          color: "var(--ink)",
          margin: "0 0 12px",
        }}
      >
        {post.title}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15.5,
          lineHeight: 1.55,
          color: "var(--text-muted)",
          margin: "0 0 22px",
        }}
      >
        {post.description}
      </p>

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        {post.tags?.[0] ? <Badge variant="neutral">{post.tags[0]}</Badge> : <span />}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            fontFamily: "var(--font-body)",
            fontSize: 14.5,
            fontWeight: 600,
            color: "var(--terracotta)",
          }}
        >
          Lire
          <span style={{ width: 16, height: 16, display: "inline-flex" }}>{AIcons.arrow}</span>
        </span>
      </div>
    </a>
  );
}
