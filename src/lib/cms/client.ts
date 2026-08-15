import {
  COMPANY_DETAILS,
  ECOSYSTEM_PILLARS,
  FLAGSHIP_PRODUCT,
  FUTURE_NUTRITION_PORTFOLIO,
  GOJOME_FEATURES,
  VERIFIED_NUTRITION_DATABASE,
  RD_PROJECTS,
  CAREER_OPENINGS,
  INVESTOR_REPORTS,
  BLOG_POSTS,
} from '@/data/mockData';
import {
  EcosystemPillar,
  Product,
  GojoMeFeature,
  NutritionEngineItem,
  RdProject,
  JobOpening,
  InvestorReport,
  BlogPost,
  PillarId,
} from '@/types';

/**
 * Headless CMS Client Interface
 * Allows seamless hot-swapping between Sanity, Strapi, REST APIs, or local cached datasets
 * without altering any frontend UI components.
 */
class CmsClient {
  private cmsType: string;
  private apiEndpoint?: string;

  constructor() {
    this.cmsType = process.env.NEXT_PUBLIC_CMS_TYPE || 'mock';
    this.apiEndpoint = process.env.CMS_PROJECT_ID;
  }

  async getCompanyDetails() {
    return COMPANY_DETAILS;
  }

  async getEcosystemPillars(): Promise<EcosystemPillar[]> {
    if (this.cmsType === 'sanity' || this.cmsType === 'api') {
      try {
        const res = await fetch(`${this.apiEndpoint}/pillars`, { next: { revalidate: 60 } });
        if (res.ok) return await res.json();
      } catch (err) {
        console.warn('CMS Fetch failed, falling back to cached ecosystem data:', err);
      }
    }
    return ECOSYSTEM_PILLARS;
  }

  async getPillarById(id: PillarId | string): Promise<EcosystemPillar | undefined> {
    const pillars = await this.getEcosystemPillars();
    return pillars.find((p) => p.id === id);
  }

  async getFlagshipProduct(): Promise<Product> {
    if (this.cmsType === 'sanity' || this.cmsType === 'api') {
      try {
        const res = await fetch(`${this.apiEndpoint}/products/flagship`, { next: { revalidate: 60 } });
        if (res.ok) return await res.json();
      } catch (err) {
        console.warn('CMS Fetch failed, falling back to cached product data:', err);
      }
    }
    return FLAGSHIP_PRODUCT;
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    const product = await this.getFlagshipProduct();
    if (product.slug === slug) return product;
    return undefined;
  }

  async getFutureNutritionPortfolio() {
    return FUTURE_NUTRITION_PORTFOLIO;
  }

  async getGojoMeFeatures(): Promise<GojoMeFeature[]> {
    return GOJOME_FEATURES;
  }

  async getVerifiedNutritionDatabase(): Promise<NutritionEngineItem[]> {
    return VERIFIED_NUTRITION_DATABASE;
  }

  async getRdProjects(): Promise<RdProject[]> {
    return RD_PROJECTS;
  }

  async getCareers(): Promise<JobOpening[]> {
    return CAREER_OPENINGS;
  }

  async getJobById(id: string): Promise<JobOpening | undefined> {
    const jobs = await this.getCareers();
    return jobs.find((j) => j.id === id);
  }

  async getInvestorReports(): Promise<InvestorReport[]> {
    return INVESTOR_REPORTS;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return BLOG_POSTS;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const posts = await this.getBlogPosts();
    return posts.find((p) => p.slug === slug);
  }
}

export const cms = new CmsClient();
