"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (section: string) => {
        const el = document.getElementById(section);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsOpen(false);
    };

    return (
        <header className="w-full flex justify-center fixed top-0 left-0 z-50">
            <nav className="inline-flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 py-4 rounded-b-3xl rounded-t-xl md:bg-zinc-900/95 md:border md:border-zinc-700 backdrop-blur-xl shadow-xl w-full max-w-md">
                <div className="w-full flex justify-end md:hidden mb-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white text-2xl"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>

                <div
                    className={`flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 overflow-hidden w-full md:w-auto transform transition-all duration-300 ease-in-out ${isOpen
                            ? "max-h-96 opacity-100 translate-y-0"
                            : "max-h-0 opacity-0 -translate-y-3 md:max-h-full md:opacity-100 md:translate-y-0"
                        }`}
                >
                    <button
                        onClick={() => scrollToSection("home")}
                        className="text-sm font-semibold tracking-[0.2em] text-white hover:text-zinc-200"
                    >
                        HOME
                    </button>

                    <button
                        onClick={() => scrollToSection("about")}
                        className="text-sm font-semibold tracking-[0.2em] text-white hover:text-zinc-200"
                    >
                        ABOUT
                    </button>

                    <button
                        onClick={() => scrollToSection("features")}
                        className="text-sm font-semibold tracking-[0.2em] text-white hover:text-zinc-200"
                    >
                        FEATURES
                    </button>
                </div>
            </nav>
        </header>
    );
}
