'use client';

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 h-[3px] bg-primary/70 origin-left z-50 pointer-events-none"
      style={{ scaleX: reduce ? undefined : scaleX }}
    />
  );
}

