"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, seriesOverview, caseStudies } from "@/data/products";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";
import type { Series } from "@/data/products";

const SERIES_ORDER: Series[] = ["L", "S", "M", "C"];

function ProductCard({ product, t, language }: any) {
  return (
    <article
      id={product.id}
      className="scroll-mt-24 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
    >
      <div className="flex flex-wrap items-baseline gap-3">
        <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
          {product.name}
        </h3>
        {product.isNew && (
          <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
            {t.newBadge}
          </span>
        )}
        <span className="text-sm text-neutral-500">
          {seriesOverview[product.series].name}
        </span>
      </div>

      {product.tagline && (
        <p className="mt-2 text-lg text-emerald-700">{product.tagline}</p>
      )}
      {product.summary && (
        <p className="mt-3 max-w-2xl text-neutral-600">{product.summary}</p>
      )}

      {product.specs.length > 0 && (
        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-700">
            {t.products.specs}
          </h4>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
            {product.specs.map((spec: any) => (
              <div key={spec.label} className="bg-white p-4">
                <dt className="text-[0.7rem] font-medium uppercase tracking-wider text-neutral-500">
                  {spec.label}
                </dt>
                <dd className="mt-1 text-base font-semibold text-neutral-900">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {product.features.length > 0 && (
        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-700">
            {t.products.features}
          </h4>
          <ul className="grid gap-2 sm:grid-cols-2">
            {product.features.map((feature: string) => (
              <li key={feature} className="flex gap-2.5 text-sm text-neutral-700">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-600"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {product.certifications.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2 border-t border-neutral-100 pt-5">
          {product.certifications.map((cert: string) => (
            <span
              key={cert}
              className="rounded border border-neutral-300 px-2 py-1 text-xs font-medium tracking-wide text-neutral-600"
            >
              {cert}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default function ProductsPage() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const agriculturalProducts = products.filter(
    (p) => p.series !== "C" && (p.specs.length > 0 || p.features.length > 0)
  );
  const industrialProducts = products.filter(
    (p) => p.series === "C" && (p.specs.length > 0 || p.features.length > 0)
  );

  return (
    <>
      <Navbar />
      <main className="bg-neutral-50 pt-20">
        {/* Hero */}
        <section className="border-b border-neutral-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-700">
              {t.products.title}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              {t.products.subtitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-neutral-600">
              {t.products.description}
            </p>
          </div>
        </section>

        {/* Series overview */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-4 sm:grid-cols-4">
            {SERIES_ORDER.map((series) => (
              <div key={series} className="rounded-xl border border-neutral-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-neutral-900">
                  {seriesOverview[series].name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {seriesOverview[series].blurb}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Agricultural aircraft */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Agricultural Spraying & Spreading
          </h2>
          <div className="mt-8 space-y-8">
            {agriculturalProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                t={t}
                language={language}
              />
            ))}
          </div>
        </section>

        {/* Industrial / Specialist aircraft */}
        {industrialProducts.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 pb-16">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              Industrial & Specialist
            </h2>
            <div className="mt-8 space-y-8">
              {industrialProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  t={t}
                  language={language}
                />
              ))}
            </div>
          </section>
        )}

        {/* Case Studies */}
        {caseStudies.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 pb-16">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              {t.products.caseStudies}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="rounded-2xl border border-neutral-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Product: {study.product}
                  </p>
                  {study.highlights && (
                    <ul className="mt-4 space-y-2">
                      {study.highlights.map((highlight: string) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 text-sm text-neutral-700"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1 h-1 w-1 shrink-0 rounded-full bg-emerald-600"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 sm:p-12">
            <h2 className="text-2xl font-semibold text-neutral-900">
              {t.contact.title}
            </h2>
            <p className="mt-2 text-neutral-600">{t.contact.subtitle}</p>
            <Link
              href="/#contact"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-emerald-700"
            >
              {t.navbar.demo}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
