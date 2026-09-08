"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Briefcase,
  HeartPulse,
  Cpu,
  GraduationCap,
  Clock,
  Coins,
  CheckCircle2,
  Building2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export interface ProgramDetail {
  title: string;
  level: "Bachelor's" | "Master's" | "Bachelor's & Master's";
  duration: string;
  typicalFees: string;
  keySpecializations: string[];
  careerOutcomes: string;
  popularInstitutions: string[];
}

export interface ProgramCategory {
  id: string;
  name: string;
  icon: "tech" | "business" | "health" | "engineering";
  description: string;
  programs: ProgramDetail[];
}

interface UniversityProgramsListProps {
  destinationName: string;
  categories: ProgramCategory[];
  title?: string;
  subtitle?: string;
}

export default function UniversityProgramsList({
  destinationName,
  categories,
  title = "In-Demand Degrees & Study Programs",
  subtitle = "Explore high-demand majors offering high visa approval rates and promising post-study employment prospects.",
}: UniversityProgramsListProps) {
  const [activeTab, setActiveTab] = useState<string>(
    categories[0]?.id || "tech"
  );

  const getCategoryIcon = (iconType: string) => {
    switch (iconType) {
      case "tech":
        return <Code className="w-4 h-4" />;
      case "business":
        return <Briefcase className="w-4 h-4" />;
      case "health":
        return <HeartPulse className="w-4 h-4" />;
      case "engineering":
        return <Cpu className="w-4 h-4" />;
      default:
        return <GraduationCap className="w-4 h-4" />;
    }
  };

  const currentCategory =
    categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-semibold text-xs uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4" />
            Study Pathways in {destinationName}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0A2342] text-white shadow-lg shadow-[#0A2342]/20 dark:bg-emerald-600 dark:text-white"
                    : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-transparent"
                }`}
              >
                <span className={isActive ? "text-emerald-400" : "text-slate-400"}>
                  {getCategoryIcon(cat.icon)}
                </span>
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {currentCategory && (
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className="bg-brand-slate dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 text-sm text-slate-600 dark:text-slate-300 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <p>{currentCategory.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCategory.programs.map((prog) => (
                  <div
                    key={prog.title}
                    className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700 flex flex-col justify-between hover:shadow-xl dark:hover:shadow-emerald-950/20 transition-all duration-300 group"
                  >
                    <div>
                      {/* Level and Duration */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
                          <GraduationCap className="w-3 h-3" />
                          {prog.level}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <Clock className="w-3 h-3" />
                          {prog.duration}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-lg text-[#0A2342] dark:text-slate-100 mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {prog.title}
                      </h3>

                      {/* Tuition */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 mb-4 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                        <Coins className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="font-medium text-slate-500 dark:text-slate-400">
                          Est. Tuition:
                        </span>
                        <span className="font-bold text-[#0A2342] dark:text-slate-100">
                          {prog.typicalFees}
                        </span>
                      </div>

                      {/* Specializations */}
                      <div className="mb-4">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                          Popular Specializations:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {prog.keySpecializations.map((spec) => (
                            <span
                              key={spec}
                              className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Career Outcomes */}
                      <div className="mb-4 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>
                          <strong className="text-[#0A2342] dark:text-slate-200">
                            Career Pathway:{" "}
                          </strong>
                          {prog.careerOutcomes}
                        </span>
                      </div>

                      {/* Top Universities */}
                      <div className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2 mb-6">
                        <Building2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                        <span>
                          <strong className="text-[#0A2342] dark:text-slate-200">
                            Leading Unis:{" "}
                          </strong>
                          {prog.popularInstitutions.join(", ")}
                        </span>
                      </div>
                    </div>

                    <a
                      href="#lead-form"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#0A2342] hover:text-white dark:bg-slate-700/80 dark:hover:bg-emerald-600 text-[#0A2342] dark:text-slate-100 text-xs font-semibold transition-all duration-200"
                    >
                      Check Program Eligibility
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
