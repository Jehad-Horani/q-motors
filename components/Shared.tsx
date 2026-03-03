"use client";

import { motion } from "motion/react";

export const FadeIn = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) => (
  <div className={`mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`text-4xl md:text-6xl font-heading font-medium tracking-tight uppercase ${
        light ? "text-q-dark" : "text-white"
      }`}
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`h-[2px] w-32 bg-gradient-to-r from-q-gold-dark via-q-gold to-q-gold-dark mt-8 ${
        align === "center" ? "mx-auto" : ""
      }`}
      style={{
        boxShadow: "0 0 20px rgba(198,167,94,0.4)",
      }}
    />
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`mt-8 text-xl font-body font-light max-w-3xl leading-relaxed ${
          light ? "text-q-dark/70" : "text-q-gold/90"
        } ${align === "center" ? "mx-auto" : ""}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export const GoldDivider = ({ className = "" }: { className?: string }) => (
  <div 
    className={`h-px w-full bg-gradient-to-r from-transparent via-q-gold/40 to-transparent ${className}`}
  />
);

export const SectionNumber = ({ number }: { number: string | number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    <span className="text-8xl md:text-[10rem] font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-q-gold/30 to-q-gold/5 leading-none">
      {String(number).padStart(2, '0')}
    </span>
  </motion.div>
);
