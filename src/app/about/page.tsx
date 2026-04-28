"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-serif font-bold mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
          >
            About Impact Natives
          </motion.h1>

          <motion.p
            className="text-lg text-muted mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] } }}
          >
            Impact Natives is a digital systems and innovation lab dedicated to creating scalable, sustainable solutions for social impact.
          </motion.p>

          <motion.p
            className="text-lg text-muted mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] } }}
          >
            Our approach combines deep community engagement with cutting-edge digital tools.
          </motion.p>

          <motion.p
            className="text-lg text-muted mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }}
          >
            We believe in rigorous methodology, ethical consideration, and long-term commitment.
          </motion.p>
        </div>
      </main>
      <Footer />
    </>
  );
}
