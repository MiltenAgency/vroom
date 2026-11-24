"use client";

import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data/site-data";
import { FadeIn, HoverLift } from "@/motions";

export function CollectiveSection() {
  return (
    <section
      id="collective"
      className="relative z-10 w-full bg-white px-4 sm:px-6 py-16 sm:py-24 text-neutral-950 border-t border-neutral-200/60"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#f3440f] mb-3">
              The Collective
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-[-0.038em] leading-[1.05] text-neutral-950">
              The minds behind
              <br />
              <span className="text-[#f3440f]">every breakthrough.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
            Veteran creative directors, digital architects, and telemetry strategists with a shared obsession for uncompromising speed.
          </p>
        </FadeIn>

        {/* Team Grid: 4 Leadership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <HoverLift
              key={member.name}
              className="group rounded-[26px] overflow-hidden bg-white border border-neutral-200/80 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="relative w-full h-[280px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-[10px] font-semibold text-neutral-800 shadow-sm">
                  {member.discipline}
                </span>
              </div>

              <div className="p-5 sm:p-6 pt-0 space-y-1.5">
                <h3 className="font-sans text-xl font-normal text-neutral-950 tracking-tight">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-[#f3440f]">
                  {member.role}
                </div>
                <p className="text-xs text-neutral-600 pt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </HoverLift>
          ))}
        </div>
      </div>
    </section>
  );
}
