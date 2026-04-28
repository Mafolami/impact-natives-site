'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Variants } from "framer-motion";

const fadeInUp: Variants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <motion.div
            className="relative z-10 max-w-5xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">Systems. Impact. Systems.</p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8 text-white">
                Digital systems for social change
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              We design, build, and deploy interconnected solutions that amplify human agency and reshape systems for lasting impact.
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row gap-6 justify-center"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Link
                href="/work"
                className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
              >
                See Our Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* MANIFESTO */}
        <section className="py-20 md:py-32 px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '0px 0px -200px 0px' }}
              className="space-y-8"
            >
              <motion.h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12" variants={fadeInUp}>
                Our Manifesto
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Systems shape outcomes. We believe that with rigorous methodology, ethical consideration, and deep community engagement, digital tools can become agents of transformation.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We reject extractive models. We build for communities, not around them. Our work is grounded in place, rooted in evidence, and committed to the long view.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Impact is not a metric—it's a practice. We measure progress through structural change, not vanity numbers. We iterate, we learn, we compound.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="py-20 md:py-32 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-16"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            >
              System Capabilities
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            >
              {[
                {
                  title: 'Systems Design',
                  description: 'Map interconnections. Identify leverage points. Design interventions that compound.',
                },
                {
                  title: 'Community Engagement',
                  description: 'Deep listening. Co-creation. Building solutions that communities want to use.',
                },
                {
                  title: 'Digital Tools',
                  description: 'Full-stack development. Data infrastructure. Platforms that scale without fragmenting.',
                },
                {
                  title: 'Research & Evaluation',
                  description: 'Rigorous methodology. Honest metrics. Evidence-driven iteration and adaptation.',
                },
                {
                  title: 'Capacity Building',
                  description: 'Train teams. Transfer knowledge. Build capability that lasts beyond our involvement.',
                },
                {
                  title: 'Systems Lab',
                  description: 'Experimental spaces. Rapid prototyping. Testing interventions at scale.',
                },
              ].map((capability, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="border border-gray-700 p-8 hover:border-gray-400 transition-colors group"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gray-100 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{capability.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROBLEM → INTERVENTION */}
        <section className="py-20 md:py-32 px-6 bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-16"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            >
              Our Approach
            </motion.h2>

            <div className="space-y-12">
              {[
                {
                  phase: 'Diagnosis',
                  description: 'We listen deeply. We map systems. We identify where small changes create large shifts.',
                },
                {
                  phase: 'Design',
                  description: 'We prototype solutions with communities. We test assumptions. We refine iteratively.',
                },
                {
                  phase: 'Build',
                  description: 'We develop robust systems. We ensure they integrate with existing workflows. We prioritize sustainability.',
                },
                {
                  phase: 'Scale',
                  description: 'We transfer ownership. We build local capacity. We compound impact over time.',
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col md:flex-row md:items-start gap-8"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  viewport={{ once: true, margin: '0px 0px -200px 0px' }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-black font-bold text-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">{step.phase}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES PREVIEW */}
        <section className="py-20 md:py-32 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-16"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            >
              Case Studies
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            >
              {[
                {
                  title: 'Community Health Information System',
                  excerpt: 'Enabling village health workers to track outcomes and iterate care protocols.',
                  tags: ['Health', 'Systems Design', 'Community'],
                },
                {
                  title: 'Agricultural Value Chain Platform',
                  excerpt: 'Connecting smallholder farmers to markets while improving supply transparency.',
                  tags: ['Agriculture', 'Platform', 'Sustainability'],
                },
              ].map((study, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group cursor-pointer"
                >
                  <Link href="/work" className="block">
                    <div className="border border-gray-700 p-8 h-full hover:border-gray-400 transition-colors hover:bg-gray-950">
                      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-gray-200 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{study.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="text-xs uppercase tracking-wide px-3 py-1 border border-gray-600 text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                href="/work"
                className="inline-block px-8 py-4 border border-white text-white font-semibold hover:bg-white hover:text-black transition-colors"
              >
                View All Work
              </Link>
            </motion.div>
          </div>
        </section>

        {/* INSIGHTS PREVIEW */}
        <section className="py-20 md:py-32 px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-16"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            >
              Latest Insights
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            >
              {[
                {
                  title: 'On Building for Scale Without Losing Purpose',
                  date: 'March 2026',
                },
                {
                  title: 'Digital Tools as Accountability Mechanisms',
                  date: 'February 2026',
                },
                {
                  title: 'Systems Thinking in International Development',
                  date: 'January 2026',
                },
              ].map((insight, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group cursor-pointer"
                >
                  <Link href="/insights" className="block">
                    <div className="border border-gray-700 p-6 h-full hover:border-gray-400 transition-colors hover:bg-black/30">
                      <p className="text-sm text-gray-500 mb-4">{insight.date}</p>
                      <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-gray-200 transition-colors leading-tight">
                        {insight.title}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Read more →</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                href="/insights"
                className="inline-block px-8 py-4 border border-white text-white font-semibold hover:bg-white hover:text-black transition-colors"
              >
                Explore All Insights
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="py-20 md:py-32 px-6 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            >
              Ready to build together?
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-12 leading-relaxed"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            >
              Let's talk about systems, solutions, and long-term impact. We're interested in bold problems and committed partners.
            </motion.p>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            >
              <Link
                href="/contact"
                className="inline-block px-10 py-5 bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
