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
    "COSMOVERTEX — Bangladesh's most trusted English proficiency test preparation center. Expert coaching for Duolingo DET, British Council EnglishScore C1, EF SET, IELTS & PTE. Study abroad consultancy for Europe, South Korea, UK, USA & Australia.",
  keywords: [
    "COSMOVERTEX",
    "Duolingo DET preparation Bangladesh",
    "EnglishScore CEFR C1 coaching",
    "EF SET preparation Dhaka",
    "IELTS coaching Banani",
    "study abroad consultancy Bangladesh",
    "South Korea university admission Bangladesh",
    "English proficiency test prep Dhaka",
    "Doctor of SEL",
    "Sky2Edu",
    "Renaissance Edu Care",
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
      "1,800+ successful English proficiency test results. Expert coaching for Duolingo DET, EnglishScore C1, EF SET, IELTS & PTE. Study in South Korea, Europe, UK, USA, Australia.",
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
      "1,800+ successful tests. Expert Duolingo DET, EnglishScore C1, EF SET, IELTS coaching in Dhaka.",
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
  alternateName: "Doctor of SEL | Sky2Edu | Renaissance Edu Care",
  url: siteUrl,
  telephone: ["+8801316318387", "+8801346990025"],
  email: "info@cosmovertex.com",
  description:
    "English proficiency test preparation (Duolingo DET, EnglishScore C1, EF SET, IELTS, PTE) and study abroad consultancy for Europe, South Korea, UK, USA, and Australia.",
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
    {
      "@type": "Place",
      name: "Mohakhali Branch (Renaissance Edu Care)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "House #409, Road #29, Level 5A",
        addressLocality: "Mohakhali DOHS, Dhaka",
        postalCode: "1206",
        addressCountry: "BD",
      },
    },
  ],
  sameAs: [
    "https://wa.me/8801316318387",
    "https://www.facebook.com/share/1cDbjrn6XP/",
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
