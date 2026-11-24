"use client";

import React from "react";
import { motion } from "framer-motion";
import { EASING_EMIL } from "./variants";

export interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  as: Component = "span",
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <Component className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: delay + i * stagger,
              ease: EASING_EMIL,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
