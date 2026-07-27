"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/translations";
import type { ReactNode } from "react";

const iconProps = {
  className: "h-6 w-6",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Icons in the same order as the translated solutions list. */
const icons: ReactNode[] = [
  <svg key="spray" {...iconProps} aria-hidden="true">
    <path d="M12 3v6" />
    <path d="M8 9h8" />
    <path d="M8.5 13.5 7 17m4-3.5v4m4.5-4 1.5 3.5" />
    <circle cx="12" cy="20" r="1" />
    <circle cx="7" cy="20" r="1" />
    <circle cx="17" cy="20" r="1" />
  </svg>,
  <svg key="flight" {...iconProps} aria-hidden="true">
    <path d="M4 17c3-6 6-9 8-9s5 3 8 9" />
    <circle cx="12" cy="8" r="2" />
    <path d="M4 20h16" />
  </svg>,
  <svg key="training" {...iconProps} aria-hidden="true">
    <path d="M12 4 3 8.5 12 13l9-4.5L12 4z" />
    <path d="M6 10.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
  </svg>,
  <svg key="farm" {...iconProps} aria-hidden="true">
    <path d="M3 21h18" />
    <path d="M5 21V9l7-5 7 5v12" />
    <path d="M9 21v-6h6v6" />
  </svg>,
];

export default function Solutions() {
  const { lang } = useLanguage();
  const t = ui[lang].solutions;

  return (
    <section id="solutions" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6">
        <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-pine">
            {t.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            {t.heading}
          </h2>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2">
          {t.items.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06}>
              <article className="group h-full rounded-3xl border border-line bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-pine/30 hover:shadow-lift md:p-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pine-soft text-pine transition-colors duration-300 group-hover:bg-pine group-hover:text-white">
                  {icons[i]}
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate">
                  {s.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
