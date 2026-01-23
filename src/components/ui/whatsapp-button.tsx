
"use client"

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
    const phoneNumber = "447508940261"; // Updated contact number
    const message = "Hello, I would like to enquire about counselling sessions.";

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none">
            <Button
                size="icon"
                className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg border-2 border-white transition-transform hover:scale-110"
                onClick={handleClick}
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="h-8 w-8 text-white stroke-[2.5px]" />
            </Button>
        </div>
    );
}
