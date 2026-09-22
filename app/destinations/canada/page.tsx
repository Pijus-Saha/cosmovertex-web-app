import type { Metadata } from "next";
import DestinationSimpleLayout, {
  QuickFact,
  HighlightItem,
} from "@/components/destination/DestinationSimpleLayout";

export const metadata: Metadata = {
  title: "Study in Canada — Top DLI Universities, PGWP & PR Pathways",
  description:
    "Study in Canada with COSMOVERTEX. Personalized admissions to top Designated Learning Institutions (DLIs), up to 3 years Post-Graduation Work Permit (PGWP), co-op internships, and clear PR pathways.",
  alternates: { canonical: "/destinations/canada" },
};

const canadaQuickFacts: QuickFact[] = [
  {
    label: "Average Tuition Fees",
    value: "CAD $16,000 – $32,000 / yr",
    subtext: "Competitive tuition across accredited Canadian colleges and universities.",
    tag: "High ROI",
    icon: "tuition",
  },
  {
    label: "Top Intakes",
    value: "Fall, Winter & Summer",
    subtext: "September (Fall) is primary; January (Winter) & May (Summer) open.",
    tag: "Next: Fall Intake",
    icon: "intake",
  },
  {
    label: "Accepted English Tests",
    value: "IELTS, PTE, DET, TOEFL",
    subtext: "Accepted across DLIs; SDS & Non-SDS visa pathways supported.",
    tag: "Flexible Options",
    icon: "test",
  },
  {
    label: "Post-Study Work Rights",
    value: "Up to 3 Years PGWP",
    subtext: "Open work permit allowing work in any industry anywhere in Canada.",
    tag: "3-Yr PGWP",
    icon: "work",
  },
];

const canadaHighlights: HighlightItem[] = [
  {
    title: "Post-Graduation Work Permit (PGWP) up to 3 Years",
    description:
      "Graduates from eligible Canadian DLIs obtain an open work permit for up to 36 months, gaining valuable Canadian work experience.",
    badge: "3-Yr Work Permit",
  },
  {
    title: "Clear Pathways to Permanent Residency (PR)",
    description:
      "Canadian education and work experience award substantial Comprehensive Ranking System (CRS) points under Express Entry and Provincial Nominee Programs (PNP).",
    badge: "PR Pathways",
  },
  {
    title: "Paid Co-op Internships & Practical Experience",
    description:
      "Many degree and diploma programs integrate paid 4-to-8-month co-op terms, enabling students to earn while building industry networks.",
    badge: "Paid Internships",
  },
  {
    title: "World-Class Designated Learning Institutions (DLIs)",
    description:
      "Comprehensive admissions support for top Canadian universities and public colleges across Ontario, British Columbia, Alberta, and Atlantic Canada.",
    badge: "Top DLIs",
  },
  {
    title: "Student Direct Stream (SDS) & General Visa Guidance",
    description:
      "Personalized GIC setup, upfront medical support, Statement of Purpose (SOP) refinement, and dual-intent visa documentation.",
    badge: "Expert Visa Prep",
  },
];

const canadaIntakes = [
  "Fall / September Intake",
  "Winter / January Intake",
  "Summer / May Intake",
];

export default function CanadaPage() {
  return (
    <DestinationSimpleLayout
      destinationName="Canada"
      countryCode="CA"
      flag="🇨🇦"
      badgeText="Canadian Higher Education"
      tagline="Pursue globally respected degrees in Canada with up to 3 years Post-Graduation Work Permit (PGWP), paid co-op internships, and clear PR pathways with COSMOVERTEX."
      quickFacts={canadaQuickFacts}
      highlights={canadaHighlights}
      intakeOptions={canadaIntakes}
      defaultIntake="Fall / September Intake"
    />
  );
}
