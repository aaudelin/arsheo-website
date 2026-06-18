import type { CSSProperties } from "react";

/* ---- Hand-drawn "dessins" (DS terracotta/honey, calm strokes) ---- */

/** Souligné dessiné à la main, à poser sous un mot clé (parent en position:relative). */
export function DrawnUnderline({ color = "var(--terracotta)" }: { color?: string }) {
  return (
    <svg
      aria-hidden
      style={{ position: "absolute", left: "-1%", right: "-1%", bottom: "-0.30em", width: "102%" }}
      height="16"
      viewBox="0 0 320 16"
      fill="none"
      preserveAspectRatio="none"
    >
      <path d="M4 10C70 4 230 3 316 8" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/** Loose hand-drawn ellipse circling a word. */
export function DrawnCircle({ color = "var(--honey)" }: { color?: string }) {
  return (
    <svg
      aria-hidden
      style={{ position: "absolute", inset: "-26% -8% -32%", width: "116%", height: "158%", pointerEvents: "none" }}
      viewBox="0 0 240 90"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M120 7C58 5 12 20 9 45c-3 24 55 39 116 37 55-2 108-17 106-41C236 18 180 9 132 7"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
    </svg>
  );
}

/** Small curved hand-drawn arrow — points right toward what it annotates,
    with a single bold chevron head so the tip reads clearly. */
export function DoodleArrow({
  w = 62,
  color = "var(--terracotta)",
  style = {},
}: {
  w?: number;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <svg aria-hidden width={w} height={w * 0.6} viewBox="0 0 64 38" fill="none" style={style}>
      <path d="M5 30C17 13 35 7 55 12" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <path
        d="M46 4 58 12 47 20"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Coche dessinée à la main (items résolus du backlog). */
export function DrawnCheck({
  color = "var(--success)",
  width = 22,
  height = 18,
}: {
  color?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg aria-hidden width={width} height={height} viewBox="0 0 50 40" fill="none" style={{ flex: "none" }}>
      <path
        d="M5 20c6 5 11 10 14 15C24 20 33 9 45 3"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
