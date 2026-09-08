"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  ArrowRight,
  MessageCircle,
  Calendar,
  ShieldCheck,
  Award,
} from "lucide-react";

interface DestinationHeroProps {
  flag: string;
  destinationName: string;
  title: string;
  highlightedWord: string;
  tagline: string;
  intakeText: string;
  badgeText?: string;
  whatsappMessage?: string;
  stats?: { label: string; value: string }[];
}

export default function DestinationHero({
  flag,
  destinationName,
  title,
  highlightedWord,
  tagline,
  intakeText,
  badgeText = "Comprehensive Study Guide",
  whatsappMessage,
  stats,
}: DestinationHeroProps) {
  const defaultWaMsg = `Hi COSMOVERTEX! I would like to get consultation for studying in ${destinationName}.`;
  const encodedWaMsg = encodeURIComponent(whatsappMessage || defaultWaMsg);

  return (
    <section className="relative min-h-[65vh] flex items-center bg-hero-gradient overflow-hidden pt-32 pb-20">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-12 text-[12rem] opacity-[0.04] dark:opacity-[0.06] select-none pointer-events-none font-bold">
          {flag}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-white/60 text-sm mb-6 flex-wrap"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white/40">Destinations</span>
          <span>/</span>
          <span className="text-emerald-400 font-medium">{destinationName}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-4xl sm:text-5xl shrink-0">{flag}</span>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                {badgeText}
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-medium">
                <Calendar className="w-3.5 h-3.5" />
                {intakeText}
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              {title}{" "}
              <span className="text-gradient-emerald">{highlightedWord}</span>
            </h1>

            {/* Tagline */}
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8">
              {tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-gradient text-white font-semibold text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all"
              >
                Apply for Next Intake
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/8801316318387?text=${encodedWaMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white font-semibold text-base transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Genuine Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Bangladesh Bank QR-Code Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>1,800+ Students Placed</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Metrics highlight card on the right */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-4"
            >
              <div className="bg-white/10 dark:bg-slate-900/60 backdrop-blur-xl border border-white/15 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">
                    Fast Facts
                  </span>
                  <span className="text-xs text-white/60">Updated for 2026/27</span>
                </div>
                <div className="space-y-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                    >
                      <span className="text-sm text-white/70">{stat.label}</span>
                      <span className="font-heading font-bold text-white text-base text-right">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#lead-form"
                  className="block text-center w-full py-2.5 rounded-lg bg-white/15 hover:bg-white/20 text-white text-xs font-semibold tracking-wide uppercase transition-colors"
                >
                  Request Profile Evaluation
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
