import { motion } from "framer-motion";
import { Link } from "wouter";

interface Props { href: string; children: React.ReactNode; className?: string; external?: boolean; }

export default function MagneticLink({ href, children, className, external }: Props) {
  if (external) return (
    <motion.a href={href} className={className} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} target="_blank" rel="noopener noreferrer">
      {children}
    </motion.a>
  );
  return (
    <Link href={href}>
      <motion.span className={`inline-block ${className ?? ""}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {children}
      </motion.span>
    </Link>
  );
}