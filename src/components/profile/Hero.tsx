
export function Hero() {
    return (
        <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Banner */}
            <video
                className="absolute inset-0 z-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="https://pub-7b3b1d7b78bb40028eaf09c5e65b3024.r2.dev/Video_Generation_With_Mild_Motion.mp4" type="video/mp4" />
            </video>
        </section>
    );
}
