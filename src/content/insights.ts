export type Insight = {
  slug: string
  title: string
  category: string
  readTime: string
  excerpt: string
  published: string
  body: string[]
}

export const insights: Insight[] = [
  {
    slug: 'insight-1',
    title: 'Why Systems Thinking Matters in Social Innovation',
    category: 'Systems',
    readTime: '5 min read',
    excerpt: 'Understanding systems thinking helps organizations move beyond surface-level interventions into structural change. We explore how causal loops and feedback dynamics reframe what it means to "solve" a problem.',
    published: 'January 2026',
    body: []
  },
  {
    slug: 'insight-2',
    title: 'Designing for Communities, Not Users',
    category: 'Design',
    readTime: '7 min read',
    excerpt: 'Real impact design requires shifting from user-centric thinking to community-first systems. When the community is the client, design principles transform entirely.',
    published: 'February 2026',
    body: []
  },
  {
    slug: 'insight-3',
    title: 'The Future of Impact Infrastructure',
    category: 'Technology',
    readTime: '6 min read',
    excerpt: 'Infrastructure for social impact is evolving into modular, data-driven ecosystems. We examine the building blocks emerging across sectors and geographies.',
    published: 'March 2026',
    body: []
  },
  {
    slug: 'insight-4',
    title: 'On Building for Scale Without Losing Purpose',
    category: 'Strategy',
    readTime: '8 min read',
    excerpt: 'Scaling impact without diluting mission requires intentional architecture. We share hard-won lessons from five engagements where scale and purpose intersected.',
    published: 'March 2026',
    body: []
  },
  {
    slug: 'insight-5',
    title: 'Digital Tools as Accountability Mechanisms',
    category: 'Technology',
    readTime: '5 min read',
    excerpt: 'The most underutilized function of digital platforms in the development sector is accountability. We look at how transparency by design changes outcomes.',
    published: 'February 2026',
    body: []
  },
  {
    slug: 'insight-6',
    title: 'Systems Thinking in International Development',
    category: 'Systems',
    readTime: '9 min read',
    excerpt: 'International development is ripe for a systems revolution. Donor cycles, indicator fixation, and siloed programming all resist the complex adaptive systems reality on the ground.',
    published: 'January 2026',
    body: []
  }
]