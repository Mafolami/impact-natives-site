export type CaseStudy = {
  slug: string
  title: string
  client: string
  sector: string
  challenge: string
  solution: string[]
  outcomes: string[]
  quote?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "systems-1",
    title: "Community Systems Mapping",
    client: "Regional NGO coalition",
    sector: "Systems Design",
    challenge: "Existing development interventions in rural Sub-Saharan Africa were designed around simplified linear models that ignored the self-organizing complexity of community life. Informal economies, kinship networks, and traditional governance structures remained invisible to planners, leading to repeated programme failure and misaligned investments.",
    solution: [
      "Designed a participatory systems mapping process engaging over 200 community members alongside local researchers",
      "Using causal loop diagrams and network analysis, produced the first multi-layer map integrating formal institutions, informal economies, and social capital flows across four regions"
    ],
    outcomes: [
      "The resulting framework was adopted by three regional NGOs as their primary planning tool",
      "Intervention design accuracy improved substantially—programmes informed by the map achieved 35% higher efficacy than comparable control initiatives",
      "Communities reported greater ownership of interventions"
    ],
    quote: "The highest leverage points were consistently in informal systems that institutional data had entirely missed. Making the invisible visible was the most significant act of the engagement."
  },
  {
    slug: "systems-2",
    title: "Digital Inclusion Index",
    client: "Association of Southeast Asian Nations (ASEAN) Digital Ministers",
    sector: "Policy Research",
    challenge: "Southeast Asian governments lacked a unified methodology for measuring digital inclusion. Existing indices focused narrowly on connectivity, missing the capability and participation dimensions critical to sustainable adoption. Policy interventions were poorly targeted.",
    solution: [
      "Working with four national governments, developed a comprehensive framework assessing digital access, digital skills, and digital participation",
      "The index covered rural–urban divides, income levels, age demographics, and gender",
      "Created accessible dashboards visualizing results"
    ],
    outcomes: [
      "Four national governments adopted the framework as their primary policy metric",
      "Within 18 months, the index informed targeted funding of USD 120M across digital literacy and infrastructure programmes",
      "Rural digital participation increased 28% in pilot provinces"
    ],
    quote: "Making measurement participatory from the start ensured buy-in and contextual validity. The most transformative insight was recognizing that digital infrastructure without capability is an expensive waste."
  },
  {
    slug: "systems-3",
    title: "Urban Food Systems Redesign",
    client: "West African Urban Development Coalition",
    sector: "Supply Chain",
    challenge: "West African cities relied on fragmented, multi-layered supply chains where smallholder farmers received only 15–20% of retail price. Produce waste reached 40% due to poor logistics. Urban food insecurity coexisted with farmer poverty.",
    solution: [
      "Conducted network mapping of 800+ actors across production, aggregation, transport, and retail",
      "Identified inefficiencies—redundant middlemen, information asymmetries, poor timing coordination",
      "Piloted a cooperative model with 280 farmers enabling direct sales to urban retailers and institutions"
    ],
    outcomes: [
      "Within 12 months, cooperative members saw prices increase to 50% of retail (vs. 18% pre-intervention)",
      "Retailer costs fell 35%",
      "Waste declined from 38% to 8% through better timing and handling",
      "The model scaled to four cities"
    ],
    quote: "The supply chain's core dysfunction was information fragmentation, not production. Better coordination created value for all participants—a rare win."
  },
  {
    slug: "systems-4",
    title: "Climate Finance Mobilization",
    client: "Latin American Green Finance Initiative",
    sector: "Green Finance",
    challenge: "Latin American climate adaptation projects were starved of funding despite high social return on investment. Traditional climate finance mechanisms were slow, procedurally burdensome, and inaccessible to local implementers. Private capital avoided adaptation—seen as low-return philanthropy.",
    solution: [
      "Designed a blended finance fund aggregating concessional climate grants, development finance, and private capital",
      "Created standardized project pipelines, simplified due diligence, and demonstrated returns",
      "Worked with 15 intermediary organizations to build local project capacity"
    ],
    outcomes: [
      "The fund successfully mobilized USD 250M+ across climate adaptation projects in five countries",
      "Average project deployment time fell from 18 months to 4 months",
      "Local organizations accessed capital directly for the first time",
      "A second fund was initiated by peers"
    ],
    quote: "The barrier was structural complexity, not capital availability. Simplification and demonstration of returns unlocked substantial private investment."
  },
  {
    slug: "systems-5",
    title: "Indigenous Land Rights Framework",
    client: "Pacific Islands Forum Secretariat",
    sector: "Governance",
    challenge: "Pacific Island communities faced dual pressures: historical dispossession of land rights, and contemporary extractive industry interests. Weak national legal recognition of customary tenure left communities vulnerable to land grabs. Modern governance structures disrespected traditional decision-making.",
    solution: [
      "Conducted participatory legal research with eight communities, documenting customary land management systems and governance traditions",
      "Co-designed institutional frameworks bridging customary governance and national law",
      "Supported communities through legal recognition processes"
    ],
    outcomes: [
      "All eight communities secured legal land rights recognition within 28 months",
      "Communities established hybrid governance committees combining traditional elders and younger representatives",
      "Sustainable resource management plans were integrated into national policy",
      "A replicable model was adopted by the Pacific Islands Forum"
    ],
    quote: "The deepest insight was that effective governance combines legitimacy (traditional) with capacity (modern). Rather than replacing one with the other, integration proved most powerful."
  },
  {
    slug: "systems-6",
    title: "Regenerative Agriculture Transition",
    client: "East African Smallholder Farmers Alliance",
    sector: "AgriTech",
    challenge: "East African smallholder farmers faced eroding soil fertility, climate variability, and declining income despite increased input costs. Regenerative agriculture models existed but lacked farmer trust, market demonstration, or financial viability. Carbon markets were inaccessible to small producers.",
    solution: [
      "Established demonstration plots with 120 farmer leaders across three countries",
      "Built a low-tech carbon accounting system enabling farmers to document sequestration",
      "Connected certified producers to premium markets and carbon buyers, creating proof of financial viability"
    ],
    outcomes: [
      "3,500 hectares transitioned to regenerative practices within 24 months",
      "Participating farmers increased yields 22% while reducing input costs",
      "Carbon revenues added USD 40–80 per hectare annually",
      "Model attracted replication interest from 14 development organizations"
    ],
    quote: "Farmers understood regeneration intuitively—they needed economic proof and market access, not persuasion. The business model was the critical innovation."
  }
]