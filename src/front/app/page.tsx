import SiteHeader from "@/app/site-header";
import Automation from "@/app/automation";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <Automation />

      <section id="services" className="container mx-auto min-h-[100svh] pt-24">
        <h1 className="text-4xl text-center">Welcome to Arsheo</h1>
      </section>
    </div>
  );
}
