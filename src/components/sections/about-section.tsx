"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { ContainerScroll } from "@/app/container-scroll";
import { ArrowUpRight } from "lucide-react";
import { VroomLogo } from "../common/vroom-logo";
import { AnimatedCounter } from "../common/animated-counter";
import {
  EnnLabsLogo,
  MastermallLogo,
  FindexLogo,
  ManoflexLogo,
  LaunchSimpleLogo,
  FourpointsLogo,
} from "@/data/site-data";
import { FadeIn, HoverLift } from "@/motions";

export const AboutSection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function AboutSection(props, ref) {
    return (
      <section
        ref={ref}
        id="about"
        className="relative z-10 w-full bg-white px-4 sm:px-6 py-16 sm:py-24 text-neutral-950"
        {...props}
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Header: Label on Left, Vroom Mark on Right */}
          <FadeIn className="w-full flex items-center justify-between pb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#f3440f]">
              About Us
            </span>
            <VroomLogo className="text-neutral-950" />
          </FadeIn>

          <ContainerScroll
            heading={
              <h2 className="container-scroll__title heading-2">
                <span>We build brands that</span>
                <br />
                <span className="text-[#f3440f]">grow and stand out</span>
              </h2>
            }
            imageSrc="/about-grand-prix-sunset-hd.png"
            imageAlt="Formula 1 car racing past the grandstands under an orange sunset"
          >
            <span className="container-scroll__eyebrow title-4">Formula precision</span>
            <h3 className="heading-4">Clarity first.<br />Then the system.</h3>
            <p className="container-scroll__description body-6">
              Engineering unmistakable visual identities and digital platforms crafted for relentless founders.
            </p>
          </ContainerScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-12">
            {/* Narrative Copy */}
            <FadeIn delay={0.15} className="space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-neutral-800 font-normal leading-relaxed">
                We bring together designers and strategists to create brands that feel right and perform even better. Every decision we make is focused on growth, clarity, and long-term impact.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-sm">
                  A team focused on real results, not just visuals — building brands that perform, grow, and stand out in a competitive market.
                </p>

                {/* Team Avatar Stack */}
                <div className="flex items-center -space-x-2 shrink-0">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white relative shadow-sm">
                    <Image src="/card-woman-clean.jpg" alt="Team member" fill sizes="32px" className="object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white relative shadow-sm">
                    <Image src="/strategist-warm-bg.jpg" alt="Team member" fill sizes="32px" className="object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white relative shadow-sm">
                    <Image src="/team-warm-bg.jpg" alt="Team member" fill sizes="32px" className="object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#f3440f] text-white font-bold text-xs flex items-center justify-center border-2 border-white shadow-sm">
                    12+
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bottom Cards: 350+ Trusted Partners & 400+ Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* 350+ Card */}
              <HoverLift>
                <div className="bg-[#fff8e8] text-neutral-900 rounded-[26px] p-6 shadow-md border border-amber-200/60 flex flex-col justify-between min-h-[240px]">
                  <div>
                    <div className="font-sans text-3xl sm:text-4xl font-normal tracking-tight leading-none text-neutral-950 tabular-nums">
                      <AnimatedCounter value={350} />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-neutral-900 mt-1.5">
                      Trusted partners
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      Brands that chose us for long-term growth
                    </div>

                    {/* 6 Partner Logos */}
                    <div className="grid grid-cols-3 gap-y-3.5 gap-x-2.5 my-6 pt-1">
                      <EnnLabsLogo />
                      <MastermallLogo />
                      <FindexLogo />
                      <ManoflexLogo />
                      <LaunchSimpleLogo />
                      <FourpointsLogo />
                    </div>
                  </div>

                  {/* Get Started Button */}
                  <button className="w-full bg-[#f3440f] hover:bg-[#ff551f] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 sm:py-3 rounded-full flex items-center justify-between shadow-md transition-colors group cursor-pointer">
                    <span>Get Started</span>
                    <span className="w-5 h-5 rounded-full bg-white text-[#f3440f] flex items-center justify-center font-bold text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </button>
                </div>
              </HoverLift>

              {/* 400+ Photo Card */}
              <HoverLift>
                <div className="relative rounded-[26px] overflow-hidden shadow-md border border-neutral-200 flex flex-col justify-end p-6 min-h-[240px] group">
                  <Image
                    src="/f1-car-motion.jpg"
                    alt="High Velocity Execution"
                    fill
                    sizes="(max-width: 640px) 100vw, 350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                  <div className="relative z-10 text-white">
                    <div className="font-sans text-3xl sm:text-4xl font-normal tracking-tight leading-none tabular-nums">
                      <AnimatedCounter value={400} />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white/95 mt-1.5">
                      Trusted by growing brands
                    </div>
                    <div className="text-[11px] sm:text-xs text-white/75 mt-0.5 leading-tight">
                      From idea to full-scale brand execution
                    </div>
                  </div>
                </div>
              </HoverLift>
            </div>
          </div>
        </div>
      </section>
    );
  }
);
