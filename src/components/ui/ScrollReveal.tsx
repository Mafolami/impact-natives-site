import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props { children: React.ReactNode; delay?: number; className?: string; id?: string; }

export default function ScrollReveal({ children, delay = 0, className, id }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}