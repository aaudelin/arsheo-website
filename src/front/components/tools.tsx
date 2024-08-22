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
  },
  webflow: {
    name: "Webflow",
    image: WebflowImage,
    tags: ["low-code", "site web", "cms"],
  },
  supabase: {
    name: "Supabase",
    image: SupabaseImage,
    tags: ["low-code", "backend"],
  },
  springboot: {
    name: "Spring Boot",
    image: SpringBootImage,
    tags: ["framework", "backend", "api"],
  },
  keycloak: {
    name: "Keycloak",
    image: KeycloakImage,
    tags: ["authentification", "backend"],
  },
  strapi: {
    name: "Strapi",
    image: StrapiImage,
    tags: ["cms", "backend", "headless"],
  },
  nextjs: {
    name: "Next.js",
    image: NextJSImage,
    tags: ["framework", "frontend"],
  },
  contentful: {
    name: "Contentful",
    image: ContentfulImage,
    tags: ["cms", "headless", "e-commerce"],
  },
  chatGPT: {
    name: "ChatGPT",
    image: ChatGPTImage,
    tags: ["ia", "nlp"],
  },
  flutterflow: {
    name: "FlutterFlow",
    image: FlutterFlowImage,
    tags: ["low-code", "mobile", "frontend"],
  },
  xano: {
    name: "Xano",
    image: XanoImage,
    tags: ["low-code", "backend", "api"],
  },
  airtable: {
    name: "Airtable",
    image: AirtableImage,
    tags: ["data"],
  },
  make: {
    name: "Make",
    image: MakeImage,
    tags: ["low-code", "backend", "workflow"],
  },
  sage: {
    name: "Sage",
    image: SageImage,
    tags: ["erp", "comptabilité"],
  },
  graphql: {
    name: "GraphQL",
    image: GraphQLImage,
    tags: ["api"],
  },
  n8n: {
    name: "N8N",
    image: N8NImage,
    tags: ["low-code", "backend", "workflow"],
  },
  tableau: {
    name: "Tableau",
    image: TableauImage,
    tags: ["bi", "data"],
  },
  notion: {
    name: "Notion",
    image: NotionImage,
    tags: ["documentation", "cms"],
  },
  hubspot: {
    name: "HubSpot",
    image: HubSpotImage,
    tags: ["crm"],
  },
  shopify: {
    name: "Shopify",
    image: ShopifyImage,
    tags: ["e-commerce"],
  },
  netsuite: {
    name: "NetSuite",
    image: NetSuiteImage,
    tags: ["erp", "comptabilité"],
  },
};

export default function Tools() {
  return (
    <section id="tools" className="container mx-auto py-28">
      <div className="container mx-auto flex flex-col">
        <div>
          <div className="border-t border-primary/70 w-24 text-center mx-auto pb-5" />
          <h2 className="text-3xl md:text-5xl text-center leading-tight">
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
                  <Card className="min-h-full text-background bg-foreground rounded ring-2 ring-accent py-12 ">
                    <CardHeader className="relative mb-12">
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

                      <span className="text-3xl font-semibold">
                        {brand.name}
                      </span>
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
