
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-brand-soft/30 border-t border-brand-soft pt-16 pb-8">
            <div className="container px-4 max-w-screen-xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">

                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <span className="text-xl font-bold tracking-tight text-brand-primary block">
                            Beauty for Ashes
                        </span>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Professional counselling and psychotherapy services. Dedicated to your personal growth and wellbeing.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Navigate</h3>
                        <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <Link href="#about" className="hover:text-brand-primary transition-colors">About Me</Link>
                            <Link href="#approach" className="hover:text-brand-primary transition-colors">My Approach</Link>
                            <Link href="#fees" className="hover:text-brand-primary transition-colors">Fees & Info</Link>
                            <Link href="#contact" className="hover:text-brand-primary transition-colors">Contact</Link>
                        </nav>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Get in Touch</h3>
                        <div className="flex space-x-4">
                            <Button variant="outline" size="icon" className="rounded-full border-brand-primary/50 text-brand-primary hover:bg-brand-primary hover:text-white">
                                <Mail className="h-4 w-4" />
                                <span className="sr-only">Email</span>
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full border-brand-primary/50 text-brand-primary hover:bg-brand-primary hover:text-white">
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full border-brand-primary/50 text-brand-primary hover:bg-brand-primary hover:text-white">
                                <Twitter className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Based in Dunmurry, UK.
                        </p>
                    </div>
                </div>

                <div className="border-t border-brand-primary/10 pt-8 mt-8 text-center text-xs text-muted-foreground/60">
                    <p className="mb-2">
                        Disclaimer: This website is a portfolio demonstration. It is not a real medical service.
                    </p>
                    <p>
                        &copy; {new Date().getFullYear()} Beauty for Ashes. Built by XYZ Digilab.
                    </p>
                </div>
            </div>
        </footer>
    );
}
