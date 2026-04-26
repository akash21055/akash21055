"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { nakshatras } from "@/lib/nakshatraData";
import Image from "next/image";

export default function NakshatraSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
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
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="nakshatra-section"
      className="section-container bg-gradient-to-b from-white to-slate-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Explore the 27 Nakshatras</h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
          Discover the lunar mansions that shape your cosmic destiny, personality,
          and life path. Each nakshatra holds unique spiritual and astrological
          significance.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {nakshatras.map((nakshatra) => (
          <motion.div key={nakshatra.id} variants={itemVariants}>
            <Link href={`/nakshatra/${nakshatra.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <motion.div
                whileHover={{ scale: 1.08, y: -6 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg transition-all cursor-pointer group"
                style={{
                  backgroundColor: `${nakshatra.color}10`,
                  borderColor: nakshatra.color,
                  borderWidth: "2px",
                }}
              >
                {/* Nakshatra Image */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 group-hover:drop-shadow-lg transition-all">
                  <Image
                    src={nakshatra.image}
                    alt={nakshatra.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
                  />
                </div>

                {/* Nakshatra Name */}
                <p className="text-xs sm:text-sm font-bold text-center text-slate-900 leading-tight line-clamp-2">
                  {nakshatra.name}
                </p>

                {/* Ruling Deity - hidden on small screens */}
                <p className="text-xs text-slate-600 text-center hidden sm:block">
                  {nakshatra.rulingDeity.split(" ")[0]}
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
        <Link href="/nakshatra">
          <button className="btn-primary">
            View All Nakshatra Details
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
