"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Hero } from "@/components/Hero";
import { FadeIn, SectionTitle } from "@/components/Shared";
import {
  ChevronRight,
  Download,
  CheckCircle2,
  Target,
  ShieldCheck,
  Truck,
  Building2,
  Wrench,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  return (
    <main className="min-h-screen bg-q-gradient overflow-hidden">
      <Hero />

      {/* OUR FOUNDATION */}
      <section className="py-24 relative bg-q-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t("home.foundation.title")} />
          <FadeIn>
            <p className="text-2xl text-center text-white/90 font-light max-w-4xl mx-auto leading-relaxed mb-16">
              {t("home.foundation.content")}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {t("home.foundation.bullets").map((bullet: string, idx: number) => (
              <FadeIn
                key={idx}
                delay={idx * 0.1}
                className="flex items-center gap-6 p-8 bg-q-teal-light border border-q-gold/20 hover:border-q-gold/50 transition-colors"
              >
                <CheckCircle2 className="w-8 h-8 text-q-gold flex-shrink-0" />
                <span className="text-xl text-white/90 font-light">
                  {bullet}
                </span>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <p className="text-xl text-center text-q-gold font-light max-w-4xl mx-auto leading-relaxed">
              {t("home.foundation.conclusion")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* WHAT MAKES Q MOTORS DIFFERENT */}
      <section className="py-32 relative bg-q-teal-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376712341-0048236759ba?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title={t("home.different.title")} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t("home.different.bullets").map((bullet: string, idx: number) => (
              <FadeIn
                key={idx}
                delay={idx * 0.1}
                className="bg-q-teal-dark/80 p-8 border border-q-gold/30 backdrop-blur-sm"
              >
                <div className="text-q-gold text-4xl font-light mb-6 opacity-50">
                  0{idx + 1}
                </div>
                <h3 className="text-xl text-white font-light tracking-wide">
                  {bullet}
                </h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="py-32 relative bg-gradient-to-t from-black/50 to-transparent text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-2xl md:text-4xl text-white font-light leading-relaxed mb-16">
              &quot;{t("home.closing.content")}&quot;
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/services"
                className="px-10 py-5 bg-q-gold text-q-teal-dark font-bold uppercase tracking-widest hover:bg-white transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group"
              >
                {t("nav.services")}
                <ChevronRight
                  className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`}
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
