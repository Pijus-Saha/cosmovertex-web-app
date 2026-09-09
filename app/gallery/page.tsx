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
import VideoPlayer from "@/components/VideoPlayer";
import SuccessGallery from "@/components/SuccessGallery";

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
  },
  {
    icon: ShieldCheck,
    value: "98%",
    label: "Visa Approval Rate",
    subtext: "Schengen & South Korea",
  },
  {
    icon: GraduationCap,
    value: "45+",
    label: "Partner Institutions",
    subtext: "Direct university routes",
  },
  {
    icon: Users,
    value: "100%",
    label: "Genuine Mentorship",
    subtext: "Small batches of 5–8",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-hero-gradient pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/80">Success Gallery</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-semibold mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified Proof & Authentic Outcomes</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6">
              Student Success Stories &{" "}
              <span className="text-gradient-emerald">Proof of Excellence</span>
            </h1>

            <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10">
              Behind every high score and visa stamp is a personalized strategy.
              Explore real score cards, official university offer letters, and
              Schengen &amp; South Korean visas achieved by COSMOVERTEX students.
            </p>
          </div>

          {/* Trust Metric Chips Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-white/10">
            {trustMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="rounded-2xl p-4 sm:p-5 bg-white/5 backdrop-blur-md border border-white/10 transition-all hover:bg-white/10"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="font-heading font-bold text-2xl sm:text-3xl text-white">
                    {metric.value}
                  </p>
                  <p className="font-medium text-xs sm:text-sm text-white/90">
                    {metric.label}
                  </p>
                  <p className="text-[11px] text-white/50">{metric.subtext}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded Video Showcase Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800">
        <VideoPlayer
          videoId="https://drive.google.com/file/d/1j-dp0gIaJ-G0BvI_X8SIiaETaXfwHWih/view?usp=sharing"
          title="Watch the COSMOVERTEX Journey"
          subtitle="Discover how our structured diagnostic assessments, small batches, and visa documentation audit prepare students for guaranteed success."
          badge="COSMOVERTEX Promotional Video"
        />
      </section>

      {/* Photo Gallery Grid Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
              Verified Certificates &amp; Admissions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Click on any achievement below to inspect verified score
              breakdowns, university details, and student background stories.
            </p>
          </div>

          <SuccessGallery />
        </div>
      </section>

      {/* Bottom Call to Action Banner */}
      <section className="relative py-20 bg-gradient-to-br from-[#06182a] via-[#0A2342] to-[#03261f] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Your Turn to Succeed</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to start your journey? Book a free counseling session with{" "}
            <span className="text-gradient-emerald">COSMOVERTEX</span>.
          </h2>

          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Meet our senior mentors at our Banani or Mohakhali DOHS branches for a
            free test assessment, university shortlisting, and roadmap planning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-gradient text-amber-950 font-bold text-base hover:scale-[1.02] transition-all shadow-lg shadow-amber-500/20"
            >
              Book Free Counseling
            </Link>

            <a
              href="https://wa.me/8801316318387"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base transition-all shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp (01316-318387)
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>

          <p className="mt-6 text-xs text-white/50 flex items-center justify-center gap-2">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            Emergency Hotline: +880 1316-318387 | +880 1346-990025
          </p>
        </div>
      </section>
    </>
  );
}
