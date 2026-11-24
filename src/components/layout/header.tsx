"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaDribbble, FaTelegram } from "react-icons/fa6";
import { VroomLogo } from "../common/vroom-logo";

export interface HeaderProps {
  scrolled: boolean;
  logoColor: "white" | "orange";
  activeNav: string;
  onNavClick: (item: string) => void;
  navItems: string[];
  navLinks: Record<string, string>;
}

export function Header({
  scrolled,
  logoColor,
  activeNav,
  onNavClick,
  navItems,
  navLinks,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 py-3 sm:pt-4 sm:pb-3">
      <div className="w-full max-w-[1450px] mx-auto px-2 sm:px-3 lg:px-4 flex items-start justify-between gap-4">
        
        {/* Logo (Exact placement on left; no padding shift; snappy color adaptation) */}
        <div className="pointer-events-auto pt-0.5">
          <VroomLogo
            variant={logoColor === "white" ? "white" : "default"}
            className={`transition-colors duration-75 ${
              logoColor === "white" ? "text-white" : "text-[#f3440f]"
            }`}
          />
        </div>

        {/* Floating Glass Navigation Pill (Exact placement in center) */}
        <nav
          className="pointer-events-auto hidden md:flex items-center gap-1 bg-black/35 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-1.5 shadow-sm mt-0.5"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const isActive = activeNav === item;
            const href = navLinks[item] || "#";
            return (
              <a
                key={item}
                href={href}
                onClick={() => onNavClick(item)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  isActive
                    ? "text-neutral-950 font-semibold"
                    : "text-white/80 hover:text-white font-medium"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="hero-nav-pill"
                    className="absolute inset-0 rounded-full bg-[#fdfbf7] shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </a>
            );
          })}
        </nav>

        {/* Social Icons (Smoothly hides upon scroll so only navbar and logo remain fixed) */}
        <div
          className={`pointer-events-auto flex items-center gap-2 pt-0.5 transition-all duration-300 ${
            scrolled
              ? "opacity-0 pointer-events-none -translate-y-2"
              : "opacity-100"
          }`}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-[#fdfbf7] hover:bg-white text-neutral-900 border border-white/40 flex items-center justify-center shadow-sm cursor-pointer transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-3.5 h-3.5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://dribbble.com"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-[#fdfbf7] hover:bg-white text-neutral-900 border border-white/40 flex items-center justify-center shadow-sm cursor-pointer transition-colors"
            aria-label="Dribbble"
          >
            <FaDribbble className="w-3.5 h-3.5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://telegram.org"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-[#fdfbf7] hover:bg-white text-neutral-900 border border-white/40 flex items-center justify-center shadow-sm cursor-pointer transition-colors"
            aria-label="Telegram"
          >
            <FaTelegram className="w-3.5 h-3.5" />
          </motion.a>
        </div>

      </div>
    </header>
  );
}
