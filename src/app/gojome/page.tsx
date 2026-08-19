import React from 'react';
import { GojoMeSection } from '@/components/gojome/GojoMeSection';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Sparkles, Database, Calculator, Cpu, UserCheck, ShieldCheck, ArrowDown } from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'GojoMe | Personal Nutrition Intelligence Platform',
  description:
    'GojoMe transforms everyday food logging into verified macro analytics and AI dietary guidance without approximations.',
  path: '/gojome',
});

export default function GojoMePage() {
  const logicSteps = [
    { title: '1. Food Input', desc: 'Scan QR / Barcode or type whole meals.', icon: UserCheck },
    { title: '2. Verified DB', desc: 'Matches against ICMR, USDA & Bioheed lab assays.', icon: Database },
    { title: '3. Calc Engine', desc: 'Computes exact protein, calcium, fibre, & calories.', icon: Calculator },
    { title: '4. AI Interpretation', desc: 'Sifts metabolic patterns against daily targets.', icon: Cpu },
    { title: '5. Actionable Insights', desc: 'Delivers real-time food swaps & habit tips.', icon: Sparkles },
  ];

  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-8">
        <PageHeader
          badge="NUTRITION INTELLIGENCE PLATFORM"
          badgeVariant="purple"
          title="GojoMe"
          subtitle="Your Personal Nutrition Intelligence. Know what you eat. Understand what you need. Make better choices."
        />

        {/* Data Pipeline Integrity Flow */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-purple-500/30 bg-slate-900/90 text-left mb-16 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero-Hallucination Architecture — Verified Data Protocol</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {logicSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold font-heading text-white">{step.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Clinical Guardrail:</strong> AI models never invent or guess nutritional values. All metrics are computed strictly from verified analytical databases.
            </span>
          </div>
        </div>
      </SectionContainer>

      {/* Main GojoMe Interactive Engine */}
      <GojoMeSection />
    </div>
  );
}
