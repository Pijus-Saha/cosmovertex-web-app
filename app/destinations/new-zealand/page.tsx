import type { Metadata } from "next";
import DestinationSimpleLayout, {
  QuickFact,
  HighlightItem,
} from "@/components/destination/DestinationSimpleLayout";

export const metadata: Metadata = {
  title: "Study in New Zealand — 3-Yr Post-Study Work, Green List & Top Unis",
  description:
    "Study in New Zealand with COSMOVERTEX. All 8 public universities ranked in the global top 3%, up to 3 years Post-Study Work Visa, Straight-to-Residence Green List pathways, and 20 hrs/week student work rights.",
  alternates: { canonical: "/destinations/new-zealand" },
};

const newZealandQuickFacts: QuickFact[] = [
  {
    label: "Average Tuition Fees",
    value: "NZD $22,000 – $36,000 / yr",
    subtext: "Competitive tuition with world-class education standards across all 8 NZ universities.",
    tag: "Global Top 3%",
    icon: "tuition",
  },
  {
    label: "Top Intakes",
    value: "February & July",
    subtext: "February (Semester 1) is main intake; July (Semester 2) widely available.",
    tag: "Next: Semester 1",
    icon: "intake",
  },
  {
    label: "Accepted English Tests",
    value: "IELTS, PTE, TOEFL, DET",
    subtext: "PTE Academic and IELTS accepted by all NZ universities and Immigration New Zealand.",
    tag: "IELTS / PTE",
    icon: "test",
  },
  {
    label: "Post-Study Work Rights",
    value: "Up to 3 Years Open Work",
    subtext: "Up to 36 months Post-Study Work Visa for degree and postgraduate qualifications.",
    tag: "3-Yr Post-Study Work",
    icon: "work",
  },
];

const newZealandHighlights: HighlightItem[] = [
  {
    title: "All 8 Public Universities Ranked in Global Top 3%",
    description:
      "New Zealand is the only country where 100% of public universities (Auckland, Otago, Canterbury, Victoria, Waikato, Massey, Lincoln, AUT) are globally ranked.",
    badge: "World-Class Quality",
  },
  {
    title: "Straight-to-Residence & Green List Career Pathways",
    description:
      "Specialized in-demand qualifications in engineering, IT, healthcare, teaching, and construction qualify for fast-tracked New Zealand residence visas.",
    badge: "Green List Careers",
  },
  {
    title: "Up to 3 Years Post-Study Work Visa (PSWV)",
    description:
      "Work in any sector for up to 3 years post-graduation. Spouses are eligible for open work rights on postgraduate degrees.",
    badge: "3-Yr PSWV",
  },
  {
    title: "Safe, Peaceful & Multicultural Society",
    description:
      "Consistently ranked among the top 2 safest and least corrupt countries worldwide, offering unparalleled natural beauty and quality of life.",
    badge: "Top 2 Safest",
  },
  {
    title: "20 Hours/Week Work Rights During Study",
    description:
      "Work up to 20 hours per week during teaching semesters and full-time (40 hours) during scheduled vacations to offset living costs.",
    badge: "20 Hrs/Week",
  },
];

const newZealandIntakes = [
  "Semester 1 / February Intake",
  "Semester 2 / July Intake",
  "Summer Term / November Intake",
];

export default function NewZealandPage() {
  return (
    <DestinationSimpleLayout
      destinationName="New Zealand"
      countryCode="NZ"
      flag="🇳🇿"
      badgeText="Kiwi Higher Education"
      tagline="Experience world-class education in New Zealand with up to 3 years Post-Study Work rights, Green List residence pathways, and high student visa success with COSMOVERTEX."
      quickFacts={newZealandQuickFacts}
      highlights={newZealandHighlights}
      intakeOptions={newZealandIntakes}
      defaultIntake="Semester 1 / February Intake"
    />
  );
}
