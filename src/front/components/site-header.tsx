import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const links = [
  { title: "Avantages", href: "#benefits" },
  { title: "Méthode", href: "#methodology" },
  { title: "Services", href: "#services" },
  { title: "Outils", href: "#tools" },
  { title: "Offres", href: "#pricing" },
  { title: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex justify-center h-16 items-center gap-4 px-4 md:px-6 border-b-1 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="hidden flex-1 md:block">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Image
            src="/icon-light.png"
            alt="Icon Arsheo"
            width="40"
            height="40"
          />
          <span className="text-3xl tracking-normal">Arsheo</span>
        </Link>
      </div>
      <nav className="hidden flex-1 flex-col gap-6 text-lg font-medium md:flex md:flex-row md:justify-center md:items-center md:gap-5 md:text-sm lg:gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:border-b-2 hover:border-primary"
          >
            {link.title}
          </Link>
        ))}
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Image src="/icon.png" alt="Icon Arsheo" width="30" height="30" />
              <span className="text-3xl tracking-normal">Arsheo</span>
            </Link>
            {links.map((link) => (
              <SheetClose key={link.href} asChild>
                <Link href={link.href}>{link.title}</Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex-1 flex">
        <Link
          className="ml-auto"
          href="https://cal.com/arsheo/15min"
          target="_blank"
        >
          <Button variant="outlineAccent" size="sm">
            Nous rencontrer
          </Button>
        </Link>
      </div>
    </header>
  );
}
