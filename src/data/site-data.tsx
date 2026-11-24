import React from "react";
import { LayoutGrid, Sparkles, Layers, Disc, Rocket, Grid2x2 } from "lucide-react";

// --- Partner Brand Icons ---
export function EnnLabsLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <LayoutGrid className="w-3 h-3 text-neutral-700 shrink-0" />
      <span>ennLabs</span>
    </div>
  );
}

export function MastermallLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <Sparkles className="w-3 h-3 text-neutral-700 shrink-0" />
      <span>Mastermall</span>
    </div>
  );
}

export function FindexLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <Layers className="w-3 h-3 text-neutral-700 shrink-0" />
      <span>Findex</span>
    </div>
  );
}

export function ManoflexLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <Disc className="w-3 h-3 text-neutral-700 shrink-0" />
      <span>Manoflex</span>
    </div>
  );
}

export function LaunchSimpleLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <Rocket className="w-3 h-3 text-neutral-700 shrink-0" />
      <span>LaunchSimple</span>
    </div>
  );
}

export function FourpointsLogo() {
  return (
    <div className="flex items-center gap-1 font-bold text-[9.5px] sm:text-[10px] tracking-tight text-neutral-800">
      <Grid2x2 className="w-3 h-3 text-neutral-700 shrink-0" />
      <span>Fourpoints</span>
    </div>
  );
}

// --- Data: Flagship Showcase Projects ---
export const projectCategories = [
  "All",
  "Automotive & EV",
  "Luxury & Timepieces",
  "Digital Platforms",
] as const;

export interface Project {
  title: string;
  category: string;
  deliverables: string[];
  year: string;
  impact: string;
  description: string;
  image: string;
}

export const allProjects: Project[] = [
  {
    title: "Apex Dynamics",
    category: "Automotive & EV",
    deliverables: ["Brand Identity", "Aerodynamics", "3D Configurator"],
    year: "2025",
    impact: "+310% Pre-Orders",
    description:
      "Sculpting the global identity, aerodynamic narrative, and digital bespoke configurator for next-generation electric hypercars.",
    image: "/hero-f1-racer-hd.jpg",
  },
  {
    title: "Chronos Veloce",
    category: "Luxury & Timepieces",
    deliverables: ["Product Direction", "Packaging", "Campaign"],
    year: "2025",
    impact: "Sold Out in 4.2 Min",
    description:
      "A limited-production titanium chronograph inspired by Formula telemetry and split-second precision on the Monaco grid.",
    image: "/driver-papaya-blur.jpg",
  },
  {
    title: "Telemetry One",
    category: "Digital Platforms",
    deliverables: ["Design System", "Real-time Telemetry", "Web App"],
    year: "2024",
    impact: "40k Live Data Nodes",
    description:
      "An enterprise motorsport telemetry interface that translates high-velocity telemetry data into instantaneous strategic clarity.",
    image: "/f1-car-motion.jpg",
  },
];

// --- Data: The Formula Steps ---
export interface FormulaStep {
  phase: string;
  accent: string;
  title: string;
  subtitle: string;
  description: string;
  output: string;
}

export const formulaSteps: FormulaStep[] = [
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
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Vroom transformed our brand from just another tech startup into the undisputed category leader. Their speed, taste, and obsessive precision are unmatched in the industry.",
    author: "Marcus Vance",
    role: "Founder & CEO",
    company: "Apex Dynamics",
    metric: "+$45M Series B valuation",
    avatar: "/card-director-hd.jpg",
  },
  {
    quote:
      "Working with Vroom felt like having a championship pit crew behind our launch. Every sprint was executed with jaw-dropping creative that stunned our investors.",
    author: "Elena Rostova",
    role: "Chief Brand Officer",
    company: "Chronos Group",
    metric: "Sold out in 4.2 minutes",
    avatar: "/card-woman-clean.jpg",
  },
  {
    quote:
      "They don't deliver pretty slides; they deliver strategic engines that drive enterprise conversion. The ROI was clear within the first 60 days of our rebrand.",
    author: "David Thorne",
    role: "Managing Partner",
    company: "Findex Ventures",
    metric: "+180% Inbound dealflow",
    avatar: "/strategist-warm-bg.jpg",
  },
];

// --- Data: Trackside Schedule ---
export interface Race {
  round: string;
  status: string;
  title: string;
  location: string;
  dates: string;
  activation: string;
  trackSvg: React.ReactNode;
}

export const races: Race[] = [
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
export interface TeamMember {
  name: string;
  role: string;
  discipline: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Elena Rostova",
    role: "Executive Creative Director",
    discipline: "Haute Direction · Identity",
    bio: "Pioneering cross-disciplinary design systems for luxury motorsport and editorial media.",
    image: "/driver-helmet-profile.jpg",
  },
  {
    name: "Julian Thorne",
    role: "Head of Brand Strategy",
    discipline: "Market Positioning · Telemetry",
    bio: "Specializing in high-stakes category repositioning and data-informed brand acceleration.",
    image: "/driver-81-back.jpg",
  },
  {
    name: "Kaito Tanaka",
    role: "Lead Motion & 3D Technologist",
    discipline: "Real-time 3D · Motion Systems",
    bio: "Directing cinematic 3D digital experiences and high-frame-rate interaction dynamics.",
    image: "/f1-car-motion.jpg",
  },
  {
    name: "Sophia Al-Mansoor",
    role: "VP of Digital Products",
    discipline: "Design Systems · Enterprise UX",
    bio: "Building robust, scalable digital ecosystems that turn complex workflows into pure elegance.",
    image: "/driver-papaya-blur.jpg",
  },
];

// --- Data: Service Systems ---
export interface ServiceSystem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const serviceSystems: ServiceSystem[] = [
  {
    id: "01",
    title: "Brand Strategy",
    tagline: "Market Positioning · Telemetry Architecture",
    description:
      "We strip away market noise to define your brand's core positioning, strategic narrative, and telemetry metrics. Every decision is calibrated to outpace competitors and create an undeniable category leader.",
    deliverables: ["Market Telemetry", "Brand Architecture", "Positioning Matrix", "Verbal Identity"],
  },
  {
    id: "02",
    title: "Visual Identity",
    tagline: "Haute Direction · Formula Precision",
    description:
      "We create a visual system that gives the brand a distinct, unmistakable form across every touchpoint — from digital platforms to race-spec collateral. Built to remove visual clutter and command lasting memorability.",
    deliverables: ["Design Systems", "Typography & Grid", "Art Direction", "Brand Guidelines"],
  },
  {
    id: "03",
    title: "Digital Platforms & Telemetry",
    tagline: "High-Frame-Rate Digital Engineering",
    description:
      "Designing and engineering lightning-fast web experiences, bespoke 3D configurators, and real-time telemetry platforms that convert high-intent interest into measurable velocity.",
    deliverables: ["Next.js Architecture", "Interactive 3D", "Design Engineering", "Speed Optimization"],
  },
  {
    id: "04",
    title: "Motion & Racing Content",
    tagline: "Cinematic Narratives · High Velocity",
    description:
      "From high-velocity 3D motion design to editorial racing documentaries — we craft kinetic visuals that seize attention, articulate complex engineering, and imprint an unforgettable brand story.",
    deliverables: ["3D Animation", "Campaign Creative", "Sound & Timing", "Social Systems"],
  },
];

// --- Data: Paddock Insights & Dispatches ---
export const insightCategories = ["All", "Strategy", "Telemetry", "Culture"] as const;

export interface Insight {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
}

export const paddockInsights: Insight[] = [
  {
    title: "The Formula For Category Leadership in Luxury Motorsport",
    category: "Strategy",
    date: "May 24, 2025",
    readTime: "5 min read",
    image: "/driver-helmet-profile.jpg",
    excerpt: "Why high-velocity brands need aerodynamic visual systems that eliminate friction and command instant recognition.",
  },
  {
    title: "Real-Time Telemetry: Transforming Complex Data Into Pure Elegance",
    category: "Telemetry",
    date: "May 21, 2025",
    readTime: "4 min read",
    image: "/f1-car-motion.jpg",
    excerpt: "How split-second telemetry visualization enables decisive executive calls on and off the racetrack.",
  },
  {
    title: "Inside The Paddock: The Art Direction Behind Modern Racing",
    category: "Culture",
    date: "May 18, 2025",
    readTime: "6 min read",
    image: "/driver-81-back.jpg",
    excerpt: "Exploring the cultural renaissance of Formula 1 through haute typography, motion blur, and uncompromising craft.",
  },
];

export const inquiryOptions = [
  "Full Rebrand",
  "Visual Identity",
  "Digital Product",
  "Sprint Intensive",
] as const;
