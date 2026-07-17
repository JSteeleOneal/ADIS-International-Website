"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Signature element: thin "field contour" lines drawn from the curved
 * crop rows in the ADIS logo. They sit quietly behind the hero content.
 */
function FieldContours() {
  const prefersReducedMotion = useReducedMotion();
  const paths = [
    "M-100 620 C 300 520, 900 720, 1540 560",
    "M-100 700 C 320 600, 920 800, 1540 640",
    "M-100 780 C 340 680, 940 880, 1540 720",
    "M-100 860 C 360 760, 960 960, 1540 800",
  ];

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
    >
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="#1E6B3C"
          strokeOpacity={0.1 + i * 0.03}
          strokeWidth={1.5}
          initial={prefersReducedMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.2 + i * 0.15, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: prefersReducedMotion ? false : ({ opacity: 0, y: 28 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-40 md:pb-32 md:pt-48">
      <FieldContours />

      <div className="relative mx-auto max-w-wrap px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            {...rise(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-[13px] font-medium tracking-wide text-pine"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-pine" />
            Professional agricultural spraying drones
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl"
          >
            Precision from
            <br />
            above the field.
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate md:text-xl"
          >
            ADIS builds spraying drone systems for commercial farms —
            covering more hectares with less input, flight after flight.
          </motion.p>

          <motion.div
            {...rise(0.24)}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="#contact"
              className="w-full rounded-full bg-pine px-8 py-4 text-base font-medium text-white shadow-soft transition-all hover:bg-pine-dark hover:shadow-lift sm:w-auto"
            >
              Request a demo
            </Link>
            <Link
              href="#solutions"
              className="w-full rounded-full border border-line bg-white px-8 py-4 text-base font-medium text-ink transition-colors hover:border-pine hover:text-pine sm:w-auto"
            >
              Explore solutions
            </Link>
          </motion.div>
        </div>

        {/* Drone hero image */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-4xl md:mt-20"
        >
          <div className="overflow-hidden rounded-3xl border border-line shadow-lift">
            <Image
              src="/drone-hero.png"
              alt="ADIS spraying drone applying treatment over an orchard"
              width={2385}
              height={1002}
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
