"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/drone-hero.png"
          alt="ABZ Innovation Drone"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white from-40% to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center px-6 pt-32 sm:pt-48 pb-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-xl text-charcoal/80 leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-pine px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-pine/90 hover:shadow-xl"
            >
              {t.hero.cta}
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border-2 border-pine px-8 py-3 text-base font-semibold text-pine transition-all hover:bg-pine/10"
            >
              {t.navbar.demo}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-charcoal/10 pt-12">
            <div>
              <div className="text-3xl font-bold text-ink">8</div>
              <div className="mt-1 text-sm text-charcoal/60">Drone Models</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ink">25+</div>
              <div className="mt-1 text-sm text-charcoal/60">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ink">150+</div>
              <div className="mt-1 text-sm text-charcoal/60">Installations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
