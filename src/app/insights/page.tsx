"use client";

import { motion } from 'framer-motion';
import { insights } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-serif font-bold mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
          >
            Insights
          </motion.h1>
          <p className="text-muted mb-8">Journal-style reflections on systems thinking and social impact.</p>
          <div className="space-y-8">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.id}
                className="bg-black/30 hover:bg-black/50 rounded-xl p-8 transition-all duration-500"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-2xl font-serif font-bold mb-3">{insight.title}</h2>
                <p className="text-sm text-muted mb-4">{insight.date}</p>
                <p className="text-base text-muted line-clamp-4">{insight.excerpt}</p>
                <a href="#" className="mt-4 inline-block text-sm font-medium text-accent hover:text-white transition-colors">
                  Read more →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
