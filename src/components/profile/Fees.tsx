
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function Fees() {
    return (
        <section id="fees" className="py-16 bg-white border-t border-brand-soft/30 animate-in fade-in duration-700">
            <div className="container max-w-4xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-brand-primary">Fees</h2>
                    <p className="text-muted-foreground mt-2">Transparent investment in your wellbeing.</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <Card className="flex-1 max-w-sm mx-auto border-brand-soft shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="text-center pb-2 bg-brand-soft/20 rounded-t-xl">
                            <CardTitle className="text-xl font-semibold text-foreground">Individual Therapy</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center pt-6 space-y-4">
                            <div className="flex items-baseline justify-center">
                                <span className="text-2xl text-muted-foreground font-medium mr-1">from</span>
                                <span className="text-5xl font-bold text-brand-primary">£60</span>
                                <span className="text-muted-foreground ml-1">- £80</span>
                            </div>
                            <p className="text-muted-foreground">per 50 minute session</p>

                            <div className="pt-4 space-y-3 text-left px-4">
                                <div className="flex items-start">
                                    <Check className="h-5 w-5 mr-3 text-brand-secondary shrink-0" />
                                    <span className="text-sm text-foreground">Free initial 15-minute consultation</span>
                                </div>
                                <div className="flex items-start">
                                    <Check className="h-5 w-5 mr-3 text-brand-secondary shrink-0" />
                                    <span className="text-sm text-foreground">Concessions available for students</span>
                                </div>
                                <div className="flex items-start">
                                    <Check className="h-5 w-5 mr-3 text-brand-secondary shrink-0" />
                                    <span className="text-sm text-foreground">Weekly recurring slots</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
