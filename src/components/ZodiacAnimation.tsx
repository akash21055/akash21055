"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ZodiacSign {
  symbol: string;
  name: string;
  color: string;
}

const zodiacSigns: ZodiacSign[] = [
  { symbol: "♈", name: "Aries", color: "#ef4444" },
  { symbol: "♉", name: "Taurus", color: "#f97316" },
  { symbol: "♊", name: "Gemini", color: "#eab308" },
  { symbol: "♋", name: "Cancer", color: "#22c55e" },
  { symbol: "♌", name: "Leo", color: "#06b6d4" },
  { symbol: "♍", name: "Virgo", color: "#8b5cf6" },
  { symbol: "♎", name: "Libra", color: "#ec4899" },
  { symbol: "♏", name: "Scorpio", color: "#ef4444" },
  { symbol: "♐", name: "Sagittarius", color: "#f97316" },
  { symbol: "♑", name: "Capricorn", color: "#eab308" },
  { symbol: "♒", name: "Aquarius", color: "#22c55e" },
  { symbol: "♓", name: "Pisces", color: "#06b6d4" },
];

export default function ZodiacAnimation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    hidden: { opacity: 0, y: 30, scale: 0.3 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4 + i * 0.3,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    }),
  };

  const pulseVariants = {
    animate: {
      boxShadow: [
        "0 0 0 0 rgba(239, 68, 68, 0.7)",
        "0 0 0 20px rgba(239, 68, 68, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="mb-8 sm:mb-12 flex justify-center gap-2 sm:gap-3 flex-wrap px-2 sm:px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {zodiacSigns.map((sign, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          custom={i}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative group cursor-pointer"
        >
          {/* Glow background */}
          <motion.div
            className="absolute inset-0 rounded-full blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle, ${sign.color}40, transparent)`,
            }}
            animate={hoveredIndex === i ? "animate" : ""}
            variants={pulseVariants}
          />

          {/* Animated border ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: `2px solid ${sign.color}`,
              opacity: 0.3,
            }}
            animate={hoveredIndex === i ? { scale: 1.4, opacity: 0 } : { scale: 1, opacity: 0.3 }}
            transition={{ duration: 0.6 }}
          />

          {/* Main zodiac card */}
          <motion.div
            custom={i}
            animate={hoveredIndex === i ? "hover" : "animate"}
            variants={floatingVariants}
            whileHover={{
              scale: 1.35,
              y: 0,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="relative w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full text-2xl sm:text-4xl md:text-5xl transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${sign.color}20, ${sign.color}10)`,
              border: `2px solid ${sign.color}60`,
              boxShadow: hoveredIndex === i
                ? `0 0 30px ${sign.color}80, inset 0 0 20px ${sign.color}30`
                : `0 0 10px ${sign.color}40`,
            }}
          >
            {/* Sparkle effect on hover */}
            {hoveredIndex === i && (
              <>
                <motion.div
                  className="absolute w-1 h-1 bg-white rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    top: [0, -10, -20],
                    left: [0, -10, -20],
                  }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute w-1 h-1 bg-white rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    top: [0, 10, 20],
                    right: [0, 10, 20],
                  }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="absolute w-1 h-1 bg-white rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    bottom: [0, -10, -20],
                    left: [0, 10, 20],
                  }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                />
              </>
            )}

            {/* Zodiac symbol */}
            <motion.span
              className="relative z-10 drop-shadow-lg"
              style={{ color: sign.color }}
              animate={hoveredIndex === i ? { textShadow: `0 0 20px ${sign.color}` } : { textShadow: "none" }}
              transition={{ duration: 0.3 }}
            >
              {sign.symbol}
            </motion.span>
          </motion.div>

          {/* Tooltip */}
          <motion.div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold rounded-full px-3 py-1 bg-slate-900 text-white pointer-events-none"
            initial={{ opacity: 0, y: -10 }}
            animate={hoveredIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ color: sign.color }}
          >
            {sign.name}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
