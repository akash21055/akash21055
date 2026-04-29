"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/KjjpQyQCXXNBsdj1mJuQ3G?mode=gi_t";

export default function Consultation() {
  const [formData, setFormData] = useState({
    fullname: "",
    birthdate: "",
    birthtime: "",
    birthplace: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      setSelectedService((e as CustomEvent<string>).detail);
    };
    window.addEventListener("selectService", handler);
    return () => window.removeEventListener("selectService", handler);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullname || !formData.birthdate || !formData.birthtime || !formData.birthplace) {
      alert("Please fill in all required fields");
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullname: "", birthdate: "", birthtime: "", birthplace: "", message: "" });
    }, 3000);
  };

  return (
    <section id="consultation" className="section-container bg-white scroll-mt-24">
      <h2 className="section-title">Book Your Reading Today</h2>

      <motion.div
        className="max-w-2xl mx-auto glass-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-green-700 text-lg font-semibold mb-2">
              ✓ Thank you for your interest!
            </div>
            <p className="text-slate-600 mb-6">
              We'll review your request shortly. Join our WhatsApp group for faster responses and updates.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp Group
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence>
              {selectedService && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-green-50 border border-green-200"
                >
                  <div>
                    <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-0.5">Selected Service</p>
                    <p className="text-sm font-bold text-green-800">{selectedService}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="text-green-400 hover:text-green-700 transition-colors flex-shrink-0"
                    aria-label="Remove selected service"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-sm font-medium mb-2 text-slate-900">
                Full Name *
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-red-500 focus:bg-white text-slate-900 transition-all"
                placeholder="Your full name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium mb-2 text-slate-900">Contact via WhatsApp</label>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Join our WhatsApp Group
              </a>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium mb-2 text-slate-900">
                  Birth Date *
                </label>
                <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-red-500 focus:bg-white text-slate-900 transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium mb-2 text-slate-900">
                  Birth Time *
                </label>
                <input
                  type="time"
                  name="birthtime"
                  value={formData.birthtime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-red-500 focus:bg-white text-slate-900 transition-all"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-medium mb-2 text-slate-900">
                Birth Place *
              </label>
              <input
                type="text"
                name="birthplace"
                value={formData.birthplace}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-red-500 focus:bg-white text-slate-900 transition-all"
                placeholder="City, State, Country"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-sm font-medium mb-2 text-slate-900">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-red-500 focus:bg-white text-slate-900 transition-all resize-none"
                placeholder="Tell us about what you're looking for..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full btn-primary mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Request Reading
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
