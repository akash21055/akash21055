"use client";

import { motion } from "framer-motion";
import { Star, Heart, Compass, Sparkles, Check } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Single Question Analysis",
    description:
      "Get precise astrological insights for your specific question. Our expert astrologers provide detailed analysis to guide your decision-making.",
    price: "Rs.2000",
    features: ["Quick turnaround", "Accurate predictions", "Personalized insights", "Email response"],
    color: "red",
  },
  {
    icon: Heart,
    title: "Full Horoscope Analysis",
    description:
      "Complete yearly horoscope reading covering all aspects of your life including career, love, health, and finances.",
    price: "Rs.7000",
    features: ["12-month forecast", "Career outlook", "Relationship guidance", "Written detailed report"],
    color: "green",
  },
  {
    icon: Compass,
    title: "Basic Online Vastu Remedial",
    description:
      "Learn how to harmonize your living space with Vastu principles for improved prosperity and well-being.",
    price: "Rs.31000",
    features: ["Space analysis", "Remedial solutions", "Implementation guide", "Follow-up consultation"],
    color: "white",
    premium: true,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-container bg-white"
    >
      <h2 className="section-title">Our Services</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const colorClass = {
            red: "border-red-300 bg-gradient-to-br from-red-100/30 to-red-50/30",
            green: "border-green-300 bg-gradient-to-br from-green-100/30 to-green-50/30",
            white: "border-slate-300 bg-gradient-to-br from-slate-100/30 to-white",
          }[service.color] || "border-red-300 bg-gradient-to-br from-red-100/30 to-red-50/30";

          const iconColorClass = {
            red: "text-red-600",
            green: "text-green-600",
            white: "text-slate-900",
          }[service.color] || "text-red-600";

          const checkColorClass = {
            red: "text-red-600",
            green: "text-green-600",
            white: "text-slate-900",
          }[service.color] || "text-red-600";

          const priceColorClass = {
            red: "text-red-600",
            green: "text-green-600",
            white: "text-slate-900",
          }[service.color] || "gradient-text";

          return (
            <motion.div
              key={index}
              className={`relative ${service.premium ? "lg:col-span-1 md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={`glass-card h-full flex flex-col ${colorClass}`}
                whileHover={{ scale: 1.02, translateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4 gap-3">
                  <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${iconColorClass} flex-shrink-0`} />
                  <span className={`text-xl sm:text-2xl font-bold ${priceColorClass}`}>
                    {service.price}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900">{service.title}</h3>
                <p className="text-slate-800 text-sm mb-4 sm:mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-800">
                      <Check className={`w-4 h-4 ${checkColorClass} flex-shrink-0`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full btn-primary">
                  {service.premium ? "Get Started" : "Learn More"}
                </button>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
