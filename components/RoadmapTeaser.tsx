"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  BrainCircuit,
  GraduationCap,
  Bot,
  CheckCircle2,
  Clock,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { cn } from "cn";
import { badgeVariants } from "@/components/ui/badge";

/* ─── Data ────────────────────────────────────────────────────── */

const phase1Features = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "AI-Powered Test Selector",
    description:
      "Smart quiz that maps your target university and country to the ideal English proficiency test.",
    badge: "Live",
    badgeClass: "bg-emerald-500 text-white border-0",
    iconBg: "bg-emerald-500/15 text-emerald-500 dark:bg-emerald-500/20",
    glow: "hover:shadow-emerald-500/20",
    border: "border-t-emerald-400",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Study Destination Explorer",
    description:
      "Interactive country guides with visa timelines, cost breakdowns, and scholarship alerts.",
    badge: "Live",
    badgeClass: "bg-emerald-500 text-white border-0",
    iconBg: "bg-emerald-500/15 text-emerald-500 dark:bg-emerald-500/20",
    glow: "hover:shadow-emerald-500/20",
    border: "border-t-emerald-400",
  },
];

const phase2Features = [
  {
    icon: <BrainCircuit className="w-5 h-5" />,
    title: "AI Eligibility Predictor",
    description:
      "Upload your academic profile and get instant AI-driven admission probability scores across 50+ universities.",
    badge: "Coming Soon Q4",
    badgeClass:
      "bg-amber-400/15 text-amber-600 border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-400 dark:border-amber-400/30",
    iconBg: "bg-amber-500/15 text-amber-500 dark:bg-amber-500/20",
    glow: "hover:shadow-amber-500/20",
    border: "border-t-amber-400",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "SOP AI Reviewer",
    description:
      "Paste your Statement of Purpose and receive real-time feedback on structure, tone, and keyword alignment.",
    badge: "Coming Soon Q4",
    badgeClass:
      "bg-amber-400/15 text-amber-600 border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-400 dark:border-amber-400/30",
    iconBg: "bg-amber-500/15 text-amber-500 dark:bg-amber-500/20",
    glow: "hover:shadow-amber-500/20",
    border: "border-t-amber-400",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "RAG Counselor Chatbot",
    description:
      "Ask anything — our retrieval-augmented AI counselor knows every university's admission criteria, deadlines, and visa rules.",
    badge: "In Development",
    badgeClass:
      "bg-violet-400/15 text-violet-600 border-violet-400/40 dark:bg-violet-400/10 dark:text-violet-400 dark:border-violet-400/30",
    iconBg: "bg-violet-500/15 text-violet-500 dark:bg-violet-500/20",
    glow: "hover:shadow-violet-500/20",
    border: "border-t-violet-400",
  },
];

/* ─── Animation Variants ──────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ─── Feature Card ────────────────────────────────────────────── */

type FeatureData = {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  badgeClass: string;
  iconBg: string;
  glow: string;
  border: string;
  isUpcoming?: boolean;
};

function FeatureCard({
  icon,
  title,
  description,
  badge,
  badgeClass,
  iconBg,
  glow,
  border,
  isUpcoming,
}: FeatureData) {
  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "group relative bg-white dark:bg-slate-800 rounded-2xl p-6",
        "border border-slate-100 dark:border-slate-700",
        "shadow-sm transition-all duration-300 overflow-hidden",
        `border-t-4 ${border}`,
        `hover:shadow-xl ${glow}`
      )}
    >
      {/* Subtle grid overlay for upcoming cards */}
      {isUpcoming && (
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(100,100,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(100,100,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      )}

      {/* Corner glow on hover */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-0 group-hover:opacity-[0.06] blur-2xl transition-opacity duration-500 pointer-events-none bg-current" />

      <div className="relative">
        {/* Icon + Badge row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
              "transition-transform duration-300 group-hover:scale-110",
              iconBg
            )}
          >
            {icon}
          </div>
          <span
            className={cn(
              badgeVariants({ variant: "outline" }),
              "text-[11px] font-semibold px-2.5 h-auto py-1 rounded-full border",
              badgeClass
            )}
          >
            {badge}
          </span>
        </div>

        <h3 className="font-heading font-bold text-[#0A2342] dark:text-slate-100 text-base leading-snug mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main Export ─────────────────────────────────────────────── */

export default function RoadmapTeaser() {
  return (
    <section className="py-24 bg-brand-slate dark:bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headingVariants}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-600 dark:text-violet-400 font-semibold text-xs uppercase tracking-wider mb-5">
            <Rocket className="w-3.5 h-3.5" />
            Platform Roadmap &amp; AI Innovations
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
            The Future of{" "}
            <span className="text-gradient-emerald">Smart Counseling</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            We&apos;re building next-generation AI tools to make your study
            abroad journey faster, smarter, and more confident than ever.
          </p>
        </motion.div>

        {/* ── Phase 1: Live Features ── */}
        <div className="mb-14">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                Phase 1 — Live Features
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
          >
            {phase1Features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </motion.div>
        </div>

        {/* ── Phase 2/3: Upcoming AI Tools ── */}
        <div className="mb-14">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25">
              <Clock className="w-4 h-4 text-amber-500" />
              <span className="text-amber-600 dark:text-amber-400 font-bold text-sm">
                Phase 2 &amp; 3 — Smart AI Tools
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
          >
            {phase2Features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} isUpcoming />
            ))}
          </motion.div>
        </div>

        {/* ── CTA Strip ── */}
        <motion.div
          className="rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="bg-gradient-to-r from-[#0A2342] via-[#0d2d4f] to-[#0f4c35] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                <BrainCircuit className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-white font-heading font-bold text-lg leading-tight">
                  Get Early Access
                </p>
                <p className="text-white/60 text-sm mt-0.5">
                  Join our waitlist and be first to experience AI-powered counseling.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/8801316318387?text=I'd%20like%20early%20access%20to%20the%20AI%20counseling%20tools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-all hover:scale-[1.03] shadow-lg shadow-emerald-500/30 shrink-0"
            >
              Join the Waitlist
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
