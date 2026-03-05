"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-b from-q-dark via-q-teal-dark to-black border-t border-q-gold/20">
      {/* Top Gold Divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-q-gold to-transparent" style={{ boxShadow: '0 0 15px rgba(198,167,94,0.3)' }} />
      
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - 4 Columns */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* COLUMN 1 - Brand Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block group mb-6">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-heading font-bold text-white tracking-wider transition-all duration-300 group-hover:text-white/90">
                  Q
                </span>
                <span className="text-3xl font-heading font-bold text-q-gold tracking-wider transition-all duration-300 group-hover:text-q-gold-light">
                  MOTORS
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-q-gold/80 font-body font-light mb-2 tracking-wide">
              {t("footer.brand.tagline")}
            </p>
            
            <p className="text-xs text-white/50 font-body font-light mb-6">
              {t("footer.brand.location")}
            </p>

            <div className="w-16 h-[1px] bg-q-gold/40 mb-6" />

            <p className="text-sm text-white/60 font-body font-light leading-relaxed">
              {t("footer.brand.description")}
            </p>
          </motion.div>

          {/* COLUMN 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-6">
              {t("footer.quickLinks.title")}
            </h3>
            
            <nav className="space-y-3">
              {t("footer.quickLinks.links").map((link: any, idx: number) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group flex items-start"
                >
                  <span className="text-sm text-white/70 font-body font-light hover:text-q-gold transition-colors duration-300 relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-q-gold transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* COLUMN 3 - Market Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-6">
              {t("footer.marketCoverage.title")}
            </h3>
            
            <div className="space-y-4">
              {t("footer.marketCoverage.regions").map((region: any, idx: number) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-q-gold rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white/80 font-body font-medium leading-tight">
                      {region.name}
                    </p>
                    <p className="text-xs text-white/50 font-body font-light mt-0.5">
                      {region.region}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 4 - Corporate Presence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-6">
              {t("footer.corporate.title")}
            </h3>
            
            <div className="space-y-3 mb-8">
              <p className="text-sm text-white/80 font-body font-medium">
                {t("footer.corporate.location")}
              </p>
              <p className="text-xs text-white/60 font-body font-light">
                {t("footer.corporate.coverage")}
              </p>
            </div>

            {/* Institutional Icon Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="group cursor-pointer">
                <Link href="https://www.google.com/maps">
                  <div className="w-10 h-10 border border-q-gold/40 flex items-center justify-center transition-all duration-300 group-hover:border-q-gold group-hover:bg-q-gold/10">
                    <MapPin className="w-4 h-4 text-q-gold/70 group-hover:text-q-gold transition-colors duration-300" />
                  </div>
                </Link>
              </div>
              <div className="group cursor-pointer">
                <Link href="mailto:info@qmotorssaudi.com">
                  <div className="w-10 h-10 border border-q-gold/40 flex items-center justify-center transition-all duration-300 group-hover:border-q-gold group-hover:bg-q-gold/10">
                    <Mail className="w-4 h-4 text-q-gold/70 group-hover:text-q-gold transition-colors duration-300" />
                  </div>
                </Link>
              </div>
              <div className="group cursor-pointer">
                <Link href="tel:+1234567890">
                  <div className="w-10 h-10 border border-q-gold/40 flex items-center justify-center transition-all duration-300 group-hover:border-q-gold group-hover:bg-q-gold/10">
                    <Phone className="w-4 h-4 text-q-gold/70 group-hover:text-q-gold transition-colors duration-300" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-q-gold/10">
          <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-xs text-white/40 font-body font-light">
                {t("footer.bottom.copyright")}
              </p>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <Link
                href="/privacy"
                className="text-xs text-white/40 font-body font-light hover:text-q-gold transition-colors duration-300"
              >
                {t("footer.bottom.privacy")}
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="/terms"
                className="text-xs text-white/40 font-body font-light hover:text-q-gold transition-colors duration-300"
              >
                {t("footer.bottom.terms")}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
