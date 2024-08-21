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
    subtitle: "Automatisation de votre gestion",
    description: [
      "L'ERP est le coeur de votre système d'information avec des responsabilités clés sur de nombreux métiers - facturation, comptabilité, gestion des stocks, gestion des ressources humaines, etc.",
      "Selon la taille de votre entreprise de nombreux outils sont disponibles, avec la promesse de s'adapter à votre métier unique. Cependant, la mise en place d'un tel outil puis sa customisation peuvent être très coûteux.",
      "Dans notre approche nous recommandons l'utilisation d'un logiciel ERP pour des fonctionnalités de base tels que la facturation ou la comptabilité. Pour des fonctionnalités plus spécifiques, nous recommandons le développement d'un back-office métier spécifique.",
      "Ces applications métiers sur mesure s'intègrent parfaitement à votre ERP et vous permettent de profiter d'une expérience totalement personnalisée et adaptée à votre entreprise.",
      "Grâce à une approche combinée d'outils low-code et de développement nous vous garantissons une solution rapide à mettre en place, peu coûteuse et simple à faire évoluer.",
    ],
    icon: <UserRoundCog className="size-8 mb-2" />,
  },
  crm: {
    title: "CRM",
    subtitle: "Optimisation de la relation client",
    description: [
      "Un bon outil CRM vous garantit une meilleure gestion de vos clients et prospects. Il vous permet de mieux les connaître, de les segmenter et de les cibler plus efficacement.",
      "C'est un élément central de votre stratégie commerciale et marketing. Sa responsabilité est de collecter et de centraliser l'ensemble des informations de vos clients et prospects.",
      "Notre approche consiste à positionner votre CRM au centre de votre système. Un bon paramétrage est essentiel afin d'accompagner votre croissance.",
      "A l'aide d'outils low-code et de développement spécifique nous travaillons à l'optimisation et l'automatisation de votre CRM afin qu'il réponde parfaitement à vos besoins et ce à moindre coûts.",
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
      <div className="mx-auto w-full px-8 py-8 md:px-14 max-w-3xl rounded-2xl my-12 ring-1 ring-accent">
        <Tabs
          defaultValue="erp"
          className="flex flex-col w-full justify-center"
        >
          <TabsList className="flex flex-wrap mx-auto mb-8 h-full sm:h-10">
            {Object.entries(content).map((service) => (
              <TabsTrigger
                className="basis-full sm:basis-auto"
                key={service[0]}
                value={service[0]}
              >
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
