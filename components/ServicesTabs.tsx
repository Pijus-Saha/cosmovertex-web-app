"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Clock,
  Users,
  Star,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export type TestService = {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  badge: string;
  badgeVariant: "default" | "secondary" | "outline";
  tagline: string;
  about: string;
  whatIncluded: { icon: React.ReactNode; item: string }[];
  duration: string;
  batchSize: string;
  targetScore: string;
  color: string;
  accentColor: string;
  borderColor: string;
};

interface ServicesTabsProps {
  services: TestService[];
}

export default function ServicesTabs({ services }: ServicesTabsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const tabFromQuery = searchParams.get("tab");
  const activeTab =
    tabFromQuery && services.some((s) => s.id === tabFromQuery)
      ? tabFromQuery
      : "duolingo";

  useEffect(() => {
    if (tabFromQuery) {
      const section = document.getElementById("services-tabs");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [tabFromQuery]);

  const handleTabChange = (value: string) => {
    router.replace(`/services?tab=${value}`, { scroll: false });
  };

  return (
    <section
      id="services-tabs"
      className="py-20 bg-brand-slate dark:bg-slate-900 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="flex flex-wrap h-auto gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 rounded-2xl mb-10 w-full justify-start">
            {services.map((s) => (
              <TabsTrigger
                key={s.id}
                value={s.id}
                id={s.id}
                className="rounded-xl px-4 py-2 text-sm font-semibold data-[state=active]:bg-[#0A2342] data-[state=active]:text-white cursor-pointer"
              >
                {s.icon} {s.shortName}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <div
                className={`rounded-3xl bg-gradient-to-br ${service.color} dark:from-slate-800 dark:to-slate-800 border ${service.borderColor} dark:border-slate-700 p-8 md:p-12`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">{service.icon}</span>
                      <div>
                        <Badge variant={service.badgeVariant} className="mb-1">
                          {service.badge}
                        </Badge>
                        <h2 className="font-heading font-bold text-[#0A2342] dark:text-slate-100 text-2xl md:text-3xl">
                          {service.name}
                        </h2>
                      </div>
                    </div>

                    <p className={`${service.accentColor} font-semibold mb-4`}>
                      {service.tagline}
                    </p>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {service.about}
                    </p>

                    {/* Meta */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[
                        {
                          label: "Duration",
                          value: service.duration,
                          icon: <Clock className="w-4 h-4" />,
                        },
                        {
                          label: "Batch Size",
                          value: service.batchSize,
                          icon: <Users className="w-4 h-4" />,
                        },
                        {
                          label: "Target",
                          value: service.targetScore,
                          icon: <Star className="w-4 h-4" />,
                        },
                      ].map((m) => (
                        <div
                          key={m.label}
                          className="bg-white/70 dark:bg-slate-700/70 rounded-xl p-3 text-center"
                        >
                          <div
                            className={`${service.accentColor} mx-auto mb-1 flex justify-center`}
                          >
                            {m.icon}
                          </div>
                          <p className="font-bold text-[#0A2342] dark:text-slate-100 text-xs leading-tight">
                            {m.value}
                          </p>
                          <p className="text-slate-400 text-[10px] mt-0.5">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0A2342] text-white font-semibold hover:bg-[#1a3a5c] transition-colors"
                      >
                        Book Free Counseling <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href="https://wa.me/8801316318387"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Ask on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h3 className="font-heading font-bold text-[#0A2342] dark:text-slate-100 text-xl mb-5">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3">
                      {service.whatIncluded.map((item) => (
                        <li
                          key={item.item}
                          className="flex items-start gap-3 bg-white/60 dark:bg-slate-700/60 rounded-xl p-4 border border-white/80 dark:border-slate-600"
                        >
                          <span
                            className={`${service.accentColor} mt-0.5 shrink-0`}
                          >
                            {item.icon}
                          </span>
                          <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                            {item.item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
