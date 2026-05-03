//import { useEffect, useState } from "react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import logo from "@/assets/logo.svg";

const NAV_LINKS = [
  { href: "/work", label: "WORK" },
  { href: "/insights", label: "INSIGHTS" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showChrome, setShowChrome] = useState(true);
  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
  
    const onScroll = () => {
      const y = window.scrollY;
  
      setScrolled(y > 50);
  
      // hide immediately on scroll start
      setShowChrome(false);
  
      clearTimeout(timeout);
  
      // show again after user stops scrolling for 1.5s (only if not at top)
      timeout = setTimeout(() => {
        if (window.scrollY > 10) {
          setShowChrome(true);
        }
      }, 1500);
    };
  
    window.addEventListener("scroll", onScroll, { passive: true });
  
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? showChrome
            ? "py-3 bg-[#0a0a0a]/80 backdrop-blur-md opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
          : "py-3 bg-transparent opacity-100 translate-y-0"
      }`}
    >
      <Link href="/">
        <img
          src={logo}
          alt="Logo"
          className="h-[28px] md:h-[36px] w-auto object-contain"
        />
      </Link>
      <nav className="flex items-center gap-8">
        {NAV_LINKS.map((link) => {
          const active = location.replace(/\/$/, "") === link.href.replace(/\/$/, "");
          return (
            <Link key={link.href} href={link.href}>
              <span className={`font-mono text-[11px] uppercase tracking-[0.1em] transition-colors relative ${
                active ? "text-white" : "text-white/40 hover:text-white/80"
              }`}>
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                    style={{ backgroundColor: "#c74b28" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}