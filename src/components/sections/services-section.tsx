"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatedCounter } from "../common/animated-counter";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import { serviceSystems } from "@/data/site-data";
import { FadeIn, HoverLift } from "@/motions";

export function ServicesSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);

  return (
    <section
      id="services"
      className="relative z-10 w-full bg-[#0a0a0c] px-4 sm:px-6 py-20 sm:py-28 text-white border-t border-neutral-900 overflow-hidden"
    >
      {/* Subtle warm orange telemetry ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#f3440f]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-[#ff551f]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#f3440f] mb-3">
              Clear Systems
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.038em] leading-[1.04] text-white">
              Clear systems for
              <br />
              <span className="text-[#f3440f]">high-velocity growth.</span>
            </h2>
          </div>

          <div className="md:max-w-md w-full">
            <p className="text-xs sm:text-sm md:text-base text-neutral-400 font-normal leading-relaxed">
              Strategy, identity, digital platforms, and motion engineered into one unified, high-performance ecosystem.
            </p>
          </div>
        </FadeIn>

        {/* Interactive Service Accordion Rows (Kontour Studios style) */}
        <div className="divide-y divide-white/10 pt-2">
          {serviceSystems.map((srv, idx) => {
            const isOpen = activeAccordion === idx;
            return (
              <div
                key={srv.id}
                className={`transition-colors duration-200 ${
                  isOpen ? "bg-white/[0.02]" : "hover:bg-white/[0.015]"
                }`}
              >
                <button
                  onClick={() => setActiveAccordion(isOpen ? null : idx)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className="font-mono text-xs sm:text-sm text-neutral-500">
                      [{srv.id}]
                    </span>
                    <h3 className="font-sans text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-[#f3440f] transition-colors">
                      {srv.title.toUpperCase()}
                    </h3>
                  </div>
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#f3440f] text-white rotate-45"
                        : "bg-white/10 text-white/80 group-hover:bg-white/20 group-hover:text-white"
                    }`}
                  >
                    <Plus className="w-4 h-4 transition-transform" />
                  </div>
                </button>

                {/* Expandable Content Drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-1 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 border-t border-white/5">
                        <div className="lg:col-span-4 space-y-3 pt-3">
                          <div className="text-[11px] font-semibold tracking-wider uppercase text-[#f3440f]">
                            {srv.tagline}
                          </div>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {srv.deliverables.map((del) => (
                              <span
                                key={del}
                                className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-neutral-300"
                              >
                                {del}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="lg:col-span-5 pt-3">
                          <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                            {srv.description}
                          </p>
                        </div>
                        <div className="lg:col-span-3 flex lg:justify-end items-start pt-3">
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white text-neutral-950 hover:bg-[#f3440f] hover:text-white text-xs font-semibold transition-colors group/btn shadow-md"
                          >
                            <span>Start a Project</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Kontour 3 Metric Cards Section */}
        <div className="pt-16 sm:pt-24 mt-12 border-t border-white/10">
          <FadeIn className="max-w-2xl mb-10">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#f3440f] mb-2.5">
              Recognition &amp; Impact
            </div>
            <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-normal tracking-[-0.035em] text-white leading-snug">
              We shape brands with clarity and structure into recognition that lasts.
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: 100% Glowing Warm Aura */}
            <HoverLift>
              <div className="relative rounded-[26px] p-7 overflow-hidden bg-gradient-to-br from-[#f3440f]/25 via-[#1c0802] to-black border border-[#f3440f]/40 flex flex-col justify-between min-h-[270px] shadow-lg">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#f3440f]/30 rounded-full blur-3xl pointer-events-none" />
                <div>
                  <div className="font-sans text-5xl sm:text-6xl font-normal tracking-tight text-white tabular-nums">
                    <AnimatedCounter value={100} suffix="%" />
                  </div>
                  <div className="text-sm font-semibold text-white/95 mt-3">
                    Tailored Direction
                  </div>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-normal mt-6 relative z-10">
                  Every solution is shaped around the brand, its market telemetry and the audience it needs to reach.
                </p>
              </div>
            </HoverLift>

            {/* Card 2: 50+ Crisp High-Contrast Light Card */}
            <HoverLift>
              <div className="relative rounded-[26px] p-7 bg-white text-neutral-950 border border-white flex flex-col justify-between min-h-[270px] shadow-xl">
                <div>
                  <div className="font-sans text-5xl sm:text-6xl font-normal tracking-tight text-neutral-950 tabular-nums">
                    <AnimatedCounter value={50} suffix="+" />
                  </div>
                  <div className="text-sm font-semibold text-neutral-950 mt-3">
                    Projects Delivered
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal mt-6">
                  Brand systems, visual identities and digital platforms crafted for founders who demand clear, compounding growth.
                </p>
              </div>
            </HoverLift>

            {/* Card 3: 97% Photo Card with F1 Driver photo */}
            <HoverLift>
              <div className="relative rounded-[26px] p-7 overflow-hidden border border-white/20 flex flex-col justify-between min-h-[270px] shadow-lg group">
                <Image
                  src="/driver-papaya-blur.jpg"
                  alt="Client Satisfaction"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35 pointer-events-none" />
                <div className="relative z-10">
                  <div className="font-sans text-5xl sm:text-6xl font-normal tracking-tight text-white tabular-nums">
                    <AnimatedCounter value={97} suffix="%" />
                  </div>
                  <div className="text-sm font-semibold text-white/95 mt-3">
                    Client Satisfaction
                  </div>
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed font-normal mt-6 relative z-10">
                  Strong telemetry results, decisive communication and consistent delivery keep leaders confident in the work.
                </p>
              </div>
            </HoverLift>
          </div>
        </div>
      </div>
    </section>
  );
}
