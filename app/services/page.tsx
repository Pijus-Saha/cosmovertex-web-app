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
} from "lucide-react";
import ServicesTabs from "@/components/ServicesTabs";

export const metadata: Metadata = {
  title: "English Test Prep Services — Duolingo DET, EnglishScore, EF SET, IELTS | COSMOVERTEX",
  description:
    "Comprehensive English proficiency test preparation in Dhaka. Crash courses, mock tests, 1-on-1 coaching, and booking support for Duolingo DET, EnglishScore C1, EF SET, IELTS & PTE. Small batches of 5–10 students.",
  alternates: { canonical: "/services" },
};

const testServices = [
  {
    id: "duolingo",
    name: "Duolingo English Test",
    shortName: "DET",
    icon: "🎯",
    badge: "Most Popular",
    badgeVariant: "default" as const,
    tagline: "Adaptive, convenient, and globally accepted",
    about:
      "The Duolingo English Test (DET) is an adaptive online exam accepted by 5,000+ universities worldwide. Our prep course covers all question types — literacy, comprehension, conversation, and production — with a focus on efficiency and consistency.",
    whatIncluded: [
      { icon: <FileText className="w-4 h-4" />, item: "Full course material covering all DET sections" },
      { icon: <BarChart3 className="w-4 h-4" />, item: "3 full mock DET simulations with detailed analysis" },
      { icon: <Mic className="w-4 h-4" />, item: "Speaking and pronunciation intensive sessions" },
      { icon: <CheckCircle2 className="w-4 h-4" />, item: "Writing correction and feedback by instructor" },
      { icon: <HeadphonesIcon className="w-4 h-4" />, item: "1-on-1 coaching sessions available" },
      { icon: <Clock className="w-4 h-4" />, item: "Exam booking assistance and slot availability support" },
    ],
    duration: "4–6 weeks (Crash: 2 weeks)",
    batchSize: "Max 8 students",
    targetScore: "110+ DET Score",
    color: "from-amber-50 to-orange-50",
    accentColor: "text-amber-600",
    borderColor: "border-amber-200",
  },
  {
    id: "englishscore",
    name: "British Council EnglishScore",
    shortName: "EnglishScore C1",
    icon: "🏅",
    badge: "1,800+ Results",
    badgeVariant: "secondary" as const,
    tagline: "CEFR C1 Advanced — Bangladesh's most experienced prep",
    about:
      "With over 1,800 successful EnglishScore results, we are Bangladesh's most experienced preparation center for the British Council EnglishScore test. Our CEFR C1 Advanced course is meticulously designed around the official test framework.",
    whatIncluded: [
      { icon: <FileText className="w-4 h-4" />, item: "CEFR framework study material (A1 to C2)" },
      { icon: <BarChart3 className="w-4 h-4" />, item: "Vocabulary and grammar for C1 proficiency" },
      { icon: <Mic className="w-4 h-4" />, item: "Speaking fluency and pronunciation coaching" },
      { icon: <CheckCircle2 className="w-4 h-4" />, item: "Reading & listening comprehension practice" },
      { icon: <HeadphonesIcon className="w-4 h-4" />, item: "Dedicated 1-on-1 mock interview sessions" },
      { icon: <Clock className="w-4 h-4" />, item: "Official score booking assistance" },
    ],
    duration: "6–8 weeks (Crash: 3 weeks)",
    batchSize: "Max 10 students",
    targetScore: "CEFR C1 Advanced",
    color: "from-emerald-50 to-teal-50",
    accentColor: "text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    id: "efset",
    name: "EF SET Certificate",
    shortName: "EF SET",
    icon: "🌏",
    badge: "South Korea Ready",
    badgeVariant: "outline" as const,
    tagline: "Accepted by top South Korean universities",
    about:
      "The EF SET Certificate is the world's first free, standardized English test — and it's now accepted by premier South Korean universities including SNU, Yonsei, Korea University, and more. Our prep course targets C1+ scoring with institution-specific guidance.",
    whatIncluded: [
      { icon: <FileText className="w-4 h-4" />, item: "University-specific score target planning (SNU, Yonsei, etc.)" },
      { icon: <BarChart3 className="w-4 h-4" />, item: "Reading comprehension speed training" },
      { icon: <Mic className="w-4 h-4" />, item: "Listening section mastery techniques" },
      { icon: <CheckCircle2 className="w-4 h-4" />, item: "Timed practice tests under exam conditions" },
      { icon: <HeadphonesIcon className="w-4 h-4" />, item: "Score interpretation and certificate strategy" },
      { icon: <Clock className="w-4 h-4" />, item: "Application integration support" },
    ],
    duration: "3–5 weeks (Crash: 10 days)",
    batchSize: "Max 8 students",
    targetScore: "EF SET C1 / C2",
    color: "from-blue-50 to-indigo-50",
    accentColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    id: "ielts-pte",
    name: "IELTS & PTE Academic",
    shortName: "IELTS / PTE",
    icon: "📚",
    badge: "UK & Australia",
    badgeVariant: "outline" as const,
    tagline: "Globally recognized — gateway to UK, Australia & beyond",
    about:
      "Our IELTS and PTE coaching integrates all four skills — Reading, Writing, Listening, and Speaking — with a targeted band/score improvement methodology. Ideal for students applying to UK, Australian, and European universities.",
    whatIncluded: [
      { icon: <FileText className="w-4 h-4" />, item: "Complete 4-skill integrated course material" },
      { icon: <BarChart3 className="w-4 h-4" />, item: "Weekly full-length mock tests with band scoring" },
      { icon: <Mic className="w-4 h-4" />, item: "IELTS Speaking Part 1, 2, 3 intensive coaching" },
      { icon: <CheckCircle2 className="w-4 h-4" />, item: "Task 1 & Task 2 writing correction service" },
      { icon: <HeadphonesIcon className="w-4 h-4" />, item: "PTE AI scoring familiarization module" },
      { icon: <Clock className="w-4 h-4" />, item: "Exam slot booking and rescheduling support" },
    ],
    duration: "8–12 weeks (Crash: 4 weeks)",
    batchSize: "Max 10 students",
    targetScore: "IELTS 6.5+ / PTE 58+",
    color: "from-purple-50 to-violet-50",
    accentColor: "text-purple-600",
    borderColor: "border-purple-200",
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
            English Proficiency Test Preparation
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-5 max-w-3xl">
            Expert Test Prep for{" "}
            <span className="text-gradient-emerald">Every Pathway</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            Whether you&apos;re targeting Duolingo DET, EnglishScore C1, EF SET,
            IELTS or PTE — we have specialized coaching programs with small
            batches and personalized attention.
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

      {/* Why Small Batches */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0A2342] text-3xl mb-6">
            👥
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
            Why We Keep Batches Small (5–10 Students)
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
            Large classrooms mean less attention. At COSMOVERTEX, we cap every
            batch at 5–10 students — so every student gets personalized
            feedback, a custom improvement plan, and direct mentor access.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Personalized Feedback",
                desc: "Your instructor knows your specific weaknesses and tracks your improvement week by week.",
                emoji: "🎯",
              },
              {
                title: "Flexible Scheduling",
                desc: "Small batches allow for flexible class times, makeup sessions, and personalized pacing.",
                emoji: "📅",
              },
              {
                title: "Peer Learning",
                desc: "Learn alongside a small, motivated cohort of students with similar goals and timelines.",
                emoji: "🤝",
              },
            ].map((item) => (
              <div key={item.title} className="bg-brand-slate dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
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
