interface Props { number: string; label: string; }
export default function SectionLabel({ number, label }: Props) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="font-mono text-[11px] text-white/30">{number}</span>
      <span className="block w-12 h-px bg-white/20" />
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">{label}</span>
    </div>
  );
}