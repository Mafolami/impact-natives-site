import { useState } from "react";
import { Link } from "wouter";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ACCENT = "#c74b28";
const CATEGORIES = ["ALL", "ESSAY", "SIGNAL", "FIELD NOTE"] as const;
type Category = typeof CATEGORIES[number];

const ENTRIES = [
  { tag: "ESSAY" as Category, date: "MAR 12. 2024", title: "Notes on institutional decision systems", slug: "second-pilot-decade", readTime: "8 MIN READ", excerpt: "Institutional programmes move through layered decision environments shaped by budgets, governance structures, and approval cycles. Understanding how these layers interact is central to designing interventions that can progress beyond initial design into funded execution. This note examines how decision inputs are structured and how they influence downstream approval and delivery processes.", italic: false },
  { tag: "SIGNAL" as Category, date: "FEB 28. 2024", title: "Capital allocation for impact-driven interventions", slug: "delivery-design", readTime: "4 MIN READ", excerpt: "Capital flow in public and donor systems is shaped by reporting requirements, compliance frameworks, and risk controls as much as by technical or programmatic design. These constraints determine how and when resources move, and what kinds of interventions are eligible for sustained funding.", italic: true },
  { tag: "FIELD NOTE" as Category, date: "JAN 15. 2024", title: "Execution Pathways: Delivering impact at scale", slug: "lagos-week-4", readTime: "6 MIN READ", excerpt: "Observations from field engagement with implementation teams working across government and partner systems. Delivery environments rely on mixed formal and informal processes to keep operations moving, including manual workarounds, parallel reporting systems, and adaptive coordination between units.", italic: false },
];

export default function Insights() {
  const [active, setActive] = useState<Category>("ALL");
  const filtered = active === "ALL" ? ENTRIES : ENTRIES.filter((e) => e.tag === active);

  return (
    <div className="px-6 md:px-12 py-24">
      <SectionLabel number="02" label="INSIGHTS" />

      <ScrollReveal>
        <h1 className="font-serif font-light leading-tight mb-4" style={{ fontSize: "clamp(48px, 7vw, 96px)" }}>
          Journal &amp; <em>Signals</em>
        </h1>
        <p className="font-serif text-[16px] text-white/45 max-w-md leading-relaxed mb-16">
          Essays, field notes, and structural observations on digital public innovation.
        </p>
      </ScrollReveal>

      <div className="flex items-center gap-8 border-b border-white/10 pb-4 mb-0">
        {CATEGORIES.map((cat) => (
          <button key={cat} onClick={() => setActive(cat)}
            className="font-mono text-[11px] uppercase tracking-[0.1em] transition-colors bg-transparent border-0 p-0"
            style={{ color: active === cat ? ACCENT : "rgba(244,244,240,0.35)" }}>
            {cat}
          </button>
        ))}
      </div>

      <div>
        {filtered.map((entry, i) => (
          <ScrollReveal key={entry.slug} delay={i * 0.05}>
            <Link href={`/insights#${entry.slug}`}>
              <div className="border-b border-white/[0.06] py-10 grid items-start hover:bg-white/[0.02] transition-colors px-2 -mx-2"
                style={{ gridTemplateColumns: "140px 1fr 100px", gap: "2rem" }}>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] mb-2" style={{ color: ACCENT }}>{entry.tag}</p>
                  <p className="font-mono text-[10px] text-white/30">{entry.date}</p>
                </div>
                <div className="px-0">
                  <p className={`font-serif leading-tight mb-3 ${entry.italic ? "italic" : ""}`}
                    style={{ fontSize: "clamp(22px, 2.5vw, 40px)" }}>{entry.title}</p>
                  <p className="font-serif text-[14px] text-white/40 leading-relaxed">{entry.excerpt}</p>
                </div>
                <div className="flex items-start justify-end">
                  <span className="font-mono text-[10px] border border-white/20 px-2 py-1 text-white/40">{entry.readTime}</span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}