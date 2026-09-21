"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Sparkles,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { normalizeBdPhoneNumber } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(
      /^(\+?8801|01|\+?[0-9])[0-9\s-]{8,14}$/,
      "Enter a valid mobile number (e.g. 01316318387 or +8801316318387)"
    ),
  email: z.string().email("Enter a valid email address").or(z.literal("")),
  preferredTest: z.string().min(1, "Please select an English test"),
  targetDestination: z.string().min(1, "Please select your target destination"),
  academicBackground: z
    .string()
    .min(8, "Please briefly describe your academic qualifications"),
});

export type DestinationFormData = z.infer<typeof formSchema>;

interface DestinationLeadFormProps {
  defaultDestination: string;
  destinationLabel: string;
  allowedTests?: { value: string; label: string }[];
  heading?: string;
  subheading?: string;
}

const defaultTestOptions = [
  { value: "englishscore", label: "EnglishScore CEFR C1 (Fast & Guaranteed)" },
  { value: "duolingo", label: "Duolingo English Test (DET)" },
  { value: "ielts", label: "IELTS Academic" },
  { value: "pte", label: "PTE Academic" },
  { value: "toefl", label: "TOEFL iBT" },
  { value: "moi", label: "Medium of Instruction (MOI / English Waiver)" },
  { value: "undecided", label: "Not sure yet (Need counseling)" },
];

export default function DestinationLeadForm({
  defaultDestination,
  destinationLabel,
  allowedTests = defaultTestOptions,
  heading = "Book Free One-on-One Counseling",
  subheading = "Receive a personalized admission roadmap, scholarship evaluation, and test plan from our senior study abroad mentors.",
}: DestinationLeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<DestinationFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetDestination: defaultDestination,
      preferredTest: allowedTests[0]?.value || "englishscore",
    },
  });

  const onSubmit = async (data: DestinationFormData) => {
    setStatus("loading");
    try {
      const normalizedData = {
        ...data,
        phone: normalizeBdPhoneNumber(data.phone),
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(normalizedData),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      reset();
    } catch {
      setErrorMsg(
        "Could not send application right now. Please reach us directly on WhatsApp."
      );
      setStatus("error");
    }
  };

  return (
    <div
      id="lead-form"
      className="bg-white dark:bg-slate-800 rounded-3xl p-7 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-2xl transition-colors relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Fast-Track Admissions
        </div>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0A2342] dark:text-slate-100 mb-2">
          {heading}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {subheading}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-bold text-2xl text-[#0A2342] dark:text-slate-100">
              Application Received!
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
              Our {destinationLabel} admissions advisor will review your profile
              and contact you within 24 hours. For immediate support, connect
              with us on WhatsApp.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/8801316318387?text=${encodeURIComponent(
                  `Hello COSMOVERTEX, I just submitted an application for ${destinationLabel}. Please contact me.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm transition-colors"
              >
                Chat on WhatsApp (Instant)
              </a>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-200 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Name */}
            <div className="space-y-1.5">
              <Label
                htmlFor="dest-lead-name"
                className="text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm"
              >
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="dest-lead-name"
                placeholder="e.g. Tanvir Ahmed"
                {...register("name")}
                className={`bg-slate-50/50 dark:bg-slate-900/60 ${
                  errors.name ? "border-red-400" : ""
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label
                  htmlFor="dest-lead-phone"
                  className="text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm"
                >
                  Phone / WhatsApp <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="dest-lead-phone"
                  placeholder="01316318387"
                  {...register("phone")}
                  className={`bg-slate-50/50 dark:bg-slate-900/60 ${
                    errors.phone ? "border-red-400" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="dest-lead-email"
                  className="text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm"
                >
                  Email Address{" "}
                  <span className="text-slate-400 text-xs font-normal">
                    (Optional)
                  </span>
                </Label>
                <Input
                  id="dest-lead-email"
                  type="email"
                  placeholder="name@example.com"
                  {...register("email")}
                  className={`bg-slate-50/50 dark:bg-slate-900/60 ${
                    errors.email ? "border-red-400" : ""
                  }`}
                />
              </div>
            </div>

            {/* Target Destination & Preferred Test */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm">
                  Target Destination <span className="text-red-500">*</span>
                </Label>
                <Select
                  defaultValue={defaultDestination}
                  onValueChange={(val) =>
                    setValue("targetDestination", val as string, {
                      shouldValidate: true,
                    })
                  }
                >
                  <SelectTrigger className="bg-slate-50/50 dark:bg-slate-900/60">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="europe">Europe 🇪🇺</SelectItem>
                    <SelectItem value="uk">United Kingdom 🇬🇧</SelectItem>
                    <SelectItem value="usa">United States 🇺🇸</SelectItem>
                    <SelectItem value="australia">Australia 🇦🇺</SelectItem>
                    <SelectItem value="south-korea">South Korea 🇰🇷</SelectItem>
                  </SelectContent>
                </Select>
                {errors.targetDestination && (
                  <p className="text-xs text-red-500">
                    {errors.targetDestination.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label className="text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm">
                  Preferred English Test <span className="text-red-500">*</span>
                </Label>
                <Select
                  defaultValue={allowedTests[0]?.value}
                  onValueChange={(val) =>
                    setValue("preferredTest", val as string, {
                      shouldValidate: true,
                    })
                  }
                >
                  <SelectTrigger className="bg-slate-50/50 dark:bg-slate-900/60">
                    <SelectValue placeholder="Select English test" />
                  </SelectTrigger>
                  <SelectContent>
                    {allowedTests.map((t) => (
                      <SelectItem key={t.value} value={t.value}>
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.preferredTest && (
                  <p className="text-xs text-red-500">
                    {errors.preferredTest.message}
                  </p>
                )}
              </div>
            </div>

            {/* Academic Qualification */}
            <div className="space-y-1.5">
              <Label
                htmlFor="dest-lead-qual"
                className="text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm"
              >
                Current Academic Qualification & GPA{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="dest-lead-qual"
                placeholder="e.g. Completed HSC with GPA 4.5 in 2024 / Completed BBA with CGPA 3.20 at NSU. Target major: MSc Data Science."
                rows={3}
                {...register("academicBackground")}
                className={`bg-slate-50/50 dark:bg-slate-900/60 ${
                  errors.academicBackground ? "border-red-400" : ""
                }`}
              />
              {errors.academicBackground && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.academicBackground.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-gradient text-white font-heading font-bold text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Book Free {destinationLabel} Consultation</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                100% Privacy Guaranteed
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5 text-blue-500" />
                Callback within 24 Hours
              </span>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
