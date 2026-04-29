"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Star, BookOpen, Users, Award, Zap } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Personal Horoscope Chart Analysis",
    desc: "Full chart analysis + solution included. Relative/Other member chart analysis @ ₹4,000 only (Original ₹31,000).",
  },
  {
    icon: BookOpen,
    title: "1-Year Recording Access",
    desc: "बार-बार classes दुबारा देख सकते हैं। Revisit every lesson at your own pace.",
  },
  {
    icon: Zap,
    title: "Future Adjustment",
    desc: "किसी और course में enroll करने पर paid amount adjust हो जाएगा।",
  },
  {
    icon: Users,
    title: "Personal Lifetime Membership Group",
    desc: "Stuck होने पर full support. A community of experts always available.",
  },
  {
    icon: Award,
    title: "Golden Opportunity",
    desc: "Nakshatra Vastu Research Sanstha के साथ professional services देने का मौका — lifetime income & growth.",
  },
];

const modules = [
  {
    number: "01",
    title: "Basic Astrology Foundation",
    color: "#ef4444",
    topics: [
      "What is Astrology? How does it work?",
      "What is Zodiac?",
      "27 Nakshatra Attributes",
      "Rashi & Bhav Basics",
    ],
  },
  {
    number: "02",
    title: "Pinpoint KP Astrology Concepts",
    color: "#f97316",
    topics: [
      "What is Cusp? Uniqueness & Prediction Secrets",
      "Nakshatra Lord, Sublord & Sublord Calculation",
      "Dasha Bhukti System",
      "Prediction Level: Class 1, 2, 3 (100% Accuracy)",
      "What is Horary Chart? Application in Real Life",
      "Ruling Planets – How They Work",
    ],
  },
  {
    number: "03",
    title: "Timing of Events (Prediction Mastery)",
    color: "#eab308",
    topics: [
      "Timing of Event – Class 1",
      "Timing of Event – Class 2",
      "Ruling Planets & Numerology (basic)",
    ],
  },
  {
    number: "04",
    title: "House-wise Combinations (1–12)",
    color: "#22c55e",
    topics: [
      "1st House to 12th House – secrets, combinations, predictions",
    ],
  },
  {
    number: "05",
    title: "Basic Vastu Integration",
    color: "#06b6d4",
    topics: [
      "Class 1: 5 Elements & Life Impact",
      "Class 2: Color Energy Theory & 32 Entrance Attributes",
      "Class 3: 16 Directions & Their Impact",
      "Class 4: 45 Devta & Their Attributes",
    ],
  },
  {
    number: "06",
    title: "Nakshatra Vastu (Advanced)",
    color: "#8b5cf6",
    topics: [
      "What is Nakshatra Vastu? Why is it different from Mahavastu?",
      "27 Nakshatra Devtas – Mapping List",
      "How to apply Nakshatra Vastu in Home/Office",
      "Energy Activation & Black Energy Protection",
    ],
  },
  {
    number: "07",
    title: "Remedial Mastery",
    color: "#ec4899",
    topics: [
      "6, 8, 12 Houses – 100% Solution",
      "Detect disturbed Devta energy fields from Kundali",
      "Practical Case Studies",
    ],
  },
  {
    number: "08",
    title: "Grand Finale",
    color: "#f59e0b",
    topics: [
      "All attendees का Live Chart Analysis + Prediction (personalized)",
    ],
  },
];

const whyJoin = [
  {
    title: "Rare Combination",
    desc: "Nakshatra Vastu + KP Astrology — world-first approach that no other institute teaches.",
    color: "#ef4444",
  },
  {
    title: "Pinpoint Accuracy",
    desc: "कोई guesswork नहीं, केवल scientific logic. Every prediction backed by exact calculations.",
    color: "#22c55e",
  },
  {
    title: "Practical Application",
    desc: "Directly use in consultation & professional growth. Real case studies included.",
    color: "#8b5cf6",
  },
  {
    title: "Lifetime Growth",
    desc: "Research Sanstha का हिस्सा बनकर team में earning opportunities.",
    color: "#f97316",
  },
];

export default function NakshatraVastuCourse() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-6 bg-purple-500/20 text-purple-300 border border-purple-500/30">
              🏆 World-First Approach
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nakshatra Vastu +{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                KP Astrology
              </span>{" "}
              Mastery
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-6 leading-relaxed">
              The only course in the world that combines Nakshatra Vastu energy mapping
              with KP Astrology precision — enabling you to give pinpoint predictions
              and life-changing consultations.
            </p>
            <div className="inline-flex items-baseline gap-3 mb-10 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="text-4xl sm:text-5xl font-black text-white">₹51,000</span>
              <span className="text-white/50 text-sm">one-time · lifetime access</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#consultation">
                <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                  Enroll Now
                </button>
              </Link>
              <a href="#curriculum">
                <button className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  View Curriculum
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">🎁 Exclusive Benefits</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Everything you get when you join this course
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-card flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <b.icon className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{b.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="section-container bg-gradient-to-b from-slate-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">📚 Course Structure</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            8 comprehensive modules from foundation to advanced mastery
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="glass-card overflow-hidden"
              style={{ borderColor: `${mod.color}40` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-3xl font-black opacity-20"
                  style={{ color: mod.color }}
                >
                  {mod.number}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{mod.title}</h3>
              </div>
              <ul className="space-y-2">
                {mod.topics.map((topic, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: mod.color }}
                    />
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Join */}
      <section className="section-container bg-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            🏆 Why Join?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            What makes this course truly unique
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {whyJoin.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: `${item.color}10`,
                borderColor: `${item.color}30`,
              }}
            >
              <h3 className="text-xl font-bold mb-2" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <h2 className="section-title text-center mb-10">💳 Course Fee</h2>
          <div className="rounded-3xl border-2 border-purple-200 bg-gradient-to-b from-purple-50 to-white p-8 text-center shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-500 mb-4">
              Nakshatra Vastu + KP Astrology Mastery
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl font-black text-slate-900">₹51,000</span>
            </div>
            <p className="text-slate-500 text-sm mb-8">One-time payment · Lifetime recording access</p>
            <ul className="text-left space-y-3 mb-8">
              {[
                "Full chart analysis + solution included",
                "Relative chart analysis @ ₹4,000 (original ₹31,000)",
                "1-year recording access",
                "Future course amount adjustment",
                "Personal lifetime membership group",
                "Professional services opportunity",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/#consultation">
              <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors text-lg">
                Enroll Now
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-purple-900 to-slate-900 rounded-2xl text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Master Nakshatra Vastu?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Join the world-first Nakshatra Vastu + KP Astrology program and
            start your journey to becoming a professional astrologer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#consultation">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                Enroll Now
              </button>
            </Link>
            <Link href="/courses/advance-kp">
              <button className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                View Advance KP Course
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
