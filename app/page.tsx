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

export const metadata: Metadata = {
  title: "COSMOVERTEX — English Test Prep & Study Abroad Consultancy Dhaka",
  description:
    "COSMOVERTEX — Bangladesh's #1 English proficiency test preparation center. 1,800+ successful EnglishScore, Duolingo DET, EF SET, IELTS results. Study abroad consultancy for South Korea, Europe, UK, USA & Australia. Free counseling available.",
  alternates: { canonical: "/" },
};

const services = [
  {
    id: "duolingo",
    icon: "🎯",
    name: "Duolingo English Test",
    shortName: "DET",
    badge: "Most Popular",
    badgeColor: "bg-amber-100 text-amber-700",
    description:
      "Targeted preparation for the Duolingo English Test. Mock tests, section-wise strategies, and score improvement techniques.",
    features: ["Adaptive practice sessions", "Mock DET simulations", "Score analysis", "Booking assistance"],
    color: "border-t-amber-400",
  },
  {
    id: "englishscore",
    icon: "🏅",
    name: "British Council EnglishScore",
    shortName: "C1 CEFR",
    badge: "1,800+ Results",
    badgeColor: "bg-emerald-100 text-emerald-700",
    description:
      "Bangladesh's most experienced EnglishScore prep. CEFR C1 Advanced level coaching with proven methodology.",
    features: ["CEFR framework mastery", "Speaking & pronunciation", "Grammar deep-dive", "Official score booking"],
    color: "border-t-[#059669]",
  },
  {
    id: "efset",
    icon: "🌏",
    name: "EF SET Certificate",
    shortName: "EF SET",
    badge: "South Korea Ready",
    badgeColor: "bg-blue-100 text-blue-700",
    description:
      "EF SET preparation accepted by top South Korean universities. Score C1/C2 level for university admission.",
    features: ["University-specific score targets", "Reading & listening focus", "Timed practice tests", "Certificate strategy"],
    color: "border-t-blue-400",
  },
  {
    id: "ielts-pte",
    icon: "📚",
    name: "IELTS & PTE Academic",
    shortName: "IELTS/PTE",
    badge: "UK & Australia",
    badgeColor: "bg-purple-100 text-purple-700",
    description:
      "Comprehensive IELTS and PTE coaching for university admissions in UK, Australia, and beyond.",
    features: ["4-skill integrated coaching", "Band/score targeting", "Writing correction", "Speaking practice"],
    color: "border-t-purple-400",
  },
];

const destinations = [
  {
    flag: "🇰🇷",
    country: "South Korea",
    tagline: "SNU, Yonsei, Korea University & more top-ranked universities. EF SET accepted.",
    highlight: "EF SET Accepted",
    href: "/destinations/south-korea",
  },
  {
    flag: "🇪🇺",
    country: "Europe",
    tagline: "Greece, Lithuania, Slovenia, Malta — affordable quality education in Europe.",
    highlight: "Schengen Access",
    href: "/destinations/europe",
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    tagline: "Russell Group and top UK universities. IELTS and PTE pathways available.",
    highlight: "IELTS / PTE",
    href: "/destinations/uk",
  },
  {
    flag: "🇺🇸",
    country: "United States",
    tagline: "Undergraduate and graduate programs across US universities.",
    highlight: "DET / IELTS",
    href: "/destinations/usa",
  },
  {
    flag: "🇦🇺",
    country: "Australia",
    tagline: "Group of Eight and regional universities with PTE and IELTS pathways.",
    highlight: "PTE / IELTS",
    href: "/destinations/australia",
  },
];

const offices = [
  {
    name: "Banani Office",
    partner: "Sky2Edu / CosmoVertex International",
    address: "House #38, Road #02, 1st Floor, Banani, Dhaka - 1213",
    icon: "🏢",
    phone: "+880 1316-318387",
  },
  {
    name: "Mohakhali DOHS Branch",
    partner: "Renaissance Edu Care",
    address: "House #409, Road #29, Level 5A, Mohakhali DOHS, Dhaka - 1206",
    icon: "🏫",
    phone: "+880 1346-990025",
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
              Expert coaching for <strong className="text-white">Duolingo DET</strong>,{" "}
              <strong className="text-white">EnglishScore C1</strong>,{" "}
              <strong className="text-white">EF SET</strong>, IELTS & PTE.
              Personalized pathways to{" "}
              <strong className="text-white">South Korea, Europe, UK, USA & Australia</strong>.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              From South Korean top universities to European campuses — we guide
              you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
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
              Visit Our Offices
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
