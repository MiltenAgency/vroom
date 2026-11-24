"use client";

import React from "react";
import { Clock, ArrowUpRight } from "lucide-react";
import { races } from "@/data/site-data";
import { FadeIn, HoverLift } from "@/motions";

export function ScheduleSection() {
  return (
    <section
      id="schedule"
      className="relative z-10 w-full bg-[#faf8f5] px-4 sm:px-6 py-16 sm:py-24 text-neutral-950 border-t border-neutral-200/60"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#f3440f] mb-3">
              Global Tour · 2025
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-[-0.038em] leading-[1.05] text-neutral-950">
              Trackside presence.
              <br />
              <span className="text-[#f3440f]">Meet us on the circuit.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
            We host private brand intensives, VIP client briefings, and design masterclasses live at marquee Grand Prix weekends throughout the season.
          </p>
        </FadeIn>

        {/* 4 Grand Prix Weekend Cards with Vector Track Outlines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {races.map((race) => (
            <HoverLift
              key={race.round}
              className="relative bg-white rounded-[26px] p-5 sm:p-6 border border-neutral-200/80 shadow-sm hover:shadow-md flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Round & Status */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 text-[10px] font-semibold">
                  <span className="text-[#f3440f] tracking-wider uppercase font-bold">
                    {race.round}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700">
                    {race.status}
                  </span>
                </div>

                {/* Circuit Name & City */}
                <div className="pt-4">
                  <div className="font-sans text-2xl font-normal text-neutral-950 tracking-tight leading-none group-hover:text-[#f3440f] transition-colors">
                    {race.title}
                  </div>
                  <div className="text-xs font-medium text-neutral-500 mt-1">
                    {race.location}
                  </div>
                  <div className="text-[11px] font-semibold text-[#f3440f] mt-1.5 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>{race.dates}</span>
                  </div>
                </div>

                {/* Vector Track Silhouette on light track canvas */}
                <div className="relative w-full h-24 my-5 flex items-center justify-center p-2 rounded-xl bg-[#f5f3ef] border border-neutral-200/70">
                  {race.trackSvg}
                </div>

                {/* Activation Format */}
                <div className="text-[11px] text-neutral-700 leading-relaxed font-normal bg-[#faf8f5] p-2.5 rounded-xl border border-neutral-200/70">
                  <span className="font-semibold text-neutral-950 block mb-0.5">Activation:</span>
                  {race.activation}
                </div>
              </div>

              {/* Booking trigger */}
              <div className="pt-5 mt-5 border-t border-neutral-100">
                <a
                  href="#contact"
                  className="w-full py-2 px-3 rounded-full bg-neutral-100 hover:bg-[#f3440f] text-neutral-800 hover:text-white text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer group/btn"
                >
                  <span>Request Paddock Briefing</span>
                  <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </HoverLift>
          ))}
        </div>
      </div>
    </section>
  );
}
