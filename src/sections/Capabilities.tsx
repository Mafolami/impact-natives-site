'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const capabilities = [
  { title: 'Systems Design', description: 'Resilient, adaptable, and human-centered systems.', icon: '🔧' },
  { title: 'Digital Innovation', description: 'Cutting-edge digital tools that drive impact at scale.', icon: '💡' },
  { title: 'Research & Strategy', description: 'Deep research and effective impact measurement.', icon: '📊' },
  { title: 'Community Engagement', description: 'Participatory processes that empower communities.', icon: '🤝' },
  { title: 'Capacity Building', description: 'Training teams with skills to sustain and grow impact.', icon: '🌱' },
  { title: 'Policy & Advocacy', description: 'Creating enabling environments for innovation.', icon: '🏛️' },
];

export default function Capabilities() {
  return (
    <section className="relative py-20 px-6">
      <div className="mb-6">
        <div className="mono text-[11px] text-white/30">01</div>
        <div className="mono text-[11px] tracking-[0.12em] uppercase text-white/40">
          CAPABILITIES
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          Our Capabilities
        </motion.h2>

        <div className="grid grid-cols-2 gap-8">
          {/* Left column: Editorial intro text */}
          <div>
            <motion.p
              className="text-lg text-muted"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
            >
              We build capabilities that endure—structured approaches that compound impact over time. Each pillar represents a distinct way we engage with complex systems, designed to be greater than the sum of its parts.
            </motion.p>
          </div>

          {/* Right column: Numbered list */}
          <div className="space-y-6">
            {/* Capability 1: Strategy */}
            <motion.div
              key="1"
              className="flex items-start gap-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0">
                <div className="border-t border-soft py-2 mono text-sm">
                  <span className="text-[var(--accent)]">I.</span> Strategy
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold mb-2">
                  Map interconnections. Identify leverage points. Design interventions that compound.
                </h3>
                <p className="text-sm text-muted">
                  We analyze systems holistically to find where small shifts create large effects.
                </p>
              </div>
            </motion.div>

            {/* Capability 2: Systems Design */}
            <motion.div
              key="2"
              className="flex items-start gap-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0">
                <div className="border-t border-soft py-2 mono text-sm">
                  <span className="text-[var(--accent)]">II.</span> Systems Design
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold mb-2">
                  Resilient, adaptable, and human-centered systems.
                </h3>
                <p className="text-sm text-muted">
                  We design systems that evolve with changing conditions and serve people first.
                </p>
              </div>
            </motion.div>

            {/* Capability 3: Product Thinking */}
            <motion.div
              key="3"
              className="flex items-start gap-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0">
                <div className="border-t border-soft py-2 mono text-sm">
                  <span className="text-[var(--accent)]">III.</span> Product Thinking
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold mb-2">
                  Cutting-edge digital tools that drive impact at scale.
                </h3>
                <p className="text-sm text-muted">
                  We build products that communities actually want to use and maintain.
                </p>
              </div>
            </motion.div>

            {/* Capability 4: Narrative Design */}
            <motion.div
              key="4"
              className="flex items-start gap-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0">
                <div className="border-t border-soft py-2 mono text-sm">
                  <span className="text-[var(--accent)]">IV.</span> Narrative Design
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold mb-2">
                  Deep research and effective impact measurement.
                </h3>
                <p className="text-sm text-muted">
                  We craft stories and frameworks that make complex systems understandable and actionable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
