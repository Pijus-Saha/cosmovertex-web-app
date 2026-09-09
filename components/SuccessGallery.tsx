"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  Filter,
  Maximize2,
  X,
  Calendar,
  Building,
  GraduationCap,
  Sparkles,
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

export default function SuccessGallery() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [activeItem, setActiveItem] = useState<SuccessItem | null>(null);

  // Close lightbox on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    },
    []
  );

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

  const getCategoryBadgeClass = (category: SuccessItem["category"]) => {
    switch (category) {
      case "Study in Australia":
        return "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30";
      case "Visa Success":
        return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30";
      case "CEFR C1 Advanced":
        return "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30";
      case "South Korea Admission":
        return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30";
      case "Europe & Schengen":
        return "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30";
      default:
        return "bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30";
    }
  };

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
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shadow-sm",
                isActive
                  ? "bg-[#0A2342] dark:bg-emerald-500 text-white dark:text-slate-950 shadow-md scale-[1.02]"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700"
              )}
            >
              <span>{cat}</span>
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-[11px] font-bold",
                  isActive
                    ? "bg-white/20 text-white dark:bg-slate-950/20 dark:text-slate-950"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            {/* Image Preview Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border shadow-sm",
                    getCategoryBadgeClass(item.category)
                  )}
                >
                  {item.badgeText}
                </span>
              </div>

              {/* Highlight Metric Pill */}
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-amber-300 text-xs font-bold border border-white/10">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  {item.highlightMetric}
                </span>
              </div>

              {/* Quick Click Hint / Zoom Icon */}
              <div className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Student Name & Program on Image Bottom */}
              <div className="absolute bottom-3 left-3 right-12 z-10 text-white">
                <p className="font-heading font-bold text-base leading-tight truncate">
                  {item.studentName}
                </p>
                <p className="text-xs text-white/80 truncate">
                  {item.destinationOrProgram}
                </p>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-lg text-[#0A2342] dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400 truncate max-w-[70%]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{item.scoreOrVisaDetails}</span>
                </div>
                <span className="text-[11px] shrink-0">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Lightbox / Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold border",
                    getCategoryBadgeClass(activeItem.category)
                  )}
                >
                  {activeItem.badgeText}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {activeItem.date}
                </span>
              </div>

              <button
                onClick={() => setActiveItem(null)}
                className="w-9 h-9 rounded-full bg-slate-200/70 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
              {/* Full Image Preview */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full min-h-[260px] sm:min-h-[380px] max-h-[60vh] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner flex items-center justify-center">
                <Image
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-3.5 py-1.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                    {activeItem.highlightMetric}
                  </div>
                </div>
              </div>

              {/* Achievement Details */}
              <div className="space-y-4">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0A2342] dark:text-slate-100 mb-1">
                    {activeItem.studentName}
                  </h2>
                  <p className="text-base text-emerald-600 dark:text-emerald-400 font-semibold">
                    {activeItem.title}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <GraduationCap className="w-4 h-4 text-emerald-500 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-400">Target / Destination</p>
                      <p className="font-medium">{activeItem.destinationOrProgram}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Award className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-400">Verified Result</p>
                      <p className="font-medium">{activeItem.scoreOrVisaDetails}</p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeItem.description}
                </p>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="px-5 sm:px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
                Ready for similar success? Book your consultation today.
              </p>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href="https://wa.me/8801316318387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition-colors"
                >
                  Chat WhatsApp
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="/contact"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                >
                  Book Free Counseling
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
