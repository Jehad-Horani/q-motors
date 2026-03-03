"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Globe } from "lucide-react";

export function FloatingLanguageToggle() {
  const { toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-8 right-8 z-50 bg-q-gold text-q-teal-dark p-4 rounded-full shadow-lg hover:bg-white transition-colors flex items-center justify-center group"
      aria-label="Toggle Language"
    >
      <Globe className="w-6 h-6" />
      <span className="absolute right-full mr-4 bg-q-teal-dark text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {t("nav.language")}
      </span>
    </button>
  );
}
