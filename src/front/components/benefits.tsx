import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircleMore, Quote } from "lucide-react";
import Image from "next/image";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="min-h-[100svh] py-24 mt-36 bg-foreground text-background"
    >
      <div className="container mx-auto flex flex-col">
        <div>
          <div className="border-t border-primary/70 w-24 text-center mx-auto pb-5" />
          <h2 className="text-5xl text-center leading-tight">
            Vos processus métiers
            <br /> <span className="bg-primary/20 px-3">enfin</span> digitalisés
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
            <Image
              unoptimized
              width="200"
              height="200"
              src="/benefits/company.gif"
              alt="Bag of euros"
              className="mx-auto"
            />
            <p className="text-xl mb-1">Excellence opérationnelle</p>
            <p>
              Permettez à vos équipes de se concentrer sur l'essentiel,
              automatisez le reste
            </p>
          </div>

          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <Image
              unoptimized
              width="200"
              height="200"
              src="/benefits/brain.gif"
              alt="Bag of euros"
              className="mx-auto"
            />
            <p className="text-xl mb-1">L'IA à votre service</p>
            <p>
              Optimisez vos processus métiers grâce à l'IA et entrainez votre
              système à prendre des décisions
            </p>
          </div>

          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <Image
              unoptimized
              width="200"
              height="200"
              src="/benefits/money.gif"
              alt="Bag of euros"
              className="mx-auto"
            />
            <p className="text-xl mb-1">Maîtrise des coûts</p>
            <p>
              La garantie d'une solution moins coûteuse à mettre en place et à
              maintenir
            </p>
          </div>
          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <Image
              unoptimized
              width="200"
              height="200"
              src="/benefits/check.gif"
              alt="Bag of euros"
              className="mx-auto"
            />
            <p className="text-xl mb-1">Votre métier, notre priorité</p>
            <p>
              Profitez d'un système entièrement taillé sur mesure pour votre
              entreprise
            </p>
          </div>

          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <Image
              unoptimized
              width="200"
              height="200"
              src="/benefits/bar.gif"
              alt="Bag of euros"
              className="mx-auto"
            />
            <p className="text-xl mb-1">Scalabilité et flexibilité</p>
            <p>
              Une offre et un système qui accompagnent la croissance de votre
              entreprise
            </p>
          </div>

          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <Image
              unoptimized
              width="200"
              height="200"
              src="/benefits/miror.gif"
              alt="Bag of euros"
              className="mx-auto"
            />
            <p className="text-xl mb-1">Transparence</p>
            <p>
              Une offre claire et transparente, un suivi de projet sans surprise
            </p>
          </div>
        </div>

        <blockquote className="px-2 md:w-1/2 mx-auto">
          <div className="border-t border-background/40 w-24 text-center mx-auto pb-5 mt-24" />
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
        <div className="flex flex-wrap md:gap-y-24 mx-auto w-full px-8 py-8 md:px-14 md:py-20 max-w-6xl rounded-2xl bg-background text-foreground my-12">
          <div className="basis-full text-lg md:text-2xl md:basis-1/2 font-semibold">
            1 - Revue de vos processus métiers
            <div className="pb-2 border-b-2 w-[90%]" />
          </div>
          <div className="px-2 py-5 mb-16 md:basis-1/2 md:py-0 md:px-0 md:mb-0">
            <p className="leading-7 [&:not(:first-child)]:mt-3">
              Nous réalisons avec vos équipes une revue complète de l'ensemble
              des processus opérationnels, qu'ils soient manuels ou automatisés,
              que nous décrivons et schématisons.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-3">
              Nous identifions les points de blocage, les tâches manuelles
              répétitives, les processus inefficaces ou inutiles, et les
              opportunités d'amélioration.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-3">
              Nous vous proposons enfin une architecture scalable et économique
              en privilégiant les technologies souples capables de s'adapter à
              votre métier unique.
            </p>
          </div>

          <div className="basis-full text-lg md:text-2xl md:basis-1/2 font-semibold">
            <div className="pb-2 border-b-2 w-[90%]">
              2 - Développement de votre solution
            </div>
          </div>
          <div className="px-2 py-5 mb-16 md:basis-1/2 md:py-0 md:px-0 md:mb-0">
            <p className="leading-7 [&:not(:first-child)]:mt-3">
              Nous développons pour vous une solution sur mesure en mettant la
              qualité et la performance au cœur de notre exécution.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-3">
              Nous vous livrons une solution en production seulement quelques
              jours après le début des développements.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-3">
              Nous itérons régulièrement avec vos équipes afin de tester et
              d'affiner rapidement les fonctionnalités développées.
            </p>
          </div>

          <div className="basis-full text-lg md:text-2xl md:basis-1/2 font-semibold">
            <div className="pb-2 border-b-2 w-[90%]">
              3 - Accompagnement de vos équipes
            </div>
          </div>
          <div className="px-2 py-5 md:basis-1/2 md:py-0 md:px-0 md:mb-0">
            <p className="leading-7 [&:not(:first-child)]:mt-3">
              Nous formons vos équipes à l'utilisation de la solution développée
              et les accompagnons dans la prise en main de celle-ci.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-3">
              Nous restons à vos côtés pour vous accompagner dans la maitenance
              et l'évolution de votre solution.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-3">
              Nous documentons l'ensemble des processus et des fonctionnalités
              afin de vous permettre de garder la main sur votre système.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="#contact">
            <Button className="text-md" size="lg" variant="default">
              <span>Discutons de votre projet</span>
              <MessageCircleMore className="ml-2 size-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
