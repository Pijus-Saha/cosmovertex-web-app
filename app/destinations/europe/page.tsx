import type { Metadata } from "next";
import DestinationSimpleLayout, {
  QuickFact,
  HighlightItem,
} from "@/components/destination/DestinationSimpleLayout";

export const metadata: Metadata = {
  title: "Study in Europe — Greece, Lithuania, Slovenia & Malta | COSMOVERTEX",
  description:
    "Explore affordable European higher education with COSMOVERTEX. Study in Greece, Lithuania, Slovenia, and Malta with tuition from EUR 1,500–4,500/year, 29-country Schengen visa mobility, EnglishScore C1/DET acceptance, and QR-code compliant bank statement support.",
  alternates: { canonical: "/destinations/europe" },
};

const europeQuickFacts: QuickFact[] = [
  {
    label: "Average Tuition Fees",
    value: "€1,500 – €4,500 / yr",
    subtext: "Among the most budget-friendly European tuition structures.",
    tag: "Budget Friendly",
    icon: "tuition",
  },
  {
    label: "Top Intakes",
    value: "September & February",
    subtext: "September is the main intake; rolling spring admissions available.",
    tag: "Next: Fall Intake",
    icon: "intake",
  },
  {
    label: "Accepted English Tests",
    value: "EnglishScore C1, DET, IELTS",
    subtext: "Fast-track admission via British Council EnglishScore C1 or Duolingo.",
    tag: "Flexible English",
    icon: "test",
  },
  {
    label: "Post-Study Work Rights",
    value: "1 – 2 Years Stayback",
    subtext: "Includes seamless travel across 29 Schengen member states.",
    tag: "29 Schengen States",
    icon: "work",
  },
];

const europeHighlights: HighlightItem[] = [
  {
    title: "Focus on Top Affordable Destinations",
    description:
      "Target high-visa-ratio European hubs including Greece, Lithuania, Slovenia, and Malta with 100% English-taught Bachelor's and Master's curricula.",
    badge: "EU Member States",
  },
  {
    title: "Schengen Visa & Mobility Benefits",
    description:
      "Your student residence permit grants unrestricted travel across 29 Schengen member countries for study, internships, and European travel.",
    badge: "29 Countries",
  },
  {
    title: "QR-Code Bank Statement Compliant",
    description:
      "Full guidance adhering to Bangladesh Bank QR-coded electronic bank solvency certification to guarantee smooth embassy verification.",
    badge: "Visa Guaranteed",
  },
  {
    title: "Student Work Rights & Affordable Living",
    description:
      "Work up to 20 hours per week during semesters and full-time during vacations, with average living expenses ranging between €450 and €650 per month.",
    badge: "20 Hrs/Week",
  },
  {
    title: "Fast English Verification",
    description:
      "Direct university acceptance using British Council EnglishScore CEFR C1 or Duolingo English Test (DET) without mandatory IELTS delays.",
    badge: "No IELTS Required",
  },
];

const europeIntakes = [
  "Fall / September Intake",
  "Spring / February Intake",
  "Summer Session",
];

export default function EuropePage() {
  return (
    <DestinationSimpleLayout
      destinationName="Europe"
      countryCode="EU"
      flag="🇪🇺"
      badgeText="Schengen Higher Education"
      tagline="Pursue globally accredited degrees across Greece, Lithuania, Slovenia, and Malta with low tuition fees, Schengen mobility, and straightforward visa processing."
      quickFacts={europeQuickFacts}
      highlights={europeHighlights}
      intakeOptions={europeIntakes}
      defaultIntake="Fall / September Intake"
    />
  );
}
