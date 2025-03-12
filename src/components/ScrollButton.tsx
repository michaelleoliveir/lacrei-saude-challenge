"use client";

import { ChevronUp } from "lucide-react";

const ScrollButton: React.FC = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            <button
                onClick={handleScrollToTop}
                aria-label="Scroll to top"
                className="flex items-center justify-center w-12 h-12 text-center border-2 rounded-lg cursor-pointer border-emerald-600 shadow-[0px_5px_10px_0px_rgba(0,_0,_0,_0.3)]"
            >
                <ChevronUp className="text-emerald-600" />
            </button>
        </div>
    );
};

export default ScrollButton;