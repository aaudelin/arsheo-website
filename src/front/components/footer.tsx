import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container border-t-2 py-24 bg-primary/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
        <div>
          <Link
            href="#"
            className="flex gap-2 text-lg font-semibold md:text-base"
          >
            <Image
              src="/icon-light.png"
              alt="Icon Arsheo"
              width="40"
              height="40"
            />
            <span className="text-3xl tracking-normal">Arsheo</span>
          </Link>
          <p className="mt-4">La solution pour scaler votre business</p>
        </div>
        <div>
          <p className="text-lg text-muted-foreground mb-2">Légal</p>
          <Link href="">
            <p>Mentions légales</p>
          </Link>
          <Link href="">
            <p>Politique de confidentialité</p>
          </Link>
          <Link href="">
            <p>Conditions générales d'utilisation</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
