import SiteHeader from "@/components/site-header";
import CatchPage from "@/components/catch-page";
import { Automation } from "@/components/automation";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <CatchPage />
      <Automation />

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
