import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircleMore, Quote } from "lucide-react";
import { Blockquote } from "@storybook/core/components";

export function Automation() {
  return (
    <section
      id="automation"
      className="min-h-[100svh] py-24 mt-36 bg-foreground text-background"
    >
      <div className="container mx-auto flex flex-col justify-between min-h-svh">
        <div>
          <div className="border-t border-primary/70 w-24 text-center mx-auto pb-5" />
          <h2 className="text-5xl text-center leading-tight">
            Vos processus métiers
            <br /> enfin digitalisés
          </h2>

          <div className="text-center my-8">
            <ul>
              <li>Des performances décuplées</li>
              <li>Des coûts maîtrisés</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap my-12 gap-y-12 md:gap-y-52 justify-around md:justify-between text-center">
          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <p className="text-xl mb-1">Excellence opérationnelle</p>
            <p>
              Permettez à vos équipes de se concentrer sur l'essentiel,
              automatisez le reste
            </p>
          </div>

          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <p className="text-xl mb-1">L'IA à votre service</p>
            <p>
              Optimisez vos processus métiers grâce à l'IA et entrainez votre
              système à prendre des décisions
            </p>
          </div>

          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <p className="text-xl mb-1">Maîtrise des coûts</p>
            <p>
              La garantie d'une solution moins coûteuse à mettre en place et à
              maintenir
            </p>
          </div>
          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <p className="text-xl mb-1">Votre métier, notre priorité</p>
            <p>
              Profitez d'un système entièrement taillé sur mesure pour votre
              entreprise
            </p>
          </div>

          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <p className="text-xl mb-1">Scalabilité et flexibilité</p>
            <p>
              Une offre et un système qui accompagnent la croissance de votre
              entreprise
            </p>
          </div>

          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <p className="text-xl mb-1">Transparence</p>
            <p>
              Une offre claire et transparente, un suivi de projet sans surprise
            </p>
          </div>
        </div>
        {/*Ajouter la quote de bill gates*/}
        <blockquote className="px-2 md:w-1/2 mx-auto">
          <div className="border-t border-primary/70 w-24 text-center mx-auto pb-5 mt-24" />
          <Quote className="size-8 text-primary" />
          <p className="text-xl italic">
            La première règle avec toute technologie utilisée dans les affaires,
            c’est que l’automatisation appliquée à un process efficace va
            augmenter l’efficacité. La seconde règle est que l’automatisation
            appliquée à un process inefficace va augmenter l’inefficacité
          </p>
          <p className="text-lg text-right">– Bill Gates</p>
        </blockquote>

        {/*Faire un autre bloc sur la méthode en listant 3 points dans une section arrondie*/}
        <div className="mx-auto w-full max-w-5xl px-10 py-12 rounded-2xl bg-background text-foreground my-12">
          <div>element 1</div>
          <div>element 2</div>
          <div>element 3</div>
        </div>

        <div className="flex justify-center">
          <Link href="#contact">
            <Button className="text-md" size="lg" variant="default">
              <span>Discutons de votre projet</span>
              <MessageCircleMore className="ml-6 size-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
