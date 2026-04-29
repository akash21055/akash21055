"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, ChevronRight, X } from "lucide-react";

const courses = [
  {
    name: "Nakshatra Vastu",
    subtitle: "KP Astrology + Vastu Mastery",
    price: "₹51,000",
    href: "/courses/nakshatra-vastu",
    bg: "from-purple-600 to-purple-800",
  },
  {
    name: "Advance KP Astrology",
    subtitle: "66 Classes · 14 Modules",
    price: "₹1,50,000",
    href: "/courses/advance-kp",
    bg: "from-indigo-600 to-indigo-800",
  },
];

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 6 + 5,
  delay: Math.random() * 4,
}));

export default function Hero() {
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-12">

      {/* Shiva background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/shiva.png"
          alt="Lord Shiva cosmic meditation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay to blend image and keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        {/* Bottom fade to merge into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Floating star particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ opacity: [0.1, 0.8, 0.1], y: [0, -18, 0], scale: [1, 1.4, 1] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Slow pulsing sacred light ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-64 h-64 sm:w-96 sm:h-96 rounded-full border border-white/10"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.08, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-48 h-48 sm:w-72 sm:h-72 rounded-full border border-amber-300/15"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Subtle color glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tune Your Karmic Energy
        </motion.h1>

        <motion.p
          className="text-base sm:text-xl md:text-2xl text-white/85 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get personalized astrology readings from certified astrologers. Unlock
          your potential through ancient wisdom and modern insights.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Courses button with bob + popover */}
          <div className="relative">
            <motion.button
              onClick={() => setCoursesOpen(!coursesOpen)}
              animate={{ y: [0, -6, 0] }}
              transition={{ y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="relative flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-900/40 border border-white/20"
            >
              {coursesOpen ? <X className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
              Courses
              {!coursesOpen && (
                <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 rounded-full bg-orange-400 border-2 border-white/30 animate-pulse" />
              )}
            </motion.button>

            <AnimatePresence>
              {coursesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="absolute bottom-full right-0 mb-3 w-72 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 z-20"
                >
                  <div className="p-3 flex flex-col gap-2">
                    {courses.map((c) => (
                      <Link key={c.name} href={c.href} onClick={() => setCoursesOpen(false)}>
                        <motion.div
                          whileHover={{ x: 3 }}
                          className={`rounded-xl p-4 bg-gradient-to-r ${c.bg} cursor-pointer group`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-white font-bold text-sm">{c.name}</p>
                            <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                          </div>
                          <p className="text-white/60 text-xs mb-2">{c.subtitle}</p>
                          <p className="text-white font-black text-lg">{c.price}</p>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* View Services with same bob animation */}
          <motion.a
            href="#services"
            animate={{ y: [0, -6, 0] }}
            transition={{ y: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 } }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-lg shadow-orange-900/40 border border-white/20"
          >
            ✨ View Services
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-10 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-400">10k+</div>
            <div className="text-xs sm:text-sm md:text-base text-white/80">Happy Clients</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">20+</div>
            <div className="text-xs sm:text-sm md:text-base text-white/80">Years Experience</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">100%</div>
            <div className="text-xs sm:text-sm md:text-base text-white/80">Satisfaction Rate</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
