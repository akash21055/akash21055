"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock } from "lucide-react";

export default function TrustBar() {
  const credentials = [
    {
      icon: Award,
      label: "Certified Astrologers",
      value: "ISO & IAA Certified",
    },
    {
      icon: Users,
      label: "Client Reviews",
      value: "★★★★★ 4.9/5.0",
    },
    {
      icon: Clock,
      label: "Available 24/7",
      value: "Worldwide Service",
    },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <motion.div
                key={index}
                className="flex items-center gap-3 sm:gap-4 justify-center md:justify-start text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <Icon className="w-8 h-8 text-red-700" />
                </div>
                <div>
                  <div className="text-sm text-slate-700">{credential.label}</div>
                  <div className="font-semibold text-slate-900">
                    {credential.value}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
