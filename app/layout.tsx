import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cosmovertex.edu.bd";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "COSMOVERTEX | Educational Consultancy & Test Preparation",
    template: "%s | COSMOVERTEX",
  },
  description:
    "Personalized study-abroad pathways to the USA, UK, Canada, Australia, New Zealand, South Korea, Malaysia (including Malaysia Pathway Programs), and Europe (Lithuania, Slovenia, Greece, Hungary, Sweden, Finland, Italy). Expert English proficiency coaching for Duolingo English Test (DET), CEFR C1 Advanced – EnglishScore Core Skills Test, EF SET, IELTS, and PTE.",
  keywords: [
    "COSMOVERTEX",
    "Duolingo English Test DET preparation",
    "CEFR C1 Advanced EnglishScore Core Skills Test",
    "EF SET preparation Dhaka",
    "IELTS coaching Bangladesh",
    "PTE Academic coaching Dhaka",
    "study abroad consultancy Bangladesh",
    "study in USA Canada UK Australia",
    "New Zealand student visa Bangladesh",
    "Malaysia pathway programs",
    "South Korea university admission",
    "Europe study visa Lithuania Slovenia Greece Hungary Sweden Finland Italy",
    "Doctor of SEL",
    "Sky2Edu",
  ],
  authors: [{ name: "COSMOVERTEX", url: siteUrl }],
  creator: "COSMOVERTEX",
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: siteUrl,
    siteName: "COSMOVERTEX",
    title:
      "COSMOVERTEX | English Test Prep & Study Abroad Consultancy, Dhaka",
    description:
      "Personalized study-abroad pathways to the USA, UK, Canada, Australia, New Zealand, South Korea, Malaysia (including Malaysia Pathway Programs), and Europe (Lithuania, Slovenia, Greece, Hungary, Sweden, Finland, Italy). Expert coaching for Duolingo English Test (DET), CEFR C1 Advanced – EnglishScore Core Skills Test, EF SET, IELTS, and PTE.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "COSMOVERTEX — Study Abroad Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COSMOVERTEX — English Test Prep & Study Abroad",
    description:
      "Personalized study-abroad pathways to USA, UK, Canada, Australia, New Zealand, South Korea, Malaysia & Europe. Coaching for DET, CEFR C1 EnglishScore, EF SET, IELTS & PTE.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "COSMOVERTEX",
  alternateName: "Doctor of SEL | Sky2Edu",
  url: siteUrl,
  telephone: "+8801316318387",
  email: "info@cosmovertex.com",
  description:
    "Personalized study-abroad pathways to the USA, UK, Canada, Australia, New Zealand, South Korea, Malaysia, and Europe (Lithuania, Slovenia, Greece, Hungary, Sweden, Finland, Italy), plus Malaysia Pathway Programs leading to USA, UK, Canada, and Australia. Expert coaching for Duolingo English Test (DET), CEFR C1 Advanced – EnglishScore Core Skills Test, EF SET, IELTS, and PTE.",
  areaServed: "Bangladesh",
  foundingDate: "2020",
  location: [
    {
      "@type": "Place",
      name: "Banani Office (Sky2Edu / CosmoVertex)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "House #38, Road #02, 1st Floor",
        addressLocality: "Banani, Dhaka",
        postalCode: "1213",
        addressCountry: "BD",
      },
    },
  ],
  sameAs: [
    "https://wa.me/8801316318387",
    "https://www.facebook.com/CosmoVertex?_rdc=1&_rdr#",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
