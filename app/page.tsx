"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Hero } from "@/components/Hero";
import { FadeIn, SectionTitle, GoldDivider } from "@/components/Shared";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  return (
    <main className="min-h-screen bg-q-dark overflow-hidden">
      <Hero />

      {/* OUR FOUNDATION */}
      <section className="py-32 relative bg-q-teal-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,167,94,0.05)_0%,transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title={t("home.foundation.title")} />
          <FadeIn>
            <p className="text-2xl md:text-3xl text-center text-white/90 font-body font-light max-w-4xl mx-auto leading-relaxed mb-20">
              {t("home.foundation.content")}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {t("home.foundation.bullets").map((bullet: string, idx: number) => (
              <FadeIn
                key={idx}
                delay={idx * 0.1}
                className="group flex items-center gap-6 p-8 bg-q-dark/50 border border-q-gold/20 hover:border-q-gold/50 transition-all duration-500 hover:bg-q-dark/70"
              >
                <CheckCircle2 className="w-8 h-8 text-q-gold flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xl text-white/90 font-body font-light">
                  {bullet}
                </span>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-center text-q-gold font-heading font-normal max-w-4xl mx-auto leading-relaxed">
              {t("home.foundation.conclusion")}
            </p>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* WHAT MAKES Q MOTORS DIFFERENT */}
      <section className="py-32 relative bg-q-dark overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title={t("home.different.title")} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t("home.different.bullets").map((bullet: string, idx: number) => (
              <FadeIn
                key={idx}
                delay={idx * 0.1}
                className="group relative bg-q-teal-dark/60 p-10 border border-q-gold/20 hover:border-q-gold/40 transition-all duration-500 overflow-hidden"
              >
                <motion.div 
                  className="text-q-gold text-7xl md:text-8xl font-heading font-bold opacity-20 mb-6 transition-all duration-500 group-hover:opacity-30"
                  whileHover={{ scale: 1.05 }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </motion.div>
                <h3 className="text-xl text-white font-body font-light tracking-wide leading-relaxed">
                  {bullet}
                </h3>
                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-q-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* CLOSING STATEMENT */}
      <section className="py-32 relative bg-gradient-to-b from-q-dark via-q-teal-dark to-black text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(198,167,94,0.1)_0%,transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <p className="text-2xl md:text-4xl text-white font-heading font-normal leading-relaxed mb-16">
              &quot;{t("home.closing.content")}&quot;
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/services"
                data-testid="home-cta-services"
                className="group relative px-12 py-6 bg-q-gold text-q-dark font-body font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:shadow-gold-glow flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {t("nav.services")}
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`}
                  />
                </span>
                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
