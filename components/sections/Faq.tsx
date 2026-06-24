"use client";

/* Arsheo one-pager — FAQ (accordéon). */

import { useState, type ReactNode } from "react";
import { Section, SectionHead, AIcons } from "@/components/sections/_shared";
import { FAQS } from "@/components/sections/faq-data";

function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderTop: "1px solid var(--border-default)" }}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          padding: "24px 4px",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          letterSpacing: "-0.015em",
          fontSize: "1.24rem",
          color: "var(--ink)",
        }}
      >
        {item.q}
        <span
          style={{
            width: 24,
            height: 24,
            flex: "none",
            color: "var(--terracotta)",
            display: "inline-flex",
            transform: open ? "rotate(180deg)" : "rotate(0)",
            transition: "transform var(--t-base) var(--ease-calm)",
          }}
        >
          {AIcons.chevron as ReactNode}
        </span>
      </button>
      {open ? (
        <p
          className="arsheo-faq-answer"
          style={{
            margin: 0,
            padding: "0 48px 26px 4px",
            fontFamily: "var(--font-body)",
            fontSize: "1.06rem",
            lineHeight: 1.62,
            color: "var(--text-muted)",
            maxWidth: "62ch",
          }}
        >
          {item.a}
        </p>
      ) : null}
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq">
      <SectionHead eyebrow="FAQ" title="Les questions qu'on nous pose." align="center" maxTitle="20ch" />
      <div style={{ maxWidth: 800, margin: "0 auto", borderBottom: "1px solid var(--border-default)" }}>
        {FAQS.map((item, i) => (
          <FaqItem key={i} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </div>
    </Section>
  );
}
