import {
  EcosystemPillar,
  Product,
  GojoMeFeature,
  NutritionEngineItem,
  RdProject,
  JobOpening,
  InvestorReport,
  BlogPost,
} from '@/types';

export const COMPANY_DETAILS = {
  name: 'GOJO Innovation Pvt. Ltd.',
  shortName: 'GOJO Innovation',
  tagline: 'Nutrition. Technology. Healthcare',
  logo: '/images/logo.png',
  heroHeading: 'Building Legacy for a Smarter Future of Nutrition, Technology & Healthcare',
  heroSubheading:
    'सर्वे सन्तु निरामयाः। ज्ञानं अस्माकं दीपः।\nविज्ञानम् अस्माकं मार्गः। सेवा अस्माकं धर्मः।\nमानवता अस्माकं लक्ष्यं। एसा गोजोः प्रतिज्ञा॥',
  address: 'Head Office: Hyderabad – 500001, India',
  email: 'info@gojoinnovation.com',
  website: 'www.gojoinnovation.com',
  phone: '+91 92344 94098',
  social: {
    linkedin: 'https://linkedin.com/company/gojo-innovation',
    twitter: 'https://twitter.com/gojoinnovation',
    instagram: 'https://instagram.com/gojoinnovation',
    youtube: 'https://youtube.com/@gojoinnovation',
  },
};

export const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    id: 'bioheed',
    name: 'BIOHEED PHARMACEUTICAL',
    divisionTitle: 'Healthcare Division',
    tagline: 'Science for Better Health.',
    description:
      'Bioheed Pharmaceutical is the healthcare division of GOJO Innovation, focused on pharmaceutical solutions, healthcare products and research-driven innovation.',
    badge: 'Pillar 01 — Healthcare Foundation',
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    route: '/bioheed',
    bulletPoints: [
      'Pharmaceutical research & formulation science',
      'Clinical-grade therapeutic pipelines',
      'Rigorous quality control and regulatory standards',
      'Foundational medical backing for the entire ecosystem',
    ],
    keyTechnologies: ['Targeted Formulations', 'Clinical Trials Protocol', 'Regulatory Compliance'],
  },
  {
    id: 'gojo-nutrition',
    name: 'GOJO NUTRITION',
    divisionTitle: 'Nutrition Division (Under Bioheed)',
    tagline: 'Nutrition, Reimagined.',
    description:
      "Operating under Bioheed Pharmaceutical, GOJO Nutrition creates accessible, modern nutritional beverages and functional foods inspired by India's rich heritage and backed by modern science.",
    badge: 'Pillar 02 — Nutritional Innovation',
    accentColor: '#D97706',
    glowColor: 'rgba(217, 119, 6, 0.25)',
    route: '/gojo-nutrition',
    bulletPoints: [
      "Home of GOJO – The Maharaja's Drink (Flagship 200 ml)",
      'Essential daily protein and calcium fortification',
      'Rich flavor profiles: Vanilla, Chocolate, and Coffee',
      'Expanding into functional foods, fortified powders, and active supplements',
    ],
    keyTechnologies: ['Bio-available Nutrients', 'Micro-encapsulation', 'Natural Flavour Blends'],
  },
  {
    id: 'gojome',
    name: 'GojoMe',
    divisionTitle: 'Technology Platform',
    tagline: 'Know Your Nutrition. Improve Your Life.',
    description:
      'GojoMe is our nutrition intelligence platform designed to help people track, understand and improve their nutrition through technology and AI-powered insights.',
    badge: 'Pillar 03 — Nutrition Intelligence',
    accentColor: '#7C3AED',
    glowColor: 'rgba(124, 58, 237, 0.25)',
    route: '/gojome',
    bulletPoints: [
      'Food logging & instant nutrient breakdown',
      'Verified macro & micro-nutrient computation engine',
      'Personalized AI dietary pattern interpretations',
      'Seamless physical-to-digital QR gateway from GOJO cans',
    ],
    keyTechnologies: ['Verified USDA/ICMR Database', 'AI Nutrition Sifting', 'Privacy-Preserving Sync'],
  },
];

export const FLAGSHIP_PRODUCT: Product = {
  id: 'gojo-maharajas-drink',
  slug: 'the-maharajas-drink',
  name: "GOJO – The Maharaja's Drink",
  brand: 'GOJO Nutrition',
  tagline: 'Royal Taste. Everyday Nutrition.',
  description:
    "A modern nutritional beverage inspired by India's rich heritage and crafted for today's lifestyle. Formulated with balanced proteins, bioavailable calcium, and ancient grain extracts in a ready-to-drink format.",
  format: '200 ml Recyclable Can',
  status: 'CURRENT',
  category: 'Nutritional Beverage',
  heroImage: '/images/products/gojo_can_vanilla.png',
  badgeText: 'Flagship Beverage',
  keyHighlights: [
    'Rich in Bioavailable Protein',
    'Essential Daily Calcium Support',
    'Convenient 200 ml Ready-to-Drink Format',
    'Crafted with Ancient Heritage Grains & Modern Science',
  ],
  heritageStory:
    'For centuries, royal Indian formulations balanced vitality and strength through heritage botanical extracts and nutrient-dense dairy elements. GOJO reimagines this royal legacy into a contemporary, grab-and-go nutritional powerhouse for active individuals, students, and professionals.',
  flavours: [
    {
      id: 'vanilla',
      name: 'Imperial Vanilla',
      colorHex: '#D97706',
      badgeBg: 'bg-amber-500/20 border-amber-400/40 text-amber-300',
      badgeText: 'Smooth & Classic',
      tagline: 'Velvety vanilla infused with sweet cream undertones and heritage nourishment.',
      notes: 'Madagascar vanilla beans, balanced milk protein, fortified calcium.',
      accentGradient: 'from-amber-500/30 via-amber-700/20 to-transparent',
    },
    {
      id: 'chocolate',
      name: 'Royal Chocolate',
      colorHex: '#92400E',
      badgeBg: 'bg-amber-800/20 border-amber-700/40 text-amber-200',
      badgeText: 'Rich & Indulgent',
      tagline: 'Decadent cocoa blend delivering rich antioxidant notes with daily fuel.',
      notes: 'Single-origin roasted cocoa, slow-release protein complex, vital minerals.',
      accentGradient: 'from-amber-800/30 via-orange-950/20 to-transparent',
    },
    {
      id: 'coffee',
      name: 'Mysore Roast Coffee',
      colorHex: '#78350F',
      badgeBg: 'bg-yellow-900/20 border-yellow-700/40 text-yellow-300',
      badgeText: 'Energizing & Bold',
      tagline: 'South Indian roasted coffee bean infusion for crisp mental alertness and sustained energy.',
      notes: 'Premium Arabica-Robusta blend, natural caffeine kick, calcium fortified.',
      accentGradient: 'from-yellow-800/30 via-stone-900/20 to-transparent',
    },
  ],
  nutritionalFacts: [
    { name: 'Protein', value: '12g', dailyValue: '24%', unit: 'g', highlight: true },
    { name: 'Calcium', value: '350mg', dailyValue: '35%', unit: 'mg', highlight: true },
    { name: 'Total Energy', value: '160', dailyValue: '8%', unit: 'kcal' },
    { name: 'Dietary Fibre', value: '3.5g', dailyValue: '14%', unit: 'g' },
    { name: 'Vitamin D3', value: '400IU', dailyValue: '50%', unit: 'IU' },
    { name: 'Zero Trans Fats', value: '0g', dailyValue: '0%', unit: 'g' },
  ],
};

export const FUTURE_NUTRITION_PORTFOLIO = [
  {
    category: 'Protein Nutrition',
    status: 'R&D / Future Portfolio',
    description: 'High-density plant & peptide protein isolates for fitness, recovery, and senior vitality.',
    badge: 'Under Formulation',
  },
  {
    category: 'Functional Beverages',
    status: 'R&D / Future Portfolio',
    description: 'Cognitive focus tonics, electrolyte hydration matrixes, and stress-modulating adaptogens.',
    badge: 'Laboratory Testing',
  },
  {
    category: 'Nutritional Supplements',
    status: 'R&D / Future Portfolio',
    description: 'Liposomal vitamins, chewable micronutrient complexes, and joint mobility nutrition.',
    badge: 'Clinical Design',
  },
  {
    category: 'Fortified Nutrition',
    status: 'R&D / Future Portfolio',
    description: 'Millet-based breakfast nutrition powders and clinical medical nutritional foods.',
    badge: 'Concept Stage',
  },
];

export const GOJOME_FEATURES: GojoMeFeature[] = [
  {
    id: 'track',
    stepNumber: '01',
    title: 'TRACK',
    tagline: 'Seamless Daily Logging',
    description: 'Record your daily food, beverages, and snacks in seconds with intelligent visual search and barcode/QR scanning.',
    icon: 'ScanLine',
    category: 'core',
  },
  {
    id: 'analyse',
    stepNumber: '02',
    title: 'ANALYSE',
    tagline: 'Deep Parameter Breakdown',
    description: 'Understand calories, protein, calcium, fibre, micronutrients, and glycemic distribution from verified nutritional databases.',
    icon: 'BarChart3',
    category: 'core',
  },
  {
    id: 'ai-insights',
    stepNumber: '03',
    title: 'AI INSIGHTS',
    tagline: 'Tailored Personalized Guidance',
    description: 'Receive intelligent, context-aware nutrition suggestions based on your personal health goals, habits, and body feedback.',
    icon: 'Sparkles',
    category: 'ai',
  },
  {
    id: 'set-goals',
    stepNumber: '04',
    title: 'SET GOALS',
    tagline: 'Dynamic Goal Orchestration',
    description: 'Create customized nutrition targets for muscle maintenance, bone density, energy endurance, or healthy weight control.',
    icon: 'Target',
    category: 'habit',
  },
  {
    id: 'understand',
    stepNumber: '05',
    title: 'UNDERSTAND',
    tagline: 'Demystifying Nutrition Science',
    description: 'Turn complex clinical nutrition jargon and confusing food labels into crystal-clear, actionable summaries.',
    icon: 'BrainCircuit',
    category: 'ai',
  },
  {
    id: 'improve',
    stepNumber: '06',
    title: 'IMPROVE',
    tagline: 'Sustainable Daily Habit Building',
    description: 'Track your long-term progress score and build durable, healthier dietary habits step by step without extreme diets.',
    icon: 'TrendingUp',
    category: 'habit',
  },
];

export const VERIFIED_NUTRITION_DATABASE: NutritionEngineItem[] = [
  {
    id: 'gojo-vanilla-can',
    name: "GOJO Maharaja's Drink (Vanilla 200ml)",
    portion: '1 Can (200 ml)',
    calories: 160,
    proteinGrams: 12,
    calciumMg: 350,
    fibreGrams: 3.5,
    verifiedSource: 'Bioheed Laboratory Analytical Assay',
    aiInsightTip: 'Excellent mid-day fuel! Provides 24% of your daily protein and 35% of calcium with low glycemic impact.',
  },
  {
    id: 'sprouted-moong-salad',
    name: 'Sprouted Moong & Vegetable Salad',
    portion: '1 Medium Bowl (150 g)',
    calories: 120,
    proteinGrams: 7.8,
    calciumMg: 65,
    fibreGrams: 5.2,
    verifiedSource: 'ICMR Indian Food Composition Tables',
    aiInsightTip: 'Rich in dietary fibre and active enzymes. Pair with a source of Vitamin C to boost iron absorption.',
  },
  {
    id: 'curd-almond-mix',
    name: 'Probiotic Curd with Crushed Almonds',
    portion: '1 Cup (180 g)',
    calories: 190,
    proteinGrams: 9.5,
    calciumMg: 280,
    fibreGrams: 2.1,
    verifiedSource: 'USDA / National Institute of Nutrition',
    aiInsightTip: 'Supports gut microbiome and bone density. Great post-dinner or evening recovery snack.',
  },
  {
    id: 'ragi-dosa-sambar',
    name: 'Finger Millet (Ragi) Dosa with Lentil Sambar',
    portion: '2 Pieces (160 g)',
    calories: 240,
    proteinGrams: 8.2,
    calciumMg: 310,
    fibreGrams: 6.4,
    verifiedSource: 'ICMR Indian Food Composition Tables',
    aiInsightTip: 'Ragi is an exceptional heritage source of plant calcium. Sustained complex carbohydrates maintain steady energy.',
  },
  {
    id: 'grilled-paneer-greens',
    name: 'Herbed Grilled Paneer with Sauteed Spinach',
    portion: '1 Plate (200 g)',
    calories: 280,
    proteinGrams: 18.5,
    calciumMg: 420,
    fibreGrams: 4.1,
    verifiedSource: 'Bioheed Clinical Nutrition Standard',
    aiInsightTip: 'High protein and calcium density. Outstanding for recovery and satiety.',
  },
];

export const RD_PROJECTS: RdProject[] = [
  {
    id: 'rd-01',
    title: 'Micro-Encapsulated Bio-Calcium Stability in Ready-to-Drink Matrix',
    division: 'Bioheed Healthcare',
    category: 'Biotechnology & Formulations',
    stage: 'PILOT_DEVELOPMENT',
    stageLabel: 'Pilot Stage',
    summary:
      'Researching advanced lipid nano-carriers to enhance the elemental bioavailability of calcium in ambient shelf-stable beverages without mineral precipitation.',
    scientificFocus: 'Elemental Absorption & Emulsion Chemistry',
    timeline: 'Target: Q4 2026',
  },
  {
    id: 'rd-02',
    title: 'Peptide-Enriched Functional Ancient Millet Proteins',
    division: 'Gojo Nutrition',
    category: 'Nutraceutical Engineering',
    stage: 'FORMULATION',
    stageLabel: 'Formulation Phase',
    summary:
      'Enzymatic hydrolysis of Indian finger millet (Ragi) and pearl millet (Bajra) to create fast-digesting, hypoallergenic plant peptides for sports and elderly nutrition.',
    scientificFocus: 'Enzyme Cleavage & Amino Acid Profiling',
    timeline: 'Target: Q2 2027',
  },
  {
    id: 'rd-03',
    title: 'Real-Time Glycemic & Satiety Response Modeling Engine',
    division: 'GojoMe Technology',
    category: 'Predictive Health AI',
    stage: 'CLINICAL_EVALUATION',
    stageLabel: 'Validation Trial',
    summary:
      'Developing privacy-preserving machine learning algorithms that compute estimated post-prandial glycemic loads using verified food composition and meal sequencing.',
    scientificFocus: 'Metabolic Informatics & Neural Forecasting',
    timeline: 'Target: Q1 2027',
  },
  {
    id: 'rd-04',
    title: 'Extended Shelf-Life Fortification without Synthetic Preservatives',
    division: 'Bioheed Healthcare',
    category: 'Pharma-Grade Food Science',
    stage: 'PRE_CLINICAL',
    stageLabel: 'Pre-Clinical Assay',
    summary:
      'Investigating natural botanical polyphenols and aseptic barrier processing to guarantee nutrient potency throughout ambient tropical distribution cycles.',
    scientificFocus: 'Antioxidant Kinetics & Thermal Integrity',
    timeline: 'Target: Q3 2027',
  },
];

export const WHY_GOJO_CARDS = [
  {
    id: 'nutrition',
    title: 'NUTRITION',
    subtitle: 'Nourishment with Purpose',
    description: 'Developing better nutritional products for everyday life, combining ancient wisdom with cutting-edge dietary science.',
    icon: 'Apple',
    color: '#D97706',
  },
  {
    id: 'science',
    title: 'SCIENCE',
    subtitle: 'Evidence-Based Foundations',
    description: 'Building products and solutions with research, pharmacological precision, and clinical rigor at the core.',
    icon: 'FlaskConical',
    color: '#10B981',
  },
  {
    id: 'technology',
    title: 'TECHNOLOGY',
    subtitle: 'Intelligent Empowerment',
    description: 'Using AI and software architecture to make nutrition understandable, personalized, and actionable in daily habits.',
    icon: 'Cpu',
    color: '#7C3AED',
  },
  {
    id: 'care',
    title: 'CARE',
    subtitle: 'Human-Centered Ecosystem',
    description: "Creating solutions designed around people's real-world needs, making lifelong health accessible to everyone.",
    icon: 'HeartHandshake',
    color: '#0EA5E9',
  },
];

export const CAREER_OPENINGS: JobOpening[] = [
  {
    id: 'job-01',
    title: 'Senior Food Scientist & Formulation Lead',
    department: 'R&D',
    location: 'Hyderabad, India (On-site)',
    type: 'Full-Time',
    experience: '5+ Years',
    summary: 'Lead formulation chemistry and clinical stabilization for our expanding nutritional beverage and functional food portfolio.',
    responsibilities: [
      'Design shelf-stable beverage prototypes with targeted macro/micronutrient profiles.',
      'Collaborate with Bioheed pharmaceutical team on bio-availability and regulatory standards.',
      'Oversee pilot batch runs and sensory evaluation testing.',
    ],
    qualifications: [
      'Master’s or Ph.D. in Food Science, Food Technology, or Biochemical Engineering.',
      'Demonstrated track record in RTD beverage formulation and scale-up manufacturing.',
      'Strong grasp of FSSAI and international food safety regulations.',
    ],
  },
  {
    id: 'job-02',
    title: 'Lead AI / ML Engineer (Nutrition Intelligence)',
    department: 'Data & AI',
    location: 'Hyderabad, India (Hybrid)',
    type: 'Full-Time',
    experience: '4+ Years',
    summary: 'Architect the core intelligence algorithms powering GojoMe’s dietary feedback and predictive wellness recommendations.',
    responsibilities: [
      'Build LLM/RAG pipelines that translate verified food composition tables into personalized user guidance.',
      'Implement privacy-preserving data aggregation and edge computation for mobile devices.',
      'Collaborate with clinical dietitians to validate recommendation boundaries.',
    ],
    qualifications: [
      'Degree in Computer Science, Artificial Intelligence, or related technical field.',
      'Proficiency in Python, PyTorch, LangChain/LlamaIndex, Next.js, and Vector Databases.',
      'Passion for healthcare technology and user privacy.',
    ],
  },
  {
    id: 'job-03',
    title: 'Clinical Nutrition Specialist & Research Dietitian',
    department: 'Nutrition',
    location: 'Hyderabad, India (On-site / Hybrid)',
    type: 'Full-Time',
    experience: '3+ Years',
    summary: 'Provide clinical oversight and scientific validation for nutritional claims across GOJO products and GojoMe content.',
    responsibilities: [
      'Audit nutritional parameters against ICMR, WHO, and FSSAI guidelines.',
      'Author scientific literature whitepapers and consumer-facing educational insights.',
      'Interface with Bioheed clinical trials team on protocol creation.',
    ],
    qualifications: [
      'M.Sc. or Registered Dietitian (RD) credential in Clinical Nutrition & Dietetics.',
      'Experience in evidence-based nutritional research or hospital dietary consultation.',
    ],
  },
  {
    id: 'job-04',
    title: 'Senior Full-Stack Engineer (Next.js / TypeScript / React Native)',
    department: 'Technology',
    location: 'Hyderabad, India / Remote',
    type: 'Full-Time',
    experience: '4+ Years',
    summary: 'Build high-performance web and mobile interfaces for the GOJO ecosystem, GojoMe, and GOJO ID platform.',
    responsibilities: [
      'Develop modular, accessible, WCAG-compliant UI components across web and mobile.',
      'Architect robust API integrations with headless CMS, Prisma, and authentication layers.',
      'Optimize Core Web Vitals and app launch performance.',
    ],
    qualifications: [
      'Expertise in TypeScript, React, Next.js App Router, Tailwind CSS, and REST/GraphQL APIs.',
      'Experience with scalable state management and cloud deployments (Vercel/AWS).',
    ],
  },
  {
    id: 'job-05',
    title: 'Brand Marketing & Communications Manager',
    department: 'Marketing',
    location: 'Hyderabad, India',
    type: 'Full-Time',
    experience: '4+ Years',
    summary: 'Shape the storytelling and multi-channel brand presence for GOJO Innovation and the Maharaja’s Drink.',
    responsibilities: [
      'Execute high-impact integrated marketing campaigns across digital, retail, and corporate PR.',
      'Safeguard brand voice and technical accuracy across all customer touchpoints.',
      'Drive physical-to-digital QR campaign engagement with the GojoMe team.',
    ],
    qualifications: [
      'Proven background in FMCG, wellness, or healthtech brand marketing.',
      'Superb copycrafting and creative direction skills.',
    ],
  },
];

export const INVESTOR_REPORTS: InvestorReport[] = [
  {
    id: 'inv-01',
    title: 'Annual Corporate Strategy & Ecosystem Report FY 2025-26',
    category: 'Annual Report',
    period: 'FY 2025-26',
    summary: 'Comprehensive overview of multi-pillar expansion, R&D investments in Bioheed, and GojoMe technology milestones.',
    date: 'July 2026',
    isImportant: true,
  },
  {
    id: 'inv-02',
    title: 'Q1 FY27 Strategic Pillar Performance & Commercial Roadmap',
    category: 'Quarterly Report',
    period: 'Q1 FY 2026-27',
    summary: 'Detailed financial disclosures, operational metrics, and regional distribution rollout for GOJO – The Maharaja’s Drink.',
    date: 'August 2026',
    isImportant: true,
  },
  {
    id: 'inv-03',
    title: 'GOJO Innovation Corporate Governance & ESG Framework',
    category: 'Governance & ESG',
    period: '2026-2030',
    summary: 'Statement on clinical ethical governance, sustainable aluminium packaging, and consumer data privacy standards.',
    date: 'May 2026',
  },
  {
    id: 'inv-04',
    title: 'Press Release: GojoMe Nutrition Platform Beta Architecture Release',
    category: 'Press Release',
    period: 'June 2026',
    summary: 'Official corporate announcement detailing the physical-to-digital QR bridge linking physical cans to AI nutrition intelligence.',
    date: 'June 2026',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-01',
    slug: 'science-of-daily-calcium-absorption',
    title: 'The Science of Daily Calcium Bio-availability in Modern Lifestyles',
    excerpt: 'Why elemental calcium alone is insufficient without balanced co-factors, and how modern beverages can close the national nutritional deficit.',
    content: `
# The Science of Daily Calcium Bio-availability

Adequate calcium intake is critical throughout every stage of human life, supporting skeletal bone density, neuromuscular transmission, and cardiac muscle rhythm. However, modern dietary transitions have created significant micronutrient deficits across urban populations.

## Overcoming the Absorption Hurdle
Ingesting calcium does not automatically equal absorption. Without adequate vitamin D3, phosphorus balance, and a bioavailable carrier matrix, traditional supplements frequently cause gastrointestinal distress and poor cellular uptake.

### The GOJO Formulation Approach
At Bioheed Pharmaceutical and GOJO Nutrition, our R&D team engineered a liquid colloidal matrix that keeps calcium in stable suspension while pairing it with bioavailable milk proteins. This ensures optimal digestion and sustained daily nourishment in a single 200 ml serving.
    `,
    category: 'Scientific R&D',
    author: 'Dr. S. K. Raman',
    authorRole: 'Chief Scientific Officer, Bioheed Pharmaceutical',
    readTime: '6 min read',
    publishDate: 'August 2026',
  },
  {
    id: 'post-02',
    slug: 'bridging-physical-nutrition-with-ai',
    title: 'Bridging Physical Nutrition with Intelligent Technology: The GojoMe Thesis',
    excerpt: 'How connected consumer packaging and verified nutritional computation are transforming passive food choices into proactive health intelligence.',
    content: `
# The Convergence of Consumer Food and Digital Intelligence

For decades, consumer food products and health apps have existed in total isolation. You buy a beverage, glance briefly at an obscure nutrition label, and continue your day with no contextual awareness of your body's cumulative nutritional profile.

## The Physical-to-Digital Leap
GOJO Innovation introduces a continuous loop:
1. **Physical Nutrition**: High-quality formulation via GOJO – The Maharaja's Drink.
2. **Instant Bridge**: On-pack QR code linking directly to GojoMe.
3. **Intelligent Feedback**: The verified computation engine calculates exactly how that can fits into your daily protein and calcium goals.

By combining Bioheed’s scientific rigor with GojoMe’s machine learning platform, we make everyday nutrition actionable and clear.
    `,
    category: 'Technology',
    author: 'Aryan Mehta',
    authorRole: 'Head of Product, GojoMe Intelligence',
    readTime: '5 min read',
    publishDate: 'July 2026',
  },
  {
    id: 'post-03',
    slug: 'heritage-millets-meet-modern-nutraceuticals',
    title: 'Heritage Millets Meet Modern Science: The Maharaja’s Drink Formulation',
    excerpt: 'Exploring how India’s rich botanical heritage inspired a contemporary ready-to-drink beverage crafted for active professionals.',
    content: `
# Reimagining Ancient Wisdom with Modern Precision

Ancient Indian culinary science recognized the vital energetic properties of slow-digesting grains, nourishing dairy extracts, and fragrant spices. These recipes sustained royalty, warriors, and everyday citizens alike.

## Modernizing the Royal Formula
In developing GOJO – The Maharaja's Drink, our task was to preserve this sensory delight while upgrading the nutritional architecture to meet modern macro-targets:
- 12g high-purity protein per 200 ml
- 350mg bioavailable calcium
- Imperial Vanilla, Royal Chocolate, and Mysore Roast Coffee profiles

The result is a celebration of heritage taste meeting modern nutritional science.
    `,
    category: 'Nutrition Insights',
    author: 'Kavita Reddy',
    authorRole: 'Lead Food Technologist, GOJO Nutrition',
    readTime: '4 min read',
    publishDate: 'June 2026',
  },
];
