import type { Metadata } from "next";
import DestinationSimpleLayout, {
  QuickFact,
  HighlightItem,
} from "@/components/destination/DestinationSimpleLayout";

export const metadata: Metadata = {
  title: "Study in Malaysia & Malaysia Pathway Programs (USA, UK, Canada, Australia) | COSMOVERTEX",
  description:
    "Study in Malaysia with COSMOVERTEX. Access affordable quality degrees, foreign branch campuses (Monash, Nottingham, Curtin), and innovative Malaysia Pathway Programs (1+3, 2+2, 2+1) transferring seamlessly to the USA, UK, Canada, and Australia.",
  alternates: { canonical: "/destinations/malaysia" },
};

const malaysiaQuickFacts: QuickFact[] = [
  {
    label: "Average Tuition Fees",
    value: "$3,000 – $7,500 / yr",
    subtext: "Save 50% to 70% on tuition while earning globally recognized credentials.",
    tag: "Ultra Affordable",
    icon: "tuition",
  },
  {
    label: "Malaysia Pathway Programs",
    value: "USA, UK, Canada & Australia",
    subtext: "1+3, 2+2, or 2+1 twinning programs transferring credits directly to top Western universities.",
    tag: "Transfer Pathways",
    icon: "work",
  },
  {
    label: "Top Intakes",
    value: "March, July & October",
    subtext: "Multiple rolling intakes throughout the academic calendar year.",
    tag: "Multiple Intakes",
    icon: "intake",
  },
  {
    label: "Accepted English Tests",
    value: "IELTS, PTE, DET, EnglishScore",
    subtext: "Flexible entry routes; university internal placement tests also accepted.",
    tag: "Flexible English",
    icon: "test",
  },
];

const malaysiaHighlights: HighlightItem[] = [
  {
    title: "Malaysia Pathway Programs to USA, UK, Canada & Australia",
    description:
      "Study your foundational 1 to 2 years in Malaysia at a fraction of Western costs, then smoothly transfer directly into partner universities in the USA, UK, Canada, or Australia to complete your degree.",
    badge: "1+3 / 2+2 Pathways",
  },
  {
    title: "World-Renowned Foreign University Branch Campuses",
    description:
      "Earn authentic degrees from Monash University Malaysia, University of Nottingham Malaysia, Curtin University Malaysia, and Heriot-Watt University with identical curriculum and degree certificates.",
    badge: "Top Global Branches",
  },
  {
    title: "Huge Cost Savings on Prestigious International Degrees",
    description:
      "Save up to 60–70% on overall tuition and living expenses compared to studying directly in North America, the UK, or Australasia for the full 4 years.",
    badge: "Save 60–70% Cost",
  },
  {
    title: "Straightforward EMGS Visa Processing & High Approval",
    description:
      "Education Malaysia Global Services (EMGS) electronic visa approval letters (eVAL) offer predictable timelines with zero complex embassy interview barriers.",
    badge: "High Visa Rate",
  },
  {
    title: "Vibrant, Safe, Multicultural Asian Education Hub",
    description:
      "Experience world-class student facilities, affordable halal food, safe modern cities, and a comfortable lifestyle in Kuala Lumpur, Penang, and Johor.",
    badge: "Modern Campus Life",
  },
];

const malaysiaIntakes = [
  "March / Spring Intake",
  "July / Summer Intake",
  "October / Fall Intake",
  "Rolling Monthly Intakes (Selected Campuses)",
];

export default function MalaysiaPage() {
  return (
    <DestinationSimpleLayout
      destinationName="Malaysia & Pathway Programs"
      countryCode="MY"
      flag="🇲🇾"
      badgeText="Direct Degrees & Global Pathways"
      tagline="Earn world-class degrees in Malaysia or leverage our innovative Malaysia Pathway Programs (1+3, 2+2, 2+1) transferring seamlessly into leading universities in the USA, UK, Canada, and Australia."
      quickFacts={malaysiaQuickFacts}
      highlights={malaysiaHighlights}
      intakeOptions={malaysiaIntakes}
      defaultIntake="March / Spring Intake"
    />
  );
}
