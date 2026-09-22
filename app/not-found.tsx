import Link from "next/link";
import {
  Home,
  Compass,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Search,
} from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
};

const popularDestinations = [
  { href: "/destinations/usa", label: "USA", flag: "🇺🇸", badge: "STEM OPT" },
  { href: "/destinations/uk", label: "UK", flag: "🇬🇧", badge: "1-Yr Masters" },
  { href: "/destinations/canada", label: "Canada", flag: "🇨🇦", badge: "PGWP" },
  { href: "/destinations/australia", label: "Australia", flag: "🇦🇺", badge: "Regional PSW" },
  { href: "/destinations/south-korea", label: "South Korea", flag: "🇰🇷", badge: "SKY Univs" },
  { href: "/destinations/europe", label: "Europe", flag: "🇪🇺", badge: "Schengen" },
];

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center relative overflow-hidden px-4 py-24 sm:py-32 bg-gradient-to-b from-[#0A2342] via-[#091b33] to-slate-900 text-white">
      {/* Background ambient decorative blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>404 — Navigation Deviation</span>
        </div>

        {/* Big Code & Heading */}
        <div className="space-y-3">
          <div className="text-7xl sm:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-white/10 select-none">
            404
          </div>
          <h1 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Lost in the Cosmos? Let&apos;s Get You Back on Track
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
            The page or study abroad pathway you are looking for doesn&apos;t exist or has moved. Choose a destination below or return home.
          </p>
        </div>

        {/* Popular destinations shortcuts */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-emerald-400" />
            Popular Study Pathways
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {popularDestinations.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/40 text-left transition-all group"
              >
                <span className="flex items-center gap-2 text-xs font-medium text-white/90 group-hover:text-emerald-300">
                  <span className="text-base">{item.flag}</span>
                  <span>{item.label}</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-emerald-300 font-mono">
                  {item.badge}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all hover:scale-[1.02]"
          >
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Explore Test Prep & Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/8801316318387?text=Hi%20COSMOVERTEX,%20I%20need%20help%20finding%20information%20on%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-300 font-semibold text-sm border border-[#25D366]/40 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
