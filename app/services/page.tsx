"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FadeIn, SectionTitle } from "@/components/Shared";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  const blocks = [
    { key: "0", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop" }, // Logistics/Port
    { key: "1", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1920&auto=format&fit=crop" }, // Warehouse/Parts
    { key: "2", image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=1920&auto=format&fit=crop" }, // Inspection/Trade-in
    { key: "3", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1920&auto=format&fit=crop" }, // Showroom/CPO
    { key: "4", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1920&auto=format&fit=crop" }, // Handshake/Retention
  ];

  return (
    <main className="min-h-screen bg-q-gradient pt-20 overflow-hidden">
      {/* HERO */}
      <section className="py-32 relative bg-q-teal-dark text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 uppercase">
              {t("services.title")}
            </h1>
            <div className="w-24 h-px bg-q-gold mx-auto mb-8"></div>
            <p className="text-2xl text-q-gold font-light leading-relaxed">
              &quot;{t("services.intro")}&quot;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      {blocks.map((block, idx) => {
        const isEven = idx % 2 !== 0;
        return (
          <section
            key={block.key}
            className={`py-24 relative ${isEven ? "bg-q-teal-light" : "bg-q-teal-dark"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <FadeIn
                  delay={0.2}
                  className={`relative h-[500px] hidden md:block ${isEven ? "order-2 md:order-1" : ""}`}
                >
                  <div className="absolute inset-0 border-2 border-q-gold/30 translate-x-4 translate-y-4"></div>
                  <Image
                    src={block.image}
                    alt={t(`services.blocks.${block.key}.title`)}
                    fill
                    className="object-cover grayscale relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </FadeIn>
                <FadeIn className={`${isEven ? "order-1 md:order-2" : ""}`}>
                  <div className="text-q-gold text-6xl md:text-8xl font-bold opacity-20 mb-4">
                    0{idx + 1}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-wider mb-8">
                    {t(`services.blocks.${block.key}.title`)}
                  </h2>
                  <p className="text-xl text-white/80 font-light leading-relaxed mb-8 whitespace-pre-line">
                    {t(`services.blocks.${block.key}.content1`)}
                  </p>

                  {t(`services.blocks.${block.key}.bullets`) &&
                    Array.isArray(
                      t(`services.blocks.${block.key}.bullets`),
                    ) && (
                      <ul className="space-y-4 mb-8">
                        {t(`services.blocks.${block.key}.bullets`).map(
                          (bullet: string, bIdx: number) => (
                            <li key={bIdx} className="flex items-start gap-4">
                              <CheckCircle2 className="w-6 h-6 text-q-gold flex-shrink-0 mt-1" />
                              <span className="text-lg text-white/90">
                                {bullet}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    )}

                  {t(`services.blocks.${block.key}.content2`) && (
                    <p className="text-xl text-white/80 font-light leading-relaxed mb-8 whitespace-pre-line">
                      {t(`services.blocks.${block.key}.content2`)}
                    </p>
                  )}

                  {t(`services.blocks.${block.key}.bullets2`) &&
                    Array.isArray(
                      t(`services.blocks.${block.key}.bullets2`),
                    ) && (
                      <ul className="space-y-4">
                        {t(`services.blocks.${block.key}.bullets2`).map(
                          (bullet: string, bIdx: number) => (
                            <li key={bIdx} className="flex items-start gap-4">
                              <CheckCircle2 className="w-6 h-6 text-q-gold flex-shrink-0 mt-1" />
                              <span className="text-lg text-white/90">
                                {bullet}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA SECTION */}
      <section className="py-32 relative bg-gradient-to-t from-black/50 to-transparent text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="px-10 py-5 bg-q-gold text-q-teal-dark font-bold uppercase tracking-widest hover:bg-white transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group"
              >
                {t("contact.form.submit")}
                <ChevronRight
                  className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`}
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
