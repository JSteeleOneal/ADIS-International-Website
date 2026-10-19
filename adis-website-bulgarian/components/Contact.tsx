"use client";

import { useState, type FormEvent } from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/translations";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { lang } = useLanguage();
  const t = ui[lang].contact;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      company: String(data.get("company") ?? ""), // honeypot — real users leave it empty
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setErrorMessage(t.errorMissing);
      return;
    }

    setStatus("sending");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(body.error ?? t.errorGeneric);
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(t.errorNetwork);
    }
  }

  return (
    <section id="contact" className="border-t border-line bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6">
        <div className="mx-auto max-w-xl">
          <FadeIn className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-pine">
              {t.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              {t.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-slate">{t.sub}</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            {status === "sent" ? (
              <div
                role="status"
                className="rounded-3xl border border-pine/25 bg-white p-10 text-center shadow-soft"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-pine-soft text-pine">
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {t.sentTitle}
                </h3>
                <p className="mt-2 text-slate">{t.sentBody}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-pine underline-offset-4 hover:underline"
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-line bg-white p-8 shadow-soft md:p-10"
                noValidate
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-ink"
                    >
                      {t.nameLabel}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder={t.namePlaceholder}
                      className="field"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-ink"
                    >
                      {t.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder={t.emailPlaceholder}
                      className="field"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-ink"
                    >
                      {t.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder={t.messagePlaceholder}
                      className="field resize-y"
                    />
                  </div>

                  {/* Honeypot: hidden from people, filled by bots */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {status === "error" && errorMessage && (
                    <p
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    >
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-full bg-pine px-8 py-4 text-base font-medium text-white shadow-soft transition-all hover:bg-pine-dark hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? t.sending : t.send}
                  </button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
