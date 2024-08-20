import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function CatchPage() {
  return (
    <section className="flex flex-col justify-around container mx-auto min-h-[90svh] pt-10 md:pt-24">
      <h1 className="text-4xl md:text-8xl text-center font-bold flex flex-col leading-normal animate-fade-in duration-5s">
        <span>Automatisez</span>
        <span>
          vos<span className="ml-3 md:ml-6 text-primary">opérations</span>
        </span>
      </h1>
      <div className="hidden md:flex justify-center animate-fade-in duration-5s">
        <Image
          unoptimized
          src="/process-schema-h.gif"
          alt="Process schema"
          width="800"
          height="457"
        />
      </div>
      <div className="hidden max-sm:flex justify-center py-10 animate-fade-in duration-5s">
        <Image
          unoptimized
          src="/process-schema-v.gif"
          alt="Process schema"
          width="200"
          height="2517"
          quality={80}
          sizes={"20vw"}
        />
      </div>
      <div className="flex flex-col items-center animate-fade-in duration-5s">
        <Link className="flex flex-col items-center" href="#automation">
          <div>En savoir plus</div>
          <Button variant="ghost" size="icon">
            <ArrowDown className="size-8" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
