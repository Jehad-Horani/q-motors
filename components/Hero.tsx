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
    <section 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-q-teal-dark"
    >
      {/* Background Layering */}
      {/* 1. Deep dark teal gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2E34] via-[#0F3F46] to-[#0B2E34]"></div>
      
      {/* 2. Vignette edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-0"></div>

      {/* 3. Subtle moving fog/smoke effect */}
      <motion.div 
        className="absolute inset-0 opacity-20 z-0 mix-blend-screen"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        } as any}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* 4. Gold light arc moving slowly across the top */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[500px] opacity-30 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse at top, rgba(198,167,94,0.4) 0%, transparent 70%)",
        } as any}
        animate={{
          x: ["-20%", "20%", "-20%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* 5. Thin gold motion lines (speed trails) */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-q-gold to-transparent w-1/3"
            style={{ top: `${20 + i * 15}%`, left: "-33%" } as any}
            animate={{
              left: ["-33%", "133%"],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* 6. Background zoom-in effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        {/* Subtle animated car headlight glow flicker */}
        <motion.div 
          className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.3, 0.1, 0.4, 0.1],
            scale: [1, 1.2, 1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1]
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text */}
          <motion.div 
            className="text-left"
          >
            {/* Step 2: Q MOTORS */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="relative inline-block"
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-2 relative overflow-hidden">
                <span className="text-q-cyan">Q</span>{' '}
                <span className="text-gray-950">MOTORS</span>
                {/* Light reflection shimmer passing over the logo */}
                <motion.div 
                  className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
                  animate={{ left: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
                />
              </h1>
            </motion.div>

            {/* Subtitle with Gold glowing underline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="mb-8 relative inline-block"
            >
              <h2 className="text-2xl md:text-3xl text-q-gold font-light tracking-wide">
                {t('home.hero.subtitle')}
              </h2>
              {/* Step 3: Gold line draws itself */}
              <motion.div 
                className="absolute -bottom-2 left-0 h-[2px] bg-q-gold shadow-[0_0_10px_rgba(198,167,94,0.8)]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Step 4: Subheadline slides in */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
              className="mb-8 space-y-2"
            >
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                {t('home.hero.subheadline1')}
              </p>
              <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
                {t('home.hero.subheadline2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.1, ease: "easeOut" }}
            >
              <p className="text-lg text-white/70 font-light max-w-xl leading-relaxed mb-12">
                {t('home.hero.description')}
              </p>
            </motion.div>

            {/* Step 5: CTA buttons fade in with slight scale-up */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              <Link href="/contact" className="relative overflow-hidden px-8 py-4 bg-q-gold text-q-teal-dark font-bold uppercase tracking-widest transition-all hover:bg-white flex items-center justify-center gap-2 group">
                <span className="relative z-10 flex items-center gap-2">
                  {t('home.hero.cta1')}
                  <ChevronRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </span>
                {/* Light sweep animation on button hover */}
                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"></div>
              </Link>
              
              <Link href="/services" className="relative overflow-hidden px-8 py-4 border border-q-gold text-q-gold font-semibold uppercase tracking-widest transition-all hover:bg-q-gold/10 flex items-center justify-center gap-2 group">
                <span className="relative z-10">{t('home.hero.cta2')}</span>
                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-q-gold/20 to-transparent skew-x-[-20deg]"></div>
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Side: Visual */}
          <motion.div 
            className="relative h-[600px] hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          >
            {/* Semi-transparent premium car visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[120%] h-[120%] opacity-80 mix-blend-screen">
                <Image 
                  src="/logo.png" 
                  alt="Premium Vehicle" 
                  fill 
                  className="object-contain drop-shadow-[0_0_30px_rgba(198,167,94,0.2)] rounded-3xl"
                  referrerPolicy="no-referrer"
                  unoptimized={false}
                />
              </div>
            </div>

            {/* Rotating wheel rim animation (very slow, 8-second infinite rotation) */}
            <motion.div 
              className="absolute bottom-20 left-1/4 w-24 h-24 border border-q-gold/20 rounded-full border-dashed opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute bottom-24 right-1/3 w-20 h-20 border border-q-gold/20 rounded-full border-dashed opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Futuristic abstract mobility grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)] pointer-events-none"></div>
          </motion.div>

        </div>
      </div>

      {/* Animated scroll-down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
