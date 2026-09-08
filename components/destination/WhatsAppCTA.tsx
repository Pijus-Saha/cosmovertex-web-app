"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight, Clock, MapPin } from "lucide-react";

interface WhatsAppCTAProps {
  destinationName: string;
  customMessage?: string;
  title?: string;
  subtitle?: string;
}

export default function WhatsAppCTA({
  destinationName,
  customMessage,
  title,
  subtitle,
}: WhatsAppCTAProps) {
  const defaultText = `Hi COSMOVERTEX! I am interested in studying in ${destinationName}. Can you evaluate my profile?`;
  const messageParam = encodeURIComponent(customMessage || defaultText);
  const whatsappUrl = `https://wa.me/8801316318387?text=${messageParam}`;

  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0A2342] via-[#0d2d4f] to-[#064e3b] p-8 sm:p-12 text-white shadow-2xl"
        >
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                Active Counseling • Instant Reply
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold leading-tight">
                {title || `Have Questions About Studying in ${destinationName}?`}
              </h3>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                {subtitle ||
                  "Chat directly with our Dhaka-based advisors. Get instant university shortlists, intake deadlines, and tuition guidance via WhatsApp."}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-white/70">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  +880 1316-318387 / +880 1346-990025
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Banani & Mohakhali DOHS, Dhaka
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-heading font-bold text-base shadow-xl shadow-emerald-950/40 hover:scale-[1.03] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+8801316318387"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
