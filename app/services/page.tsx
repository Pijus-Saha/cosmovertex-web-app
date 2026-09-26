import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Mic,
  FileText,
  BarChart3,
  HeadphonesIcon,
  Clock,
  Globe2,
  Sparkles,
} from "lucide-react";
import ServicesTabs, { TestService } from "@/components/ServicesTabs";

export const metadata: Metadata = {
  title: "English Proficiency Coaching & Global Study Pathways",
  description:
    "Expert English proficiency coaching for Duolingo DET, CEFR C1 Advanced – EnglishScore Core Skills Test, EF SET, IELTS, and PTE. Personalized study-abroad pathways to USA, UK, Canada, Australia, New Zealand, South Korea, Malaysia, and Europe.",
  alternates: { canonical: "/services" },
};

const testServices: TestService[] = [
  {
    id: "duolingo",
    name: "Duolingo English Test (DET)",
    shortName: "DET",
    icon: "🎯",
    badge: "110+ Score Focus",
    badgeVariant: "default",
    tagline: "Adaptive, convenient, and accepted by 5,000+ universities worldwide",
    about:
      "The Duolingo English Test (DET) is an adaptive computer-based exam accepted by thousands of universities across the USA, UK, Canada, and Europe. Our prep course covers all question types — literacy, comprehension, conversation, and production — with proven test strategies.",
    whatIncluded: [
      { icon: <FileText className="w-4 h-4" />, item: "Comprehensive course curriculum covering all DET subscores" },
      { icon: <BarChart3 className="w-4 h-4" />, item: "Full computer mock DET simulations with instant diagnostic breakdown" },
      { icon: <Mic className="w-4 h-4" />, item: "Speaking fluency, pronunciation, and video interview preparation" },
      { icon: <CheckCircle2 className="w-4 h-4" />, item: "Writing correction and grammar feedback by expert instructors" },
      { icon: <HeadphonesIcon className="w-4 h-4" />, item: "Interactive listening drills and dictation mastery" },
      { icon: <Clock className="w-4 h-4" />, item: "Exam registration guidance and test-day setup support" },
    ],
    duration: "4–6 weeks (Crash: 2 weeks)",
    batchSize: "Max 8 students",
    targetScore: "110–135+ DET Score",
    color: "from-amber-50 to-orange-50",
    accentColor: "text-amber-600",
    borderColor: "border-amber-200",
  },
  {
    id: "englishscore",
    name: "CEFR C1 Advanced – EnglishScore Core Skills Test",
    shortName: "EnglishScore C1",
    icon: "🏅",
    badge: "1,800+ Results",
    badgeVariant: "secondary",
    tagline: "British Council verified CEFR C1 certification for international admissions",
    about:
      "With over 1,800 successful EnglishScore results, COSMOVERTEX is Bangladesh's most proven preparation center for the British Council EnglishScore Core Skills Test. We guide students to the coveted CEFR C1 Advanced bracket required by European and partner institutions.",
    whatIncluded: [
      { icon: <FileText className="w-4 h-4" />, item: "Official British Council CEFR framework curriculum (A1 to C2)" },
      { icon: <BarChart3 className="w-4 h-4" />, item: "Advanced academic vocabulary and grammar structures for C1 level" },
      { icon: <Mic className="w-4 h-4" />, item: "Pronunciation refinement and high-scoring speaking mock sessions" },
      { icon: <CheckCircle2 className="w-4 h-4" />, item: "Reading comprehension speed and analytical listening exercises" },
      { icon: <HeadphonesIcon className="w-4 h-4" />, item: "1-on-1 performance evaluation and diagnostic feedback" },
      { icon: <Clock className="w-4 h-4" />, item: "Official score verification and institutional certificate submission" },
    ],
    duration: "6–8 weeks (Crash: 3 weeks)",
    batchSize: "Max 10 students",
    targetScore: "CEFR C1 Advanced (500+)",
    color: "from-emerald-50 to-teal-50",
    accentColor: "text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    id: "efset",
    name: "EF SET Certificate",
    shortName: "EF SET",
    icon: "🌏",
    badge: "South Korea & EU Ready",
    badgeVariant: "outline",
    tagline: "Fast-track certification accepted by leading South Korean & European universities",
    about:
      "The EF Standard English Test (EF SET) is widely accepted by premier South Korean institutions (SNU, Yonsei, Korea University, Hanyang) and European universities. Our specialized course targets C1/C2 proficiency scores with speed-reading and precision-listening techniques.",
    whatIncluded: [
      { icon: <FileText className="w-4 h-4" />, item: "University-specific score targeting (SNU, Yonsei, Korea University)" },
      { icon: <BarChart3 className="w-4 h-4" />, item: "Academic reading comprehension and rapid scanning techniques" },
      { icon: <Mic className="w-4 h-4" />, item: "Complex audio listening and lecture note-taking strategies" },
      { icon: <CheckCircle2 className="w-4 h-4" />, item: "Full timed practice exams replicating live EF SET test conditions" },
      { icon: <HeadphonesIcon className="w-4 h-4" />, item: "Personalized error log review and weak area reinforcement" },
      { icon: <Clock className="w-4 h-4" />, item: "Certificate generation and direct university portal submission" },
    ],
    duration: "3–5 weeks (Crash: 10 days)",
    batchSize: "Max 8 students",
    targetScore: "EF SET 71+ (CEFR C1/C2)",
    color: "from-blue-50 to-indigo-50",
    accentColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    id: "ielts",
    name: "IELTS Academic",
    shortName: "IELTS",
    icon: "📚",
    badge: "Band 7.0+ Target",
    badgeVariant: "outline",
    tagline: "Premier gateway to top universities across the UK, Australia, Canada, USA & NZ",
    about:
      "Our IELTS Academic coaching program integrates intensive practice across all 4 modules — Listening, Reading, Writing, and Speaking. We focus on academic lexical resource, Task 1 & 2 essay architecture, and fluent speaking delivery.",
    whatIncluded: [
      { icon: <FileText className="w-4 h-4" />, item: "Complete Cambridge IELTS authentic practice materials and guides" },
      { icon: <BarChart3 className="w-4 h-4" />, item: "Weekly full-length mock tests with certified examiner-level band scoring" },
      { icon: <Mic className="w-4 h-4" />, item: "1-on-1 IELTS Speaking interviews (Part 1, 2, 3) with recorded feedback" },
      { icon: <CheckCircle2 className="w-4 h-4" />, item: "Task 1 report writing and Task 2 opinion/argumentative essay corrections" },
      { icon: <HeadphonesIcon className="w-4 h-4" />, item: "Listening accent familiarization (British, Australian, American)" },
      { icon: <Clock className="w-4 h-4" />, item: "Official British Council / IDP test date booking support" },
    ],
    duration: "8–12 weeks (Crash: 4 weeks)",
    batchSize: "Max 10 students",
    targetScore: "IELTS Band 6.5 – 7.5+",
    color: "from-purple-50 to-violet-50",
    accentColor: "text-purple-600",
    borderColor: "border-purple-200",
  },
  {
    id: "pte",
    name: "PTE Academic",
    shortName: "PTE",
    icon: "⚡",
    badge: "Fast AI Results",
    badgeVariant: "default",
    tagline: "Computer-delivered exam with fast results accepted in Australia, UK, Canada & USA",
    about:
      "PTE Academic is known for its fast AI-based scoring and high acceptance for study visas in Australia, the UK, New Zealand, and Canada. We teach proven template strategies, speaking oral fluency techniques, and repeat sentence precision.",
    whatIncluded: [
      { icon: <FileText className="w-4 h-4" />, item: "Mastery of all 20 PTE task formats with official Pearson mock software" },
      { icon: <BarChart3 className="w-4 h-4" />, item: "PTE AI algorithm scoring hacks for maximum pronunciation and fluency points" },
      { icon: <Mic className="w-4 h-4" />, item: "Describe Image and Retell Lecture bulletproof templates" },
      { icon: <CheckCircle2 className="w-4 h-4" />, item: "Write Essay and Summarize Written Text scoring structures" },
      { icon: <HeadphonesIcon className="w-4 h-4" />, item: "Repeat Sentence and Write from Dictation daily drills" },
      { icon: <Clock className="w-4 h-4" />, item: "Pearson test center slot availability and booking support" },
    ],
    duration: "4–8 weeks (Crash: 2 weeks)",
    batchSize: "Max 8 students",
    targetScore: "PTE 65 – 79+ (Band 7.0–8.0 Equivalent)",
    color: "from-rose-50 to-pink-50",
    accentColor: "text-rose-600",
    borderColor: "border-rose-200",
  },
];

const pathwayDestinations = [
  {
    name: "United States",
    flag: "🇺🇸",
    href: "/destinations/usa",
    desc: "Top research universities, merit aid, up to 3 years STEM OPT work rights, and F-1 visa preparation.",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    href: "/destinations/uk",
    desc: "1-year Master's, Russell Group universities, and 2-year Graduate Route Post-Study Work (PSW).",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    href: "/destinations/canada",
    desc: "Top DLIs, paid co-op internships, up to 3-year PGWP, and clear PR pathways under Express Entry.",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    href: "/destinations/australia",
    desc: "Group of Eight and regional universities with high wages and extended post-study work visas.",
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    href: "/destinations/new-zealand",
    desc: "All 8 public universities in global top 3%, up to 3-year open work visa, and Green List pathways.",
  },
  {
    name: "South Korea",
    flag: "🇰🇷",
    href: "/destinations/south-korea",
    desc: "SKY Universities (SNU, Yonsei, KU), low tuition ($3k–$8k/yr), EF SET accepted, and GKS scholarships.",
  },
  {
    name: "Malaysia & Pathway Programs",
    flag: "🇲🇾",
    href: "/destinations/malaysia",
    desc: "Direct foreign branch campuses or Malaysia Pathway Programs (1+3, 2+2) transferring to USA, UK, Canada & Australia.",
  },
  {
    name: "Europe (Schengen)",
    flag: "🇪🇺",
    href: "/destinations/europe",
    desc: "Affordable tuition in Lithuania, Slovenia, Greece, Hungary, Sweden, Finland & Italy with 29-nation Schengen mobility.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Services</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm font-medium mb-6">
            <BookOpen className="w-3.5 h-3.5 text-[#F59E0B]" />
            English Proficiency Coaching &amp; Study-Abroad Pathways
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-5 max-w-3xl">
            Expert Coaching &amp;{" "}
            <span className="text-gradient-emerald">Global Pathways</span>
          </h1>
          <p className="text-white/75 text-xl max-w-2xl leading-relaxed">
            Personalized study-abroad pathways to the <strong>USA, UK, Canada, Australia, New Zealand, South Korea, Malaysia</strong> (including <strong>Malaysia Pathway Programs</strong>), and <strong>Europe</strong>. Expert English proficiency coaching for <strong>DET, CEFR C1 EnglishScore, EF SET, IELTS &amp; PTE</strong>.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <Suspense
        fallback={
          <div
            id="services-tabs"
            className="py-20 bg-brand-slate dark:bg-slate-900 min-h-[500px]"
          />
        }
      >
        <ServicesTabs services={testServices} />
      </Suspense>

      {/* ── Global Study Abroad Pathways & Malaysia Pathway Programs Section ── */}
      <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-3">
              <Globe2 className="w-3.5 h-3.5" />
              Global Study-Abroad Advisory
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
              Personalized Study-Abroad Pathways
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              We provide tailored admission, scholarship, and visa pathways across the USA, UK, Canada, Australia, New Zealand, South Korea, Malaysia, and Europe — including Lithuania, Slovenia, Greece, Hungary, Sweden, Finland, and Italy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pathwayDestinations.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group bg-brand-slate dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {p.flag}
                  </div>
                  <h3 className="font-heading font-bold text-[#0A2342] dark:text-slate-100 text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:gap-2 transition-all">
                  Explore Pathway <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>

          {/* Malaysia Pathway Highlight Banner */}
          <div className="bg-gradient-to-r from-[#0A2342] via-[#0d3159] to-[#0A2342] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  Cost-Effective International Degree Transfer
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                  Malaysia Pathway Programs to USA, UK, Canada &amp; Australia
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Start your degree at a world-class institution in Malaysia (or foreign branch campus like Monash or Nottingham) at a fraction of Western costs, then seamlessly transfer your credits to partner universities in the <strong>USA, UK, Canada, or Australia</strong> to graduate with their recognized international degree!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  href="/destinations/malaysia"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-gradient text-amber-950 font-bold text-sm hover:scale-[1.02] transition-transform shadow-lg"
                >
                  Learn About Malaysia Pathways <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
                >
                  Book Free Pathway Counseling
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Small Batches */}
      <section className="py-20 bg-brand-slate dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0A2342] text-3xl mb-6">
            👥
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
            Why We Keep Batches Small (5–10 Students)
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
            Large classrooms mean less individual attention. At COSMOVERTEX, we cap every
            batch at 5–10 students — ensuring each student receives personalized feedback,
            a tailored study roadmap, and direct access to senior mentors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Personalized Feedback",
                desc: "Your instructor identifies your exact score-plateaus and designs custom drills to boost weak subscores.",
                emoji: "🎯",
              },
              {
                title: "Flexible Scheduling",
                desc: "Small cohorts enable convenient evening or weekend schedules, makeup classes, and targeted mock test drills.",
                emoji: "📅",
              },
              {
                title: "Peer Motivation",
                desc: "Learn with a dedicated peer group aiming for similar international test score brackets and universities.",
                emoji: "🤝",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-heading font-bold text-[#0A2342] dark:text-slate-100 mb-2">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-gradient text-amber-900 font-bold hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-amber-500/20"
            >
              Start Your Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
