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
                src="/car1.png"
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

      {/* LEADERSHIP MESSAGE SECTION */}
      <section className="py-32 relative bg-gradient-to-b from-black via-q-dark to-q-teal-dark">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.015)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tight mb-6">
                {t("about.leadership.title")}
              </h2>
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-q-gold to-transparent mx-auto" style={{ boxShadow: '0 0 20px rgba(198,167,94,0.4)' }} />
            </div>
          </FadeIn>

          {/* Improved Layout - Image Left, Text Right */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Side - Executive Image (2 columns on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 relative"
            >
              <div className="relative h-[500px] lg:h-[600px]">
                {/* Border Frame */}
                <div className="absolute inset-0 border-2 border-q-gold/30 -translate-x-3 -translate-y-3 lg:-translate-x-4 lg:-translate-y-4" />
                
                {/* Executive Portrait */}
                <div className="relative h-full overflow-hidden">
                  <Image
                    src="chairman.jpeg"
                    alt="Executive Leadership"
                    fill
                    className="object-cover relative z-10"
                    unoptimized
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-20" />
                  
                  {/* Gold Accent Corner */}
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-q-gold/60 z-30" />
                </div>
              </div>

              {/* Chairman Name & Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 bg-black/60 border border-q-gold/30 p-6"
              >
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {t("about.leadership.chairman.name")}
                </h3>
                <div className="w-12 h-[2px] bg-q-gold mb-3" style={{ boxShadow: '0 0 10px rgba(198,167,94,0.4)' }} />
                <p className="text-sm text-q-gold font-body font-medium uppercase tracking-wider">
                  {t("about.leadership.chairman.title")}
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - Leadership Statement (3 columns on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="relative">
                {/* Gold Accent Line */}
                <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-q-gold/60 via-q-gold/40 to-transparent hidden lg:block" />
                
                {/* Content Box */}
                <div className="bg-q-teal-dark/30 border border-q-gold/20 p-8 lg:p-12 backdrop-blur-sm">
                  {/* Statement Content */}
                  <div className="space-y-6">
                    {t("about.leadership.content").split('\\n\\n').map((paragraph: string, idx: number) => (
                      <p key={idx} className="text-lg md:text-xl lg:text-2xl text-white/90 font-body font-light leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Bottom Gold Divider */}
                  <div className="mt-8 pt-6 border-t border-q-gold/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-[2px] bg-q-gold" style={{ boxShadow: '0 0 10px rgba(198,167,94,0.4)' }} />
                      <span className="text-xs text-q-gold/70 font-body font-light uppercase tracking-wider">
                        Leadership Statement
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* OUR LEADERSHIP TEAM SECTION */}
      <section className="py-32 relative bg-gradient-to-b from-q-teal-dark via-q-dark to-black">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tight mb-4">
                {t("about.team.title")}
              </h2>
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-q-gold to-transparent mx-auto mb-8" style={{ boxShadow: '0 0 20px rgba(198,167,94,0.4)' }} />
              <p className="text-lg text-white/60 font-body font-light max-w-3xl mx-auto">
                {t("about.team.subtitle")}
              </p>
            </div>
          </FadeIn>

          {/* Leadership Profile Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t("about.team.profiles").slice(0, 2).map((profile: any, idx: number) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-black/60 border border-q-gold/20 p-8 transition-all duration-500 hover:border-q-gold/40 hover:bg-black/80 h-full flex flex-col"
                >
                  {/* Executive Portrait */}
                  <div className="relative h-130 mb-6 overflow-hidden">
                    <Image
                      src={
                        idx === 0 
                          ? "/QMOTORCEO.jpeg"
                          : "/bayan.jpeg"
                      }
                      alt={profile.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_40px_rgba(198,167,94,0.2)]" />
                  </div>

                  {/* Name & Position */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      {profile.name}
                    </h3>
                    <div className="w-16 h-[2px] bg-q-gold mb-3" style={{ boxShadow: '0 0 10px rgba(198,167,94,0.4)' }} />
                    <p className="text-base text-q-gold font-body font-medium tracking-wide uppercase">
                      {profile.position}
                    </p>
                  </div>

                  {/* Experience & Expertise */}
                  <div className="flex-1">
                    <h4 className="text-lg font-heading font-bold text-white/90 mb-4">
                      {profile.experienceTitle}
                    </h4>
                    
                    {/* Intro */}
                    <p className="text-base text-white/70 font-body font-light leading-relaxed mb-4 whitespace-pre-line">
                      {profile.intro}
                    </p>

                    {/* Expertise Bullets */}
                    <ul className="space-y-3">
                      {profile.expertise.map((item: string, bulletIdx: number) => (
                        <li key={bulletIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-white/70 font-body font-light leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-q-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </motion.div>
              </FadeIn>
            ))}

            {/* THIRD CARD - NADER QUAYS - COMMENTED OUT TEMPORARILY */}
            {/* 
            To re-enable this card, simply uncomment the entire block below.
            The grid will automatically adjust from 2 columns to 3 columns (change lg:grid-cols-2 to lg:grid-cols-3).
            Also change .slice(0, 2) to .slice(0, 3) or remove .slice() entirely above.
            
            {t("about.team.profiles")[2] && (
              <FadeIn delay={0.3}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-black/60 border border-q-gold/20 p-8 transition-all duration-500 hover:border-q-gold/40 hover:bg-black/80 h-full flex flex-col"
                >
                  <div className="relative h-130 mb-6 overflow-hidden">
                    <Image
                      src="/nader2.jpeg"
                      alt={t("about.team.profiles")[2].name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_40px_rgba(198,167,94,0.2)]" />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      {t("about.team.profiles")[2].name}
                    </h3>
                    <div className="w-16 h-[2px] bg-q-gold mb-3" style={{ boxShadow: '0 0 10px rgba(198,167,94,0.4)' }} />
                    <p className="text-base text-q-gold font-body font-medium tracking-wide uppercase">
                      {t("about.team.profiles")[2].position}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-heading font-bold text-white/90 mb-4">
                      {t("about.team.profiles")[2].experienceTitle}
                    </h4>
                    
                    <p className="text-base text-white/70 font-body font-light leading-relaxed mb-4 whitespace-pre-line">
                      {t("about.team.profiles")[2].intro}
                    </p>

                    <ul className="space-y-3">
                      {t("about.team.profiles")[2].expertise.map((item: string, bulletIdx: number) => (
                        <li key={bulletIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-white/70 font-body font-light leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-q-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </motion.div>
              </FadeIn>
            )}
            */}
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
