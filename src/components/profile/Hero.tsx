
export function Hero() {
    return (
        <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Banner */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/banner1.jpg")' }}
            >
            </div>
        </section>
    );
}
