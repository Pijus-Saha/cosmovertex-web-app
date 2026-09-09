"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Calendar,
  Award,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Clock,
  Coins,
  Globe2,
} from "lucide-react";

export interface QuickFact {
  label: "Average Tuition Fees" | "Top Intakes" | "Accepted English Tests" | "Post-Study Work Rights" | string;
  value: string;
  subtext?: string;
  tag?: string;
  icon?: "tuition" | "intake" | "test" | "work";
}

export interface HighlightItem {
  title: string;
  description: string;
  badge?: string;
}

interface DestinationSimpleLayoutProps {
  destinationName: string;
  countryCode?: string;
  flag: string;
  tagline: string;
  badgeText?: string;
  quickFacts: QuickFact[];
  highlights: HighlightItem[];
  intakeOptions?: string[];
  defaultIntake?: string;
}

const getFactIcon = (type?: string) => {
  switch (type) {
    case "tuition":
      return <Coins className="w-5 h-5 text-emerald-500" />;
    case "intake":
      return <Calendar className="w-5 h-5 text-blue-500" />;
    case "test":
      return <Award className="w-5 h-5 text-amber-500" />;
    case "work":
      return <Briefcase className="w-5 h-5 text-purple-500" />;
    default:
      return <GraduationCap className="w-5 h-5 text-emerald-500" />;
  }
};

export default function DestinationSimpleLayout({
  destinationName,
  flag,
  tagline,
  badgeText = "Study Abroad Destination",
  quickFacts,
  highlights,
}: DestinationSimpleLayoutProps) {
  const whatsappPhone = "01316318387";
  const whatsappUrl = `https://wa.me/8801316318387?text=${encodeURIComponent(
    `Hi COSMOVERTEX! I am interested in studying in ${destinationName}. Please guide me on admissions, scholarships, and visa requirements.`
  )}`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white transition-colors">
      {/* 1. Minimal Hero Section */}
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#0A2342] via-[#091b33] to-slate-900 text-white">
        {/* Ambient subtle lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-16 right-8 sm:right-16 text-8xl sm:text-9xl opacity-10 select-none font-bold">
            {flag}
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-300/70 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-400">Destinations</span>
            <span>/</span>
            <span className="text-emerald-400 font-medium">{destinationName}</span>
          </nav>

          {/* Badge & Flag */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-3xl sm:text-4xl" role="img" aria-label={destinationName}>
              {flag}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-300 border border-white/15 backdrop-blur-sm">
              <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
              {badgeText}
            </span>
          </div>

          {/* Destination Title */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Study in {destinationName}
          </h1>

          {/* Short Overview Tagline */}
          <p className="text-base sm:text-lg text-slate-200/90 max-w-3xl leading-relaxed mb-8">
            {tagline}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href={`/contact?destination=${encodeURIComponent(destinationName)}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 hover:scale-[1.01] transition-all"
            >
              Book Free Counseling
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-sm hover:scale-[1.01] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp Inquiry ({whatsappPhone})
            </a>
          </div>

          {/* Quick Trust Badges */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-8 mt-10 pt-6 border-t border-white/10 text-xs text-slate-300/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Genuine File Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Personalized University Shortlisting</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Fast-Track Visa Assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Quick Facts (4 Card Grid) */}
      <section className="py-12 sm:py-16 -mt-4 sm:-mt-6 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              At A Glance
            </h2>
            <p className="text-2xl font-bold tracking-tight text-[#0A2342] dark:text-white">
              Key Quick Facts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {quickFacts.map((fact, idx) => (
              <div
                key={idx}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:border-emerald-500/40"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getFactIcon(fact.icon)}
                  </div>
                  {fact.tag && (
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {fact.tag}
                    </span>
                  )}
                </div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {fact.label}
                </div>
                <div className="text-lg font-bold text-[#0A2342] dark:text-white mt-1 leading-snug">
                  {fact.value}
                </div>
                {fact.subtext && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-2">
                    {fact.subtext}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Highlights & Requirements (Simple Cards) */}
      <section className="py-8 sm:py-12 bg-white dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              Why Study Here
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A2342] dark:text-white">
              Core Highlights & Requirements
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Essential reasons why international students from Bangladesh choose {destinationName} for higher education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-[#0A2342] dark:text-slate-100 text-base">
                      {item.title}
                    </h4>
                    {item.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Counseling Lead Capture CTA Banner */}
      <section id="counseling-lead-cta" className="py-16 sm:py-20 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#0b2b52] to-[#043427] p-8 sm:p-12 text-white shadow-2xl border border-white/10">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Heading & Contact Info */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  Free 1-on-1 Consultation
                </span>

                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white">
                  Ready to apply for {destinationName}?
                </h3>

                <p className="text-slate-200/90 text-sm sm:text-base leading-relaxed">
                  Get personalized university shortlisting and visa guidance from COSMOVERTEX advisors. Book a counseling session or visit our contact desk to get started.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call: +880 {whatsappPhone}</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors font-medium"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    WhatsApp: {whatsappPhone}
                  </a>
                </div>
              </div>

              {/* Right Column: Prominent Redirect Button Card */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
                <div className="w-full bg-white/10 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/15 shadow-xl text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white">
                      Book Free Counseling
                    </h4>
                    <p className="text-xs text-slate-200/85 leading-relaxed">
                      Complete our fast counseling inquiry form on our contact page to connect with an advisor.
                    </p>
                  </div>

                  <Link
                    href={`/contact?destination=${encodeURIComponent(destinationName)}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Go to Counseling Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="pt-1">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      Prefer to chat? WhatsApp us directly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
