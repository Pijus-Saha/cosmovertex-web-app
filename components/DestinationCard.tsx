"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps {
  flag: string;
  country: string;
  tagline: string;
  highlight: string;
  href: string;
  delay?: number;
}

export default function DestinationCard({
  flag,
  country,
  tagline,
  highlight,
  href,
  delay = 0,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
    >
      <Link
        href={href}
        className="group relative flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 card-hover overflow-hidden block"
      >
        {/* Emerald border glow on hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#059669] transition-colors duration-300 pointer-events-none" />

        {/* Background gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-emerald-gradient transition-opacity duration-300 pointer-events-none" />

        <div className="text-4xl mb-3">{flag}</div>

        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading font-bold text-[#0A2342] dark:text-slate-100 text-lg group-hover:text-[#059669] dark:group-hover:text-[#10b981] transition-colors">
            {country}
          </h3>
          <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-500 group-hover:text-[#059669] group-hover:translate-x-1 transition-all mt-0.5 shrink-0" />
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">{tagline}</p>

        <div className="mt-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#059669]/10 dark:bg-[#059669]/20 text-[#059669] dark:text-[#10b981]">
            {highlight}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
