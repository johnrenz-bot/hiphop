"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-linear-to-br from-black via-[#0a0a0a] to-[#111] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl h-full rounded-3xl flex flex-col lg:flex-row overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.12)]"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2 h-full flex flex-col justify-between p-6 sm:p-10"
        >
          <div className="space-y-6 sm:space-y-7">
            <div className="flex flex-col">
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-wider bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400 drop-shadow">
                ABOUT
              </h2>
              <h6 className="text-xs sm:text-sm uppercase tracking-widest opacity-60">
                The History of Hip-Hop
              </h6>
            </div>

            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg opacity-90 leading-relaxed">
              <p>
                Hip-hop dance emerged in the 1970s in the Bronx, created by African
                American and Latino communities as a raw form of expression and
                identity. Breaking introduced spins, freezes, footwork, and energetic
                acrobatics, while styles like locking and popping shaped the early
                movement.
              </p>
              <p>
                By the 1980s, the culture went global—music videos, films, and legendary
                crews pushed hip-hop to center stage. The ’90s and 2000s saw new
                evolutions: krumping, house dance, and choreography-driven studio styles.
              </p>
              <p>
                Today, hip-hop is a worldwide cultural force—more than dance, it is a
                language of storytelling, identity, and creativity that continues to
                challenge and inspire generations.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative w-full lg:w-1/2 h-72 sm:h-[420px] lg:h-auto"
        >
          <img
            src="/hiphop.jpg"
            alt="hiphop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-black via-transparent to-[#111]" />
          <div className="absolute inset-0 border border-white/20 rounded-3xl shadow-[0_0_35px_rgba(255,255,255,0.18)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}