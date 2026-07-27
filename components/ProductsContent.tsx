"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/i18n";
import {
  getCatalogue,
  type Catalogue,
  type Product,
  type Series,
} from "@/data/products";

const SERIES_ORDER: Series[] = ["L", "M", "C"];

function ProductCard({
  product,
  catalogue,
}: {
  product: Product;
  catalogue: Catalogue;
}) {
  return (
    <article
      id={product.id}
      className="scroll-mt-28 rounded-3xl border border-line bg-white p-8 shadow-soft md:p-10"
    >
      <div className="flex flex-wrap items-baseline gap-3">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
          {product.name}
        </h3>
        {product.isNew && (
          <span className="rounded-full bg-pine px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
            {catalogue.page.newBadge}
          </span>
        )}
        <span className="text-sm text-slate">
          {catalogue.seriesOverview[product.series].name}
        </span>
      </div>

      {product.tagline && (
        <p className="mt-2 text-lg text-pine">{product.tagline}</p>
      )}
      {product.summary && (
        <p className="mt-3 max-w-2xl leading-relaxed text-slate">
          {product.summary}
        </p>
      )}

      {product.specs.length > 0 && (
        <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {product.specs.map((spec) => (
            <div key={spec.label} className="bg-mist p-4">
              <dt className="text-[0.7rem] font-medium uppercase tracking-wider text-slate">
                {spec.label}
              </dt>
              <dd className="mt-1 text-base font-semibold text-ink">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {product.features.length > 0 && (
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex gap-2.5 text-sm text-charcoal">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pine"
              />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {product.certifications.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
          {product.certifications.map((cert) => (
            <span
              key={cert}
              className="rounded-lg border border-line px-2.5 py-1 text-xs font-medium tracking-wide text-slate"
            >
              {cert}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default function ProductsContent() {
  const { lang } = useLanguage();
  const catalogue = getCatalogue(lang);
  const t = catalogue.page;

  const agriculturalProducts = catalogue.products.filter(
    (p) => p.series !== "C" && (p.specs.length > 0 || p.features.length > 0),
  );
  const industrialProducts = catalogue.products.filter(
    (p) => p.series === "C" && (p.specs.length > 0 || p.features.length > 0),
  );

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-line bg-white pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-wrap px-6">
          <FadeIn>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-pine">
              {t.eyebrow}
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-6xl">
              {t.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
              {t.intro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Series overview */}
      <section className="mx-auto max-w-wrap px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {SERIES_ORDER.map((series, i) => (
            <FadeIn key={series} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-line bg-mist p-7">
                <h2 className="font-display text-lg font-semibold text-ink">
                  {catalogue.seriesOverview[series].name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {catalogue.seriesOverview[series].blurb}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Agricultural aircraft */}
      <section className="mx-auto max-w-wrap px-6 pb-16">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {t.aircraftHeading}
          </h2>
        </FadeIn>
        <div className="mt-6 space-y-5">
          {agriculturalProducts.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.05}>
              <ProductCard product={product} catalogue={catalogue} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Spraying technology */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-wrap px-6 py-20">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {t.dropletsHeading}
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-3xl border border-line bg-white p-8 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {catalogue.sprayingComparison.hydraulic.title}
                </h3>
                <div className="mt-5 flex gap-8">
                  <div>
                    <p className="font-display text-2xl font-semibold text-ink">
                      {catalogue.sprayingComparison.hydraulic.dropletsLost}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-slate">
                      {t.driftsAway}
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold text-ink">
                      {catalogue.sprayingComparison.hydraulic.dropletsRunOff}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-slate">
                      {t.runsOff}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-slate">
                  {catalogue.sprayingComparison.hydraulic.detail}
                </p>
                <p className="mt-5 inline-block rounded-lg bg-ink px-3 py-1.5 text-sm font-semibold text-white">
                  {t.loss}: {catalogue.sprayingComparison.hydraulic.loss}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="h-full rounded-3xl border-2 border-pine bg-pine-soft/50 p-8">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {catalogue.sprayingComparison.cda.title}
                </h3>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {catalogue.sprayingComparison.cda.properties.map(
                    (property) => (
                      <li
                        key={property}
                        className="flex gap-2.5 text-sm text-charcoal"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pine"
                        />
                        {property}
                      </li>
                    ),
                  )}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-slate">
                  {catalogue.sprayingComparison.cda.detail}
                </p>
                <p className="mt-6 text-xs uppercase tracking-wider text-slate">
                  {t.improves}
                </p>
                <p className="mt-1.5 text-sm font-medium text-ink">
                  {catalogue.sprayingComparison.cda.improves.join(" · ")}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* ABZ Sense */}
          <FadeIn delay={0.1}>
            <div className="mt-5 rounded-3xl border border-line bg-white p-8 shadow-soft">
              <h3 className="font-display text-lg font-semibold text-ink">
                {catalogue.abzSense.title}
              </h3>
              <p className="mt-1 text-slate">{catalogue.abzSense.subtitle}</p>

              <ol className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                {catalogue.abzSense.howItWorks.map((step, index) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="text-charcoal">{step}</span>
                    {index < catalogue.abzSense.howItWorks.length - 1 && (
                      <span aria-hidden="true" className="text-line">
                        →
                      </span>
                    )}
                  </li>
                ))}
                <li aria-hidden="true" className="text-line">
                  →
                </li>
                <li className="rounded-lg border border-pine px-3 py-1 text-sm font-semibold text-pine">
                  {catalogue.abzSense.outcome}
                </li>
              </ol>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate">
                    {catalogue.abzSense.obstacleLabel}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {catalogue.abzSense.obstacleDetection.map((item) => (
                      <li key={item} className="text-sm text-charcoal">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate">
                    {catalogue.abzSense.terrainLabel}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {catalogue.abzSense.terrainFollow.map((item) => (
                      <li key={item} className="text-sm text-charcoal">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case studies */}
      <section className="mx-auto max-w-wrap px-6 py-20">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {t.caseStudiesHeading}
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate">
            {t.caseStudiesIntro}
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {catalogue.caseStudies.map((study, i) => (
            <FadeIn key={study.id} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-line bg-white p-8 shadow-soft">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {study.title}
                  </h3>
                  <span className="shrink-0 rounded-lg border border-line px-2.5 py-0.5 text-xs font-medium text-slate">
                    {study.product}
                  </span>
                </div>

                {study.highlights && (
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {study.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-xl bg-pine-soft px-3 py-2 text-sm font-medium text-pine-dark"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {study.rows && (
                  <table className="mt-5 w-full text-sm">
                    <thead>
                      <tr className="border-b border-line text-left">
                        <th scope="col" className="pb-2 font-medium text-slate">
                          <span className="sr-only">{t.metricSr}</span>
                        </th>
                        <th scope="col" className="pb-2 font-medium text-slate">
                          {study.baselineLabel}
                        </th>
                        <th scope="col" className="pb-2 font-semibold text-pine">
                          {study.product}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line/60">
                      {study.rows.map((row) => (
                        <tr key={row.metric}>
                          <th
                            scope="row"
                            className="py-2.5 text-left font-normal text-slate"
                          >
                            {row.metric}
                          </th>
                          <td
                            className={
                              row.advantage === "baseline"
                                ? "py-2.5 font-semibold text-ink"
                                : "py-2.5 text-slate"
                            }
                          >
                            {row.baseline}
                          </td>
                          <td
                            className={
                              row.advantage === "drone"
                                ? "py-2.5 font-semibold text-pine"
                                : "py-2.5 text-slate"
                            }
                          >
                            {row.drone}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-wrap px-6 py-20">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {t.differentiatorsHeading}
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {catalogue.differentiators.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div className="border-t-2 border-pine pt-5">
                  <h3 className="font-display font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {item.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond agriculture */}
      {industrialProducts.length > 0 && (
        <section className="mx-auto max-w-wrap px-6 py-20">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {t.beyondHeading}
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-slate">
              {t.beyondIntro}
            </p>
          </FadeIn>
          <div className="mt-6 space-y-5">
            {industrialProducts.map((product) => (
              <FadeIn key={product.id}>
                <ProductCard product={product} catalogue={catalogue} />
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Sectors + CTA */}
      <section className="bg-ink">
        <div className="mx-auto max-w-wrap px-6 py-20">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {t.sectorsHeading}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {catalogue.sectors.map((sector) => (
                <li
                  key={sector}
                  className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/80"
                >
                  {sector}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-12 border-t border-white/10 pt-10">
              <p className="max-w-xl text-lg leading-relaxed text-white/70">
                {t.ctaText}
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-block rounded-full bg-pine px-8 py-4 font-medium text-white shadow-soft transition-all hover:bg-pine-dark hover:shadow-lift"
              >
                {t.ctaButton}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
