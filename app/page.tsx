"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Location from "./components/Location"
import "./globals.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center bg-black z-999"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                className="h-12 w-12 border-4 border-zinc-700 border-t-white rounded-full"
              />

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="tracking-[0.3em] uppercase text-zinc-300 text-xs"
              >
                Loading BeatLab
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full bg-black overflow-x-hidden"
        >
          <Header />

          <section id="home">
            <Main />
          </section>

          <section id="about">
            <About />
          </section>

 <section id="location">
            <Location />
          </section>

          <section id="features">
            <Features />
          </section>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
