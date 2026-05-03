import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Link } from "wouter";

const ACCENT = "#c74b28";

const PROJECTS = [
  {
    id: "finance-id",
    num: "01",
    year: "2024",
    client: "Top-Tier Nigerian Bank Foundation (CSR Portfolio)",
    title: "Youth Employment Programme",
    tags: ["PROGRAMME STRUCTURING", "OPTION DESIGN", "APPROVAL READINESS"],
    context: "A national bank foundation had multiple youth employment initiatives running in parallel across different departments. Budgets were allocated, but programmes lacked a unified structure, making internal approval and consolidation difficult ahead of the next funding cycle. The core challenge was not idea generation. It was the absence of a coherent set of structured, comparable programme options that could be evaluated at board level.",
    effort: "We consolidated fragmented internal priorities into a single decision framework. Three distinct youth employment models were designed with clear differences in cost structure, implementation logic, and partner dependency. Each option was translated into a board-readable format aligned with internal governance requirements, including risk flags and implementation feasibility notes.",
    outcome: "The foundation moved from fragmented programme proposals to a structured decision set that enabled internal comparison and selection within a defined approval cycle. The engagement created a repeatable format for evaluating future CSR investments in youth employment.",
    // SVG: U-curve (recovery arc)
    svg: (
      <svg viewBox="0 0 480 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid1" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="480" height="320" fill="url(#grid1)"/>
        <path d="M 40,60 C 120,280 360,280 440,60" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round"/>
        <text x="360" y="290" fontFamily="JetBrains Mono" fontSize="72" fill="rgba(255,255,255,0.06)" fontWeight="bold">01</text>
      </svg>
    ),
  },
  {
    id: "csr-data",
    num: "02",
    year: "2023",
    client: "West Africa CSR Portfolio Review",
    title: "Alignment of Fragmented Programme Investments",
    tags: ["PORTFOLIO STRUCTURING", "CAPITAL ALIGNMENT", "PROGRAMME CONSOLIDATION"],
    context: "A regional CSR portfolio contained multiple overlapping social investment programmes across health, education, and livelihoods. Funding was distributed across initiatives without a shared structure for prioritisation or consolidation. This created inefficiencies in allocation and made it difficult for leadership to assess total portfolio impact or reallocate capital effectively.",
    effort: "We mapped all active programme investments and identified structural overlaps, duplication of outcomes, and misaligned funding logic. A consolidated portfolio structure was designed, grouping initiatives into three investment categories with clear decision criteria for continuation, merger, or phase-out.",
    outcome: "The organisation gained a structured portfolio view that supported clearer allocation decisions in the next funding cycle and reduced internal duplication across overlapping programme areas.",
    // SVG: declining then flat line (data visibility)
    svg: (
      <svg viewBox="0 0 480 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="480" height="320" fill="url(#grid2)"/>
        <path d="M 40,80 L 200,240 L 440,240" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="340" y="300" fontFamily="JetBrains Mono" fontSize="72" fill="rgba(255,255,255,0.06)" fontWeight="bold">02</text>
      </svg>
    ),
  },
  {
    id: "climate-finance",
    num: "03",
    year: "2024",
    client: "Lagos-Based Climate Adaptation Programme",
    title: "Intervention Structuring for Urban Flood Resilience Funding Window",
    tags: ["CLIMATE INTERVENTION DESIGN", "FUNDING ALIGNMENT", "RISK STRUCTURING"],
    context: "A climate adaptation funding opportunity required submission of a structured intervention proposal within a fixed window. Multiple technical ideas existed across agencies and partners, but none were aligned into a single fundable intervention package. The constraint was not technical capacity. It was the absence of a unified, costed, approval-ready intervention design.",
    effort: "We synthesised fragmented technical proposals into three viable intervention models, each aligned to funding criteria, implementation feasibility, and institutional risk thresholds. A final option was developed into a structured funding submission package with defined governance, cost breakdown, and implementation sequencing.",
    outcome: "The submission moved from fragmented technical inputs to a single structured funding-ready intervention aligned to donor and institutional requirements. The process established a reusable template for future climate adaptation funding windows.",
    // SVG: declining line (disbursement compression)
    svg: (
      <svg viewBox="0 0 480 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid3" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="480" height="320" fill="url(#grid3)"/>
        <path d="M 40,80 C 160,80 200,240 440,260" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round"/>
        <text x="340" y="300" fontFamily="JetBrains Mono" fontSize="72" fill="rgba(255,255,255,0.06)" fontWeight="bold">03</text>
      </svg>
    ),
  },
];

export default function Work() {
  return (
    <div className="px-6 md:px-12 py-24">
      <SectionLabel number="01" label="SELECTED WORK" />

      <ScrollReveal>
        <h1 className="font-serif font-light leading-tight mb-4" style={{ fontSize: "clamp(56px, 8vw, 110px)" }}>
        Field <em>Signals </em> in Practice
        </h1>
        <p className="font-serif text-[16px] text-white/45 max-w-lg leading-relaxed mb-24">
        Structured scenarios showing how institutional priorities are translated into approval-ready options and decision pathways.
        </p>
      </ScrollReveal>

      <div className="space-y-0">
        {PROJECTS.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 0.1}>
            <div id={project.id} className="grid md:grid-cols-2 gap-0 border-t border-white/[0.06] py-24">

              {/* Left — SVG graphic */}
              <div className="border border-white/[0.08] aspect-[4/3] p-0 overflow-hidden">
                {project.svg}
                  </div>

              {/* Right — Content */}
              <div className="md:pl-16 pt-8 md:pt-0">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[11px] text-white/30">{project.year}</span>
                  <span className="block w-8 h-px bg-white/20" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: ACCENT }}>{project.client}</span>
                    </div>

                <h2 className="font-serif font-light leading-tight mb-8" style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}>
                  {project.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[9px] uppercase tracking-[0.1em] border border-white/15 px-3 py-1 text-white/40">
                            {tag}
                          </span>
                        ))}
                      </div>

                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/30 mb-4">THE CONTEXT</p>
                    <p className="font-serif text-[14px] text-white/55 leading-relaxed">{project.context}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/30 mb-4">THE EFFORT</p>
                    <p className="font-serif text-[14px] text-white/55 leading-relaxed">{project.effort}</p>
                  </div>
                  </div>

                <div className="border-t border-white/[0.06] pt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] mb-3" style={{ color: ACCENT }}>THE OUTCOME</p>
                  <p className="font-serif italic text-[15px] text-white/60 leading-relaxed">{project.outcome}</p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        ))}
        </div>

      {/* CTA */}
      <div className="border-t border-white/[0.06] pt-24 pb-8 text-center">
        <ScrollReveal>
          <h2 className="font-serif italic font-light mb-8" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
            Have a systemic challenge?
          </h2>
          <Link href="/contact">
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] px-8 py-4 border border-white/30 text-white/70 hover:text-white hover:border-white/60 transition-all">
              START AN ENGAGEMENT
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}