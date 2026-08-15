import React from 'react';
import { ProductShowcase } from '@/components/product/ProductShowcase';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: "GOJO Nutrition | GOJO – The Maharaja's Drink",
  description:
    "GOJO Nutrition operates under Bioheed Pharmaceutical, crafting modern nutritional beverages inspired by India's heritage. Discover GOJO – The Maharaja's Drink.",
  path: '/gojo-nutrition',
});

export default function GojoNutritionPage() {
  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-8">
        <PageHeader
          badge="NUTRITION DIVISION UNDER BIOHEED"
          badgeVariant="amber"
          title="GOJO NUTRITION"
          subtitle="Nutrition, Reimagined. Operating under Bioheed Pharmaceutical, GOJO Nutrition creates accessible, modern nutritional beverages and functional foods inspired by India's rich heritage and backed by modern science."
        />
      </SectionContainer>

      {/* Main Flagship Product Component */}
      <ProductShowcase />
    </div>
  );
}
