import { ArrowRight, ChartColumnIncreasing, Send } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { CalCard } from "@/components/cal-elements";

export default function Contact() {
  return (
    <section id="contact" className="pb-44">
      <div className="container mx-auto flex flex-col">
        <div className="mx-auto text-3xl md:text-5xl leading-tight tracking-tight font-semibold max-w-lg flex flex-col gap-3 mb-32">
          <div className="border-t border-primary/70 w-24 text-center mx-auto mb-14" />
          <ChartColumnIncreasing className="size-10" />
          <div>Scalez votre business.</div>
          <div>
            Choisissez<span className="text-primary px-2 mx-1">Arsheo.</span>
          </div>
          <div className="border-t border-primary/70 w-24 text-center mx-auto mt-14" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 mx-auto w-full px-8 py-8 md:px-14 md:py-20 max-w-3xl rounded-2xl bg-foreground text-background my-8">
          <p className=" md:pr-12 text-3xl md:text-5xl font-semibold md:border-r border-muted-foreground">
            Nous sommes à votre écoute
          </p>
          <div className="md:pl-12">
            <CalCard className="bg-card-foreground text-card transition hover:cursor-pointer hover:scale-[1.01]">
              <CardHeader className="pb-2">
                <CardDescription className="text-muted">
                  Discutons de votre projet
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-1.5">
                <div className="text-xl">Réserver un créneau de 30 minutes</div>
                <ArrowRight className="size-10" />
              </CardContent>
            </CalCard>
          </div>
        </div>
      </div>
    </section>
  );
}
