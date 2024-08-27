"use client";

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
import {
  CalendarClock,
  Check,
  ChevronRight,
  Ellipsis,
  Hourglass,
  X,
  Zap,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Pricing() {
  const [activeOffer, setActiveOffer] = useState("standard");

  const handleOfferChange = (value: string) => {
    setActiveOffer(value);
  };

  return (
    <section id="pricing" className="container mx-auto py-44">
      <div className="flex flex-col">
        <div>
          <div className="border-t border-primary/70 w-24 text-center mx-auto pb-5" />
          <h2 className="text-3xl md:text-5xl text-center leading-tight tracking-tight font-semibold">
            <span className="text-primary px-2 mx-1">Enfin</span>une offre
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
              <div className="flex flex-row justify-between items-center">
                <CalendarClock className="size-10 my-4" />
                <Tabs defaultValue="standard">
                  <TabsList className="bg-muted-foreground text-muted">
                    <TabsTrigger
                      onClick={() => handleOfferChange("standard")}
                      className="rounded-l data-[state=active]:bg-foreground data-[state=active]:text-background font-semibold"
                      value="standard"
                    >
                      Standard
                    </TabsTrigger>
                    <TabsTrigger
                      onClick={() => handleOfferChange("premium")}
                      className="rounded-r data-[state=active]:bg-foreground data-[state=active]:text-primary font-semibold"
                      value="premium"
                    >
                      <Zap className="mr-1 size-4" /> Premium
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <CardTitle>Abonnement mensuel</CardTitle>
              <p className="text-muted-foreground">
                <span className="text-primary text-2xl font-semibold">
                  {activeOffer === "standard" ? 999 : 1999}€
                </span>{" "}
                /mois
              </p>
              <CardDescription>
                Pause ou annulation à tout moment
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <Separator className="bg-border/20" />

              <p className="text-xl font-semibold leading-tight tracking-normal my-8">
                Idéal pour un accompagnement long terme
              </p>
              <p className="mb-3">Détails de l&apos;offre :</p>
              <ul className="grid md:grid-cols-2 mb-6">
                {activeOffer === "standard" ? (
                  <li className="flex items-center mb-0.5 text-muted-foreground">
                    <X className="size-5 mr-2" /> Tâches simultanées
                  </li>
                ) : (
                  <li className="flex items-center mb-0.5">
                    <Check className="size-5 mr-2" /> Tâches simultanées
                  </li>
                )}
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Suivi du temps passé
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Visibilité sur la roadmap
                </li>
                <li className="flex items-center mb-0.5">
                  <Check className="size-5 mr-2" /> Aucune limite d&apos;outils
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
              <p className="text-muted-foreground">
                <span className="text-2xl font-semibold">Custom</span> /heure
              </p>
              <CardDescription>
                Pack en fonction de votre projet
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <Separator className="bg-accent-foreground/20" />

              <p className="text-xl font-semibold leading-tight tracking-normal my-8">
                Idéal vos projets les plus urgents
              </p>

              <p className="mb-3">Pour tous vos projets :</p>
              <ul className="grid md:grid-cols-2 mb-6">
                <li className="flex items-center mb-0.5">
                  <ChevronRight className="size-5 mr-2" /> Migration CRM
                </li>
                <li className="flex items-center mb-0.5">
                  <ChevronRight className="size-5 mr-2" /> Automatisation ERP
                </li>
                <li className="flex items-center mb-0.5">
                  <ChevronRight className="size-5 mr-2" /> Dashboard BI
                </li>
                <li className="flex items-center mb-0.5">
                  <ChevronRight className="size-5 mr-2" /> Formation
                </li>
                <li className="flex items-center mb-0.5">
                  <ChevronRight className="size-5 mr-2" /> Audit et Conseils
                </li>
                <li className="flex items-center mb-0.5">
                  <ChevronRight className="size-5 mr-2" /> Refonte Back-Office
                </li>
                <li className="flex items-center mt-2">
                  <Ellipsis className="size-5 mr-2" /> Et bien plus encore
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
