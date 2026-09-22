import type { Metadata } from "next";
import DestinationSimpleLayout, {
  QuickFact,
  HighlightItem,
} from "@/components/destination/DestinationSimpleLayout";

export const metadata: Metadata = {
  title: "Study in Europe — Lithuania, Slovenia, Greece, Hungary, Sweden, Finland & Italy",
  description:
    "Explore personalized European study-abroad pathways with COSMOVERTEX. Study across Lithuania, Slovenia, Greece, Hungary, Sweden, Finland, and Italy with tuition from EUR 1,500–5,000/year, 29-country Schengen visa mobility, and EnglishScore C1/DET acceptance.",
  alternates: { canonical: "/destinations/europe" },
};

const europeQuickFacts: QuickFact[] = [
  {
    label: "Average Tuition Fees",
    value: "€1,500 – €5,000 / yr",
    subtext: "Among the most accessible tuition structures across EU universities.",
    tag: "Budget Friendly",
    icon: "tuition",
  },
  {
    label: "Top Intakes",
    value: "September & February",
    subtext: "September (Fall) is primary; rolling spring and winter admissions available.",
    tag: "Next: Fall Intake",
    icon: "intake",
  },
  {
    label: "Accepted English Tests",
    value: "EnglishScore C1, DET, IELTS",
    subtext: "Fast-track admission via British Council EnglishScore C1, Duolingo DET, or EF SET.",
    tag: "Flexible English",
    icon: "test",
  },
  {
    label: "Post-Study Work Rights",
    value: "1 – 2 Years Stayback",
    subtext: "Graduate job-seeker visas and seamless travel across 29 Schengen member states.",
    tag: "29 Schengen States",
    icon: "work",
  },
];

const europeHighlights: HighlightItem[] = [
  {
    title: "Focus on Top European Study Hubs",
    description:
      "Direct university applications across Lithuania, Slovenia, Greece, Hungary, Sweden, Finland, and Italy with 100% English-taught Bachelor's and Master's degree programs.",
    badge: "7 Key EU Nations",
  },
  {
    title: "Schengen Visa & Unrestricted Mobility",
    description:
      "Your European student residence permit grants visa-free travel and exploration across all 29 Schengen member countries for study, research, and internships.",
    badge: "29 Countries",
  },
  {
    title: "Top Nordic & Historic Mediterranean Institutions",
    description:
      "From cutting-edge tech and sustainability hubs in Sweden and Finland to historic universities in Italy, Hungary, Greece, Lithuania, and Slovenia.",
    badge: "World-Class Unis",
  },
  {
    title: "QR-Code Bank Statement Compliant",
    description:
      "Full guidance adhering to Bangladesh Bank QR-coded electronic bank solvency certification to guarantee seamless embassy and VFS verification.",
    badge: "Visa Guaranteed",
  },
  {
    title: "Part-Time Student Work & Post-Study Visas",
    description:
      "Work up to 20–30 hours per week depending on the country, with average student living expenses starting from €450 to €750 per month.",
    badge: "Work Rights",
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
      destinationName="Europe (Schengen)"
      countryCode="EU"
      flag="🇪🇺"
      badgeText="Schengen Higher Education"
      tagline="Pursue globally accredited degrees across Lithuania, Slovenia, Greece, Hungary, Sweden, Finland, and Italy with affordable tuition, Schengen mobility, and comprehensive visa support with COSMOVERTEX."
      quickFacts={europeQuickFacts}
      highlights={europeHighlights}
      intakeOptions={europeIntakes}
      defaultIntake="Fall / September Intake"
    />
  );
}
