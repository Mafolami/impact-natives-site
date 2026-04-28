'use client';

import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          Our Manifesto
        </motion.h2>

        <motion.p
          className="text-lg text-muted"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          We believe in the power of systems thinking to drive social impact. Our work bridges technology, design, and community to create scalable solutions.
        </motion.p>

        <motion.p
          className="text-lg text-muted"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          We are committed to ethical innovation, open collaboration, and long-term sustainability.
        </motion.p>
      </div>
    </section>
  );
}
