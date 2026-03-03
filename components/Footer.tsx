"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-black py-16 border-t border-q-gold/20">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-q-dark/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <Link href="/" className="inline-block group">
              <span className="text-3xl font-heading font-bold text-white tracking-wider">
                Q <span className="text-q-gold">MOTORS</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm font-body mt-2">
              Automotive Distribution & Mobility Platform
            </p>
          </motion.div>
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm font-body text-center md:text-right"
          >
            <p>&copy; {new Date().getFullYear()} Q Motors. All rights reserved.</p>
            <p className="mt-1">Kingdom of Saudi Arabia</p>
          </motion.div>
        </div>
        
        {/* Bottom Gold Line */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-q-gold/30 to-transparent" />
      </div>
    </footer>
  );
}
