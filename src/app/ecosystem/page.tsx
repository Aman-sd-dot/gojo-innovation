import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Sparkles, Network, ArrowDown, Check } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { constructMetadata } from '@/lib/seo/metadata';
import { ECOSYSTEM_PILLARS } from '@/data/mockData';

export const metadata = constructMetadata({
  title: 'Our Ecosystem | GOJO Innovation Pvt. Ltd.',
  description:
    'Explore the connected architecture of GOJO Innovation: Bioheed Pharmaceutical, GOJO Nutrition, and the GojoMe Nutrition Intelligence Platform.',
  path: '/ecosystem',
});

export default function EcosystemPage() {
  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-16">
        <PageHeader
          badge="INTEGRATED ECOSYSTEM"
          badgeVariant="cyan"
          title="One Vision. Three Connected Pillars."
          subtitle="Discover how Bioheed Pharmaceutical, GOJO Nutrition, and GojoMe operate as a cohesive healthcare, nutrition, and intelligence engine."
        />

        {/* Corporate Hierarchy Tree Visualization */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-900/90 max-w-4xl mx-auto mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-6">
            <Network className="w-4 h-4" />
            <span>Corporate Governance Structure</span>
          </div>

          <div className="space-y-6">
            {/* Top Node */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-700 max-w-md">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Parent Corporation</span>
              <h3 className="text-xl font-black font-heading text-white">GOJO INNOVATION PVT. LTD.</h3>
              <p className="text-xs text-slate-400 mt-1">Ecosystem Governance • R&amp;D Capital • Technology Infrastructure</p>
            </div>

            {/* Tree Branch Lines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4 border-l-2 border-slate-700">
              {/* Branch 1: Bioheed Healthcare */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Healthcare Division</span>
                  <h4 className="text-base font-bold text-white font-heading">BIOHEED PHARMACEUTICAL</h4>
                  <p className="text-xs text-slate-300 mt-1">Clinical research, formulations, and medical governance.</p>
                </div>

                {/* Nested Child: Gojo Nutrition */}
                <div className="pl-6 border-l-2 border-emerald-500/40">
                  <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40">
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Nutrition Division under Bioheed</span>
                    <h5 className="text-sm font-bold text-white font-heading">GOJO NUTRITION</h5>
                    <p className="text-xs text-slate-300 mt-1">
                      Flagship Product: <strong>GOJO – The Maharaja&apos;s Drink (200 ml)</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Branch 2: GojoMe Platform */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/40">
                  <span className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">Technology Platform</span>
                  <h4 className="text-base font-bold text-white font-heading">GOJOME PLATFORM</h4>
                  <p className="text-xs text-slate-300 mt-1">Nutrition Intelligence, verified food database, AI insights, and habit tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed 3 Pillar Cards */}
        <div className="space-y-8">
          {ECOSYSTEM_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/90 text-left flex flex-col lg:flex-row items-start justify-between gap-8"
            >
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider">
                    {pillar.divisionTitle}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 italic">
                    &ldquo;{pillar.tagline}&rdquo;
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  {pillar.name}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {pillar.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex flex-col gap-3 w-full lg:w-auto min-w-[200px]">
                <Button href={pillar.route} size="lg" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore Division
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
