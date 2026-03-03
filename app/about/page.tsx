"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FadeIn, SectionTitle } from "@/components/Shared";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-q-gradient pt-20 overflow-hidden">
      {/* WHO WE ARE */}
      <section className="py-32 relative bg-q-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t("about.whoWeAre.title")} />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-2xl text-q-gold font-light leading-relaxed mb-8">
                {t("about.whoWeAre.content1")}
              </p>
              <p className="text-xl text-white/90 font-light leading-relaxed">
                {t("about.whoWeAre.content2")}
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-[500px] hidden md:block">
              <div className="absolute inset-0 border-2 border-q-gold/30 translate-x-4 translate-y-4"></div>
              <Image
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop"
                alt="Who We Are"
                fill
                className="object-cover grayscale relative z-10"
                referrerPolicy="no-referrer"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* LEADERSHIP PHILOSOPHY */}
      <section className="py-24 relative bg-q-teal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t("about.leadership.title")} />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn
              delay={0.2}
              className="relative h-[500px] hidden md:block order-2 md:order-1"
            >
              <div className="absolute inset-0 border-2 border-q-gold/30 -translate-x-4 translate-y-4"></div>
              <Image
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=800&auto=format&fit=crop"
                alt="Leadership"
                fill
                className="object-cover grayscale relative z-10"
                referrerPolicy="no-referrer"
              />
            </FadeIn>
            <FadeIn className="order-1 md:order-2">
              <div className="bg-q-teal-dark/50 border border-q-gold/20 p-12 backdrop-blur-sm">
                <p className="text-xl leading-relaxed text-white/90 font-light mb-8">
                  {t("about.leadership.content1")}
                </p>
                <ul className="space-y-6 mb-8">
                  {t("about.leadership.bullets").map(
                    (bullet: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-q-gold flex-shrink-0 mt-1" />
                        <span className="text-lg text-white/80">{bullet}</span>
                      </li>
                    ),
                  )}
                </ul>
                <div className="w-16 h-px bg-q-gold mb-6"></div>
                <p className="text-2xl text-q-gold font-light leading-relaxed">
                  &quot;{t("about.leadership.content2")}&quot;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MARKET EVOLUTION */}
      <section className="py-32 relative bg-q-teal-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionTitle title={t("about.evolution.title")} />
          <FadeIn>
            <p className="text-2xl md:text-4xl text-white/90 font-light leading-relaxed">
              {t("about.evolution.content")}
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
