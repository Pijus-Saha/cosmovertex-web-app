"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
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

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(
      /^(\+8801|01)[3-9]\d{8}$/,
      "Enter a valid Bangladeshi phone number (e.g. 01316318387)"
    ),
  email: z.string().email("Enter a valid email address").or(z.literal("")),
  preferredTest: z.string().min(1, "Please select a test"),
  targetDestination: z.string().min(1, "Please select a destination"),
  academicBackground: z
    .string()
    .min(10, "Please briefly describe your academic background (min 10 chars)"),
});

type FormData = z.infer<typeof schema>;

type FormStatus = "idle" | "loading" | "success" | "error";

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      reset();
    } catch {
      setErrorMsg(
        "Something went wrong. Please try again or contact us on WhatsApp."
      );
      setStatus("error");
    }
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 gap-4 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-gradient flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-heading font-bold text-[#0A2342] dark:text-slate-100">
              We&apos;ll Be in Touch!
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm">
              Thank you for reaching out. Our team will contact you within 24
              hours. You can also chat with us instantly on WhatsApp.
            </p>
            <a
              href="https://wa.me/8801316318387"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] transition-colors"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Name */}
            <div className="space-y-1.5">
              <Label htmlFor="lead-name" className="text-slate-700 dark:text-slate-300 font-medium">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lead-name"
                placeholder="e.g. Rahim Hossain"
                {...register("name")}
                className={errors.name ? "border-red-400" : ""}
              />
              {errors.name && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <Label
                htmlFor="lead-phone"
                className="text-slate-700 dark:text-slate-300 font-medium"
              >
                Phone / WhatsApp <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lead-phone"
                placeholder="01316318387"
                {...register("phone")}
                className={errors.phone ? "border-red-400" : ""}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label
                htmlFor="lead-email"
                className="text-slate-700 dark:text-slate-300 font-medium"
              >
                Email{" "}
                <span className="text-slate-400 text-xs font-normal">
                  (optional)
                </span>
              </Label>
              <Input
                id="lead-email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
                className={errors.email ? "border-red-400" : ""}
              />
            </div>

            {/* Preferred Test + Destination (side by side if not compact) */}
            <div
              className={
                compact ? "space-y-5" : "grid grid-cols-1 sm:grid-cols-2 gap-4"
              }
            >
              <div className="space-y-1.5">
                <Label className="text-slate-700 dark:text-slate-300 font-medium">
                  Preferred Test <span className="text-red-500">*</span>
                </Label>
                <Select
                  onValueChange={(val) =>
                    setValue("preferredTest", val as string, { shouldValidate: true })
                  }
                >
                  <SelectTrigger
                    id="lead-test"
                    className={errors.preferredTest ? "border-red-400" : ""}
                  >
                    <SelectValue placeholder="Select a test" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="duolingo">Duolingo DET</SelectItem>
                    <SelectItem value="englishscore">
                      EnglishScore CEFR C1
                    </SelectItem>
                    <SelectItem value="efset">EF SET</SelectItem>
                    <SelectItem value="ielts">IELTS</SelectItem>
                    <SelectItem value="pte">PTE Academic</SelectItem>
                    <SelectItem value="unsure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
                {errors.preferredTest && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.preferredTest.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label className="text-slate-700 dark:text-slate-300 font-medium">
                  Target Destination <span className="text-red-500">*</span>
                </Label>
                <Select
                  onValueChange={(val) =>
                    setValue("targetDestination", val as string, {
                      shouldValidate: true,
                    })
                  }
                >
                  <SelectTrigger
                    id="lead-destination"
                    className={
                      errors.targetDestination ? "border-red-400" : ""
                    }
                  >
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="south-korea">South Korea 🇰🇷</SelectItem>
                    <SelectItem value="europe">Europe 🇪🇺</SelectItem>
                    <SelectItem value="uk">United Kingdom 🇬🇧</SelectItem>
                    <SelectItem value="usa">United States 🇺🇸</SelectItem>
                    <SelectItem value="australia">Australia 🇦🇺</SelectItem>
                    <SelectItem value="unsure">Exploring options</SelectItem>
                  </SelectContent>
                </Select>
                {errors.targetDestination && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.targetDestination.message}
                  </p>
                )}
              </div>
            </div>

            {/* Academic Background */}
            <div className="space-y-1.5">
              <Label
                htmlFor="lead-academic"
                className="text-slate-700 dark:text-slate-300 font-medium"
              >
                Academic Background <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="lead-academic"
                placeholder="e.g. HSC completed 2023, currently in 1st year BSc at BUET..."
                rows={3}
                {...register("academicBackground")}
                className={errors.academicBackground ? "border-red-400" : ""}
              />
              {errors.academicBackground && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.academicBackground.message}
                </p>
              )}
            </div>

            {/* Error Banner */}
            {status === "error" && (
              <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              id="lead-form-submit"
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-gradient text-amber-900 font-semibold hover:opacity-90 disabled:opacity-60 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-amber-500/20"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Book Free Counseling
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-400 dark:text-slate-500">
              We reply within 24 hours · 100% free initial consultation
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
