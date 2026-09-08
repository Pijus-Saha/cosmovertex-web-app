import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
  Award,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  FileCheck2,
  ArrowRight,
  TrendingUp,
  Briefcase,
  Users,
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
  title: "Study in the USA — Scholarships, STEM OPT & F-1 Visa Prep | COSMOVERTEX",
  description:
    "Study in the USA from Bangladesh with COSMOVERTEX. Merit scholarships, 3-Year STEM OPT work authorization, Duolingo English Test (DET) acceptance at 1,500+ US universities, I-20 processing, and comprehensive F-1 visa mock interview coaching in Dhaka.",
  alternates: { canonical: "/destinations/usa" },
};

const usaMetrics: MetricItem[] = [
  {
    icon: "work",
    label: "STEM OPT Work Rights",
    value: "Up to 3 Years OPT",
    subValue: "12 months initial OPT + 24 months STEM extension for tech, math & science graduates.",
    tag: "High Job Demand",
  },
  {
    icon: "tuition",
    label: "Merit Scholarships",
    value: "$5,000 – $25,000+",
    subValue: "Generous institutional scholarships, in-state tuition waivers, and graduate assistantships.",
    tag: "Funding Available",
  },
  {
    icon: "test",
    label: "Duolingo Accepted",
    value: "1,500+ Universities",
    subValue: "DET widely accepted alongside TOEFL and IELTS; GRE/GMAT waived for many majors.",
    tag: "Fast & Convenient",
  },
  {
    icon: "intake",
    label: "Key Intake Periods",
    value: "Fall & Spring",
    subValue: "Fall (August/September) is the primary scholarship intake; Spring (January) is also open.",
    tag: "Fall 2026 Open",
  },
];

const f1VisaServices = [
  {
    title: "1-on-1 F-1 Consular Mock Interviews",
    desc: "Practice with realistic mock interview simulations covering academic intent, post-study goals, and non-immigrant intent.",
    icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
  },
  {
    title: "SEVIS I-901 & DS-160 Filing Support",
    desc: "Flawless completion of your DS-160 non-immigrant visa application and SEVIS fee payment with zero errors.",
    icon: <FileCheck2 className="w-5 h-5 text-blue-500" />,
  },
  {
    title: "I-20 Form Issuance Fast-Tracking",
    desc: "Coordinating with university designated school officials (DSO) to ensure timely shipment of your Form I-20.",
    icon: <Award className="w-5 h-5 text-amber-500" />,
  },
  {
    title: "Financial Sponsoring & Affidavit Guidance",
    desc: "Structuring clean bank solvency, tax returns, property valuations, and sponsor affidavit documentation.",
    icon: <DollarSign className="w-5 h-5 text-rose-500" />,
  },
];

const usaCategories: ProgramCategory[] = [
  {
    id: "tech",
    name: "Artificial Intelligence, CS & Software",
    icon: "tech",
    description:
      "All programs qualify for the full 36-Month (3-Year) STEM OPT extension, allowing you to work for US tech giants.",
    programs: [
      {
        title: "MS in Computer Science & Artificial Intelligence",
        level: "Master's",
        duration: "2 Years (STEM)",
        typicalFees: "$18,000 – $28,000 / year",
        keySpecializations: ["Machine Learning", "Autonomous Systems", "Cyber Security"],
        careerOutcomes: "Software Engineer, AI Developer ($85k–$120k starting salary)",
        popularInstitutions: ["University of North Texas", "Arizona State University", "Pace University"],
      },
      {
        title: "BS in Computer Science & Software Engineering",
        level: "Bachelor's",
        duration: "4 Years (STEM)",
        typicalFees: "$16,000 – $26,000 / year (before scholarship)",
        keySpecializations: ["Full Stack Engineering", "Cloud Computing", "Data Systems"],
        careerOutcomes: "Systems Architect, Cloud DevOps Engineer",
        popularInstitutions: ["University of South Florida", "George Mason University", "CSU Long Beach"],
      },
      {
        title: "MS in Data Science & Business Analytics",
        level: "Master's",
        duration: "1.5 – 2 Years (STEM)",
        typicalFees: "$19,000 – $29,000 / year",
        keySpecializations: ["Predictive Analytics", "Deep Learning", "Financial Tech"],
        careerOutcomes: "Quantitative Analyst, Senior Data Analyst",
        popularInstitutions: ["Northeastern University", "University of Texas at Dallas"],
      },
    ],
  },
  {
    id: "business",
    name: "STEM MBA & Corporate Finance",
    icon: "business",
    description:
      "Modern US business schools now offer STEM-designated MBAs, granting international graduates 3 years of US work authorization.",
    programs: [
      {
        title: "STEM-Designated MBA (Business Analytics Track)",
        level: "Master's",
        duration: "2 Years (STEM)",
        typicalFees: "$22,000 – $34,000 / year",
        keySpecializations: ["FinTech", "Supply Chain Analytics", "Strategic Decision Science"],
        careerOutcomes: "Management Consultant, Senior Product Manager, Financial Controller",
        popularInstitutions: ["University of Illinois Chicago", "DePaul University", "Clark University"],
      },
      {
        title: "MS in Finance & Quantitative Risk Management",
        level: "Master's",
        duration: "1 – 1.5 Years (STEM)",
        typicalFees: "$20,000 – $30,000 / year",
        keySpecializations: ["Asset Pricing", "Algorithmic Trading", "Corporate Valuation"],
        careerOutcomes: "Investment Banker, Risk Analyst, Equity Strategist",
        popularInstitutions: ["Hofstra University", "Fordham University", "University of Cincinnati"],
      },
    ],
  },
  {
    id: "health",
    name: "Biomedical Sciences & Public Health",
    icon: "health",
    description:
      "Engage in funded research across America's premier clinical hospitals, biotechnology corridors, and research universities.",
    programs: [
      {
        title: "MS in Biotechnology & Biomedical Sciences",
        level: "Master's",
        duration: "2 Years (STEM)",
        typicalFees: "$18,000 – $28,000 / year",
        keySpecializations: ["Molecular Genetics", "Bioinformatics", "Pharmaceutical Development"],
        careerOutcomes: "Biomedical Scientist, Clinical Trial Manager",
        popularInstitutions: ["Johns Hopkins AAP", "University of Massachusetts Boston"],
      },
      {
        title: "Master of Public Health (MPH)",
        level: "Master's",
        duration: "2 Years",
        typicalFees: "$17,000 – $26,000 / year",
        keySpecializations: ["Epidemiology", "Global Health Systems", "Environmental Health"],
        careerOutcomes: "Health Program Director, Epidemiologist",
        popularInstitutions: ["Saint Louis University", "Georgia State University"],
      },
    ],
  },
  {
    id: "engineering",
    name: "Mechanical & Electrical Engineering",
    icon: "engineering",
    description:
      "Cutting-edge research laboratories with direct ties to semiconductor manufacturing, robotics, and aerospace sectors.",
    programs: [
      {
        title: "MS in Electrical & Computer Engineering",
        level: "Master's",
        duration: "2 Years (STEM)",
        typicalFees: "$18,000 – $27,000 / year",
        keySpecializations: ["VLSI Design", "Semiconductor Devices", "Embedded AI"],
        careerOutcomes: "Hardware Design Engineer, Semiconductor Architect",
        popularInstitutions: ["University of Colorado Denver", "Wichita State University"],
      },
    ],
  },
];

const usaTests = [
  { value: "duolingo", label: "Duolingo English Test (DET - 1,500+ US Unis)" },
  { value: "toefl", label: "TOEFL iBT" },
  { value: "ielts", label: "IELTS Academic" },
  { value: "gre_waived", label: "Programs with GRE / GMAT Waiver" },
  { value: "undecided", label: "Request Free Profile Evaluation" },
];

export default function UsaPage() {
  return (
    <>
      {/* Hero */}
      <DestinationHero
        flag="🇺🇸"
        destinationName="United States"
        title="Study in the USA:"
        highlightedWord="Scholarships & 3-Year STEM OPT"
        tagline="Access the world's most prestigious universities with merit scholarships, up to 3 years of STEM OPT work authorization, and comprehensive F-1 visa interview training in Dhaka. Duolingo accepted by 1,500+ US colleges."
        intakeText="Next: Fall 2026 (Priority) & Spring 2027"
        badgeText="World's #1 Higher Education Destination"
        whatsappMessage="Hi COSMOVERTEX! I am interested in checking my scholarship eligibility and applying to US universities."
        stats={[
          { label: "STEM OPT", value: "3 Years (36 Mo)" },
          { label: "Scholarships", value: "Up to $25,000+" },
          { label: "English Test", value: "Duolingo / TOEFL" },
          { label: "GRE / GMAT", value: "Waived for 90%+" },
        ]}
      />

      {/* Key Metrics Grid */}
      <KeyMetricsGrid
        metrics={usaMetrics}
        title="The American Educational Advantage"
        subtitle="Unmatched campus resources, generous scholarship packages, and 36 months of practical STEM work authorization create life-changing career trajectories."
      />

      {/* STEM OPT 3-Year Work Rights Explainer */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-semibold text-xs uppercase tracking-wider mb-4">
                <Briefcase className="w-4 h-4" />
                Post-Study Employment
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2342] dark:text-slate-100 mb-5 leading-tight">
                How Does 3-Year STEM OPT Work for International Students?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                Optional Practical Training (OPT) allows F-1 student visa
                holders to gain paid, full-time employment experience in their
                field of study. Students who graduate from qualifying{" "}
                <strong>STEM programs</strong> (Science, Technology,
                Engineering, Mathematics) are eligible for a 24-month
                extension—granting a total of <strong>36 months (3 full years)</strong>{" "}
                of legal US work authorization without requiring an H-1B visa immediately.
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  "12 months initial OPT + 24 months STEM extension",
                  "Work full-time for US corporations and startups",
                  "Multiple chances to enter the annual H-1B visa lottery",
                  "Average starting salary: $75,000 to $110,000 / year",
                  "High demand for software, data, and analytics specialists",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#lead-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A2342] dark:bg-emerald-600 hover:bg-slate-800 text-white font-semibold text-sm transition-colors"
              >
                Find STEM-Designated Programs <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Visual Box */}
            <div className="bg-brand-slate dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <span className="font-heading font-bold text-lg text-[#0A2342] dark:text-slate-100">
                  STEM OPT Timeline Breakdown
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                  36 Months Total
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-sm text-[#0A2342] dark:text-slate-200">
                      Phase 1: Initial Post-Completion OPT
                    </strong>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      Months 1–12
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Open to all graduates. Work anywhere in the US in a role
                    directly related to your major field.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-emerald-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-sm text-[#0A2342] dark:text-slate-200">
                      Phase 2: 24-Month STEM Extension
                    </strong>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      Months 13–36
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Work with an E-Verify registered employer. Employers can file
                    H-1B petitions across multiple fiscal cycles.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-sm text-[#0A2342] dark:text-slate-200">
                      Phase 3: Transition to H-1B / O-1 / Green Card
                    </strong>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      Permanent Residency Pathway
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    High success rate for STEM graduates transitioning into
                    permanent corporate sponsorships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F-1 Visa Mock Interview & Support Services */}
      <section className="py-20 bg-brand-slate dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-semibold text-xs uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              Visa Success Center
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
              COSMOVERTEX F-1 Visa Mock Interview Coaching
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              The US visa interview is a 2-minute verbal assessment. Our senior
              mentors prepare you through intensive 1-on-1 mock sessions until your
              answers are confident, concise, and compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {f1VisaServices.map((srv) => (
              <div
                key={srv.title}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-700/60 flex items-center justify-center mb-4 shadow-inner">
                    {srv.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0A2342] dark:text-slate-100 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60">
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Included in Counseling
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Degree Programs */}
      <UniversityProgramsList
        destinationName="the United States"
        categories={usaCategories}
        title="Top STEM & Business Programs in the USA"
        subtitle="Explore programs with the highest career placement rates, scholarship availability, and 36-month STEM OPT work authorizations."
      />

      {/* Admission Steps */}
      <AdmissionSteps destinationName="the United States" />

      {/* WhatsApp CTA */}
      <WhatsAppCTA
        destinationName="the United States"
        customMessage="Hi COSMOVERTEX! I would like to evaluate my profile for US universities and check scholarship opportunities."
        title="Check Your USA Scholarship & I-20 Eligibility"
        subtitle="Connect with our US admissions director on WhatsApp. Receive preliminary university shortlists and F-1 visa roadmap guidance."
      />

      {/* Lead Form */}
      <section className="py-20 bg-brand-slate dark:bg-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DestinationLeadForm
            defaultDestination="usa"
            destinationLabel="United States"
            allowedTests={usaTests}
            heading="Check USA Scholarship Eligibility & Book F-1 Visa Prep"
            subheading="Enter your GPA and test scores. We will assess your eligibility for merit tuition waivers ($5k–$25k) and schedule your F-1 visa preparation session."
          />
        </div>
      </section>
    </>
  );
}
