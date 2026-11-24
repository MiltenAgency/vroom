"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedCounter } from "../common/animated-counter";

export function HeroSection() {
  return (
    <section id="home" className="hero-section relative w-full min-h-screen lg:h-screen lg:max-h-[960px] overflow-hidden bg-white">
      {/* Hero background: racing driver in motion, warm studio tones */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src="/hero-f1-sharp.png"
          alt="Vroom racing driver in motion, helmet catching the light"
          fill
          preload
          quality={90}
          sizes="100vw"
          className="object-cover object-[78%_center] lg:object-[82%_center] xl:object-[84%_center]"
        />
        <div className="hero-section__blend" aria-hidden="true" />
      </div>

      {/* Inner Content Constrained to Max Width */}
      <div className="hero-section__content relative z-10 flex h-full w-full max-w-[1450px] mx-auto flex-col px-2 sm:px-3 lg:px-4 pt-14 sm:pt-16 lg:pt-18 justify-between">
        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-end flex-1 pb-1 sm:pb-2 pt-1">
          {/* Left Column: Headlines, CTA, and Real Stats Cards */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-end gap-4 sm:gap-6 lg:gap-6"
          >
            <div>
              {/* Kicker badge */}
              <div className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-white/80 mb-2 sm:mb-2.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>FIA Formula 1 World Championship</span>
              </div>

              {/* Main Headline / Slogan */}
              <h1 className="font-sans text-5xl sm:text-6xl md:text-[62px] lg:text-[70px] xl:text-[76px] font-normal tracking-[-0.038em] leading-[1.0] text-white">
                Feel the rush
                <br />
                Follow the formula
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-[15px] lg:text-base text-white/90 font-normal leading-relaxed max-w-lg mt-2.5 sm:mt-3">
                The drivers, rivalries, and split-second telemetry decisions behind every Grand Prix weekend.
              </p>

              {/* Explore the grid CTA */}
              <div className="mt-3.5 sm:mt-4">
                <button className="group inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/80 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 cursor-pointer shadow-sm">
                  <span>Explore the 2025 grid</span>
                  <span className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white text-[#f3440f] flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-bold text-xs shadow-xs">
                    <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  </span>
                </button>
              </div>
            </div>

            {/* Season snapshot cards (Ivory solid + Frosted glass, directly below CTA) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md">
              {/* Card 1: Ivory Solid (No borderline, animated number) */}
              <div className="bg-[#fdfbf7] text-neutral-900 rounded-2xl p-3.5 sm:p-4 shadow-lg flex flex-col justify-between min-h-[120px] sm:min-h-[126px] transition-transform duration-200 hover:-translate-y-0.5 cursor-default">
                <div>
                  <div className="font-sans text-3xl sm:text-4xl font-normal tracking-tight leading-none text-neutral-950 tabular-nums">
                    <AnimatedCounter value={24} suffix="" />
                  </div>
                  <div className="text-xs sm:text-[13px] font-semibold text-neutral-900 mt-1.5">
                    Grand Prix weekends
                  </div>
                </div>
                <p className="text-[10px] sm:text-[10.5px] text-neutral-500 leading-snug font-normal mt-2.5">
                  5 continents · 9 months of velocity
                </p>
              </div>

              {/* Card 2: Frosted Glass (No borderline, animated number) */}
              <div className="bg-white/[0.15] backdrop-blur-md text-white rounded-2xl p-3.5 sm:p-4 shadow-sm flex flex-col justify-between min-h-[120px] sm:min-h-[126px] transition-transform duration-200 hover:-translate-y-0.5 cursor-default">
                <div>
                  <div className="font-sans text-3xl sm:text-4xl font-normal tracking-tight leading-none text-white tabular-nums">
                    <AnimatedCounter value={20} suffix="" />
                  </div>
                  <div className="text-xs sm:text-[13px] font-semibold text-white mt-1.5">
                    Elite racing drivers
                  </div>
                </div>
                <p className="text-[10px] sm:text-[10.5px] text-white/80 leading-snug font-normal mt-2.5">
                  10 constructor teams · 1 world title
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Profile Card (Aligned to bottom baseline) */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-end z-10"
          >
            {/* Floating Profile Card */}
            <div className="w-full max-w-[225px] sm:max-w-[245px] bg-[#fdfbf7] text-neutral-900 rounded-2xl p-3.5 shadow-2xl flex flex-col gap-2.5 transition-transform duration-200 hover:-translate-y-1">
              {/* Card header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 40 40" className="w-4 h-4 select-none shrink-0" fill="none">
                    <defs>
                      <linearGradient id="vr-card-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff5a22" />
                        <stop offset="50%" stopColor="#f3440f" />
                        <stop offset="100%" stopColor="#c52800" />
                      </linearGradient>
                      <path
                        id="vr-card-blade"
                        d="M 10.50 -233.50 L 48.50 -231.50 L 51.50 -224.50 L -40.50 -86.50 L -48.50 -81.50 L -102.50 -71.50 L -107.50 -74.50 L -118.50 -100.50 L -147.50 -164.50 L -147.50 -170.50 L -122.50 -190.50 L -99.50 -203.50 L -94.50 -199.50 L -75.50 -156.50 L -70.50 -154.50 L -18.50 -230.50 Z"
                      />
                    </defs>
                    <g
                      transform="translate(20, 20) scale(0.068)"
                      fill="url(#vr-card-grad)"
                      stroke="url(#vr-card-grad)"
                      strokeWidth="8"
                      strokeLinejoin="round"
                    >
                      <use href="#vr-card-blade" />
                      <use href="#vr-card-blade" transform="rotate(60)" />
                      <use href="#vr-card-blade" transform="rotate(120)" />
                      <use href="#vr-card-blade" transform="rotate(180)" />
                      <use href="#vr-card-blade" transform="rotate(240)" />
                      <use href="#vr-card-blade" transform="rotate(300)" />
                    </g>
                  </svg>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f3440f] animate-pulse" />
                </div>
                <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">
                  Telemetry Spec
                </span>
              </div>

              {/* Portrait Media */}
              <div className="relative w-full aspect-[4/3] rounded-[9px] overflow-hidden bg-neutral-100">
                <Image
                  src="/driver-81-back.jpg"
                  alt="Race Engineer & Strategy"
                  fill
                  sizes="260px"
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Text details */}
              <div className="flex flex-col text-center px-1">
                <span className="text-xs font-semibold text-neutral-950 tracking-tight">
                  telemetry@vroom.racing
                </span>
                <span className="text-[11px] font-medium text-neutral-600 mt-0.5">
                  Race Engineer &amp; Strategy
                </span>
                <p className="text-[10px] text-neutral-500 leading-snug mt-1 font-normal">
                  Engineering pole-position brands through speed &amp; craft
                </p>
              </div>

              {/* CTA button */}
              <button className="w-full bg-[#f3440f] hover:bg-[#ff551f] text-white text-xs font-semibold px-4 py-2.5 rounded-full flex items-center justify-between shadow-xs transition-colors cursor-pointer group">
                <span>Get Started</span>
                <span className="w-5 h-5 rounded-full bg-white text-[#f3440f] flex items-center justify-center font-bold text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shadow-xs">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
