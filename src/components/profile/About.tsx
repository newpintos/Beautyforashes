import Image from "next/image";
import { Button } from "@/components/ui/button";

export function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden bg-stone-50/50">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center relative">

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative z-10">
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg shadow-xl">
                            <Image
                                src="/juli.png"
                                alt="Julie Crawford - Psychotherapist"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Card - Overlapping */}
                    <div className="w-full lg:w-3/5 lg:-ml-24 relative z-20 mt-8 lg:mt-0">
                        <div className="bg-orange-50/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg border border-stone-100">

                            <blockquote className="text-xl md:text-2xl font-serif text-brand-primary/80 italic mb-8 leading-relaxed">
                                "I believe healing begins when you feel safe enough to be real."
                            </blockquote>

                            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                                Julie Crawford
                            </h2>
                            <p className="text-lg text-brand-secondary font-medium mb-6">
                                Psychotherapist and Counsellor
                            </p>

                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    I am a qualified and BACP accredited counsellor based in Warwickshire, dedicated to helping individuals navigate life's challenges. With a foundation of safety and non-judgment, I offer a gentle, supportive space where you can explore your feelings and find your own healing wings.
                                </p>
                                <p>
                                    My practice integrates Person-Centred Therapy with Trauma-Informed care to tailor our sessions to your unique needs. Whether you are exploring the past or managing the present, I am here to walk alongside you, helping you feel heard, understood, and valued just as you are.
                                </p>
                            </div>

                            <div className="mt-8 pt-6">
                                <Button className="bg-brand-primary hover:bg-brand-secondary text-primary-foreground text-lg px-8 py-6 h-auto">
                                    Book a free consultation
                                </Button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
