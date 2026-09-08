import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  QrCode,
  MapPin,
  Coins,
  Sparkles,
  GraduationCap,
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
  title: "Study in Europe & Schengen Student Visa Guidance | COSMOVERTEX",
  description:
    "Complete European study abroad guide for Bangladeshi students. Affordable tuition (EUR 1,500–4,500/yr) in Greece, Lithuania, Slovenia, Malta, Germany & Poland. 29-country Schengen visa access, EnglishScore C1, Duolingo & IELTS accepted. Free counseling in Dhaka.",
  alternates: { canonical: "/destinations/europe" },
};

const europeMetrics: MetricItem[] = [
  {
    icon: "tuition",
    label: "Average Tuition Fees",
    value: "€1,500 – €4,500 / yr",
    subValue: "Among the most affordable higher education systems in the world.",
    tag: "Budget Friendly",
  },
  {
    icon: "intake",
    label: "Key Intake Periods",
    value: "Sept / Oct & Feb",
    subValue: "September intake is the main enrollment; rolling spring admissions available.",
    tag: "Next: Fall 2026",
  },
  {
    icon: "work",
    label: "Schengen & Work Rights",
    value: "29 Countries",
    subValue: "Travel across 29 Schengen states visa-free with 20 hrs/week part-time work.",
    tag: "Post-Study Work",
  },
  {
    icon: "test",
    label: "Accepted English Tests",
    value: "EnglishScore / DET",
    subValue: "EnglishScore CEFR C1 (100% assistance), Duolingo, or IELTS/PTE.",
    tag: "Flexible English",
  },
];

const europeCountries = [
  {
    country: "Germany",
    flag: "🇩🇪",
    tuition: "€0 – €3,000 / yr",
    livingCost: "€850 – €1,000 / mo",
    topCities: "Berlin, Munich, Frankfurt, Hamburg",
    highlights: "Tuition-free public universities, 18-month post-study work visa (Jobseeker), #1 EU economy.",
  },
  {
    country: "Poland",
    flag: "🇵🇱",
    tuition: "€1,800 – €3,800 / yr",
    livingCost: "€450 – €600 / mo",
    topCities: "Warsaw, Krakow, Wroclaw, Poznan",
    highlights: "High visa ratio, extremely affordable living costs, strong IT and medical faculties.",
  },
  {
    country: "Lithuania",
    flag: "🇱🇹",
    tuition: "€2,000 – €4,000 / yr",
    livingCost: "€500 – €700 / mo",
    topCities: "Vilnius, Kaunas, Klaipeda",
    highlights: "Fast European tech hub, 100% English taught degrees, 1-year post-study stayback.",
  },
  {
    country: "Slovenia",
    flag: "🇸🇮",
    tuition: "€2,200 – €4,500 / yr",
    livingCost: "€500 – €650 / mo",
    topCities: "Ljubljana, Maribor, Koper",
    highlights: "Ranked among the safest countries in the world, high student discounts on food and transport.",
  },
  {
    country: "Malta",
    flag: "🇲🇹",
    tuition: "€3,000 – €5,500 / yr",
    livingCost: "€600 – €800 / mo",
    topCities: "Valletta, Msida, St. Julian's",
    highlights: "English-speaking Mediterranean island nation, top hospitality and business hub.",
  },
  {
    country: "Greece",
    flag: "🇬🇷",
    tuition: "€2,500 – €4,500 / yr",
    livingCost: "€550 – €700 / mo",
    topCities: "Athens, Thessaloniki, Heraklion",
    highlights: "Rich academic heritage, scenic lifestyle, recognized European qualifications.",
  },
];

const europeCategories: ProgramCategory[] = [
  {
    id: "tech",
    name: "Tech, Computer Science & IT",
    icon: "tech",
    description:
      "Europe is facing a severe shortage of IT professionals, providing fast-track visas and high graduate salaries.",
    programs: [
      {
        title: "BSc / MSc Computer Science & Software Engineering",
        level: "Bachelor's & Master's",
        duration: "3 Years (BSc) / 1.5–2 Years (MSc)",
        typicalFees: "€2,200 – €3,800 / year",
        keySpecializations: ["Full Stack Development", "Cloud Computing", "AI & Data"],
        careerOutcomes: "Software Engineer, Web Architect, DevOps Specialist",
        popularInstitutions: ["Warsaw University of Technology", "Vilnius Tech", "University of Ljubljana"],
      },
      {
        title: "Data Science & Artificial Intelligence",
        level: "Master's",
        duration: "1.5 – 2 Years",
        typicalFees: "€2,500 – €4,200 / year",
        keySpecializations: ["Machine Learning", "Big Data Analytics", "Business Intelligence"],
        careerOutcomes: "Data Analyst, ML Engineer, Business Analyst",
        popularInstitutions: ["Wroclaw Tech", "Kaunas University of Technology", "TU Berlin"],
      },
      {
        title: "Cyber Security & Information Assurance",
        level: "Bachelor's & Master's",
        duration: "3 Years (BSc) / 2 Years (MSc)",
        typicalFees: "€2,400 – €4,000 / year",
        keySpecializations: ["Ethical Hacking", "Network Defense", "Cloud Security"],
        careerOutcomes: "Security Operations Analyst, Penetration Tester",
        popularInstitutions: ["Vilnius University", "Poznan University of Technology"],
      },
    ],
  },
  {
    id: "business",
    name: "Business Administration & Management",
    icon: "business",
    description:
      "Acquire European accredited BBA/MBA credentials with internship opportunities in multinational corporations across Schengen.",
    programs: [
      {
        title: "International Business Administration (BBA)",
        level: "Bachelor's",
        duration: "3 Years",
        typicalFees: "€1,800 – €3,500 / year",
        keySpecializations: ["Global Supply Chain", "Digital Marketing", "International Trade"],
        careerOutcomes: "Business Development Officer, Marketing Manager, Operations Executive",
        popularInstitutions: ["Kozminski University (Triple Crown)", "ISM University Lithuania", "University of Malta"],
      },
      {
        title: "Master in Business Administration (MBA)",
        level: "Master's",
        duration: "1 – 2 Years",
        typicalFees: "€2,800 – €4,800 / year",
        keySpecializations: ["Strategic Leadership", "Corporate Finance", "Entrepreneurship"],
        careerOutcomes: "Management Consultant, Project Director, Corporate Strategist",
        popularInstitutions: ["Warsaw School of Economics", "Athens University of Economics and Business"],
      },
    ],
  },
  {
    id: "engineering",
    name: "Engineering & Applied Sciences",
    icon: "engineering",
    description:
      "World-class laboratory facilities and direct pathways to automotive, robotics, and industrial automation firms.",
    programs: [
      {
        title: "Mechanical & Automotive Engineering",
        level: "Bachelor's & Master's",
        duration: "3.5 Years (BSc) / 1.5 Years (MSc)",
        typicalFees: "€2,200 – €4,200 / year",
        keySpecializations: ["CAD/CAM", "Robotics", "Renewable Energy Systems"],
        careerOutcomes: "Design Engineer, Plant Operations Specialist",
        popularInstitutions: ["Cracow University of Technology", "Vilnius Tech", "University of Maribor"],
      },
      {
        title: "Electrical & Electronics Engineering",
        level: "Bachelor's & Master's",
        duration: "3.5 Years (BSc) / 2 Years (MSc)",
        typicalFees: "€2,400 – €4,000 / year",
        keySpecializations: ["Embedded Systems", "Telecommunications", "Smart Grids"],
        careerOutcomes: "Electronics Engineer, Hardware Systems Architect",
        popularInstitutions: ["Lodz University of Technology", "Kaunas University of Technology"],
      },
    ],
  },
  {
    id: "health",
    name: "Hospitality, Tourism & Health Sciences",
    icon: "health",
    description:
      "Combine high-demand European vocational qualifications with guaranteed paid summer internships across the Mediterranean.",
    programs: [
      {
        title: "International Hospitality & Tourism Management",
        level: "Bachelor's & Master's",
        duration: "3 Years (BSc) / 1.5 Years (MSc)",
        typicalFees: "€2,000 – €3,800 / year",
        keySpecializations: ["Hotel Operations", "Luxury Tourism", "Event Planning"],
        careerOutcomes: "Resort Manager, Food & Beverage Director, Tourism Consultant",
        popularInstitutions: ["Institute of Tourism Studies Malta", "Metropolitan College Greece"],
      },
      {
        title: "Public Health & Nursing Sciences",
        level: "Bachelor's & Master's",
        duration: "3 – 4 Years",
        typicalFees: "€3,000 – €5,000 / year",
        keySpecializations: ["Clinical Healthcare", "Health Informatics", "Epidemiology"],
        careerOutcomes: "Healthcare Administrator, Clinical Research Associate",
        popularInstitutions: ["Medical University of Warsaw", "Lithuanian University of Health Sciences"],
      },
    ],
  },
];

const europeTests = [
  { value: "englishscore", label: "EnglishScore CEFR C1 (100% Result Assistance)" },
  { value: "duolingo", label: "Duolingo English Test (DET)" },
  { value: "ielts", label: "IELTS Academic" },
  { value: "pte", label: "PTE Academic" },
  { value: "undecided", label: "Need counseling on best option" },
];

export default function EuropePage() {
  return (
    <>
      {/* Hero */}
      <DestinationHero
        flag="🇪🇺"
        destinationName="Europe"
        title="Study in Europe & Secure Your"
        highlightedWord="Schengen Student Visa"
        tagline="Unlock affordable tuition (EUR 1,500 – 4,500/year), low living expenses, and unrestricted travel across 29 Schengen countries. Fast-track admissions with EnglishScore C1 or Duolingo."
        intakeText="Next: September 2026 Intake"
        badgeText="Schengen Zone Study Destination"
        whatsappMessage="Hi COSMOVERTEX! I am interested in applying for European universities for the upcoming intake."
        stats={[
          { label: "Annual Tuition", value: "€1,500 – €4,500" },
          { label: "Schengen Access", value: "29 Countries" },
          { label: "Part-time Work", value: "20 Hrs / Week" },
          { label: "English Score", value: "EnglishScore / DET" },
        ]}
      />

      {/* Key Metrics Grid */}
      <KeyMetricsGrid
        metrics={europeMetrics}
        title="European Higher Education at a Glance"
        subtitle="Europe offers the highest educational return-on-investment for Bangladeshi students seeking quality education, affordable costs, and European residency."
      />

      {/* Focus Countries Spotlight */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-semibold text-xs uppercase tracking-wider mb-3">
              <Globe className="w-4 h-4" />
              Focus European Destinations
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2342] dark:text-slate-100 mb-4">
              Where Can You Study in Europe?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              COSMOVERTEX holds active recruitment partnerships and direct admission
              pipelines across these top European destination countries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {europeCountries.map((c) => (
              <div
                key={c.country}
                className="bg-brand-slate dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{c.flag}</span>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-[#0A2342] dark:text-slate-100">
                          {c.country}
                        </h3>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                          Schengen Member
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700">
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                        Avg. Tuition
                      </span>
                      <strong className="text-[#0A2342] dark:text-slate-200 text-xs sm:text-sm">
                        {c.tuition}
                      </strong>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700">
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                        Living Cost
                      </span>
                      <strong className="text-[#0A2342] dark:text-slate-200 text-xs sm:text-sm">
                        {c.livingCost}
                      </strong>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {c.highlights}
                  </p>

                  <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-6">
                    <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>Top Hubs: {c.topCities}</span>
                  </div>
                </div>

                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-[#0A2342] dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  Apply to {c.country} Universities
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bangladesh Bank Compliance Alert Banner */}
      <section className="py-10 bg-amber-500/5 dark:bg-amber-500/10 border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-amber-500/30 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <QrCode className="w-6 h-6" />
            </div>
            <div className="space-y-1 flex-1">
              <h3 className="font-heading font-bold text-lg text-[#0A2342] dark:text-slate-100 flex items-center gap-2">
                Important Bangladesh Bank Student Visa Compliance Notice
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                As per regulatory standards, all Bank Statements and Solvency
                Certificates submitted for European student visa verification must
                feature an authentic, verifiable <strong>QR code</strong> generated
                directly by your scheduled bank. COSMOVERTEX ensures your financial
                dossier is thoroughly pre-verified before embassy submission.
              </p>
            </div>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs uppercase tracking-wider shrink-0 transition-colors"
            >
              Verify Bank Documents
            </a>
          </div>
        </div>
      </section>

      {/* Tabbed Popular Degree Programs */}
      <UniversityProgramsList
        destinationName="Europe"
        categories={europeCategories}
        title="Popular European Degree Programs"
        subtitle="Choose from hundreds of fully English-medium Bachelor's and Master's courses recognized worldwide across the European Higher Education Area (EHEA)."
      />

      {/* Admission Steps Sequence */}
      <AdmissionSteps destinationName="Europe" />

      {/* WhatsApp Action Strip */}
      <WhatsAppCTA
        destinationName="Europe"
        customMessage="Hi COSMOVERTEX! I am interested in applying for European universities (Germany, Poland, Lithuania, Malta, Slovenia, Greece) for the upcoming intake."
        title="Ready to Start Your European Journey?"
        subtitle="Chat directly with our Dhaka-based advisors. Get instant university shortlists, intake deadlines, and tuition guidance via WhatsApp."
      />

      {/* Lead Form Section */}
      <section className="py-20 bg-brand-slate dark:bg-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DestinationLeadForm
            defaultDestination="europe"
            destinationLabel="Europe"
            allowedTests={europeTests}
            heading="Apply for Europe September 2026/2027 Intake"
            subheading="Fill in your academic profile below. Our European admissions department will match you with eligible universities and prepare your scholarship roadmap."
          />
        </div>
      </section>
    </>
  );
}
