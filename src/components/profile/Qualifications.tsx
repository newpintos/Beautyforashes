
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Qualifications() {
    const items = [
        {
            id: "item-1",
            icon: <GraduationCap className="h-5 w-5 mr-3 text-brand-secondary" />,
            title: "Qualifications",
            content: (
                <ul className="space-y-2 text-muted-foreground ml-8 list-disc">
                    <li>PG Diploma in systemic practice and family therapy (QUB)</li>
                    <li>Certificate in Sandplay Therapy</li>
                    <li>Diploma in Therapeutic Counselling (Integrative psychodynamic and person centred)</li>
                    <li>BACP Accredited counsellor/psychotherapist</li>
                    <li>Introduction to Counselling</li>
                    <li>Certificate in Counselling Skills</li>
                    <li>BACP Certificate of Proficiency</li>
                </ul>
            )
        },
        {
            id: "item-2",
            icon: <Award className="h-5 w-5 mr-3 text-brand-secondary" />,
            title: "Other Qualifications",
            content: (
                <ul className="space-y-2 text-muted-foreground ml-8 list-disc">
                    <li>Certificate in Training Practice</li>
                    <li>BA Hons + DIS Business Studies</li>
                </ul>
            )
        },
        {
            id: "item-3",
            icon: <BookOpen className="h-5 w-5 mr-3 text-brand-secondary" />,
            title: "Relevant Training",
            content: (
                <div className="ml-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc text-muted-foreground pl-4">
                        <li>Winning the worry wars - creative interventions for anxious children and YP</li>
                        <li>Spirituality and mental health</li>
                        <li>Understanding addiction from a psychodynamic perspective</li>
                        <li>Taming the trauma - helping children through evidence-informed creative interventions</li>
                        <li>Trauma & Addiction</li>
                        <li>Mental health & substance misuse</li>
                        <li>OCN Level 3 in substance misuse for counsellors</li>
                        <li>Sand Play Workshop</li>
                        <li>'Seeing Red' - CBT tools for managing anger in children and young people</li>
                        <li>'Down in the dumps' - CBT skills for working with low mood and depression in children and young people</li>
                        <li>'Modern family' - how to help children cope when their family changes shape</li>
                        <li>Motivational Interviewing</li>
                        <li>SafeTalk & SafeTalk Train the Trainer</li>
                        <li>ASIST</li>
                        <li>Understanding brief intervention approaches and how to use them with drug & alcohol misusing clients</li>
                        <li>Practical ways of working with drug & alcohol misusing clients</li>
                        <li>Level 1 CBT key knowledge & skills</li>
                        <li>Level 1 CBT with substance misuse</li>
                        <li>OCN Level 3 Train the Trainer Men & Women's Sexual Health Education</li>
                        <li>Drugs and Young People's development</li>
                        <li>OCN Level 3 Principles of tackling substance misuse</li>
                        <li>Therapeutic Crisis Intervention Training</li>
                        <li>Taking the lid off - supporting adults & young people living with alcoholism and problematic substance misuse</li>
                        <li>Self harm - whose challenge?</li>
                        <li>Managing difficult, dangerous and disturbing behaviour</li>
                        <li>Assessing and managing risk</li>
                        <li>Children/Young people and substance misuse</li>
                        <li>OCN Level 2 Community Drugs Awareness</li>
                        <li>OCN Level 3 Train the Trainer</li>
                        <li>Protection of children and vulnerable adults</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-brand-primary mb-6">Qualifications & Training</h2>

                <p className="text-center text-muted-foreground mb-10 text-lg leading-relaxed">
                    I have over 11 years experience of working in the addictions field and have worked with individuals, young people and family members affected by a variety of issues including addiction, mental health difficulties, trauma, loss and many more.
                </p>

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
