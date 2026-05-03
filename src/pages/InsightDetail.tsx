import { useParams } from "wouter";
import { insights } from "@/content/insights";

export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();
  const insight = insights.find(i => i.slug === slug);

  if (!insight) {
    return (
      <div className="px-6 md:px-12 py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif">Insight Not Found</h1>
        <p className="text-muted-foreground mt-4">
          The requested insight could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-32 max-w-3xl mx-auto">
      <h1 className="text-4xl font-serif">{insight.title}</h1>
      <p className="text-muted-foreground mt-4">
        {insight.published} · {insight.category} · {insight.readTime}
      </p>
      <p className="mt-6 leading-relaxed">{insight.excerpt}</p>
      {insight.body.map((paragraph, index) => (
        <p key={index} className="mt-6 leading-relaxed">{paragraph}</p>
      ))}
    </div>
  );
}