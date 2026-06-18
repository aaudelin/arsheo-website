import type { MDXComponents } from "mdx/types";
import { PostShell } from "@/components/blog/PostShell";

/**
 * Composants MDX globaux — requis par @next/mdx (App Router).
 * Tout article MDX (app/blog/<slug>/page.mdx) est enveloppé dans PostShell :
 * colonne de lecture centrée + styles « prose » du design system Arsheo.
 * La mise en forme fine des éléments (h2, p, a, blockquote…) vit dans
 * globals.css sous `.arsheo-prose`.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <PostShell>{children}</PostShell>,
    ...components,
  };
}
