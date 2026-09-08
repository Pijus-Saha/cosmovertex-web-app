import type { Metadata } from "next";
import Link from "next/link";
import {
  Sun,
  Award,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Briefcase,
  HeartPulse,
  Compass,
  ArrowRight,
  TrendingUp,
  MapPin,
  GraduationCap,
  Sparkles,
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
  title: "Study in Australia — Genuine Student (GS) & Regional PSW | COSMOVERTEX",
  description:
    "Expert Australian study visa consultancy in Dhaka. Up to 4–5 years Post-Study Work (PSW) in regional areas, PTE Academic & IELTS accepted, Genuine Student (GS) compliance, OSHC health cover guidance, and high-demand nursing & IT degrees.",
  alternates: { canonical: "/destinations/australia" },
};

const australiaMetrics: MetricItem[] = [
  {
    icon: "work",
    label: "Regional Post-Study Work",
    value: "Up to 4–5 Years PSW",
    subValue: "Study in regional hubs (Perth, Adelaide, Gold Coast) for extra 1–2 years of PSW rights.",
    tag: "PR Pathway",
  },
  {
    icon: "intake",
    label: "Key Semesters",
    value: "Semester 1 & 2",
    subValue: "Semester 1 (February) is the major intake; Semester 2 (July) has full program access.",
    tag: "Feb & July Intakes",
  },
  {
    icon: "test",
    label: "Accepted English Tests",
    value: "PTE Academic & IELTS",
    subValue: "PTE Academic is widely preferred for fast scoring; IELTS Academic & TOEFL iBT also accepted.",
    tag: "PTE Preferred",
  },
  {
    icon: "tuition",
    label: "High Student Minimum Wage",
    value: "AUD $24.10 / hr",
    subValue: "Australia offers the highest national minimum wage in the world for student workers.",
    tag: "Work 48 Hrs/Fortnight",
  },
];

const regionalPswBreakdown = [
  {
    category: "Major Australian Metros",
    cities: "Sydney, Melbourne, Brisbane",
    duration: "2 Years PSW",
    desc: "Global financial and corporate hubs with maximum company headquarters and international networking.",
    badge: "Metropolitan",
  },
  {
    category: "Cities & Major Regional Centers",
    cities: "Perth, Adelaide, Gold Coast, Canberra, Newcastle",
    duration: "3 Years PSW (2 + 1 Extra Year)",
    desc: "Vibrant lifestyle with reduced living costs and priority processing for state-sponsored migration pathways.",
    badge: "+1 Year Extra PSW",
  },
  {
    category: "Regional Centers & Outer Areas",
    cities: "Darwin, Hobart, Wollongong, Townsville, Cairns",
    duration: "4 to 5 Years PSW (2 + 2 Extra Years)",
    desc: "Maximum migration points, designated regional area benefits, and relaxed skilled occupation lists.",
    badge: "+2 Years Extra PSW",
  },
];

const genuineStudentCriteria = [
  {
    title: "Current Circumstances & Ties to Bangladesh",
    desc: "Documenting community ties, family connections, economic standing, and realistic intent to return home.",
  },
  {
    title: "Value of the Course to Your Future Career",
    desc: "Demonstrating how the Australian qualification delivers a verifiable salary increase or promotion in Bangladesh.",
  },
  {
    title: "Previous Study History & Academic Consistency",
    desc: "Logical study progression without unexplained career pivots; reasonable explanation for any study gaps.",
  },
  {
    title: "Financial Capacity & OSHC Compliance",
    desc: "Proof of 1 year tuition + living cost (AUD $29,710/yr) + return travel, accompanied by valid Overseas Student Health Cover.",
  },
];

const australiaCategories: ProgramCategory[] = [
  {
    id: "health",
    name: "Nursing, Healthcare & Community Services",
    icon: "health",
    description:
      "Healthcare and aged care are on Australia's Priority Migration Skilled Occupation List (PMSOL) with immediate residency pathways.",
    programs: [
      {
        title: "Bachelor of Nursing (Pre-Registration / Conversion)",
        level: "Bachelor's",
        duration: "3 Years (2 Yrs Conversion)",
        typicalFees: "AUD $32,000 – $38,000 / year",
        keySpecializations: ["Clinical Practice", "Aged Care", "Mental Health Nursing"],
        careerOutcomes: "Registered Nurse (AHPRA Accredited) (AUD $78k–$95k avg)",
        popularInstitutions: ["Deakin University", "Flinders University", "Griffith University"],
      },
      {
        title: "Master of Public Health (MPH)",
        level: "Master's",
        duration: "2 Years Full-Time",
        typicalFees: "AUD $30,000 – $36,000 / year",
        keySpecializations: ["Health Promotion", "Epidemiology", "Healthcare Administration"],
        careerOutcomes: "Public Health Officer, Health Policy Consultant",
        popularInstitutions: ["Western Sydney University", "La Trobe University", "Torrens University"],
      },
    ],
  },
  {
    id: "tech",
    name: "Information Technology & Cyber Security",
    icon: "tech",
    description:
      "Accredited by the Australian Computer Society (ACS) with direct pathways to ACS Professional Year Program.",
    programs: [
      {
        title: "Master of Information Technology & Cyber Security",
        level: "Master's",
        duration: "2 Years Full-Time",
        typicalFees: "AUD $31,000 – $39,000 / year",
        keySpecializations: ["Cloud Networks", "Penetration Testing", "Enterprise IT Architecture"],
        careerOutcomes: "Cyber Security Analyst, Systems Administrator (AUD $85k–$115k)",
        popularInstitutions: ["Swinburne University", "RMIT University", "University of Wollongong"],
      },
      {
        title: "Bachelor of Computer Science & Software Development",
        level: "Bachelor's",
        duration: "3 Years Full-Time",
        typicalFees: "AUD $30,000 – $36,000 / year",
        keySpecializations: ["AI & Data Analytics", "Full Stack Development", "Mobile Computing"],
        careerOutcomes: "Software Developer, Systems Engineer",
        popularInstitutions: ["Macquarie University", "Curtin University", "QUT"],
      },
    ],
  },
  {
    id: "business",
    name: "Professional Accounting & Business Analytics",
    icon: "business",
    description:
      "Accredited by CPA Australia and Chartered Accountants ANZ with career placement programs.",
    programs: [
      {
        title: "Master of Professional Accounting (Advanced)",
        level: "Master's",
        duration: "2 Years Full-Time",
        typicalFees: "AUD $28,000 – $36,000 / year",
        keySpecializations: ["Auditing", "Tax Law", "Corporate Governance"],
        careerOutcomes: "Chartered Accountant, Financial Auditor",
        popularInstitutions: ["Victoria University", "University of South Australia", "Charles Sturt"],
      },
      {
        title: "Master of Business Analytics (Big Data)",
        level: "Master's",
        duration: "2 Years Full-Time",
        typicalFees: "AUD $32,000 – $40,000 / year",
        keySpecializations: ["Predictive Analytics", "Marketing Intelligence", "ERP Systems"],
        careerOutcomes: "Data Analyst, Management Consultant",
        popularInstitutions: ["Monash University", "University of Adelaide", "UTS"],
      },
    ],
  },
  {
    id: "engineering",
    name: "Civil & Environmental Engineering",
    icon: "engineering",
    description:
      "Accredited by Engineers Australia (EA) under the Washington Accord, recognized worldwide.",
    programs: [
      {
        title: "Master of Professional Engineering (Civil)",
        level: "Master's",
        duration: "2 Years Full-Time",
        typicalFees: "AUD $34,000 – $42,000 / year",
        keySpecializations: ["Structural Engineering", "Water Resources", "Geotechnical Design"],
        careerOutcomes: "Civil Project Engineer, Structural Consultant",
        popularInstitutions: ["University of Newcastle", "Edith Cowan University", "UNSW"],
      },
    ],
  },
];

const australiaTests = [
  { value: "pte", label: "PTE Academic (Preferred for Australia)" },
  { value: "ielts", label: "IELTS Academic" },
  { value: "toefl", label: "TOEFL iBT" },
  { value: "undecided", label: "Request Free Profile Evaluation" },
];

export default function AustraliaPage() {
  return (
    <>
      {/* Hero */}
      <DestinationHero
        flag="🇦🇺"
        destinationName="Australia"
        title="Study in Australia:"
        highlightedWord="High Wages & Up to 5-Yr Regional PSW"
        tagline="Elevate your future with world-class Australian education, high student minimum wages (AUD $24.10/hr), and up to 4–5 years of Post-Study Work rights in regional areas. Full Genuine Student (GS) compliance and visa support."
        intakeText="Next: Semester 1 (Feb 2027) & Semester 2 (July 2026)"
        badgeText="Group of Eight & Australian Technology Network"
        whatsappMessage="Hi COSMOVERTEX! I want to evaluate my eligibility for studying in Australia and check regional PSW opportunities."
        stats={[
          { label: "Regional PSW", value: "Up to 4–5 Years" },
          { label: "Min. Wage", value: "AUD $24.10 / hr" },
          { label: "Work Rights", value: "48 Hrs / Fortnight" },
          { label: "English Test", value: "PTE / IELTS" },
        ]}
      />

      {/* Key Metrics Grid */}
      <KeyMetricsGrid
        metrics={australiaMetrics}
        title="Key Highlights of Studying in Australia"
        subtitle="Ranked among the top 3 global study destinations, Australia combines top-tier academic standards with the world's most supportive student work policies."
      />

      {/* Regional Post-Study Work (PSW) Breakdown */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 font-semibold text-xs uppercase tracking-wider mb-3">
              <Compass className="w-4 h-4" />
              Regional Advantage
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
              Regional Australia: Gain Up to 4–5 Years Work Rights
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              The Australian government provides extra post-study work years and
              migration incentives for students who live and study in designated
              regional locations outside Sydney, Melbourne, and Brisbane.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regionalPswBreakdown.map((item) => (
              <div
                key={item.category}
                className="bg-brand-slate dark:bg-slate-900 rounded-3xl p-7 border border-slate-200/80 dark:border-slate-800 hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      {item.badge}
                    </span>
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#0A2342] dark:text-slate-100 mb-2">
                    {item.category}
                  </h3>

                  <div className="font-heading font-extrabold text-2xl text-emerald-600 dark:text-emerald-400 mb-3">
                    {item.duration}
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">
                    Key Hubs: {item.cities}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-[#0A2342] hover:text-white dark:hover:bg-amber-500 dark:hover:text-slate-950 text-[#0A2342] dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  Explore Regional Universities <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genuine Student (GS) Assessment Guide */}
      <section className="py-20 bg-brand-slate dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-semibold text-xs uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              Subclass 500 Compliance
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
              Mastering the Genuine Student (GS) Assessment
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              The Australian Department of Home Affairs has updated student visa
              evaluations with the <strong>Genuine Student (GS)</strong> framework.
              COSMOVERTEX structures your application to satisfy all 4 core pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {genuineStudentCriteria.map((crit, idx) => (
              <div
                key={crit.title}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700 shadow-sm flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#0A2342] dark:text-slate-100 mb-1.5">
                    {crit.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {crit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="font-heading font-bold text-base text-[#0A2342] dark:text-slate-100">
                Overseas Student Health Cover (OSHC) Arrangement
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
                OSHC is compulsory for all Subclass 500 holders. COSMOVERTEX
                partners with leading providers (Bupa, Allianz, Medibank) to
                secure comprehensive medical coverage at guaranteed student rates.
              </p>
            </div>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-gradient text-white font-semibold text-xs uppercase tracking-wider shrink-0 shadow-md"
            >
              Get OSHC Quote & GS Checklist
            </a>
          </div>
        </div>
      </section>

      {/* University Programs List */}
      <UniversityProgramsList
        destinationName="Australia"
        categories={australiaCategories}
        title="High-Demand Australian Degree Programs"
        subtitle="Explore degree options on Australia's Priority Migration Skilled Occupation List with strong employer demand across Sydney, Melbourne, Perth, and regional hubs."
      />

      {/* Admission Steps */}
      <AdmissionSteps destinationName="Australia" />

      {/* WhatsApp Action Strip */}
      <WhatsAppCTA
        destinationName="Australia"
        customMessage="Hi COSMOVERTEX! I would like to check my Genuine Student (GS) eligibility and get a university shortlist for Australia."
        title="Evaluate Your Australia Visa Eligibility"
        subtitle="Chat with our Australian education specialists on WhatsApp. Get course advice, university fee estimates, and PTE score guidance."
      />

      {/* Lead Form */}
      <section className="py-20 bg-brand-slate dark:bg-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DestinationLeadForm
            defaultDestination="australia"
            destinationLabel="Australia"
            allowedTests={australiaTests}
            heading="Evaluate Australia Visa Eligibility & Course Selection"
            subheading="Enter your academic qualification and preferred field. Our senior counselor will evaluate your Genuine Student (GS) score and map your intake timeline."
          />
        </div>
      </section>
    </>
  );
}
