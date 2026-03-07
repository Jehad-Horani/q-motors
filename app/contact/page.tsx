"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FadeIn, GoldDivider } from "@/components/Shared";
import { Youtube, Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

// X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-q-dark overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-q-dark via-q-teal-dark to-q-dark">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        
        {/* Subtle Automotive Silhouette */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-gradient-to-t from-white/20 to-transparent rounded-t-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            {/* Main Title */}
            <motion.h1 
              className="text-5xl md:text-8xl font-heading font-bold text-white tracking-tight mb-6 uppercase"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              data-testid="contact-page-title"
            >
              {t("contact.title")}
            </motion.h1>

            {/* Gold Divider */}
            <motion.div 
              className="w-32 h-[2px] bg-gradient-to-r from-transparent via-q-gold to-transparent mx-auto mb-8"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 128, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ boxShadow: '0 0 20px rgba(198,167,94,0.4)' }}
            />

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl text-q-gold font-heading font-normal tracking-wide mb-4">
                {t("contact.subtitle")}
              </h2>
              <p className="text-xl text-white/60 font-body font-light">
                {t("contact.location")}
              </p>
            </motion.div>

            {/* Statement */}
            <motion.p
              className="text-lg md:text-xl text-white/70 font-body font-light leading-relaxed max-w-3xl mx-auto mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {t("contact.description")}
            </motion.p>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* MARKET COVERAGE SECTION */}
      <section className="py-32 relative bg-q-dark">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-heading font-medium text-white uppercase tracking-tight mb-6" data-testid="market-coverage-title">
                {t("contact.coverage.title")}
              </h2>
              <div className="w-24 h-[2px] bg-q-gold mx-auto" style={{ boxShadow: '0 0 15px rgba(198,167,94,0.4)' }} />
            </div>
          </FadeIn>

          {/* Regions Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {t("contact.coverage.regions").map((region: any, idx: number) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <motion.div 
                  className="relative bg-q-teal-dark/40 border border-q-gold/20 p-10 text-center group transition-all duration-500 hover:border-q-gold/40 hover:bg-q-teal-dark/60"
                  whileHover={{ y: -5 }}
                  data-testid={`region-${idx + 1}`}
                >
                  {/* Region Number */}
                  <div className="text-7xl md:text-8xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-q-gold/30 to-q-gold/5 mb-6 leading-none">
                    {region.number}
                  </div>
                  
                  {/* Gold Marker Dot */}
                  <div className="w-3 h-3 bg-q-gold rounded-full mx-auto mb-6 shadow-[0_0_15px_rgba(198,167,94,0.6)]" />
                  
                  {/* Region Name */}
                  <h3 className="text-2xl md:text-3xl font-heading font-medium text-white mb-3 tracking-wide">
                    {region.name}
                  </h3>
                  
                  {/* Region Description */}
                  <p className="text-lg text-q-gold/70 font-body font-light">
                    {region.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-q-gold/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* STRATEGIC ENGAGEMENT SECTION */}
      <section className="py-32 relative bg-gradient-to-b from-q-teal-dark via-q-dark to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(198,167,94,0.05)_0%,transparent_50%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-medium text-white uppercase tracking-tight mb-6" data-testid="engagement-title">
                {t("contact.engagement.title")}
              </h2>
              <div className="w-24 h-[2px] bg-q-gold mx-auto mb-12" style={{ boxShadow: '0 0 15px rgba(198,167,94,0.4)' }} />
              
              <p className="text-xl text-white/70 font-body font-light leading-relaxed max-w-3xl mx-auto mb-8">
                {t("contact.engagement.description1")}
              </p>
              
              <p className="text-lg text-white/50 font-body font-light leading-relaxed max-w-3xl mx-auto">
                {t("contact.engagement.description2")}
              </p>
            </div>
          </FadeIn>

          {/* Corporate Contact Block */}
          <FadeIn delay={0.3}>
            <div className="mt-20">
              <div className="bg-q-teal-dark/30 border border-q-gold/20 p-12 md:p-16 text-center backdrop-blur-sm" data-testid="corporate-office">
                <h3 className="text-2xl md:text-3xl text-q-gold font-heading font-normal tracking-wider mb-4">
                  {t("contact.engagement.office.title")}
                </h3>
                <p className="text-xl text-white font-heading font-medium mb-2">
                  {t("contact.engagement.office.company")}
                </p>
                <p className="text-lg text-white/60 font-body font-light">
                  {t("contact.engagement.office.location")}
                </p>

                {/* Icon Row - Social Media */}
                <div className="flex justify-center items-center gap-8 mt-12 pt-8 border-t border-q-gold/10">
                  {[
                    { Icon: Youtube, label: "YouTube", url: "https://www.youtube.com/@QmotorsSaudi" },
                    { Icon: Facebook, label: "Facebook", url: "https://www.facebook.com/QMotorsSaudi" },
                    { Icon: Instagram, label: "Instagram", url: "https://www.instagram.com/qmotorssaudi/" },
                    { Icon: XIcon, label: "X", url: "https://x.com/QmotorsSaudi" },
                  ].map(({ Icon, label, url }, idx) => (
                    <motion.a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3"
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.3 }}
                      aria-label={label}
                    >
                      <Link href={url} target="_blank">
                      <div className="w-14 h-14 border border-q-gold/40 flex items-center justify-center transition-all duration-300 hover:border-q-gold hover:bg-q-gold/10">
                        <Icon className="w-6 h-6 text-q-gold" />
                      </div>
                      <span className="text-xs text-white/40 font-body uppercase tracking-wider">
                        {label}
                      </span>
                      </Link>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
