"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "nav.home" },
    { href: "/about", label: "nav.about" },
    { href: "/services", label: "nav.services" },
    { href: "/strategy", label: "nav.strategy" },
    { href: "/contact", label: "nav.contact" },
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-q-dark/95 backdrop-blur-xl border-b border-q-gold/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
          : "bg-transparent border-b border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="group flex items-center gap-2"
              data-testid="navbar-logo"
            >
              <span className="text-3xl font-heading font-bold text-white tracking-wider transition-all duration-300 group-hover:text-white/90">
                Q
              </span>
              <span className="text-3xl font-heading font-bold text-q-gold tracking-wider transition-all duration-300 group-hover:text-q-gold-light">
                MOTORS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12 rtl:gap-reverse">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`nav-link-${link.href.replace('/', '') || 'home'}`}
                className="relative group py-2"
              >
                <span className={`text-sm font-body font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                  pathname === link.href 
                    ? "text-q-gold" 
                    : "text-white/80 group-hover:text-q-gold"
                }`}>
                  {t(link.label)}
                </span>
                {/* Active/Hover Underline */}
                <motion.span 
                  className={`absolute -bottom-1 left-0 h-[2px] bg-q-gold transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{
                    boxShadow: pathname === link.href ? '0 0 10px rgba(198,167,94,0.5)' : 'none',
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-q-gold transition-colors duration-300"
              data-testid="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-q-dark/98 backdrop-blur-xl border-b border-q-gold/20"
          >
            <div className="px-6 pt-4 pb-8 space-y-1 flex flex-col">
              {links.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-4 text-lg font-body font-medium uppercase tracking-wider transition-colors border-b border-white/5 ${
                      pathname === link.href 
                        ? "text-q-gold" 
                        : "text-white/80 hover:text-q-gold"
                    }`}
                  >
                    {t(link.label)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
