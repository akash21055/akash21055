"use client";

import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";

/*
 * To add a student review video, add an entry to the array below.
 * Paste the full YouTube URL (e.g. https://www.youtube.com/watch?v=ABC123)
 * or just the video ID (e.g. ABC123).
 */
const reviews: { title: string; student: string; videoId: string }[] = [
  // Example entries — replace videoId with real YouTube video IDs:
  // { title: "Nakshatra Vastu Course Review", student: "Rahul S.", videoId: "dQw4w9WgXcQ" },
  // { title: "KP Astrology Transformed My Life", student: "Priya M.", videoId: "dQw4w9WgXcQ" },
];

function extractVideoId(input: string): string {
  try {
    const url = new URL(input);
    return url.searchParams.get("v") ?? input;
  } catch {
    return input;
  }
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-red-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-6 bg-red-500/20 text-red-300 border border-red-500/30">
              ▶ Student Reviews
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              What Our{" "}
              <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                Students Say
              </span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              Real feedback from students who transformed their lives through
              Nakshatra Vastu and KP Astrology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos grid */}
      <section className="section-container bg-white">
        {reviews.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto text-center py-16"
          >
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Reviews Coming Soon</h2>
            <p className="text-slate-500 text-sm">
              Student video reviews will appear here. Check back soon!
            </p>
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">🌟 Student Testimonials</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                {reviews.length} video review{reviews.length !== 1 ? "s" : ""} from our students
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((r, i) => {
                const vid = extractVideoId(r.videoId);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="glass-card overflow-hidden p-0"
                  >
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-t-2xl"
                        src={`https://www.youtube.com/embed/${vid}`}
                        title={r.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{r.title}</h3>
                      <p className="text-xs text-slate-500">{r.student}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </section>
    </>
  );
}
