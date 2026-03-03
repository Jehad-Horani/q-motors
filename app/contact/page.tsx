"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FadeIn, SectionTitle } from "@/components/Shared";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  return (
    <main className="min-h-screen bg-q-gradient pt-20 overflow-hidden">
      <section className="py-32 relative bg-q-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t("contact.title")} />

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            {/* Contact Info */}
            <FadeIn>
              <div className="bg-q-teal-light p-12 border border-q-gold/20 h-full">
                <h3 className="text-2xl text-q-gold uppercase tracking-wider mb-8">
                  Q Motors
                </h3>
                <p className="text-xl text-white/90 font-light leading-relaxed mb-12">
                  {t("contact.info")}
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-q-gold" />
                    <span className="text-white/80">
                      Riyadh, Kingdom of Saudi Arabia
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-q-gold" />
                    <span className="text-white/80">corporate@qmotors.sa</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-q-gold" />
                    <span className="text-white/80" dir="ltr">
                      +966 11 XXX XXXX
                    </span>
                  </div>
                </div>

                <div className="flex gap-6">
                  {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-10 h-10 rounded-full border border-q-gold/50 flex items-center justify-center text-q-gold hover:bg-q-gold hover:text-q-teal-dark transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2}>
              <form className="bg-q-teal-dark/50 p-12 border border-q-gold/20 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-q-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-q-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">
                    {t("contact.form.company")}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-q-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-q-gold transition-colors"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full py-5 bg-q-gold text-q-teal-dark font-bold uppercase tracking-widest hover:bg-white transition-colors mt-4"
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
