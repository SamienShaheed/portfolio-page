'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/fade-in';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Linkedin, Mail, Bot } from 'lucide-react';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -12]);

  return (
    <div ref={heroRef}>
      <FadeIn className="hero-section blob-container">
        {!reduce ? (
          <>
            <motion.div className="blob" style={{ y: y1 }} />
            <motion.div className="blob" style={{ y: y2 }} />
            <motion.div className="blob" style={{ y: y3 }} />
            <motion.div className="blob" style={{ y: y4 }} />
            <motion.div className="blob" style={{ y: y5 }} />
          </>
        ) : (
          <>
            <div className="blob" />
            <div className="blob" />
            <div className="blob" />
            <div className="blob" />
            <div className="blob" />
          </>
        )}

        <div className="hero-content">
          <div className="flex justify-center">
            <Avatar className="h-40 w-40 mb-6">
              <AvatarImage src="/avatar.jpg" alt="Samien Shaheed" />
              <AvatarFallback>SS</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Samien Shaheed
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-4 flex-wrap">
            <Button className="social-button" asChild>
              <Link href="https://github.com/SamienShaheed">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button className="social-button" asChild>
              <Link href="https://linkedin.com/in/samienshaheed/">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button className="social-button" asChild>
              <Link href="mailto:samienshaheed@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Link>
            </Button>
            <Button className="social-button" asChild>
              <Link href="https://huggingface.co/SamienShaheed">
                <Bot className="mr-2 h-4 w-4" />
                Hugging Face
              </Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default HeroSection;

