


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

    const firstRow = commonAreas.slice(0, Math.ceil(commonAreas.length / 2));
    const secondRow = commonAreas.slice(Math.ceil(commonAreas.length / 2));

    const MarqueeCard = ({ text }: { text: string }) => (
        <div className="mx-2 flex items-center justify-center rounded-2xl border border-brand-soft/50 bg-white px-6 py-4 shadow-sm transition-transform hover:scale-105 hover:border-brand-primary/50">
            <span className="whitespace-nowrap text-sm font-medium text-foreground">{text}</span>
        </div>
    );

    return (
        <section id="expertise" className="py-20 bg-gradient-to-t from-white to-brand-soft/20 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Areas of Counselling</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    I am experienced in helping clients navigate a wide spectrum of challenges.
                </p>
            </div>

            <div className="flex flex-col gap-8 pause-on-hover">
                {/* First Row - Scrolling Left */}
                <div className="relative flex w-full overflow-hidden mask-linear-gradient">
                    <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around py-2">
                        {firstRow.map((area, index) => (
                            <MarqueeCard key={`row1-1-${index}`} text={area} />
                        ))}
                        {firstRow.map((area, index) => (
                            <MarqueeCard key={`row1-2-${index}`} text={area} />
                        ))}
                    </div>
                </div>

                {/* Second Row - Scrolling Right */}
                <div className="relative flex w-full overflow-hidden mask-linear-gradient">
                    <div className="flex animate-marquee-reverse min-w-full shrink-0 items-center justify-around py-2">
                        {secondRow.map((area, index) => (
                            <MarqueeCard key={`row2-1-${index}`} text={area} />
                        ))}
                        {secondRow.map((area, index) => (
                            <MarqueeCard key={`row2-2-${index}`} text={area} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    * Scroll to view more. This list is not exhaustive.
                </p>
            </div>
        </section>
    );
}
