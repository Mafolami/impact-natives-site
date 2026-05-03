import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SIGNATURE_EASE = [0.21, 0.47, 0.32, 0.98] as const;

export default function Lab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const N = Math.min(window.innerWidth > 768 ? 300 : 100, 400);

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    const mouseRadius = 300;

    interface FlowParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      drift: number;
      baseRadius: number;
    }

    const particles: FlowParticle[] = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: 0,
      vy: 0,
      drift: Math.random() * Math.PI * 2,
      baseRadius: Math.random() * 1.5 + 0.5,
    }));

    let t = 0;

    const animate = () => {
      // Trail fill (not clearRect)
      ctx.fillStyle = 'rgba(10,10,12,0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const pulseFactor = 1 + 0.3 * Math.sin(t * 0.04);

      for (let i = 0; i < N; i++) {
        const p = particles[i];

        // Sine/cos noise field
        const angle =
          Math.sin(p.x * 0.006 + t * 0.01) * Math.PI +
          Math.cos(p.y * 0.006 + t * 0.008) * Math.PI;
        const fieldVx = Math.cos(angle) * 0.3;
        const fieldVy = Math.sin(angle) * 0.3;

        // Mouse gravity within 300px
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let gravX = 0;
        let gravY = 0;
        if (dist < mouseRadius && dist > 0) {
          const force = ((mouseRadius - dist) / mouseRadius) * 0.15;
          const safeDist = Math.max(dist, 20);
          gravX = (dx / safeDist) * force;
          gravY = (dy / safeDist) * force;          
        }

        // Per-particle drift
        const driftVx = Math.cos(p.drift + t * 0.005) * 0.1;
        const driftVy = Math.sin(p.drift + t * 0.005) * 0.1;

        p.vx = (p.vx + fieldVx + gravX + driftVx) * 0.95; // friction .95
        p.vy = (p.vy + fieldVy + gravY + driftVy) * 0.95;

        p.x += p.vx;
        p.y += p.vy;

        // 50px cushion wrapping
        const cushion = 50;
        if (p.x < -cushion) p.x = canvas.width + cushion;
        if (p.x > canvas.width + cushion) p.x = -cushion;
        if (p.y < -cushion) p.y = canvas.height + cushion;
        if (p.y > canvas.height + cushion) p.y = -cushion;

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const radius = p.baseRadius * pulseFactor;

        // Ember color when vel > 1
        let fillColor: string;
        if (speed > 1) {
          const intensity = Math.min((speed - 1) / 2, 1);
          fillColor = `rgba(${Math.floor(200 + 55 * intensity)},${Math.floor(120 - 60 * intensity)},${Math.floor(60 - 40 * intensity)},0.9)`;
        } else {
          const alpha = 0.3 + speed * 0.3;
          fillColor = `rgba(200,190,175,${alpha})`;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = fillColor;
        ctx.fill();

        // Sparse every-3rd connections to next 10
        if (i % 3 === 0) {
          for (let j = i + 1; j < Math.min(i + 10, N); j++) {
            const p2 = particles[j];
            const cdx = p.x - p2.x;
            const cdy = p.y - p2.y;
            const d = Math.sqrt(cdx * cdx + cdy * cdy);
            if (d < 80) {
              const alpha = (1 - d / 80) * 0.12;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(200,180,150,${alpha})`;
              ctx.lineWidth = 0.4;
              ctx.stroke();
            }
          }
        }
      }

      t++;
      raf = requestAnimationFrame(animate);
    };

    let raf = requestAnimationFrame(animate);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ background: '#0a0a0c' }}>
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center pointer-events-none">
        <motion.h1
          className="text-5xl md:text-7xl font-serif font-bold mb-6"
          style={{ fontFamily: 'Cormorant Garamond, serif', color: '#f5f1e8' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 0.7, 1] }}
          transition={{
            opacity: { duration: 2, times: [0, 0.3, 0.6, 1], repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
            y: { duration: 0.8, ease: SIGNATURE_EASE },
          }}
        >
          Systems Lab
        </motion.h1>

        <motion.p
          className="text-base max-w-xl leading-relaxed"
          style={{ color: 'rgba(179,173,162,0.7)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: SIGNATURE_EASE, delay: 0.4 }}
        >
          Experimental space for prototyping innovative systems and interactions. Move your cursor to influence the field.
        </motion.p>

        <motion.a
          href="/"
          className="mt-12 text-xs font-mono uppercase tracking-widest pointer-events-auto"
          style={{ color: 'rgba(199,162,122,0.7)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ color: 'rgba(199,162,122,1)' }}
        >
          ← Back to site
        </motion.a>
      </div>
    </div>
  );
}