"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  Maximize2,
  X,
  Calendar,
  GraduationCap,
  Sparkles,
  Star,
  Globe,
  MessageCircle,
  ArrowRight,
  Trophy,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface SuccessItem {
  id: string;
  title: string;
  studentName: string;
  category: "Study in Australia" | "CEFR C1 Advanced" | "Visa Success" | "South Korea Admission" | "Europe & Schengen";
  badgeText: string;
  date: string;
  destinationOrProgram: string;
  scoreOrVisaDetails: string;
  description: string;
  imageUrl: string;
  highlightMetric: string;
}

const SUCCESS_ITEMS: SuccessItem[] = [
  {
    id: "success-fusion-college-australia",
    title: "Exclusive Meet-Up: Dr. Binod Shrestha, Founder & CEO of Fusion College, Sydney 🇦🇺",
    studentName: "Dr. Binod Shrestha (Fusion College, Sydney 🇦🇺)",
    category: "Study in Australia",
    badgeText: "Australia Delegation",
    date: "Official Meet-Up",
    destinationOrProgram: "Fusion College, Sydney • Direct Australia Pathways",
    scoreOrVisaDetails: "High Visa Approval Rate • Exceptional Prospects",
    description:
      "We were privileged to host Dr. Binod Shrestha, Founder & CEO of Fusion College, Australia, for an engaging discussion on educational opportunities, strategic collaborations, and pathways to assist more Bangladeshi students in realizing their aspirations of studying in Australia. Notably, Australia is currently experiencing a high visa approval rate for Bangladeshi students — presenting an opportune moment to pursue your study abroad goals!",
    imageUrl: "/gallery/fusion-college-australia.jpg",
    highlightMetric: "Sydney, Australia 🇦🇺",
  },
  {
    id: "success-dip-saha",
    title: "British Council EnglishScore C1 Advanced (599/600)",
    studentName: "Dip Saha",
    category: "CEFR C1 Advanced",
    badgeText: "CEFR C1 Advanced",
    date: "Verified Result",
    destinationOrProgram: "EnglishScore by British Council",
    scoreOrVisaDetails: "Score: 599 • 100% Result Guarantee",
    description:
      "Congratulations to Dip Saha for achieving an extraordinary 599 score on British Council EnglishScore, validating near-perfect CEFR C1 Advanced proficiency for global admissions.",
    imageUrl: "/gallery/dip-saha-c1-599.jpg",
    highlightMetric: "599 C1 Score",
  },
  {
    id: "success-mamun",
    title: "British Council English Proficiency — C1 Advanced",
    studentName: "Mamun",
    category: "CEFR C1 Advanced",
    badgeText: "CEFR C1 Advanced",
    date: "Verified Result",
    destinationOrProgram: "Study Abroad Prerequisite",
    scoreOrVisaDetails: "Score: 497 • 100% Result & Certificate Guarantee",
    description:
      "Mamun achieved official CEFR C1 Advanced certification on British Council EnglishScore with 497 points, meeting international university criteria with COSMOVERTEX coaching.",
    imageUrl: "/gallery/mamun-c1-497.jpg",
    highlightMetric: "497 C1 Score",
  },
  {
    id: "success-sneha",
    title: "British Council EnglishScore CEFR C1 Advanced",
    studentName: "Sneha",
    category: "CEFR C1 Advanced",
    badgeText: "CEFR C1 Advanced",
    date: "Verified Result",
    destinationOrProgram: "Online & Onsite Coaching",
    scoreOrVisaDetails: "Score: 545 • 100% Result Guarantee",
    description:
      "Congratulations to Sneha for scoring a stellar 545 on British Council EnglishScore, unlocking high-level academic eligibility for English-taught degrees abroad.",
    imageUrl: "/gallery/sneha-c1-545.jpg",
    highlightMetric: "545 C1 Score",
  },
  {
    id: "success-mobarak",
    title: "British Council EnglishScore CEFR C1 Advanced",
    studentName: "Mobarak",
    category: "CEFR C1 Advanced",
    badgeText: "CEFR C1 Advanced",
    date: "Verified Result",
    destinationOrProgram: "Online & Onsite Coaching",
    scoreOrVisaDetails: "Score: 520 • 100% Result Guarantee",
    description:
      "Congratulations to Mobarak for securing an outstanding 520 score on British Council EnglishScore, verifying CEFR C1 Advanced mastery through COSMOVERTEX mentoring.",
    imageUrl: "/gallery/mobarak-c1-520.jpg",
    highlightMetric: "520 C1 Score",
  },
  {
    id: "success-mr",
    title: "British Council EnglishScore CEFR C1 Advanced",
    studentName: "Mr. Student",
    category: "CEFR C1 Advanced",
    badgeText: "CEFR C1 Advanced",
    date: "Verified Result",
    destinationOrProgram: "Online & Onsite Coaching",
    scoreOrVisaDetails: "Score: 497 • 100% Result Guarantee",
    description:
      "Successfully certified with 497 score in British Council EnglishScore C1 Advanced, satisfying visa and university direct entry English standards.",
    imageUrl: "/gallery/mr-c1-497.jpg",
    highlightMetric: "497 C1 Score",
  },
];

const CATEGORIES = [
  "All",
  "Study in Australia",
  "CEFR C1 Advanced",
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

const getCategoryStyles = (category: SuccessItem["category"]) => {
  switch (category) {
    case "Study in Australia":
      return {
        badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-400/40",
        glow: "shadow-amber-500/20",
        iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
        Icon: Globe,
      };
    case "Visa Success":
      return {
        badge: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-400/40",
        glow: "shadow-emerald-500/20",
        iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        Icon: Shield,
      };
    case "CEFR C1 Advanced":
      return {
        badge: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-400/40",
        glow: "shadow-blue-500/20",
        iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        Icon: Trophy,
      };
    case "South Korea Admission":
      return {
        badge: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-400/40",
        glow: "shadow-rose-500/20",
        iconBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
        Icon: GraduationCap,
      };
    case "Europe & Schengen":
      return {
        badge: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-400/40",
        glow: "shadow-indigo-500/20",
        iconBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
        Icon: Globe,
      };
    default:
      return {
        badge: "bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-400/40",
        glow: "shadow-slate-500/20",
        iconBg: "bg-slate-500/10 text-slate-600 dark:text-slate-400",
        Icon: Award,
      };
  }
};

export default function SuccessGallery() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [activeItem, setActiveItem] = useState<SuccessItem | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setActiveItem(null);
  }, []);

  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem, handleKeyDown]);

  const filteredItems =
    selectedCategory === "All"
      ? SUCCESS_ITEMS
      : SUCCESS_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-2 scrollbar-none gap-2 px-1">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          const count =
            cat === "All"
              ? SUCCESS_ITEMS.length
              : SUCCESS_ITEMS.filter((i) => i.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer",
                isActive
                  ? "bg-[#0A2342] dark:bg-emerald-500 text-white dark:text-slate-950 shadow-lg shadow-[#0A2342]/25 dark:shadow-emerald-500/25 scale-[1.04]"
                  : "bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 hover:shadow-md hover:scale-[1.02]"
              )}
            >
              <span>{cat}</span>
              <span
                className={cn(
                  "min-w-[22px] h-[22px] flex items-center justify-center rounded-full text-[11px] font-bold",
                  isActive
                    ? "bg-white/20 text-white dark:bg-slate-950/25 dark:text-slate-950"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredItems.map((item) => {
          const styles = getCategoryStyles(item.category);
          const { Icon } = styles;

          return (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={cn(
                "group relative flex flex-col rounded-3xl overflow-hidden",
                "bg-white dark:bg-slate-800/90",
                "border border-slate-200/80 dark:border-slate-700/60",
                "shadow-md hover:shadow-2xl",
                styles.glow,
                "hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              )}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Multi-stop gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-[11px] font-bold backdrop-blur-md border shadow-sm",
                    styles.badge
                  )}>
                    <Icon className="w-3 h-3 shrink-0" />
                    {item.badgeText}
                  </span>
                </div>

                {/* Score Pill */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-white/15 shadow-sm">
                    <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                    {item.highlightMetric}
                  </span>
                </div>

                {/* Zoom icon */}
                <div className="absolute bottom-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom text overlay */}
                <div className="absolute bottom-0 left-0 right-12 z-10 p-4">
                  <p className="font-heading font-bold text-base text-white leading-tight truncate drop-shadow-md">
                    {item.studentName}
                  </p>
                  <p className="text-xs text-white/65 truncate mt-0.5">
                    {item.destinationOrProgram}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col gap-3">
                <h3 className="font-heading font-bold text-base text-[#0A2342] dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 line-clamp-2 leading-snug transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 min-w-0">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{item.scoreOrVisaDetails}</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-[11px] font-medium text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0 transition-colors duration-200">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (() => {
        const styles = getCategoryStyles(activeItem.category);
        const { Icon } = styles;
        return (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 shadow-2xl shadow-black/60 animate-in zoom-in-95 duration-200 flex flex-col max-h-[94vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border",
                    styles.badge
                  )}>
                    <Icon className="w-3 h-3 shrink-0" />
                    {activeItem.badgeText}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {activeItem.date}
                  </span>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="ml-3 shrink-0 w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="overflow-y-auto">
                {/* Hero Image */}
                <div className="relative w-full aspect-[16/9] min-h-[220px] sm:min-h-[340px] max-h-[55vh] bg-slate-950">
                  <Image
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-contain"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                    <div className="px-4 py-2 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-white">
                      <p className="text-[11px] text-white/55 mb-0.5">Highlight</p>
                      <p className="font-bold text-sm text-amber-300">{activeItem.highlightMetric}</p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-emerald-500/80 backdrop-blur-md border border-emerald-400/30 text-white text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-white" />
                      Verified
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-7 space-y-5">
                  <div>
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">{activeItem.category}</p>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0A2342] dark:text-slate-100 leading-snug mb-1">
                      {activeItem.studentName}
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {activeItem.title}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] text-slate-400 mb-0.5">Target / Destination</p>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{activeItem.destinationOrProgram}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] text-slate-400 mb-0.5">Verified Result</p>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{activeItem.scoreOrVisaDetails}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-5 sm:px-7 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
                  Ready for similar success? Book your free consultation today.
                </p>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href="https://wa.me/8801316318387"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20bd5a] transition-all shadow-md shadow-[#25D366]/25 hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0A2342] hover:bg-[#1a3a5c] text-white text-xs font-bold transition-all shadow-md shadow-[#0A2342]/25 hover:scale-[1.02]"
                  >
                    Book Counseling
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
