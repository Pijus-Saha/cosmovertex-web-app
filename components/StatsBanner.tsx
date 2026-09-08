"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Start at 0, animate to target when element enters viewport
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const stats: StatItemProps[] = [
  {
    value: 1800,
    suffix: "+",
    label: "Successful Tests",
    description: "EnglishScore & DET results delivered",
    icon: "🏆",
  },
  {
    value: 4,
    suffix: "+",
    label: "Years Experience",
    description: "Trusted study abroad consultancy",
    icon: "📅",
  },
  {
    value: 10,
    suffix: " Max",
    label: "Students Per Batch",
    description: "Small groups for individual focus",
    icon: "👥",
  },
];

export default function StatsBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-navy-gradient py-16">
        {/* Decorative gradient blobs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-1">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#10b981] font-semibold text-lg mb-1">
                  {stat.label}
                </div>
                <div className="text-white/50 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
