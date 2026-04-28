"use client";

import { motion } from 'framer-motion';
import { caseStudies } from '@/lib/data';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function WorkDetail() {
  const params = useParams();
  const id = params.id as string;
  const currentIndex = caseStudies.findIndex((c) => c.id === id);
  const study = caseStudies[currentIndex];

  if (!study) notFound();

  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.6 } }}
              className="mb-8"
            >
              <Link
                href="/work"
                className="text-xs font-mono tracking-widest uppercase text-muted/60 hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                <span>←</span> Back to Work
              </Link>
            </motion.div>

            {/* Metadata eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.6, delay: 0.05 } }}
              className="text-xs font-mono tracking-widest uppercase text-muted/60 mb-4 flex gap-2 flex-wrap"
            >
              <span>{study.sector}</span>
              <span>•</span>
              <span>{study.region}</span>
              <span>•</span>
              <span>{study.year}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
              className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-6"
            >
              {study.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 } }}
              className="text-lg text-muted/80 tracking-wide mb-6"
            >
              {study.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.15 } }}
              className="text-base md:text-lg text-muted leading-[1.9] max-w-3xl"
            >
              {study.description}
            </motion.p>
          </div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.2 } }}
          className="relative h-[50vh] md:h-[60vh] -mx-6 md:-mx-12 bg-gradient-to-br from-[#1e2030] via-[#171a25] to-[#141620] border-t border-b border-white/10"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        >
          {/* Metadata overlay bottom-left */}
          <div className="absolute bottom-6 left-6 flex gap-6 text-xs font-mono uppercase tracking-widest text-muted/60">
            <span>Duration: {study.duration}</span>
            <span>Client: {study.client}</span>
          </div>
        </motion.div>

        {/* Metrics Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
          className="border-b border-white/10 my-12"
        >
          <div className="px-6 md:px-12 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {study.metrics.map((metric, idx) => (
                <div key={idx} className={`${idx > 0 ? 'md:border-l md:border-white/10 md:pl-6' : ''}`}>
                  <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted/60">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Body Content */}
        <div className="px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Challenge Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={sectionVariants}
              className="mb-16 md:mb-20 pt-12"
            >
              <div className="text-xs font-mono tracking-widest uppercase text-muted/40 mb-4">
                01 — Challenge
              </div>
              <p className="text-base md:text-lg text-muted leading-[1.85]">
                {study.challenge}
              </p>
            </motion.section>

            {/* Approach Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={sectionVariants}
              className="mb-16 md:mb-20 pt-12 border-t border-white/10"
            >
              <div className="text-xs font-mono tracking-widest uppercase text-muted/40 mb-4">
                02 — Approach
              </div>
              <p className="text-base md:text-lg text-muted leading-[1.85]">
                {study.approach}
              </p>
            </motion.section>

            {/* Outcomes Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={sectionVariants}
              className="mb-16 md:mb-20 pt-12 border-t border-white/10"
            >
              <div className="text-xs font-mono tracking-widest uppercase text-muted/40 mb-4">
                03 — Outcomes
              </div>
              <p className="text-base md:text-lg text-muted leading-[1.85] mb-8">
                {study.outcomes}
              </p>

              {/* Inline metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 bg-black/30 border border-white/10 p-6 md:p-8 rounded-sm">
                {study.metrics.slice(0, 3).map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs font-mono uppercase tracking-widest text-muted/60">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Reflections Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={sectionVariants}
              className="mb-16 md:mb-20 pt-12 border-t border-white/10"
            >
              <div className="text-xs font-mono tracking-widest uppercase text-muted/40 mb-6">
                04 — Reflections
              </div>
              <blockquote className="pl-6 border-l-2 border-accent py-2">
                <p className="text-lg md:text-xl font-serif italic text-foreground/90 leading-relaxed">
                  "{study.reflections}"
                </p>
              </blockquote>
            </motion.section>

            {/* Project Navigation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={sectionVariants}
              className="border-t border-white/10 pt-12 mt-20 flex flex-col md:flex-row md:justify-between gap-8"
            >
              <div>
                {prevStudy ? (
                  <Link
                    href={`/work/${prevStudy.id}`}
                    className="text-sm font-medium text-muted hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    <div>
                      <div className="text-xs text-muted/60 mb-1">Previous</div>
                      {prevStudy.title}
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
              <div className="text-right">
                {nextStudy ? (
                  <Link
                    href={`/work/${nextStudy.id}`}
                    className="text-sm font-medium text-muted hover:text-accent transition-colors flex items-center gap-2 ml-auto group"
                  >
                    <div>
                      <div className="text-xs text-muted/60 mb-1">Next</div>
                      {nextStudy.title}
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
