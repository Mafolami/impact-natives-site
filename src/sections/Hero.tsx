'use client';

import { motion } from 'framer-motion';
import ParticleField from '@/components/primitives/ParticleField';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <ParticleField />
      <div className="relative z-10 max-w-4xl">
        {/* Main text (centered) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* First line: Designing systems */}
          <motion.h1
            className="text-6xl md:text-8xl font-serif font-bold leading-none"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
          >
            Designing{' '}
            <span className="serif-italic" style={{ color: 'var(--accent)', fontStyle: 'italic', opacity: 0.7 }}>
              systems
            </span>
          </motion.h1>

          {/* Second line: that make impact work */}
          <motion.h1
            className="text-6xl md:text-8xl font-serif font-bold leading-none"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
          >
            that make{' '}
            <span className="serif-italic" style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
              impact
            </span>{' '}
            work
          </motion.h1>
        </div>

        {/* SCROLL on the left edge, mid-height, rotated -90deg */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <motion.p
            className="text-[10px] font-mono uppercase tracking-[0.3em]"
            style={{ color: 'var(--muted)', opacity: 0.3 }}
            initial={{ rotate: -90 }}
            animate={{ rotate: -90 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            SCROLL
          </motion.p>
        </div>

        {/* Subtext + CTA at bottom-right */}
        <div className="absolute bottom-0 right-0">
          <div className="mb-6">
            {/* Subtext: Systems · Impact · Systems */}
            <motion.p
              className="text-xs font-mono uppercase tracking-[0.3em]"
              style={{ color: 'var(--muted)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Systems · Impact · Systems
            </motion.p>
            {/* CTA buttons */}
            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <a href="#work" className="px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg border border-white/20 text-center">
                Explore Work
              </a>
              <a href="#contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg border border-white/20 text-center">
                Work With Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
