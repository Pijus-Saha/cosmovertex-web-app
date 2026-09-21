import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact COSMOVERTEX — Book Free Counseling",
  description:
    "Book a free English proficiency counseling session with COSMOVERTEX. Contact us via WhatsApp, phone, or email. Two offices in Banani and Mohakhali DOHS, Dhaka.",
  alternates: { canonical: "/contact" },
};

const offices = [
  {
    id: "banani",
    name: "Banani Office",
    partner: "Sky2Edu / CosmoVertex International",
    address: "House #38, Road #02, 1st Floor, Banani, Dhaka - 1213",
    phone: "+880 1316-318387",
    phone2: null,
    email: "info@cosmovertex.com",
    whatsappMsg: "Hello, I'd like to visit the Banani office.",
    hours: "Sat–Thu: 10am – 8pm",
    icon: "🏢",
    mapQuery: "Banani+Road+2+Dhaka",
  },
  {
    id: "mohakhali",
    name: "Mohakhali DOHS Branch",
    partner: "Renaissance Edu Care",
    address: "House #409, Road #29, Level 5A, Mohakhali DOHS, Dhaka - 1206",
    phone: "+880 1346-990025",
    phone2: "+880 1316-318387",
    email: "info@cosmovertex.com",
    whatsappMsg: "Hello, I'd like to visit the Mohakhali DOHS office.",
    hours: "Sat–Thu: 10am – 7pm",
    icon: "🏫",
    mapQuery: "Mohakhali+DOHS+Road+29+Dhaka",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Contact</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
            Book Your Free{" "}
            <span className="text-gradient-emerald">Counseling Session</span>
          </h1>
          <p className="text-white/75 text-xl max-w-2xl leading-relaxed">
            Personalized guidance for <strong>English Proficiency Test Prep</strong>,{" "}
            <strong>Study Abroad Admissions</strong>, and <strong>Visa Processing</strong>.
            Visit us in <strong>Banani</strong>, <strong>Mohakhali DOHS</strong>, or connect <strong>Online</strong>.
          </p>
        </div>
      </section>

      {/* Form + Quick Contact Split */}
      <section className="py-20 bg-brand-slate dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: Lead Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Free 30-Minute 1-on-1 Consultation
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0A2342] dark:text-slate-100 mb-2">
                    Book Your Free Counseling
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Select your service, preferred test or destination, and counseling mode.
                    Our certified mentors will craft an actionable, university-aligned roadmap.
                  </p>
                </div>
                <LeadForm />
              </div>
            </div>

            {/* Right: Contact details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
                <h3 className="font-heading font-bold text-[#0A2342] dark:text-slate-100 text-lg mb-5">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  {/* WhatsApp — Primary */}
                  <a
                    id="contact-whatsapp-primary"
                    href="https://wa.me/8801316318387"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#0A2342] text-sm">WhatsApp (Primary)</p>
                      <p className="text-[#059669] font-bold">+880 1316-318387</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-[#059669] transition-colors" />
                  </a>

                  {/* WhatsApp — Secondary */}
                  <a
                    id="contact-whatsapp-secondary"
                    href="https://wa.me/8801346990025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-600 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-slate-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#0A2342] dark:text-slate-100 text-sm">Secondary Line</p>
                      <p className="text-slate-600 dark:text-slate-400">+880 1346-990025</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    id="contact-email"
                    href="mailto:info@cosmovertex.com"
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-600 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-slate-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#0A2342] dark:text-slate-100 text-sm">Email</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">info@cosmovertex.com</p>
                    </div>
                  </a>

                  {/* Facebook */}
                  <a
                    id="contact-facebook"
                    href="https://www.facebook.com/share/1cDbjrn6XP/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/20 hover:bg-[#1877F2]/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 fill-white"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#0A2342] dark:text-slate-100 text-sm">Facebook Page</p>
                      <p className="text-[#1877F2] font-semibold text-xs">Follow COSMOVERTEX</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-[#1877F2] transition-colors" />
                  </a>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
                <h3 className="font-heading font-bold text-[#0A2342] dark:text-slate-100 text-lg mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-3">
                  {[
                    { step: "1", text: "We review your profile within 24 hours" },
                    { step: "2", text: "A counselor calls/WhatsApps to schedule a session" },
                    { step: "3", text: "Free 30-min consultation — test + university plan" },
                    { step: "4", text: "You decide — no pressure, no commitment" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#059669] flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900">
                <Clock className="w-5 h-5 text-[#059669] shrink-0" />
                <p className="text-sm text-[#059669] font-medium">
                  We respond within <strong>24 hours</strong> on business days.
                  For urgent queries, WhatsApp is fastest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Cards */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#059669] font-semibold text-sm uppercase tracking-wider mb-3">
              <MapPin className="w-4 h-4" />
              Our Offices
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-slate-100">
              Visit Us in Person
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office) => (
              <div
                key={office.id}
                id={`office-${office.id}`}
                className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-gradient" />

                <div className="text-4xl mb-4">{office.icon}</div>
                <h3 className="font-heading font-bold text-[#0A2342] dark:text-slate-100 text-xl mb-1">
                  {office.name}
                </h3>
                <p className="text-[#059669] text-sm font-semibold mb-5">
                  {office.partner}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{office.address}</p>
                  </div>
                  <div className="flex gap-2.5">
                    <Phone className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <a href={`tel:${office.phone.replace(/[\s-]/g, "")}`} className="text-slate-600 dark:text-slate-400 text-sm hover:text-[#059669] transition-colors block">
                        {office.phone}
                      </a>
                      {office.phone2 && (
                        <a href={`tel:${office.phone2.replace(/[\s-]/g, "")}`} className="text-slate-400 text-xs hover:text-[#059669] transition-colors">
                          {office.phone2}
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <Mail className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-slate-600 dark:text-slate-400 text-sm hover:text-[#059669] transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{office.hours}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/8801316318387?text=${encodeURIComponent(office.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
                    style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/${office.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-[#0A2342] dark:text-slate-100 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Directions
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            {[
              "✅ 1,800+ Successful Students",
              "✅ 4+ Years Experience",
              "✅ Free Initial Consultation",
              "✅ Max 10 Students/Batch",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                <span>{badge.replace("✅ ", "")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
