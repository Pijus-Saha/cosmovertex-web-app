import type { Metadata } from "next";
import DestinationSimpleLayout, {
  QuickFact,
  HighlightItem,
} from "@/components/destination/DestinationSimpleLayout";

export const metadata: Metadata = {
  title: "Study in South Korea — SKY Universities, EF SET & High Visa Ratio | COSMOVERTEX",
  description:
    "Study in South Korea from Bangladesh. Tuition USD 3,000–8,000/year, March and September intakes, EF SET, DET, or IELTS accepted, top SKY universities (Seoul National, Yonsei, Korea University), and high visa approval rates.",
  alternates: { canonical: "/destinations/south-korea" },
};

const southKoreaQuickFacts: QuickFact[] = [
  {
    label: "Average Tuition Fees",
    value: "$3,000 – $8,000 / yr",
    subtext: "Among the lowest international tuition costs for top-tier Asian universities.",
    tag: "Affordable",
    icon: "tuition",
  },
  {
    label: "Top Intakes",
    value: "March & September",
    subtext: "Spring (March) is the primary academic session; Fall (September) offers full admissions.",
    tag: "Next: Fall / Sept Intake",
    icon: "intake",
  },
  {
    label: "Accepted English Tests",
    value: "EF SET, DET, IELTS",
    subtext: "EF SET Certificate & Duolingo English Test accepted for English-taught degrees.",
    tag: "EF SET Accepted",
    icon: "test",
  },
  {
    label: "Post-Study Work Rights",
    value: "D-10 Jobseeker & E-7 Visa",
    subtext: "Up to 2 years D-10 job search visa transitioning to E-7 professional work status.",
    tag: "D-10 Visa",
    icon: "work",
  },
];

const southKoreaHighlights: HighlightItem[] = [
  {
    title: "Prestigious SKY & Leading Tech Universities",
    description:
      "Secure offers from elite institutions including Seoul National University (SNU), Yonsei, Korea University, KAIST, and Hanyang.",
    badge: "Top 50 Global",
  },
  {
    title: "High Student Visa Approval Rate",
    description:
      "South Korea maintains one of the highest visa success rates for Bangladeshi applicants with streamlined embassy file preparation.",
    badge: "High Visa Success",
  },
  {
    title: "Government & University Scholarships (GKS)",
    description:
      "Opportunity to win fully-funded Global Korea Scholarships (GKS) covering 100% tuition, monthly stipends, and flight allowances.",
    badge: "100% Scholarships",
  },
  {
    title: "Accepted English Tests: EF SET & DET",
    description:
      "Fast, cost-free or low-cost English certification through EF SET C1 or Duolingo English Test without the high costs of IELTS.",
    badge: "Cost-Free Test Options",
  },
  {
    title: "Global Tech Capital & Student Work Rights",
    description:
      "Work part-time up to 25 hours per week during semesters and gain career access to global giants like Samsung, LG, Hyundai, and Coupang.",
    badge: "25 Hrs/Week",
  },
];

const southKoreaIntakes = [
  "Fall / September Intake",
  "Spring / March Intake",
  "Summer Language Session",
];

export default function SouthKoreaPage() {
  return (
    <DestinationSimpleLayout
      destinationName="South Korea"
      countryCode="KR"
      flag="🇰🇷"
      badgeText="Korean Higher Education"
      tagline="Study at world-renowned SKY universities with affordable tuition, high visa grant rates, EF SET / DET acceptance, and rich tech career opportunities."
      quickFacts={southKoreaQuickFacts}
      highlights={southKoreaHighlights}
      intakeOptions={southKoreaIntakes}
      defaultIntake="Fall / September Intake"
    />
  );
}
