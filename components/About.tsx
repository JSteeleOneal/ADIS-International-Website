"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";

export default function About() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="about" className="border-t border-charcoal/10 bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pine">
            {t.about.title}
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            {t.about.description}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.features.map((feature: any, i: number) => (
            <div key={i} className="flex flex-col">
              <div className="h-2 w-2 rounded-full bg-pine" />
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-charcoal/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
