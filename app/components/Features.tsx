"use client";

import {
  FaUserShield,
  FaUserTag,
  FaComments,
  FaUsers,
  FaHandshake,
  FaBell,
} from "react-icons/fa";
import { MdEventAvailable, MdCalendarMonth } from "react-icons/md";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Dancer Authentication",
      description: "Secure sign-in so dancers keep their identity locked.",
      icon: <FaUserShield />,
      tag: "Security",
    },
    {
      title: "Crew Roles & Profiles",
      description:
        "Customize profiles and assign roles like dancer, coach, or director.",
      icon: <FaUserTag />,
      tag: "Crews",
    },
    {
      title: "Live Chat Cyphers",
      description:
        "Private messages and real-time responses like you're in a dance circle.",
      icon: <FaComments />,
      tag: "Live",
    },
    {
      title: "Community Moves Feed",
      description:
        "Share clips, post wins, drop comments and engage with the culture.",
      icon: <FaHandshake />,
      tag: "Social",
    },
    {
      title: "Join or Form Crews",
      description:
        "Collaborate, practice together, and represent your squad.",
      icon: <FaUsers />,
      tag: "Unity",
    },
    {
      title: "Coach Booking & Classes",
      description:
        "Schedule lessons, book coaches, and manage dance practices.",
      icon: <MdEventAvailable />,
      tag: "Training",
    },
    {
      title: "Event Calendar",
      description: "Track battles, classes, and upcoming dance sessions.",
      icon: <MdCalendarMonth />,
      tag: "Events",
    },
    {
      title: "Push Notifications",
      description:
        "Get alerts for messages, bookings, battle invites and more.",
      icon: <FaBell />,
      tag: "Alerts",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen bg-zinc-950 text-zinc-200 px-4 sm:px-6 lg:px-10 py-16 sm:py-20 overflow-hidden">
      <motion.div
        className="relative max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3, once: true }}
        variants={container}
      >
        <motion.div
          variants={card}
          className="flex flex-col items-center gap-4 mb-12 sm:mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-zinc-400">
            HipHop Dance Platform
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-100">
            All your dance tools{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-zinc-200 to-zinc-500">
              in one rhythm
            </span>
          </h2>

          <p className="max-w-2xl text-zinc-400 text-sm md:text-base">
            A next-generation dance platform with real-time communication, crew
            battles, training sessions, gamified motivation & community culture.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
          variants={container}
        >
          {features.map((feat, index) => {
            const spanClass =
              index === 0 ? "sm:col-span-2 lg:col-span-2" : "";

            return (
              <motion.div
                key={feat.title}
                variants={card}
                className={`group relative ${spanClass}`}
              >
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-zinc-700/30 via-zinc-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative h-full flex flex-col rounded-2xl border border-zinc-700 bg-linear-to-b from-zinc-800 via-zinc-900 to-black px-5 py-6 md:px-6 md:py-7 backdrop-blur-sm transform transition-all duration-300 group-hover:-translate-y-1">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-xl text-zinc-300">
                        <span className="transform group-hover:scale-110 transition-transform duration-200">
                          {feat.icon}
                        </span>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                          Drop {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-1 text-zinc-100">
                          {feat.title}
                        </h3>
                      </div>
                    </div>

                    <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-zinc-300">
                      {feat.tag}
                    </span>
                  </div>

                  <p className="mb-5 text-sm text-zinc-400 leading-relaxed">
                    {feat.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-700">
                    <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-zinc-400 group-hover:bg-zinc-300" />
                      <span>Part of the core rhythm</span>
                    </div>

                    <button className="text-xs font-medium text-zinc-300 group-hover:text-white inline-flex items-center gap-1 transition-colors">
                      Learn more →
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
