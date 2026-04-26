"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { zodiacSigns } from "@/lib/zodiacData";
import ZodiacIcon from "@/components/ZodiacIcon";

export default function ZodiacBrowser() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <section id="zodiac-browser" className="section-container bg-gradient-to-b from-slate-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Explore Your Zodiac Sign</h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
          Click on your sign to discover your cosmic profile, personality traits, compatibility, and more
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-3 md:gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {zodiacSigns.map((sign) => (
          <motion.div key={sign.id} variants={itemVariants}>
            <Link href={`/zodiac/${sign.name.toLowerCase()}`}>
              <motion.div
                whileHover={{ scale: 1.15, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-xl transition-all cursor-pointer group"
                style={{
                  backgroundColor: `${sign.color}10`,
                  borderColor: sign.color,
                  borderWidth: "2px",
                }}
              >
                {/* Zodiac Icon */}
                <div
                  style={{ color: sign.color }}
                  className="group-hover:drop-shadow-lg transition-all"
                >
                  <ZodiacIcon sign={sign.name} size="md" />
                </div>

                {/* Sign Name */}
                <p className="text-xs font-bold text-center text-slate-900 leading-tight">
                  {sign.name}
                </p>

                {/* Dates - hidden on very small screens */}
                <p className="text-xs text-slate-600 text-center hidden sm:block">
                  {sign.dates.split(" - ")[0]}
                </p>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Link href="/zodiac">
          <button className="btn-primary">View Detailed Zodiac Profiles</button>
        </Link>
      </motion.div>
    </section>
  );
}
