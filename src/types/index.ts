export type PillarId = 'bioheed' | 'gojo-nutrition' | 'gojome';

export interface EcosystemPillar {
  id: PillarId;
  name: string;
  divisionTitle: string;
  tagline: string;
  description: string;
  badge: string;
  accentColor: string;
  glowColor: string;
  route: string;
  bulletPoints: string[];
  keyTechnologies?: string[];
}

export type ProductStatus = 'CURRENT' | 'IN_DEVELOPMENT' | 'FUTURE_R_AND_D';

export interface NutritionalMetric {
  name: string;
  value: string;
  dailyValue?: string;
  unit: string;
  icon?: string;
  highlight?: boolean;
}

export interface FlavourVariant {
  id: string;
  name: string;
  colorHex: string;
  badgeBg: string;
  badgeText: string;
  tagline: string;
  notes: string;
  accentGradient: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  tagline: string;
  description: string;
  format: string; // e.g. "200 ml can"
  status: ProductStatus;
  category: string;
  heroImage: string;
  badgeText: string;
  keyHighlights: string[];
  flavours: FlavourVariant[];
  nutritionalFacts: NutritionalMetric[];
  heritageStory?: string;
  isFeatured?: boolean;
}

export interface GojoMeFeature {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  category: 'core' | 'ai' | 'habit';
}

export interface NutritionEngineItem {
  id: string;
  name: string;
  portion: string;
  calories: number;
  proteinGrams: number;
  calciumMg: number;
  fibreGrams: number;
  verifiedSource: string;
  aiInsightTip: string;
}

export type RdStage = 'DISCOVERY' | 'FORMULATION' | 'PRE_CLINICAL' | 'CLINICAL_EVALUATION' | 'PILOT_DEVELOPMENT' | 'COMMERCIAL_READY';

export interface RdProject {
  id: string;
  title: string;
  division: 'Bioheed Healthcare' | 'Gojo Nutrition' | 'GojoMe Technology';
  category: string;
  stage: RdStage;
  stageLabel: string;
  summary: string;
  scientificFocus: string;
  timeline: string;
}

export type JobDepartment =
  | 'R&D'
  | 'Nutrition'
  | 'Technology'
  | 'Data & AI'
  | 'Product'
  | 'Marketing'
  | 'Sales'
  | 'Operations'
  | 'Finance';

export interface JobOpening {
  id: string;
  title: string;
  department: JobDepartment;
  location: string;
  type: 'Full-Time' | 'Part-Time' | 'Contract' | 'Hybrid' | 'Remote';
  experience: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface InvestorReport {
  id: string;
  title: string;
  category: 'Quarterly Report' | 'Annual Report' | 'Press Release' | 'Governance & ESG' | 'Announcement';
  period: string;
  summary: string;
  date: string;
  downloadUrl?: string;
  isImportant?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Scientific R&D' | 'Nutrition Insights' | 'Technology' | 'Corporate Ecosystem';
  author: string;
  authorRole: string;
  readTime: string;
  publishDate: string;
  coverImage?: string;
}

export interface ContactFormData {
  inquiryType: string;
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  subject: string;
  message: string;
}

export interface GojoUserProfile {
  id: string;
  gojoId: string;
  name: string;
  email: string;
  role: 'Consumer' | 'Healthcare Practitioner' | 'Investor' | 'Researcher';
  nutritionScore: number;
  dailyStreak: number;
  permissions: {
    gojomeAccess: boolean;
    nutritionPreferences: boolean;
    bioheedClinicalAccess: boolean;
  };
}
