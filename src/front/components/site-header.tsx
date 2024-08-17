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
  { title: "Automatisation", href: "#automation" },
  { title: "Services", href: "#services" },
  { title: "Outils", href: "#tools" },
  { title: "Offres", href: "#pricing" },
  { title: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 flex justify-center h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="hidden flex-1 md:block">
        <Link
          href="#"
          className=" items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Image src="/icon.png" alt="Icon Arsheo" width="30" height="30" />
          <span className="sr-only">Arsheo</span>
        </Link>
      </div>
      <nav className="hidden flex-1 flex-col gap-6 text-lg font-medium md:flex md:flex-row md:justify-center md:items-center md:gap-5 md:text-sm lg:gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-primary"
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
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <span className="sr-only">Arsheo</span>
            </Link>
            {links.map((link) => (
              <SheetClose key={link.href} asChild>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.title}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex-1 flex">
        <Button className="ml-auto" variant="outlineAccent" size="sm">
          Nous rencontrer
        </Button>
      </div>
    </header>
  );
}
