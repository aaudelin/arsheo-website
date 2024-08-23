import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarClock, Check, Hourglass } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="container mx-auto py-44">
      <div className="flex flex-col">
        <div>
          <div className="border-t border-primary/70 w-24 text-center mx-auto pb-5" />
          <h2 className="text-3xl md:text-5xl text-center leading-tight tracking-tight font-semibold">
            <span className="bg-primary/20 px-2 mx-1">Enfin</span>une offre{" "}
            <br />
            qui vous correspond
          </h2>
        </div>
        <div className="text-center my-8">
          <ul>
            <li>Maîtrise de votre budget</li>
            <li>Engagement de qualité</li>
          </ul>
        </div>
        <div className="grid justify-items-center grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-12 mt-24">
          <Card className="flex flex-col max-w-lg w-full text-background bg-foreground transition-all hover:scale-[1.01]">
            <CardHeader>
              <CalendarClock className="size-10 my-4" />
              <CardTitle>Abonnement mensuel</CardTitle>
              <CardDescription>
                Pause ou annulation à tout moment. <br /> A partir de 999€
                HT/mois.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <Separator className="bg-border/20" />

              <p className="text-xl font-semibold leading-tight tracking-normal my-8">
                Idéal pour un accompagnement long terme
              </p>
              <p className="mb-3">Ce qui est inclus :</p>
              <ul className="grid md:grid-cols-2 mb-6">
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Une seule tâche à la fois
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Suivi du temps passé
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Visibilité sur la roadmap
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Aucune limite d'outils
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Ateliers de conception
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Conseils et architecture
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Documentation complète
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Formation des équipes
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href="#contact">
                <Button
                  className="bg-accent-foreground"
                  variant="outline"
                  size="default"
                >
                  En savoir plus
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col max-w-lg w-full transition-all hover:scale-[1.01]">
            <CardHeader>
              <Hourglass className="size-10 my-4" />
              <CardTitle>Forfait horaire</CardTitle>
              <CardDescription>
                En fonction de votre projet.
                <br />
                Pour tous les budgets.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <Separator className="bg-accent-foreground/20" />

              <p className="text-xl font-semibold leading-tight tracking-normal my-8">
                Idéal vos projets les plus urgents
              </p>

              <p className="mb-3">Ce qui est inclus :</p>
              <ul className="grid md:grid-cols-2 mb-6">
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Plusieurs tâches à la fois
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Suivi du temps passé
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Visibilité sur la roadmap
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Aucune limite d'outils
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Ateliers de conception
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Conseils et architecture
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Documentation complète
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Formation des équipes
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href="#contact">
                <Button variant="outline" size="default">
                  En savoir plus
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="grid justify-items-center grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-12 mt-24">
          <Card className="flex flex-col max-w-lg w-full text-background bg-foreground transition-all hover:scale-[1.01]">
            <CardHeader>
              <CalendarClock className="size-10 my-4" />
              <CardTitle>Abonnement mensuel</CardTitle>
              <CardDescription>
                Pause ou annulation à tout moment. <br /> A partir de 999€
                HT/mois.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <Separator className="bg-border/20" />

              <p className="text-xl font-semibold leading-tight tracking-normal my-8">
                Idéal pour un accompagnement long terme
              </p>
              <p className="mb-3">Ce qui est inclus :</p>
              <ul className="grid md:grid-cols-2 mb-6">
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Une seule tâche à la fois
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Suivi du temps passé
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Visibilité sur la roadmap
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Aucune limite d'outils
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Ateliers de conception
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Conseils et architecture
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Documentation complète
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Formation des équipes
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href="#contact">
                <Button
                  className="bg-accent-foreground"
                  variant="outline"
                  size="default"
                >
                  En savoir plus
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col  text-background bg-foreground max-w-lg w-full transition-all hover:scale-[1.01]">
            <CardHeader>
              <Hourglass className="size-10 my-4" />
              <CardTitle>Forfait horaire</CardTitle>
              <CardDescription>
                En fonction de votre projet.
                <br />
                Pour tous les budgets.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <Separator className="bg-border/20" />

              <p className="text-xl font-semibold leading-tight tracking-normal my-8">
                Idéal vos projets les plus urgents
              </p>

              <p className="mb-3">Ce qui est inclus :</p>
              <ul className="grid md:grid-cols-2 mb-6">
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Plusieurs tâches à la fois
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Suivi du temps passé
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Visibilité sur la roadmap
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Aucune limite d'outils
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Ateliers de conception
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Conseils et architecture
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Documentation complète
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Formation des équipes
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href="#contact">
                <Button
                  className="bg-accent-foreground"
                  variant="outline"
                  size="default"
                >
                  En savoir plus
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="grid justify-items-center grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-12 mt-24">
          <Card className="flex flex-col max-w-lg w-full transition-all hover:scale-[1.01] border-primary/50 shadow-primary">
            <CardHeader>
              <CalendarClock className="size-10 my-4" />
              <CardTitle>Abonnement mensuel</CardTitle>
              <CardDescription>
                Pause ou annulation à tout moment. <br /> A partir de 999€
                HT/mois.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <Separator className="bg-accent-foreground/20" />

              <p className="text-xl font-semibold leading-tight tracking-normal my-8">
                Idéal pour un accompagnement long terme
              </p>
              <p className="mb-3">Ce qui est inclus :</p>
              <ul className="grid md:grid-cols-2 mb-6">
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Une seule tâche à la fois
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Suivi du temps passé
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Visibilité sur la roadmap
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Aucune limite d'outils
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Ateliers de conception
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Conseils et architecture
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Documentation complète
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Formation des équipes
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href="#contact">
                <Button variant="outline" size="default">
                  En savoir plus
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col max-w-lg w-full transition-all hover:scale-[1.01] border-primary/50 shadow-primary">
            <CardHeader>
              <Hourglass className="size-10 my-4" />
              <CardTitle>Forfait horaire</CardTitle>
              <CardDescription>
                En fonction de votre projet.
                <br />
                Pour tous les budgets.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <Separator className="bg-accent-foreground/20" />

              <p className="text-xl font-semibold leading-tight tracking-normal my-8">
                Idéal vos projets les plus urgents
              </p>

              <p className="mb-3">Ce qui est inclus :</p>
              <ul className="grid md:grid-cols-2 mb-6">
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Plusieurs tâches à la fois
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Suivi du temps passé
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Visibilité sur la roadmap
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Aucune limite d'outils
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Ateliers de conception
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Conseils et architecture
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Documentation complète
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Formation des équipes
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href="#contact">
                <Button variant="outline" size="default">
                  En savoir plus
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="grid justify-items-center grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-12 mt-24">
          <Card className="flex flex-col max-w-lg w-full transition-all hover:scale-[1.01]">
            <CardHeader className="text-background bg-foreground rounded-t">
              <CalendarClock className="size-10 my-4" />
              <CardTitle>Abonnement mensuel</CardTitle>
              <CardDescription>
                Pause ou annulation à tout moment. <br /> A partir de 999€
                HT/mois.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <Separator className="bg-border/20" />

              <p className="text-xl font-semibold leading-tight tracking-normal my-8">
                Idéal pour un accompagnement long terme
              </p>
              <p className="mb-3">Ce qui est inclus :</p>
              <ul className="grid md:grid-cols-2 mb-6">
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Une seule tâche à la fois
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Suivi du temps passé
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Visibilité sur la roadmap
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Aucune limite d'outils
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Ateliers de conception
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Conseils et architecture
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Documentation complète
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Formation des équipes
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href="#contact">
                <Button variant="outline" size="default">
                  En savoir plus
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col max-w-lg w-full transition-all hover:scale-[1.01]">
            <CardHeader className="text-background bg-foreground rounded-t">
              <Hourglass className="size-10 my-4" />
              <CardTitle>Forfait horaire</CardTitle>
              <CardDescription>
                En fonction de votre projet.
                <br />
                Pour tous les budgets.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <Separator className="bg-accent-foreground/20" />

              <p className="text-xl font-semibold leading-tight tracking-normal my-8">
                Idéal vos projets les plus urgents
              </p>

              <p className="mb-3">Ce qui est inclus :</p>
              <ul className="grid md:grid-cols-2 mb-6">
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Plusieurs tâches à la fois
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Suivi du temps passé
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Visibilité sur la roadmap
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Aucune limite d'outils
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Ateliers de conception
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Conseils et architecture
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Documentation complète
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Formation des équipes
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href="#contact">
                <Button variant="outline" size="default">
                  En savoir plus
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
