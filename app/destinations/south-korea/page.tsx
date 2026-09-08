import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  MessageCircle,
  CheckCircle2,
  GraduationCap,
  Globe,
  BookOpen,
  Calendar,
  Star,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Study in South Korea — EF SET, Top Universities, Admission Guide",
  description:
    "Complete guide to studying in South Korea from Bangladesh. EF SET C1 preparation, top university guide (SNU, Yonsei, Korea University, Hanyang, Kyung Hee, Sungkyunkwan), admission timeline, and free counseling.",
  alternates: { canonical: "/destinations/south-korea" },
};

const universities = [
  {
    rank: 1,
    name: "Seoul National University (SNU)",
    koreanName: "서울대학교",
    qsRank: "Top 40 Global",
    location: "Gwanak-gu, Seoul",
    efsetAccepted: true,
    minEfSet: "C1 (EF SET 56+)",
    website: "https://www.snu.ac.kr",
    highlight: "Korea's #1 University",
  },
  {
    rank: 2,
    name: "Yonsei University",
    koreanName: "연세대학교",
    qsRank: "Top 60 Global",
    location: "Seodaemun-gu, Seoul",
    efsetAccepted: true,
    minEfSet: "C1 (EF SET 54+)",
    website: "https://www.yonsei.ac.kr",
    highlight: "SKY University",
  },
  {
    rank: 3,
    name: "Korea University",
    koreanName: "고려대학교",
    qsRank: "Top 80 Global",
    location: "Seongbuk-gu, Seoul",
    efsetAccepted: true,
    minEfSet: "C1 (EF SET 54+)",
    website: "https://www.korea.ac.kr",
    highlight: "SKY University",
  },
  {
    rank: 4,
    name: "Hanyang University",
    koreanName: "한양대학교",
    qsRank: "Top 150 Global",
    location: "Seongdong-gu, Seoul",
    efsetAccepted: true,
    minEfSet: "B2+ (EF SET 51+)",
    website: "https://www.hanyang.ac.kr",
    highlight: "Top Engineering",
  },
  {
    rank: 5,
    name: "Kyung Hee University",
    koreanName: "경희대학교",
    qsRank: "Top 200 Global",
    location: "Dongdaemun-gu, Seoul",
    efsetAccepted: true,
    minEfSet: "B2+ (EF SET 48+)",
    website: "https://www.khu.ac.kr",
    highlight: "Global Campus",
  },
  {
    rank: 6,
    name: "Sungkyunkwan University",
    koreanName: "성균관대학교",
    qsRank: "Top 100 Global",
    location: "Jongno-gu, Seoul",
    efsetAccepted: true,
    minEfSet: "C1 (EF SET 54+)",
    website: "https://www.skku.edu",
    highlight: "Samsung Partnership",
  },
];

const timeline = [
  {
    month: "September–October",
    phase: "Preparation",
    tasks: [
      "Start EF SET preparation course",
      "Gather academic documents",
      "Research target universities & programs",
    ],
  },
  {
    month: "November",
    phase: "Test & Documents",
    tasks: [
      "Complete EF SET exam",
      "Obtain official score certificate",
      "Request bank statement (QR code enabled)",
    ],
  },
  {
    month: "December–January",
    phase: "Application",
    tasks: [
      "Submit university applications",
      "Apply for Korean Government Scholarship (GKS)",
      "Prepare SOP and reference letters",
    ],
  },
  {
    month: "February–March",
    phase: "Visa",
    tasks: [
      "Receive admission letter",
      "Apply for D-2 Student Visa",
      "Book flights and arrange accommodation",
    ],
  },
];

export default function SouthKoreaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          {/* Korean flag colors accent */}
          <div className="absolute top-10 right-10 text-9xl opacity-10 select-none">🇰🇷</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 w-full">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="hover:text-white transition-colors cursor-pointer">Destinations</span>
            <span>/</span>
            <span className="text-white/80">South Korea</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-5xl">🇰🇷</span>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm font-medium">
              <Globe className="w-3.5 h-3.5 text-[#F59E0B]" />
              Study Destination Guide
            </div>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-5 max-w-3xl">
            Study in{" "}
            <span className="text-gradient-emerald">South Korea</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            World-class universities, affordable tuition, and generous
            scholarships. EF SET is accepted by Korea&apos;s top institutions.
            Let us guide your journey.
          </p>
        </div>
      </section>

      {/* EF SET Explainer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#059669] font-semibold text-sm uppercase tracking-wider mb-4">
                <BookOpen className="w-4 h-4" />
                Why EF SET?
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A2342] mb-5">
                EF SET — The Smart Choice for Korean University Admissions
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The EF SET Certificate is the world&apos;s first free, standardized
                English proficiency test, mapped to the CEFR framework. An
                increasing number of top South Korean universities now accept EF
                SET C1 scores as proof of English proficiency — making it a
                cost-effective and convenient alternative to IELTS or TOEFL.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Free to take — no exam fee",
                  "Online, proctored, taken from home",
                  "Results within minutes",
                  "Accepted by SNU, Yonsei, Korea University & more",
                  "CEFR-aligned (A1 to C2 scale)",
                  "Official certificate with secure QR verification",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span className="text-slate-700 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A2342] text-white font-semibold hover:bg-[#1a3a5c] transition-colors"
              >
                View EF SET Prep Course <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats Card */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🎓", value: "6", label: "Target Universities", sub: "All accept EF SET" },
                { emoji: "💰", value: "Free", label: "EF SET Test Fee", sub: "No exam cost" },
                { emoji: "⚡", value: "~50 min", label: "Test Duration", sub: "Reading + Listening" },
                { emoji: "📜", value: "C1+", label: "Target Score", sub: "For top universities" },
              ].map((stat) => (
                <div key={stat.label} className="bg-brand-slate rounded-2xl p-6 border border-slate-100 text-center">
                  <div className="text-3xl mb-2">{stat.emoji}</div>
                  <div className="font-heading font-bold text-[#0A2342] text-2xl">{stat.value}</div>
                  <div className="text-[#059669] font-semibold text-sm">{stat.label}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* University Table */}
      <section className="py-20 bg-brand-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#059669] font-semibold text-sm uppercase tracking-wider mb-3">
              <GraduationCap className="w-4 h-4" />
              Target Universities
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A2342] mb-3">
              Top Korean Universities Accepting EF SET
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We have active admission pathways for all six of these
              institutions. Our counselors will match you with the right fit.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="px-6 py-4 text-left font-semibold">#</th>
                    <th className="px-6 py-4 text-left font-semibold">University</th>
                    <th className="px-6 py-4 text-left font-semibold hidden md:table-cell">Location</th>
                    <th className="px-6 py-4 text-left font-semibold hidden lg:table-cell">QS Rank</th>
                    <th className="px-6 py-4 text-left font-semibold">Min. EF SET</th>
                    <th className="px-6 py-4 text-left font-semibold">Highlight</th>
                    <th className="px-6 py-4 text-center font-semibold">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {universities.map((uni, i) => (
                    <tr
                      key={uni.name}
                      className={`border-t border-slate-100 hover:bg-emerald-50/50 transition-colors ${i % 2 === 0 ? "" : "bg-slate-50/50"}`}
                    >
                      <td className="px-6 py-4 text-slate-400 font-medium">{uni.rank}</td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-[#0A2342]">{uni.name}</div>
                        <div className="text-slate-400 text-xs">{uni.koreanName}</div>
                      </td>
                      <td className="px-6 py-4 text-slate-500 hidden md:table-cell">{uni.location}</td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <span className="inline-flex px-2 py-0.5 rounded-full text-xs bg-blue-100 text-blue-700 font-medium">
                          {uni.qsRank}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#059669]">
                          <CheckCircle2 className="w-3 h-3" />
                          {uni.minEfSet}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-0.5 rounded-full text-xs bg-amber-100 text-amber-700 font-medium">
                          {uni.highlight}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <a
                          href={uni.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 hover:bg-[#059669] hover:text-white transition-colors text-slate-500"
                          aria-label={`Visit ${uni.name} website`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-3 text-center">
            * EF SET requirements may vary by program and intake. Verify with official admissions office. Our counselors stay updated with the latest requirements.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#059669] font-semibold text-sm uppercase tracking-wider mb-3">
              <Calendar className="w-4 h-4" />
              Application Roadmap
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A2342]">
              Your Journey Timeline
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#059669] via-[#F59E0B] to-[#0A2342] -translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((step, i) => (
                <div
                  key={step.month}
                  className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`pl-16 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-brand-slate rounded-2xl p-6 border border-slate-100">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[#059669] uppercase tracking-wider">
                          {step.phase}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-[#0A2342] text-lg mb-3">
                        {step.month}
                      </h3>
                      <ul className="space-y-2">
                        {step.tasks.map((task) => (
                          <li key={task} className="flex items-start gap-2 text-sm text-slate-600">
                            <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B] mt-0.5 shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Step number */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-12 h-12 -translate-x-0 md:-translate-x-1/2 rounded-full bg-[#0A2342] border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </div>

                  {/* Empty spacer for alternating */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-20 bg-navy-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-[#10b981] font-semibold text-sm uppercase tracking-wider mb-4">
                <MessageCircle className="w-4 h-4" />
                Free Consultation
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Study in South Korea?
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Fill in the form and our team will contact you with a
                personalized roadmap — which university to target, which EF SET
                score you need, and exact application steps.
              </p>
              <div className="space-y-3">
                {[
                  "Free initial counseling session",
                  "University matching based on your profile",
                  "EF SET preparation plan",
                  "Scholarship and funding guidance",
                  "Visa and document support",
                ].map((p) => (
                  <div key={p} className="flex items-center gap-2.5 text-white/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                    {p}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 glass rounded-xl">
                <p className="text-white/60 text-sm mb-2">Prefer to chat directly?</p>
                <a
                  href="https://wa.me/8801316318387?text=Hi! I'm interested in studying in South Korea."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] font-semibold hover:text-green-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8">
              <LeadForm compact={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
