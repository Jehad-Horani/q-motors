"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FadeIn, SectionTitle } from "@/components/Shared";
import { ShieldCheck, Truck, BarChart3, Globe } from "lucide-react";

export default function Strategy() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-q-gradient pt-20 overflow-hidden">
      {/* REGULATORY & COMPLIANCE */}
      <section className="py-24 relative bg-q-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t("strategy.regulatory.title")} />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-2xl text-q-gold font-light leading-relaxed mb-8">
                {t("strategy.regulatory.content")}
              </p>
              <ul className="space-y-6">
                {t("strategy.regulatory.bullets").map(
                  (bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <ShieldCheck className="w-6 h-6 text-q-gold flex-shrink-0 mt-1" />
                      <span className="text-xl text-white/90 font-light">
                        {bullet}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-full hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-q-teal-dark to-transparent z-10"></div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-q-teal-light border border-q-gold/20 flex items-center justify-center p-6 text-center"
                  >
                    <ShieldCheck className="w-12 h-12 text-q-gold/50" />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* LOGISTICS & SUPPLY CHAIN */}
      <section className="py-24 relative bg-q-teal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t("strategy.logistics.title")} />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn
              delay={0.2}
              className="relative h-full hidden md:block order-2 md:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-q-teal-light to-transparent z-10"></div>
              <Truck className="w-full h-full text-q-gold/10" />
            </FadeIn>
            <FadeIn className="order-1 md:order-2">
              <p className="text-2xl text-q-gold font-light leading-relaxed mb-8">
                {t("strategy.logistics.content")}
              </p>
              <ul className="space-y-6">
                {t("strategy.logistics.bullets").map(
                  (bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-xl text-white/90 font-light">
                        {bullet}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FINANCIAL & RISK GOVERNANCE */}
      <section className="py-24 relative bg-q-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t("strategy.financial.title")} />
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn>
              <div className="bg-q-teal-light p-10 border border-q-gold/20 h-full">
                <BarChart3 className="w-10 h-10 text-q-gold mb-6" />
                <p className="text-xl text-white/90 font-light leading-relaxed mb-8">
                  {t("strategy.financial.content1")}
                </p>
                <ul className="space-y-4">
                  {t("strategy.financial.bullets1").map(
                    (bullet: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-lg text-white/80">{bullet}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-q-gold/10 p-10 border border-q-gold/20 h-full">
                <ShieldCheck className="w-10 h-10 text-q-gold mb-6" />
                <p className="text-xl text-white/90 font-light leading-relaxed mb-8">
                  {t("strategy.financial.content2")}
                </p>
                <ul className="space-y-4">
                  {t("strategy.financial.bullets2").map(
                    (bullet: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-lg text-white/80">{bullet}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ALIGNMENT WITH VISION 2030 */}
      <section className="py-32 relative bg-q-teal-light text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-q-gold via-white to-q-gold mb-12 tracking-tighter">
              VISION 2030
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-wider mb-8">
              {t("strategy.vision.title")}
            </h2>
            <p className="text-2xl text-q-gold font-light leading-relaxed mb-12">
              {t("strategy.vision.content")}
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {t("strategy.vision.bullets").map(
                (bullet: string, idx: number) => (
                  <div
                    key={idx}
                    className="bg-q-teal-dark p-6 border border-q-gold/20 flex items-center gap-4"
                  >
                    <Globe className="w-6 h-6 text-q-gold flex-shrink-0" />
                    <span className="text-lg text-white/90 font-light">
                      {bullet}
                    </span>
                  </div>
                ),
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
