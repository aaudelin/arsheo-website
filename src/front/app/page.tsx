import SiteHeader from "@/app/site-header";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <section
        id="automation"
        className="container mx-auto min-h-[90svh] pt-24"
      >
        <h1 className="text-5xl md:text-8xl text-center font-bold flex flex-col leading-normal">
          <span>Automatisez</span>
          <span>
            vos<span className="ml-3 md:ml-6 text-primary">opérations</span>
          </span>
        </h1>
      </section>

      <section id="services" className="container mx-auto min-h-[100svh] pt-24">
        <h1 className="text-4xl text-center">Welcome to Arsheo</h1>
      </section>
    </div>
  );
}
