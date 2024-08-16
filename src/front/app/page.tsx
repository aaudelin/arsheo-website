import SiteHeader from "@/app/site-header";
import CatchPage from "@/app/catch-page";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <CatchPage />

      <section
        id="automation"
        className="container mx-auto min-h-[100svh] pt-24 mt-36 border-t border-primary"
      >
        <h1 className="text-4xl text-center">Automation</h1>
        {/*Indicateurs clés sur l'automatisation*/}
        {/*How it works et benefits de design joy*/}
      </section>

      <section id="services" className="container mx-auto min-h-[100svh] pt-24">
        <h1 className="text-4xl text-center">Services</h1>
        {/*Indiquer la gestion crm, ERP, content, app métier*/}
      </section>
      <section id="tools" className="container mx-auto min-h-[100svh] pt-24">
        <h1 className="text-4xl text-center">Tools</h1>
        {/*Positionner certains outils*/}
        {/*Parler low-code vs code*/}
        {/*Faire un rappel des couts*/}
      </section>

      <section id="pricing" className="container mx-auto min-h-[100svh] pt-24">
        <h1 className="text-4xl text-center">Offres</h1>
        {/*Par abonnement*/}
        {/*A la carte*/}
        {/*Rappeler quand c'est intéressant - pour quel type de projet*/}
      </section>

      <section id="contact" className="container mx-auto min-h-[100svh] pt-24">
        <h1 className="text-4xl text-center">Contact</h1>
        {/*Formulaire de contact*/}
        {/*Socials*/}
      </section>
    </div>
  );
}
