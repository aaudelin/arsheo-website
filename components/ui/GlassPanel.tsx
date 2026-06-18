import type { CSSProperties, ReactNode } from "react";

/**
 * Arsheo — GlassPanel (verre dépoli, signature)
 * À n'utiliser QUE posé sur un fond coloré chaud (halos terracotta/miel).
 * ~66% d'opacité, blur + saturate, bordure claire et inset highlight.
 */
interface GlassPanelProps {
  children: ReactNode;
  padding?: string;
  style?: CSSProperties;
}

export function GlassPanel({ children, padding = "28px 30px", style = {} }: GlassPanelProps) {
  return (
    <div
      style={{
        background: "var(--glass-bg)",
        WebkitBackdropFilter: "blur(16px) saturate(135%)",
        backdropFilter: "blur(16px) saturate(135%)",
        border: "1px solid rgba(255,255,255,.7)",
        boxShadow: "var(--glass-shadow), var(--glass-inset)",
        borderRadius: "var(--r-panel)",
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
