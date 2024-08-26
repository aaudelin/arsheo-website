import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BanknoteIcon,
  ChartColumnIncreasing,
  FileStack,
  MessagesSquare,
  UserRoundCog,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const content = {
  erp: {
    title: "ERP",
    subtitle: "Automatisation de votre gestion",
    description: [
      `
        L'ERP est le coeur de votre système d'information avec des
        responsabilités clés sur de nombreux métiers - facturation,
        comptabilité, gestion des stocks, gestion des ressources humaines, etc.
      `,
      `
        Selon la taille de votre entreprise de nombreux outils sont disponibles,
        avec la promesse de s'adapter à votre métier unique. Cependant, la mise
        en place d'un tel outil puis sa customisation peuvent être très coûteux.
      `,
      `
        Dans notre approche nous recommandons l'utilisation d'un logiciel ERP
        pour des fonctionnalités de base tels que la facturation ou la
        comptabilité. Pour des fonctionnalités plus spécifiques, nous
        recommandons le développement d'un back-office métier spécifique.
      `,
      `
        Ces applications métiers sur mesure s'intègrent parfaitement à votre ERP
        et vous permettent de profiter d'une expérience totalement personnalisée
        et adaptée à votre entreprise.
      `,
      `
        Grâce à une approche combinée d'outils low-code et de développement nous
        vous garantissons une solution rapide à mettre en place, peu coûteuse et
        simple à faire évoluer.
      `,
    ],
    icon: <UserRoundCog className="size-8 mb-2" />,
  },
  crm: {
    title: "CRM",
    subtitle: "Optimisation de la relation client",
    description: [
      `
        Un bon outil CRM vous garantit une meilleure gestion de vos clients et
        prospects. Il vous permet de mieux les connaître, de les segmenter et de
        les cibler plus efficacement.
      `,
      `
        C'est un élément central de votre stratégie commerciale et marketing. Sa
        responsabilité est de collecter et de centraliser l'ensemble des
        informations de vos clients et prospects.
      `,
      `
        Notre approche consiste à positionner votre CRM au centre de votre
        système. Un bon paramétrage est essentiel afin d'accompagner votre
        croissance.
      `,
      `
        A l'aide d'outils low-code et de développement spécifique nous
        travaillons à l'optimisation et l'automatisation de votre CRM afin qu'il
        réponde parfaitement à vos besoins et ce à moindre coûts.
      `,
    ],
    icon: <BanknoteIcon className="size-8 mb-2" />,
  },
  content: {
    title: "CMS",
    subtitle: "Gestion de vos contenus",
    description: [
      `
        Un CMS efficace est essentielle pour votre entreprise et permet à vos
        équipes de gagner un temps précieux. Avec une production de contenu
        croissante, permise notamment grâce à l'IA, un outil de gestion de
        contenu CMS est indispensable.
      `,
      `
        Un outil CMS bien construit regroupe tous vos contenus dans un seul
        endroit, vous permettant de les organiser, de les retrouver facilement
        et de les diffuser sur tous vos canaux de communication.
      `,
      `
        Il doit aussi permettre à vos équipes de collaborer facilement sans
        répéter les modifications sur différents outils.
      `,
      `
        Nous privilégions l'approche headless qui vous permet de diffuser
        facilement vos contenus sur de nombreuses plateformes tout en
        personnalisant totalement l'expérience utilisateur. Nous complétons
        cette approche avec des automatisations garantissant la centralisation
        de vos contenus.
      `,
    ],
    icon: <FileStack className="size-8 mb-2" />,
  },
  support: {
    title: "Support",
    subtitle: "Unification de vos canaux de communication",
    description: [
      `
        Une mécanique de support efficace est la garantie de fidéliser vos clients. 
        Elle doit être rapide et personnalisée.`,
      `
        Les canaux de communication ne cessent de se diversifier et se multiplier. 
        Afin de répondre le mieux aux attentes de vos clients et de rester compétitif, 
        il est alors essentiel de proposer différents moyens de contact. 
      `,
      `
        Avec ces sources qui se multiplient il est parfois difficile 
        de mettre en place un process de support clair et efficace.
      `,
      `
        En utilisant des outils de support adaptés complétés par des automatisations spécifiques 
        nous vous garantissons une expérience client optimale et unique.
      `,
    ],
    icon: <MessagesSquare className="size-8 mb-2" />,
  },
  data: {
    title: "Data",
    subtitle: "Pilotage de votre activité",
    description: [
      `
        La data joue un rôle essentiel dans toutes vos prises de décisions. Sans une exploitation 
        efficace, il est parfois difficile de prendre les bonnes décisions pour votre business.
      `,
      `
        Un outil bien conçu s'occupe de centraliser et de structurer l'ensemble de vos données. 
        Il vous permet par exemple de suivre l'impact de vos actions commerciales et marketing sur vos KPI.
      `,
      `
        Tout d'abord il est important d'agréger des données de sources différentes, de les analyser puis 
        de les rapprocher et enfin de les visualiser dans des tableaux de bord clairs et précis.
      `,
      `
        Notre méthode est de tracer l'ensemble des évènements importants de votre système dans des bases de données 
        A l'aide d'outils low-code et de pipelines spécifiques nous alimentons vos outils de data visualisation et de BI.
      `,
    ],
    icon: <ChartColumnIncreasing className="size-8 mb-2" />,
  },
};

export default function Services() {
  return (
    <section id="services" className="container mx-auto py-44">
      <div className="container mx-auto flex flex-col">
        <div>
          <div className="border-t border-primary/70 w-24 text-center mx-auto pb-5" />
          <h2 className="text-3xl md:text-5xl text-center leading-tight tracking-tight font-semibold">
            Une offre de services <br />
            vraiment
            <span className="text-primary px-2 mx-1">adaptée</span>
          </h2>
        </div>
        <div className="text-center my-8">
          <ul>
            <li>Quelque soit votre métier</li>
            <li>Quelque soit votre projet</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto w-full px-8 py-8 md:px-14 max-w-3xl rounded-2xl mt-12 ring-1 ring-accent">
        <Tabs
          defaultValue="erp"
          className="flex flex-col w-full justify-center"
        >
          <TabsList className="flex flex-wrap mx-auto mb-8 h-full sm:h-10">
            {Object.entries(content).map((service) => (
              <TabsTrigger
                className="basis-full sm:basis-auto hover:text-accent-foreground"
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

        <Link href="#contact">
          <Button className="mt-8" variant="outline" size="default">
            En savoir plus
          </Button>
        </Link>
      </div>
    </section>
  );
}
