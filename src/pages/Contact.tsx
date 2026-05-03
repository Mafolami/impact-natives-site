import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  const [form, setForm] = useState({ institution: "", inquiry: "", context: "" });
  const [submitted, setSubmitted] = useState(false);
  const allFilled = form.institution.trim() && form.inquiry.trim() && form.context.trim();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (allFilled) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="px-6 md:px-12 py-40 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="font-serif font-light mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>Brief Received.</h2>
          <p className="font-serif italic text-[16px] text-white/45">We will be in touch within 3–5 business days.</p>
        </div>
      </div>
    );
  }

  const BRACKET_CORNERS = [
    { top: 0, left: 0, borderTop: "1px solid rgba(255,255,255,0.25)", borderLeft: "1px solid rgba(255,255,255,0.25)" },
    { top: 0, right: 0, borderTop: "1px solid rgba(255,255,255,0.25)", borderRight: "1px solid rgba(255,255,255,0.25)" },
    { bottom: 0, left: 0, borderBottom: "1px solid rgba(255,255,255,0.25)", borderLeft: "1px solid rgba(255,255,255,0.25)" },
    { bottom: 0, right: 0, borderBottom: "1px solid rgba(255,255,255,0.25)", borderRight: "1px solid rgba(255,255,255,0.25)" },
  ];

  return (
    <div className="px-6 md:px-12 py-24">
      <SectionLabel number="05" label="WORK WITH US" />
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">

        <ScrollReveal>
          <h1 className="font-serif font-light leading-tight mb-8" style={{ fontSize: "clamp(48px, 6vw, 86px)" }}>
            Start an <em>Engagement</em>
          </h1>
          <p className="font-serif italic text-[16px] text-white/50 leading-relaxed mb-10 max-w-sm">
          We work with institutions that need to move from defined priorities and budgets to clear, approval-ready project options.
          </p>
          <div className="mb-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 mb-4">TYPICAL PARTNERS:</p>
            <ul className="space-y-2">
              {["CORPORATE FOUNDATIONS & CSR TEAMS", "DEVELOPMENT FINANCE & DONOR PROGRAMMES", "PHILANTHROPIC FOUNDATIONS", "PUBLIC SECTOR PROGRAMME UNITS", "MULTILATERAL INSTITUTIONS", "LARGE NONPROFITS & IMPLEMENTING ORGANISATIONS"].map((t) => (
                <li key={t} className="font-mono text-[11px] text-white/40">· {t}</li>
              ))}
            </ul>
          </div>
          <p className="font-serif text-[13px] text-white/30 leading-relaxed">
          Inquiries are reviewed weekly. Engagements are scoped based on a defined decision challenge. A response is shared within 3–5 business days if there is a clear fit.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="relative border border-white/10 p-10">
            {BRACKET_CORNERS.map((corner, i) => (
              <div key={i} className="absolute w-3 h-3" style={{
                top: corner.top !== undefined ? 0 : "auto",
                bottom: (corner as any).bottom !== undefined ? 0 : "auto",
                left: (corner as any).left !== undefined ? 0 : "auto",
                right: (corner as any).right !== undefined ? 0 : "auto",
                borderTop: corner.borderTop ?? "none",
                borderBottom: (corner as any).borderBottom ?? "none",
                borderLeft: (corner as any).borderLeft ?? "none",
                borderRight: (corner as any).borderRight ?? "none",
              }} />
            ))}

            <div className="mb-12">
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 block mb-4">01. INSTITUTION / ORGANISATION</label>
              <input value={form.institution} onChange={(e) => setForm({ ...form, institution: e.target.value })}
                placeholder="e.g. Corporate Foundation, Development Programme, Government Unit"
                className="font-serif italic bg-transparent border-0 border-b border-white/10 w-full text-white/50 placeholder:text-white/20 outline-none pb-2 focus:border-white/30 transition-colors"
                style={{ fontSize: "clamp(18px,2vw,18px)" }} />
            </div>
            <div className="mb-12">
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 block mb-4">02. NATURE OF INQUIRY/DECISION FOCUS</label>
              <input value={form.inquiry} onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                placeholder="e.g. Restructure a funding portfolio, design a fundable intervention..."
                className="font-serif italic bg-transparent border-0 border-b border-white/10 w-full text-white/50 placeholder:text-white/20 outline-none pb-2 focus:border-white/30 transition-colors"
                style={{ fontSize: "clamp(18px,2vw,18px)" }} />
            </div>
            <div className="mb-12">
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 block mb-4">03. BRIEF CONTEXT</label>
              <textarea value={form.context} onChange={(e) => setForm({ ...form, context: e.target.value })}
                placeholder="What decision are you trying to move forward? Outline the priority, constraints, and timeline..."
                rows={4}
                className="font-serif italic bg-transparent border-0 border-b border-white/10 w-full text-white/50 placeholder:text-white/20 outline-none pb-2 resize-none focus:border-white/30 transition-colors"
                style={{ fontSize: "clamp(16px,1.5vw,18px)" }} />
            </div>
            <div className="flex justify-end">
              <button type="submit" disabled={!allFilled}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors disabled:opacity-30 bg-transparent border-0 p-0">
                SUBMIT BRIEF →
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}