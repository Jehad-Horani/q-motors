"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FadeIn, SectionTitle, GoldDivider } from "@/components/Shared";
import { ShieldCheck, Truck, BarChart3, Target, Globe2, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

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
                      {data.bullets.map((bullet: string, bulletIdx: number) => (
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
            {t("strategy.risk.items").map((item: any, idx: number) => (
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
      <section className="py-32 relative bg-gradient-to-b from-q-dark to-black">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.2)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              {/* VISION 2030 Display */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="mb-12"
              >
                <div className="text-8xl md:text-9xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-q-gold-dark via-q-gold to-q-gold-dark tracking-tight">
                  VISION 2030
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wide mb-6">
                {t("strategy.vision.title")}
              </h2>
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-q-gold to-transparent mx-auto mb-10" style={{ boxShadow: '0 0 20px rgba(198,167,94,0.5)' }} />
              <p className="text-xl text-white/70 font-body font-light max-w-4xl mx-auto leading-relaxed">
                {t("strategy.vision.description")}
              </p>
            </div>
          </FadeIn>

          {/* Four National Pillars */}
          <div className="grid sm:grid-cols-2 gap-8">
            {t("strategy.vision.pillars").map((pillar: any, idx: number) => (
              <FadeIn key={idx} delay={idx * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="bg-black/60 border-2 border-q-gold/30 p-10 group hover:border-q-gold hover:bg-black/80 transition-all duration-500"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 border border-q-gold/50 flex items-center justify-center group-hover:border-q-gold transition-all duration-500">
                      <Globe2 className="w-8 h-8 text-q-gold" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-q-gold mb-4 leading-tight">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-white/70 font-body font-light leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-q-gold/0 via-q-gold/50 to-q-gold/0" />
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Closing Statement */}
          <FadeIn delay={0.5}>
            <div className="mt-20 text-center">
              <div className="max-w-4xl mx-auto bg-q-teal-dark/20 border border-q-gold/20 p-12">
                <TrendingUp className="w-12 h-12 text-q-gold mx-auto mb-6" />
                <p className="text-xl md:text-2xl text-white/80 font-heading font-normal leading-relaxed">
                  Q Motors operates as an institutional automotive partner aligned with Saudi Arabia's long-term strategic transformation.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
