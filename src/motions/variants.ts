import type { Variants, Transition } from "framer-motion";

/**
 * Emil Kowalski design-engineering motion standards
 * Ease-out curve for natural physical entry
 */
export const EASING_EMIL = [0.16, 1, 0.3, 1] as const;

/**
 * Standard spring configs for interactive elements
 */
export const SPRING_SNAPPY: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

export const SPRING_GENTLE: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 24,
};

export const SPRING_BOUNCY: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 25,
};

/**
 * FadeIn variants with customizable direction
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? 0.5,
      delay: custom.delay ?? 0,
      ease: EASING_EMIL,
    },
  }),
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? 0.5,
      delay: custom.delay ?? 0,
      ease: EASING_EMIL,
    },
  }),
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration ?? 0.5,
      delay: custom.delay ?? 0,
      ease: EASING_EMIL,
    },
  }),
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration ?? 0.5,
      delay: custom.delay ?? 0,
      ease: EASING_EMIL,
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (custom = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom.duration ?? 0.45,
      delay: custom.delay ?? 0,
      ease: EASING_EMIL,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerChildren ?? 0.08,
      delayChildren: custom.delayChildren ?? 0.05,
    },
  }),
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASING_EMIL,
    },
  },
};
