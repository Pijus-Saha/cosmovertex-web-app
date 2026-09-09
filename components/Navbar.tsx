"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const destinationLinks = [
  {
    href: "/destinations/south-korea",
    label: "South Korea",
    flag: "🇰🇷",
    badge: "EF SET C1",
    desc: "SKY Universities & GKS Scholarships",
  },
  {
    href: "/destinations/europe",
    label: "Europe (Schengen)",
    flag: "🇪🇺",
    badge: "€1.5k–€4.5k",
    desc: "Germany, Poland, Lithuania, Malta & more",
  },
  {
    href: "/destinations/uk",
    label: "United Kingdom",
    flag: "🇬🇧",
    badge: "1-Yr Masters",
    desc: "2-Yr PSW & with/without IELTS routes",
  },
  {
    href: "/destinations/usa",
    label: "United States",
    flag: "🇺🇸",
    badge: "3-Yr STEM OPT",
    desc: "Merit scholarships & F-1 visa prep",
  },
  {
    href: "/destinations/australia",
    label: "Australia",
    flag: "🇦🇺",
    badge: "Regional PSW",
    desc: "High wages & Genuine Student guidance",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDestinationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setDestinationsOpen(false);
  }

  const isDestinationActive = pathname.startsWith("/destinations");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-navy shadow-lg shadow-black/20 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="bg-white rounded-xl px-2 py-1 shadow-md group-hover:shadow-lg group-hover:scale-[1.03] transition-all duration-200">
              <Image
                src="/cosmovertex-logo.png"
                alt="COSMOVERTEX International Consultancy"
                width={140}
                height={46}
                className="h-[38px] w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 link-underline",
                pathname === "/"
                  ? "text-[#10b981] bg-white/10"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              Home
            </Link>

            <Link
              href="/services"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 link-underline",
                pathname === "/services"
                  ? "text-[#10b981] bg-white/10"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              Services
            </Link>

            {/* Destinations Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDestinationsOpen(!destinationsOpen)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer",
                  isDestinationActive || destinationsOpen
                    ? "text-[#10b981] bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
                aria-expanded={destinationsOpen}
              >
                <span>Destinations</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    destinationsOpen && "rotate-180 text-[#10b981]"
                  )}
                />
              </button>

              <AnimatePresence>
                {destinationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-72 pt-2 z-50"
                  >
                    <div className="bg-[#0A2342]/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/15 dark:border-slate-800 rounded-2xl p-2.5 shadow-2xl shadow-black/40">
                      <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 border-b border-white/10 dark:border-slate-800 mb-1 flex items-center gap-1.5">
                        <Globe className="w-3 h-3 text-emerald-400" />
                        Explore Study Destinations
                      </div>

                      {destinationLinks.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "flex items-start gap-3 p-2.5 rounded-xl text-left transition-all duration-150 group",
                              isActive
                                ? "bg-emerald-500/20 text-emerald-300"
                                : "hover:bg-white/10 text-white/90"
                            )}
                          >
                            <span className="text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                              {item.flag}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <span className="text-sm font-semibold truncate group-hover:text-emerald-300 transition-colors">
                                  {item.label}
                                </span>
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/10 text-emerald-300 shrink-0">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-white/50 truncate">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 link-underline",
                pathname === "/contact"
                  ? "text-[#10b981] bg-white/10"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/8801316318387"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
            <a
              href="https://www.facebook.com/share/1cDbjrn6XP/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
              aria-label="Facebook Page"
            >
              <svg
                className="w-4 h-4 fill-[#1877F2] shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="hidden lg:inline">Facebook</span>
            </a>
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-amber-gradient text-amber-900 font-semibold text-sm hover:opacity-90 transition-all hover:scale-[1.03] shadow-md shadow-amber-500/20"
            >
              Book Free Counseling
            </Link>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              id="mobile-menu-toggle"
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass-navy border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              <Link
                href="/"
                className={cn(
                  "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  pathname === "/"
                    ? "text-[#10b981] bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                Home
              </Link>

              <Link
                href="/services"
                className={cn(
                  "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  pathname === "/services"
                    ? "text-[#10b981] bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                Services
              </Link>

              {/* Mobile Destinations Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileDestOpen(!mobileDestOpen)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isDestinationActive
                      ? "text-[#10b981] bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  <span>Destinations</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      mobileDestOpen && "rotate-180 text-[#10b981]"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {mobileDestOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 pr-2 py-1 space-y-1 overflow-hidden"
                    >
                      {destinationLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors",
                            pathname === item.href
                              ? "text-emerald-400 bg-white/10"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          )}
                        >
                          <span className="flex items-center gap-2">
                            <span>{item.flag}</span>
                            <span>{item.label}</span>
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-emerald-300">
                            {item.badge}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className={cn(
                  "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  pathname === "/contact"
                    ? "text-[#10b981] bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                Contact
              </Link>

              <div className="pt-2 space-y-2">
                <a
                  href="https://wa.me/8801316318387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
                <a
                  href="https://www.facebook.com/share/1cDbjrn6XP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <svg
                    className="w-4 h-4 fill-[#1877F2] shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Follow on Facebook
                </a>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-2.5 rounded-lg bg-amber-gradient text-amber-900 font-semibold text-sm"
                >
                  Book Free Counseling
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
