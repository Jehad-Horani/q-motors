'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { motion } from 'motion/react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep Dark Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E24] via-[#0C262E] to-[#0E3A44]" />
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_30%,rgba(10,30,36,0.95)_100%)]" />
      
      {/* Subtle Fog Effect */}
      <motion.div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 60% at 50% 100%, rgba(198,167,94,0.08) 0%, transparent 60%)',
        }}
        animate={{
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Slow Moving Gold Atmosphere */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[600px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 40% at 30% 0%, rgba(198,167,94,0.3) 0%, transparent 70%)',
        }}
        animate={{
          x: ["0%", "20%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Premium Vehicle Image with Slow Zoom */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image 
              src="https://images.unsplash.com/photo-1666542061805-817deaf22f3f?q=80&w=1920&auto=format&fit=crop" 
              alt="Premium Automotive" 
              fill 
              className="object-cover object-center opacity-40"
              priority
              unoptimized
            />
            {/* Overlay to darken and add depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E24] via-transparent to-[#0A1E24]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E24] via-transparent to-[#0A1E24]/60" />
          </div>
        </div>
      </motion.div>

      {/* Subtle Headlight Glow Effect */}
      <motion.div 
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(198,167,94,0.15) 0%, transparent 70%)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Speed Lines - Refined */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-1/4"
            style={{ 
              top: `${35 + i * 12}%`, 
              left: "-25%",
              background: 'linear-gradient(90deg, transparent 0%, rgba(198,167,94,0.8) 50%, transparent 100%)',
            }}
            animate={{ left: ["-25%", "125%"] }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3,
            }}
          />
        ))}
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          
          {/* Main Title - Q MOTORS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mb-6"
          >
            <h1 className="text-7xl md:text-9xl font-heading font-bold text-white tracking-tight relative">
              {t('home.hero.title')}
              {/* Shimmer Effect */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
              />
            </h1>
          </motion.div>

          {/* Subtitle with Animated Gold Underline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-10 relative inline-block"
          >
            <h2 className="text-2xl md:text-4xl text-q-gold font-heading font-normal tracking-wide">
              {t('home.hero.subtitle')}
            </h2>
            {/* Elegant Gold Underline Animation */}
            <motion.div 
              className="absolute -bottom-3 left-0 h-[2px] bg-gradient-to-r from-q-gold via-q-gold-light to-q-gold"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
              style={{
                boxShadow: '0 0 20px rgba(198,167,94,0.6), 0 0 40px rgba(198,167,94,0.3)',
              }}
            />
          </motion.div>

          {/* Sub-headlines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-6 space-y-3"
          >
            <p className="text-xl md:text-2xl text-white/90 font-body font-light leading-relaxed">
              {t('home.hero.subheadline1')}
            </p>
            <p className="text-xl md:text-2xl text-white font-body font-medium leading-relaxed">
              {t('home.hero.subheadline2')}
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-lg text-white/60 font-body font-light max-w-2xl leading-relaxed mb-14">
              {t('home.hero.description')}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row items-start gap-5"
          >
            {/* Primary CTA */}
            <Link 
              href="/contact" 
              className="group relative overflow-hidden px-10 py-5 bg-q-gold text-q-dark font-body font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:shadow-gold-glow"
              data-testid="hero-cta-contact"
            >
              <span className="relative z-10 flex items-center gap-3">
                {t('home.hero.cta1')}
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </span>
              <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
            </Link>
            
            {/* Secondary CTA */}
            <Link 
              href="/services" 
              className="group relative overflow-hidden px-10 py-5 border-2 border-q-gold/60 text-q-gold font-body font-semibold uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:border-q-gold hover:bg-q-gold/10"
              data-testid="hero-cta-services"
            >
              <span className="relative z-10">{t('home.hero.cta2')}</span>
              <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-q-gold/20 to-transparent skew-x-[-20deg]" />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-q-gold/60" />
        </motion.div>
      </motion.div>

      {/* Bottom Gold Line Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-q-gold/40 to-transparent" />
    </section>
  );
}
