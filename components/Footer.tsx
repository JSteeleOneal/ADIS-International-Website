"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/translations";

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const t = ui[lang].footer;

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-wrap px-6 py-14">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/#home" className="flex items-center gap-3" aria-label="ADIS home">
              <Image
                src="/logo.png"
                alt="ADIS logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <div>
                <p className="font-display text-lg font-semibold tracking-tight text-ink">
                  ADIS
                </p>
                <p className="text-sm text-slate">{t.tagline}</p>
              </div>
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm font-medium text-ink">{t.inquiries}</p>
            <a
              href="mailto:ISZ.ADIS@protonmail.com"
              className="text-sm text-slate transition-colors hover:text-pine"
            >
              ISZ.ADIS@protonmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-center md:text-left">
          <p className="text-sm text-slate">
            © {year} ADIS — Agricultural Drone Irrigation Systems. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
