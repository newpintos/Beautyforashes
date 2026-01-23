
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function About() {
    return (
        <section id="about" className="py-20 bg-white animate-in fade-in duration-700">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-[1fr_350px] gap-12 items-start">

                    {/* Left Column: Text Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-brand-primary mb-6">About Me</h2>
                            <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
                                <p>
                                    <strong>I am a qualified and BACP accredited Psychotherapist and Counsellor.</strong>
                                </p>
                                <p>
                                    I have many years of experience working with people from all walks of life, supporting them through a wide range of emotional and psychological difficulties. My practice is built on the belief that everyone deserves to be heard, understood, and supported in a safe and non-judgmental environment.
                                </p>
                                <p>
                                    I originally trained in <strong>Person-Centred Therapy</strong>, which means I place the therapeutic relationship at the heart of our work. I believe that you are the expert on your own life, and my role is to walk alongside you, helping you to make sense of your experiences and find your own way forward.
                                </p>
                                <p>
                                    Over time, I have integrated other approaches into my work, particularly <strong>Cognitive Behavioural Therapy (CBT)</strong> and <strong>Trauma-Informed Practice</strong>. This allows me to tailor our sessions to your unique needs, whether that means exploring your past to understand your present, or finding practical tools to manage anxiety and stress in the here and now.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-brand-primary mb-3">Training, qualifications & experience</h3>
                            <Separator className="bg-brand-soft/50 mb-4" />
                            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                                <li>MSc in Psychotherapy & Counselling</li>
                                <li>Postgraduate Diploma in Counselling Psychology</li>
                                <li>Certificate in Trauma-Informed Care</li>
                                <li>Certified Grief Counsellor</li>
                                <li>Member of the British Association for Counselling and Psychotherapy (MBACP)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Profile Image & Badges */}
                    <div className="space-y-6">
                        <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto overflow-hidden rounded-2xl shadow-lg border-4 border-white ring-1 ring-black/5">
                            <Image
                                src="/profile.png"
                                alt="Sarah Jenkins - Psychotherapist"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                            <Badge variant="secondary" className="bg-brand-soft/30 hover:bg-brand-soft/50 px-3 py-1">MBACP Accredited</Badge>
                            <Badge variant="secondary" className="bg-brand-soft/30 hover:bg-brand-soft/50 px-3 py-1">Trauma Informed</Badge>
                            <Badge variant="secondary" className="bg-brand-soft/30 hover:bg-brand-soft/50 px-3 py-1">Online & In-person</Badge>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
