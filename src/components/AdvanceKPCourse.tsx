"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, BookOpen, Users, Award, Zap, Target } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "66 Classes Across 14 Modules",
    desc: "From Astrology Foundation to Professional Prediction — a complete mastery path with structured, progressive learning.",
  },
  {
    icon: BookOpen,
    title: "KP System Deep Dive",
    desc: "Cusp, Sublord, Significators, DBA Timing, Transit, Horary — every pillar of KP Astrology covered in depth.",
  },
  {
    icon: Zap,
    title: "Medical & Advanced Topics",
    desc: "Medical Astrology, Marriage & Relationship, Profession, Nakshatra Vastu Integration — rare advanced modules included.",
  },
  {
    icon: Users,
    title: "Case Study Training",
    desc: "Marriage, Foreign Travel, Career, Disease, Court/Competition — real chart practice on live student horoscopes.",
  },
  {
    icon: Award,
    title: "Certification Included",
    desc: "Final exam + chart analysis + horary judgement + timing prediction. Official certification from Oz Foundation.",
  },
  {
    icon: BookOpen,
    title: "Course Promise",
    desc: "Sirf theory nahi — chart dekhkar logical, scientific aur pinpoint prediction karna seekhega. No guesswork.",
  },
];

const modules = [
  {
    number: "01",
    title: "Astrology Foundation",
    color: "#ef4444",
    classes: [
      "Class 1: Astrology kya hai? Graha, Rashi, Bhav, Nakshatra aur Cusp ka basic introduction.",
      "Class 2: 12 Houses ka real meaning — health, money, marriage, career, property, disease, foreign, spirituality.",
      "Class 3: 12 Rashiyan aur unki nature — Movable, fixed, dual; fire, earth, air, water signs.",
      "Class 4: 27 Nakshatra Introduction — Nakshatra kya hota hai, planet se zyada Nakshatra result kyu deta hai.",
    ],
  },
  {
    number: "02",
    title: "KP Astrology ka Core System",
    color: "#f97316",
    classes: [
      "Class 5: KP Astrology kya hai? Traditional astrology se difference. Prediction Cusp + Nakshatra Lord + Sublord se.",
      "Class 6: Placidus House System — KP mein unequal houses kyu hote hain, cusp ka importance.",
      "Class 7: Cusp kya hai? Life ka 'event trigger point' samjhana.",
      "Class 8: Cuspal Sublord kya hai? CSL final authority kyu hai.",
      "Class 9: Planet ka role — Planet = agent, Nakshatra Lord = field, Sublord = final permission.",
    ],
  },
  {
    number: "03",
    title: "Significator System",
    color: "#eab308",
    classes: [
      "Class 10: Significator kya hota hai? Planet kin houses ka result dega?",
      "Class 11: House occupation aur ownership — planet jis house mein baitha hai aur jinke houses ka sambandh.",
      "Class 12: Nakshatra Lord based result — planet apne star lord ke house results kaise deta hai.",
      "Class 13: Sublord confirmation — Event hoga ya nahi, ye sublord kaise decide karta hai.",
      "Class 14: Strong aur weak significators — KP mein priority order kaise decide karein.",
    ],
  },
  {
    number: "04",
    title: "Event Prediction Basics",
    color: "#22c55e",
    classes: [
      "Class 15: Marriage prediction — 7th, 2nd, 11th houses; delay, denial, separation combinations.",
      "Class 16: Career prediction — 10th, 6th, 2nd, 11th houses; job, business, government, private.",
      "Class 17: Money aur income prediction — 2nd, 6th, 10th, 11th house ka role.",
      "Class 18: Property, vehicle aur house — 4th, 11th, 2nd, Mars, Venus connections.",
      "Class 19: Education prediction — 4th, 5th, 9th house; higher education, technical, breaks.",
      "Class 20: Foreign travel/settlement — 3rd, 9th, 12th, 7th, 11th house combinations.",
    ],
  },
  {
    number: "05",
    title: "Dasha-Bhukti Timing",
    color: "#06b6d4",
    classes: [
      "Class 21: Vimshottari Dasha in KP — Dasha, Bhukti, Antara ka role.",
      "Class 22: DBA ka event connection — Event tabhi hoga jab DBA relevant houses ko activate karein.",
      "Class 23: Favorable aur unfavorable DBA — 2,6,11 success; 1,5,9 support; 6,8,12 struggle/obstacle.",
      "Class 24: Event timing formula — Promise + DBA + Transit + Ruling Planets.",
    ],
  },
  {
    number: "06",
    title: "Transit in KP",
    color: "#8b5cf6",
    classes: [
      "Class 25: KP Transit kya hai? Traditional gochar se difference.",
      "Class 26: Moon Transit — Moon fast trigger kaise banta hai.",
      "Class 27: Saturn/Jupiter Transit — Major event support aur delay ka logic.",
      "Class 28: Transit through star and sub — Planet Nakshatra aur sub level par kaise result deta hai.",
    ],
  },
  {
    number: "07",
    title: "Horary Astrology",
    color: "#ec4899",
    classes: [
      "Class 29: KP Horary kya hai? 249 number method ka introduction.",
      "Class 30: Horary chart kaise banate hain — Question time, number selection, chart judgement.",
      "Class 31: Yes/No question judgement — Karya hoga ya nahi, CSL se direct answer.",
      "Class 32: Lost object, marriage, job, foreign horary — Practical examples.",
      "Class 33: Ruling Planets — RP ka role, hierarchy aur event confirmation.",
    ],
  },
  {
    number: "08",
    title: "Advanced Prediction Techniques",
    color: "#f59e0b",
    classes: [
      "Class 34: 6th house logic — Opponent ka loss, native ka gain; disease, competition, court, service.",
      "Class 35: 8th house logic — Sudden events, obstacles, surgery, transformation, hidden matters.",
      "Class 36: 12th house logic — Loss, hospital, foreign, isolation, bed pleasure, spiritual withdrawal.",
      "Class 37: Separation combinations — 1-6-10 vs 7-2-11 logic in relationship.",
      "Class 38: Denial combinations — Event promise hai ya nahi, denial kaise judge karein.",
    ],
  },
  {
    number: "09",
    title: "Medical Astrology in KP",
    color: "#10b981",
    classes: [
      "Class 39: Disease prediction basics — 1st, 6th, 8th, 12th house connection.",
      "Class 40: Body parts and zodiac signs — Rashi, planet aur house se body area identify karna.",
      "Class 41: Chronic disease combinations — Saturn, Rahu, Ketu, 6-8-12 connection.",
      "Class 42: Surgery, hospitalization, recovery — 8th, 12th, 6th, 11th house logic.",
    ],
  },
  {
    number: "10",
    title: "Marriage and Relationship Advanced",
    color: "#e879f9",
    classes: [
      "Class 43: Marriage timing — 7th CSL, DBA, Transit, RP.",
      "Class 44: Love marriage vs arranged marriage — 5th, 7th, 11th connections.",
      "Class 45: Divorce/separation — 1,6,10 against 2,7,11.",
      "Class 46: Spouse nature and direction — 7th CSL, Nakshatra, sign, planet influence.",
    ],
  },
  {
    number: "11",
    title: "Profession Advanced",
    color: "#fb923c",
    classes: [
      "Class 47: Job vs business — 6th house = job/service, 7th = business/public dealing, 10th = karma/profession.",
      "Class 48: Government job — Sun, Saturn, 6th, 10th, 11th combinations.",
      "Class 49: Medical, legal, technical, occult profession — Planet-wise profession decoding.",
      "Class 50: Career growth and promotion — 2,6,10,11 house timing.",
    ],
  },
  {
    number: "12",
    title: "Nakshatra Vastu Integration",
    color: "#a78bfa",
    classes: [
      "Class 51: KP + Nakshatra Vastu ka connection — Chart mein blocked energy ko home direction se balance.",
      "Class 52: 12 houses and directions — Kis house ki energy kis direction se activate hoti hai.",
      "Class 53: 6,8,12 house energy correction — Obstacle, disease, loss aur hidden blockage ko balance.",
      "Class 54: Practical case studies — Money, health, marriage, career ke real examples.",
    ],
  },
  {
    number: "13",
    title: "Case Study Training",
    color: "#34d399",
    classes: [
      "Class 55: Marriage case study — Promise, timing, result.",
      "Class 56: Foreign travel case study — Visa, travel, settlement.",
      "Class 57: Career case study — Job change, promotion, business success.",
      "Class 58: Disease case study — Disease possibility, recovery timing.",
      "Class 59: Court/competition case study — Victory or loss prediction.",
      "Class 60: Student live chart practice — Students ke charts par practical analysis.",
    ],
  },
  {
    number: "14",
    title: "Professional Prediction Method",
    color: "#fbbf24",
    classes: [
      "Class 61: Client consultation format — Client se kya poochna hai, chart kaise read karna hai.",
      "Class 62: Prediction report kaise banayein — Clear, logical, professional format.",
      "Class 63: Remedies ka ethical use — KP mein remedy: energy alignment, karma correction, vastu support.",
      "Class 64: Confidence building — Kaise short time mein pinpoint prediction deni hai.",
      "Class 65: Common mistakes — Traditional rules mix karna, exaltation-debilitation par depend karna.",
      "Class 66: Final exam and certification — Chart analysis, horary judgement, timing prediction.",
    ],
  },
];

export default function AdvanceKPCourse() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-6 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              🎓 Oz Foundation — Complete KP System
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Advance{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-yellow-400 bg-clip-text text-transparent">
                KP Astrology
              </span>{" "}
              Course
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-6 leading-relaxed">
              66 classes across 14 modules — from astrology foundation to
              professional prediction mastery. Learn Cusp, Sublord, DBA Timing,
              Horary, Medical Astrology and earn your certification.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm border border-white/20">
                66 Classes
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm border border-white/20">
                14 Modules
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm border border-white/20">
                Certification Included
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm border border-white/20">
                Live Case Studies
              </span>
            </div>
            <div className="inline-flex items-baseline gap-3 mb-10 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="text-4xl sm:text-5xl font-black text-white">₹1,50,000</span>
              <span className="text-white/50 text-sm">one-time · certification included</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#consultation">
                <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
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

      {/* Highlights */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">✨ What You Will Learn</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A complete KP Astrology system — theory, timing, and professional practice
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-card flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <h.icon className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{h.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{h.desc}</p>
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
          <h2 className="section-title">📚 Course Curriculum</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            14 modules · 66 classes · Foundation to Professional Mastery
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
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
                {mod.classes.map((cls, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: mod.color }}
                    />
                    {cls}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Course Promise */}
      <section className="section-container bg-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            🎯 Course Promise
          </h2>
          <div className="rounded-2xl p-8 border bg-indigo-500/10 border-indigo-500/30">
            <p className="text-white/80 text-lg leading-relaxed">
              Is course ke baad student sirf astrology theory nahi seekhega, balki{" "}
              <span className="text-indigo-300 font-semibold">
                chart dekhkar logical, scientific aur pinpoint prediction karna seekhega
              </span>{" "}
              — kyunki KP Astrology mein guesswork nahi, Cusp, Nakshatra Lord,
              Sublord, DBA aur Transit ka clear event mechanism hota hai.
            </p>
          </div>
        </motion.div>
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
          <div className="rounded-3xl border-2 border-indigo-200 bg-gradient-to-b from-indigo-50 to-white p-8 text-center shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-4">
              Advance KP Astrology — Complete Program
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl font-black text-slate-900">₹1,50,000</span>
            </div>
            <p className="text-slate-500 text-sm mb-8">One-time payment · Certification included</p>
            <ul className="text-left space-y-3 mb-8">
              {[
                "66 classes across 14 complete modules",
                "Foundation to professional mastery",
                "Medical & Advanced prediction techniques",
                "Live case study training on real charts",
                "Nakshatra Vastu integration module",
                "Final exam + official certification",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/#consultation">
              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors text-lg">
                Enroll Now
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-indigo-900 to-slate-900 rounded-2xl text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Master KP Astrology?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Join the Oz Foundation Advance KP Astrology program and become a
            certified professional astrologer with pinpoint prediction skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#consultation">
              <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
                Enroll Now
              </button>
            </Link>
            <Link href="/courses/nakshatra-vastu">
              <button className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                View Nakshatra Vastu Course
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
