"use client";

import { motion } from "framer-motion";
import { DollarSign, Calendar, Briefcase, Award } from "lucide-react";

export interface MetricItem {
  icon?: "tuition" | "intake" | "work" | "test";
  customIcon?: React.ReactNode;
  label: string;
  value: string;
  subValue: string;
  tag?: string;
}

interface KeyMetricsGridProps {
  metrics: MetricItem[];
  title?: string;
  subtitle?: string;
}

export default function KeyMetricsGrid({
  metrics,
  title = "Key Destination Overview",
  subtitle = "Everything you need to know about finances, requirements, and post-study opportunities at a glance.",
}: KeyMetricsGridProps) {
  const getIcon = (type?: string) => {
    switch (type) {
      case "tuition":
        return <DollarSign className="w-5 h-5 text-emerald-500" />;
      case "intake":
        return <Calendar className="w-5 h-5 text-amber-500" />;
      case "work":
        return <Briefcase className="w-5 h-5 text-blue-500" />;
      case "test":
        return <Award className="w-5 h-5 text-violet-500" />;
      default:
        return <Award className="w-5 h-5 text-emerald-500" />;
    }
  };

  const getBorderColor = (index: number) => {
    switch (index % 4) {
      case 0:
        return "border-t-emerald-500 group-hover:shadow-emerald-500/15";
      case 1:
        return "border-t-amber-500 group-hover:shadow-amber-500/15";
      case 2:
        return "border-t-blue-500 group-hover:shadow-blue-500/15";
      case 3:
        return "border-t-violet-500 group-hover:shadow-violet-500/15";
      default:
        return "border-t-emerald-500 group-hover:shadow-emerald-500/15";
    }
  };

  return (
    <section className="py-16 bg-brand-slate dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0A2342] dark:text-slate-100 mb-3">
              {title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {subtitle}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, index) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className={`group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 ${getBorderColor(
                index
              )} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-700/60 flex items-center justify-center shadow-inner">
                    {m.customIcon || getIcon(m.icon)}
                  </div>
                  {m.tag && (
                    <span className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
                      {m.tag}
                    </span>
                  )}
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-1">
                  {m.label}
                </div>
                <div className="font-heading font-extrabold text-2xl text-[#0A2342] dark:text-slate-100 mb-2 leading-tight">
                  {m.value}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {m.subValue}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
