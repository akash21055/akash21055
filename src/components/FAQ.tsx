"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How accurate are astrological readings?",
    answer:
      "Astrology provides insights based on celestial positions and your birth data. Many clients find readings remarkably accurate for self-reflection and guidance, though results vary by individual openness.",
  },
  {
    question: "What information do I need for a birth chart reading?",
    answer:
      "You'll need your birth date, exact birth time (if available), and birth location. The more precise your information, the more accurate your reading.",
  },
  {
    question: "Can astrology predict the future?",
    answer:
      "Astrology shows potential trends and energetic patterns, not fixed futures. We use it for guidance and self-understanding, empowering you to make informed choices.",
  },
  {
    question: "How long does a reading take?",
    answer:
      "Most readings take 1-2 hours depending on the service. You'll receive a detailed written report along with any consultation time.",
  },
  {
    question: "Are readings available online?",
    answer:
      "Yes! All our readings are available online via video call or detailed written reports, making them accessible worldwide.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section-container bg-white"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="text-slate-600 text-center mb-12">
          Find answers to common questions about our astrology services
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-card cursor-pointer group"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-slate-900 group-hover:text-green-700 transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-red-600" />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pt-4 mt-4 border-t border-slate-300">
                      <p className="text-slate-800 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
