"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  const links = [
    { href: "#home", label: t.navbar.home },
    { href: "/products", label: t.navbar.products },
    { href: "#about", label: t.navbar.about },
    { href: "#contact", label: t.navbar.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-white/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-wrap items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="ADIS home">
          <Image
            src="/logo.png"
            alt="ADIS logo"
            width={44}
            height={44}
            priority
            className="h-11 w-11 object-contain"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            ADIS
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-charcoal transition-colors hover:text-pine"
            >
              {l.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="flex gap-2 border-l border-neutral-300 pl-8">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 text-sm font-medium transition-colors ${
                language === "en"
                  ? "text-pine font-semibold"
                  : "text-charcoal hover:text-pine"
              }`}
            >
              EN
            </button>
            <span className="text-charcoal">/</span>
            <button
              onClick={() => setLanguage("pt")}
              className={`px-2 py-1 text-sm font-medium transition-colors ${
                language === "pt"
                  ? "text-pine font-semibold"
                  : "text-charcoal hover:text-pine"
              }`}
            >
              PT
            </button>
          </div>

          <Link
            href="#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-[15px] font-medium text-white shadow-soft transition-all hover:bg-pine hover:shadow-lift"
          >
            {t.navbar.demo}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-ink transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-ink transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-ink transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-line bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-charcoal hover:bg-mist"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-4 flex gap-2 border-t border-neutral-200 pt-4">
                <button
                  onClick={() => {
                    setLanguage("en");
                    setOpen(false);
                  }}
                  className={`flex-1 rounded-lg px-3 py-2 text-center font-medium transition-colors ${
                    language === "en"
                      ? "bg-pine text-white"
                      : "bg-mist text-charcoal hover:bg-neutral-300"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("pt");
                    setOpen(false);
                  }}
                  className={`flex-1 rounded-lg px-3 py-2 text-center font-medium transition-colors ${
                    language === "pt"
                      ? "bg-pine text-white"
                      : "bg-mist text-charcoal hover:bg-neutral-300"
                  }`}
                >
                  Português
                </button>
              </div>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-base font-medium text-white"
              >
                {t.navbar.demo}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
