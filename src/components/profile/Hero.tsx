
export function Hero() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Background Banner */}
            <video
                className="w-full h-auto scale-[1.02]"
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
