"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Play,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Volume2,
  RotateCcw,
} from "lucide-react";

export interface VisaVideo {
  id: string;
  studentName: string;
  destination: "Australia" | "United Kingdom";
  flag: string;
  category: "australia" | "uk";
  title: string;
  milestone: string;
  details: string[];
  shareUrl: string;
  canonicalVideoUrl: string;
  embedIframeUrl: string;
  viewsEstimate: string;
  badgeText: string;
  themeColor: {
    badge: string;
    glow: string;
    border: string;
    gradient: string;
  };
}

const VISA_VIDEOS: VisaVideo[] = [
  {
    id: "visa-video-alif-australia",
    studentName: "Alif",
    destination: "Australia",
    flag: "🇦🇺",
    category: "australia",
    title: "Another Student Visa Granted in Australia 🇦🇺",
    milestone: "Australian Student Visa Approved",
    details: [
      "End-to-End Documentation & Genuine Student (GS) compliance",
      "IELTS / Low IELTS flexible study options",
      "Bachelor's & Master's degree pathways",
      "Comprehensive GTE/GS statement assistance",
    ],
    shareUrl: "https://www.facebook.com/share/v/1CcGcYj2AY/",
    canonicalVideoUrl: "https://www.facebook.com/CosmoVertex/videos/1524043002129364/",
    embedIframeUrl:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCosmoVertex%2Fvideos%2F1524043002129364%2F&show_text=0&width=500",
    viewsEstimate: "2.1K+ Views",
    badgeText: "Australia Visa Stamp",
    themeColor: {
      badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
      glow: "from-emerald-500/20 to-teal-500/10",
      border: "hover:border-emerald-500/50",
      gradient: "from-emerald-600 to-teal-700",
    },
  },
  {
    id: "visa-video-maznu-uk",
    studentName: "Mr. Maznu Mia",
    destination: "United Kingdom",
    flag: "🇬🇧",
    category: "uk",
    title: "Alhamdulillah! UK Student Visa Received 🇬🇧",
    milestone: "UK Higher Education Visa Approved",
    details: [
      "Official CAS clearance & university acceptance",
      "Complete UKVI visa file audit & interview prep",
      "Seamless SOP & financial documentation guidance",
      "Graduate Route 2-year post-study work eligibility",
    ],
    shareUrl: "https://www.facebook.com/share/r/1HptW3kLFa/",
    canonicalVideoUrl: "https://www.facebook.com/CosmoVertex/videos/1070264478564492/",
    embedIframeUrl:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCosmoVertex%2Fvideos%2F1070264478564492%2F&show_text=0&width=500",
    viewsEstimate: "1K+ Views",
    badgeText: "UK Visa Milestone",
    themeColor: {
      badge: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30",
      glow: "from-blue-500/20 to-indigo-500/10",
      border: "hover:border-blue-500/50",
      gradient: "from-blue-600 to-indigo-700",
    },
  },
  {
    id: "visa-video-majidul-australia",
    studentName: "Majidul Islam Khan",
    destination: "Australia",
    flag: "🇦🇺",
    category: "australia",
    title: "Another Australian Visa Success — Advanced Diploma 🇦🇺",
    milestone: "Advanced Diploma | Australia Visa Granted",
    details: [
      "100% Personalized counseling & course mapping",
      "Transparent admission & GTE/GS processing",
      "Direct pathway into Australian vocational & degree programs",
      "Full support until departure with flight & accommodation guidance",
    ],
    shareUrl: "https://www.facebook.com/share/v/1C4vPmLXVd/",
    canonicalVideoUrl: "https://www.facebook.com/CosmoVertex/videos/3704555149679874/",
    embedIframeUrl:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCosmoVertex%2Fvideos%2F3704555149679874%2F&show_text=0&width=500",
    viewsEstimate: "Verified Video",
    badgeText: "Advanced Diploma",
    themeColor: {
      badge: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30",
      glow: "from-amber-500/20 to-orange-500/10",
      border: "hover:border-amber-500/50",
      gradient: "from-amber-600 to-orange-700",
    },
  },
];

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface VisaSuccessVideosProps {
  filterDestination?: "Australia" | "United Kingdom";
  compact?: boolean;
  customTitle?: string;
  customSubtitle?: string;
}

export default function VisaSuccessVideos({
  filterDestination,
  compact = false,
  customTitle,
  customSubtitle,
}: VisaSuccessVideosProps) {
  const [activeTab, setActiveTab] = useState<"all" | "australia" | "uk">(() => {
    if (filterDestination === "Australia") return "australia";
    if (filterDestination === "United Kingdom") return "uk";
    return "all";
  });
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const filteredVideos = VISA_VIDEOS.filter((video) => {
    if (filterDestination) {
      return video.destination === filterDestination;
    }
    if (activeTab === "all") return true;
    return video.category === activeTab;
  });

  const handlePlayToggle = (id: string) => {
    setPlayingVideoId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className={`${
        compact
          ? "py-14 sm:py-18 bg-[#071322] border-t border-b border-white/10"
          : "py-20 md:py-28 bg-gradient-to-b from-slate-900 via-[#0B1528] to-slate-900"
      } text-white relative overflow-hidden`}
    >
      {/* Background ambient decorative blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-5 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Authentic Facebook Video Proof</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            {customTitle ? (
              customTitle
            ) : filterDestination ? (
              <>
                Real {filterDestination} Visa Approvals &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                  Success Videos
                </span>
              </>
            ) : (
              <>
                Real Student Visa Approvals &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                  Celebration Videos
                </span>
              </>
            )}
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {customSubtitle ||
              (filterDestination
                ? `Watch authentic visa stamping moments and student celebrations for ${filterDestination} directly from our official Facebook community.`
                : "Witness the moments our students received their official visas for Australia and the United Kingdom. Watch their celebrations directly from our official Facebook community page.")}
          </p>

          {/* Filter Tabs (only when not filtered to a single destination) */}
          {!filterDestination && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                  activeTab === "all"
                    ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/25 font-extrabold"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                All Visa Videos ({VISA_VIDEOS.length})
              </button>
              <button
                onClick={() => setActiveTab("australia")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 border flex items-center gap-1.5 ${
                  activeTab === "australia"
                    ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/25 font-extrabold"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>🇦🇺</span> Australia Visa Stories (2)
              </button>
              <button
                onClick={() => setActiveTab("uk")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 border flex items-center gap-1.5 ${
                  activeTab === "uk"
                    ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/25 font-extrabold"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>🇬🇧</span> United Kingdom (1)
              </button>
            </div>
          )}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => {
            const isPlaying = playingVideoId === video.id;

            return (
              <div
                key={video.id}
                className={`group rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 ${video.themeColor.border}`}
              >
                {/* Video Player / Interactive Frame Area */}
                <div className="relative aspect-video w-full bg-slate-950 overflow-hidden border-b border-white/10">
                  {isPlaying ? (
                    <div className="relative w-full h-full bg-black">
                      <iframe
                        src={video.embedIframeUrl}
                        className="w-full h-full border-0"
                        title={video.title}
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        loading="lazy"
                      />
                      <button
                        onClick={() => handlePlayToggle(video.id)}
                        className="absolute top-2 right-2 z-10 px-2.5 py-1 rounded-md bg-black/70 hover:bg-black/90 text-white/80 hover:text-white text-[11px] font-medium backdrop-blur-sm border border-white/20 flex items-center gap-1 transition-all"
                        title="Close player"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Close Player</span>
                      </button>
                    </div>
                  ) : (
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-[#0E1A30] to-slate-950">
                      {/* Top badges inside video preview */}
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/10 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5">
                          <span>{video.flag}</span>
                          <span>{video.destination}</span>
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {video.viewsEstimate}
                        </span>
                      </div>

                      <div className="absolute top-3.5 right-3.5">
                        <a
                          href={video.shareUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-[#1877F2]/20 hover:bg-[#1877F2] text-white flex items-center justify-center border border-[#1877F2]/40 transition-colors"
                          title="Watch on Facebook"
                        >
                          <FacebookIcon className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Animated Play Button */}
                      <button
                        onClick={() => handlePlayToggle(video.id)}
                        className="relative group/btn my-auto flex flex-col items-center gap-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-full"
                        aria-label={`Play celebration video for ${video.studentName}`}
                      >
                        <div className="relative w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/40 transform group-hover/btn:scale-110 transition-all duration-300">
                          <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25 pointer-events-none" />
                          <Play className="w-7 h-7 fill-slate-950 ml-1" />
                        </div>
                        <span className="text-xs font-semibold text-white/90 tracking-wide group-hover/btn:text-emerald-300 transition-colors">
                          Click to Play Video
                        </span>
                      </button>

                      {/* Bottom hint */}
                      <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[11px] text-white/40">
                        <span className="flex items-center gap-1">
                          <Volume2 className="w-3 h-3" /> Audio Enabled
                        </span>
                        <span>COSMOVERTEX Official Reel</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content & Details */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Student Title & Milestone */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verified Visa Grant
                      </span>
                      <span className="text-[11px] text-white/40 font-mono">
                        {video.badgeText}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-xs font-medium text-white/60 mt-1 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                      Candidate: <strong className="text-white font-semibold">{video.studentName}</strong>
                    </p>
                  </div>

                  {/* Key Highlights Bullet points */}
                  <div className="mb-6 flex-1">
                    <p className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-2.5">
                      Process Highlights
                    </p>
                    <ul className="space-y-1.5 text-xs text-white/70">
                      {video.details.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions & Links */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-2.5">
                    {/* Direct Facebook Link */}
                    <a
                      href={video.shareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#1877F2]/15 hover:bg-[#1877F2] text-white text-xs font-bold border border-[#1877F2]/40 hover:border-[#1877F2] transition-all duration-200"
                    >
                      <FacebookIcon className="w-4 h-4 text-[#1877F2] group-hover:text-white" />
                      <span>Watch on Facebook</span>
                      <ExternalLink className="w-3 h-3 text-white/60" />
                    </a>

                    {/* WhatsApp Inquiry for this Pathway */}
                    <a
                      href={`https://wa.me/8801316318387?text=${encodeURIComponent(
                        `Hello COSMOVERTEX, I saw the ${video.destination} Visa Success video for ${video.studentName}. I would like to consult about studying in ${video.destination}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 text-xs font-bold border border-emerald-500/30 hover:border-emerald-400 transition-all duration-200"
                      title="Inquire via WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Apply Like This</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1877F2]/20 text-[#1877F2] flex items-center justify-center shrink-0 border border-[#1877F2]/30">
              <FacebookIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Follow COSMOVERTEX on Facebook for Daily Visa Updates
              </p>
              <p className="text-xs text-white/50">
                Join our active community to watch more live student visa stamping moments and university acceptance reveals.
              </p>
            </div>
          </div>
          <a
            href="https://www.facebook.com/CosmoVertex?_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold shadow-lg shadow-[#1877F2]/30 transition-all shrink-0"
          >
            <FacebookIcon className="w-4 h-4" />
            <span>Visit Facebook Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
