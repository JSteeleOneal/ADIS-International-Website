"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(t.contact.success);
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setMessage(t.contact.error);
      }
    } catch (error) {
      setMessage(t.contact.error);
    }

    setLoading(false);
  };

  if (!mounted) return null;

  return (
    <section id="contact" className="border-t border-charcoal/10 bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-pine">
            {t.contact.title}
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            {t.contact.subtitle}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder={t.contact.name}
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-lg border border-charcoal/20 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
            />
            <input
              type="email"
              name="email"
              placeholder={t.contact.email}
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-lg border border-charcoal/20 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder={t.contact.company}
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
          />

          <textarea
            name="message"
            placeholder={t.contact.message}
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-pine px-6 py-3 text-base font-semibold text-white transition-all hover:bg-pine/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "..." : t.contact.send}
          </button>

          {message && (
            <div
              className={`rounded-lg px-4 py-3 text-center ${
                message === t.contact.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
