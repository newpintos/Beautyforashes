
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Quote } from "lucide-react";

export function Approach() {
    return (
        <section id="approach" className="py-16 bg-brand-soft/20">
            <div className="container max-w-4xl mx-auto px-4">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-brand-primary">My Approach</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Therapy is a collaborative process. I offer a relational approach that emphasizes the importance of the therapeutic bond.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    <Card className="border-none shadow-md">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-semibold text-brand-secondary">Core Principles</h3>
                            <ul className="space-y-3 text-muted-foreground list-disc list-outside ml-5">
                                <li><span className="font-medium text-foreground">Confidentiality:</span> A completely private space for effective work.</li>
                                <li><span className="font-medium text-foreground">Empathy:</span> Seeing the world from your perspective.</li>
                                <li><span className="font-medium text-foreground">Non-Judgment:</span> Accepting you as you are, without criticism.</li>
                                <li><span className="font-medium text-foreground">Autonomy:</span> Respecting your right to make your own choices.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col justify-center space-y-6">
                        <p className="text-lg text-muted-foreground">
                            I believe that our past experiences often shape our present patterns. By exploring these connections, we can gain insight into behaviors that may no longer serve you.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            My role is not to give advice or "fix" you, but to support you in finding your own answers and inner strength.
                        </p>

                        <Alert className="bg-white border-l-4 border-l-accent-hope border-y-0 border-r-0 rounded-r-md shadow-sm">
                            <Quote className="h-4 w-4 text-accent-hope mb-2" />
                            <AlertDescription className="text-brand-primary font-medium italic">
                                "The curious paradox is that when I accept myself just as I am, then I can change." — Carl Rogers
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>
            </div>
        </section>
    );
}
