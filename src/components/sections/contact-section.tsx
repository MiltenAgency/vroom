"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { inquiryOptions } from "@/data/site-data";

export interface ContactSectionProps extends React.HTMLAttributes<HTMLElement> {
  selectedInquiry: string;
  onInquirySelect: (opt: string) => void;
}

export const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
  function ContactSection({ selectedInquiry, onInquirySelect, ...props }, ref) {
    return (
      <section
        id="contact"
        className="relative z-10 w-full bg-white px-4 sm:px-6 py-16 sm:py-24 text-white"
        {...(props as any)}
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#f3440f] via-[#ff5b1a] to-[#ffa024] p-8 sm:p-12 lg:p-16 border border-white/25 shadow-[0_25px_60px_rgba(243,68,15,0.35)]"
          >
            {/* Luminous Warm Ambient Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#ffb03a]/40 blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/95 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>Booking Q2 2026 Sprints · 2 Team Allocations Remaining</span>
              </div>

              <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.038em] leading-[1.02]">
                Ready to claim
                <br />
                <span className="text-white">pole position?</span>
              </h2>

              <p className="text-sm sm:text-base text-white font-medium leading-relaxed mt-5 max-w-xl">
                We collaborate with ambitious founders and category leaders ready to redefine their space with uncompromising craft and speed.
              </p>

              {/* Capability Selector Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-6">
                {inquiryOptions.map((opt) => {
                  const isSelected = selectedInquiry === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => onInquirySelect(opt)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-white text-neutral-950 shadow-md"
                          : "bg-black/15 hover:bg-black/25 text-white border border-white/20"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-8">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:hello@vroom-racing.com"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-sm tracking-tight transition-all duration-200 shadow-xl cursor-pointer group"
                >
                  <span>Start your sprint</span>
                  <span className="w-6 h-6 rounded-full bg-[#f3440f] text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-bold text-xs shadow-sm">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </motion.a>

                <a
                  href="mailto:hello@vroom-racing.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-black/15 hover:bg-black/25 text-white text-xs sm:text-sm font-semibold border border-white/20 backdrop-blur-md transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>hello@vroom-racing.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
);
