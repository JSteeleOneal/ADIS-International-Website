"use client";

import { motion } from "framer-motion";
import { useLanguage, type Lang } from "@/lib/i18n";

const options: { value: Lang; label: string; aria: string }[] = [
  { value: "en", label: "EN", aria: "English" },
  { value: "pt", label: "PT", aria: "Português" },
];

/**
 * Sliding EN / PT switch. The pine-coloured pill glides beneath the
 * active language.
 */
export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`relative inline-flex items-center rounded-full border border-line bg-white p-1 ${className}`}
    >
      {options.map((option) => {
        const active = lang === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLang(option.value)}
            aria-pressed={active}
            aria-label={option.aria}
            className={`relative z-10 rounded-full px-3 py-1 text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
              active ? "text-white" : "text-slate hover:text-ink"
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-pine"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
