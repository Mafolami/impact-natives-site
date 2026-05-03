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
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
}

export function ScrollReveal({ children, className = '', staggerChildren = 0.12, delayChildren = 0.2, once = true }: Props) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 1 },
        animate: { opacity: 1, transition: { staggerChildren, delayChildren } },
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once, margin: '0px 0px -100px 0px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

ScrollReveal.Item = function ScrollRevealItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={defaultVariant} className={className}>
      {children}
    </motion.div>
  );
};