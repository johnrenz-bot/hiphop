"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Main() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center bg-black text-white px-4 sm:px-8">
            <motion.div
                className="text-center leading-none flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.6, once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-[clamp(3rem,10vw,6rem)] sm:text-[clamp(4rem,11vw,7rem)] font-extrabold tracking-[0.15em] text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                    HIPHOP
                </h1>
                <h1 className="text-[clamp(3rem,10vw,6rem)] sm:text-[clamp(4rem,11vw,7rem)] font-extrabold tracking-[0.15em] -mt-4 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                    DANCE
                </h1>

                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.8, once: false }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    <Link
                        href="/Login"
                        className="px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-zinc-600 bg-linear-to-br from-zinc-400/30 via-zinc-500/10 to-transparent text-sm sm:text-base font-semibold hover:bg-zinc-800 transition"
                    >
                        LOGIN
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
