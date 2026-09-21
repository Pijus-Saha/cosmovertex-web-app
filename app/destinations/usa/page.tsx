import type { Metadata } from "next";
import DestinationSimpleLayout, {
  QuickFact,
  HighlightItem,
} from "@/components/destination/DestinationSimpleLayout";

export const metadata: Metadata = {
  title: "Study in the United States — Scholarships, STEM OPT & F-1 Visa | COSMOVERTEX",
  description:
    "Study in the USA with COSMOVERTEX. Tuition USD 15,000–28,000/year, up to 3 years STEM OPT work extension, Duolingo English Test (DET) acceptance at 1,500+ universities, merit scholarships, and 1-on-1 F-1 visa interview preparation.",
  alternates: { canonical: "/destinations/usa" },
};

const usaQuickFacts: QuickFact[] = [
  {
    label: "Average Tuition Fees",
    value: "$15,000 – $28,000 / yr",
    subtext: "Net cost after institutional merit scholarships and tuition waivers.",
    tag: "Funding Available",
    icon: "tuition",
  },
  {
    label: "Top Intakes",
    value: "Fall & Spring",
    subtext: "Fall (August/September) has the most scholarships; Spring (January) is also open.",
    tag: "Next: Fall Intake",
    icon: "intake",
  },
  {
    label: "Accepted English Tests",
    value: "DET, TOEFL, IELTS",
    subtext: "Duolingo English Test accepted by 1,500+ accredited US universities.",
    tag: "DET Accepted",
    icon: "test",
  },
  {
    label: "Post-Study Work Rights",
    value: "Up to 3 Years STEM OPT",
    subtext: "12 months standard OPT plus a 24-month STEM extension.",
    tag: "3-Yr STEM OPT",
    icon: "work",
  },
];

const usaHighlights: HighlightItem[] = [
  {
    title: "Up to 3 Years STEM OPT Extension",
    description:
      "Graduates in Science, Technology, Engineering, Math, and Data disciplines can work legally in the United States for up to 36 months post-graduation.",
    badge: "High Tech Career",
  },
  {
    title: "Merit Scholarships & Graduate Assistantships",
    description:
      "Access institutional scholarships ranging from $5,000 to $25,000+ per year, plus Graduate Research/Teaching Assistantships covering full tuition.",
    badge: "$5k–$25k+ Aid",
  },
  {
    title: "1,500+ Universities Accept Duolingo (DET)",
    description:
      "Take your exam conveniently at home and report scores directly to over 1,500 leading US colleges without tedious test center scheduling.",
    badge: "Fast Results",
  },
  {
    title: "Personalized 1-on-1 F-1 Visa Preparation",
    description:
      "Rigorous consular mock interview coaching, DS-160 guidance, SEVIS payment support, and financial documentation review with high success rates.",
    badge: "Mock Interviews",
  },
  {
    title: "On-Campus Employment & OPT Placement",
    description:
      "Work up to 20 hours per week on campus during academic semesters and 40 hours during breaks, helping offset living expenses.",
    badge: "20 Hrs/Week",
  },
];

const usaIntakes = [
  "Fall / September Intake",
  "Spring / January Intake",
  "Summer / May Intake",
];

export default function USAPage() {
  return (
    <DestinationSimpleLayout
      destinationName="United States"
      countryCode="US"
      flag="🇺🇸"
      badgeText="American Higher Education"
      tagline="Unlock world-class research, merit scholarships, up to 3 years STEM OPT work rights, and comprehensive F-1 visa coaching with COSMOVERTEX."
      quickFacts={usaQuickFacts}
      highlights={usaHighlights}
      intakeOptions={usaIntakes}
      defaultIntake="Fall / September Intake"
    />
  );
}
