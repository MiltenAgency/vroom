"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/site-data";
import { FadeIn, HoverLift } from "@/motions";

export function VoicesSection() {
  return (
    <section
      id="voices"
      className="relative z-10 w-full bg-white px-4 sm:px-6 py-16 sm:py-24 text-neutral-950 border-t border-neutral-200/60"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#f3440f] mb-3">
              Paddock Voices
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-[-0.038em] leading-[1.05] text-neutral-950">
              Trusted by founders.
              <br />
              <span className="text-[#f3440f]">Backed by results.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
            Direct dispatches from chief executives and brand leaders who partnered with Vroom to claim category leadership.
          </p>
        </FadeIn>

        {/* Testimonials Grid: 3 Distinct Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((t, idx) => {
            const isIvory = idx === 0;
            return (
              <HoverLift
                key={t.author}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all ${
                  isIvory
                    ? "bg-[#fff8e8] text-neutral-950 border border-amber-200/50"
                    : "bg-[#faf8f5] text-neutral-950 border border-neutral-200/60"
                }`}
              >
                <div>
                  {/* Rating & Highlight Metric (No chip, pure text) */}
                  <div className="flex items-center justify-between pb-6">
                    <div className="flex items-center gap-1 text-[#f3440f]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#f3440f] tracking-tight">
                      {t.metric}
                    </span>
                  </div>

                  {/* Pull Quote */}
                  <p className="font-sans text-base sm:text-lg font-normal leading-relaxed text-neutral-900 tracking-[-0.015em]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info with Authentic Profile Photo */}
                <div className="pt-8 mt-8 border-t border-neutral-200/60 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-neutral-950">
                      {t.author}
                    </div>
                    <div className="text-xs text-neutral-500">
                      {t.role} · <span className="font-semibold">{t.company}</span>
                    </div>
                  </div>
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-neutral-200 shadow-sm shrink-0">
                    <Image src={t.avatar} alt={t.author} fill sizes="36px" className="object-cover" />
                  </div>
                </div>
              </HoverLift>
            );
          })}
        </div>
      </div>
    </section>
  );
}
