"use client";

import { motion } from 'framer-motion';
import { caseStudies } from '@/lib/data';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Work() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
            >
              <span className="text-xs font-mono tracking-widest uppercase text-muted/60">
                Case Studies
              </span>
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs font-mono tracking-widest uppercase text-muted/60">
                {caseStudies.length.toString().padStart(2, '0')} Projects
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 } }}
            >
              Our Work
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-muted max-w-2xl leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 } }}
            >
              Selected projects where we've applied systems thinking to unlock impact. Each engagement demonstrates our commitment to understanding root causes and designing interventions that address underlying structural challenges.
            </motion.p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-3 auto-rows-max">
            {caseStudies.map((study, index) => {
              const isFeature = index % 3 === 0;
              const colSpan = isFeature ? "md:col-span-2" : "md:col-span-1";
              const rowSpan = isFeature ? "md:row-span-2" : "md:row-span-1";

              return (
                <motion.div
                  key={study.id}
                  className={`${colSpan} ${rowSpan} group relative border-b border-white/10 hover:border-white/30 transition-colors duration-500 p-0`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: [0.21, 0.47, 0.32, 0.98]
                    },
                  }}
                  whileHover={{ y: -4 }}
                >
                  {/* Accent left border on hover */}
                  <div className="absolute left-0 top-0 h-0 group-hover:h-full w-0.5 bg-accent transition-all duration-500" />

                  <div className="pl-0 group-hover:pl-4 transition-all duration-500">
                    {/* Index and metadata */}
                    <div className="flex items-baseline justify-between mb-4 pt-6">
                      <span className="text-2xl md:text-3xl font-mono text-muted/40 font-bold">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="text-xs font-mono tracking-widest uppercase text-muted/60">
                        {study.year}
                      </span>
                    </div>

                    {/* Image placeholder with gradient */}
                    <div className={`w-full mb-6 rounded-sm overflow-hidden bg-gradient-to-br from-[#1e2030] via-[#171a25] to-[#141620] border border-white/5 ${ isFeature ? 'h-64 md:h-80' : 'h-48'}`}>
                      <div
                        className="w-full h-full relative"
                        style={{
                          backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`,
                          backgroundSize: '24px 24px'
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block text-xs font-medium tracking-wide uppercase text-accent/80">
                          {study.sector}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 group-hover:underline transition-all duration-300">
                        {study.title}
                      </h3>

                      {study.subtitle && (
                        <p className="text-sm font-medium text-muted/80 tracking-wide mb-3">
                          {study.subtitle}
                        </p>
                      )}

                      <p className={`text-sm leading-relaxed text-muted mb-4 ${isFeature ? '' : 'line-clamp-3'}`}>
                        {study.description}
                      </p>

                      {/* Metadata */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="text-xs text-muted/70 font-mono tracking-widest">
                          {study.region}
                        </span>
                        {study.outcome && (
                          <span className="text-xs text-accent/70 font-mono tracking-widest">
                            • {study.outcome}
                          </span>
                        )}
                      </div>

                      {/* Tags */}
                      {study.tags && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs px-2 py-1 rounded text-muted/70 border border-white/10 group-hover:border-white/20 transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/work/${study.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300"
                    >
                      Read Case Study
                      <span className="text-xs">—</span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
