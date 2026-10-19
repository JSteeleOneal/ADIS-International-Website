"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/translations";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const t = ui[lang].nav;

  const links = [
    { href: "/#home", label: t.home },
    { href: "/#about", label: t.about },
    { href: "/products", label: t.products },
    { href: "/#contact", label: t.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-white/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-wrap items-center justify-between px-6">
        <Link href="/#home" className="flex items-center gap-3" aria-label="ADIS home">
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
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-charcoal transition-colors hover:text-pine"
            >
              {l.label}
            </Link>
          ))}
          <LanguageToggle />
          <Link
            href="/#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-[15px] font-medium text-white shadow-soft transition-all hover:bg-pine hover:shadow-lift"
          >
            {t.requestDemo}
          </Link>
        </div>

        {/* Mobile: language toggle + menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.closeMenu : t.openMenu}
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
        </div>
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
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-base font-medium text-white"
              >
                {t.requestDemo}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
