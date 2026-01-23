
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

export function Qualifications() {
    const items = [
        {
            id: "item-1",
            icon: <GraduationCap className="h-5 w-5 mr-3 text-brand-secondary" />,
            title: "Core Qualifications",
            content: (
                <ul className="space-y-2 text-muted-foreground ml-8 list-disc">
                    <li>MSc in Psychotherapy & Counselling - University of London</li>
                    <li>Postgraduate Diploma in Integrative Counselling</li>
                    <li>BA (Hons) Psychology</li>
                </ul>
            )
        },
        {
            id: "item-2",
            icon: <Award className="h-5 w-5 mr-3 text-brand-secondary" />,
            title: "Certifications",
            content: (
                <ul className="space-y-2 text-muted-foreground ml-8 list-disc">
                    <li>Certified Clinical Trauma Professional (CCTP)</li>
                    <li>Certificate in CBT for Anxiety & Depression</li>
                    <li>Mindfulness Based Stress Reduction (MBSR) Teacher</li>
                </ul>
            )
        },
        {
            id: "item-3",
            icon: <BookOpen className="h-5 w-5 mr-3 text-brand-secondary" />,
            title: "Additional Training",
            content: (
                <div className="space-y-2 ml-8">
                    <p className="text-muted-foreground">Recent workshops and CPD:</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                        <Badge variant="outline">Attachment Theory</Badge>
                        <Badge variant="outline">Grief Counseling</Badge>
                        <Badge variant="outline">Polyvagal Theory</Badge>
                        <Badge variant="outline">Online Therapy Safety</Badge>
                    </div>
                </div>
            )
        },
        {
            id: "item-4",
            icon: <Users className="h-5 w-5 mr-3 text-brand-secondary" />,
            title: "Memberships",
            content: (
                <div className="ml-8 text-muted-foreground space-y-2">
                    <p>I am a registered member of the following professional bodies:</p>
                    <ul className="list-disc ml-4 space-y-1">
                        <li>British Association for Counselling and Psychotherapy (BACP) - Accredited</li>
                        <li>UK Council for Psychotherapy (UKCP)</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-brand-primary mb-10">Qualifications & Training</h2>

                <Accordion type="single" collapsible className="w-full">
                    {items.map((item) => (
                        <AccordionItem key={item.id} value={item.id}>
                            <AccordionTrigger className="hover:text-brand-primary hover:no-underline">
                                <div className="flex items-center text-left">
                                    {item.icon}
                                    <span className="text-lg font-medium">{item.title}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
