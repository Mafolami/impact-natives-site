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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          Our Capabilities
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              className="bg-black/30 hover:bg-black/50 rounded-xl p-8 text-center transition-all duration-500"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] } }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="text-4xl mb-4">{cap.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-3">{cap.title}</h3>
              {hoveredIndex === index && <p className="text-muted text-sm">{cap.description}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
