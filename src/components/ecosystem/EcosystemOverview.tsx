'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Sparkles, Check } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { ECOSYSTEM_PILLARS } from '@/data/mockData';

export function EcosystemOverview() {
  const iconMap = {
    bioheed: ShieldCheck,
    'gojo-nutrition': Zap,
    gojome: Sparkles,
  };

  return (
    <SectionContainer id="ecosystem" className="border-t border-slate-800/80 bg-slate-950/60">
      <PageHeader
        badge="THE THREE PILLARS"
        badgeVariant="emerald"
        title="One Vision. Three Connected Pillars."
        subtitle="Healthcare. Nutrition. Technology. An integrated ecosystem engineered to serve modern human vitality."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {ECOSYSTEM_PILLARS.map((pillar, index) => {
          const Icon = iconMap[pillar.id] || Sparkles;

          const borderColors = {
            bioheed: 'border-emerald-500/30 hover:border-emerald-500/70',
            'gojo-nutrition': 'border-amber-500/30 hover:border-amber-500/70',
            gojome: 'border-purple-500/30 hover:border-purple-500/70',
          };

          const iconBgs = {
            bioheed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
            'gojo-nutrition': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
            gojome: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
          };

          const ctaColors = {
            bioheed: 'text-emerald-400 group-hover:text-emerald-300',
            'gojo-nutrition': 'text-amber-400 group-hover:text-amber-300',
            gojome: 'text-purple-400 group-hover:text-purple-300',
          };

          return (
            <div
              key={pillar.id}
              className={`glass-panel rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${borderColors[pillar.id]} bg-slate-900/90 group`}
            >
              <div>
                {/* Header with Pillar number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold font-heading uppercase tracking-widest text-slate-400">
                    Pillar 0{index + 1}
                  </span>
                  <div className={`p-3 rounded-2xl border ${iconBgs[pillar.id]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Division Title & Pillar Name */}
                <div className="space-y-1 mb-4 text-left">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {pillar.divisionTitle}
                  </span>
                  <h3 className="text-2xl font-extrabold font-heading text-white">
                    {pillar.name}
                  </h3>
                  <p className="text-sm font-semibold italic text-slate-300 pt-1">
                    &ldquo;{pillar.tagline}&rdquo;
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 text-left leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-8 text-left border-t border-slate-800/80 pt-5">
                  {pillar.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Link */}
              <Link
                href={pillar.route}
                className={`inline-flex items-center gap-2 text-sm font-bold tracking-wide transition-all ${ctaColors[pillar.id]} pt-4 border-t border-slate-800`}
              >
                <span>
                  Explore{' '}
                  {pillar.id === 'bioheed'
                    ? 'Bioheed'
                    : pillar.id === 'gojo-nutrition'
                    ? 'Gojo Nutrition'
                    : 'GojoMe'}
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
