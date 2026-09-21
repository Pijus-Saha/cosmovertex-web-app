"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFloatingButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-[calc(1.5rem+env(safe-area-inset-right,0px))] z-40 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="bg-[#0A2342] text-white text-sm font-medium px-3 py-2 rounded-xl shadow-lg whitespace-nowrap border border-white/10"
          >
            Chat on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <a
        id="whatsapp-floating-btn"
        href="https://wa.me/8801316318387"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="pulse-ring w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:scale-110 transition-transform duration-200"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        }}
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
}
