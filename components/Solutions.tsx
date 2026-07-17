import FadeIn from "./FadeIn";
import type { ReactNode } from "react";

type Solution = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconProps = {
  className: "h-6 w-6",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const solutions: Solution[] = [
  {
    title: "Precision Spraying",
    description:
      "Uniform droplet coverage at controlled rates, targeting only the areas that need treatment — reducing chemical use and drift.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M12 3v6" />
        <path d="M8 9h8" />
        <path d="M8.5 13.5 7 17m4-3.5v4m4.5-4 1.5 3.5" />
        <circle cx="12" cy="20" r="1" />
        <circle cx="7" cy="20" r="1" />
        <circle cx="17" cy="20" r="1" />
      </svg>
    ),
  },
  {
    title: "Autonomous Flight",
    description:
      "Plan a field once, then fly it on demand. Terrain-following routes, obstacle awareness, and automatic return keep missions repeatable.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M4 17c3-6 6-9 8-9s5 3 8 9" />
        <circle cx="12" cy="8" r="2" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
  {
    title: "Training & Support",
    description:
      "Operator certification, maintenance schedules, and responsive technical support — your team flies with confidence from day one.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M12 4 3 8.5 12 13l9-4.5L12 4z" />
        <path d="M6 10.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      </svg>
    ),
  },
  {
    title: "Commercial Farm Solutions",
    description:
      "Fleet configurations, coverage planning, and seasonal workflows sized to large operations — from single fields to multi-site estates.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6">
        <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-pine">
            Our Solutions
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            One platform for the whole spraying operation.
          </h2>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2">
          {solutions.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06}>
              <article className="group h-full rounded-3xl border border-line bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-pine/30 hover:shadow-lift md:p-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pine-soft text-pine transition-colors duration-300 group-hover:bg-pine group-hover:text-white">
                  {s.icon}
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
