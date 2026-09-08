"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { theme, setTheme } = useTheme();

  if (!mounted) {
    // Render a placeholder with the same dimensions to avoid layout shift
    return (
      <div
        className="w-8 h-8 rounded-lg bg-white/10"
        aria-hidden="true"
      />
    );
  }

  const options: { value: string; icon: React.ReactNode; label: string }[] = [
    { value: "light", icon: <Sun className="w-4 h-4" />, label: "Light" },
    { value: "dark", icon: <Moon className="w-4 h-4" />, label: "Dark" },
    { value: "system", icon: <Monitor className="w-4 h-4" />, label: "System" },
  ];

  // Cycle through: light → dark → system → light
  const cycle = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const currentIcon =
    theme === "light" ? (
      <Sun className="w-4 h-4" />
    ) : theme === "dark" ? (
      <Moon className="w-4 h-4" />
    ) : (
      <Monitor className="w-4 h-4" />
    );

  return (
    <div className="relative group">
      {/* Single-click cycle button */}
      <button
        id="theme-toggle"
        onClick={cycle}
        aria-label={`Current theme: ${theme}. Click to cycle theme.`}
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200",
          "text-white/70 hover:text-white hover:bg-white/15",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
        )}
      >
        {currentIcon}
      </button>

      {/* Hover tooltip with all 3 options */}
      <div
        className={cn(
          "absolute top-full right-0 mt-2 py-1.5 rounded-xl shadow-xl z-50",
          "bg-[#0d2d4f] border border-white/10 min-w-[120px]",
          "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
          "transition-all duration-150 translate-y-1 group-hover:translate-y-0"
        )}
      >
        {options.map((opt) => (
          <button
            key={opt.value}
            id={`theme-option-${opt.value}`}
            onClick={() => setTheme(opt.value)}
            className={cn(
              "flex items-center gap-2.5 w-full px-3 py-2 text-xs font-medium transition-colors",
              theme === opt.value
                ? "text-[#10b981] bg-white/10"
                : "text-white/60 hover:text-white hover:bg-white/10"
            )}
          >
            {opt.icon}
            {opt.label}
            {theme === opt.value && (
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
