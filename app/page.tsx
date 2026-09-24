import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Globe,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Zap,
  Users,
  Clock,
  ChevronDown,
  Newspaper,
  Info,
} from "lucide-react";
import StatsBanner from "@/components/StatsBanner";
import DestinationCard from "@/components/DestinationCard";
import RoadmapTeaser from "@/components/RoadmapTeaser";
import VisaSuccessVideos from "@/components/VisaSuccessVideos";

export const metadata: Metadata = {
  title: "COSMOVERTEX — English Test Prep & Study Abroad Consultancy Dhaka",
  description:
    "COSMOVERTEX — Personalized study-abroad pathways to the USA, UK, Canada, Australia, New Zealand, South Korea, Malaysia (including Malaysia Pathway Programs), and Europe (Lithuania, Slovenia, Greece, Hungary, Sweden, Finland, Italy). Expert coaching for Duolingo English Test (DET), CEFR C1 Advanced – EnglishScore Core Skills Test, EF SET, IELTS, and PTE.",
  alternates: { canonical: "/" },
};

const services = [
  {
    id: "duolingo",
    icon: "🎯",
    name: "Duolingo English Test (DET)",
    shortName: "DET",
    badge: "110+ Score Focus",
    badgeColor: "bg-amber-100 text-amber-700",
    description:
      "Targeted preparation for the Duolingo English Test. Adaptive simulations, section-wise strategies, and score improvement techniques.",
    features: ["Adaptive question mastery", "Mock DET simulations", "Speaking & literacy analysis", "Booking assistance"],
    color: "border-t-amber-400",
  },
  {
    id: "englishscore",
    icon: "🏅",
    name: "CEFR C1 Advanced – EnglishScore Core Skills Test",
    shortName: "EnglishScore C1",
    badge: "1,800+ Results",
    badgeColor: "bg-emerald-100 text-emerald-700",
    description:
      "Bangladesh's most experienced EnglishScore prep. British Council CEFR C1 Advanced coaching with verified track records.",
    features: ["CEFR framework mastery", "Speaking & pronunciation", "Grammar deep-dive", "Official score booking"],
    color: "border-t-[#059669]",
  },
  {
    id: "efset",
    icon: "🌏",
    name: "EF SET Certificate",
    shortName: "EF SET",
    badge: "South Korea & EU Ready",
    badgeColor: "bg-blue-100 text-blue-700",
    description:
      "EF SET preparation accepted by top South Korean universities and European institutions. Score C1/C2 level for university admission.",
    features: ["University-specific score targets", "Reading & listening speed", "Timed practice tests", "Certificate strategy"],
    color: "border-t-blue-400",
  },
  {
    id: "ielts",
    icon: "📚",
    name: "IELTS Academic",
    shortName: "IELTS",
    badge: "Band 7.0+ Target",
    badgeColor: "bg-purple-100 text-purple-700",
    description:
      "Rigorous 4-skill preparation for IELTS Academic. Ideal for top universities in the UK, Australia, Canada, and the USA.",
    features: ["4-skill integrated coaching", "Band 7.0+ targeting", "Task 1 & 2 writing correction", "Speaking mock interviews"],
    color: "border-t-purple-400",
  },
  {
    id: "pte",
    icon: "⚡",
    name: "PTE Academic",
    shortName: "PTE",
    badge: "Fast AI Scoring",
    badgeColor: "bg-rose-100 text-rose-700",
    description:
      "Comprehensive PTE Academic coaching with AI scoring algorithms, speaking templates, and fast-turnaround result strategies.",
    features: ["PTE AI scoring tricks", "Fluency & pronunciation drill", "Full computer mock tests", "Australia/UK visa ready"],
    color: "border-t-rose-400",
  },
];

const destinations = [
  {
    flag: "🇺🇸",
    country: "United States",
    tagline: "Top universities, STEM OPT up to 3 years, and merit scholarships. DET & IELTS accepted.",
    highlight: "STEM OPT / DET",
    href: "/destinations/usa",
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    tagline: "Russell Group and top UK universities with 2-year Graduate Route PSW. Fast admissions.",
    highlight: "1-Yr Masters / PSW",
    href: "/destinations/uk",
  },
  {
    flag: "🇨🇦",
    country: "Canada",
    tagline: "Top DLI colleges and universities, up to 3-year PGWP, and clear permanent residency pathways.",
    highlight: "PGWP / PR Pathways",
    href: "/destinations/canada",
  },
  {
    flag: "🇦🇺",
    country: "Australia",
    tagline: "Group of Eight and regional universities with extended post-study work rights and PTE/IELTS.",
    highlight: "PTE / Regional PSW",
    href: "/destinations/australia",
  },
  {
    flag: "🇳🇿",
    country: "New Zealand",
    tagline: "Globally ranked institutions, up to 3 years Post-Study Work Visa, and Straight-to-Residence pathways.",
    highlight: "3-Yr Post-Study Work",
    href: "/destinations/new-zealand",
  },
  {
    flag: "🇰🇷",
    country: "South Korea",
    tagline: "SKY universities (SNU, Yonsei, KU) with affordable tuition ($3k–$8k/yr) and EF SET acceptance.",
    highlight: "EF SET / Affordable",
    href: "/destinations/south-korea",
  },
  {
    flag: "🇲🇾",
    country: "Malaysia & Pathways",
    tagline: "Direct degrees & Malaysia Pathway Programs leading to USA, UK, Canada, and Australia!",
    highlight: "US/UK/CA/AU Transfer",
    href: "/destinations/malaysia",
  },
  {
    flag: "🇪🇺",
    country: "Europe (Schengen)",
    tagline: "Lithuania, Slovenia, Greece, Hungary, Sweden, Finland & Italy with 29-nation Schengen mobility.",
    highlight: "Lithuania to Sweden",
    href: "/destinations/europe",
  },
];

const offices = [
  {
    name: "Banani Office",
    partner: "COSMOVERTEX INTERNATIONAL CONSULTANCY",
    address: "House #38, Road #02, 1st Floor, Banani, Dhaka - 1213",
    icon: "🏢",
    phone: "+880 1316-318387",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-3/4 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm font-medium mb-8">
              <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
              Bangladesh&apos;s #1 English Proficiency Test Prep Center — COSMOVERTEX
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
              Your Gateway to{" "}
              <span className="text-gradient-emerald">Global Education</span>
              <br />
              Starts Here.
            </h1>

            {/* Sub-headline */}
            <p className="text-xl text-white/70 leading-relaxed mb-4 max-w-2xl">
              Personalized study-abroad pathways to the{" "}
              <strong className="text-white">USA, UK, Canada, Australia, New Zealand, South Korea, Malaysia</strong> (including Malaysia Pathway Programs), and{" "}
              <strong className="text-white">Europe</strong> (Lithuania, Slovenia, Greece, Hungary, Sweden, Finland &amp; Italy).
              Expert coaching for <strong className="text-white">Duolingo DET</strong>,{" "}
              <strong className="text-white">CEFR C1 Advanced – EnglishScore</strong>,{" "}
              <strong className="text-white">EF SET</strong>, <strong className="text-white">IELTS</strong>, and <strong className="text-white">PTE</strong>.
            </p>

            {/* Trust signal */}
            <p className="text-sm text-[#10b981] font-medium mb-10 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              1,800+ successful test results · Max 10 students/batch · 4+ years experience
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-amber-gradient text-amber-900 font-bold text-base hover:opacity-90 hover:scale-[1.03] transition-all shadow-xl shadow-amber-500/25"
              >
                Book Free Counseling
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/8801316318387"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass text-white font-semibold text-base hover:bg-white/15 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs">
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* ── Stats Banner ──────────────────────────────────────── */}
      <StatsBanner />

      {/* ── Services Grid ─────────────────────────────────────── */}
      <section id="services" className="py-24 bg-brand-slate dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#059669] font-semibold text-sm uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4" />
              Our Courses
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
              Test Prep That Gets Results
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Specialized coaching for every major English proficiency test.
              Small batches. Personalized attention. Proven outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={`group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border-t-4 ${service.color} shadow-sm card-hover border border-slate-100 dark:border-slate-700`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-heading font-bold text-[#0A2342] dark:text-slate-100 text-base leading-snug">
                    {service.name}
                  </h3>
                </div>
                <span className={`inline-flex text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${service.badgeColor}`}>
                  {service.badge}
                </span>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services?tab=${service.id}`}
                  className="inline-flex items-center gap-1 text-sm text-[#059669] font-semibold hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#059669] text-[#059669] font-semibold hover:bg-[#059669] hover:text-white transition-all"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <hr className="section-divider" />

      {/* ── Destination Explorer ───────────────────────────────── */}
      <section id="destinations" className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#059669] font-semibold text-sm uppercase tracking-wider mb-3">
              <Globe className="w-4 h-4" />
              Study Destinations
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
              Where Will You Study?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Personalized pathways to the USA, UK, Canada, Australia, New Zealand,
              South Korea, Malaysia (including Malaysia Pathway Programs), and Europe — guided every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, i) => (
              <DestinationCard key={dest.country} {...dest} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      <section className="py-24 bg-navy-gradient overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Why Students Choose{" "}
              <span className="text-gradient-emerald">COSMOVERTEX</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              We don&apos;t just teach — we mentor, guide, and celebrate every
              result with our students.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Small Batch Focus",
                desc: "Maximum 5–10 students per batch. Every student gets personalized attention, feedback, and a study plan.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Proven Outcomes",
                desc: "Over 1,800 successful EnglishScore results. Our students consistently achieve C1 and above.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "4+ Years Experience",
                desc: "Established since 2020. Deep expertise in every test format and university admission requirements.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-8 text-center group hover:bg-white/12 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-gradient mx-auto mb-5 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Real Student Visa Approvals & Celebration Videos ── */}
      <VisaSuccessVideos />

      {/* ── News & Updates ────────────────────────────────────── */}
      <section className="py-20 bg-brand-slate dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-5 h-5 text-[#059669]" />
            <h2 className="font-heading text-2xl font-bold text-[#0A2342] dark:text-slate-100">
              News &amp; Updates
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* News Card 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 card-hover shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 shrink-0">
                  🏦 Banking Update
                </span>
                <span className="text-xs text-slate-400">September 2025</span>
              </div>
              <h3 className="font-heading font-bold text-[#0A2342] dark:text-slate-100 text-lg mb-2">
                Bangladesh Bank QR Code Bank Statement Requirement
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Bangladesh Bank has introduced a new QR code verification
                system for bank statements submitted with visa applications.
                All students applying for study visas must ensure their bank
                statements include the new QR code for authenticity
                verification. Contact our team to understand how this affects
                your application.
              </p>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900">
                <Info className="w-4 h-4 text-blue-500 shrink-0" />
                <p className="text-xs text-blue-700 dark:text-blue-400">
                  <strong>Action required:</strong> Request QR-enabled
                  statements from your bank at least 2 weeks before submission.
                </p>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 card-hover shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 shrink-0">
                  🇰🇷 South Korea
                </span>
                <span className="text-xs text-slate-400">Upcoming Intake</span>
              </div>
              <h3 className="font-heading font-bold text-[#0A2342] dark:text-slate-100 text-lg mb-2">
                Spring Intake Now Open — South Korean Universities
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Applications for the upcoming Spring intake are now open at Seoul
                National University, Yonsei, Korea University, Hanyang, Kyung
                Hee, and Sungkyunkwan University. EF SET C1 scores are accepted
                by these institutions. Early applicants get priority processing.
              </p>
              <Link
                href="/destinations/south-korea"
                className="inline-flex items-center gap-1.5 text-sm text-[#059669] font-semibold hover:gap-2.5 transition-all"
              >
                Learn about South Korea admissions{" "}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Office Locations ──────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#059669] font-semibold text-sm uppercase tracking-wider mb-3">
              <MapPin className="w-4 h-4" />
              Find Us
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-slate-100">
              Visit Our Office
            </h2>
          </div>
          <div className="max-w-xl mx-auto">
            {offices.map((office) => (
              <div
                key={office.name}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 card-hover shadow-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-gradient" />
                <div className="text-4xl mb-4">{office.icon}</div>
                <h3 className="font-heading font-bold text-[#0A2342] dark:text-slate-100 text-xl mb-1">
                  {office.name}
                </h3>
                <p className="text-[#059669] text-sm font-semibold mb-4">
                  {office.partner}
                </p>
                <div className="flex gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {office.address}
                  </p>
                </div>
                <div className="flex gap-2 mb-5">
                  <Phone className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <a
                    href={`tel:${office.phone.replace(/[\s-]/g, "")}`}
                    className="text-slate-600 dark:text-slate-400 text-sm hover:text-[#059669] transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
                <a
                  href={`https://wa.me/8801316318387?text=Hello, I'd like to visit the ${office.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#25D366] font-semibold hover:text-green-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Directions via WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Roadmap & AI Innovations ───────────────── */}
      <RoadmapTeaser />

      {/* ── Final CTA Band ────────────────────────────────────── */}
      <section className="py-20 bg-emerald-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            Book a free 30-minute counseling session. No commitment — just
            expert guidance on the best test and destination for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#059669] font-bold text-base hover:shadow-xl hover:scale-[1.03] transition-all shadow-lg"
            >
              Book Free Counseling <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/8801316318387"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/20 text-white font-semibold text-base hover:bg-white/30 transition-all border border-white/30"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> +880 1316-318387
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> info@cosmovertex.com
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
