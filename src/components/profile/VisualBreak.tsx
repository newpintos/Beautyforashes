
export function VisualBreak() {
    return (
        <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden my-8">
            {/* Background Image - Placeholder used, would be replaced by real consistent royalty-free image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1600&auto=format&fit=crop")' }}
            >
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-primary/20 bg-black/10 z-10 backdrop-blur-[1px]"></div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-2xl">
                <blockquote className="text-3xl md:text-4xl font-serif italic text-white drop-shadow-md leading-relaxed">
                    “A safe space to pause, reflect, and grow.”
                </blockquote>
            </div>
        </section>
    );
}
