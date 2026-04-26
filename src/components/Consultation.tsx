"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Consultation() {
  const [formData, setFormData] = useState({
    fullname: "",
    contactnumber: "",
    birthdate: "",
    birthtime: "",
    birthplace: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

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

    if (!formData.fullname || !formData.contactnumber || !formData.birthdate || !formData.birthtime || !formData.birthplace) {
      alert("Please fill in all required fields");
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullname: "", contactnumber: "", birthdate: "", birthtime: "", birthplace: "", message: "" });
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
            <p className="text-slate-800">
              We'll review your request and contact you shortly to confirm your reading.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <label className="block text-sm font-medium mb-2 text-slate-900">Contact Number *</label>
              <input
                type="tel"
                name="contactnumber"
                value={formData.contactnumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-red-500 focus:bg-white text-slate-900 transition-all"
                placeholder="+91 98765 43210"
              />
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
