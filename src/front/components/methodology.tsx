import { MessageCircleMore, Quote } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Methodology() {
  return (
    <>
      <section className="bg-foreground text-background py-12">
        <div className="container mx-auto flex flex-col">
          <blockquote className="px-2 md:w-2/3 lg:w-1/2 mx-auto">
            <div className="border-t border-background/40 w-24 text-center mx-auto" />
            <Quote className="size-8 text-primary mt-10" />
            <p className="text-xl italic mb-10">
              La première règle avec toute technologie utilisée dans les
              affaires, c’est que l’automatisation appliquée à un process
              efficace va augmenter l’efficacité. La seconde règle est que
              l’automatisation appliquée à un process inefficace va augmenter
              l’inefficacité
            </p>
            <p className="text-lg text-right">– Bill Gates</p>
            <div className="border-t border-background/40 w-24 text-center mx-auto" />
          </blockquote>
        </div>
      </section>
      <section id="methodology" className="py-28 bg-foreground text-background">
        <div className="container mx-auto flex flex-col">
          <div className="text-3xl md:text-5xl text-center leading-tight">
            Votre solution <br />
            en
            <span className="bg-primary/20 px-2 mx-1">3 étapes</span>
          </div>
          <div className="flex flex-wrap md:gap-y-24 mx-auto w-full px-8 py-8 md:px-14 md:py-20 max-w-6xl rounded-2xl bg-background text-foreground my-8">
            <div className="basis-full text-lg md:text-2xl md:basis-1/2 font-semibold">
              1 - Revue de vos processus métiers
              <div className="pb-2 border-b-2 w-[90%]" />
            </div>
            <div className="px-2 py-5 mb-16 md:basis-1/2 md:py-0 md:px-0 md:mb-0">
              <p className="leading-7 [&:not(:first-child)]:mt-3">
                Nous réalisons avec vos équipes une revue complète de l'ensemble
                des processus opérationnels, qu'ils soient manuels ou
                automatisés, que nous décrivons et schématisons.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-3">
                Nous identifions les points de blocage, les tâches manuelles
                répétitives, les processus inefficaces ou inutiles, et les
                opportunités d'amélioration.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-3">
                Nous vous proposons enfin une architecture scalable et
                économique en privilégiant les technologies souples capables de
                s'adapter à votre métier unique.
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
                Nous formons vos équipes à l'utilisation de la solution
                développée et les accompagnons dans la prise en main de
                celle-ci.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-3">
                Nous restons à vos côtés pour vous accompagner dans la
                maitenance et l'évolution de votre solution.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-3">
                Nous documentons l'ensemble des processus et des fonctionnalités
                afin de vous permettre de garder la main sur votre système.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Link href="#contact">
              <Button className="text-md" size="lg" variant="default">
                <span>Discutons de votre projet</span>
                <MessageCircleMore className="ml-2 size-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
