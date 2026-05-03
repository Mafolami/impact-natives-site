const ACCENT = "#c74b28";

import { useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleField from "@/components/ui/ParticleField";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CAPABILITIES = [
  { num: "I.", title: "Structure decision-ready project options", desc: "We convert institutional priorities into structured, comparable project options." },
  { num: "II.", title: "Design intervention models", desc: "We build multiple execution models for a single priority, with clear costs, risks, and feasibility conditions." },
  { num: "III.", title: "Produce approval-ready briefs", desc: "We translate selected options into formats aligned with internal governance and approval systems." },
  { num: "IV.", title: "Assess implementation partners", desc: "We identify and evaluate delivery partners based on capability, compliance fit, and execution risk." },
];

const DATA_POINTS = [
  { label: "Execution gap, not innovation gap.", stat: "MOST INSTITUTIONS HAVE MORE IDEAS THAN THEY CAN IMPLEMENT." },
  { label: "Decision overload.", stat: "TEAMS MANAGE MULTIPLE OVERLAPPING PROGRAMMES WITHOUT CLEAR PRIORITISATION STRUCTURES." },
  { label: "Weak transition from design to execution.", stat: "MOST INTERVENTIONS LOSE MOMENTUM BETWEEN APPROVAL AND IMPLEMENTATION." },
];

const WORK_ROWS = [
  { num: "01", title: "Structured Youth Employment Programme Design", client: "A TOP-TIER NIGERIAN BANK FOUNDATION", year: "2024", slug: "finance-id" },
  { num: "02", title: "Alignment of Fragmented Programme Investments", client: "WEST AFRICA CSR PORTFOLIO REVIEW", year: "2023", slug: "csr-data" },
  { num: "03", title: "Intervention Structuring for Urban Flood Resilience Funding Window", client: "LAGOS-BASED CLIMATE ADAPTATION PROGRAMME", year: "2024", slug: "climate-finance" },
];

const INSIGHT_CARDS = [
  { tag: "ESSAY", date: "MAR 12. 2024", title: "Notes on institutional decision systems", slug: "decision systems", italic: false },
  { tag: "SIGNAL", date: "FEB 28. 2024", title: "Capital allocation for impact-driven interventions", slug: "capital allocation", italic: true },
  { tag: "FIELD NOTE", date: "JAN 15. 2024", title: "Execution Pathways: Delivering impact at scale", slug: "Execution Pathways", italic: false },
];

export default function Home() {
  const manifestoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: manifestoRef, offset: ["start end", "end start"] });
  const thirdOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0.3, 1]);

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden -mt-24 pt-0">
        <ParticleField />
        <div className="relative z-10 w-full px-6 md:px-12 pt-32">
          <motion.h1
            className="font-serif font-light leading-[1.0]"
            style={{ fontSize: "clamp(56px, 9vw, 130px)" }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Turn{" "}
            <span className="font-serif italic" style={{ color: "rgba(244,244,240,0.4)" }}>institutional intent</span> {" "}
            into{" "}
            <span className="font-serif italic" style={{ color: ACCENT }}>execution</span>{" "} 
            
            pathways.
          </motion.h1>
        </div>
        <motion.div
          className="absolute bottom-12 right-12 text-right z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="font-serif text-[14px] text-white/50 leading-relaxed max-w-[260px] mb-6 text-center">
          We help institutions convert priorities and budgets into structured, costed, approval-ready project options in 6 weeks.
          </p>
          <Link href="/work">
            <span className="font-mono text-[15px] uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors">
              WORK WITH US →
            </span>
          </Link>
        </motion.div>
        <div className="absolute left-6 bottom-12 z-10 flex flex-col items-center gap-2">
          <p className="font-mono text-[10px] tracking-[0.2em] text-white/25 uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            SCROLL
          </p>
          <div className="w-px h-10 bg-white/20" />
        </div>
      </section>

      {/* MANIFESTO */}
      <section ref={manifestoRef} className="px-6 md:px-24 py-40">
        <SectionLabel number="01" label="MANIFESTO" />
        <ScrollReveal>
          <p className="font-serif leading-[1.15] mb-16 font-light"
            style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}>
            Impact is change that follows action.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="font-serif leading-[1.15] mb-16 font-light"
            style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}>
            Intent alone is not enough.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="font-serif leading-[1.15] mb-16 font-light"
            style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}>
            Most initiatives do not fail because ideas are missing.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-serif italic leading-[1.15] mb-16"
            style={{ fontSize: "clamp(36px, 5.5vw, 72px)", color: ACCENT, fontWeight: 300 }}>
            They fail because ideas are never translated into structured options that can move through institutional systems.
          </p>
        </ScrollReveal>
        <motion.p
          className="font-serif leading-[1.15] mb-16 font-light"
          style={{ fontSize: "clamp(36px, 5.5vw, 72px)", opacity: thirdOpacity, color: "rgba(244,244,240,0.35)" }}
        >
          Execution breaks before implementation begins.
        </motion.p>
        <ScrollReveal delay={0.1}>
          <p className="font-serif leading-[1.15] mb-24 font-light"
            style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}>
            Budgets exist. Options are unclear. We build the decision layer between{" "}
            <em>intent and execution</em> inside institutions.
          </p>
        </ScrollReveal>
        <div className="border-t border-white/10 pt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30 text-right">— IMPACT NATIVES</p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="px-6 md:px-12 py-32 border-t border-white/[0.06]">
        <SectionLabel number="02" label="CAPABILITIES" />
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <ScrollReveal>
            <h2 className="font-serif font-light leading-tight mb-8" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
              Engineering <em>pathways</em> to scale.
            </h2>
            <p className="font-serif text-[15px] text-white/45 leading-relaxed max-w-sm">
            We work on the gap between intent and execution inside institutions. We structure priorities into clear options, costs, and implementation pathways that decision-makers can evaluate and approve.
            </p>
          </ScrollReveal>
          <div>
            {CAPABILITIES.map((cap, i) => (
              <ScrollReveal key={cap.num} delay={i * 0.1}>
                <div className="border-t border-white/10 py-8 group">
                  <div className="flex items-baseline gap-8">
                    <span className="font-mono text-[12px] text-white/25 group-hover:text-[#c74b28] transition-colors" style={{ minWidth: "2.5rem" }}>{cap.num}</span>
                    <div>
                      <p className="font-serif text-[20px] text-white/80 group-hover:italic transition-all">{cap.title}</p>
                      <p className="font-serif text-[13px] text-white/35 mt-2 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE CONTEXT */}
      <section className="px-6 md:px-12 py-32 border-t border-white/[0.06]">
        <SectionLabel number="03" label="THE CONTEXT" />
        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          <div>
            {DATA_POINTS.map((dp, i) => (
              <ScrollReveal key={i} delay={i * 0.15} className="mb-20">
                <div className="border-l-2 pl-6" style={{ borderColor: "#c74b28" }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: "#c74b28" }}>DATA POINT</p>
                  <h3 className="font-serif font-light mb-3" style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}>{dp.label}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/35 leading-relaxed">{dp.stat}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="md:pt-8">
            <ScrollReveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 mb-8">THE INTERVENTION</p>
              <div className="space-y-5">
                <p className="font-serif italic text-[20px] text-white/55 leading-relaxed">Impact Natives exists to close the gap between institutional intent and structured execution pathways.</p>
                <p className="font-serif italic text-[20px] text-white/55 leading-relaxed">We do not focus on delivery or implementation. We focus on the point where priorities fail to become structured, comparable options that decision systems can evaluate.</p>
                <p className="font-serif italic text-[20px] text-white/55 leading-relaxed">By treating structuring as a discipline, we convert fragmented intent into clear, costed, approval-ready choices.</p>
              </div>
              <div className="mt-10">
                <Link href="/about">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/40 hover:text-white transition-colors">READ OUR PRINCIPLES →</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="px-6 md:px-12 py-32 border-t border-white/[0.06]">
        <div className="flex justify-between items-start mb-16">
          <SectionLabel number="04" label="FIELD SIGNALS" />
          <Link href="/work">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 hover:text-white transition-colors">VIEW ALL SIGNALS →</span>
          </Link>
        </div>
        <div>
          {WORK_ROWS.map((row, i) => (
            <ScrollReveal key={row.num} delay={i * 0.1}>
              <Link href={`/work#${row.slug}`}>
                <div className="border-t border-white/10 py-8 flex items-baseline justify-between group hover:bg-white/[0.02] transition-colors px-2 -mx-2">
                  <span className="font-mono text-[13px] text-white/25 group-hover:text-[#c74b28] transition-colors w-12">{row.num}</span>
                  <div className="flex-1 px-8">
                    <p className="font-serif text-[clamp(20px,2.5vw,32px)] text-white/85 group-hover:italic transition-all">{row.title}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/30 mt-1">{row.client}</p>
                  </div>
                  <div className="hidden md:block w-40 h-8 opacity-0 group-hover:opacity-100 transition-opacity mx-8">
                    <svg viewBox="0 0 160 32" className="w-full h-full">
                      <path d="M0,16 C20,8 40,24 60,16 C80,8 100,24 120,16 C140,8 160,24 160,16" fill="none" stroke="rgba(199,75,40,0.4)" strokeWidth="0.8"/>
                      <path d="M0,20 C20,12 40,28 60,20 C80,12 100,28 120,20 C140,12 160,28 160,20" fill="none" stroke="rgba(244,244,240,0.08)" strokeWidth="0.5"/>
                      <path d="M0,12 C20,4 40,20 60,12 C80,4 100,20 120,12 C140,4 160,20 160,12" fill="none" stroke="rgba(244,244,240,0.05)" strokeWidth="0.5"/>
                    </svg>
                  </div>
                  <span className="font-mono text-[12px] text-white/25">{row.year}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* INSIGHTS LAB */}
      <section className="px-6 md:px-12 py-32 border-t border-white/[0.06]">
        <div className="flex justify-between items-start mb-16">
          <SectionLabel number="05" label="INSIGHTS" />
          <Link href="/insights">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 hover:text-white transition-colors">EXPLORE INSIGHTS →</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-0 border border-white/[0.08]">
          {INSIGHT_CARDS.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link href={`/insights#${card.slug}`}>
                <div className="p-8 border-r border-white/[0.08] last:border-r-0 hover:bg-white/[0.02] transition-colors min-h-[260px] flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: "#c74b28" }}>{card.tag}</span>
                    <span className="font-mono text-[10px] text-white/30">{card.date}</span>
                  </div>
                  <p className={`font-serif text-[20px] leading-snug text-white/85 flex-1 ${card.italic ? "italic" : ""}`}>{card.title}</p>
                  <div className="mt-6 w-8 h-px bg-white/20" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-48 border-t border-white/[0.06] text-center" style={{ background: "linear-gradient(to bottom, #0a0a0a, #0f0a08)" }}>
        <ScrollReveal>
          <h2 className="font-serif font-light mb-6" style={{ fontSize: "clamp(48px, 7vw, 96px)" }}>
          Turn intent into execution pathways.
          </h2>
          <p className="font-serif text-[16px] text-white/45 max-w-lg mx-auto mb-10 leading-relaxed">
          We work with corporate CSR teams, corporate foundations, and institutional program owners responsible for turning budgets into approved, executable programmes.
          </p>
          <Link href="/contact">
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] px-8 py-4 border border-white/30 text-white/70 hover:text-white hover:border-white/60 transition-all">
              WORK WITH US
            </span>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}