"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { paddockInsights, insightCategories } from "@/data/site-data";
import { FadeIn, HoverLift } from "@/motions";

export function InsightsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredInsights =
    activeCategory === "All"
      ? paddockInsights
      : paddockInsights.filter((p) => p.category === activeCategory);

  return (
    <section
      id="insights"
      className="relative z-10 w-full bg-[#0a0a0c] px-4 sm:px-6 py-20 sm:py-28 text-white border-t border-neutral-900 overflow-hidden"
    >
      {/* Ambient Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#f3440f]/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#f3440f] mb-3">
              Telemetry &amp; Dispatches
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.038em] leading-[1.04] text-white">
              Insights &amp; Blogs
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-neutral-400 font-normal leading-relaxed max-w-md">
            Formula-grade perspectives on category leadership, telemetry strategy, and high-velocity identity design.
          </p>
        </FadeIn>

        {/* Category Filter Pills (ScaleX pattern) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 pb-10">
          {insightCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#f3440f] text-white shadow-md shadow-[#f3440f]/20"
                    : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3 Insights Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.map((post) => (
            <HoverLift
              key={post.title}
              className="group rounded-[26px] bg-[#121114] border border-white/10 hover:border-[#f3440f]/40 p-3.5 flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Media Thumbnail with ScaleX rounded corner framing */}
                <div className="relative w-full aspect-[16/11] rounded-[20px] overflow-hidden bg-neutral-900 mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-white/90">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Metadata & Title */}
                <div className="px-2 pb-2">
                  <h3 className="font-sans text-lg sm:text-xl font-normal text-white group-hover:text-[#f3440f] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-normal leading-relaxed mt-2.5 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer: Date & Read Time */}
              <div className="px-2 pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-500">
                <span>{post.date}</span>
                <span className="text-neutral-400 font-medium group-hover:text-[#f3440f] flex items-center gap-1 transition-colors">
                  {post.readTime}
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </HoverLift>
          ))}
        </div>
      </div>
    </section>
  );
}
