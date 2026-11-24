"use client";

import React, { useState, useEffect, useRef } from "react";
import { ScrollProgress } from "@/motions";
import {
  Header,
  Footer,
  HeroSection,
  AboutSection,
  ServicesSection,
  WorksSection,
  FormulaSection,
  InsightsSection,
  VoicesSection,
  ScheduleSection,
  CollectiveSection,
  ContactSection,
} from "@/components";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [logoColor, setLogoColor] = useState<"white" | "orange">("white");
  const aboutRef = useRef<HTMLElement>(null);
  const ctaBannerRef = useRef<HTMLDivElement>(null);

  const [activeNav, setActiveNav] = useState("Home");
  const navItems = ["Home", "Race calendar", "Drivers", "Teams", "Stories"];
  const navLinks: Record<string, string> = {
    Home: "#",
    "Race calendar": "#schedule",
    Drivers: "#collective",
    Teams: "#works",
    Stories: "#insights",
  };

  const [selectedInquiry, setSelectedInquiry] = useState("Full Rebrand");

  useEffect(() => {
    const handleScroll = () => {
      const headerY = 55;
      let isOverOrange = false;

      // 1. While Section 2 has not scrolled up to the header, we are in the orange Hero section
      if (aboutRef.current) {
        const aboutTop = aboutRef.current.getBoundingClientRect().top;
        if (aboutTop > headerY) {
          isOverOrange = true;
        }
      } else if (window.scrollY < 40) {
        isOverOrange = true;
      }

      // 2. While the fixed header is over the orange Pole Position CTA Banner in Section 10
      if (!isOverOrange && ctaBannerRef.current) {
        const ctaRect = ctaBannerRef.current.getBoundingClientRect();
        if (ctaRect.top <= headerY && ctaRect.bottom >= 15) {
          isOverOrange = true;
        }
      }

      setLogoColor(isOverOrange ? "white" : "orange");
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-neutral-950 flex flex-col items-center">
      {/* Telemetry Scroll Depth Progress Bar */}
      <ScrollProgress />

      {/* Fixed Persistent Header */}
      <Header
        scrolled={scrolled}
        logoColor={logoColor}
        activeNav={activeNav}
        onNavClick={setActiveNav}
        navItems={navItems}
        navLinks={navLinks}
      />

      {/* Main Page Content */}
      <main className="w-full flex flex-col items-center">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: About Us */}
        <AboutSection ref={aboutRef} />

        {/* Section 3: Clear Systems / Services */}
        <ServicesSection />

        {/* Section 4: Selected Works */}
        <WorksSection />

        {/* Section 5: The Formula */}
        <FormulaSection />

        {/* Section 6: Paddock Insights */}
        <InsightsSection />

        {/* Section 7: Paddock Voices */}
        <VoicesSection />

        {/* Section 8: Trackside Schedule */}
        <ScheduleSection />

        {/* Section 9: The Collective */}
        <CollectiveSection />

        {/* Section 10: Pole Position CTA Banner */}
        <ContactSection
          ref={ctaBannerRef}
          selectedInquiry={selectedInquiry}
          onInquirySelect={setSelectedInquiry}
        />

        {/* Section 11: Master Site Footer */}
        <Footer />
      </main>
    </div>
  );
}
