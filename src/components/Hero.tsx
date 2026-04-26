"use client";

import { motion } from "framer-motion";
import ZodiacAnimation from "./ZodiacAnimation";

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-red-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-green-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-slate-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <ZodiacAnimation />

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover Your Cosmic Path
        </motion.h1>

        <motion.p
          className="text-base sm:text-xl md:text-2xl text-slate-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
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
            className="bg-slate-50 backdrop-blur-md border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">10k+</div>
            <div className="text-xs sm:text-sm md:text-base text-slate-700">Happy Clients</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-50 backdrop-blur-md border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">20+</div>
            <div className="text-xs sm:text-sm md:text-base text-slate-700">Years Experience</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-50 backdrop-blur-md border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">100%</div>
            <div className="text-xs sm:text-sm md:text-base text-slate-700">Satisfaction Rate</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
