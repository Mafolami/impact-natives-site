'use client';

import { motion } from 'framer-motion';
import { caseStudies } from '@/lib/data';
import { Link } from 'wouter';

export default function CaseStudies() {
  return (
    <section className="relative py-20 px-6">
      <div className="mb-6">
        <div className="mono text-[11px] text-white/30">01</div>
        <div className="mono text-[11px] tracking-[0.12em] uppercase text-white/40">
          CASE STUDIES
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          Case Studies
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="bg-black/30 hover:bg-black/50 rounded-xl p-6 overflow-hidden transition-all duration-500"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] } }}
            >
              <div className="h-48 w-full bg-gray-800 mb-4 rounded" />
              <h3 className="text-xl font-serif font-bold mb-2">{study.title}</h3>
              <p className="text-sm text-muted mb-2">{study.region} • {study.sector}</p>
              <p className="text-base text-muted line-clamp-3">{study.description}</p>
              <Link href={`/work#${study.id}`} className="mt-4 inline-block text-sm font-medium text-accent hover:text-white transition-colors">
                Read Case Study →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}