"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const services = [
  { label: "Duolingo English Test (DET)", href: "/services?tab=duolingo" },
  { label: "CEFR C1 Advanced – EnglishScore", href: "/services?tab=englishscore" },
  { label: "EF SET Certificate Prep", href: "/services?tab=efset" },
  { label: "IELTS Academic / General", href: "/services?tab=ielts" },
  { label: "PTE Academic Coaching", href: "/services?tab=pte" },
  { label: "Student Success Gallery", href: "/gallery" },
];

const destinations = [
  { label: "Study in United States", href: "/destinations/usa" },
  { label: "Study in United Kingdom", href: "/destinations/uk" },
  { label: "Study in Canada", href: "/destinations/canada" },
  { label: "Study in Australia", href: "/destinations/australia" },
  { label: "Study in New Zealand", href: "/destinations/new-zealand" },
  { label: "Study in South Korea", href: "/destinations/south-korea" },
  { label: "Malaysia & Pathway Programs", href: "/destinations/malaysia" },
  { label: "Study in Europe (Schengen)", href: "/destinations/europe" },
];

const offices = [
  {
    name: "Banani Office",
    partner: "Sky2Edu / CosmoVertex",
    address: "House #38, Road #02, 1st Floor, Banani, Dhaka - 1213",
    icon: "🏢",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071829] text-white/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center group w-fit">
              <div className="bg-white rounded-xl px-2 py-1 shadow-md group-hover:opacity-90 transition-opacity">
                <Image
                  src="/cosmovertex-logo.png"
                  alt="COSMOVERTEX International Consultancy"
                  width={140}
                  height={46}
                  className="h-[42px] w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Bangladesh&apos;s trusted partner for English proficiency test prep
              and study abroad consultancy. Personalized coaching, small batches,
              proven results.
            </p>
            {/* Contact quick links */}
            <div className="space-y-2 pt-1">
              <a
                href="tel:+8801316318387"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#10b981]" />
                +880 1316-318387
              </a>
              <a
                href="mailto:info@cosmovertex.com"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#10b981]" />
                info@cosmovertex.com
              </a>
              <a
                href="https://wa.me/8801316318387"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#25D366] hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Chat on WhatsApp
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.facebook.com/CosmoVertex?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#1877F2] hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow on Facebook
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block link-underline"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Destinations
            </h3>
            <ul className="space-y-2">
              {destinations.map((d) => (
                <li key={d.label}>
                  <Link
                    href={d.href}
                    className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block link-underline"
                  >
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Office
            </h3>
            <div className="space-y-5">
              {offices.map((office) => (
                <div key={office.name} className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">{office.icon}</span>
                    <p className="text-white font-medium text-sm">
                      {office.name}
                    </p>
                  </div>
                  <p className="text-[11px] text-[#10b981] font-medium pl-6">
                    {office.partner}
                  </p>
                  <div className="flex gap-1.5 pl-6">
                    <MapPin className="w-3 h-3 text-white/40 mt-0.5 shrink-0" />
                    <p className="text-xs text-white/50 leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-slate-200 pt-6 pb-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-2 sm:flex-row sm:px-4">
          <p>© {currentYear} COSMOVERTEX. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed & Developed with Next.js by{" "}
            <a
              href="https://pijus-saha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-700 underline decoration-slate-400 underline-offset-2 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              Pijus Saha
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
