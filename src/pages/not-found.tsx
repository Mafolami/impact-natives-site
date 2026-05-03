export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30 mb-4">404</p>
        <h1 className="font-serif font-light text-[clamp(36px,5vw,64px)] mb-4">Page not found.</h1>
        <a href="/" className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/40 hover:text-white transition-colors">
          ← Return home
        </a>
      </div>
    </div>
  );
}