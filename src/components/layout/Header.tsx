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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-8">
        {/* Left: Logo */}
        <div className="flex items-center z-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-brand-primary whitespace-nowrap">
              Beauty for Ashes
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation - Absolute Centered */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: CTA - Pushed to the end */}
        <div className="hidden md:flex items-center space-x-4 z-20">
          <Button className="bg-brand-primary hover:bg-brand-secondary text-primary-foreground font-medium whitespace-nowrap">
            Contact / Enquire
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden ml-auto z-20">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-brand-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="bg-brand-primary hover:bg-brand-secondary text-primary-foreground font-medium w-full mt-4">
                  Contact / Enquire
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
