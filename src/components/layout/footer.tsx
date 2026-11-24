"use client";

import React, { useState } from "react";
import { FaXTwitter, FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa6";
import { VroomLogo } from "../common/vroom-logo";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative z-10 w-full bg-[#0a0a0c] pt-20 pb-0 text-white border-t border-white/10 overflow-hidden">
      {/* Intense Radiant Warm Orange Horizon Glow (ScaleX inspired) */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-gradient-to-t from-[#f3440f] via-[#f3440f]/60 to-transparent blur-[120px] opacity-55 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#f3440f]/40 via-[#f3440f]/15 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top row: Brand & Clean Direct Newsletter (ScaleX & Flexfolio style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-white/10">
          {/* Left Column: Brand + Mission + Socials */}
          <div className="md:col-span-5 space-y-4">
            <VroomLogo className="text-white" variant="white" />
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm pt-1">
              The design and strategy engine behind category-defining brands. Engineered with Formula precision, split-second speed, and obsessive craft.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#f3440f] text-neutral-400 hover:text-white flex items-center justify-center border border-white/10 shadow-sm transition-colors"
                aria-label="X / Twitter"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#f3440f] text-neutral-400 hover:text-white flex items-center justify-center border border-white/10 shadow-sm transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#f3440f] text-neutral-400 hover:text-white flex items-center justify-center border border-white/10 shadow-sm transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#f3440f] text-neutral-400 hover:text-white flex items-center justify-center border border-white/10 shadow-sm transition-colors"
                aria-label="Dribbble"
              >
                <FaDribbble className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Middle Column: Streamlined Navigation Links */}
          <div className="md:col-span-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><a href="#services" className="hover:text-white transition-colors">Clear Systems</a></li>
              <li><a href="#works" className="hover:text-white transition-colors">Selected Works</a></li>
              <li><a href="#formula" className="hover:text-white transition-colors">The Formula</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Insights &amp; Dispatches</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Paddock Inquiries</a></li>
            </ul>
          </div>

          {/* Right Column: Clean Inline Newsletter Form */}
          <div className="md:col-span-4">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-2">
              The Paddock Dispatch
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              Monthly insights on high-velocity brand building, telemetry strategy, and race culture.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                required
                placeholder="sample@vroom.racing"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#f3440f]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-[#f3440f] hover:bg-[#ff551f] text-white text-xs font-semibold transition-colors cursor-pointer shrink-0 shadow-md"
              >
                {subscribed ? "Joined!" : "Submit"}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright & Moto Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-neutral-400">
          <div>
            © 2025 Vroom Creative Engine Inc. All rights reserved.
          </div>
          <div className="font-sans font-medium tracking-widest uppercase text-neutral-400">
            FEEL THE RUSH · FOLLOW THE FORMULA
          </div>
        </div>
      </div>

      {/* Giant Ghosted Wordmark Stuck Directly to Bottom Edge (ScaleX inspired) */}
      <div className="relative z-10 w-full flex justify-center items-end mt-6 sm:mt-10 mb-0 pb-0 pointer-events-none select-none overflow-hidden leading-none">
        <span className="font-sans text-[22vw] sm:text-[23vw] md:text-[24vw] font-black tracking-[-0.04em] text-white/[0.12] leading-[0.76] uppercase text-center block translate-y-[2%]">
          VROOM
        </span>
      </div>
    </footer>
  );
}
