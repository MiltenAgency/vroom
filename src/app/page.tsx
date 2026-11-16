"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// --- Vroom Mark & Icons ---

function VroomLogo({ className = "text-white" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      <div className="relative w-5 h-4 flex flex-col justify-between py-0.5">
        <div className="h-1.5 w-5 bg-current rounded-[1px]" />
        <div className="h-1.5 w-3.5 bg-current rounded-[1px]" />
        <div className="h-1 w-1 bg-current rounded-[1px]" />
      </div>
      <span className="font-bold text-lg md:text-xl tracking-[-0.03em] font-sans">Vroom</span>
    </Link>
  );
}

function ArrowUpRight({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 11.5L11.5 4.5M6 4.5h5.5V10" />
    </svg>
  );
}

function ChevronDown({ className = "w-2.5 h-2.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 3.5L5 6L7.5 3.5" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4", color = "#851e03" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill={color} stroke="none" />
    </svg>
  );
}

function DribbbleIcon({ className = "w-4 h-4", color = "#851e03" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 11.42 7.05 18.5" />
    </svg>
  );
}

function TelegramIcon({ className = "w-4 h-4", color = "#851e03" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.15.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}

// --- Partner Brand Icons ---

function EnnLabsLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <svg className="w-3 h-3 fill-neutral-700 shrink-0" viewBox="0 0 12 12">
        <circle cx="2" cy="2" r="1.1" />
        <circle cx="6" cy="2" r="1.1" />
        <circle cx="10" cy="2" r="1.1" />
        <circle cx="2" cy="6" r="1.1" />
        <circle cx="6" cy="6" r="1.1" />
        <circle cx="10" cy="6" r="1.1" />
        <circle cx="2" cy="10" r="1.1" />
        <circle cx="6" cy="10" r="1.1" />
        <circle cx="10" cy="10" r="1.1" />
      </svg>
      <span>ennLabs</span>
    </div>
  );
}

function MastermallLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <svg className="w-3 h-3 fill-neutral-700 shrink-0" viewBox="0 0 16 16">
        <path d="M8 0L9.5 5.5L15 4L10.5 8L15 12L9.5 10.5L8 16L6.5 10.5L1 12L5.5 8L1 4L6.5 5.5Z" />
      </svg>
      <span>Mastermall</span>
    </div>
  );
}

function FindexLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <svg className="w-3 h-3 stroke-neutral-700 fill-none stroke-[2] shrink-0" viewBox="0 0 16 16">
        <path d="M3 4h4v8H3zM9 4h4v8H9z" />
        <path d="M1 8h14" />
      </svg>
      <span>Findex</span>
    </div>
  );
}

function ManoflexLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <svg className="w-3 h-3 stroke-neutral-700 fill-none stroke-[2] shrink-0" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="6" />
        <path d="M5 8a3 3 0 0 1 6 0" />
      </svg>
      <span>Manoflex</span>
    </div>
  );
}

function LaunchSimpleLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <svg className="w-3 h-3 stroke-neutral-700 fill-none stroke-[2] shrink-0" viewBox="0 0 16 16">
        <rect x="3" y="3" width="10" height="10" rx="2" />
        <path d="M6 10l4-4M7 6h3v3" />
      </svg>
      <span>LaunchSimple</span>
    </div>
  );
}

function FourpointsLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <svg className="w-3 h-3 fill-neutral-700 shrink-0" viewBox="0 0 16 16">
        <circle cx="4" cy="4" r="1.8" />
        <circle cx="12" cy="4" r="1.8" />
        <circle cx="4" cy="12" r="1.8" />
        <circle cx="12" cy="12" r="1.8" />
      </svg>
      <span>Fourpoints</span>
    </div>
  );
}

export default function Home() {
  const [activeNav, setActiveNav] = useState("Home");
  const navItems = ["Home", "Race calendar", "Drivers", "Teams", "Stories"];

  return (
    <div className="w-full min-h-screen bg-[#080403] text-white flex flex-col items-center">
      
      {/* Full-width Website Container */}
      <div className="w-full flex flex-col items-center">

        {/* ============================================================== */}
        {/* SECTION 1: HERO SECTION (FULL WIDTH & REAL COMPONENTS)          */}
        {/* ============================================================== */}
        <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#851e03] via-[#e6470e] to-[#731500] shadow-2xl md:sticky md:top-0 md:h-screen md:z-0">
          
          {/* Full-bleed upscaled race image */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/hero-driver-upscaled.jpg"
              alt="Formula racing helmet in orange light"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[62%_50%] brightness-100 contrast-[1.06] saturate-[1.08]"
            />
          </div>

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#4c1206]/35 via-[#741c07]/10 to-transparent z-[1]" />

          {/* Ambient Radial Lighting in Background */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_65%_45%,rgba(255,145,55,0.25)_0%,transparent_58%)] z-[1]" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_80%,rgba(75,14,0,0.18)_0%,transparent_50%)] z-[1]" />

          {/* Inner Content Constrained to Max Width for Readability on Ultra-Wide */}
          <div className="relative z-10 flex min-h-screen w-full max-w-7xl mx-auto flex-col px-4 sm:px-6 md:px-8 lg:px-10 pt-5 pb-8 sm:pb-10">
            
            {/* Real Header / Navigation Bar */}
            <header className="w-full flex items-center justify-between gap-4 pb-5 sm:pb-7">
              {/* Logo */}
              <VroomLogo />

              {/* Floating Glass Navigation Pill */}
              <nav className="hidden sm:flex items-center gap-1 glass-nav rounded-full px-2.5 py-2 shadow-xl shadow-black/30" aria-label="Primary navigation">
                {navItems.map((item) => {
                  const isActive = activeNav === item;
                  return (
                    <button
                      key={item}
                      onClick={() => setActiveNav(item)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                        isActive
                          ? "bg-[#fff8e8] text-neutral-900 font-semibold shadow-sm"
                          : "text-white hover:text-white hover:bg-white/15"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </nav>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#fff8e8] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-md cursor-pointer"
                  aria-label="Instagram"
                >
                  <InstagramIcon color="#851e03" />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#fff8e8] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-md cursor-pointer"
                  aria-label="Dribbble"
                >
                  <DribbbleIcon color="#851e03" />
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#fff8e8] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-md cursor-pointer"
                  aria-label="Telegram"
                >
                  <TelegramIcon color="#851e03" />
                </a>
              </div>
            </header>

            {/* Hero Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-8 items-start md:items-stretch mt-1 sm:mt-3 md:flex-1">
              
              {/* Left Column: Headlines, CTA, and Real Stats Cards */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Badge */}
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80 leading-tight mb-2.5">
                    <div>Formula</div>
                    <div>Racing</div>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[0.98] text-white">
                    Feel the rush.<br />
                    Follow the formula.
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm md:text-[15px] text-white/85 font-normal leading-relaxed max-w-md mt-4 sm:mt-5">
                    The drivers, rivalries, and split-second decisions behind every race.
                  </p>

                  {/* Start a project CTA */}
                  <div className="mt-5 sm:mt-7">
                    <button className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/25 bg-black/15 backdrop-blur-md hover:bg-black/25 active:scale-95 text-white font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-md cursor-pointer">
                      <span>Explore the grid</span>
                      <span className="w-5 h-5 rounded-full bg-white text-[#d24310] flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-bold text-xs">
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Season snapshot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-10 max-w-lg">
                  
                  {/* Race calendar */}
                  <div className="bg-[#fff8e8] text-neutral-900 rounded-[22px] p-5 sm:p-6 shadow-2xl border border-black/5 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                    <div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-none text-neutral-950">
                        24
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-neutral-900 mt-1">
                        Grand Prix weekends
                      </div>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-neutral-500 mt-4 leading-relaxed font-normal">
                      One season. One world title.
                    </p>
                  </div>

                  {/* Drivers championship */}
                  <div className="border border-white/20 bg-white/10 backdrop-blur-md text-white rounded-[22px] p-5 sm:p-6 shadow-2xl flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                    <div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-none text-white">
                        20
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white/95 mt-1">
                        Drivers on the grid
                      </div>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-white/75 mt-4 leading-relaxed font-normal">
                      Every point changes the story.
                    </p>
                  </div>

                </div>

              </div>

              {/* Right Column: Championship badge and race card */}
              <div className="md:col-span-5 flex flex-col items-center md:items-end justify-start md:justify-end gap-4 self-stretch z-10 pt-2 md:pt-4">
                
                {/* Season stats pill */}
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/20 bg-black/35 backdrop-blur-md shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-[#ff7a32] shadow-[0_0_10px_rgba(255,122,50,0.8)]" />
                  <div className="text-[10px] sm:text-[11px] leading-tight">
                    <span className="font-bold text-white">2025 SEASON</span>{" "}
                    <span className="text-white/80 font-normal">· 10 teams · 20 drivers</span>
                  </div>
                </div>

                {/* Floating race weekend card */}
                <div className="w-full max-w-[250px] sm:max-w-[265px] bg-[#fff8e8] text-neutral-900 rounded-[24px] p-4 sm:p-4.5 shadow-2xl border border-black/5 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-200">
                  {/* Card header */}
                  <div className="flex items-center justify-between text-neutral-700">
                    <div className="flex flex-col justify-between h-3.5 w-3.5">
                      <div className="h-1 w-3.5 bg-neutral-900 rounded-[0.5px]" />
                      <div className="h-1 w-2.5 bg-neutral-900 rounded-[0.5px]" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-[9.5px] font-semibold text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f3440f]" />
                      <span>ROUND 08 / 24</span>
                    </div>
                  </div>

                  {/* Monaco race weekend */}
                  <div className="relative flex h-[145px] sm:h-[155px] flex-col justify-between overflow-hidden rounded-xl bg-[radial-gradient(ellipse_at_75%_30%,rgba(255,176,90,0.75),transparent_38%),linear-gradient(135deg,#ef541a,#741708)] p-4 text-white shadow-inner">
                    <div className="absolute -right-7 -top-5 h-36 w-36 rounded-full border border-white/30" />
                    <div className="absolute -right-3 top-1 h-28 w-40 rotate-[-28deg] rounded-[50%] border border-white/25" />
                    <span className="relative z-10 text-[8px] font-bold tracking-[0.16em] text-white/80">NEXT RACE</span>
                    <div className="relative z-10">
                      <span className="block text-3xl font-black leading-none tracking-[-0.06em]">MONACO</span>
                      <span className="mt-1 block text-[8px] font-semibold tracking-[0.16em]">MONTE CARLO · 25 MAY</span>
                    </div>
                  </div>

                  {/* Race details */}
                  <div className="flex flex-col gap-0.5 pt-0.5">
                    <div className="font-bold text-xs sm:text-[13px] text-neutral-950 tracking-tight">
                      Grand Prix weekend
                    </div>
                    <div className="text-[10px] font-medium text-neutral-500">
                      Practice · Qualifying · Race
                    </div>
                  </div>

                  {/* Calendar link */}
                  <button className="w-full bg-[#f3440f] hover:bg-[#ff551f] active:scale-95 text-white text-xs font-semibold px-4 py-2.5 rounded-full flex items-center justify-between shadow-md transition-all group cursor-pointer mt-1">
                    <span>View race calendar</span>
                    <span className="w-5 h-5 rounded-full bg-white text-[#f3440f] flex items-center justify-center font-bold text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </button>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ============================================================== */}
        {/* SECTION 2: ABOUT US SECTION (FULL WIDTH & REAL COMPONENTS)      */}
        {/* ============================================================== */}
        <section className="relative z-10 w-full bg-[#0c0504] px-6 sm:px-10 md:px-14 lg:px-18 py-10 sm:py-16 md:py-20 text-white">
          
          <div className="w-full max-w-7xl mx-auto">
            
            {/* Header: Tag Pill on Left, Formix Mark on Right */}
            <div className="w-full flex items-center justify-between pb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/15 bg-black/40 text-[11px] font-medium text-neutral-300">
                <ChevronDown className="text-neutral-400" />
                <span>About us</span>
              </div>
              <VroomLogo />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-[-0.035em] leading-[1.08] mt-2 mb-10 sm:mb-14">
              <span className="text-white">We build brands that</span>
              <br />
              <span className="text-[#f3440f]">grow and stand out</span>
            </h2>

            {/* Grid Layout: Left Strategist Card, Right Copy & Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column: Curly-haired Strategist Card */}
              <div className="lg:col-span-5 relative rounded-[28px] overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[460px] lg:min-h-[500px]">
                <Image
                  src="/man-portrait-exact.jpg"
                  alt="Formix Brand Strategist"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Right Column: Narrative Copy & Two Balanced Cards */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-8">
                
                {/* Narrative Copy */}
                <div className="space-y-6">
                  <p className="text-base sm:text-lg md:text-xl text-neutral-200 font-normal leading-relaxed">
                    We bring together designers and strategists to create brands that feel right and perform even better. Every decision we make is focused on growth, clarity, and long-term impact.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
                      A team focused on real results, not just visuals — building brands that perform, grow, and stand out in a competitive market.
                    </p>

                    {/* Team Avatar Stack */}
                    <div className="flex items-center -space-x-2 shrink-0">
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#130805] relative shadow-md">
                        <Image src="/card-woman-clean.jpg" alt="Team member" fill sizes="32px" className="object-cover" />
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#130805] relative shadow-md">
                        <Image src="/man-portrait-exact.jpg" alt="Team member" fill sizes="32px" className="object-cover" />
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#130805] relative shadow-md">
                        <Image src="/team-collab-clean.jpg" alt="Team member" fill sizes="32px" className="object-cover" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#f3440f] text-white font-bold text-xs flex items-center justify-center border-2 border-[#130805] shadow-md">
                        12+
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Cards: 350+ Trusted Partners & 400+ Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* 350+ Card */}
                  <div className="bg-[#fff8e8] text-neutral-900 rounded-[26px] p-6 shadow-2xl border border-black/5 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                    <div>
                      <div className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-neutral-950">
                        350+
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

                    {/* Get Started Orange Button */}
                    <button className="w-full bg-[#f3440f] hover:bg-[#ff551f] active:scale-95 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 sm:py-3 rounded-full flex items-center justify-between shadow-md transition-all group cursor-pointer">
                      <span>Get Started</span>
                      <span className="w-5 h-5 rounded-full bg-white text-[#f3440f] flex items-center justify-center font-bold text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </button>
                  </div>

                  {/* 400+ Photo Card */}
                  <div className="relative rounded-[26px] overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-end p-6 min-h-[240px] group">
                    <Image
                      src="/team-collab-clean.jpg"
                      alt="Trusted by growing brands"
                      fill
                      sizes="(max-width: 640px) 100vw, 350px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10 text-white">
                      <div className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
                        400+
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white/95 mt-1.5">
                        Trusted by growing brands
                      </div>
                      <div className="text-[11px] sm:text-xs text-white/75 mt-0.5 leading-tight">
                        From idea to full-scale brand execution
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ============================================================== */}
        {/* SECTION 3: SERVICES SECTION (FULL WIDTH & REAL COMPONENTS)      */}
        {/* ============================================================== */}
        <section className="relative z-10 w-full bg-[#0c0504] px-6 sm:px-10 md:px-14 lg:px-18 pt-4 pb-20 sm:pb-28 text-white">
          
          <div className="w-full max-w-7xl mx-auto">
            
            {/* Section Header: Pill on Left, Headline on Right */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/15 bg-black/40 text-[11px] font-medium text-neutral-300">
                  <ChevronDown className="text-neutral-400" />
                  <span>Services</span>
                </div>
              </div>

              <div className="md:max-w-lg w-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] leading-[1.06] text-white">
                  <span className="text-[#f3440f]">How we build</span> high-
                  <br />
                  performing brands
                </h2>
              </div>
            </div>

            {/* 4-Column Modular Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-14">
              
              {/* Row 1, Col 1: Visual identity (Ivory card) */}
              <div className="bg-[#fff8e8] text-neutral-900 rounded-[26px] p-6 flex flex-col justify-between min-h-[240px] shadow-xl border border-black/5 hover:-translate-y-1.5 transition-transform duration-200 group">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-2xl sm:text-[28px] font-extrabold tracking-[-0.03em] leading-[0.95] text-neutral-950">
                    Visual
                    <br />
                    identity
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mt-8">
                  We design visual systems that feel right, stand out, and stay relevant over time
                </p>
              </div>

              {/* Row 1, Col 2: Brand strategy (Orange card) */}
              <div className="bg-[#f3440f] text-white rounded-[26px] p-6 flex flex-col justify-between min-h-[240px] shadow-xl hover:-translate-y-1.5 transition-transform duration-200 group">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-2xl sm:text-[28px] font-extrabold tracking-[-0.03em] leading-[0.95] text-white">
                    Brand
                    <br />
                    strategy
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white text-[#f3440f] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-white/90 leading-relaxed mt-8">
                  We define your brand&apos;s direction, positioning, and strategy to help you stand out and grow
                </p>
              </div>

              {/* Row 1, Col 3: Center Highlight Copy */}
              <div className="hidden lg:flex flex-col items-center justify-center text-center px-4 py-8">
                <p className="text-xs sm:text-sm md:text-base text-neutral-400 font-normal leading-relaxed">
                  You don&apos;t need
                  <br />
                  everything —
                  <br />
                  <span className="text-neutral-200 font-semibold">just what works</span>
                </p>
              </div>

              {/* Row 1, Col 4: Creative direction (Ivory card) */}
              <div className="bg-[#fff8e8] text-neutral-900 rounded-[26px] p-6 flex flex-col justify-between min-h-[240px] shadow-xl border border-black/5 hover:-translate-y-1.5 transition-transform duration-200 group">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-2xl sm:text-[28px] font-extrabold tracking-[-0.03em] leading-[0.95] text-neutral-950">
                    Creative
                    <br />
                    direction
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mt-8">
                  Shaping the tone, message, and overall feel of your brand across every touchpoint
                </p>
              </div>

              {/* Row 2, Col 1 & 2: Text Description + View our work CTA */}
              <div className="sm:col-span-2 flex flex-col justify-between py-2 sm:pr-8">
                <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed max-w-lg">
                  We don&apos;t offer a fixed set of services — we combine the right tools to solve your specific goals. From strategy to execution, everything we do is focused on growth, clarity, and real results.
                </p>
                <div className="pt-6">
                  <button className="inline-flex items-center gap-3.5 px-5 py-2.5 sm:py-3 rounded-full border border-white/20 bg-black/40 hover:bg-white/10 active:scale-95 text-xs sm:text-sm font-medium text-white transition-all group cursor-pointer shadow-md">
                    <span>View our work</span>
                    <span className="w-6 h-6 rounded-full bg-[#fff8e8] text-neutral-900 flex items-center justify-center font-bold text-[11px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Row 2, Col 3: Web design (Ivory card) */}
              <div className="bg-[#fff8e8] text-neutral-900 rounded-[26px] p-6 flex flex-col justify-between min-h-[240px] shadow-xl border border-black/5 hover:-translate-y-1.5 transition-transform duration-200 group">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-2xl sm:text-[28px] font-extrabold tracking-[-0.03em] leading-[0.95] text-neutral-950">
                    Web
                    <br />
                    design
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mt-8">
                  Designing high-performing digital experiences that convert and engage users
                </p>
              </div>

              {/* Row 2, Col 4: Motion & content (Orange card) */}
              <div className="bg-[#f3440f] text-white rounded-[26px] p-6 flex flex-col justify-between min-h-[240px] shadow-xl hover:-translate-y-1.5 transition-transform duration-200 group">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-2xl sm:text-[28px] font-extrabold tracking-[-0.03em] leading-[0.95] text-white">
                    Motion &amp;
                    <br />
                    content
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white text-[#f3440f] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-white/90 leading-relaxed mt-8">
                  From motion design to content — we create visuals that capture attention and tell your story
                </p>
              </div>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
}
