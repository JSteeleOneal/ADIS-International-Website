"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = ui[lang].about;

  return (
    <section id="about" className="border-y border-line bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <FadeIn className="md:col-span-5">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-pine">
              {t.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              {t.heading}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-slate">{t.p1}</p>
            <p className="mt-5 text-lg leading-relaxed text-slate">{t.p2}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
