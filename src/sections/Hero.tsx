'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <motion.h1
          className="text-5xl md:text-6xl font-serif font-bold leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          Impact Natives
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted max-w-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          Digital systems and innovation lab for social impact
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          <a href="#work" className="px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg border border-white/20 text-center">
            Explore Work
          </a>
          <a href="#contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg border border-white/20 text-center">
            Work With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
