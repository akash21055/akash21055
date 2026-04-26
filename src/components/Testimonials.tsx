"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    zodiac: "Libra",
    text: "The birth chart reading was incredibly accurate and insightful. It helped me understand myself better and make important life decisions.",
    rating: 5,
    benefit: "Clarity on life purpose",
  },
  {
    name: "James K.",
    zodiac: "Taurus",
    text: "Excellent service! The compatibility report helped me navigate my relationship with much more clarity and confidence.",
    rating: 5,
    benefit: "Relationship transformation",
  },
  {
    name: "Emma R.",
    zodiac: "Scorpio",
    text: "I was skeptical at first, but the guidance I received was spot-on. Definitely booking another reading soon!",
    rating: 5,
    benefit: "Career direction gained",
  },
];

export default function Testimonials() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="text-slate-600 text-lg">
          Join thousands of satisfied clients who have transformed their lives through our astrology services
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="glass-card relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform" />

            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                >
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                </motion.div>
              ))}
            </div>

            <p className="text-slate-800 mb-6 italic leading-relaxed">
              "{testimonial.text}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 pt-4 border-t border-slate-300">
              <div>
                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-red-600">{testimonial.zodiac}</div>
              </div>
              <motion.div
                className="flex items-center gap-1 text-xs sm:text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full self-start sm:self-auto"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <TrendingUp className="w-4 h-4" />
                <span>{testimonial.benefit}</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
