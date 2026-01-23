"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Approach", href: "#approach" },
    { name: "Expertise", href: "#expertise" },
    { name: "Fees", href: "#fees" },
    { name: "Availability", href: "#availability" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <div className="container relative flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-8">
        {/* Logo - Left */}
        <div className="hidden md:flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
              Beauty for Ashes
            </span>
          </Link>
        </div>

        {/* Navigation - Absolute Center */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent text-white/90 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white active:bg-white/10 active:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10`}>
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA - Right */}
        <div className="hidden md:flex items-center">
          <Button asChild className="bg-white text-black hover:bg-white/90 font-medium whitespace-nowrap">
            <Link href="https://cal.com/xyz-digilab-ki4pwo/15min" target="_blank" rel="noopener noreferrer">
              Contact / Enquire
            </Link>
          </Button>
        </div>

        {/* Mobile Layout: Logo Left, Menu Right */}
        <div className="flex w-full items-center justify-between md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
              Beauty for Ashes
            </span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 border-zinc-800">
              <div className="flex flex-col h-full pt-10">
                <div className="px-6 mb-8">
                  <span className="text-2xl font-bold tracking-tight text-white/90">
                    Beauty for Ashes
                  </span>
                </div>
                <div className="flex flex-col space-y-6 px-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-white/80 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <Button asChild className="bg-white text-black hover:bg-white/90 font-medium w-full">
                      <Link href="https://cal.com/xyz-digilab-ki4pwo/15min" target="_blank" rel="noopener noreferrer">
                        Contact / Enquire
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
