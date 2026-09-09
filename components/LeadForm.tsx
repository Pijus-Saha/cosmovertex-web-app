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
} from "lucide-react";

const leadSchema = z.object({
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
  targetDestination: z.enum(
    ["Europe", "UK", "USA", "Australia", "South Korea"],
    {
      message: "Please select your target destination",
    }
  ),
  preferredTest: z.enum(
    ["DET", "EnglishScore C1", "EF SET", "IELTS", "PTE"],
    {
      message: "Please select your preferred English test",
    }
  ),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadFormProps {
  compact?: boolean;
  defaultDestination?: "Europe" | "UK" | "USA" | "Australia" | "South Korea";
  defaultTest?: "DET" | "EnglishScore C1" | "EF SET" | "IELTS" | "PTE";
}

export default function LeadForm({
  compact = false,
  defaultDestination,
  defaultTest,
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedLead, setSubmittedLead] = useState<LeadFormData | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      targetDestination: defaultDestination,
      preferredTest: defaultTest,
    },
  });

  // Pre-select destination if passed via query parameter (e.g., /contact?destination=South Korea)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const destParam = params.get("destination");
      const validDestinations = ["Europe", "UK", "USA", "Australia", "South Korea"];
      if (destParam && validDestinations.includes(destParam)) {
        setValue("targetDestination", destParam as "Europe" | "UK" | "USA" | "Australia" | "South Korea");
      }
    }
  }, [setValue]);

  const selectedDestination = watch("targetDestination");
  const selectedTest = watch("preferredTest");

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8801316318387";

  const getWhatsAppUrl = (lead: LeadFormData) => {
    const text = `Hi COSMOVERTEX, my name is ${lead.fullName}. I just submitted a counseling request for ${lead.targetDestination}.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
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

      // Open WhatsApp verification in a new tab smoothly
      const waUrl = getWhatsAppUrl(data);
      if (typeof window !== "undefined") {
        setTimeout(() => {
          window.open(waUrl, "_blank", "noopener,noreferrer");
        }, 800);
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try contacting us on WhatsApp.";
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
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/40 dark:via-slate-900 dark:to-teal-950/30 p-6 sm:p-8 border border-emerald-200 dark:border-emerald-800/80 shadow-lg text-center space-y-5"
          >
            {/* Success Icon */}
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Notification Dispatched via Resend
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#0A2342] dark:text-slate-100">
                Application Received, {submittedLead.fullName}!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Your counseling request for{" "}
                <strong className="text-emerald-600 dark:text-emerald-400">
                  {submittedLead.targetDestination}
                </strong>{" "}
                with{" "}
                <strong className="text-amber-600 dark:text-amber-400">
                  {submittedLead.preferredTest}
                </strong>{" "}
                has been logged. We have notified our counseling desk at{" "}
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-700 dark:text-slate-300">
                  cosmovertex@gmail.com
                </code>
                .
              </p>
            </div>

            {/* Summary Details */}
            <div className="max-w-sm mx-auto bg-white dark:bg-slate-800/80 rounded-xl p-4 border border-slate-200 dark:border-slate-700 text-xs text-left space-y-1.5 text-slate-600 dark:text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Student:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {submittedLead.fullName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Phone:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {submittedLead.phoneNumber}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Destination:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {submittedLead.targetDestination}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">English Test:</span>
                <span className="font-semibold text-amber-600 dark:text-amber-400">
                  {submittedLead.preferredTest}
                </span>
              </div>
            </div>

            {/* WhatsApp Verification CTA */}
            <div className="space-y-3 pt-2">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Opening WhatsApp for instant live verification... If not opened automatically, click below:
              </p>
              <a
                href={getWhatsAppUrl(submittedLead)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-green-500/25 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                Continue on WhatsApp (+{whatsappNumber})
                <ExternalLink className="w-4 h-4" />
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
            className={`space-y-5 ${compact ? "text-sm" : ""}`}
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="lead-fullName"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="lead-fullName"
                type="text"
                autoComplete="name"
                placeholder="e.g. Tanvir Ahmed"
                {...register("fullName")}
                className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? "border-rose-400 focus:ring-rose-500"
                    : "border-slate-300 dark:border-slate-700 focus:ring-emerald-500"
                }`}
              />
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
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Phone / WhatsApp Number <span className="text-rose-500">*</span>
              </label>
              <input
                id="lead-phoneNumber"
                type="tel"
                autoComplete="tel"
                placeholder="01316318387"
                {...register("phoneNumber")}
                className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.phoneNumber
                    ? "border-rose-400 focus:ring-rose-500"
                    : "border-slate-300 dark:border-slate-700 focus:ring-emerald-500"
                }`}
              />
              {errors.phoneNumber && (
                <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Target Destination & Preferred English Test Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Target Destination */}
              <div>
                <label
                  htmlFor="lead-targetDestination"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Target Destination <span className="text-rose-500">*</span>
                </label>
                <select
                  id="lead-targetDestination"
                  {...register("targetDestination")}
                  className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 transition-all ${
                    errors.targetDestination
                      ? "border-rose-400 focus:ring-rose-500"
                      : "border-slate-300 dark:border-slate-700 focus:ring-emerald-500"
                  }`}
                >
                  <option value="">Select a Destination</option>
                  <option value="Europe">Europe (Greece, Lithuania, Slovenia, Malta)</option>
                  <option value="UK">United Kingdom</option>
                  <option value="USA">United States</option>
                  <option value="Australia">Australia</option>
                  <option value="South Korea">South Korea</option>
                </select>
                {errors.targetDestination && (
                  <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.targetDestination.message}
                  </p>
                )}
              </div>

              {/* Preferred English Test */}
              <div>
                <label
                  htmlFor="lead-preferredTest"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Preferred English Test <span className="text-rose-500">*</span>
                </label>
                <select
                  id="lead-preferredTest"
                  {...register("preferredTest")}
                  className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 transition-all ${
                    errors.preferredTest
                      ? "border-rose-400 focus:ring-rose-500"
                      : "border-slate-300 dark:border-slate-700 focus:ring-emerald-500"
                  }`}
                >
                  <option value="">Select an English Test</option>
                  <option value="DET">Duolingo English Test (DET)</option>
                  <option value="EnglishScore C1">EnglishScore C1 (British Council)</option>
                  <option value="EF SET">EF SET Certificate (Free/C1)</option>
                  <option value="IELTS">IELTS Academic</option>
                  <option value="PTE">PTE Academic</option>
                </select>
                {errors.preferredTest && (
                  <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.preferredTest.message}
                  </p>
                )}
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Request...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Book Free Counseling Session
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Trust & WhatsApp Hint */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                🔒 100% Privacy • No Spam Guarantee
              </span>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#25D366] hover:underline font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Direct WhatsApp: +{whatsappNumber}
              </a>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
