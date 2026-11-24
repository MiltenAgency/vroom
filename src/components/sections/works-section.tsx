"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { allProjects, projectCategories } from "@/data/site-data";
import { FadeIn, HoverLift } from "@/motions";

export function WorksSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="works"
      className="relative z-10 w-full bg-white px-4 sm:px-6 py-16 sm:py-24 text-neutral-950 border-t border-neutral-200/60"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#f3440f] mb-3">
              Selected Works
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-[-0.038em] leading-[1.05] text-neutral-950">
              High velocity.
              <br />
              <span className="text-[#f3440f]">Unmistakable identity.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
            A curated look at category-defining brands we have positioned, engineered, and accelerated for global impact.
          </p>
        </FadeIn>

        {/* Project Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-6 pb-10">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-neutral-600 hover:text-neutral-950 border border-neutral-200 bg-neutral-50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-work-filter"
                    className="absolute inset-0 rounded-full bg-neutral-950 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid: 3 Marquee Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0;
            return (
              <HoverLift
                key={project.title}
                className={`${
                  isFeatured ? "lg:col-span-12" : "lg:col-span-6"
                } group relative rounded-[28px] overflow-hidden bg-white border border-neutral-200 shadow-xl flex flex-col justify-between`}
              >
                {/* Visual Media Canvas */}
                <div
                  className={`relative w-full ${
                    isFeatured ? "h-[320px] sm:h-[440px] lg:h-[500px]" : "h-[280px] sm:h-[360px]"
                  } overflow-hidden`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f3440f]" />
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold text-neutral-300">
                      {project.year}
                    </span>
                  </div>

                  {/* Floating Key Impact Badge */}
                  <div className="absolute bottom-5 right-5 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff8e8] text-neutral-950 font-bold text-xs shadow-xl border border-amber-200/60">
                    <TrendingUp className="w-3.5 h-3.5 text-[#f3440f]" />
                    <span>{project.impact}</span>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 bg-white border-t border-neutral-100">
                  <div className="space-y-2 max-w-xl">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-[#f3440f]">
                      {project.deliverables.map((d, i) => (
                        <span key={d}>
                          {d}
                          {i < project.deliverables.length - 1 && (
                            <span className="text-neutral-300 ml-2">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-sans text-2xl sm:text-3xl font-normal tracking-[-0.035em] text-neutral-950">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <button className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-850 text-white font-semibold text-xs transition-colors shrink-0 cursor-pointer shadow-md group/btn">
                    <span>Case study</span>
                    <span className="w-5 h-5 rounded-full bg-[#f3440f] text-white flex items-center justify-center font-bold text-[10px] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </button>
                </div>
              </HoverLift>
            );
          })}
        </div>
      </div>
    </section>
  );
}
