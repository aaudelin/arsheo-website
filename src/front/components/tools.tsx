import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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

        <div className="mx-auto w-full px-8 py-8 md:px-14 mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="rounded ring-2 ring-accent text-background bg-foreground flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
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
