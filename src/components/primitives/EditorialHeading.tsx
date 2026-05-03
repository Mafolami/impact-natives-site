import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const SIGNATURE_EASE = [0.21, 0.47, 0.32, 0.98] as const;

const defaultVariant: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: SIGNATURE_EASE } },
};

interface Props {
  children: ReactNode;
  className?: string;
}

export function EditorialHeading({ children, className = '' }: Props) {
  return (
    <motion.h2
      variants={defaultVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '0px 0px -200px 0px' }}
      className={`font-serif font-bold ${className}`}
      style={{ fontFamily: 'Cormorant Garamond, serif' }}
    >
      {children}
    </motion.h2>
  );
}