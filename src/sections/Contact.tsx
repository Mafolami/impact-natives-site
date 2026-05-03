'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({ message: 'Thank you! We will get back to you soon.', type: 'success' });
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section className="relative py-20 px-6">
      <div className="mb-6">
        <div className="mono text-[11px] text-white/30">01</div>
        <div className="mono text-[11px] tracking-[0.12em] uppercase text-white/40">
          CONTACT US
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        {submitStatus && (
          <motion.div
            className={`p-4 rounded-lg text-center mb-8 ${submitStatus.type === 'success' ? 'bg-green-900/20 border border-green-800' : 'bg-red-900/20 border border-red-800'}`}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] } }}
          >
            {submitStatus.message}
          </motion.div>
        )}

        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }}
        >
          Contact Us
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/30 hover:bg-black/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              placeholder="Your name"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/30 hover:bg-black/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              placeholder="your@email.com"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-black/30 hover:bg-black/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              placeholder="Your message..."
              required
              disabled={isSubmitting}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg border border-white/20 text-center"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
