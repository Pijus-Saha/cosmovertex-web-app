import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Clock,
  FileText,
  Building2,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Coins,
  Sparkles,
  QrCode,
  Layers,
} from "lucide-react";
import DestinationHero from "@/components/destination/DestinationHero";
import KeyMetricsGrid, { MetricItem } from "@/components/destination/KeyMetricsGrid";
import UniversityProgramsList, {
  ProgramCategory,
} from "@/components/destination/UniversityProgramsList";
import AdmissionSteps from "@/components/destination/AdmissionSteps";
import DestinationLeadForm from "@/components/destination/DestinationLeadForm";
import WhatsAppCTA from "@/components/destination/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Study in the UK — 1-Year Masters, With/Without IELTS | COSMOVERTEX",
  description:
    "Expert UK study abroad consultancy in Dhaka. 1-Year Master's & 3-Year Bachelor's programs, 2-Year Graduate Route PSW, with or without IELTS (MOI / EnglishScore / Duolingo). CAS support, QR-coded bank statement verification, and visa consultation.",
  alternates: { canonical: "/destinations/uk" },
};

const ukMetrics: MetricItem[] = [
  {
    icon: "tuition",
    label: "Fast-Track Degree Length",
    value: "1-Yr MSc / 3-Yr BSc",
    subValue: "Save an entire year of tuition & living costs compared to USA or Canada.",
    tag: "High ROI",
  },
  {
    icon: "work",
    label: "Post-Study Work Visa",
    value: "2 Years PSW",
    subValue: "Graduate Route visa allows unrestricted work across the UK after graduation.",
    tag: "Graduate Route",
  },
  {
    icon: "intake",
    label: "Major Intakes",
    value: "Sept / Oct & Jan / Feb",
    subValue: "Two major intake windows per year with multiple rolling intakes.",
    tag: "Open for 2026/27",
  },
  {
    icon: "test",
    label: "English Options",
    value: "With / Without IELTS",
    subValue: "Study via MOI, EnglishScore CEFR C1, Duolingo DET, or IELTS Academic.",
    tag: "Flexible Routes",
  },
];

const ukWithoutIeltsTracks = [
  {
    title: "Medium of Instruction (MOI) Route",
    desc: "Graduates of UGC-recognized English-medium departments or private universities in Bangladesh can apply with an institutional MOI certificate, waiving standard test requirements.",
    eligibility: "Bachelor's degree completed in English with minimum CGPA 2.80+.",
    badge: "Fastest Route",
  },
  {
    title: "EnglishScore CEFR C1 Track",
    desc: "COSMOVERTEX is an authorized preparation center. Take this mobile-proctored test from home and submit your verified British Council CEFR certificate to designated partner universities.",
    eligibility: "CEFR C1 level result with COSMOVERTEX 100% preparation assistance.",
    badge: "100% Result Assistance",
  },
  {
    title: "Duolingo English Test (DET) Option",
    desc: "Over 60+ UK universities accept Duolingo English Test scores (typically 105–120+). Exam results are delivered in 48 hours.",
    eligibility: "Online test from home with prompt evaluation.",
    badge: "Fast 48-Hr Results",
  },
  {
    title: "HSC / A-Level English Waiver",
    desc: "High achievers with an 'A' grade in English in HSC or GCE O/A Levels qualify for direct English waivers at several esteemed UK universities.",
    eligibility: "70%+ or A/A* grade in secondary / higher secondary English.",
    badge: "Merit Waiver",
  },
];

const ukCategories: ProgramCategory[] = [
  {
    id: "tech",
    name: "Data Science, Cyber & AI",
    icon: "tech",
    description:
      "The UK is Europe's tech capital. British degrees in AI and data analysis are among the highest paying in the European job market.",
    programs: [
      {
        title: "MSc Data Science & Big Data Analytics",
        level: "Master's",
        duration: "1 Year Full-Time",
        typicalFees: "£14,500 – £19,000",
        keySpecializations: ["Predictive Analytics", "Deep Learning", "Cloud Architecture"],
        careerOutcomes: "Data Scientist, Business Intelligence Architect (£45k–£65k avg)",
        popularInstitutions: ["University of Hertfordshire", "Sheffield Hallam", "Coventry University"],
      },
      {
        title: "MSc Cyber Security & Digital Forensics",
        level: "Master's",
        duration: "1 Year Full-Time",
        typicalFees: "£14,000 – £18,500",
        keySpecializations: ["Network Security", "Cryptography", "Penetration Testing"],
        careerOutcomes: "Security Engineer, Cloud Defense Specialist",
        popularInstitutions: ["University of Greenwich", "Northumbria University", "UWE Bristol"],
      },
      {
        title: "BSc / MSc Artificial Intelligence",
        level: "Bachelor's & Master's",
        duration: "3 Years (BSc) / 1 Year (MSc)",
        typicalFees: "£14,000 – £20,000",
        keySpecializations: ["Natural Language Processing", "Robotics", "Computer Vision"],
        careerOutcomes: "AI Research Associate, Computer Vision Specialist",
        popularInstitutions: ["University of Surrey", "Queen Mary University of London"],
      },
    ],
  },
  {
    id: "business",
    name: "Business Analytics & Management",
    icon: "business",
    description:
      "Study near London's global financial hub. AACSB and AMBA accredited MBA and MSc programs with placement year options.",
    programs: [
      {
        title: "MSc Business Analytics & Decision Sciences",
        level: "Master's",
        duration: "1 Year Full-Time",
        typicalFees: "£13,800 – £18,000",
        keySpecializations: ["Financial Analytics", "Supply Chain Modeling", "Tableau & PowerBI"],
        careerOutcomes: "Management Consultant, Analytics Strategist",
        popularInstitutions: ["University of Salford", "Brunel University London", "Birmingham City"],
      },
      {
        title: "International MBA (with 1-Year Professional Placement)",
        level: "Master's",
        duration: "2 Years (1 Yr Study + 1 Yr Work)",
        typicalFees: "£14,500 – £19,500 total",
        keySpecializations: ["Executive Leadership", "Global Finance", "Digital Transformation"],
        careerOutcomes: "Operations Director, Senior Project Manager",
        popularInstitutions: ["University of Chester", "Anglia Ruskin University", "University of East London"],
      },
    ],
  },
  {
    id: "health",
    name: "Public Health & Health Informatics",
    icon: "health",
    description:
      "The NHS is the UK's largest employer. Graduates in public health and health management enjoy high visa sponsorship chances.",
    programs: [
      {
        title: "Master of Public Health (MPH)",
        level: "Master's",
        duration: "1 Year Full-Time",
        typicalFees: "£14,000 – £17,500",
        keySpecializations: ["Global Health Policy", "Epidemiology", "Health Promotion"],
        careerOutcomes: "Health Policy Analyst, Clinical Trials Coordinator",
        popularInstitutions: ["University of Sunderland", "Teesside University", "University of Wolverhampton"],
      },
      {
        title: "MSc Healthcare Leadership & Management",
        level: "Master's",
        duration: "1 Year Full-Time",
        typicalFees: "£13,500 – £17,000",
        keySpecializations: ["Hospital Administration", "Health Economics", "Clinical Governance"],
        careerOutcomes: "Healthcare Operations Manager, Quality Assurance Director",
        popularInstitutions: ["Canterbury Christ Church", "University of Derby"],
      },
    ],
  },
  {
    id: "engineering",
    name: "Engineering & Project Management",
    icon: "engineering",
    description:
      "Accredited by the Engineering Council UK and Project Management Institute (PMI).",
    programs: [
      {
        title: "MSc Engineering Management",
        level: "Master's",
        duration: "1 Year Full-Time",
        typicalFees: "£14,000 – £18,500",
        keySpecializations: ["Agile Project Management", "Lean Six Sigma", "Supply Chain"],
        careerOutcomes: "Engineering Project Manager, Industrial Consultant",
        popularInstitutions: ["Kingston University London", "Middlesex University London"],
      },
    ],
  },
];

const ukRequiredDocs = [
  {
    title: "All Academic Certificates & Transcripts",
    desc: "SSC, HSC, Bachelor's certificates and semester-wise transcripts certified by issuing boards or universities.",
  },
  {
    title: "Valid Bangladeshi Passport",
    desc: "Must have at least 6 months validity remaining beyond your intended start date in the UK.",
  },
  {
    title: "Statement of Purpose (SOP)",
    desc: "A well-structured academic rationale demonstrating your career vision and why you selected this specific university.",
  },
  {
    title: "Two Letters of Recommendation (LOR)",
    desc: "Academic references from your previous university professors or one academic + one employer reference.",
  },
  {
    title: "QR-Coded Bank Statement (28-Day Rule)",
    desc: "Must maintain full 1st-year tuition + 9 months living cost (£9,207 outer London / £12,006 inner London) continuously for 28 consecutive days.",
  },
  {
    title: "Updated Curriculum Vitae (CV)",
    desc: "Detailing educational history, work experience, research publications, and any extracurricular achievements.",
  },
];

const ukTests = [
  { value: "moi", label: "Medium of Instruction (MOI / Without IELTS)" },
  { value: "englishscore", label: "EnglishScore CEFR C1 (With Result Support)" },
  { value: "duolingo", label: "Duolingo English Test (DET)" },
  { value: "ielts", label: "IELTS Academic" },
  { value: "pte", label: "PTE Academic" },
  { value: "undecided", label: "Request Free Profile Evaluation" },
];

export default function UkPage() {
  return (
    <>
      {/* Hero */}
      <DestinationHero
        flag="🇬🇧"
        destinationName="United Kingdom"
        title="Study in the UK with or without IELTS:"
        highlightedWord="1-Year Master's & 2-Year PSW"
        tagline="Accelerate your career with globally prestigious British qualifications. Save money with 1-Year Master's degrees, benefit from the 2-Year Graduate Route PSW, and apply with MOI, EnglishScore C1, or Duolingo."
        intakeText="Next: September / October 2026 Intake"
        badgeText="Russell Group & Modern Universities"
        whatsappMessage="Hi COSMOVERTEX! I would like to get a university shortlist and consultation for studying in the UK."
        stats={[
          { label: "Degree Length", value: "1-Yr MSc / 3-Yr BSc" },
          { label: "Post-Study Work", value: "2 Years PSW" },
          { label: "Part-time Work", value: "20 Hrs / Week" },
          { label: "Scholarships", value: "£1,000 – £5,000" },
        ]}
      />

      {/* Key Metrics */}
      <KeyMetricsGrid
        metrics={ukMetrics}
        title="Why the UK is Bangladesh's #1 Study Abroad Choice"
        subtitle="Shorter program durations, world-class teaching quality, and post-study work authorization make the UK the ultimate global launchpad."
      />

      {/* Without IELTS Special Tracks */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-semibold text-xs uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4" />
              Flexible English Pathways
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
              Can You Study in the UK Without IELTS? Yes!
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              Don&apos;t let a delayed IELTS exam hold back your ambitions. COSMOVERTEX
              specializes in alternative English qualification routes accepted by
              UK Home Office Tier-4 / Student Sponsor universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ukWithoutIeltsTracks.map((track) => (
              <div
                key={track.title}
                className="bg-brand-slate dark:bg-slate-900 rounded-2xl p-7 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {track.badge}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0A2342] dark:text-slate-100 mb-3">
                    {track.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {track.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    Criteria: {track.eligibility}
                  </span>
                  <a
                    href="#lead-form"
                    className="font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0 ml-2"
                  >
                    Check Eligibility <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Checklist & 28-Day Financial Rule */}
      <section className="py-20 bg-brand-slate dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-semibold text-xs uppercase tracking-wider mb-3">
              <FileCheck className="w-4 h-4" />
              Application Checklist
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
              Required Documents for UK University & CAS Filing
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              Prepare these core documents to receive your unconditional offer
              and Confirmation of Acceptance for Studies (CAS) without delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ukRequiredDocs.map((doc, idx) => (
              <div
                key={doc.title}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700 shadow-sm flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#0A2342] dark:text-slate-100 mb-1.5">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 28-Day Bank Statement Notice */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-emerald-500/40 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <QrCode className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-[#0A2342] dark:text-slate-100">
                  UKVI 28-Day Holding & QR Code Compliance Notice
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl leading-relaxed">
                  Under UKVI regulations, financial proof must remain in the
                  account for a continuous 28-day period without dipping below
                  the required threshold even for a single day. Bangladeshi
                  students must also verify that bank statements carry a
                  scannable <strong>QR code</strong> for embassy authentication.
                </p>
              </div>
            </div>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A2342] dark:bg-emerald-600 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider shrink-0 transition-colors"
            >
              Get Free Financial Check
            </a>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <UniversityProgramsList
        destinationName="the UK"
        categories={ukCategories}
        title="Top UK Degree Programs for 2026/2027 Intakes"
        subtitle="Explore high-ranking 1-year Master's and 3-year Bachelor's courses offering strong post-study sponsorship opportunities across England, Wales, and Scotland."
      />

      {/* Admission Steps */}
      <AdmissionSteps destinationName="the UK" />

      {/* WhatsApp CTA */}
      <WhatsAppCTA
        destinationName="the United Kingdom"
        customMessage="Hi COSMOVERTEX! I would like to get my UK university shortlist and check my eligibility for 1-year Master's programs."
        title="Get Your Personalized UK University Shortlist"
        subtitle="Send your academic profile to our WhatsApp counseling team and receive a curated shortlist of 3–5 UK universities within 2 hours."
      />

      {/* Lead Form */}
      <section className="py-20 bg-brand-slate dark:bg-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DestinationLeadForm
            defaultDestination="uk"
            destinationLabel="United Kingdom"
            allowedTests={ukTests}
            heading="Book Free UK Visa Consultation & University Shortlist"
            subheading="Enter your academic details below. Our senior UK counselor will calculate your CAS eligibility, scholarship opportunities, and available English waiver tracks."
          />
        </div>
      </section>
    </>
  );
}
