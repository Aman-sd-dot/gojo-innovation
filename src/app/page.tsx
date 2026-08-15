import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { EcosystemOverview } from '@/components/ecosystem/EcosystemOverview';
import { GojoConnectionFlow } from '@/components/ecosystem/GojoConnectionFlow';
import { ProductShowcase } from '@/components/product/ProductShowcase';
import { GojoMeSection } from '@/components/gojome/GojoMeSection';
import { PhysicalToDigitalGateway } from '@/components/gateway/PhysicalToDigitalGateway';
import { RdSection } from '@/components/rd/RdSection';
import { VisionPhilosophy } from '@/components/vision/VisionPhilosophy';
import { WhyGojo } from '@/components/why/WhyGojo';
import { OurFuture } from '@/components/future/OurFuture';
import { CareersPreview } from '@/components/careers/CareersPreview';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'GOJO Innovation Pvt. Ltd. | Healthcare, Nutrition & Technology Ecosystem',
  description:
    'Building a smarter future of healthcare and nutrition through Bioheed Pharmaceutical, GOJO Nutrition, and the GojoMe AI Nutrition Intelligence Platform.',
  path: '/',
});

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Ecosystem Overview (One Vision. Three Connected Pillars.) */}
      <EcosystemOverview />

      {/* 3. The GOJO Connection (From What You Consume to What You Understand) */}
      <GojoConnectionFlow />

      {/* 4. GOJO Product Section (GOJO – The Maharaja's Drink) */}
      <ProductShowcase />

      {/* 5. GojoMe Section (Meet GojoMe — Your Nutrition Intelligence) */}
      <GojoMeSection />

      {/* 6. GOJO × GojoMe Physical-to-Digital Gateway */}
      <PhysicalToDigitalGateway />

      {/* 7. R&D & Innovation (Innovation Doesn't Stop at the First Product) */}
      <RdSection />

      {/* 8. Our Vision (A Healthier Future Begins With Better Choices) */}
      <VisionPhilosophy />

      {/* 9. Why GOJO (Nutrition, Science, Technology, Care) */}
      <WhyGojo />

      {/* 10. Our Future (We Are Building More Than Products) */}
      <OurFuture />

      {/* 11. Careers Preview (Build the Future With Us) */}
      <CareersPreview />
    </div>
  );
}
