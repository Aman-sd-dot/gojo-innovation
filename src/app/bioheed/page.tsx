import React from 'react';
import { ShieldCheck, FlaskConical, Dna, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Bioheed Pharmaceutical | Healthcare Division | GOJO Innovation',
  description:
    'Bioheed Pharmaceutical is the healthcare and pharmaceutical research division of GOJO Innovation Pvt. Ltd. Science for Better Health.',
  path: '/bioheed',
});

export default function BioheedPage() {
  const pipeline = [
    {
      name: 'Micro-Encapsulated Bio-Calcium Stabilization',
      focus: 'Elemental Absorption & Emulsion Chemistry',
      status: 'CURRENT / ACTIVE R&D',
      badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      description: 'Stabilizing elemental calcium in ambient shelf-stable matrices with enhanced cellular uptake.',
    },
    {
      name: 'Plant-Derived Peptide Hydrolysates',
      focus: 'Hypoallergenic Protein Cleavage',
      status: 'IN DEVELOPMENT',
      badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      description: 'Enzyme cleavage protocols converting regional millet proteins into bio-active peptides.',
    },
    {
      name: 'Targeted Clinical Micronutrient Delivery',
      focus: 'Metabolic & Preventive Formulations',
      status: 'FUTURE / CONCEPT PHASE',
      badgeClass: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      description: 'Future therapeutic nutritional interventions targeting glycemic stability and bone mineral density.',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-16">
        <PageHeader
          badge="HEALTHCARE DIVISION"
          badgeVariant="emerald"
          title="BIOHEED PHARMACEUTICAL"
          subtitle="Healthcare. Science. Innovation. Bioheed Pharmaceutical is the healthcare division of GOJO Innovation, focused on pharmaceutical solutions, healthcare products, and research-driven innovation."
        />

        {/* Division Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          <div className="glass-panel p-8 rounded-3xl border-emerald-500/30 bg-slate-900/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">Healthcare Portfolio</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Formulating clinical-grade solutions and nutritional therapeutic vehicles that adhere to strict pharmaceutical standards.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border-emerald-500/30 bg-slate-900/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Dna className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">Nutritional R&amp;D</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Serving as the scientific research engine powering GOJO Nutrition&apos;s ready-to-drink formulations and future products.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border-emerald-500/30 bg-slate-900/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">Future Focus</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Developing preventive metabolic solutions that close chronic nutritional deficits across urban populations.
            </p>
          </div>
        </div>

        {/* Pipeline Stage Clarification Table */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-900/90 text-left mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Scientific Governance
              </span>
              <h3 className="text-2xl font-bold font-heading text-white mt-0.5">
                Research Pipeline &amp; Stage Categorization
              </h3>
            </div>
            <span className="text-xs text-slate-400 italic">
              Status strictly segregated to maintain medical compliance
            </span>
          </div>

          <div className="space-y-4">
            {pipeline.map((item) => (
              <div
                key={item.name}
                className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-white font-heading">
                    {item.name}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider border shrink-0 ${item.badgeClass}`}>
                    {item.status}
                  </span>
                </div>
                <div className="text-xs font-semibold text-emerald-400">
                  Focus: {item.focus}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Inquiries for Bioheed */}
        <div className="p-8 rounded-3xl bg-emerald-950/40 border border-emerald-500/30 text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-bold font-heading text-white">
            Connect with Bioheed Research Team
          </h3>
          <p className="text-sm text-slate-300">
            For academic collaborations, clinical whitepapers, or institutional medical partnerships.
          </p>
          <Button href="/contact?dept=bioheed" size="lg" variant="bioheed" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Submit Healthcare Inquiry
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
}
