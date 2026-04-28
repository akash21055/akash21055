"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ZodiacAnimation from "./ZodiacAnimation";

export default function Hero() {
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
        {/* Radial overlay — lighter in center so text pops */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-black/20 to-black/60" />
        {/* Bottom fade to merge into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Colored glow accents on top of image */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <ZodiacAnimation />

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover Your Cosmic Path
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
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#consultation" className="btn-primary text-center">Book Your Reading</a>
          <a href="#services" className="btn-secondary text-center">View Services</a>
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
