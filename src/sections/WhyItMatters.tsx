'use client';

import { motion } from 'framer-motion';

export default function WhyItMatters() {
  return (
    <section className="relative py-20 px-6">
      <div className="mb-6">
        <div className="mono text-[11px] text-white/30">01</div>
        <div className="mono text-[11px] tracking-[0.12em] uppercase text-white/40">
          WHY IT MATTERS
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-start">
        <motion.div
          className="space-y-6"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          <h2 className="text-3xl font-serif font-bold">The Problem</h2>
          <p className="text-muted">Social impact initiatives struggle with scalability and measuring real-world impact due to fragmented approaches.</p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          <h2 className="text-3xl font-serif font-bold">Our Intervention</h2>
          <p className="text-muted">We apply systems design principles to create integrated, adaptive, and measurable solutions driven by community needs.</p>
        </motion.div>
      </div>
    </section>
  );
}
