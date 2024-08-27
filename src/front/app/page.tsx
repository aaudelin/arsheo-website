import SiteHeader from "@/components/site-header";
import CatchPage from "@/components/catch-page";
import Benefits from "@/components/benefits";
import Services from "@/components/services";
import Methodology from "@/components/methodology";
import Tools from "@/components/tools";
import { Quote } from "lucide-react";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <CatchPage />
      <Benefits />
      <section className="bg-foreground text-background py-12">
        <div className="container mx-auto flex flex-col">
          <blockquote className="px-2 md:w-2/3 lg:w-1/2 mx-auto">
            <div className="border-t border-background/40 w-24 text-center mx-auto" />
            <Quote className="size-8 text-primary mt-10" />
            <p className="text-xl italic mb-10">
              Toute organisation qui conçoit un système, au sens large, concevra
              une structure qui sera la copie de la structure de communication
              de l’organisation.
            </p>
            <p className="text-lg text-right">– Melvin Conway</p>
            <div className="border-t border-background/40 w-24 text-center mx-auto" />
          </blockquote>
        </div>
      </section>
      <Methodology />
      <Services />
      <section className="py-12">
        <div className="container mx-auto flex flex-col">
          <blockquote className="px-2 md:w-2/3 lg:w-1/2 mx-auto">
            <div className="border-t border-foreground/40 w-24 text-center mx-auto" />
            <Quote className="size-8 text-primary mt-10" />
            <p className="text-xl italic mb-10">
              La première règle avec toute technologie utilisée dans les
              affaires, c’est que l’automatisation appliquée à un process
              efficace va augmenter l’efficacité. La seconde règle est que
              l’automatisation appliquée à un process inefficace va augmenter
              l’inefficacité
            </p>
            <p className="text-lg text-right">– Bill Gates</p>
            <div className="border-t border-foreground/40 w-24 text-center mx-auto" />
          </blockquote>
        </div>
      </section>
      <Tools />
      <Pricing />
      <Contact />

      <footer className="container border-t-2 py-24 bg-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
          <div>
            <Link
              href="#"
              className="flex gap-2 text-lg font-semibold md:text-base"
            >
              <Image
                src="/icon-light.png"
                alt="Icon Arsheo"
                width="40"
                height="40"
              />
              <span className="text-3xl tracking-normal">Arsheo</span>
            </Link>
            <p className="mt-4">La solution pour scaler votre business</p>
          </div>
          <div>
            <p className="text-lg text-muted-foreground mb-2">Légal</p>
            <Link href="">
              <p>Mentions légales</p>
            </Link>
            <Link href="">
              <p>Politique de confidentialité</p>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
