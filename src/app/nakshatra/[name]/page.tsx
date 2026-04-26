"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getNakshatraByName, nakshatras } from "@/lib/nakshatraData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";

export default function NakshatraDetailPage() {
  const params = useParams();
  const nameParam = params.name as string;

  // Convert URL parameter (ashwini) to nakshatra name (Ashwini)
  const nakshatraName = nameParam
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const nakshatra = getNakshatraByName(nakshatraName);

  if (!nakshatra) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Nakshatra Not Found
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              The nakshatra &quot;{nakshatraName}&quot; doesn't exist. Please
              check the URL and try again.
            </p>
            <Link href="/nakshatra">
              <button className="btn-primary">View All Nakshatras</button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Find previous and next nakshatras for navigation
  const currentIndex = nakshatras.findIndex((n) => n.id === nakshatra.id);
  const previousNakshatra = currentIndex > 0 ? nakshatras[currentIndex - 1] : null;
  const nextNakshatra = currentIndex < nakshatras.length - 1 ? nakshatras[currentIndex + 1] : null;

  const getPrevSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");
  const getNextSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end pt-20 overflow-hidden bg-black">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src={nakshatra.image}
            alt={nakshatra.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 md:py-20 z-10">
          <div className="max-w-3xl">
            {/* Nakshatra Number Badge */}
            <motion.div
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 backdrop-blur-md bg-white/10 text-white border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              Nakshatra #{nakshatra.id} of 27 • Ruled by {nakshatra.rulingDeity.split(" ")[0]}
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl sm:text-6xl md:text-8xl font-bold text-white drop-shadow-2xl mb-3 sm:mb-4"
              style={{ textShadow: `0 0 40px ${nakshatra.color}80` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {nakshatra.name}
            </motion.h1>

            {/* Ruling Deity */}
            <motion.p
              className="text-lg sm:text-2xl md:text-3xl text-white/90 mb-4 sm:mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ruled by {nakshatra.rulingDeity}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-4 sm:mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {nakshatra.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Key Details Section */}
      <section className="relative bg-black py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="backdrop-blur-md bg-white/5 border rounded-2xl p-4 sm:p-5 md:p-6"
              style={{ borderColor: `${nakshatra.color}40` }}
            >
              <p className="text-xs sm:text-sm text-white/60 font-semibold mb-1.5 sm:mb-2">
                RULING DEITY
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-white break-words">
                {nakshatra.rulingDeity}
              </p>
            </div>

            <div
              className="backdrop-blur-md bg-white/5 border rounded-2xl p-4 sm:p-5 md:p-6"
              style={{ borderColor: `${nakshatra.color}40` }}
            >
              <p className="text-xs sm:text-sm text-white/60 font-semibold mb-1.5 sm:mb-2">
                POSITION
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-white break-words">
                #{nakshatra.id} of 27
              </p>
            </div>

            <div
              className="backdrop-blur-md bg-white/5 border rounded-2xl p-4 sm:p-5 md:p-6"
              style={{ borderColor: `${nakshatra.color}40` }}
            >
              <p className="text-xs sm:text-sm text-white/60 font-semibold mb-1.5 sm:mb-2">
                ENERGY COLOR
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full border-2 border-white/30"
                  style={{ backgroundColor: nakshatra.color }}
                />
                <p className="text-base sm:text-lg md:text-xl font-bold text-white">
                  {nakshatra.color}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Description Section */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8">
            About {nakshatra.name}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
            {nakshatra.description}
          </p>
        </motion.div>
      </section>

      {/* Navigation Section */}
      <section className="section-container bg-gradient-to-b from-slate-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            Explore Other Nakshatras
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
            {previousNakshatra && (
              <Link href={`/nakshatra/${getPrevSlug(previousNakshatra.name)}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-6 cursor-pointer flex flex-col items-center text-center"
                  style={{
                    borderColor: previousNakshatra.color,
                    backgroundColor: `${previousNakshatra.color}05`,
                  }}
                >
                  <p className="text-sm text-slate-600 mb-2 font-semibold">
                    ← Previous Nakshatra
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: previousNakshatra.color }}
                  >
                    {previousNakshatra.name}
                  </p>
                </motion.div>
              </Link>
            )}

            {nextNakshatra && (
              <Link href={`/nakshatra/${getNextSlug(nextNakshatra.name)}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-6 cursor-pointer flex flex-col items-center text-center"
                  style={{
                    borderColor: nextNakshatra.color,
                    backgroundColor: `${nextNakshatra.color}05`,
                  }}
                >
                  <p className="text-sm text-slate-600 mb-2 font-semibold">
                    Next Nakshatra →
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: nextNakshatra.color }}
                  >
                    {nextNakshatra.name}
                  </p>
                </motion.div>
              </Link>
            )}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Discover Your Nakshatra
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Want to know which nakshatra influences your birth chart? Our
            certified astrologers can provide a detailed nakshatra analysis and
            its impact on your life path.
          </p>
          <Link href="/#consultation">
            <button className="btn-primary">Book Your Consultation</button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
