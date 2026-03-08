"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FadeIn, SectionTitle, GoldDivider } from "@/components/Shared";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-q-dark pt-24 overflow-hidden">
      {/* WHO WE ARE */}
      <section className="py-32 relative bg-q-teal-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(198,167,94,0.05)_0%,transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title={t("about.whoWeAre.title")} />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-2xl md:text-3xl text-q-gold font-heading font-normal leading-relaxed mb-8">
                {t("about.whoWeAre.content1")}
              </p>
              <p className="text-xl text-white/80 font-body font-light leading-relaxed">
                {t("about.whoWeAre.content2")}
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-[500px] hidden md:block">
              <div className="absolute inset-0 border-2 border-q-gold/30 translate-x-4 translate-y-4" />
              <Image
                src="https://images.unsplash.com/photo-1760713170685-b67abc3be5ad?q=80&w=800&auto=format&fit=crop"
                alt="Who We Are"
                fill
                className="object-cover relative z-10"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-q-teal-dark/50 to-transparent z-20" />
            </FadeIn>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* LEADERSHIP MESSAGE SECTION - CHAIRMAN ONLY */}
      <section className="py-32 relative bg-gradient-to-b from-black via-q-dark to-q-teal-dark">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.015)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tight mb-6">
                LEADERSHIP MESSAGE
              </h2>
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-q-gold to-transparent mx-auto" style={{ boxShadow: '0 0 20px rgba(198,167,94,0.4)' }} />
            </div>
          </FadeIn>

          {/* Chairman - Split Layout */}
          <FadeIn>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
              data-testid="chairman-leadership-card"
            >
              {/* Desktop Layout - Side by Side */}
              <div className="hidden md:flex bg-black/40 border border-q-gold/30 overflow-hidden">
                {/* Chairman Portrait - Left */}
                <div className="relative w-[400px] lg:w-[450px] flex-shrink-0">
                  <Image
                    src="/chairman.jpeg"
                    alt="Hilal Khalaf Al-Rowaili - Chairman"
                    fill
                    className="object-cover object-center"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-q-gold/60" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-q-gold/40" />
                </div>

                {/* Content - Right */}
                <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center">
                  {/* Name & Title */}
                  <div className="mb-8">
                    <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-3">
                      Hilal Khalaf Al-Rowaili
                    </h3>
                    <div className="w-20 h-[2px] bg-q-gold mb-4" style={{ boxShadow: '0 0 15px rgba(198,167,94,0.5)' }} />
                    <p className="text-lg text-q-gold font-body font-medium tracking-wider uppercase">
                      Chairman
                    </p>
                  </div>

                  {/* Content Paragraphs */}
                  <div className="space-y-5">
                    <p className="text-base lg:text-lg text-white/80 font-body font-light leading-relaxed">
                      Mr. Hilal Khalaf Al-Rowaili is a business leader with deep expertise in logistics, supply chain, customs, and government relations within the Kingdom of Saudi Arabia. His experience builds upon the legacy of his father, Sheikh Khalaf Mohammed Al-Rowaili, a pioneer in the Saudi logistics and transportation sector.
                    </p>
                    <p className="text-base lg:text-lg text-white/80 font-body font-light leading-relaxed">
                      Growing up at the heart of the family business, supporting major automotive agencies across the Kingdom, Mr. Hilal developed a strong understanding of the Saudi market, its regulatory environment, and the operational requirements of large-scale distribution.
                    </p>
                    <p className="text-base lg:text-lg text-white/80 font-body font-light leading-relaxed">
                      Today, Q Motors represents the evolution of this legacy — connecting global automotive innovation with Saudi Arabia&apos;s regulatory framework and market needs, while contributing to the Kingdom&apos;s Vision 2030 objectives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Layout - Stacked */}
              <div className="md:hidden bg-black/40 border border-q-gold/30 overflow-hidden">
                {/* Chairman Portrait - Top */}
                <div className="relative h-[350px]">
                  <Image
                    src="/chairman.jpeg"
                    alt="Hilal Khalaf Al-Rowaili - Chairman"
                    fill
                    className="object-cover object-center"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-q-gold/60" />
                </div>

                {/* Content - Bottom */}
                <div className="p-8">
                  {/* Name & Title */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      Hilal Khalaf Al-Rowaili
                    </h3>
                    <div className="w-16 h-[2px] bg-q-gold mb-3" style={{ boxShadow: '0 0 10px rgba(198,167,94,0.4)' }} />
                    <p className="text-base text-q-gold font-body font-medium tracking-wider uppercase">
                      Chairman
                    </p>
                  </div>

                  {/* Content Paragraphs */}
                  <div className="space-y-4">
                    <p className="text-base text-white/80 font-body font-light leading-relaxed">
                      Mr. Hilal Khalaf Al-Rowaili is a business leader with deep expertise in logistics, supply chain, customs, and government relations within the Kingdom of Saudi Arabia. His experience builds upon the legacy of his father, Sheikh Khalaf Mohammed Al-Rowaili, a pioneer in the Saudi logistics and transportation sector.
                    </p>
                    <p className="text-base text-white/80 font-body font-light leading-relaxed">
                      Growing up at the heart of the family business, supporting major automotive agencies across the Kingdom, Mr. Hilal developed a strong understanding of the Saudi market, its regulatory environment, and the operational requirements of large-scale distribution.
                    </p>
                    <p className="text-base text-white/80 font-body font-light leading-relaxed">
                      Today, Q Motors represents the evolution of this legacy — connecting global automotive innovation with Saudi Arabia&apos;s regulatory framework and market needs, while contributing to the Kingdom&apos;s Vision 2030 objectives.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* OUR LEADERSHIP TEAM SECTION - CEO & CCO */}
      <section className="py-32 relative bg-gradient-to-b from-q-teal-dark via-q-dark to-black">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tight mb-4">
                OUR LEADERSHIP TEAM
              </h2>
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-q-gold to-transparent mx-auto mb-8" style={{ boxShadow: '0 0 20px rgba(198,167,94,0.4)' }} />
              <p className="text-lg text-white/60 font-body font-light max-w-3xl mx-auto">
                Executive leadership guiding Q Motors&apos; strategic growth and operational excellence.
              </p>
            </div>
          </FadeIn>

          {/* Two Leadership Cards - CEO & CCO */}
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            
            {/* CEO CARD - Simon Ackers */}
            <FadeIn>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-black/50 border border-q-gold/25 transition-all duration-500 hover:border-q-gold/50 hover:bg-black/70 h-full flex flex-col"
                data-testid="ceo-leadership-card"
              >
                {/* CEO Portrait */}
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src="/QMOTORCEO.jpeg"
                    alt="Simon Ackers - CEO"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-q-gold/60" />
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-q-gold/40" />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col">
                  {/* Name & Title */}
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-2">
                      Simon Ackers
                    </h3>
                    <div className="w-16 h-[2px] bg-q-gold mb-3" style={{ boxShadow: '0 0 12px rgba(198,167,94,0.5)' }} />
                    <p className="text-base text-q-gold font-body font-medium tracking-wider uppercase">
                      Chief Executive Officer
                    </p>
                  </div>

                  {/* Experience & Expertise */}
                  <div className="mb-6">
                    <h4 className="text-lg font-heading font-bold text-white/90 mb-4">
                      Experience &amp; Expertise
                    </h4>
                    <p className="text-base text-white/70 font-body font-light leading-relaxed mb-4">
                      30 years of multinational distribution &amp; OEM experience.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(198,167,94,0.4)' }} />
                        <span className="text-sm text-white/70 font-body font-light">Proven Saudi Market Entry &amp; Scale up</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(198,167,94,0.4)' }} />
                        <span className="text-sm text-white/70 font-body font-light">Structured, Brand-Protective Distribution Models</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(198,167,94,0.4)' }} />
                        <span className="text-sm text-white/70 font-body font-light">EV &amp; Premium Technology Positioning</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(198,167,94,0.4)' }} />
                        <span className="text-sm text-white/70 font-body font-light">Governance, Capital &amp; Cashflow Discipline</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(198,167,94,0.4)' }} />
                        <span className="text-sm text-white/70 font-body font-light">High-Performance Local Leadership Platform</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(198,167,94,0.4)' }} />
                        <span className="text-sm text-white/70 font-body font-light">Long-Term Strategic Partnership Approach</span>
                      </li>
                    </ul>
                  </div>

                  {/* Leadership Overview */}
                  <div className="flex-1">
                    <h4 className="text-lg font-heading font-bold text-white/90 mb-4">
                      Leadership Overview
                    </h4>
                    <div className="space-y-3">
                      <p className="text-sm text-white/70 font-body font-light leading-relaxed">
                        Q Motors was established as a fully integrated automotive distribution and market development platform designed to support global OEM brands entering and expanding within the Saudi market.
                      </p>
                      <p className="text-sm text-white/70 font-body font-light leading-relaxed">
                        Our leadership combines deep Saudi market expertise with international automotive experience, enabling disciplined governance, strong operational execution, and long-term brand development.
                      </p>
                      <p className="text-sm text-white/70 font-body font-light leading-relaxed">
                        The platform is built to provide OEM partners with a stable, transparent, and scalable operating environment that supports sustainable growth aligned with Vision 2030.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-q-gold via-q-gold/60 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            </FadeIn>

            {/* CCO CARD - Bayan Kairat */}
            <FadeIn delay={0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-black/50 border border-q-gold/25 transition-all duration-500 hover:border-q-gold/50 hover:bg-black/70 h-full flex flex-col"
                data-testid="cco-leadership-card"
              >
                {/* CCO Portrait */}
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src="/bayan.jpeg"
                    alt="Bayan Kairat - CCO"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-q-gold/60" />
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-q-gold/40" />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col">
                  {/* Name & Title */}
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-2">
                      Bayan Kairat
                    </h3>
                    <div className="w-16 h-[2px] bg-q-gold mb-3" style={{ boxShadow: '0 0 12px rgba(198,167,94,0.5)' }} />
                    <p className="text-base text-q-gold font-body font-medium tracking-wider uppercase">
                      Chief Commercial Officer
                    </p>
                  </div>

                  {/* Experience & Expertise */}
                  <div className="mb-6">
                    <h4 className="text-lg font-heading font-bold text-white/90 mb-4">
                      Experience &amp; Expertise
                    </h4>
                    <p className="text-base text-white/70 font-body font-light leading-relaxed mb-4">
                      Multilingual — Including Chinese. Over 10 years of experience in Marketing, Public Relations, and OEM business development.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(198,167,94,0.4)' }} />
                        <span className="text-sm text-white/70 font-body font-light">Leading multi-brand automotive distribution strategy in Saudi Arabia</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(198,167,94,0.4)' }} />
                        <span className="text-sm text-white/70 font-body font-light">Deep regional expertise and strong Chinese OEM relationships</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(198,167,94,0.4)' }} />
                        <span className="text-sm text-white/70 font-body font-light">Drives market expansion, partnerships, and long-term commercial success</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(198,167,94,0.4)' }} />
                        <span className="text-sm text-white/70 font-body font-light">Go-To-Market Strategy Expert – KSA</span>
                      </li>
                    </ul>
                  </div>

                  {/* Leadership Overview */}
                  <div className="flex-1">
                    <h4 className="text-lg font-heading font-bold text-white/90 mb-4">
                      Leadership Overview
                    </h4>
                    <div className="space-y-3">
                      <p className="text-sm text-white/70 font-body font-light leading-relaxed">
                        Bayan Kairat plays a key role in shaping Q Motors&apos; commercial strategy and market expansion across Saudi Arabia. With strong expertise in automotive distribution, OEM partnerships, and regional market development, she leads initiatives that strengthen brand positioning and long-term commercial growth.
                      </p>
                      <p className="text-sm text-white/70 font-body font-light leading-relaxed">
                        Her multilingual background and deep relationships with international OEM partners, particularly in China, enable Q Motors to build strong strategic alliances and execute effective go-to-market strategies within the Kingdom.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-q-gold via-q-gold/60 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* LEADERSHIP PHILOSOPHY */}
      <section className="py-32 relative bg-q-dark">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title={t("about.philosophy.title")} />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.2} className="relative h-[500px] hidden md:block order-2 md:order-1">
              <div className="absolute inset-0 border-2 border-q-gold/30 -translate-x-4 translate-y-4" />
              <Image
                src="https://images.unsplash.com/photo-1666542061805-817deaf22f3f?q=80&w=800&auto=format&fit=crop"
                alt="Leadership"
                fill
                className="object-cover relative z-10"
                unoptimized
              />
            </FadeIn>
            <FadeIn className="order-1 md:order-2">
              <div className="bg-q-teal-dark/60 border border-q-gold/20 p-12 backdrop-blur-sm">
                <p className="text-xl leading-relaxed text-white/80 font-body font-light mb-8">
                  {t("about.philosophy.content1")}
                </p>
                <ul className="space-y-6 mb-8">
                  {t("about.philosophy.bullets").map((bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-q-gold flex-shrink-0 mt-1" />
                      <span className="text-lg text-white/80 font-body">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-20 h-[2px] bg-q-gold mb-6" style={{ boxShadow: '0 0 15px rgba(198,167,94,0.4)' }} />
                <p className="text-2xl text-q-gold font-heading font-normal leading-relaxed">
                  &quot;{t("about.philosophy.content2")}&quot;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* MARKET EVOLUTION */}
      <section className="py-32 relative bg-q-teal-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1760713164476-7eb5063b3d07?q=80&w=1920&auto=format&fit=crop"
            alt="Background"
            fill
            className="object-cover opacity-10"
            unoptimized
          />
          <div className="absolute inset-0 bg-q-teal-dark/80" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionTitle title={t("about.evolution.title")} />
          <FadeIn>
            <p className="text-2xl md:text-4xl text-white/90 font-heading font-normal leading-relaxed">
              {t("about.evolution.content")}
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
