import Image from "next/image";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-24 mt-36 bg-foreground text-background"
    >
      <div className="container mx-auto flex flex-col">
        <div>
          <div className="border-t border-primary/70 w-24 text-center mx-auto pb-5" />
          <h2 className="text-5xl text-center leading-tight">
            Les métiers de votre entreprise
            <br /> <span className="bg-primary/20 px-3">enfin</span> digitalisés
          </h2>

          <div className="text-center my-8">
            <ul>
              <li>Des performances décuplées</li>
              <li>Des coûts maîtrisés</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap my-12 gap-y-12 md:gap-y-52 justify-around md:justify-between text-center">
          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <Image
              unoptimized
              width="200"
              height="200"
              src="/benefits/company.gif"
              alt="Bag of euros"
              className="mx-auto"
            />
            <p className="text-xl mb-1">Excellence opérationnelle</p>
            <p>
              Permettez à vos équipes de se concentrer sur l'essentiel,
              automatisez le reste
            </p>
          </div>

          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <Image
              unoptimized
              width="200"
              height="200"
              src="/benefits/brain.gif"
              alt="Bag of euros"
              className="mx-auto"
            />
            <p className="text-xl mb-1">L'IA à votre service</p>
            <p>
              Optimisez vos processus métiers grâce à l'IA et entrainez votre
              système à prendre des décisions
            </p>
          </div>

          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <Image
              unoptimized
              width="200"
              height="200"
              src="/benefits/money.gif"
              alt="Bag of euros"
              className="mx-auto"
            />
            <p className="text-xl mb-1">Maîtrise des coûts</p>
            <p>
              La garantie d'une solution moins coûteuse à mettre en place et à
              maintenir
            </p>
          </div>
          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <Image
              unoptimized
              width="200"
              height="200"
              src="/benefits/check.gif"
              alt="Bag of euros"
              className="mx-auto"
            />
            <p className="text-xl mb-1">Votre métier, notre priorité</p>
            <p>
              Profitez d'un système entièrement taillé sur mesure pour votre
              entreprise
            </p>
          </div>

          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <Image
              unoptimized
              width="200"
              height="200"
              src="/benefits/bar.gif"
              alt="Bag of euros"
              className="mx-auto"
            />
            <p className="text-xl mb-1">Scalabilité et flexibilité</p>
            <p>
              Une offre et un système qui accompagnent la croissance de votre
              entreprise
            </p>
          </div>

          <div className="px-3 w-96 md:flex-grow-0 md:flex-shrink-0 md:basis-1/3">
            <Image
              unoptimized
              width="200"
              height="200"
              src="/benefits/miror.gif"
              alt="Bag of euros"
              className="mx-auto"
            />
            <p className="text-xl mb-1">Transparence</p>
            <p>
              Une offre claire et transparente, un suivi de projet sans surprise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
