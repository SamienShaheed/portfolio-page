'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { HTMLAttributes, ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface StaggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
}

export function Stagger({ children, delay = 0, ...rest }: StaggerProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : 0.08,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  from?: Direction;
  delay?: number;
}

export function Reveal({ children, from = 'up', delay = 0, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  const axis = from === 'up' ? { y: 20 } : from === 'down' ? { y: -20 } : from === 'left' ? { x: 24 } : { x: -24 };

  return (
    <motion.div
      variants={{
        hidden: reduce ? {} : { opacity: 0, ...axis },
        show: { opacity: 1, x: 0, y: 0 },
      }}
      transition={reduce ? { duration: 0 } : { duration: 0.4, ease: 'easeOut', delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

