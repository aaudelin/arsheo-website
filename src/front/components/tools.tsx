import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

import RetoolImage from "@/public/tools/retool.svg";
import WebflowImage from "@/public/tools/webflow.svg";
import SupabaseImage from "@/public/tools/supabase.svg";
import SpringBootImage from "@/public/tools/springboot.svg";
import KeycloakImage from "@/public/tools/keycloak.svg";
import StrapiImage from "@/public/tools/strapi.svg";
import NextJSImage from "@/public/tools/nextjs.svg";
import ContentfulImage from "@/public/tools/contentful.svg";
import ChatGPTImage from "@/public/tools/chatgpt.svg";
import FlutterFlowImage from "@/public/tools/flutterflow.svg";
import XanoImage from "@/public/tools/xano.svg";
import AirtableImage from "@/public/tools/airtable.svg";
import MakeImage from "@/public/tools/make.svg";
import SageImage from "@/public/tools/sage.svg";
import GraphQLImage from "@/public/tools/graphql.svg";
import N8NImage from "@/public/tools/n8n.svg";
import TableauImage from "@/public/tools/tableau.svg";
import NotionImage from "@/public/tools/notion.svg";
import HubSpotImage from "@/public/tools/hubspot.svg";
import ShopifyImage from "@/public/tools/shopify.svg";
import NetSuiteImage from "@/public/tools/netsuite.svg";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const content = {
  retool: {
    name: "Retool",
    image: RetoolImage,
    tags: ["low-code", "back-office", "erp"],
    description:
      "Retool est un outil low-code qui vous permet de créer des back-offices métiers sur mesure en quelques clics.",
  },
  webflow: {
    name: "Webflow",
    image: WebflowImage,
    tags: ["low-code", "site web", "cms"],
    description:
      "Webflow est un outil low-code spécialisé dans la création de sites web.",
  },
  supabase: {
    name: "Supabase",
    image: SupabaseImage,
    tags: ["low-code", "backend"],
    description:
      "Supabase est un outil low-code de création de backend complet. C'est une alternative open-source à firebase.",
  },
  springboot: {
    name: "Spring Boot",
    image: SpringBootImage,
    tags: ["framework", "backend", "api"],
    description:
      "Spring Boot est un framework de développement spécialisé dans la création de backend spécifiques - API, Batch...",
  },
  keycloak: {
    name: "Keycloak",
    image: KeycloakImage,
    tags: ["authentification", "backend"],
    description:
      "Keycloak est un outil open-source de gestion de l'authentification et des autorisations.",
  },
  strapi: {
    name: "Strapi",
    image: StrapiImage,
    tags: ["cms", "backend", "headless"],
    description:
      "Strapi est un CMS open-source. Il offre différentes API permettant de diffuser le contenu sur plusieurs frontend.",
  },
  nextjs: {
    name: "Next.js",
    image: NextJSImage,
    tags: ["framework", "frontend"],
    description:
      "Next.js est un framework de développement basé sur React permettant de créer des applications WEB.",
  },
  chatGPT: {
    name: "ChatGPT",
    image: ChatGPTImage,
    tags: ["ia", "nlp"],
    description:
      "ChatGPT est un outil d'IA s'appuyant sur des LLM et permettant notamment la génération de contenu.",
  },
  contentful: {
    name: "Contentful",
    image: ContentfulImage,
    tags: ["cms", "headless", "e-commerce"],
    description:
      "Contenful est un CMS puissant. Il offre différentes API permettant de diffuser le contenu sur plusieurs frontend.",
  },
  flutterflow: {
    name: "FlutterFlow",
    image: FlutterFlowImage,
    tags: ["low-code", "mobile", "frontend"],
    description:
      "FlutterFlow est un outil low-code spécialisé dans la création d'applications mobiles.",
  },
  xano: {
    name: "Xano",
    image: XanoImage,
    tags: ["low-code", "backend", "api"],
    description:
      "Xano est un outil low-code de création de backend complet. Il est aussi utile dans un contexte d'agrégation de données.",
  },
  airtable: {
    name: "Airtable",
    image: AirtableImage,
    tags: ["data", "backend"],
    description:
      "Airtable est le couteau suisse de la gestion des processus métiers en permettant la création d'applications et de base de données.",
  },
  make: {
    name: "Make",
    image: MakeImage,
    tags: ["low-code", "backend", "workflow"],
    description:
      "Make est un outil low-code de création de workflow permettant de connecter différentes applications.",
  },
  sage: {
    name: "Sage",
    image: SageImage,
    tags: ["erp", "comptabilité"],
    description: "Sage est un ERP offrant différentes gammes de produits.",
  },
  graphql: {
    name: "GraphQL",
    image: GraphQLImage,
    tags: ["api"],
    description:
      "GraphQL est un langage d'API de requête et de manipulation de données. Il est notamment utiles pour exposer différentes API ou sources de données",
  },
  n8n: {
    name: "N8N",
    image: N8NImage,
    tags: ["low-code", "backend", "workflow"],
    description:
      "n8n est un outil low-code open-source de création de workflow permettant de connecter différentes applications.",
  },
  tableau: {
    name: "Tableau",
    image: TableauImage,
    tags: ["bi", "data"],
    description:
      "Tableau est un outil de BI permettant de visualiser et d'analyser des données.",
  },
  notion: {
    name: "Notion",
    image: NotionImage,
    tags: ["documentation", "cms"],
    description:
      "Notion est un outil de documentation et de gestion de projet. Il permet de centraliser l'ensemble des informations de votre entreprise.",
  },
  hubspot: {
    name: "HubSpot",
    image: HubSpotImage,
    tags: ["crm"],
    description:
      "HubSpot est un CRM complet. Il facilite la gestion de l'ensemble de vos interactions avec vos clients et prospects.",
  },
  shopify: {
    name: "Shopify",
    image: ShopifyImage,
    tags: ["e-commerce"],
    description:
      "Shopify est une solution e-commerce complète offrant la possibilité de créer rapidement une boutique en ligne.",
  },
  netsuite: {
    name: "NetSuite",
    image: NetSuiteImage,
    tags: ["erp", "comptabilité"],
    description: "NetSuite est un ERP complet offrant de nombreux modules.",
  },
};

export default function Tools() {
  return (
    <section id="tools" className="container mx-auto py-44">
      <div className="container mx-auto flex flex-col">
        <div>
          <h2 className="text-3xl md:text-5xl text-center leading-tight tracking-tight font-semibold">
            Des outils taillés
            <br />
            pour
            <span className="bg-primary/20 px-2 mx-1">votre</span>
            business
          </h2>
        </div>
        <div className="text-center my-8">
          <ul>
            <li>Combiner la rapidité du low-code</li>
            <li>A la performance du code spécifique</li>
          </ul>
        </div>

        <div className="mx-auto w-full mt-12">
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="min-h-max -ml-4">
              {Object.entries(content).map(([key, brand]) => (
                <CarouselItem
                  key={key}
                  className="pl-4 md:basis-1/2 xl:basis-1/3"
                >
                  <Card className="min-h-full text-background bg-foreground rounded border-2 border-accent hover:border-primary">
                    <CardHeader className="relative my-12">
                      <Image
                        className="px-6"
                        src={brand.image}
                        alt={`${brand.name} logo`}
                        fill={true}
                      />
                    </CardHeader>
                    <CardContent className="flex flex-col">
                      <Separator className="bg-border/20" />
                      <div className="inline-flex flex-wrap my-8 gap-2">
                        {brand.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-lg leading-7">{brand.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
