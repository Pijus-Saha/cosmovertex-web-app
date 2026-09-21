import type { Metadata } from "next";
import DestinationSimpleLayout, {
  QuickFact,
  HighlightItem,
} from "@/components/destination/DestinationSimpleLayout";

export const metadata: Metadata = {
  title: "Study in the United Kingdom — 1-Year Masters & Graduate Route PSW | COSMOVERTEX",
  description:
    "Study in the UK from Bangladesh. 1-Year Master's degrees, 2-Year Graduate Route Post-Study Work (PSW), tuition GBP 12,000–18,000/year, EnglishScore C1, DET, IELTS, or MOI waivers, and end-to-end CAS & visa guidance.",
  alternates: { canonical: "/destinations/uk" },
};

const ukQuickFacts: QuickFact[] = [
  {
    label: "Average Tuition Fees",
    value: "£12,000 – £18,000 / yr",
    subtext: "Competitive tuition fees with university merit scholarship discounts.",
    tag: "High ROI",
    icon: "tuition",
  },
  {
    label: "Top Intakes",
    value: "September & January",
    subtext: "September is the primary intake; January/February intake has widespread program availability.",
    tag: "Next: Sept 2026",
    icon: "intake",
  },
  {
    label: "Accepted English Tests",
    value: "EnglishScore C1, DET, IELTS, MOI",
    subtext: "Flexible options including MOI certificates and online English exams.",
    tag: "MOI & DET Accepted",
    icon: "test",
  },
  {
    label: "Post-Study Work Rights",
    value: "2 Years Graduate Route",
    subtext: "Unrestricted employment across the UK after completing your degree.",
    tag: "Graduate Route",
    icon: "work",
  },
];

const ukHighlights: HighlightItem[] = [
  {
    title: "1-Year Master's Degrees",
    description:
      "Complete your postgraduate degree in just 12 months, saving a full year of living expenses and entering the global workforce faster.",
    badge: "Fast Track",
  },
  {
    title: "2-Year Graduate Route PSW",
    description:
      "Work in any role or sector across the UK for 2 full years after graduation (3 years for doctoral graduates) without employer sponsorship restrictions.",
    badge: "2-Yr Work Visa",
  },
  {
    title: "Flexible English Requirements & MOI",
    description:
      "Apply with British Council EnglishScore C1, Duolingo DET, IELTS, or Medium of Instruction (MOI) waivers from recognized Bangladeshi universities.",
    badge: "With/Without IELTS",
  },
  {
    title: "World-Ranked Universities & High Employability",
    description:
      "Earn a qualification from prestigious UK universities renowned for cutting-edge research, industry links, and high graduate salaries.",
    badge: "Global Standing",
  },
  {
    title: "Comprehensive CAS & Visa File Preparation",
    description:
      "Personalized guidance on Confirmation of Acceptance for Studies (CAS), TB screening, Credibility Interviews, and 28-day bank statement compliance.",
    badge: "High Visa Ratio",
  },
];

const ukIntakes = [
  "Autumn / September Intake",
  "Spring / January Intake",
  "Summer / May Intake",
];

export default function UKPage() {
  return (
    <DestinationSimpleLayout
      destinationName="United Kingdom"
      countryCode="GB"
      flag="🇬🇧"
      badgeText="British Higher Education"
      tagline="Fast-track your global career with 1-Year Master's degrees, 2-Year Graduate Route post-study work permits, and flexible English entry options."
      quickFacts={ukQuickFacts}
      highlights={ukHighlights}
      intakeOptions={ukIntakes}
      defaultIntake="Autumn / September Intake"
    />
  );
}
