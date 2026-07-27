"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold text-ink">ADIS</h3>
            <p className="mt-2 text-sm text-charcoal/60">
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-ink">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-charcoal/60 hover:text-pine">
                  {t.navbar.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-charcoal/60 hover:text-pine"
                >
                  {t.navbar.products}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-charcoal/60 hover:text-pine">
                  {t.navbar.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-ink">Contact</h4>
            <p className="mt-2 text-sm text-charcoal/60">
              info@adis-drones.com<br />
              Available for consultations
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal/10 pt-8">
          <p className="text-center text-sm text-charcoal/50">
            {t.footer.company} © {currentYear}. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}
