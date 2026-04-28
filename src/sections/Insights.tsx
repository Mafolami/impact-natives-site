'use client';

import { motion } from 'framer-motion';
import { insights } from '@/lib/data';

export default function Insights() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          Insights
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {insights.map((insight) => (
            <motion.div
              key={insight.id}
              className="bg-black/30 hover:bg-black/50 rounded-xl p-6 transition-all duration-500"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: insight.id * 0.1, ease: [0.21, 0.47, 0.32, 0.98] } }}
            >
              <h3 className="text-xl font-serif font-bold mb-2">{insight.title}</h3>
              <p className="text-sm text-muted mb-2">{insight.date}</p>
              <p className="text-base text-muted line-clamp-3">{insight.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
