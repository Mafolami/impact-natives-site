'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold">
          Impact Natives
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-muted transition-colors">Home</Link>
          <Link href="/about" className="hover:text-muted transition-colors">About</Link>
          <Link href="/work" className="hover:text-muted transition-colors">Work</Link>
          <Link href="/insights" className="hover:text-muted transition-colors">Insights</Link>
          <Link href="/contact" className="hover:text-muted transition-colors">Contact</Link>
          <Link href="/lab" className="hover:text-muted transition-colors">Lab</Link>
        </div>
      </div>
    </nav>
  );
}
