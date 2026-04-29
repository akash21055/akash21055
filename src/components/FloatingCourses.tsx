"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BookOpen, X, ChevronRight, GraduationCap } from "lucide-react";

const courses = [
  {
    name: "Nakshatra Vastu",
    subtitle: "KP Astrology + Vastu Mastery",
    price: "₹51,000",
    href: "/courses/nakshatra-vastu",
    color: "#9333ea",
    bg: "from-purple-600 to-purple-800",
    badge: "bg-purple-500/20 text-purple-200 border-purple-500/30",
  },
  {
    name: "Advance KP Astrology",
    subtitle: "66 Classes · 14 Modules · Certification",
    price: "₹1,50,000",
    href: "/courses/advance-kp",
    color: "#4f46e5",
    bg: "from-indigo-600 to-indigo-800",
    badge: "bg-indigo-500/20 text-indigo-200 border-indigo-500/30",
  },
];

export default function FloatingCourses() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Expanded panel */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="w-72 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900"
              >
                <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <span className="text-white font-semibold text-sm">Our Courses</span>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-white/50 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3 flex flex-col gap-2">
                  {courses.map((c) => (
                    <Link key={c.name} href={c.href} onClick={() => setOpen(false)}>
                      <motion.div
                        whileHover={{ x: 3 }}
                        className={`rounded-xl p-4 bg-gradient-to-r ${c.bg} cursor-pointer group`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded-full border ${c.badge}`}
                          >
                            Course
                          </span>
                          <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-white font-bold text-sm leading-tight mb-0.5">
                          {c.name}
                        </p>
                        <p className="text-white/60 text-xs mb-3">{c.subtitle}</p>
                        <p className="text-white font-black text-xl">{c.price}</p>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating toggle button with bob animation */}
          <motion.button
            onClick={() => setOpen(!open)}
            aria-label="View courses"
            animate={{ y: [0, -6, 0] }}
            transition={{
              y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-900/40 border border-white/20"
          >
            {open ? (
              <X className="w-5 h-5" />
            ) : (
              <GraduationCap className="w-5 h-5" />
            )}
            <span className="text-sm">Courses</span>
            {!open && (
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-orange-400 border-2 border-white animate-pulse" />
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
