"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { nakshatras } from "@/lib/nakshatraData";
import Image from "next/image";

export default function NakshatraDetails() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="nakshatra-details" className="section-container bg-gradient-to-b from-slate-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">The 27 Nakshatras</h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
          Lunar mansions that reveal the deeper cosmic influences in your birth
          chart. Each nakshatra carries unique spiritual significance and governs
          specific aspects of personality and destiny.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {nakshatras.map((nakshatra) => {
          const nakshatraSlug = nakshatra.name.toLowerCase().replace(/\s+/g, "-");
          return (
            <motion.div key={nakshatra.id} variants={itemVariants}>
              <Link href={`/nakshatra/${nakshatraSlug}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-card flex gap-4 sm:gap-6 cursor-pointer overflow-hidden h-full"
                  style={{
                    borderColor: nakshatra.color,
                    backgroundColor: `${nakshatra.color}05`,
                  }}
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0">
                    <Image
                      src={nakshatra.image}
                      alt={nakshatra.name}
                      fill
                      className="object-cover rounded-xl"
                      sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-start flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap mb-1.5 sm:mb-2">
                      <h3
                        className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900"
                        style={{ color: nakshatra.color }}
                      >
                        {nakshatra.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-semibold">
                        #{nakshatra.id}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mb-2 font-semibold">
                      {nakshatra.rulingDeity}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 line-clamp-2">
                      {nakshatra.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
