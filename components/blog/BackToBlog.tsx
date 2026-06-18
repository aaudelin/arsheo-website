"use client";

/* Arsheo blog — bouton « retour à la liste des articles », posé en haut de chaque
   article. Pilule calme façon bouton ghost du design system. */

import { useState } from "react";

export function BackToBlog() {
  const [hover, setHover] = useState(false);
  return (
    <a
      href="/blog"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 36,
        padding: "8px 16px 8px 13px",
        borderRadius: "var(--r-pill)",
        border: "1px solid var(--border-strong)",
        background: hover ? "var(--sand)" : "transparent",
        color: "var(--ink)",
        fontFamily: "var(--font-body)",
        fontSize: 14.5,
        fontWeight: 600,
        lineHeight: 1,
        textDecoration: "none",
        transition: "background var(--t-base) var(--ease-calm)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "inline-flex",
          color: "var(--terracotta)",
          transform: hover ? "translateX(-2px)" : "none",
          transition: "transform var(--t-base) var(--ease-calm)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="17"
          height="17"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
      </span>
      Tous les articles
    </a>
  );
}
