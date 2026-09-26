"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  QrCode,
} from "lucide-react";

export interface RoadmapStep {
  number: number;
  title: string;
  phase: string;
  duration: string;
  description: string;
  deliverables: string[];
  complianceAlert?: string;
}

interface AdmissionStepsProps {
  destinationName: string;
  steps?: RoadmapStep[];
}

const defaultSteps: RoadmapStep[] = [
  {
    number: 1,
    phase: "Phase 1: Assessment",
    duration: "Week 1",
    title: "Comprehensive Profile Evaluation",
    description:
      "Our senior counselors evaluate your academic transcripts, budget, study gaps, and long-term residency or career aspirations.",
    deliverables: [
      "Target university & country shortlist (3–5 institutions)",
      "Scholarship eligibility assessment",
      "Gap clarification & academic assessment",
    ],
  },
  {
    number: 2,
    phase: "Phase 2: Testing",
    duration: "Weeks 2–4",
    title: "English Proficiency Preparation & Certification",
    description:
      "Target the most strategic exam for your destination (EnglishScore CEFR C1, Duolingo DET, IELTS, or PTE). COSMOVERTEX provides focused coaching with 100% score assistance.",
    deliverables: [
      "Customized fast-track preparation program",
      "Official mock tests & feedback sessions",
      "Guaranteed verified score certification",
    ],
  },
  {
    number: 3,
    phase: "Phase 3: Admissions",
    duration: "Weeks 4–8",
    title: "University Application & Offer Letter",
    description:
      "Drafting SOP (Statement of Purpose), acquiring recommendation letters, and filing applications directly through official university representative channels.",
    deliverables: [
      "Expert-reviewed Statement of Purpose (SOP)",
      "Curriculum Vitae (CV) formatted to global standards",
      "Conditional & Unconditional Offer Letter acquisition",
    ],
  },
  {
    number: 4,
    phase: "Phase 4: Financial Compliance",
    duration: "Weeks 7–10",
    title: "Financial & Bank Statement Verification",
    description:
      "Ensuring your sponsor funds strictly adhere to embassy guidelines, duration requirements (e.g. 28-day holding rules), and national banking regulations.",
    deliverables: [
      "Sponsorship affidavit & source of fund documentation",
      "Solvency certificate & balance maintenance guidance",
      "Bangladesh Bank QR-code security check",
    ],
    complianceAlert:
      "Important Bangladesh Bank Compliance: All student visa verification bank statements and solvency certificates must carry an authentic verifiable QR code.",
  },
  {
    number: 5,
    phase: "Phase 5: Visa Filing",
    duration: "Weeks 9–12",
    title: "Visa File Submission & Embassy Mock Interviews",
    description:
      "Preparation of visa dossiers, paying visa & healthcare surcharges (e.g., IHS, SEVIS, OSHC), and rigorous 1-on-1 mock interviews simulating real consular questions.",
    deliverables: [
      "Complete visa dossier assembly & biometric appointment",
      "3 rounds of consular mock interview sessions",
      "Genuine Student (GS/GTE) rationale formulation",
    ],
  },
  {
    number: 6,
    phase: "Phase 6: Arrival",
    duration: "Pre-departure",
    title: "Pre-Departure Briefing & Onshore Settlement",
    description:
      "Everything you need for a smooth transition: currency exchange advice, student housing assistance, airport pickup arrangements, and part-time job hunting tips.",
    deliverables: [
      "Pre-departure orientation & baggage guidance",
      "Student accommodation & airport transit assistance",
      "Guidance on student tax number, local banking & part-time jobs",
    ],
  },
];

export default function AdmissionSteps({
  destinationName,
  steps = defaultSteps,
}: AdmissionStepsProps) {
  return (
    <section className="py-20 bg-brand-slate dark:bg-slate-900/70 border-y border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-4 h-4" />
            End-to-End Roadmap
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
            How to Study in {destinationName}: 6 Proven Steps
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            From your initial profile check in Dhaka to stepping onto campus, our
            proven sequence ensures zero errors and highest visa success.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative">
          {/* Vertical central bar */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-emerald-500 via-amber-500 to-[#0A2342] rounded-full opacity-30" />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Card */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                          {step.phase}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {step.duration}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-xl text-[#0A2342] dark:text-slate-100 mb-2.5">
                        {step.title}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2 mb-4 pt-3 border-t border-slate-100 dark:border-slate-700">
                        {step.deliverables.map((item) => (
                          <div
                            key={item}
                            className={`flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 ${
                              isEven ? "md:flex-row-reverse md:text-right" : ""
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Compliance Alert if present */}
                      {step.complianceAlert && (
                        <div className="mt-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs flex items-start gap-2.5 text-left">
                          <QrCode className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="font-semibold block mb-0.5">
                              Regulatory Compliance Note
                            </strong>
                            <span>{step.complianceAlert}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="z-10 w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border-2 border-emerald-500 shadow-lg flex items-center justify-center shrink-0">
                    <span className="font-heading font-extrabold text-sm text-[#0A2342] dark:text-emerald-400">
                      0{step.number}
                    </span>
                  </div>

                  {/* Empty spacer for the opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
