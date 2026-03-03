"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FadeIn, SectionTitle } from "@/components/Shared";
import { MapPin, Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-q-dark pt-24 overflow-hidden">
      <section className="py-32 relative bg-q-teal-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,167,94,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title={t("contact.title")} />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Contact Info */}
            <FadeIn>
              <div className="bg-q-dark/50 p-12 border border-q-gold/20 h-full backdrop-blur-sm">
                <h3 className="text-3xl text-q-gold font-heading uppercase tracking-wider mb-8">
                  Q Motors
                </h3>
                <p className="text-xl text-white/80 font-body font-light leading-relaxed mb-12">
                  {t("contact.info")}
                </p>

                <div className="space-y-6 mb-12">
                  <motion.div 
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-q-gold/10 border border-q-gold/30 flex items-center justify-center transition-all duration-300 group-hover:bg-q-gold/20">
                      <MapPin className="w-5 h-5 text-q-gold" />
                    </div>
                    <span className="text-white/70 font-body">Riyadh, Kingdom of Saudi Arabia</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-q-gold/10 border border-q-gold/30 flex items-center justify-center transition-all duration-300 group-hover:bg-q-gold/20">
                      <Mail className="w-5 h-5 text-q-gold" />
                    </div>
                    <span className="text-white/70 font-body">corporate@qmotors.sa</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-q-gold/10 border border-q-gold/30 flex items-center justify-center transition-all duration-300 group-hover:bg-q-gold/20">
                      <Phone className="w-5 h-5 text-q-gold" />
                    </div>
                    <span className="text-white/70 font-body" dir="ltr">+966 11 XXX XXXX</span>
                  </motion.div>
                </div>

                <div className="pt-8 border-t border-q-gold/20">
                  <p className="text-sm text-white/40 font-body uppercase tracking-wider mb-4">Connect With Us</p>
                  <div className="flex gap-4">
                    {[Linkedin, Twitter].map((Icon, idx) => (
                      <motion.a
                        key={idx}
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-12 h-12 border border-q-gold/40 flex items-center justify-center text-q-gold hover:bg-q-gold hover:text-q-dark transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2}>
              <form className="bg-q-dark/30 p-12 border border-q-gold/20 space-y-6 backdrop-blur-sm" data-testid="contact-form">
                <div>
                  <label className="block text-sm font-body font-medium text-white/60 mb-3 uppercase tracking-wider">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    data-testid="contact-name-input"
                    className="w-full bg-white/5 border border-white/10 p-4 text-white font-body focus:outline-none focus:border-q-gold transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-white/60 mb-3 uppercase tracking-wider">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    data-testid="contact-email-input"
                    className="w-full bg-white/5 border border-white/10 p-4 text-white font-body focus:outline-none focus:border-q-gold transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-white/60 mb-3 uppercase tracking-wider">
                    {t("contact.form.company")}
                  </label>
                  <input
                    type="text"
                    data-testid="contact-company-input"
                    className="w-full bg-white/5 border border-white/10 p-4 text-white font-body focus:outline-none focus:border-q-gold transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-white/60 mb-3 uppercase tracking-wider">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    rows={4}
                    data-testid="contact-message-input"
                    className="w-full bg-white/5 border border-white/10 p-4 text-white font-body focus:outline-none focus:border-q-gold transition-all duration-300 resize-none"
                  />
                </div>
                <motion.button
                  type="button"
                  data-testid="contact-submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-q-gold text-q-dark font-body font-bold uppercase tracking-[0.2em] text-sm hover:shadow-gold-glow transition-all duration-300 mt-4"
                >
                  {t("contact.form.submit")}
                </motion.button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
