"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";

export default function Solutions() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="border-t border-charcoal/10 bg-mist py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
          <div className="max-w-2xl flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-pine">
              {t.products.title}
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-ink">
              {t.products.subtitle}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
              {t.products.description}
            </p>
            <Link
              href="/products"
              className="mt-8 inline-block rounded-full bg-pine px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-pine/90 hover:shadow-xl"
            >
              {t.hero.cta}
            </Link>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-charcoal/10 bg-white p-6">
              <h3 className="font-semibold text-ink">L-Series</h3>
              <p className="mt-2 text-sm text-charcoal/60">
                {t.products.seriesL}
              </p>
            </div>
            <div className="rounded-xl border border-charcoal/10 bg-white p-6">
              <h3 className="font-semibold text-ink">S-Series</h3>
              <p className="mt-2 text-sm text-charcoal/60">
                {t.products.seriesS}
              </p>
            </div>
            <div className="rounded-xl border border-charcoal/10 bg-white p-6">
              <h3 className="font-semibold text-ink">M-Series</h3>
              <p className="mt-2 text-sm text-charcoal/60">
                {t.products.seriesM}
              </p>
            </div>
            <div className="rounded-xl border border-charcoal/10 bg-white p-6">
              <h3 className="font-semibold text-ink">C-Series</h3>
              <p className="mt-2 text-sm text-charcoal/60">
                {t.products.seriesC}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
