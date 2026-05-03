'use client';

import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section className="relative py-20 px-6">
      <div className="mb-6">
        <div className="mono text-[11px] text-white/30">01</div>
        <div className="mono text-[11px] tracking-[0.12em] uppercase text-white/40">
          MANIFESTO
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          Our Manifesto
        </motion.h2>

        <hr className="my-6 border-t border-white/12" />

        <motion.p
          className="serif-italic text-[clamp(40px,5.5vw,76px)] leading-[1.6]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          Systems only matter when they change behaviour.
        </motion.p>

        <motion.p
          className="serif-italic text-[clamp(40px,5.5vw,76px)] leading-[1.6]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          Impact is not <span className="serif-italic" style={{ color: 'var(--accent)', fontStyle: 'italic' }}>messaging</span> — it is structure.
        </motion.p>

        <motion.p
          className="serif-italic text-[clamp(40px,5.5vw,76px)] leading-[1.6]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          We design for <span className="serif-italic" style={{ color: 'var(--accent)', fontStyle: 'italic' }}>consequence</span>, not content.
        </motion.p>

        <motion.div
          className="serif-italic text-right text-white/40 mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          — IMPACT NATIVES
        </motion.div>
      </div>
    </section>
  );
}
