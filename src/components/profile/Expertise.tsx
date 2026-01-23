
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export function Expertise() {
    const commonAreas = [
        "Abuse", "ADD / ADHD", "Addiction", "Anger management", "Anxiety",
        "Bereavement", "Cancer", "Career counselling", "Carer support",
        "Child related issues", "Chronic fatigue / ME", "Cultural issues",
        "Depression", "Disability", "Dissociation", "Eating disorders",
        "Health related issues", "Identity issues", "Infertility",
        "Life coaching", "Loss", "Men's issues", "Obsessive compulsive disorder (OCD)",
        "Personal development", "Phobias", "Post-traumatic stress disorder (PTSD)",
        "Pregnancy related issues", "Redundancy", "Relationships", "Self esteem",
        "Self-harm", "Sexual identity", "Sexuality", "Spirituality",
        "Stress", "Trauma", "Women's issues", "Work related issues"
    ];

    return (
        <section id="expertise" className="py-16 bg-gradient-to-t from-white to-brand-soft/20 animate-in fade-in duration-700">
            <div className="container max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-brand-primary mb-3">Areas of Counselling</h2>
                <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
                    I am experienced in helping clients navigate a wide spectrum of challenges.
                </p>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-soft/50">
                    <ScrollArea className="h-[300px] w-full pr-4">
                        <div className="flex flex-wrap justify-center gap-2">
                            {commonAreas.map((area) => (
                                <HoverCard key={area}>
                                    <HoverCardTrigger asChild>
                                        <Badge
                                            variant="outline"
                                            className="text-sm px-3 py-1.5 cursor-pointer hover:bg-brand-secondary hover:text-white transition-all hover:border-transparent rounded-full font-normal text-muted-foreground"
                                        >
                                            {area}
                                        </Badge>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-80">
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-semibold">{area}</h4>
                                            <p className="text-xs text-muted-foreground">
                                                {/* Placeholder description logic */}
                                                Support and therapeutic guidance for dealing with {area.toLowerCase()}.
                                                We can work together to understand how this impacts your life.
                                            </p>
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className="mt-4 pt-4 border-t border-brand-soft/30">
                        <p className="text-xs text-muted-foreground">
                            * Scroll to view more. This list is not exhaustive.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
