import { Link } from "wouter";

const TICKER_ITEMS = ["EXECUTION INFRASTRUCTURE", "DECISION ARCHITECTURE", "INSTITUTIONAL STRUCTURING", "APPROVAL READINESS", "PROGRAMME DESIGN"];
const ticker = [...TICKER_ITEMS, ...TICKER_ITEMS].map((t) => `${t} · `).join("");

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] relative overflow-hidden border-t border-white/[0.06] pt-24 pb-0">
      <div className="px-6 md:px-12 pb-16 flex justify-between items-start">
        <div className="max-w-xs">
          
          <a href="mailto:info@impactnatives.com" className="sans-serif text-[14px] text-white/70 text-lg block mb-3 hover:text-white transition-colors">
            info@impactnatives.com
          </a>
          <p className="sans-serif text-[11px] text-white/40">
            Lagos · Nigeria
          </p>
        </div>
        <div className="flex gap-16">
          <div>
            <p className="sans-mono text-[9px] uppercase tracking-[0.15em] text-white/30 mb-6">PAGES</p>
            <div className="flex flex-col gap-3">
              {[["Home", "/"], ["Work", "/work"], ["Insights", "/insights"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
                <Link key={href} href={href}>
                  <span className="sans-serif text-[11px] text-white/60 hover:text-white transition-colors block">{label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="sans-mono text-[9px] uppercase tracking-[0.15em] text-white/30 mb-6">SOCIAL</p>
            <div className="flex flex-col gap-3">
              <a href="https://linkedin.com/company/impact-natives" className="sans-serif text-[11px] text-white/60 hover:text-white transition-colors block">LinkedIn</a>
              <a href="#" className="sans-serif text-[11px] text-white/60 hover:text-white transition-colors block">Twitter</a>
              
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-white/[0.06] py-3">
        <div className="flex whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.15em] text-white/20"
          style={{ animation: "marquee 30s linear infinite" }}>
          <span>{ticker}</span>
          <span aria-hidden>{ticker}</span>
        </div>
      </div>

      <div className="overflow-hidden">
        <p className="font-serif font-light text-white/[.40] whitespace-nowrap leading-none select-none"
          style={{ fontSize: "clamp(80px, 14vw, 200px)" }}>
          IMPACT NATIVES
        </p>
      </div>
    </footer>
  );
}