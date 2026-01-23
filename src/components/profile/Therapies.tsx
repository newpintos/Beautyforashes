
import { Card, CardContent } from "@/components/ui/card";
import { Brain, HeartHandshake, Sparkles, User } from "lucide-react";

export function Therapies() {
    const therapies = [
        {
            name: "CBT",
            full: "Cognitive Behavioral Therapy",
            icon: <Brain className="h-8 w-8 text-brand-secondary mb-3" />,
            desc: "Identifying and changing negative thought patterns."
        },
        {
            name: "Integrative",
            full: "Integrative Therapy",
            icon: <Sparkles className="h-8 w-8 text-brand-secondary mb-3" />,
            desc: "Blending elements from different approaches to suit you."
        },
        {
            name: "Psychodynamic",
            full: "Psychodynamic Therapy",
            icon: <User className="h-8 w-8 text-brand-secondary mb-3" />,
            desc: "Exploring unconscious processes and past experiences."
        },
        {
            name: "Person-Centred",
            full: "Person-Centred Therapy",
            icon: <HeartHandshake className="h-8 w-8 text-brand-secondary mb-3" />,
            desc: "Fostering growth through empathy and unconditional regard."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container max-w-5xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-brand-primary">Therapies Offered</h2>
                    <p className="text-muted-foreground mt-2">Evidence-based approaches tailored to your unique situation.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {therapies.map((t) => (
                        <Card key={t.name} className="border border-brand-soft/40 hover:border-brand-secondary/60 hover:shadow-md transition-all group">
                            <CardContent className="flex flex-col items-center text-center p-6 h-full">
                                <div className="bg-brand-soft/20 p-3 rounded-full mb-4 group-hover:bg-brand-soft/40 transition-colors">
                                    {t.icon}
                                </div>
                                <h3 className="font-semibold text-foreground mb-1">{t.name}</h3>
                                <p className="text-xs font-medium text-brand-primary uppercase tracking-wider mb-2">{t.full}</p>
                                <p className="text-sm text-muted-foreground">{t.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
