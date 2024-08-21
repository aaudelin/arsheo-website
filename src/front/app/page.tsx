import SiteHeader from "@/components/site-header";
import CatchPage from "@/components/catch-page";
import Benefits from "@/components/benefits";
import Services from "@/components/services";
import Methodology from "@/components/methodology";
import Tools from "@/components/tools";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <CatchPage />
      <Benefits />
      <Methodology />
      <Services />
      <Separator />
      <Tools />

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
