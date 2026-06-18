"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { DrawnCheck } from "@/components/motifs/DrawnAccents";

type BacklogCategory = "dette" | "bug" | "securite" | "version" | "tests";
type BacklogStatus = "done" | "active" | "queued";

export interface BacklogItem {
  label: string;
  cat: BacklogCategory;
  status: BacklogStatus;
}

const CATEGORIES: Record<
  BacklogCategory,
  { label: string; variant: "terracotta" | "honey" | "eu" | "neutral" }
> = {
  dette: { label: "Dette", variant: "terracotta" },
  bug: { label: "Bug", variant: "honey" },
  securite: { label: "Sécurité", variant: "eu" },
  version: { label: "Version", variant: "neutral" },
  tests: { label: "Tests", variant: "neutral" },
};

const DEFAULT_ITEMS: BacklogItem[] = [
  { label: "Migrer vers Node 20 (fin de support)", cat: "version", status: "done" },
  { label: "Corriger la fuite mémoire du worker", cat: "bug", status: "done" },
  { label: "Patcher la dépendance vulnérable (CVE)", cat: "securite", status: "done" },
  { label: "Réécrire les tests flaky du checkout", cat: "tests", status: "active" },
  { label: "Refactor du module de facturation", cat: "dette", status: "queued" },
  { label: "Nettoyer les feature flags morts", cat: "dette", status: "queued" },
];

/** Cadence calme du dépile (ms). */
const STEP_MS = 1150; // une ligne dépilée toutes les ~1,1 s
const HOLD_MS = 3400; // pause une fois tout vert, avant de reboucler

function BacklogRow({ item, status }: { item: BacklogItem; status: BacklogStatus }) {
  const done = status === "done";
  const active = status === "active";
  const cat = CATEGORIES[item.cat];
  return (
    <li
      className="arsheo-backlog-row"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "11px 12px",
        borderRadius: 12,
        background: done
          ? "var(--success-tint)"
          : active
            ? "var(--terracotta-tint)"
            : "transparent",
        opacity: done ? 0.78 : 1,
      }}
    >
      <span style={{ width: 24, display: "inline-flex", justifyContent: "center", flex: "none" }}>
        {done ? (
          <span key="check" className="arsheo-backlog-check">
            <DrawnCheck />
          </span>
        ) : (
          <span
            className={active ? "arsheo-backlog-dot--active" : undefined}
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              flex: "none",
              background: active ? "var(--terracotta)" : "var(--border-strong)",
              boxShadow: active ? "0 0 0 4px rgba(199,93,58,.18)" : "none",
            }}
          />
        )}
      </span>
      <span
        style={{
          flex: 1,
          fontFamily: "var(--font-body)",
          fontSize: 15.5,
          color: "var(--text-body)",
          textDecorationLine: done ? "line-through" : "none",
          textDecorationColor: "var(--success)",
          textDecorationThickness: "2px",
        }}
      >
        {item.label}
      </span>
      <span className="arsheo-backlog-meta">
        <Badge variant={done ? "success" : active ? "terracotta" : "neutral"}>
          {done ? "Dépilé" : active ? "En cours" : "En file"}
        </Badge>
        <span className="arsheo-backlog-cat" style={{ width: 78, textAlign: "right", flex: "none" }}>
          <Badge variant={cat.variant}>{cat.label}</Badge>
        </span>
      </span>
    </li>
  );
}

/**
 * Motif signature « votre backlog qui fond ».
 * Avec `animate`, les lignes se dépilent une par une (en file → en cours → dépilé),
 * de haut en bas, en boucle calme. Sinon, statuts statiques fournis par `items`.
 */
export function BacklogMelt({
  items = DEFAULT_ITEMS,
  title = "Votre backlog, qui fond",
  animate = false,
}: {
  items?: BacklogItem[];
  title?: string;
  animate?: boolean;
}) {
  const count = items.length;
  const cardRef = useRef<HTMLDivElement>(null);
  // Indice de la ligne « en cours » : tout ce qui est avant est dépilé.
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  // Respecte prefers-reduced-motion + n'anime que lorsque la carte est visible.
  useEffect(() => {
    if (!animate) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setActive(count); // état final : tout dépilé, sans mouvement
      return;
    }
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => setVisible(entries[0]?.isIntersecting ?? false),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animate, count]);

  // Avance le dépile, ligne par ligne, puis reboucle après une pause.
  useEffect(() => {
    if (!animate || reduced || !visible) return;
    const atEnd = active >= count;
    const t = setTimeout(
      () => setActive((a) => (a >= count ? 0 : a + 1)),
      atEnd ? HOLD_MS : STEP_MS,
    );
    return () => clearTimeout(t);
  }, [animate, reduced, visible, active, count]);

  const statusAt = (i: number): BacklogStatus => {
    if (!animate) return items[i].status;
    if (i < active) return "done";
    if (i === active) return "active";
    return "queued";
  };

  const done = animate
    ? Math.min(active, count)
    : items.filter((i) => i.status === "done").length;

  return (
    <div
      ref={cardRef}
      className="arsheo-backlog-card"
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--r-panel)",
        boxShadow: "var(--shadow-card)",
        padding: "26px 28px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <span className="mono-label">Backlog technique</span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            fontWeight: 600,
            color: "var(--success)",
            transition: "color var(--t-base) var(--ease-calm)",
          }}
        >
          {done}/{count} dépilés
        </span>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          fontSize: 22,
          color: "var(--ink)",
          margin: "0 0 18px",
        }}
      >
        {title}
      </h3>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {items.map((it, idx) => (
          <BacklogRow key={idx} item={it} status={statusAt(idx)} />
        ))}
      </ul>
    </div>
  );
}
