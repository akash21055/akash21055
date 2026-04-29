"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { zodiacSigns } from "@/lib/zodiacData";
import { nakshatras } from "@/lib/nakshatraData";

export default function Navbar() {
  const [zodiacOpen, setZodiacOpen] = useState(false);
  const [nakshatraOpen, setNakshatraOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileZodiacOpen, setMobileZodiacOpen] = useState(false);
  const [mobileNakshatraOpen, setMobileNakshatraOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const nakshatraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setZodiacOpen(false);
      }
      if (nakshatraRef.current && !nakshatraRef.current.contains(event.target as Node)) {
        setNakshatraOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileZodiacOpen(false);
    setMobileNakshatraOpen(false);
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center gap-3">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
          <span className="text-base sm:text-xl font-bold gradient-text truncate">
            Oz astro consultation
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          <Link
            href="/#how-it-works"
            className="text-slate-800 hover:text-green-600 transition-colors font-medium"
          >
            How It Works
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setZodiacOpen(!zodiacOpen)}
              className="flex items-center gap-1 text-slate-800 hover:text-green-600 transition-colors font-medium"
            >
              Zodiac Signs
              <ChevronDown className={`w-4 h-4 transition-transform ${zodiacOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {zodiacOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-3 w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 grid grid-cols-3 gap-2"
                >
                  {zodiacSigns.map((sign) => (
                    <Link
                      key={sign.id}
                      href={`/zodiac/${sign.name.toLowerCase()}`}
                      onClick={() => setZodiacOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors group"
                    >
                      <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-slate-300">
                        <Image src={sign.image} alt={sign.name} fill className="object-cover" sizes="32px" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">{sign.name}</p>
                        <p className="text-xs text-slate-500 truncate">{sign.dates}</p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative" ref={nakshatraRef}>
            <button
              onClick={() => setNakshatraOpen(!nakshatraOpen)}
              className="flex items-center gap-1 text-slate-800 hover:text-green-600 transition-colors font-medium"
            >
              Nakshatras
              <ChevronDown className={`w-4 h-4 transition-transform ${nakshatraOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {nakshatraOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-3 w-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 grid grid-cols-4 gap-2 max-h-[450px] overflow-y-auto"
                >
                  {nakshatras.map((nakshatra) => {
                    const slug = nakshatra.name.toLowerCase().replace(/\s+/g, "-");
                    return (
                      <Link
                        key={nakshatra.id}
                        href={`/nakshatra/${slug}`}
                        onClick={() => setNakshatraOpen(false)}
                        className="flex flex-col items-center justify-center gap-1 px-2 py-3 rounded-lg hover:bg-slate-100 transition-colors group text-center"
                      >
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-slate-300">
                          <Image src={nakshatra.image} alt={nakshatra.name} fill className="object-cover" sizes="40px" />
                        </div>
                        <p className="text-xs font-semibold text-slate-900 truncate max-w-full">{nakshatra.name}</p>
                        <p className="text-xs text-slate-500">#{nakshatra.id}</p>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/#faq"
            className="text-slate-800 hover:text-green-600 transition-colors font-medium"
          >
            FAQ
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link href="/#consultation" className="hidden md:block">
          <button className="btn-primary text-sm">Book Reading</button>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-slate-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-slate-200 bg-white"
          >
            <div className="px-4 py-4 max-h-[calc(100vh-64px)] overflow-y-auto">
              <Link
                href="/#how-it-works"
                onClick={closeMobile}
                className="block py-3 text-slate-800 font-medium border-b border-slate-100"
              >
                How It Works
              </Link>

              <button
                onClick={() => setMobileZodiacOpen(!mobileZodiacOpen)}
                className="w-full flex justify-between items-center py-3 text-slate-800 font-medium border-b border-slate-100"
              >
                Zodiac Signs
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileZodiacOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {mobileZodiacOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden grid grid-cols-2 gap-2 py-3 border-b border-slate-100"
                  >
                    {zodiacSigns.map((sign) => (
                      <Link
                        key={sign.id}
                        href={`/zodiac/${sign.name.toLowerCase()}`}
                        onClick={closeMobile}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-slate-300">
                          <Image src={sign.image} alt={sign.name} fill className="object-cover" sizes="32px" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900 truncate">{sign.name}</p>
                          <p className="text-xs text-slate-500 truncate">{sign.dates}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setMobileNakshatraOpen(!mobileNakshatraOpen)}
                className="w-full flex justify-between items-center py-3 text-slate-800 font-medium border-b border-slate-100"
              >
                Nakshatras
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileNakshatraOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {mobileNakshatraOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden grid grid-cols-3 gap-2 py-3 border-b border-slate-100"
                  >
                    {nakshatras.map((nakshatra) => {
                      const slug = nakshatra.name.toLowerCase().replace(/\s+/g, "-");
                      return (
                        <Link
                          key={nakshatra.id}
                          href={`/nakshatra/${slug}`}
                          onClick={closeMobile}
                          className="flex flex-col items-center justify-center gap-1 px-2 py-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors text-center"
                        >
                          <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-slate-300">
                            <Image src={nakshatra.image} alt={nakshatra.name} fill className="object-cover" sizes="32px" />
                          </div>
                          <p className="text-xs font-semibold text-slate-900 truncate max-w-full">{nakshatra.name}</p>
                          <p className="text-xs text-slate-500">#{nakshatra.id}</p>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/#faq"
                onClick={closeMobile}
                className="block py-3 text-slate-800 font-medium border-b border-slate-100"
              >
                FAQ
              </Link>

              <Link href="/#consultation" onClick={closeMobile} className="block pt-4">
                <button className="btn-primary w-full">Book Reading</button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
