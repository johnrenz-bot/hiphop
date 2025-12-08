"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

    const scrollToSection = (section: string) => {
        const el = document.getElementById(section);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <motion.footer
            ref={ref}
            style={{ opacity, y }}
            className="w-full border-t border-neutral-800 bg-black/90 backdrop-blur"
        >
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 py-6 md:py-8 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-500">
                            Hiphop
                        </span>
                        <span className="h-1 w-10 bg-linear-to-r from-neutral-500 via-gray-400 to-zinc-400" />
                    </div>
                    <h2 className="mt-2 text-base sm:text-lg font-semibold tracking-wide text-neutral-100">
                        Beat
                        <span className="bg-linear-to-r from-neutral-500 via-gray-400 to-zinc-300 bg-clip-text text-transparent">
                            Lab
                        </span>
                    </h2>
                    <p className="mt-1 text-[10px] sm:text-xs text-neutral-500">
                        Fresh drops. Real bars. Zero skips.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 text-[11px] sm:text-xs font-medium uppercase tracking-wide text-neutral-400">
                    <button
                        onClick={() => scrollToSection("home")}
                        className="hover:text-white transition"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection("about")}
                        className="hover:text-white transition"
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection("features")}
                        className="hover:text-white transition"
                    >
                        Features
                    </button>
                </div>

                <div className="flex flex-col items-start gap-3 text-[10px] sm:text-xs text-neutral-500 md:items-end">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <motion.a
                            href="https://x.com/yourprofile"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -3, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/70 text-neutral-300 text-[10px] sm:text-xs hover:border-fuchsia-500 hover:text-white transition"
                        >
                            X
                        </motion.a>

                        <motion.a
                            href="https://instagram.com/yourprofile"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -3, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/70 text-neutral-300 text-[10px] sm:text-xs hover:border-emerald-400 hover:text-white transition"
                        >
                            IG
                        </motion.a>

                        <motion.a
                            href="https://youtube.com/yourchannel"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -3, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/70 text-neutral-300 text-[10px] sm:text-xs hover:border-yellow-400 hover:text-white transition"
                        >
                            ▶
                        </motion.a>
                    </div>

                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                        © 2025 BeatLab. All rights reserved.
                    </span>
                </div>
            </div>
        </motion.footer>
    );
}
