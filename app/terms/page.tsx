"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Terms() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-q-dark pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          {t("terms.title")}
        </h1>
        
        {/* Last Updated */}
        <p className="text-sm text-white/50 font-body font-light mb-12">
          {t("terms.lastUpdated")}
        </p>

        {/* Gold Divider */}
        <div className="w-24 h-[2px] bg-q-gold mb-12" />

        {/* Introduction */}
        <p className="text-lg text-white/80 font-body font-light leading-relaxed mb-16">
          {t("terms.intro")}
        </p>

        {/* Sections */}
        <div className="space-y-12">
          {t("terms.sections").map((section: any, idx: number) => (
            <div key={idx}>
              <h2 className="text-2xl font-heading font-bold text-q-gold mb-4">
                {section.title}
              </h2>
              <p className="text-base text-white/70 font-body font-light leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
