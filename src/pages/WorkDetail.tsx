import { useParams } from "wouter";
import { caseStudies } from "@/content/caseStudies";

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find(c => c.slug === slug);

  if (!study) {
    return (
      <div className="px-6 md:px-12 py-32 max-w-5xl mx-auto">
        <h1 className="text-5xl font-serif">Case Study Not Found</h1>
        <p className="text-muted-foreground mt-4">
          The requested case study could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-32 max-w-5xl mx-auto">
      <h1 className="text-5xl font-serif">{study.title}</h1>
      {study.subtitle && (
        <p className="text-sm font-medium text-muted/80 tracking-wide mb-6">
          {study.subtitle}
        </p>
      )}
      <div className="mb-8">
        <span className="inline-block text-xs font-medium tracking-wide uppercase text-accent/80">
          {study.sector}
        </span>
        <span className="ml-4 text-xs font-mono tracking-widest uppercase text-muted/60">
          {study.year}
        </span>
      </div>
      <p className="text-base leading-relaxed mb-8">{study.description}</p>

      {study.solution && (
        <>
          <h2 className="text-2xl font-serif font-bold mb-4">Solution</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-8">
            {study.solution.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </>
      )}

      {study.outcomes && (
        <>
          <h2 className="text-2xl font-serif font-bold mb-4">Outcomes</h2>
          <ul className="list-disc list-inside space-y-2 text-muted mb-8">
            {study.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </>
      )}

      {study.quote && (
        <blockquote className="border-l-4 border-accent/50 pl-6 italic text-muted/80 mb-8">
          <p>{study.quote}</p>
        </blockquote>
      )}
    </div>
  );
}