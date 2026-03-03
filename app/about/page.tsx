"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FadeIn, SectionTitle, GoldDivider } from "@/components/Shared";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

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

      {/* LEADERSHIP PHILOSOPHY */}
      <section className="py-32 relative bg-q-dark">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(198,167,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(198,167,94,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title={t("about.leadership.title")} />
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
                  {t("about.leadership.content1")}
                </p>
                <ul className="space-y-6 mb-8">
                  {t("about.leadership.bullets").map((bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-q-gold flex-shrink-0 mt-1" />
                      <span className="text-lg text-white/80 font-body">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-20 h-[2px] bg-q-gold mb-6" style={{ boxShadow: '0 0 15px rgba(198,167,94,0.4)' }} />
                <p className="text-2xl text-q-gold font-heading font-normal leading-relaxed">
                  &quot;{t("about.leadership.content2")}&quot;
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
