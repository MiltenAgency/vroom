"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  LayoutGrid,
  Sparkles,
  Layers,
  Disc,
  Rocket,
  Grid2x2,
  Calendar,
  Clock,
  Compass,
  Sliders,
  TrendingUp,
  Star,
  Send,
  Mail,
} from "lucide-react";
import {
  FaInstagram,
  FaDribbble,
  FaTelegram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

// --- Vroom Mark & Icons ---

function VroomLogo({ className = "text-neutral-950" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center group ${className}`}
      aria-label="Vroom Home"
    >
      <svg
        viewBox="0 0 138 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 sm:h-9 w-auto select-none transition-transform duration-200 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="vr-badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a22" />
            <stop offset="50%" stopColor="#f3440f" />
            <stop offset="100%" stopColor="#c52800" />
          </linearGradient>
          <path
            id="vr-blade"
            d="M 10.50 -233.50 L 48.50 -231.50 L 51.50 -224.50 L -40.50 -86.50 L -48.50 -81.50 L -102.50 -71.50 L -107.50 -74.50 L -118.50 -100.50 L -147.50 -164.50 L -147.50 -170.50 L -122.50 -190.50 L -99.50 -203.50 L -94.50 -199.50 L -75.50 -156.50 L -70.50 -154.50 L -18.50 -230.50 Z"
          />
        </defs>

        {/* Aerodynamic Badge (App Colors) */}
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="10"
          fill="url(#vr-badge-grad)"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1"
        />

        {/* 6-Blade Rotational Vortex Emblem (Inspired by Reference Image) */}
        <g
          transform="translate(18, 18) scale(0.054)"
          fill="#ffffff"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinejoin="round"
        >
          <use href="#vr-blade" />
          <use href="#vr-blade" transform="rotate(60)" />
          <use href="#vr-blade" transform="rotate(120)" />
          <use href="#vr-blade" transform="rotate(180)" />
          <use href="#vr-blade" transform="rotate(240)" />
          <use href="#vr-blade" transform="rotate(300)" />
        </g>

        {/* Wordmark: Helvetica Bold Vectors */}
        <g fill="currentColor" style={{ fontFamily: "Helvetica, 'Helvetica Neue', Arial, sans-serif" }}>
          {/* V */}
          <path
            d="M834 0H535L14 1409H322L612 504Q639 416 686 238L707 324L758 504L1047 1409H1352Z"
            transform="translate(44.00, 25.50) scale(0.010788, -0.010788)"
          />
          {/* R */}
          <path
            d="M1105 0 778 535H432V0H137V1409H841Q1093 1409 1230.0 1300.5Q1367 1192 1367 989Q1367 841 1283.0 733.5Q1199 626 1056 592L1437 0ZM1070 977Q1070 1180 810 1180H432V764H818Q942 764 1006.0 820.0Q1070 876 1070 977Z"
            transform="translate(58.30, 25.50) scale(0.010788, -0.010788)"
          />
          {/* O 1 */}
          <path
            d="M1507 711Q1507 491 1420.0 324.0Q1333 157 1171.0 68.5Q1009 -20 793 -20Q461 -20 272.5 175.5Q84 371 84 711Q84 1050 272.0 1240.0Q460 1430 795 1430Q1130 1430 1318.5 1238.0Q1507 1046 1507 711ZM1206 711Q1206 939 1098.0 1068.5Q990 1198 795 1198Q597 1198 489.0 1069.5Q381 941 381 711Q381 479 491.5 345.5Q602 212 793 212Q991 212 1098.5 342.0Q1206 472 1206 711Z"
            transform="translate(73.83, 25.50) scale(0.010788, -0.010788)"
          />
          {/* O 2 */}
          <path
            d="M1507 711Q1507 491 1420.0 324.0Q1333 157 1171.0 68.5Q1009 -20 793 -20Q461 -20 272.5 175.5Q84 371 84 711Q84 1050 272.0 1240.0Q460 1430 795 1430Q1130 1430 1318.5 1238.0Q1507 1046 1507 711ZM1206 711Q1206 939 1098.0 1068.5Q990 1198 795 1198Q597 1198 489.0 1069.5Q381 941 381 711Q381 479 491.5 345.5Q602 212 793 212Q991 212 1098.5 342.0Q1206 472 1206 711Z"
            transform="translate(90.58, 25.50) scale(0.010788, -0.010788)"
          />
          {/* M */}
          <path
            d="M1307 0V854Q1307 883 1307.5 912.0Q1308 941 1317 1161Q1246 892 1212 786L958 0H748L494 786L387 1161Q399 929 399 854V0H137V1409H532L784 621L806 545L854 356L917 582L1176 1409H1569V0Z"
            transform="translate(107.34, 25.50) scale(0.010788, -0.010788)"
          />
        </g>

        {/* Active Racing Beacon Dot */}
        <circle cx="130.5" cy="23.5" r="2.4" fill="#f3440f" />
      </svg>
    </Link>
  );
}

// --- Animated Counter for Numbers ---

function AnimatedCounter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(value);
      }
    };

    const animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

// --- Partner Brand Icons (via lucide-react) ---

function EnnLabsLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <LayoutGrid className="w-3 h-3 text-neutral-700 shrink-0" />
      <span>ennLabs</span>
    </div>
  );
}

function MastermallLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <Sparkles className="w-3 h-3 text-neutral-700 shrink-0" />
      <span>Mastermall</span>
    </div>
  );
}

function FindexLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <Layers className="w-3 h-3 text-neutral-700 shrink-0" />
      <span>Findex</span>
    </div>
  );
}

function ManoflexLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <Disc className="w-3 h-3 text-neutral-700 shrink-0" />
      <span>Manoflex</span>
    </div>
  );
}

function LaunchSimpleLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <Rocket className="w-3 h-3 text-neutral-700 shrink-0" />
      <span>LaunchSimple</span>
    </div>
  );
}

function FourpointsLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <Grid2x2 className="w-3 h-3 text-neutral-700 shrink-0" />
      <span>Fourpoints</span>
    </div>
  );
}

// --- Smooth Animation Variants ---

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardHover = {
  y: -4,
  transition: { duration: 0.25, ease: "easeOut" as const },
};

// --- Data: Flagship Showcase Projects ---
const projectCategories = [
  "All",
  "Automotive & EV",
  "Luxury & Timepieces",
  "Digital Platforms",
] as const;

const allProjects = [
  {
    title: "Apex Dynamics",
    category: "Automotive & EV",
    deliverables: ["Brand Identity", "Aerodynamics", "3D Configurator"],
    year: "2025",
    impact: "+310% Pre-Orders",
    description:
      "Sculpting the global identity, aerodynamic narrative, and digital bespoke configurator for next-generation electric hypercars.",
    image: "/project-hypercar.jpg",
  },
  {
    title: "Chronos Veloce",
    category: "Luxury & Timepieces",
    deliverables: ["Product Direction", "Packaging", "Campaign"],
    year: "2025",
    impact: "Sold Out in 4.2 Min",
    description:
      "A limited-production titanium chronograph inspired by Formula telemetry and split-second precision on the Monaco grid.",
    image: "/project-chronograph.jpg",
  },
  {
    title: "Telemetry One",
    category: "Digital Platforms",
    deliverables: ["Design System", "Real-time Telemetry", "Web App"],
    year: "2024",
    impact: "40k Live Data Nodes",
    description:
      "An enterprise motorsport telemetry interface that translates high-velocity telemetry data into instantaneous strategic clarity.",
    image: "/project-telemetry.jpg",
  },
];

// --- Data: The Formula Steps ---
const formulaSteps = [
  {
    phase: "01",
    accent: "TELEMETRY",
    title: "Market Audit & Friction",
    subtitle: "Locating the unfair advantage",
    description:
      "We dissect competitor drag, audience psychology, and performance telemetry to locate your brand's unique strategic opening.",
    output: "Strategic Dossier",
  },
  {
    phase: "02",
    accent: "AERODYNAMICS",
    title: "Radical Identity Architecture",
    subtitle: "Zero visual drag",
    description:
      "Stripping away unnecessary noise. Every curve, typographic scale, and color harmony is sculpted for high-velocity recall.",
    output: "Design System & Identity",
  },
  {
    phase: "03",
    accent: "HIGH-VELOCITY",
    title: "Synchronized Launch Execution",
    subtitle: "Simultaneous deployment",
    description:
      "Deploying across digital products, cinematic motion, 3D, and packaging in a single synchronized wave without losing momentum.",
    output: "Go-to-Market Suite",
  },
  {
    phase: "04",
    accent: "PODIUM",
    title: "Iterative Performance Tuning",
    subtitle: "Compounding enterprise equity",
    description:
      "Post-launch telemetry tracking and continuous refinement to ensure the brand accelerates past competitors and dominates category share.",
    output: "Long-term Compounding",
  },
];

// --- Data: Paddock Voices Testimonials ---
const testimonials = [
  {
    quote:
      "Vroom transformed our brand from just another tech startup into the undisputed category leader. Their speed, taste, and obsessive precision are unmatched in the industry.",
    author: "Marcus Vance",
    role: "Founder & CEO",
    company: "Apex Dynamics",
    metric: "+$45M Series B valuation",
  },
  {
    quote:
      "Working with Vroom felt like having a championship pit crew behind our launch. Every sprint was executed with jaw-dropping creative that stunned our investors.",
    author: "Elena Rostova",
    role: "Chief Brand Officer",
    company: "Chronos Group",
    metric: "Sold out in 4.2 minutes",
  },
  {
    quote:
      "They don't deliver pretty slides; they deliver strategic engines that drive enterprise conversion. The ROI was clear within the first 60 days of our rebrand.",
    author: "David Thorne",
    role: "Managing Partner",
    company: "Findex Ventures",
    metric: "+180% Inbound dealflow",
  },
];

// --- Data: Trackside Schedule (with authentic SVG track paths) ---
const races = [
  {
    round: "ROUND 08",
    status: "CONFIRMED",
    title: "Monaco Grand Prix",
    location: "Circuit de Monaco · Monte Carlo",
    dates: "23 — 25 MAY 2025",
    activation: "Private Yacht Brand Intensive & Executive Suite",
    trackSvg: (
      <svg viewBox="0 0 160 100" fill="none" className="w-full h-full stroke-[#f3440f] stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
        <path d="M 140 78 L 148 50 C 148 42 142 34 130 32 L 105 28 C 96 28 88 22 84 15 C 80 8 72 8 68 12 L 56 22 C 52 25 45 25 42 20 C 39 15 32 15 28 19 L 20 30 C 16 35 18 42 24 45 L 35 48 C 42 50 48 58 48 66 L 48 76 C 48 84 55 90 64 90 L 95 90 C 102 90 108 84 112 76 L 115 68 C 117 62 124 58 130 62 L 135 68 C 137 72 136 76 132 78 Z" />
      </svg>
    ),
  },
  {
    round: "ROUND 12",
    status: "LIMITED SPOTS",
    title: "British Grand Prix",
    location: "Silverstone Circuit · United Kingdom",
    dates: "04 — 06 JUL 2025",
    activation: "Aerodynamic Identity & Velocity Sprint Workshop",
    trackSvg: (
      <svg viewBox="0 0 160 100" fill="none" className="w-full h-full stroke-[#f3440f] stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
        <path d="M 35 25 L 75 16 C 88 14 102 20 110 30 L 128 50 C 135 58 132 70 122 75 L 100 85 C 92 89 80 86 75 78 L 65 65 C 60 58 48 58 42 66 L 30 80 C 22 88 12 80 16 70 L 26 45 C 28 35 30 28 35 25 Z" />
      </svg>
    ),
  },
  {
    round: "ROUND 16",
    status: "OPEN FOR BOOKING",
    title: "Italian Grand Prix",
    location: "Autodromo Nazionale Monza · Italy",
    dates: "05 — 07 SEP 2025",
    activation: "Temple of Speed Rebrand Briefing & Paddock Tour",
    trackSvg: (
      <svg viewBox="0 0 160 100" fill="none" className="w-full h-full stroke-[#f3440f] stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
        <path d="M 25 82 L 25 45 C 25 38 30 32 38 32 L 68 32 C 78 32 85 24 85 16 C 85 10 92 10 98 14 L 140 45 C 150 52 148 68 138 72 L 95 72 C 86 72 80 78 80 84 C 80 89 74 90 68 88 L 38 88 C 28 88 25 86 25 82 Z" />
      </svg>
    ),
  },
  {
    round: "ROUND 22",
    status: "WAITLIST",
    title: "Las Vegas Grand Prix",
    location: "Las Vegas Strip Circuit · USA",
    dates: "20 — 22 NOV 2025",
    activation: "Night Race VIP Reception & 2026 Strategy Preview",
    trackSvg: (
      <svg viewBox="0 0 160 100" fill="none" className="w-full h-full stroke-[#f3440f] stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
        <path d="M 22 25 L 85 25 C 95 25 102 32 102 42 L 102 55 C 102 62 108 68 116 68 L 142 68 C 148 68 152 74 150 80 L 145 90 C 142 94 135 94 130 90 L 35 90 C 25 90 20 82 20 72 L 20 35 C 20 28 21 25 22 25 Z" />
      </svg>
    ),
  },
];

// --- Data: The Collective Team ---
const teamMembers = [
  {
    name: "Elena Rostova",
    role: "Executive Creative Director",
    discipline: "Haute Direction · Identity",
    bio: "Pioneering cross-disciplinary design systems for luxury motorsport and editorial media.",
    image: "/card-woman-clean.jpg",
  },
  {
    name: "Julian Thorne",
    role: "Head of Brand Strategy",
    discipline: "Market Positioning · Telemetry",
    bio: "Specializing in high-stakes category repositioning and data-informed brand acceleration.",
    image: "/strategist-warm-bg.jpg",
  },
  {
    name: "Kaito Tanaka",
    role: "Lead Motion & 3D Technologist",
    discipline: "Real-time 3D · Motion Systems",
    bio: "Directing cinematic 3D digital experiences and high-frame-rate interaction dynamics.",
    image: "/hero-driver-upscaled.jpg",
  },
  {
    name: "Sophia Al-Mansoor",
    role: "VP of Digital Products",
    discipline: "Design Systems · Enterprise UX",
    bio: "Building robust, scalable digital ecosystems that turn complex workflows into pure elegance.",
    image: "/team-warm-bg.jpg",
  },
];

const inquiryOptions = [
  "Full Rebrand",
  "Visual Identity",
  "Digital Product",
  "Sprint Intensive",
];

export default function Home() {
  const [activeNav, setActiveNav] = useState("Home");
  const navItems = ["Home", "Race calendar", "Drivers", "Teams", "Stories"];
  const [activeProjectCategory, setActiveProjectCategory] = useState<string>("All");
  const [selectedInquiry, setSelectedInquiry] = useState("Full Rebrand");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredProjects =
    activeProjectCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeProjectCategory);

  return (
    <div className="w-full min-h-screen bg-white text-neutral-950 flex flex-col items-center">
      
      {/* Full-width Website Container */}
      <div className="w-full flex flex-col items-center">

        {/* ============================================================== */}
        {/* SECTION 1: HERO SECTION (CLEAN WHITE BACKGROUND & RACER ART)   */}
        {/* ============================================================== */}
        <section className="relative w-full min-h-screen overflow-hidden bg-white md:sticky md:top-0 md:h-screen md:z-0">
          
          {/* Racer visual on the right fading cleanly into white */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end">
            <div className="relative w-full h-full max-w-[820px]">
              <Image
                src="/hero-f1-racer-feathered.png"
                alt="Formula racing driver"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain object-right"
              />
            </div>
          </div>

          {/* Clean soft ambient gradient for crystal-clear reading contrast */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-white/85 to-transparent z-[1]" />

          {/* Inner Content Constrained to Max Width */}
          <div className="relative z-10 flex min-h-screen w-full max-w-7xl mx-auto flex-col px-4 sm:px-5 pt-5 pb-8 sm:pb-10 justify-between">
            
            {/* Real Header / Navigation Bar */}
            <motion.header
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex items-center justify-between gap-4 pb-5 sm:pb-7"
            >
              {/* Logo */}
              <VroomLogo className="text-neutral-950" />

              {/* Floating Glass Navigation Pill with Animated Pill Indicator */}
              <nav className="hidden sm:flex items-center gap-1 glass-nav rounded-full px-2.5 py-2 shadow-sm border border-neutral-200/80" aria-label="Primary navigation">
                {navItems.map((item) => {
                  const isActive = activeNav === item;
                  return (
                    <button
                      key={item}
                      onClick={() => setActiveNav(item)}
                      className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-neutral-600 hover:text-neutral-950"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="hero-nav-pill"
                          className="absolute inset-0 rounded-full bg-neutral-950 shadow-sm"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 flex items-center justify-center shadow-sm cursor-pointer transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 flex items-center justify-center shadow-sm cursor-pointer transition-colors"
                  aria-label="Dribbble"
                >
                  <FaDribbble className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://telegram.org"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 flex items-center justify-center shadow-sm cursor-pointer transition-colors"
                  aria-label="Telegram"
                >
                  <FaTelegram className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.header>

            {/* Hero Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-8 items-start md:items-stretch mt-1 sm:mt-3 md:flex-1">
              
              {/* Left Column: Headlines, CTA, and Real Stats Cards */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="md:col-span-7 flex flex-col justify-between"
              >
                <div>
                  {/* Badge */}
                  <motion.div variants={fadeInUp} custom={0} className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#f3440f] leading-tight mb-2.5">
                    <div>Formula</div>
                    <div>Racing</div>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.h1 variants={fadeInUp} custom={1} className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.035em] leading-[0.98] text-neutral-950">
                    Feel the rush.<br />
                    Follow the formula.
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p variants={fadeInUp} custom={2} className="text-xs sm:text-sm md:text-[15px] text-neutral-600 font-normal leading-relaxed max-w-md mt-4 sm:mt-5">
                    The drivers, rivalries, and split-second decisions behind every race.
                  </motion.p>

                  {/* Explore the grid CTA */}
                  <motion.div variants={fadeInUp} custom={3} className="mt-5 sm:mt-7">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-850 text-white font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-xl border border-neutral-900 cursor-pointer"
                    >
                      <span>Explore the grid</span>
                      <span className="w-6 h-6 rounded-full bg-[#f3440f] text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-bold text-xs shadow-sm">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Season snapshot cards */}
                <motion.div variants={fadeInUp} custom={4} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-10 max-w-lg">
                  
                  {/* Race calendar */}
                  <motion.div
                    whileHover={cardHover}
                    className="bg-[#fff8e8] text-neutral-900 rounded-[22px] p-5 sm:p-6 shadow-md border border-amber-200/60 flex flex-col justify-between transition-shadow cursor-default"
                  >
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
                  </motion.div>

                  {/* Drivers championship */}
                  <motion.div
                    whileHover={cardHover}
                    className="border border-neutral-200 bg-white text-neutral-950 rounded-[22px] p-5 sm:p-6 shadow-md flex flex-col justify-between transition-shadow cursor-default"
                  >
                    <div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-none text-neutral-950">
                        20
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-neutral-800 mt-1">
                        Drivers on the grid
                      </div>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-neutral-500 mt-4 leading-relaxed font-normal">
                      Every point changes the story.
                    </p>
                  </motion.div>

                </motion.div>

              </motion.div>

              {/* Right Column: Floating race card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-5 flex flex-col items-center md:items-end justify-start md:justify-end gap-4 self-stretch z-10 pt-2 md:pt-4"
              >
                {/* Floating race weekend card */}
                <motion.div
                  whileHover={cardHover}
                  className="w-full max-w-[250px] sm:max-w-[265px] bg-white text-neutral-900 rounded-[24px] p-4 sm:p-4.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-neutral-200/80 flex flex-col gap-3 transition-shadow"
                >
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
                  <div className="relative flex h-[145px] sm:h-[155px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#ef541a] to-[#741708] p-4 text-white border border-black/10 shadow-inner">
                    <div className="absolute -right-7 -top-5 h-36 w-36 rounded-full border border-white/15" />
                    <div className="absolute -right-3 top-1 h-28 w-40 rotate-[-28deg] rounded-[50%] border border-white/15" />
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
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#f3440f] hover:bg-[#ff551f] text-white text-xs font-semibold px-4 py-2.5 rounded-full flex items-center justify-between shadow-md transition-colors group cursor-pointer mt-1"
                  >
                    <span>View race calendar</span>
                    <span className="w-5 h-5 rounded-full bg-white text-[#f3440f] flex items-center justify-center font-bold text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </motion.button>
                </motion.div>

              </motion.div>

            </div>

          </div>

        </section>


        {/* ============================================================== */}
        {/* SECTION 2: ABOUT US SECTION (CLEAN WHITE BACKGROUND)            */}
        {/* ============================================================== */}
        <section className="relative z-10 w-full bg-white px-4 sm:px-6 py-16 sm:py-24 text-neutral-950 border-t border-neutral-200/60">
          
          <div className="w-full max-w-7xl mx-auto">
            
            {/* Header: Tag Pill on Left, Vroom Mark on Right */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="w-full flex items-center justify-between pb-6"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-100 text-[11px] font-medium text-neutral-700">
                <ChevronDown className="w-3 h-3 text-neutral-500" />
                <span>About us</span>
              </div>
              <VroomLogo className="text-neutral-950" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-[-0.035em] leading-[1.08] mt-2 mb-10 sm:mb-14"
            >
              <span className="text-neutral-950">We build brands that</span>
              <br />
              <span className="text-[#f3440f]">grow and stand out</span>
            </motion.h2>

            {/* Grid Layout: Left Strategist Card, Right Copy & Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column: Strategist Card with Subtle Image Hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 relative rounded-[28px] overflow-hidden shadow-xl border border-neutral-200/80 min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] group"
              >
                <Image
                  src="/strategist-warm-bg.jpg"
                  alt="Brand Strategist"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Right Column: Narrative Copy & Two Balanced Cards */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-8">
                
                {/* Narrative Copy */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="space-y-6"
                >
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
                </motion.div>

                {/* Bottom Cards: 350+ Trusted Partners & 400+ Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* 350+ Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={cardHover}
                    className="bg-[#fff8e8] text-neutral-900 rounded-[26px] p-6 shadow-md border border-amber-200/60 flex flex-col justify-between transition-shadow"
                  >
                    <div>
                      <div className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-neutral-950">
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
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#f3440f] hover:bg-[#ff551f] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 sm:py-3 rounded-full flex items-center justify-between shadow-md transition-colors group cursor-pointer"
                    >
                      <span>Get Started</span>
                      <span className="w-5 h-5 rounded-full bg-white text-[#f3440f] flex items-center justify-center font-bold text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </motion.button>
                  </motion.div>

                  {/* 400+ Photo Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={cardHover}
                    className="relative rounded-[26px] overflow-hidden shadow-md border border-neutral-200 flex flex-col justify-end p-6 min-h-[240px] group transition-shadow"
                  >
                    <Image
                      src="/team-warm-bg.jpg"
                      alt="Trusted by growing brands"
                      fill
                      sizes="(max-width: 640px) 100vw, 350px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10 text-white">
                      <div className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
                        <AnimatedCounter value={400} />
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white/95 mt-1.5">
                        Trusted by growing brands
                      </div>
                      <div className="text-[11px] sm:text-xs text-white/75 mt-0.5 leading-tight">
                        From idea to full-scale brand execution
                      </div>
                    </div>
                  </motion.div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ============================================================== */}
        {/* SECTION 3: SERVICES SECTION (CLEAN LIGHT BACKGROUND)            */}
        {/* ============================================================== */}
        <section className="relative z-10 w-full bg-[#faf8f5] px-4 sm:px-6 py-16 sm:py-24 text-neutral-950 border-t border-neutral-200/60">
          
          <div className="w-full max-w-7xl mx-auto">
            
            {/* Section Header: Pill on Left, Headline on Right */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 bg-white text-[11px] font-medium text-neutral-700 shadow-sm">
                  <ChevronDown className="w-3 h-3 text-neutral-500" />
                  <span>Services</span>
                </div>
              </div>

              <div className="md:max-w-lg w-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] leading-[1.06] text-neutral-950">
                  <span className="text-[#f3440f]">How we build</span> high-
                  <br />
                  performing brands
                </h2>
              </div>
            </motion.div>

            {/* 4-Column Modular Service Cards Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-14"
            >
              
              {/* Row 1, Col 1: Visual identity (White card) */}
              <motion.div
                variants={fadeInUp}
                whileHover={cardHover}
                className="bg-white text-neutral-900 rounded-[26px] p-6 flex flex-col justify-between min-h-[240px] shadow-sm border border-neutral-200/80 hover:shadow-md transition-shadow group cursor-default"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-2xl sm:text-[28px] font-extrabold tracking-[-0.03em] leading-[0.95] text-neutral-950">
                    Visual
                    <br />
                    identity
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mt-8">
                  We design visual systems that feel right, stand out, and stay relevant over time
                </p>
              </motion.div>

              {/* Row 1, Col 2: Brand strategy (Orange card) */}
              <motion.div
                variants={fadeInUp}
                whileHover={cardHover}
                className="bg-[#f3440f] text-white rounded-[26px] p-6 flex flex-col justify-between min-h-[240px] shadow-md group cursor-default"
              >
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
              </motion.div>

              {/* Row 1, Col 3: Center Highlight Copy */}
              <motion.div variants={fadeInUp} className="hidden lg:flex flex-col items-center justify-center text-center px-4 py-8">
                <p className="text-xs sm:text-sm md:text-base text-neutral-500 font-normal leading-relaxed">
                  You don&apos;t need
                  <br />
                  everything —
                  <br />
                  <span className="text-neutral-900 font-semibold">just what works</span>
                </p>
              </motion.div>

              {/* Row 1, Col 4: Creative direction (White card) */}
              <motion.div
                variants={fadeInUp}
                whileHover={cardHover}
                className="bg-white text-neutral-900 rounded-[26px] p-6 flex flex-col justify-between min-h-[240px] shadow-sm border border-neutral-200/80 hover:shadow-md transition-shadow group cursor-default"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-2xl sm:text-[28px] font-extrabold tracking-[-0.03em] leading-[0.95] text-neutral-950">
                    Creative
                    <br />
                    direction
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mt-8">
                  Shaping the tone, message, and overall feel of your brand across every touchpoint
                </p>
              </motion.div>

              {/* Row 2, Col 1 & 2: Text Description + View our work CTA */}
              <motion.div variants={fadeInUp} className="sm:col-span-2 flex flex-col justify-between py-2 sm:pr-8">
                <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed max-w-lg">
                  We don&apos;t offer a fixed set of services — we combine the right tools to solve your specific goals. From strategy to execution, everything we do is focused on growth, clarity, and real results.
                </p>
                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3.5 px-5 py-2.5 sm:py-3 rounded-full bg-neutral-950 hover:bg-neutral-850 text-xs sm:text-sm font-medium text-white transition-colors group cursor-pointer shadow-md"
                  >
                    <span>View our work</span>
                    <span className="w-6 h-6 rounded-full bg-[#fff8e8] text-neutral-900 flex items-center justify-center font-bold text-[11px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Row 2, Col 3: Web design (White card) */}
              <motion.div
                variants={fadeInUp}
                whileHover={cardHover}
                className="bg-white text-neutral-900 rounded-[26px] p-6 flex flex-col justify-between min-h-[240px] shadow-sm border border-neutral-200/80 hover:shadow-md transition-shadow group cursor-default"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-2xl sm:text-[28px] font-extrabold tracking-[-0.03em] leading-[0.95] text-neutral-950">
                    Web
                    <br />
                    design
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mt-8">
                  Designing high-performing digital experiences that convert and engage users
                </p>
              </motion.div>

              {/* Row 2, Col 4: Motion & content (Orange card) */}
              <motion.div
                variants={fadeInUp}
                whileHover={cardHover}
                className="bg-[#f3440f] text-white rounded-[26px] p-6 flex flex-col justify-between min-h-[240px] shadow-md group cursor-default"
              >
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
              </motion.div>

            </motion.div>

          </div>

        </section>


        {/* ============================================================== */}
        {/* SECTION 4: SELECTED WORKS / FLAGSHIP SHOWCASE (WHITE THEME)     */}
        {/* ============================================================== */}
        <section id="works" className="relative z-10 w-full bg-white px-4 sm:px-6 py-16 sm:py-24 text-neutral-950 border-t border-neutral-200/60">
          <div className="w-full max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-100 text-[11px] font-medium text-neutral-700 mb-3 shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#f3440f]" />
                  <span>Selected Works</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-[-0.035em] leading-[1.05] text-neutral-950">
                  High velocity.
                  <br />
                  <span className="text-[#f3440f]">Unmistakable identity.</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
                A curated look at category-defining brands we have positioned, engineered, and accelerated for global impact.
              </p>
            </motion.div>

            {/* Project Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-6 pb-10">
              {projectCategories.map((cat) => {
                const isActive = activeProjectCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveProjectCategory(cat)}
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
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
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
                        <h3 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-850 text-white font-semibold text-xs transition-colors shrink-0 cursor-pointer shadow-md group/btn"
                      >
                        <span>Case study</span>
                        <span className="w-5 h-5 rounded-full bg-[#f3440f] text-white flex items-center justify-center font-bold text-[10px] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ============================================================== */}
        {/* SECTION 5: THE FORMULA / METHODOLOGY (4 PRECISION PHASES)       */}
        {/* ============================================================== */}
        <section id="formula" className="relative z-10 w-full bg-[#faf8f5] px-4 sm:px-6 py-16 sm:py-24 text-neutral-950 border-t border-neutral-200/60">
          <div className="w-full max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 bg-white text-[11px] font-medium text-neutral-700 mb-3 shadow-sm">
                  <Sliders className="w-3 h-3 text-[#f3440f]" />
                  <span>The Formula</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-[-0.035em] leading-[1.05] text-neutral-950">
                  Engineered for
                  <br />
                  <span className="text-[#f3440f]">pole position.</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
                We stripped the bloated agency model down to four high-precision phases. Every stage is timed, telemetry-backed, and built to deliver compounding speed.
              </p>
            </motion.div>

            {/* 4 Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {formulaSteps.map((step, idx) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative bg-white rounded-[26px] p-6 sm:p-7 border border-neutral-200/80 shadow-sm hover:shadow-md flex flex-col justify-between min-h-[300px] group transition-all"
                >
                  <div>
                    {/* Phase Number & Output Tag */}
                    <div className="flex items-center justify-between pb-5 border-b border-neutral-100">
                      <span className="font-[family-name:var(--font-syne)] font-black text-2xl text-[#f3440f] tracking-tight">
                        {step.phase}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-semibold text-neutral-700">
                        {step.accent}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-neutral-950 mt-5 tracking-tight group-hover:text-[#f3440f] transition-colors">
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ============================================================== */}
        {/* SECTION 6: PADDOCK VOICES / CLIENT TESTIMONIALS & RESULTS       */}
        {/* ============================================================== */}
        <section id="voices" className="relative z-10 w-full bg-white px-4 sm:px-6 py-16 sm:py-24 text-neutral-950 border-t border-neutral-200/60">
          <div className="w-full max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-100 text-[11px] font-medium text-neutral-700 mb-3 shadow-sm">
                  <Star className="w-3 h-3 text-[#f3440f] fill-[#f3440f]" />
                  <span>Paddock Voices</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-[-0.035em] leading-[1.05] text-neutral-950">
                  Trusted by founders.
                  <br />
                  <span className="text-[#f3440f]">Backed by results.</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
                Direct dispatches from chief executives and brand leaders who partnered with Vroom to claim category leadership.
              </p>
            </motion.div>

            {/* Testimonials Grid: 3 Distinct Editorial Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
              {testimonials.map((t, idx) => {
                const isIvory = idx === 0;
                return (
                  <motion.div
                    key={t.author}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    whileHover={{ y: -4 }}
                    className={`rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all ${
                      isIvory
                        ? "bg-[#fff8e8] text-neutral-950 border border-amber-200/50"
                        : "bg-[#faf8f5] text-neutral-950 border border-neutral-200/80"
                    }`}
                  >
                    <div>
                      {/* Rating & Highlight Metric Pill */}
                      <div className="flex items-center justify-between pb-6">
                        <div className="flex items-center gap-1 text-[#f3440f]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                            isIvory
                              ? "bg-neutral-900 text-[#fff8e8]"
                              : "bg-[#f3440f]/10 border border-[#f3440f]/20 text-[#d43707]"
                          }`}
                        >
                          {t.metric}
                        </span>
                      </div>

                      {/* Pull Quote */}
                      <p className="font-[family-name:var(--font-syne)] text-base sm:text-lg font-bold leading-relaxed text-neutral-900">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="pt-8 mt-8 border-t border-neutral-200/60 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-sm text-neutral-950">
                          {t.author}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {t.role} · <span className="font-semibold">{t.company}</span>
                        </div>
                      </div>
                      <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-neutral-950 text-white">
                        {t.author[0]}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ============================================================== */}
        {/* SECTION 7: TRACKSIDE SCHEDULE (GLOBAL GRAND PRIX ACTIVATIONS)   */}
        {/* ============================================================== */}
        <section id="schedule" className="relative z-10 w-full bg-[#faf8f5] px-4 sm:px-6 py-16 sm:py-24 text-neutral-950 border-t border-neutral-200/60">
          <div className="w-full max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 bg-white text-[11px] font-medium text-neutral-700 mb-3 shadow-sm">
                  <Calendar className="w-3 h-3 text-[#f3440f]" />
                  <span>Global Tour · 2025</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-[-0.035em] leading-[1.05] text-neutral-950">
                  Trackside presence.
                  <br />
                  <span className="text-[#f3440f]">Meet us on the circuit.</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
                We host private brand intensives, VIP client briefings, and design masterclasses live at marquee Grand Prix weekends throughout the season.
              </p>
            </motion.div>

            {/* 4 Grand Prix Weekend Cards with Vector Track Outlines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {races.map((race, idx) => (
                <motion.div
                  key={race.round}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
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
                      <div className="font-[family-name:var(--font-syne)] text-2xl font-black text-neutral-950 tracking-tight leading-none group-hover:text-[#f3440f] transition-colors">
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ============================================================== */}
        {/* SECTION 8: PADDOCK COLLECTIVE (TEAM & LEADERSHIP)               */}
        {/* ============================================================== */}
        <section id="collective" className="relative z-10 w-full bg-white px-4 sm:px-6 py-16 sm:py-24 text-neutral-950 border-t border-neutral-200/60">
          <div className="w-full max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-100 text-[11px] font-medium text-neutral-700 mb-3 shadow-sm">
                  <Compass className="w-3 h-3 text-[#f3440f]" />
                  <span>The Collective</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-[-0.035em] leading-[1.05] text-neutral-950">
                  The minds behind
                  <br />
                  <span className="text-[#f3440f]">every breakthrough.</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
                Veteran creative directors, digital architects, and telemetry strategists with a shared obsession for uncompromising speed.
              </p>
            </motion.div>

            {/* Team Grid: 4 Leadership Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
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
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-neutral-950 tracking-tight">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#f3440f]">
                      {member.role}
                    </div>
                    <p className="text-xs text-neutral-600 pt-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ============================================================== */}
        {/* SECTION 9: POLE POSITION CTA BANNER (RADIANT RACING GRADIENT)   */}
        {/* ============================================================== */}
        <section id="contact" className="relative z-10 w-full bg-white px-4 sm:px-6 py-16 sm:py-24 text-white">
          <div className="w-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#ea3906] via-[#c02d03] to-[#731300] p-8 sm:p-12 lg:p-16 border border-orange-400/30 shadow-[0_25px_60px_rgba(234,57,6,0.25)]"
            >
              {/* Background ambient accents */}
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#ff551f]/20 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-black/40 blur-[80px] pointer-events-none" />

              <div className="relative z-10 max-w-3xl">
                {/* Live Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#ffe3d6] mb-6 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#ff7a32] animate-pulse" />
                  <span>Booking Q2 2026 Sprints · Only 2 team allocations remaining</span>
                </div>

                <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.02]">
                  Ready to claim
                  <br />
                  <span className="text-[#ffe3d6]">pole position?</span>
                </h2>

                <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed mt-5 max-w-xl">
                  We collaborate with ambitious founders and category leaders ready to redefine their space with uncompromising craft and speed.
                </p>

                {/* Capability Selector Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-6">
                  {inquiryOptions.map((opt) => {
                    const isSelected = selectedInquiry === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => setSelectedInquiry(opt)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-white text-neutral-950 shadow-md"
                            : "bg-black/25 hover:bg-black/40 text-white/90 border border-white/20"
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
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-black/25 hover:bg-black/40 text-white text-xs sm:text-sm font-semibold border border-white/20 backdrop-blur-md transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-[#ff7a32]" />
                    <span>hello@vroom-racing.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* ============================================================== */}
        {/* SECTION 10: MASTER SITE FOOTER (CLEAN LIGHT THEME)              */}
        {/* ============================================================== */}
        <footer className="relative z-10 w-full bg-[#f6f4f0] px-4 sm:px-6 pt-16 pb-12 text-neutral-900 border-t border-neutral-200">
          <div className="w-full max-w-7xl mx-auto">
            {/* Top row: Brand & Newsletter */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-neutral-200">
              <div className="lg:col-span-5 space-y-4">
                <VroomLogo className="text-neutral-950" />
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm pt-2">
                  The design and strategy engine behind category-defining brands. Engineered with Formula precision, split-second speed, and obsessive craft.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#f3440f] text-neutral-700 hover:text-white flex items-center justify-center border border-neutral-200 shadow-sm transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#f3440f] text-neutral-700 hover:text-white flex items-center justify-center border border-neutral-200 shadow-sm transition-colors"
                    aria-label="Dribbble"
                  >
                    <FaDribbble className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#f3440f] text-neutral-700 hover:text-white flex items-center justify-center border border-neutral-200 shadow-sm transition-colors"
                    aria-label="X / Twitter"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#f3440f] text-neutral-700 hover:text-white flex items-center justify-center border border-neutral-200 shadow-sm transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Newsletter / Paddock Dispatch */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-neutral-200/80 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f3440f] mb-1.5">
                    <Send className="w-3.5 h-3.5" />
                    <span>The Paddock Dispatch</span>
                  </div>
                  <h4 className="font-[family-name:var(--font-syne)] text-xl font-bold text-neutral-950">
                    Monthly insights on high-velocity brand building.
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 mb-5">
                    No spam. Just teardowns of elite identity design, telemetry strategy, and race culture.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubscribed(true);
                    }}
                    className="flex flex-col sm:flex-row gap-2.5"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-full bg-neutral-50 border border-neutral-200 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#f3440f]"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#f3440f] hover:bg-[#ff551f] text-white text-xs font-semibold transition-colors cursor-pointer shrink-0"
                    >
                      {subscribed ? "Subscribed!" : "Join Dispatch"}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Link Directory */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-neutral-200 text-xs">
              <div>
                <div className="font-bold text-neutral-950 uppercase tracking-wider text-[11px] mb-3">Disciplines</div>
                <ul className="space-y-2 text-neutral-600">
                  <li><a href="#services" className="hover:text-neutral-950 transition-colors">Visual Systems</a></li>
                  <li><a href="#services" className="hover:text-neutral-950 transition-colors">Brand Positioning</a></li>
                  <li><a href="#services" className="hover:text-neutral-950 transition-colors">Digital Platforms</a></li>
                  <li><a href="#services" className="hover:text-neutral-950 transition-colors">Motion &amp; 3D</a></li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-neutral-950 uppercase tracking-wider text-[11px] mb-3">Paddock</div>
                <ul className="space-y-2 text-neutral-600">
                  <li><a href="#schedule" className="hover:text-neutral-950 transition-colors">2025 Calendar</a></li>
                  <li><a href="#works" className="hover:text-neutral-950 transition-colors">Selected Works</a></li>
                  <li><a href="#formula" className="hover:text-neutral-950 transition-colors">The Formula</a></li>
                  <li><a href="#voices" className="hover:text-neutral-950 transition-colors">Client Voices</a></li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-neutral-950 uppercase tracking-wider text-[11px] mb-3">Company</div>
                <ul className="space-y-2 text-neutral-600">
                  <li><a href="#about" className="hover:text-neutral-950 transition-colors">About Us</a></li>
                  <li><a href="#collective" className="hover:text-neutral-950 transition-colors">The Collective</a></li>
                  <li><a href="#contact" className="hover:text-neutral-950 transition-colors">Careers</a></li>
                  <li><a href="#contact" className="hover:text-neutral-950 transition-colors">Inquiries</a></li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-neutral-950 uppercase tracking-wider text-[11px] mb-3">HQ · Monaco</div>
                <p className="text-neutral-600 leading-relaxed">
                  Quai Antoine 1er<br />
                  Port Hercule · MC 98000<br />
                  Principauté de Monaco
                </p>
                <div className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-[10px] text-neutral-700 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>MONTE CARLO 16:35 CET</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Copyright & Moto */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-neutral-500">
              <div>
                © 2025 Vroom Creative Engine Inc. All rights reserved.
              </div>
              <div className="font-[family-name:var(--font-syne)] font-bold tracking-widest uppercase text-neutral-400">
                FEEL THE RUSH · FOLLOW THE FORMULA
              </div>
            </div>
          </div>
        </footer>

      </div>

    </div>
  );
}
