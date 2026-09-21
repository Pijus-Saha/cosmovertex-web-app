import type { Metadata } from "next";
import DestinationSimpleLayout, {
  QuickFact,
  HighlightItem,
} from "@/components/destination/DestinationSimpleLayout";

export const metadata: Metadata = {
  title: "Study in Australia — Genuine Student (GS) & Post-Study Work | COSMOVERTEX",
  description:
    "Expert Australian study visa consultancy in Dhaka. Tuition AUD 20,000–35,000/year, February and July intakes, PTE Academic & IELTS accepted, 2–4 years Post-Study Work (PSW) rights, and Genuine Student (GS) compliance.",
  alternates: { canonical: "/destinations/australia" },
};

const australiaQuickFacts: QuickFact[] = [
  {
    label: "Average Tuition Fees",
    value: "AUD $20,000 – $35,000 / yr",
    subtext: "Varies by institution, level of study, and academic scholarship awards.",
    tag: "High Standard",
    icon: "tuition",
  },
  {
    label: "Top Intakes",
    value: "February & July",
    subtext: "Semester 1 (February) is the major intake; Semester 2 (July) has full program access.",
    tag: "Feb & July Intakes",
    icon: "intake",
  },
  {
    label: "Accepted English Tests",
    value: "PTE Academic & IELTS",
    subtext: "PTE Academic is widely preferred for rapid computer-based results.",
    tag: "PTE Preferred",
    icon: "test",
  },
  {
    label: "Post-Study Work Rights",
    value: "2 – 4 Years PSW",
    subtext: "Subclass 485 Temporary Graduate Visa with regional study extensions.",
    tag: "Subclass 485",
    icon: "work",
  },
];

const australiaHighlights: HighlightItem[] = [
  {
    title: "World-Class Education & High Quality of Life",
    description:
      "Home to Group of Eight (Go8) research powerhouses and innovative modern universities in Melbourne, Sydney, Brisbane, Perth, and Adelaide.",
    badge: "Top 100 Global",
  },
  {
    title: "2 to 4 Years Post-Study Work Rights",
    description:
      "The Subclass 485 Temporary Graduate Visa allows international graduates to work unrestricted, with extra stayback periods for regional campuses.",
    badge: "Graduate Visa",
  },
  {
    title: "Highest Student Minimum Wage Globally",
    description:
      "International students benefit from Australia's national minimum wage of AUD $24.10+ per hour, working up to 48 hours per fortnight during term time.",
    badge: "AUD $24.10/hr",
  },
  {
    title: "Genuine Student (GS) Compliance Mastery",
    description:
      "Thorough guidance on the Australian Department of Home Affairs Genuine Student (GS) standard, statement of purpose, and GTE fund verification.",
    badge: "High Visa Success",
  },
  {
    title: "High-Demand Migration Skills Lists",
    description:
      "Strong employment prospects and permanent residency pathways in Nursing, Healthcare, IT, Cyber Security, Engineering, and Accounting.",
    badge: "PR Pathways",
  },
];

const australiaIntakes = [
  "Semester 1 (February Intake)",
  "Semester 2 (July Intake)",
  "Summer / November Intake",
];

export default function AustraliaPage() {
  return (
    <DestinationSimpleLayout
      destinationName="Australia"
      countryCode="AU"
      flag="🇦🇺"
      badgeText="Australian Higher Education"
      tagline="Benefit from world-class education, 2–4 years post-study work visa rights, high student wages, and structured Genuine Student (GS) visa guidance."
      quickFacts={australiaQuickFacts}
      highlights={australiaHighlights}
      intakeOptions={australiaIntakes}
      defaultIntake="Semester 1 (February Intake)"
    />
  );
}
