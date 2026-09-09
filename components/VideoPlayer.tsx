"use client";

import { useState } from "react";
import { Play, Video, ExternalLink, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";

interface VideoPlayerProps {
  videoId?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function VideoPlayer({
  videoId = process.env.NEXT_PUBLIC_PROMO_VIDEO_ID ||
    "https://drive.google.com/file/d/1j-dp0gIaJ-G0BvI_X8SIiaETaXfwHWih/view?usp=sharing",
  title = "Experience the COSMOVERTEX Difference",
  subtitle = "Watch how our personalized coaching, small-batch mentoring, and direct university pathways help Bangladeshi students achieve their global education dreams.",
  badge = "COSMOVERTEX Promotional Video",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Helper to extract clean embed URL for YouTube, Google Drive, or raw embed URLs
  const getEmbedUrl = (idOrUrl: string) => {
    if (!idOrUrl) return "";
    const clean = idOrUrl.trim();

    // Google Drive video link
    if (clean.includes("drive.google.com")) {
      const match = clean.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
      return clean;
    }

    // YouTube URLs or IDs
    let cleanId = clean;
    if (cleanId.includes("youtube.com/watch?v=")) {
      cleanId = cleanId.split("v=")[1]?.split("&")[0] || cleanId;
    } else if (cleanId.includes("youtu.be/")) {
      cleanId = cleanId.split("youtu.be/")[1]?.split("?")[0] || cleanId;
    } else if (cleanId.includes("youtube.com/embed/")) {
      cleanId = cleanId.split("embed/")[1]?.split("?")[0] || cleanId;
    }

    if (cleanId.startsWith("http://") || cleanId.startsWith("https://")) {
      return cleanId;
    }

    return `https://www.youtube-nocookie.com/embed/${cleanId}?autoplay=1&rel=0&modestbranding=1`;
  };

  const hasVideo = Boolean(videoId && videoId.trim().length > 0);
  const embedUrl = hasVideo ? getEmbedUrl(videoId) : "";
  const isDrive = hasVideo && (videoId.includes("drive.google.com") || embedUrl.includes("drive.google.com"));

  return (
    <section className="relative py-12 md:py-16">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Video className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2342] dark:text-slate-100 tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Video Container Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-emerald-950/10 dark:shadow-black/60 p-2 sm:p-3 transition-all">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
            {hasVideo ? (
              isPlaying ? (
                <iframe
                  src={embedUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div
                  onClick={() => setIsPlaying(true)}
                  className="relative w-full h-full group cursor-pointer flex items-center justify-center bg-gradient-to-br from-[#071829] via-[#0A2342] to-[#043329]"
                >
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  {/* Glowing play button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(true);
                    }}
                    className="relative z-10 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/40 group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300"
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-white/90">
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Click to Play Showcase Video</p>
                      <p className="text-xs text-white/60">EnglishScore C1 • Duolingo DET • Study Abroad</p>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur text-xs font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      Official Video
                    </span>
                  </div>
                </div>
              )
            ) : (
              /* Fallback State when videoId is not set */
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6 sm:p-10 text-center bg-gradient-to-br from-[#061424] via-[#0A2342] to-[#02231c]">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                
                <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-5 text-emerald-400 shadow-inner">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 opacity-70 fill-emerald-500/30" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Featured Documentary Premiering Soon
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    COSMOVERTEX Official Showcase
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    Our comprehensive 2026 student achievement video & campus documentary is currently being updated with fresh graduate success stories. In the meantime, explore our verified score certificates and visa approvals below!
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="https://wa.me/8801316318387"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-[#25D366]/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Inquire on WhatsApp
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Free 1-on-1 Consultation
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Link for Google Drive video */}
        {hasVideo && isDrive && (
          <div className="mt-3 flex items-center justify-between px-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              Promotional Feature Video
            </span>
            <a
              href={
                videoId.startsWith("http")
                  ? videoId
                  : `https://drive.google.com/file/d/${videoId}/view?usp=sharing`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
            >
              <span>Watch in full Google Drive window</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
