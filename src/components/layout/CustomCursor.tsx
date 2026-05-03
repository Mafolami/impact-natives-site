import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => { cursorX.set(e.clientX - 8); cursorY.set(e.clientY - 8); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
      style={{ x: springX, y: springY }}
    />
  );
}