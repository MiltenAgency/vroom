"use client";

import React from "react";
import { formulaSteps } from "@/data/site-data";
import { FadeIn, HoverLift } from "@/motions";

export function FormulaSection() {
  return (
    <section
      id="formula"
      className="relative z-10 w-full bg-[#faf8f5] px-4 sm:px-6 py-16 sm:py-24 text-neutral-950 border-t border-neutral-200/60"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#f3440f] mb-3">
              The Formula
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-[-0.038em] leading-[1.05] text-neutral-950">
              Engineered for
              <br />
              <span className="text-[#f3440f]">pole position.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
            We stripped the bloated agency model down to four high-precision phases. Every stage is timed, telemetry-backed, and built to deliver compounding speed.
          </p>
        </FadeIn>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {formulaSteps.map((step) => (
            <HoverLift
              key={step.phase}
              className="relative bg-white rounded-[26px] p-6 sm:p-7 border border-neutral-200/80 shadow-sm hover:shadow-md flex flex-col justify-between min-h-[300px] group transition-all"
            >
              <div>
                {/* Phase Number & Output Tag */}
                <div className="flex items-center justify-between pb-5 border-b border-neutral-100">
                  <span className="font-sans text-2xl font-normal text-[#f3440f] tracking-tight tabular-nums">
                    {step.phase}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-semibold text-neutral-700">
                    {step.accent}
                  </span>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="font-sans text-xl font-normal text-neutral-950 mt-5 tracking-tight group-hover:text-[#f3440f] transition-colors">
                  {step.title}
                </h3>
                <div className="text-[11px] font-semibold text-neutral-400 mt-1 uppercase tracking-wider">
                  {step.subtitle}
                </div>

                <p className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed mt-4">
                  {step.description}
                </p>
              </div>

              {/* Output deliverable badge */}
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="font-medium">Deliverable:</span>
                <span className="font-semibold text-neutral-950">{step.output}</span>
              </div>
            </HoverLift>
          ))}
        </div>
      </div>
    </section>
  );
}
