"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Consultation() {
  const [open, setOpen] = useState(false);
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
    const handleSelect = (e: Event) => {
      setSelectedService((e as CustomEvent<string>).detail);
      setOpen(true);
    };
    const handleOpen = () => setOpen(true);

    window.addEventListener("selectService", handleSelect);
    window.addEventListener("openConsultation", handleOpen);
    return () => {
      window.removeEventListener("selectService", handleSelect);
      window.removeEventListener("openConsultation", handleOpen);
    };
  }, []);

  // lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => {
    setOpen(false);
    setSubmitted(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    console.log("Form submitted:", { ...formData, service: selectedService });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedService(null);
      setFormData({ fullname: "", birthdate: "", birthtime: "", birthplace: "", message: "" });
    }, 3000);
  };

  return (
    // Hidden anchor so external href="/#consultation" still resolves
    <>
      <div id="consultation" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Book Your Reading</h2>
                  {selectedService && (
                    <p className="text-sm text-green-600 font-medium mt-0.5">{selectedService}</p>
                  )}
                </div>
                <button
                  onClick={close}
                  className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-6 py-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">✓</div>
                    <div className="text-green-700 text-lg font-semibold mb-2">
                      Thank you for your interest!
                    </div>
                    <p className="text-slate-600">
                      We&apos;ll review your request and contact you shortly to confirm your reading.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-slate-900">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-red-500 text-slate-900 transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5 text-slate-900">
                          Birth Date *
                        </label>
                        <input
                          type="date"
                          name="birthdate"
                          value={formData.birthdate}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-red-500 text-slate-900 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5 text-slate-900">
                          Birth Time *
                        </label>
                        <input
                          type="time"
                          name="birthtime"
                          value={formData.birthtime}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-red-500 text-slate-900 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-slate-900">
                        Birth Place *
                      </label>
                      <input
                        type="text"
                        name="birthplace"
                        value={formData.birthplace}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-red-500 text-slate-900 transition-all"
                        placeholder="City, State, Country"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-slate-900">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-red-500 text-slate-900 transition-all resize-none"
                        placeholder="Tell us what you're looking for..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full btn-primary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Request Reading
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
