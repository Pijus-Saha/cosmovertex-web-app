import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import SuccessGallery from "@/components/SuccessGallery";
import VisaSuccessVideos from "@/components/VisaSuccessVideos";

export const metadata: Metadata = {
  title: "Student Success Stories & Proof of Excellence — COSMOVERTEX",
  description:
    "Explore genuine score cards, EnglishScore C1 credentials, Duolingo DET achievements, and Europe & South Korea visa approvals from COSMOVERTEX students in Dhaka.",
  alternates: { canonical: "/gallery" },
};

const trustMetrics = [
  {
    icon: Award,
    value: "1,800+",
    label: "English Tests Passed",
    subtext: "EnglishScore, DET & EF SET",
    color: "text-amber-400",
    bg: "bg-amber-500/20",
  },
  {
    icon: ShieldCheck,
    value: "98%",
    label: "Visa Approval Rate",
    subtext: "Schengen & South Korea",
    color: "text-emerald-400",
    bg: "bg-emerald-500/20",
  },
  {
    icon: GraduationCap,
    value: "45+",
    label: "Partner Institutions",
    subtext: "Direct university routes",
    color: "text-sky-400",
    bg: "bg-sky-500/20",
  },
  {
    icon: Users,
    value: "100%",
    label: "Genuine Mentorship",
    subtext: "Small batches of 5–8",
    color: "text-purple-400",
    bg: "bg-purple-500/20",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero Header ──────────────────────────────────── */}
      <section className="bg-hero-gradient pt-32 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
        {/* Ambient glow layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[80px]" />
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/8 rounded-full blur-[80px]" />
        </div>
        {/* Dot grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">Success Gallery</span>
          </div>

          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 backdrop-blur-md border border-white/15 text-emerald-300 text-xs font-bold mb-6 shadow-sm uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified Proof & Authentic Outcomes</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6">
              Student Success Stories &{" "}
              <span className="text-gradient-emerald">Proof of Excellence</span>
            </h1>

            <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl">
              Behind every high score and visa stamp is a personalized strategy.
              Explore real score cards, official university offer letters, and
              Schengen &amp; South Korean visas achieved by COSMOVERTEX students.
            </p>
          </div>

          {/* Trust Metric Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="group rounded-2xl p-5 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/8 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl ${metric.bg} ${metric.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className={`font-heading font-bold text-3xl sm:text-4xl ${metric.color} mb-0.5`}>
                    {metric.value}
                  </p>
                  <p className="font-semibold text-sm text-white/90 mb-0.5">
                    {metric.label}
                  </p>
                  <p className="text-[11px] text-white/45">{metric.subtext}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section divider line */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      {/* ── Visa Success Video Gallery Section ──────────────── */}
      <VisaSuccessVideos />

      {/* Section divider line */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300/60 dark:via-slate-700/60 to-transparent" />

      {/* ── Photo Gallery Grid Section ──────────────────── */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/80 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Achievements
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2342] dark:text-slate-100 mb-5 tracking-tight">
              Certificates &amp;{" "}
              <span className="text-gradient-emerald">Real Admissions</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              Click on any achievement below to inspect verified score
              breakdowns, university details, and student background stories.
            </p>
          </div>

          <SuccessGallery />
        </div>
      </section>

      {/* ── Bottom CTA Banner ───────────────────────────── */}
      <section className="relative py-24 bg-gradient-to-br from-[#06182a] via-[#0A2342] to-[#03261f] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-8">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Your Turn to Succeed
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.15]">
            Ready to start your journey? Book a free counseling session with{" "}
            <span className="text-gradient-emerald">COSMOVERTEX</span>.
          </h2>

          <p className="text-white/65 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Meet our senior mentors at our Banani office for a
            free test assessment, university shortlisting, and roadmap planning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-amber-gradient text-amber-950 font-bold text-base hover:scale-[1.03] hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300 shadow-lg shadow-amber-500/20"
            >
              Book Free Counseling
            </Link>

            <a
              href="https://wa.me/8801316318387"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#25D366]/25"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp (01316-318387)
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>

          <p className="mt-8 text-xs text-white/40 flex items-center justify-center gap-2">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            Emergency Hotline: +880 1316-318387
          </p>
        </div>
      </section>
    </>
  );
}
