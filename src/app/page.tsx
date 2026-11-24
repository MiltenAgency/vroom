"use client";

import { useState } from "react";
import { FloatingNavbar } from "./floating-navbar";
import { ScrollProgress } from "@/motions";
import {
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
  const [selectedInquiry, setSelectedInquiry] = useState("Full Rebrand");

  return (
    <div className="w-full min-h-screen bg-white text-neutral-950 flex flex-col items-center">
      {/* Telemetry Scroll Depth Progress Bar */}
      <ScrollProgress />

      <FloatingNavbar />

      {/* Main Page Content */}
      <main className="w-full flex flex-col items-center">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: About Us */}
        <AboutSection />

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
          selectedInquiry={selectedInquiry}
          onInquirySelect={setSelectedInquiry}
        />

        {/* Section 11: Master Site Footer */}
        <Footer />
      </main>
    </div>
  );
}
