"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { zodiacSigns } from "@/lib/zodiacData";
import ZodiacIcon from "@/components/ZodiacIcon";

export default function ZodiacDetails() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="zodiac-details" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Discover Your Zodiac Sign</h2>
        <p className="text-center text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          Explore the unique characteristics, strengths, and compatibility of
          each zodiac sign. Find your cosmic identity and unlock your potential.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {zodiacSigns.map((sign) => (
          <motion.div key={sign.id} variants={itemVariants}>
            <Link href={`/zodiac/${sign.name.toLowerCase()}`}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card cursor-pointer h-full flex flex-col items-center justify-between p-6 group transition-all"
                style={{
                  borderColor: `${sign.color}40`,
                  borderWidth: "2px",
                }}
              >
                {/* Zodiac Icon */}
                <motion.div
                  className="mb-4 group-hover:drop-shadow-lg transition-all"
                  style={{ color: sign.color }}
                  whileHover={{ scale: 1.2 }}
                >
                  <ZodiacIcon sign={sign.name} size="lg" />
                </motion.div>

                {/* Sign Name */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {sign.name}
                </h3>

                {/* Dates */}
                <p className="text-sm text-slate-600 text-center mb-3">
                  {sign.dates}
                </p>

                {/* Element Badge */}
                <motion.span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4"
                  style={{ backgroundColor: sign.color }}
                  whileHover={{ scale: 1.1 }}
                >
                  {sign.element}
                </motion.span>

                {/* View Details Button */}
                <motion.div
                  className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 flex items-center gap-2 mt-auto"
                  whileHover={{ x: 5 }}
                >
                  View Details
                  <span>→</span>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
