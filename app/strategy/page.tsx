"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FadeIn, SectionTitle, GoldDivider } from "@/components/Shared";
import { ShieldCheck, Truck, BarChart3, Globe } from "lucide-react";
import { motion } from "motion/react";

export default function Strategy() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-q-dark pt-24 overflow-hidden">
      {/* REGULATORY & COMPLIANCE */}
      <section className="py-32 relative bg-q-teal-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(198,167,94,0.05)_0%,transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title={t("strategy.regulatory.title")} />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-2xl text-q-gold font-heading font-normal leading-relaxed mb-10">
                {t("strategy.regulatory.content")}
              </p>
              <ul className="space-y-6">
                {t("strategy.regulatory.bullets").map((bullet: string, idx: number) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <ShieldCheck className="w-6 h-6 text-q-gold flex-shrink-0 mt-1" />
                    <span className="text-xl text-white/80 font-body font-light">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2} className="relative hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="aspect-square bg-q-dark/50 border border-q-gold/20 flex items-center justify-center p-6 transition-all duration-300 hover:border-q-gold/40"
                  >
                    <ShieldCheck className="w-12 h-12 text-q-gold/40" />
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* LOGISTICS & SUPPLY CHAIN */}
      <section className="py-32 relative bg-q-dark">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title={t("strategy.logistics.title")} />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.2} className="relative hidden md:block order-2 md:order-1">
              <div className="relative w-full h-[400px] flex items-center justify-center">
                <Truck className="w-full h-full text-q-gold/10" />
              </div>
            </FadeIn>
            <FadeIn className="order-1 md:order-2">
              <p className="text-2xl text-q-gold font-heading font-normal leading-relaxed mb-10">
                {t("strategy.logistics.content")}
              </p>
              <ul className="space-y-6">
                {t("strategy.logistics.bullets").map((bullet: string, idx: number) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-q-gold rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-xl text-white/80 font-body font-light">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* FINANCIAL & RISK GOVERNANCE */}
      <section className="py-32 relative bg-q-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title={t("strategy.financial.title")} />
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-q-dark/50 p-12 border border-q-gold/20 h-full transition-all duration-300 hover:border-q-gold/40">
                <BarChart3 className="w-12 h-12 text-q-gold mb-8" />
                <p className="text-xl text-white/80 font-body font-light leading-relaxed mb-8">
                  {t("strategy.financial.content1")}
                </p>
                <ul className="space-y-4">
                  {t("strategy.financial.bullets1").map((bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-q-gold rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-lg text-white/70 font-body">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-q-gold/10 p-12 border border-q-gold/30 h-full transition-all duration-300 hover:border-q-gold/50">
                <ShieldCheck className="w-12 h-12 text-q-gold mb-8" />
                <p className="text-xl text-white/80 font-body font-light leading-relaxed mb-8">
                  {t("strategy.financial.content2")}
                </p>
                <ul className="space-y-4">
                  {t("strategy.financial.bullets2").map((bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-q-gold rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-lg text-white/70 font-body">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ALIGNMENT WITH VISION 2030 */}
      <section className="py-32 relative bg-q-dark text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,167,94,0.08)_0%,transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-7xl md:text-9xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-q-gold-dark via-q-gold-light to-q-gold-dark mb-12 tracking-tight"
            >
              VISION 2030
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-white uppercase tracking-wide mb-10">
              {t("strategy.vision.title")}
            </h2>
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-q-gold to-transparent mx-auto mb-10" style={{ boxShadow: '0 0 20px rgba(198,167,94,0.5)' }} />
            <p className="text-2xl text-q-gold font-heading font-normal leading-relaxed mb-16">
              {t("strategy.vision.content")}
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {t("strategy.vision.bullets").map((bullet: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-q-teal-dark/60 p-6 border border-q-gold/20 flex items-center gap-4 transition-all duration-300 hover:border-q-gold/40"
                >
                  <Globe className="w-6 h-6 text-q-gold flex-shrink-0" />
                  <span className="text-lg text-white/80 font-body font-light">{bullet}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
