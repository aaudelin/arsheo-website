import type { ReactNode } from "react";
import { PageBackdrop } from "@/components/sections/_shared";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/* Chrome partagé de tout /blog : même fond crème à halos, même nav, même footer
   que la landing. L'index et chaque article s'insèrent dans <main>. */
export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <PageBackdrop />
      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
