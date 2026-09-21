"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  BookOpen,
  Compass,
  MapPin,
  Building2,
  Globe,
  Phone,
  User,
  Mail,
} from "lucide-react";
import { normalizeBdPhoneNumber } from "@/lib/utils";

export type ServiceType = "all_in_one" | "study_abroad" | "test_prep";
export type CounselingMode = "banani" | "mohakhali" | "online";

const leadSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Full name must be at least 2 characters")
      .max(80, "Full name cannot exceed 80 characters"),
    phoneNumber: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .regex(
        /^(\+?8801|01|\+?[0-9])[0-9\s-]{8,14}$/,
        "Please enter a valid mobile number (e.g., 01316318387 or +8801316318387)"
      ),
    email: z
      .string()
      .email("Please enter a valid email address")
      .or(z.literal(""))
      .optional(),
    serviceType: z.enum(["all_in_one", "study_abroad", "test_prep"], {
      message: "Please choose your primary service",
    }),
    targetDestination: z.string().optional(),
    studyLevel: z.string().optional(),
    targetIntake: z.string().optional(),
    preferredTest: z.string().optional(),
    coachingFormat: z.string().optional(),
    counselingMode: z.enum(["banani", "mohakhali", "online"], {
      message: "Please select how you'd like to consult with our mentors",
    }),
    academicBackground: z.string().optional(),
    notes: z.string().max(500, "Notes cannot exceed 500 characters").optional(),
  })
  .superRefine((data, ctx) => {
    if (data.serviceType !== "test_prep" && !data.targetDestination) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["targetDestination"],
        message: "Please select your target country or choose 'Need Counselor Advice'",
      });
    }
    if (data.serviceType !== "study_abroad" && !data.preferredTest) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["preferredTest"],
        message: "Please choose an English test or 'Assessment Test Needed'",
      });
    }
  });

export type LeadFormData = z.infer<typeof leadSchema>;

interface LeadFormProps {
  compact?: boolean;
  defaultDestination?: string;
  defaultTest?: string;
  defaultService?: ServiceType;
  defaultMode?: CounselingMode;
}

// Destinations supported by COSMOVERTEX
const destinationOptions = [
  { id: "South Korea", name: "South Korea", icon: "🇰🇷", badge: "SKY Univs • Low Tuition" },
  { id: "Australia", name: "Australia", icon: "🇦🇺", badge: "Fusion College Partner • PSW" },
  { id: "Europe", name: "Europe / Schengen", icon: "🇪🇺", badge: "Greece, Malta, Lithuania" },
  { id: "UK", name: "United Kingdom", icon: "🇬🇧", badge: "Russell Group • 2-Yr PSW" },
  { id: "USA", name: "United States", icon: "🇺🇸", badge: "STEM OPT • Top Unis" },
  { id: "Undecided", name: "Need Counselor Advice", icon: "🧭", badge: "Profile Evaluation" },
];

// Tests coached by COSMOVERTEX
const testOptions = [
  {
    id: "EnglishScore C1",
    name: "British Council EnglishScore",
    badge: "1,800+ Results • C1 Advanced",
    icon: "🏅",
  },
  {
    id: "DET",
    name: "Duolingo English Test (DET)",
    badge: "110+ Target • Fast-Track",
    icon: "🎯",
  },
  {
    id: "EF SET",
    name: "EF SET Certificate",
    badge: "South Korea & EU Ready",
    icon: "🌏",
  },
  {
    id: "IELTS",
    name: "IELTS Academic",
    badge: "Band 6.5–7.5+ Target",
    icon: "📚",
  },
  {
    id: "PTE",
    name: "PTE Academic",
    badge: "Fast AI Results",
    icon: "⚡",
  },
  {
    id: "Undecided",
    name: "Assessment Test Needed",
    badge: "Free Diagnostic Check",
    icon: "🔍",
  },
];

const studyLevels = [
  "Bachelor's / Undergraduate",
  "Master's / Postgraduate",
  "Foundation / Diploma",
  "PhD / Doctoral Research",
  "Language School Pathway",
];

const intakeOptions = [
  "Fall / September Intake",
  "Spring / March Intake",
  "Summer / Mid-Year Intake",
  "Winter / January Intake",
  "Flexible / Earliest Available",
];

const coachingFormats = [
  { id: "Small Batch", label: "Small Cohort Batch (Max 5–10 students)", icon: "👥" },
  { id: "Crash Course", label: "Intensive Fast-Track Crash Course (2–3 Weeks)", icon: "⚡" },
  { id: "1-on-1 VIP", label: "1-on-1 VIP Private Mentorship", icon: "🎯" },
  { id: "Mock & Booking", label: "Mock Exam Simulation & Slot Booking Only", icon: "📝" },
];

const academicBackgrounds = [
  "HSC / Alim (Passed or Appearing)",
  "A-Levels / Cambridge (Passed or Appearing)",
  "Undergraduate / Bachelor's Degree (Completed)",
  "Enrolled University Student (Transfer / Masters)",
  "Working Professional",
];

const counselingModes = [
  {
    id: "banani" as const,
    title: "Banani Office (In-Person)",
    subtitle: "House #38, Road #02, 1st Floor, Banani",
    icon: Building2,
    badge: "Dhaka Central",
  },
  {
    id: "mohakhali" as const,
    title: "Mohakhali DOHS (In-Person)",
    subtitle: "House #409, Road #29, Level 5A, Mohakhali DOHS",
    icon: MapPin,
    badge: "DOHS Branch",
  },
  {
    id: "online" as const,
    title: "Online Video / Call",
    subtitle: "Google Meet, Zoom, or WhatsApp Live Session",
    icon: Globe,
    badge: "Anywhere in BD & Abroad",
  },
];

export default function LeadForm({
  compact = false,
  defaultDestination,
  defaultTest,
  defaultService = "all_in_one",
  defaultMode = "banani",
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedLead, setSubmittedLead] = useState<LeadFormData | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      serviceType: defaultService,
      targetDestination: defaultDestination || "South Korea",
      preferredTest: defaultTest || "EnglishScore C1",
      studyLevel: "Bachelor's / Undergraduate",
      targetIntake: "Fall / September Intake",
      coachingFormat: "Small Batch",
      counselingMode: defaultMode,
      academicBackground: "HSC / Alim (Passed or Appearing)",
      email: "",
      notes: "",
    },
  });

  const selectedService = watch("serviceType");
  const selectedDestination = watch("targetDestination");
  const selectedTest = watch("preferredTest");
  const selectedMode = watch("counselingMode");
  const watchedNotes = watch("notes") || "";

  // Handle service change and clear unneeded errors
  const handleServiceChange = (serviceId: ServiceType) => {
    setValue("serviceType", serviceId, { shouldValidate: true });
    if (serviceId === "test_prep") {
      clearErrors("targetDestination");
    }
    if (serviceId === "study_abroad") {
      clearErrors("preferredTest");
    }
  };

  // Sync URL query params if present (e.g., /contact?destination=South+Korea)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const destParam = params.get("destination");
      const serviceParam = params.get("service") as ServiceType | null;
      const testParam = params.get("test");

      if (destParam) {
        setValue("targetDestination", destParam);
      }
      if (testParam) {
        setValue("preferredTest", testParam);
      }
      if (serviceParam && ["all_in_one", "study_abroad", "test_prep"].includes(serviceParam)) {
        setValue("serviceType", serviceParam);
      }
    }
  }, [setValue]);

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8801316318387";

  const getWhatsAppUrl = (lead: LeadFormData) => {
    let serviceText = "Complete Study Abroad & English Test Prep Pathway";
    if (lead.serviceType === "study_abroad") serviceText = "Study Abroad & University Admissions";
    if (lead.serviceType === "test_prep") serviceText = "English Proficiency Test Preparation";

    let modeText = "Banani Office";
    if (lead.counselingMode === "mohakhali") modeText = "Mohakhali DOHS Branch";
    if (lead.counselingMode === "online") modeText = "Online Video/Call";

    let detailsPart = "";
    if (lead.serviceType !== "test_prep") {
      detailsPart += `\n🌍 Target: ${lead.targetDestination || "Guidance needed"} (${lead.studyLevel || ""})`;
    }
    if (lead.serviceType !== "study_abroad") {
      detailsPart += `\n📝 Test: ${lead.preferredTest || "Assessment needed"} (${lead.coachingFormat || ""})`;
    }

    const normalizedPhone = normalizeBdPhoneNumber(lead.phoneNumber);

    const text = `Hi COSMOVERTEX, my name is ${lead.fullName}.
I just booked a Free Counseling session through your website!

📌 Service: ${serviceText}${detailsPart}
📍 Preferred Mode: ${modeText}
📱 Contact: ${normalizedPhone} (${lead.phoneNumber})
${lead.academicBackground ? `🎓 Background: ${lead.academicBackground}` : ""}
${lead.notes ? `💬 Note: ${lead.notes}` : ""}

Please confirm my counseling appointment schedule. Thank you!`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  // Dynamic context-aware notes placeholder
  const getNotesPlaceholder = () => {
    if (selectedService === "test_prep") {
      return "e.g. Aiming for DET 115+ or EnglishScore C1 within 3 weeks. Need intensive speaking and writing correction.";
    }
    if (selectedService === "study_abroad") {
      return "e.g. Planning for South Korea SKY universities or Fusion College Sydney. Need scholarship assessment.";
    }
    return "e.g. Want an end-to-end plan: EnglishScore prep + Master's admission in South Korea or Australia.";
  };

  const onSubmit = async (data: LeadFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.error || "Failed to submit counseling request.");
      }

      setSubmittedLead(data);
      setStatus("success");
      reset();
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please contact our counseling desk on WhatsApp.";
      setErrorMessage(msg);
      setStatus("error");
    }
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status === "success" && submittedLead ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/40 dark:via-slate-900 dark:to-teal-950/30 p-6 sm:p-10 border border-emerald-200 dark:border-emerald-800/80 shadow-xl text-center space-y-6"
          >
            {/* Success Icon */}
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Counseling Session Successfully Registered
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0A2342] dark:text-slate-100">
                You&apos;re All Set, {submittedLead.fullName}!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
                Your counseling booking has been routed to our senior advisor desk.
                We have notified our admissions team at{" "}
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-700 dark:text-slate-300 font-mono">
                  info@cosmovertex.com
                </code>
                .
              </p>
            </div>

            {/* Detailed Summary Card */}
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 text-xs text-left space-y-2.5 shadow-sm">
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/60 pb-2">
                <span className="text-slate-400">Selected Service:</span>
                <span className="font-bold text-[#0A2342] dark:text-slate-100">
                  {submittedLead.serviceType === "all_in_one"
                    ? "🚀 All-in-One Pathway"
                    : submittedLead.serviceType === "study_abroad"
                    ? "🎓 Study Abroad & Visa"
                    : "📝 English Test Prep"}
                </span>
              </div>

              {submittedLead.serviceType !== "test_prep" && (
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/60 pb-2">
                  <span className="text-slate-400">Target Destination:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {submittedLead.targetDestination} ({submittedLead.studyLevel})
                  </span>
                </div>
              )}

              {submittedLead.serviceType !== "study_abroad" && (
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/60 pb-2">
                  <span className="text-slate-400">English Test Prep:</span>
                  <span className="font-semibold text-amber-600 dark:text-amber-400">
                    {submittedLead.preferredTest} ({submittedLead.coachingFormat})
                  </span>
                </div>
              )}

              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/60 pb-2">
                <span className="text-slate-400">Counseling Location:</span>
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  {submittedLead.counselingMode === "banani"
                    ? "🏢 Banani Office"
                    : submittedLead.counselingMode === "mohakhali"
                    ? "🏫 Mohakhali DOHS Branch"
                    : "🌐 Online Video/Call"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Direct Phone:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {submittedLead.phoneNumber}
                </span>
              </div>
            </div>

            {/* Prominent WhatsApp Verification CTA (No popup blocker) */}
            <div className="space-y-3 pt-2">
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                ⚡ For immediate priority scheduling, tap below to confirm your time slot on WhatsApp:
              </p>
              <a
                href={getWhatsAppUrl(submittedLead)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-xl shadow-green-500/25 transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Confirm on WhatsApp Desk (+{whatsappNumber})</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Reset option */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setSubmittedLead(null);
                }}
                className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 underline transition-colors cursor-pointer"
              >
                Submit another response
              </button>
            </div>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className={`space-y-6 sm:space-y-7 ${compact ? "space-y-4" : ""}`}
          >
            {/* ── STEP PROGRESS TRACKER ─────────────────────────── */}
            <div className="flex items-center justify-between px-1 py-1.5 bg-slate-100/70 dark:bg-slate-800/70 rounded-xl text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-white dark:bg-slate-700 text-[#0A2342] dark:text-slate-100 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                1. Service
              </span>
              <span className="text-slate-300 dark:text-slate-600">→</span>
              <span className="px-2 py-0.5">2. Custom Focus</span>
              <span className="text-slate-300 dark:text-slate-600">→</span>
              <span className="px-2 py-0.5">3. Branch Mode</span>
              <span className="text-slate-300 dark:text-slate-600">→</span>
              <span className="px-2 py-0.5">4. Profile</span>
            </div>

            {/* ── STEP 1: SERVICE SELECTOR ──────────────────────── */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  1. Select Your Service of Interest <span className="text-rose-500">*</span>
                </label>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  Personalized Guidance
                </span>
              </div>

              <div
                role="radiogroup"
                aria-label="Select Service of Interest"
                className="grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                {[
                  {
                    id: "all_in_one" as const,
                    title: "Complete Pathway",
                    subtitle: "Test Prep + University & Visa",
                    icon: Compass,
                    badge: "Most Recommended",
                  },
                  {
                    id: "study_abroad" as const,
                    title: "Study Abroad Only",
                    subtitle: "Admissions, SOP, Visa & Grants",
                    icon: GraduationCap,
                    badge: "Direct Admission",
                  },
                  {
                    id: "test_prep" as const,
                    title: "English Test Prep",
                    subtitle: "EnglishScore, DET, EF SET, IELTS",
                    icon: BookOpen,
                    badge: "Max 5–10 Students",
                  },
                ].map((srv) => {
                  const isSelected = selectedService === srv.id;
                  const Icon = srv.icon;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => handleServiceChange(srv.id)}
                      className={`relative p-4 rounded-2xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                        isSelected
                          ? "border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 shadow-md ring-1 ring-emerald-500/30"
                          : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"
                      }`}
                    >
                      <div className="flex items-start justify-between w-full mb-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            isSelected
                              ? "bg-emerald-500 text-white shadow-sm"
                              : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isSelected
                              ? "bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300"
                              : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                          }`}
                        >
                          {srv.badge}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-[#0A2342] dark:text-slate-100 leading-snug">
                          {srv.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {srv.subtitle}
                        </p>
                      </div>
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── STEP 2: CONTEXTUAL SERVICE DETAILS ────────────────── */}
            <div className="space-y-6 bg-slate-50/80 dark:bg-slate-800/40 p-5 sm:p-6 rounded-2xl border border-slate-100 dark:border-slate-700/60">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200/70 dark:border-slate-700/60">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <h3 className="font-heading text-sm font-bold text-[#0A2342] dark:text-slate-100">
                  2. Customize Your Program & Focus
                </h3>
              </div>

              {/* Study Abroad Context Fields */}
              {selectedService !== "test_prep" && (
                <div className="space-y-4">
                  {/* Target Destination Pills */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Target Destination <span className="text-rose-500">*</span>
                    </label>
                    <div
                      role="radiogroup"
                      aria-label="Select Target Destination"
                      className="grid grid-cols-2 sm:grid-cols-3 gap-2.5"
                    >
                      {destinationOptions.map((dest) => {
                        const isSelected = selectedDestination === dest.id;
                        return (
                          <button
                            key={dest.id}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            tabIndex={isSelected ? 0 : -1}
                            onClick={() =>
                              setValue("targetDestination", dest.id, { shouldValidate: true })
                            }
                            className={`p-3 rounded-xl text-left border text-xs transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                              isSelected
                                ? "border-emerald-500 bg-white dark:bg-slate-800 shadow-sm ring-1 ring-emerald-500/20"
                                : "border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{dest.icon}</span>
                              <div className="min-w-0">
                                <p className="font-bold text-slate-800 dark:text-slate-200 truncate">
                                  {dest.name}
                                </p>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 break-words">
                                  {dest.badge}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {errors.targetDestination && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.targetDestination.message}
                      </p>
                    )}
                  </div>

                  {/* Study Level & Target Intake */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="lead-studyLevel"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Target Degree / Level
                      </label>
                      <select
                        id="lead-studyLevel"
                        {...register("studyLevel")}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      >
                        {studyLevels.map((lvl) => (
                          <option key={lvl} value={lvl}>
                            {lvl}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="lead-targetIntake"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Planned Intake
                      </label>
                      <select
                        id="lead-targetIntake"
                        {...register("targetIntake")}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      >
                        {intakeOptions.map((intk) => (
                          <option key={intk} value={intk}>
                            {intk}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Test Prep Context Fields */}
              {selectedService !== "study_abroad" && (
                <div className="space-y-4 pt-2">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Preferred English Test <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                        1,800+ Certified Results
                      </span>
                    </div>

                    <div
                      role="radiogroup"
                      aria-label="Select Preferred English Test"
                      className="grid grid-cols-2 sm:grid-cols-3 gap-2.5"
                    >
                      {testOptions.map((test) => {
                        const isSelected = selectedTest === test.id;
                        return (
                          <button
                            key={test.id}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            tabIndex={isSelected ? 0 : -1}
                            onClick={() =>
                              setValue("preferredTest", test.id, { shouldValidate: true })
                            }
                            className={`p-3 rounded-xl text-left border text-xs transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 ${
                              isSelected
                                ? "border-amber-500 bg-white dark:bg-slate-800 shadow-sm ring-1 ring-amber-500/20"
                                : "border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{test.icon}</span>
                              <div className="min-w-0">
                                <p className="font-bold text-slate-800 dark:text-slate-200 truncate">
                                  {test.name}
                                </p>
                                <p className="text-[10px] text-amber-600 dark:text-amber-400 line-clamp-1 break-words">
                                  {test.badge}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {errors.preferredTest && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.preferredTest.message}
                      </p>
                    )}
                  </div>

                  {/* Coaching Format / Batch Size */}
                  <div>
                    <label
                      htmlFor="lead-coachingFormat"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Course & Coaching Format
                    </label>
                    <select
                      id="lead-coachingFormat"
                      {...register("coachingFormat")}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                    >
                      {coachingFormats.map((fmt) => (
                        <option key={fmt.id} value={fmt.id}>
                          {fmt.icon} {fmt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* ── STEP 3: COUNSELING MODE & BRANCH ──────────────── */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  3. Preferred Counseling Mode & Branch <span className="text-rose-500">*</span>
                </label>
                <span className="text-xs text-slate-400 font-medium">Free 30-Min Consultation</span>
              </div>

              <div
                role="radiogroup"
                aria-label="Select Preferred Counseling Mode"
                className="grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                {counselingModes.map((mode) => {
                  const isSelected = selectedMode === mode.id;
                  const Icon = mode.icon;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => setValue("counselingMode", mode.id, { shouldValidate: true })}
                      className={`p-3.5 rounded-2xl text-left border-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ${
                        isSelected
                          ? "border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 shadow-md ring-1 ring-purple-500/20"
                          : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isSelected
                              ? "bg-purple-600 text-white"
                              : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                            isSelected
                              ? "bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300"
                              : "bg-slate-100 dark:bg-slate-700 text-slate-400"
                          }`}
                        >
                          {mode.badge}
                        </span>
                      </div>
                      <p className="font-heading font-bold text-xs text-[#0A2342] dark:text-slate-100">
                        {mode.title}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                        {mode.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── STEP 4: STUDENT DETAILS & PROFILE ──────────────── */}
            <div className="space-y-4 pt-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                4. Your Contact & Academic Background
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="lead-fullName"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="lead-fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Tanvir Ahmed"
                      {...register("fullName")}
                      className={`w-full px-4 py-3 pl-10 rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? "border-rose-400 focus:ring-rose-500"
                          : "border-slate-300 dark:border-slate-700 focus:ring-emerald-500"
                      }`}
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Phone / WhatsApp Number */}
                <div>
                  <label
                    htmlFor="lead-phoneNumber"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="lead-phoneNumber"
                      type="tel"
                      autoComplete="tel"
                      placeholder="01316318387"
                      {...register("phoneNumber")}
                      className={`w-full px-4 py-3 pl-10 rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.phoneNumber
                          ? "border-rose-400 focus:ring-rose-500"
                          : "border-slate-300 dark:border-slate-700 focus:ring-emerald-500"
                      }`}
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.phoneNumber && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label
                    htmlFor="lead-email"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      id="lead-email"
                      type="email"
                      autoComplete="email"
                      placeholder="student@example.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 pl-10 rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-rose-400 focus:ring-rose-500"
                          : "border-slate-300 dark:border-slate-700 focus:ring-emerald-500"
                      }`}
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Academic Background */}
                <div>
                  <label
                    htmlFor="lead-academicBackground"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Current Education / Background
                  </label>
                  <select
                    id="lead-academicBackground"
                    {...register("academicBackground")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                  >
                    {academicBackgrounds.map((bg) => (
                      <option key={bg} value={bg}>
                        {bg}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Student Note / Questions with Dynamic Placeholder & Character Counter */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="lead-notes"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Dream University or Specific Questions{" "}
                    <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <span
                    className={`text-[11px] font-mono ${
                      watchedNotes.length > 450
                        ? "text-rose-500 font-semibold"
                        : "text-slate-400"
                    }`}
                  >
                    {watchedNotes.length}/500
                  </span>
                </div>
                <textarea
                  id="lead-notes"
                  rows={2}
                  maxLength={500}
                  placeholder={getNotesPlaceholder()}
                  {...register("notes")}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="flex items-center gap-2 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-700 text-white font-bold text-base shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.01] flex items-center justify-center gap-2.5 disabled:opacity-70 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Registering Counseling Session...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Confirm My Free Counseling Session</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Trust & Guarantee Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-1 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                🔒 100% Confidential • Zero Spam Guarantee • Free 30-min Strategy
              </span>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#25D366] hover:underline font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Desk: +{whatsappNumber}</span>
              </a>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
