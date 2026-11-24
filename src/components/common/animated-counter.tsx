"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    // If og screenshot or headless capture, stay at exact value
    if (typeof window !== "undefined" && window.location.search.includes("og=true")) {
      setCount(value);
      return;
    }

    if (!isInView) return;

    const duration = 1400; // ms
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

    setCount(0);
    const animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [isInView, value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {count}{suffix}
    </span>
  );
}
