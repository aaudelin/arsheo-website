import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BanknoteIcon,
  ChartColumnIncreasing,
  FileStack,
  MessagesSquare,
  UserRoundCog,
} from "lucide-react";

const content = {
  erp: {
    title: "ERP",
    subtitle: "Automatisation de vos processus métiers",
    description: [
      "Un bon outil ERP vous garantit une meilleure gestion de vos processus métiers.",
      "Il vous permet de mieux les organiser, de les automatiser et de les optimiser.",
      "Il vous permet également de suivre vos indicateurs de performance pour mieux les piloter.",
      "Il vous permet enfin de mesurer la performance de vos processus et de les améliorer en continu.",
    ],
    icon: <UserRoundCog className="size-8 mb-2" />,
  },
  crm: {
    title: "CRM",
    subtitle: "Optimisation de la relation client",
    description: [
      "Un bon outil CRM vous garantit une meilleure gestion de vos clients et prospects.",
      "Il vous permet de mieux les connaître, de les segmenter et de les cibler plus efficacement.",
      "Il vous permet également de suivre vos actions commerciales et marketing pour mieux les piloter.",
      "Il vous permet enfin de mesurer la performance de vos actions et de les améliorer en continu.",
    ],
    icon: <BanknoteIcon className="size-8 mb-2" />,
  },
  content: {
    title: "Contenu",
    subtitle: "Gestion de vos contenus",
    description: [
      "Un bon outil CRM vous garantit une meilleure gestion de vos clients et prospects.",
      "Il vous permet de mieux les connaître, de les segmenter et de les cibler plus efficacement.",
      "Il vous permet également de suivre vos actions commerciales et marketing pour mieux les piloter.",
      "Il vous permet enfin de mesurer la performance de vos actions et de les améliorer en continu.",
    ],
    icon: <FileStack className="size-8 mb-2" />,
  },
  support: {
    title: "Support",
    subtitle: "Unification des canaux de communication",
    description: [
      "Un bon outil CRM vous garantit une meilleure gestion de vos clients et prospects.",
      "Il vous permet de mieux les connaître, de les segmenter et de les cibler plus efficacement.",
      "Il vous permet également de suivre vos actions commerciales et marketing pour mieux les piloter.",
      "Il vous permet enfin de mesurer la performance de vos actions et de les améliorer en continu.",
    ],
    icon: <MessagesSquare className="size-8 mb-2" />,
  },
  data: {
    title: "Data",
    subtitle: "Pilotage de votre activité",
    description: [
      "Un bon outil CRM vous garantit une meilleure gestion de vos clients et prospects.",
      "Il vous permet de mieux les connaître, de les segmenter et de les cibler plus efficacement.",
      "Il vous permet également de suivre vos actions commerciales et marketing pour mieux les piloter.",
      "Il vous permet enfin de mesurer la performance de vos actions et de les améliorer en continu.",
    ],
    icon: <ChartColumnIncreasing className="size-8 mb-2" />,
  },
};

export default function Services() {
  return (
    <section id="services" className="container mx-auto min-h-[100svh] pt-24">
      <div className="container mx-auto flex flex-col">
        <div>
          <div className="border-t border-primary/70 w-24 text-center mx-auto pb-5" />
          <h2 className="text-5xl text-center leading-tight">
            Une offre de services <br />{" "}
            <span className="bg-primary/20 px-3">vraiment</span> adaptée
          </h2>
        </div>
        <div className="text-center my-8">
          <ul>
            <li>Quelque soit votre métier</li>
            <li>Quelque soit votre projet</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto w-full px-8 py-8 md:px-14 max-w-4xl rounded-2xl my-12 ring-1 ring-accent">
        <Tabs
          defaultValue="erp"
          className="flex flex-col w-full justify-center"
        >
          <TabsList className="mx-auto mb-8">
            {Object.entries(content).map((service) => (
              <TabsTrigger key={service[0]} value={service[0]}>
                {service[1].title}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(content).map((service) => (
            <TabsContent key={service[0]} value={service[0]}>
              <p className="text-2xl font-semibold mb-6">
                {service[1].icon}
                {service[1].subtitle}
              </p>
              {service[1].description.map((line) => (
                <p key={line} className="leading-7 [&:not(:first-child)]:mt-3">
                  {line}
                </p>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
      {/*Indiquer la gestion crm, app métier - ERP, content, support, data*/}
    </section>
  );
}
