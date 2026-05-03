import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
};

interface SectionLabelProps {
  children: React.ReactNode;
  variant?: Variants;
  className?: string;
}

export const SectionLabel = ({ children, variant = fadeInUp, className = '' }: SectionLabelProps) => {
  return (
    <motion.h2
      variants={variant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '0px 0px -200px 0px' }}
      className={`text-4xl md:text-5xl font-serif font-bold text-white mb-12 ${className}`}
    >
      {children}
    </motion.h2>
  );
};