'use client';

import { Variants, motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

const variants: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(50px)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0px)',
  },
};

interface FadeInProps {
  children: ReactNode;
}

export default function FadeIn({ children }: FadeInProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { once: true });

  return (
    <motion.div
      ref={divRef}
      variants={variants}
      transition={{ duration: 1 }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      data-testid="fadeIn"
    >
      {children}
    </motion.div>
  );
}
