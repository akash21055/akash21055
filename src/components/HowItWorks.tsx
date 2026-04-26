"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Choose Service",
    description: "Select the astrology reading that best fits your needs",
    icon: "📋",
  },
  {
    number: 2,
    title: "Provide Details",
    description:
      "Share your birth date, time, and location for accurate analysis",
    icon: "🕐",
  },
  {
    number: 3,
    title: "Expert Analysis",
    description:
      "Our certified astrologers prepare a personalized reading for you",
    icon: "✨",
  },
  {
    number: 4,
    title: "Receive Insights",
    description: "Get your detailed report with actionable guidance",
    icon: "📊",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-container bg-white"
    >
      <h2 className="section-title">How It Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 md:gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            {index < steps.length - 1 && (
              <motion.div
                className="hidden md:block absolute top-1/4 left-full w-12 -translate-x-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              >
                <ArrowRight className="w-6 h-6 text-red-700" />
              </motion.div>
            )}

            <div className="text-center">
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-green-600 rounded-full blur opacity-75 animate-pulse" />
                  <div className="relative w-full h-full bg-gradient-to-br from-red-500 to-green-500 rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-2xl sm:text-3xl">{step.icon}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                <div className="text-sm font-semibold text-green-700 mb-1">
                  Step {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">{step.title}</h3>
                <p className="text-slate-700 text-sm">{step.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-slate-700 text-sm mb-4">
          The entire process takes 7-14 days from submission to report delivery
        </p>
        <button className="btn-primary">Start Your Journey</button>
      </motion.div>
    </section>
  );
}
