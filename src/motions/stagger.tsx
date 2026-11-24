"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { staggerContainer, staggerItem } from "./variants";

export interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  viewportOnce?: boolean;
  viewportMargin?: string;
}

export function StaggerContainer({
  children,
  staggerChildren = 0.08,
  delayChildren = 0.05,
  className = "",
  viewportOnce = true,
  viewportMargin = "-40px",
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: viewportMargin as any }}
      custom={{ staggerChildren, delayChildren }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({
  children,
  className = "",
  ...props
}: StaggerItemProps) {
  return (
    <motion.div variants={staggerItem} className={className} {...props}>
      {children}
    </motion.div>
  );
}
