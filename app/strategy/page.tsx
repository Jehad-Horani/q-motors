"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FadeIn, SectionTitle, GoldDivider } from "@/components/Shared";
import { ShieldCheck, Truck, BarChart3, Target, Globe2, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Strategy() {
  const { t } = useLanguage();

  const frameworkItems = [
    {
      key: "regulatory",
      icon: ShieldCheck,
      gradient: "from-q-gold/20 to-transparent",
    },
    {
      key: "logistics",
      icon: Truck,
      gradient: "from-q-teal-accent/20 to-transparent",
    },
    {
      key: "financial",
      icon: BarChart3,
      gradient: "from-q-gold-dark/20 to-transparent",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-q-dark to-black pt-24 overflow-hidden">
      {/* HERO SECTION */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,167,94,0.08)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-heading font-bold text-white uppercase tracking-tight mb-6"
              >
                {t("strategy.title")}
              </motion.h1>
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-q-gold to-transparent mx-auto mb-8" style={{ boxShadow: '0 0 20px rgba(198,167,94,0.4)' }} />
              <p className="text-xl md:text-2xl text-white/70 font-body font-light max-w-4xl mx-auto leading-relaxed">
                {t("strategy.intro")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* SECTION 1: STRATEGIC CONTROL FRAMEWORK */}
      <section className="py-32 relative bg-gradient-to-b from-q-dark via-q-teal-dark to-q-dark">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tight mb-6">
                {t("strategy.framework.title")}
              </h2>
              <div className="w-24 h-[2px] bg-q-gold mx-auto" style={{ boxShadow: '0 0 15px rgba(198,167,94,0.4)' }} />
            </div>
          </FadeIn>

          {/* Three Control Pillars - Architectural Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {frameworkItems.map((item, idx) => {
              const Icon = item.icon;
              const data = t(`strategy.framework.${item.key}`);
              
              return (
                <FadeIn key={item.key} delay={idx * 0.15}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-black/40 border-2 border-q-gold/20 p-10 h-full group hover:border-q-gold/50 transition-all duration-500"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className="relative z-10 mb-8">
                      <div className="w-20 h-20 border-2 border-q-gold/40 flex items-center justify-center mb-6 group-hover:border-q-gold transition-all duration-500">
                        <Icon className="w-10 h-10 text-q-gold" />
                      </div>
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wide leading-tight">
                        {data.title}
                      </h3>
                    </div>

                    {/* Gold Divider */}
                    <div className="w-16 h-[2px] bg-q-gold mb-8 relative z-10" style={{ boxShadow: '0 0 10px rgba(198,167,94,0.3)' }} />

                    {/* Bullets */}
                    <ul className="space-y-4 relative z-10">
                      {Array.isArray(data.bullets) && data.bullets.map((bullet: string, bulletIdx: number) => (
                        <motion.li
                          key={bulletIdx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: bulletIdx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2.5 flex-shrink-0" />
                          <span className="text-base text-white/80 font-body font-light leading-relaxed">
                            {bullet}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-q-gold/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* SECTION 2: RISK & STABILITY ARCHITECTURE */}
      <section className="py-32 relative bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,167,94,0.05)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tight mb-6">
                {t("strategy.risk.title")}
              </h2>
              <div className="w-24 h-[2px] bg-q-gold mx-auto mb-8" style={{ boxShadow: '0 0 15px rgba(198,167,94,0.4)' }} />
              <p className="text-xl text-white/70 font-body font-light max-w-4xl mx-auto">
                {t("strategy.risk.subtitle")}
              </p>
            </div>
          </FadeIn>

          {/* Governance Matrix */}
          <div className="grid md:grid-cols-2 gap-6">
            {Array.isArray(t("strategy.risk.items")) && t("strategy.risk.items").map((item: any, idx: number) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-q-teal-dark/30 border border-q-gold/20 p-8 group hover:border-q-gold/40 hover:bg-q-teal-dark/50 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 border border-q-gold/40 flex items-center justify-center">
                        <Target className="w-6 h-6 text-q-gold" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/60 font-body font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* SECTION 3: VISION 2030 ALIGNMENT */}
      <section className="py-32 relative bg-gradient-to-b from-q-dark via-q-teal-dark to-black">
        {/* Top Gold Divider */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-q-gold to-transparent" style={{ boxShadow: '0 0 15px rgba(198,167,94,0.3)' }} />
        
        {/* Subtle Background */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.1)_1px,transparent_1px)] bg-[size:120px_120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Split Layout - Text Left, Logo Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Side - Text Content */}
            <FadeIn>
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-6 leading-tight"
                >
                  {t("strategy.vision.title")}
                </motion.h2>
                
                <div className="w-24 h-[2px] bg-q-gold mb-8" style={{ boxShadow: '0 0 15px rgba(198,167,94,0.4)' }} />
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-white/70 font-body font-light leading-relaxed mb-8"
                >
                  {t("strategy.vision.description")}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-q-teal-dark/30 border-l-2 border-q-gold/50 pl-6 py-4"
                >
                  <p className="text-lg text-white/80 font-body font-light leading-relaxed italic">
                    Q Motors operates as an institutional automotive partner aligned with Saudi Arabia's long-term strategic transformation.
                  </p>
                </motion.div>
              </div>
            </FadeIn>

            {/* Right Side - Vision 2030 Logo */}
            <FadeIn delay={0.4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Subtle glow effect behind logo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-q-gold/10 to-transparent blur-3xl" />
                  
                  {/* Official Vision 2030 Logo */}
                  <Image
                    src="https://customer-assets.emergentagent.com/job_ebe463d2-bcea-4c69-b584-ebbb0ff759c0/artifacts/zwxjp1s9_Screenshot_2026-03-03_152152-removebg-preview.png"
                    alt="Saudi Vision 2030"
                    width={600}
                    height={600}
                    className="relative z-10 w-full h-auto"
                    style={{ 
                      filter: 'drop-shadow(0 0 30px rgba(198,167,94,0.15))',
                    }}
                    unoptimized
                  />
                </div>
              </motion.div>
            </FadeIn>
          </div>

          {/* Strategic Pillars - 2x2 Grid */}
          <FadeIn delay={0.5}>
            <div className="mt-20">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white text-center uppercase tracking-wide mb-12">
                Strategic Commitment Areas
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {t("strategy.vision.pillars").map((pillar: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group relative bg-black/40 border border-q-gold/20 p-8 transition-all duration-500 hover:border-q-gold/40 hover:bg-black/60"
                  >
                    {/* Number Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 border border-q-gold/30 flex items-center justify-center">
                      <span className="text-q-gold/60 font-heading font-bold text-sm">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 border border-q-gold/40 flex items-center justify-center group-hover:border-q-gold transition-all duration-500">
                        <Globe2 className="w-6 h-6 text-q-gold" />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-heading font-bold text-q-gold mb-3 leading-tight">
                      {pillar.title}
                    </h4>

                    {/* Divider */}
                    <div className="w-12 h-[1px] bg-q-gold/40 mb-4" />

                    {/* Description */}
                    <p className="text-sm text-white/60 font-body font-light leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Bottom accent on hover */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-q-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
