import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { GojoCanGraphic } from '@/components/brand/GojoCanGraphic';
import { FLAGSHIP_PRODUCT, FUTURE_NUTRITION_PORTFOLIO } from '@/data/mockData';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Products Portfolio | GOJO Innovation & Nutrition',
  description:
    'Explore current commercial beverages and active R&D nutritional formulations developed by GOJO Innovation.',
  path: '/products',
});

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-16">
        <PageHeader
          badge="PORTFOLIO CATALOG"
          badgeVariant="amber"
          title="Products &amp; Formulations"
          subtitle="Explore commercially available nutritional beverages alongside active R&amp;D formulations engineered by Bioheed Pharmaceutical and GOJO Nutrition."
        />

        {/* Current Commercial Flagship */}
        <div className="text-left mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Available in Retail &amp; Distribution
          </span>
          <h3 className="text-2xl font-bold font-heading text-white mt-1">
            Current Product Line
          </h3>
        </div>

        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-amber-500/30 bg-slate-900/90 text-left mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <GojoCanGraphic flavour="vanilla" size="md" />
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {FLAGSHIP_PRODUCT.badgeText}
                </span>
                <span className="text-xs text-slate-400">{FLAGSHIP_PRODUCT.format}</span>
              </div>

              <h3 className="text-3xl font-extrabold font-heading text-white">
                {FLAGSHIP_PRODUCT.name}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {FLAGSHIP_PRODUCT.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {FLAGSHIP_PRODUCT.flavours.map((flavour) => (
                  <span
                    key={flavour.id}
                    className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200"
                  >
                    {flavour.name}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Button href="/gojo-nutrition" size="md" variant="maharaja" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  View Full Product Details
                </Button>
                <Button href="/shop" size="md" variant="outline">
                  Store Locator
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Future R&D Portfolio */}
        <div className="text-left mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Pipeline Formulations
          </span>
          <h3 className="text-2xl font-bold font-heading text-white mt-1">
            R&amp;D Portfolio (In Development)
          </h3>
          <p className="text-xs text-slate-400 mt-1 italic">
            Strictly in pre-clinical, formulation, and laboratory evaluation stages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {FUTURE_NUTRITION_PORTFOLIO.map((item) => (
            <div
              key={item.category}
              className="glass-panel p-6 rounded-3xl border border-slate-800 bg-slate-950/80 flex flex-col justify-between"
            >
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 inline-block mb-3">
                  {item.badge}
                </span>
                <h4 className="text-lg font-bold font-heading text-white mb-2">{item.category}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-semibold">
                Status: {item.status}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
