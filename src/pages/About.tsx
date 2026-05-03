import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ACCENT = "#c74b28";

const PRINCIPLES = [
  { num: "01.", title: "Structure over intent.", desc: "Intent is common. Structure is what determines whether anything moves forward." },
  { num: "02.", title: "Execution is a systems problem.", desc: "Delivery depends on governance, financing, and operational readiness working together, not in isolation." },
  { num: "03.", title: "Design for institutional reality.", desc: "Systems must account for constraints such as procurement rules, political influence, and legacy processes, not just ideal workflows." },
  { num: "04.", title: "Decisions shape outcomes.", desc: "The quality of execution is constrained by the quality of decisions made upstream. We focus on improving that input layer." },
  { num: "05.", title: "Ownership sits with institutions.", desc: "Our role is to structure options and pathways. Implementation responsibility remains with the institution or its chosen partners." },
];

const TEAM = [
  { initials: "EA", name: "Elena Aris", role: "SYSTEMS ARCHITECT", bio: "Former digital infrastructure lead at UN. Specialises in low-bandwidth protocol design." },
  { initials: "JM", name: "Julian Minta", role: "DELIVERY DIRECTOR", bio: "Led national health data rollouts across East Africa. Obsessed with last-mile operational design." },
  { initials: "SN", name: "Sarah Ndiaye", role: "POLICY ENGINEERING", bio: "Translates legal mandates into logic gates. Background in constitutional law and systems theory." },
  { initials: "RK", name: "Rajiv Kapoor", role: "RESOURCE MOBILISATION", bio: "Structures blended finance mechanisms for public goods. Ex-World Bank." },
];

const corners = [
  { top: 0, left: 0, borderTop: true, borderLeft: true },
  { top: 0, right: 0, borderTop: true, borderRight: true },
  { bottom: 0, left: 0, borderBottom: true, borderLeft: true },
  { bottom: 0, right: 0, borderBottom: true, borderRight: true },
];

function BracketBox({ initials }: { initials: string }) {
  return (
    <div className="relative w-full mb-6" style={{ paddingBottom: "75%" }}>
      <div className="absolute inset-0 border border-white/[0.08] flex items-center justify-center">
        <span className="font-serif text-[clamp(24px,3vw,42px)] text-white/12">{initials}</span>
        {corners.map((c, i) => (
          <div key={i} className="absolute w-4 h-4" style={{
            top: c.top !== undefined ? 0 : "auto",
            bottom: c.bottom !== undefined ? 0 : "auto",
            left: (c as any).left !== undefined ? 0 : "auto",
            right: (c as any).right !== undefined ? 0 : "auto",
            borderTop: c.borderTop ? "1px solid rgba(255,255,255,0.3)" : "none",
            borderBottom: c.borderBottom ? "1px solid rgba(255,255,255,0.3)" : "none",
            borderLeft: (c as any).borderLeft ? "1px solid rgba(255,255,255,0.3)" : "none",
            borderRight: (c as any).borderRight ? "1px solid rgba(255,255,255,0.3)" : "none",
          }} />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="px-6 md:px-12 py-24">

      <SectionLabel number="03" label="ABOUT IMPACT NATIVES" />
      <ScrollReveal>
        <h1 className="font-serif font-light leading-tight mb-12" style={{ fontSize: "clamp(56px, 8vw, 110px)" }}>
          What is  <em>Impact Natives?</em>
        </h1>
        <div className="max-w-2xl space-y-6">
          <p className="font-serif text-[20px] text-white/60 leading-relaxed">
          Impact Natives exists to address a structural failure in how institutions move from intent to execution: strong ideas that do not survive the transition into funded, operational delivery.
          </p>
          <p className="font-serif text-[20px] text-white/60 leading-relaxed">
          Across programmes in public systems, CSR portfolios, and development initiatives, we saw the same pattern. Promising interventions stall not because the ideas are weak, but because the systems around them are not structured for execution at scale.
          </p>
          <p className="font-serif text-[20px] text-white/55 leading-relaxed">
          Financing is misaligned. Delivery capacity is fragmented. Governance requirements are incomplete at the design stage.
          </p>
          <p className="font-serif text-[20px] text-white/60 leading-relaxed">
          We focus on the layer that connects intent to implementation.
          </p>
          <p className="font-serif text-[20px] text-white/60 leading-relaxed">
          We design structured decision inputs, intervention models, and implementation pathways that can survive institutional approval and move into delivery.
          </p>
          <p className="font-serif italic text-[20px] text-white/55 leading-relaxed">
            We are a collective of systems engineers, policy designers, and operational veterans building the scaffolding that makes impact work.
          </p>
        </div>
      </ScrollReveal>

      <section className="mt-40 mb-40">
        <p className="font-mono text-[20px] uppercase tracking-[0.2em] text-white/30 text-center mb-20">OPERATING PRINCIPLES</p>
        <div>
          {PRINCIPLES.map((p, i) => (
            <ScrollReveal key={p.num} delay={i * 0.08}>
              <div className="grid py-16 border-t border-white/[0.06]"
                style={{ gridTemplateColumns: "80px 1fr 1fr", gap: "2rem" }}>
                <span className="font-mono text-[18px] text-white/25">{p.num}</span>
                <p className="font-serif text-[clamp(18px,2vw,26px)] text-white/80">{p.title}</p>
                <p className="font-serif text-[22px] text-white/50 leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <SectionLabel number="04" label="THE PEOPLE" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TEAM.map((member, i) => (
            <ScrollReveal key={member.initials} delay={i * 0.1}>
              <div className="border border-white/[0.08] p-6 hover:border-white/20 transition-colors">
                <BracketBox initials={member.initials} />
                <p className="font-serif text-[17px] mb-2">{member.name}</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] mb-4" style={{ color: ACCENT }}>{member.role}</p>
                <p className="font-serif text-[13px] text-white/40 leading-relaxed">{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

    </div>
  );
}