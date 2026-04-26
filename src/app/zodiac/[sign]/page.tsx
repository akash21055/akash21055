"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getZodiacByName } from "@/lib/zodiacData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZodiacIcon from "@/components/ZodiacIcon";
import { useParams } from "next/navigation";

export default function ZodiacSignPage() {
  const params = useParams();
  const signParam = params.sign as string;
  const zodiac = getZodiacByName(signParam);

  if (!zodiac) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Sign Not Found
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              The zodiac sign &quot;{signParam}&quot; doesn't exist. Please
              check the URL and try again.
            </p>
            <Link href="/zodiac">
              <button className="btn-primary">View All Zodiac Signs</button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      {/* Hero Section - Full bleed cosmic image background */}
      <section className="relative min-h-screen flex items-end pt-20 overflow-hidden bg-black">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src={zodiac.image}
            alt={zodiac.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient overlays to blend image into page */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 md:py-20 z-10">
          <div className="max-w-3xl">
            {/* Element Badge */}
            <motion.div
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 backdrop-blur-md bg-white/10 text-white border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              {zodiac.element} Sign • {zodiac.rulingPlanet}
            </motion.div>

            {/* Title */}
            <motion.div
              className="flex items-center gap-3 sm:gap-6 mb-3 sm:mb-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div style={{ color: zodiac.color }} className="hidden sm:block">
                <ZodiacIcon sign={zodiac.name} size="xl" />
              </div>
              <div style={{ color: zodiac.color }} className="sm:hidden">
                <ZodiacIcon sign={zodiac.name} size="lg" />
              </div>
              <h1
                className="text-4xl sm:text-6xl md:text-8xl font-bold text-white drop-shadow-2xl"
                style={{ textShadow: `0 0 40px ${zodiac.color}80` }}
              >
                {zodiac.name}
              </h1>
            </motion.div>

            {/* Dates */}
            <motion.p
              className="text-lg sm:text-2xl md:text-3xl text-white/90 mb-4 sm:mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {zodiac.dates}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-4 sm:mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {zodiac.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Key Details Section - flows from black hero */}
      <section className="relative bg-black py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
              <p className="text-xs sm:text-sm text-white/60 font-semibold mb-1.5 sm:mb-2">
                RULING PLANET
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-white break-words">
                {zodiac.rulingPlanet}
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
              <p className="text-xs sm:text-sm text-white/60 font-semibold mb-1.5 sm:mb-2">
                LUCKY NUMBERS
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-white break-words">
                {zodiac.luckyNumbers.join(", ")}
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
              <p className="text-xs sm:text-sm text-white/60 font-semibold mb-1.5 sm:mb-2">
                LUCKY COLORS
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-white break-words">
                {zodiac.luckyColors.join(", ")}
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
              <p className="text-xs sm:text-sm text-white/60 font-semibold mb-1.5 sm:mb-2">
                BIRTHSTONES
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-white break-words">
                {zodiac.birthstones.join(", ")}
              </p>
            </div>
          </motion.div>
        </div>
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
            Get Your Personalized Reading
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Want to dive deeper into your cosmic profile? Our certified
            astrologers can provide detailed insights tailored specifically to
            you and your {zodiac.name} sign.
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
