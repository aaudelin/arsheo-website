import { PageBackdrop } from "@/components/sections/_shared";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Depile } from "@/components/sections/Depile";
import { Outcome } from "@/components/sections/Outcome";
import { Audience } from "@/components/sections/Audience";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Comparables } from "@/components/sections/Comparables";
import { WhyUs } from "@/components/sections/WhyUs";
import { Sovereignty } from "@/components/sections/Sovereignty";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <PageBackdrop />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Problem />
        <Depile />
        <Outcome />
        <Audience />
        <HowItWorks />
        <Comparables />
        <WhyUs />
        <Sovereignty />
        <Pricing />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
