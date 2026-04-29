"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/KjjpQyQCXXNBsdj1mJuQ3G?mode=gi_t";

export default function FloatingWhatsApp() {
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
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join WhatsApp group"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
          exit={{ opacity: 0, x: -80 }}
          transition={{
            opacity: { duration: 0.3 },
            x: { type: "spring", stiffness: 260, damping: 22 },
            y: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-4 sm:left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#25D366] text-white font-semibold shadow-lg shadow-green-900/30 border border-white/20"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
