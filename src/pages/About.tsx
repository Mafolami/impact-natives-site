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
  { initials: "MA", name: "We are a team of systems, policy, and delivery practitioners with experience working across public and private institutions, foundations, and development programmes. Our work combines structured thinking with practical execution experience to turn complex priorities into clear, decision-ready outputs.", role: "Founder", bio: "" },
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
  <h1
    className="sans-serif font-light leading-tight mb-12"
    style={{ fontSize: "clamp(56px, 8vw, 50px)" }}
  >
    What is <em>Impact Natives?</em>
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-[650px_1fr] gap-5 items-start">
    
    {/* TEXT */}
    <div className="max-w-1xl space-y-6">
      <p className="sans-serif text-[17px] text-white/60 leading-relaxed">
        Impact Natives exists to address a structural failure in how institutions move from intent to execution: strong ideas that do not survive the transition into funded, operational delivery.
      </p>

      <p className="sans-serif text-[17px] text-white/60 leading-relaxed">
        Across programmes in public systems, CSR portfolios, and development initiatives, we saw the same pattern. Promising interventions stall not because the ideas are weak, but because the systems around them are not structured for execution at scale.
      </p>

      <p className="sans-serif text-[17px] text-white/60 leading-relaxed">
        Financing is misaligned. Delivery capacity is fragmented. Governance requirements are incomplete at the design stage.
      </p>

      <p className="sans-serif text-[17px] text-white/60 leading-relaxed">
        We focus on the layer that connects intent to implementation.
      </p>

      <p className="sans-serif text-[17px] text-white/60 leading-relaxed">
        We design structured decision inputs, intervention models, and implementation pathways that can survive institutional approval and move into delivery.
      </p>

    </div>

    {/* IMAGE */}
    <div className="flex-1">
      <img
        src="/bridge.svg"
        alt="Impact Natives"
        className="w-full h-auto object-cover rounded-xl opacity-90"
      />
    </div>

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
                <p className="sans-serif text-[clamp(18px,2vw,22px)] text-white/80">{p.title}</p>
                <p className="sans-serif text-[22px] text-white/50 leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <SectionLabel number="04" label="THE PEOPLE" />
        <div className="grid grid-cols- md:grid-cols-0 gap-4">
          {TEAM.map((member, i) => (
            <ScrollReveal key={member.initials} delay={i * 0.1}>
                <p className="sans-serif italic text-[22px] max-w-[18000px]">{member.name}</p>
                <p className="font-serif text-[22px] text-white/40 leading-relaxed">{member.bio}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

    </div>
  );
}