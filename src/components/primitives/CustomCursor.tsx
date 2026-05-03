import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setX(e.clientX);
      setY(e.clientY);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      setScale(el?.closest(
        'a, button, [role="button"], input, select, textarea, label'
      ) ? 3 : 1);
    };

    window.addEventListener('mousemove', move, { passive: true });

    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
      style={{
        transform: `translate3d(${x}px, ${y}px, 0)`,
        transition: 'transform 100ms linear'
      }}
    />
  );
}