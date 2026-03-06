"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FadeIn, SectionTitle, GoldDivider } from "@/components/Shared";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Services() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  const blocks = [
    { key: "0", image: "/service1.jpg" },
    { key: "1", image: "/service2.jpg" },
    { key: "2", image: "/service3.jpg" },
    { key: "3", image: "/service4.jpg" },
    { key: "4", image: "/service5.png" },
  ];

  return (
    <main className="min-h-screen bg-q-dark overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-q-dark">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-q-dark via-q-teal-dark to-q-dark" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1760713164476-7eb5063b3d07?q=80&w=1920&auto=format&fit=crop"
            alt="Services Background"
            fill
            className="object-cover opacity-15"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-q-dark via-transparent to-q-dark" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tight mb-8 uppercase">
                {t("services.title")}
              </h1>
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-q-gold to-transparent mx-auto mb-10" 
                   style={{ boxShadow: '0 0 30px rgba(198,167,94,0.5)' }} />
              <p className="text-2xl md:text-3xl text-q-gold font-heading font-normal leading-relaxed max-w-3xl mx-auto">
                &quot;{t("services.intro")}&quot;
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Service Blocks - Full Width Alternating */}
      {blocks.map((block, idx) => {
        const isEven = idx % 2 !== 0;
        return (
          <section
            key={block.key}
            className={`relative py-0 ${isEven ? "bg-q-teal-dark" : "bg-q-dark"}`}
            data-testid={`service-block-${idx + 1}`}
          >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="relative z-10">
              <div className={`grid lg:grid-cols-2 min-h-[700px] ${isEven ? "" : ""}`}>
                
                {/* Image Side */}
                <FadeIn
                  delay={0.2}
                  direction={isEven ? "right" : "left"}
                  className={`relative h-[400px] lg:h-auto ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={block.image}
                      alt={t(`services.blocks.${block.key}.title`)}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {/* Gradient overlays for blending */}
                    <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'l' : 'r'} from-transparent via-transparent to-${isEven ? 'q-teal-dark' : 'q-dark'}/90 hidden lg:block`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-q-dark/80 via-transparent to-transparent lg:hidden" />
                    {/* Gold accent line */}
                    <div className={`absolute ${isEven ? 'left-0' : 'right-0'} top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-transparent via-q-gold to-transparent hidden lg:block`} />
                  </div>
                </FadeIn>
                
                {/* Content Side */}
                <FadeIn 
                  delay={0.3}
                  className={`relative flex items-center ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className={`w-full px-8 lg:px-16 py-16 lg:py-24 ${isEven ? 'lg:pr-20' : 'lg:pl-20'}`}>
                    {/* Large Service Number */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="mb-6"
                    >
                      <span className="text-[8rem] md:text-[12rem] font-heading font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-q-gold/40 to-q-gold/5">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-5xl font-heading font-medium text-white uppercase tracking-wide mb-8 -mt-16 relative z-10">
                      {t(`services.blocks.${block.key}.title`)}
                    </h2>

                    {/* Gold Divider */}
                    <div className="w-20 h-[2px] bg-q-gold mb-8" style={{ boxShadow: '0 0 15px rgba(198,167,94,0.4)' }} />

                    {/* Main Content */}
                    <p className="text-lg md:text-xl text-white/80 font-body font-light leading-relaxed mb-8 whitespace-pre-line">
                      {t(`services.blocks.${block.key}.content1`)}
                    </p>

                    {/* Bullets */}
                    {t(`services.blocks.${block.key}.bullets`) &&
                      Array.isArray(t(`services.blocks.${block.key}.bullets`)) && (
                        <ul className="space-y-5 mb-8">
                          {t(`services.blocks.${block.key}.bullets`).map(
                            (bullet: string, bIdx: number) => (
                              <motion.li 
                                key={bIdx} 
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: bIdx * 0.1 }}
                              >
                                <CheckCircle2 className="w-6 h-6 text-q-gold flex-shrink-0 mt-1" />
                                <span className="text-lg text-white/90 font-body">
                                  {bullet}
                                </span>
                              </motion.li>
                            ),
                          )}
                        </ul>
                      )}

                    {/* Secondary Content */}
                    {t(`services.blocks.${block.key}.content2`) && (
                      <p className="text-lg md:text-xl text-white/80 font-body font-light leading-relaxed mb-8 whitespace-pre-line">
                        {t(`services.blocks.${block.key}.content2`)}
                      </p>
                    )}

                    {/* Secondary Bullets */}
                    {t(`services.blocks.${block.key}.bullets2`) &&
                      Array.isArray(t(`services.blocks.${block.key}.bullets2`)) && (
                        <ul className="space-y-5">
                          {t(`services.blocks.${block.key}.bullets2`).map(
                            (bullet: string, bIdx: number) => (
                              <motion.li 
                                key={bIdx} 
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: bIdx * 0.1 }}
                              >
                                <CheckCircle2 className="w-6 h-6 text-q-gold flex-shrink-0 mt-1" />
                                <span className="text-lg text-white/90 font-body">
                                  {bullet}
                                </span>
                              </motion.li>
                            ),
                          )}
                        </ul>
                      )}
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Section Divider */}
            <GoldDivider />
          </section>
        );
      })}

      {/* CTA Section - Premium Refined */}
      <section className="relative py-40 bg-gradient-to-b from-q-dark via-q-teal-dark to-black overflow-hidden">
        {/* Seamless Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-q-dark/80 via-q-teal-dark/60 to-black" />
        
        {/* Radial Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,167,94,0.12)_0%,transparent_70%)]" />
        
        {/* Subtle Texture */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Gold Divider Above */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-q-gold to-transparent mb-12"
              style={{ boxShadow: '0 0 20px rgba(198,167,94,0.4)' }}
            />

            {/* Headline with Fade-in */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight tracking-tight uppercase"
            >
              {t("services.cta.title")}
            </motion.h3>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 font-body font-light leading-relaxed mb-14 max-w-2xl"
            >
              {t("services.cta.description")}
            </motion.p>

            {/* Premium CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                href="/contact"
                data-testid="services-cta-contact"
                className="group relative inline-flex items-center justify-center gap-3 px-14 py-7 bg-q-gold text-q-dark font-body font-bold uppercase tracking-[0.25em] text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(198,167,94,0.6)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {t("services.cta.button")}
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`}
                  />
                </span>
                {/* Smooth Sweep Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                
                {/* Subtle Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/10 to-transparent" />
              </Link>
            </motion.div>

            {/* Bottom Decorative Element */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 160, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-q-gold/40 to-transparent mt-14"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
