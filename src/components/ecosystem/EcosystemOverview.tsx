'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Sparkles, Check, Activity, ExternalLink, Users } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { ECOSYSTEM_PILLARS } from '@/data/mockData';
import { trackEvent } from '@/lib/analytics/tracker';

export function EcosystemOverview() {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  const iconMap = {
    bioheed: ShieldCheck,
    'gojo-nutrition': Zap,
    gojome: Sparkles,
  };

  const pillarMeta = {
    bioheed: {
      status: 'Clinical Trials Active',
      statusColor: 'bg-emerald-500',
      taglineColor: 'text-emerald-600 dark:text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-800 dark:text-emerald-300',
      glow: 'from-emerald-600/15 via-teal-600/5 to-transparent',
      hoverBorder: 'hover:border-emerald-500/70 hover:shadow-emerald-500/20',
      accentBorder: 'border-emerald-500/30',
      iconBox: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      buttonBg: 'group-hover:bg-emerald-600 group-hover:text-white',
      visitorStat: '1,420+ Clinicians & Researchers Engaged',
    },
    'gojo-nutrition': {
      status: 'In Production • Formulation Live',
      statusColor: 'bg-amber-500',
      taglineColor: 'text-amber-600 dark:text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-800 dark:text-amber-300',
      glow: 'from-amber-600/15 via-yellow-600/5 to-transparent',
      hoverBorder: 'hover:border-amber-500/70 hover:shadow-amber-500/20',
      accentBorder: 'border-amber-500/30',
      iconBox: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
      buttonBg: 'group-hover:bg-amber-600 group-hover:text-white',
      visitorStat: '3,850+ Cans Delivered & Tracked',
    },
    gojome: {
      status: 'AI Engine v2.4 Active',
      statusColor: 'bg-purple-500',
      taglineColor: 'text-purple-600 dark:text-purple-400',
      badgeBg: 'bg-purple-500/10 border-purple-500/30 text-purple-800 dark:text-purple-300',
      glow: 'from-purple-600/15 via-indigo-600/5 to-transparent',
      hoverBorder: 'hover:border-purple-500/70 hover:shadow-purple-500/20',
      accentBorder: 'border-purple-500/30',
      iconBox: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
      buttonBg: 'group-hover:bg-purple-600 group-hover:text-white',
      visitorStat: '5,200+ Daily Macro Logs Analyzed',
    },
  };

  return (
    <SectionContainer id="ecosystem" className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950/60 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <PageHeader
        badge="THE THREE PILLARS"
        badgeVariant="emerald"
        title="One Vision. Three Connected Pillars."
        subtitle="Healthcare. Nutrition. Technology. An integrated ecosystem engineered to serve modern human vitality."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative">
        {ECOSYSTEM_PILLARS.map((pillar, index) => {
          const Icon = iconMap[pillar.id as keyof typeof iconMap] || Sparkles;
          const meta = pillarMeta[pillar.id as keyof typeof pillarMeta] || pillarMeta.bioheed;
          const isHovered = hoveredPillar === pillar.id;

          return (
            <div
              key={pillar.id}
              onMouseEnter={() => setHoveredPillar(pillar.id)}
              onMouseLeave={() => setHoveredPillar(null)}
              className={`glass-panel rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${meta.accentBorder} ${meta.hoverBorder} bg-white dark:bg-slate-900/90 shadow-lg dark:shadow-none hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden text-left`}
            >
              {/* Dynamic Hover Ambient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${meta.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Top Live Status Indicator & Pillar Number */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${meta.statusColor}`} />
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${meta.statusColor}`} />
                    </span>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                      Pillar 0{index + 1}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div className={`p-3 rounded-2xl border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${meta.iconBox}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Division Title & Pillar Name */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {pillar.divisionTitle}
                  </span>
                  <h3 className="text-2xl font-extrabold font-heading text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {pillar.name}
                  </h3>
                  <p className={`text-sm font-semibold italic ${meta.taglineColor} pt-0.5`}>
                    &ldquo;{pillar.tagline}&rdquo;
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Live Activity Counter */}
                <div className="mb-6 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    {meta.visitorStat}
                  </span>
                </div>

                {/* Feature Bullet Points */}
                <div className="space-y-2.5 mb-8 border-t border-slate-100 dark:border-slate-800/80 pt-5">
                  {pillar.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <div className="p-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Visit Portal Button */}
              <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  href={pillar.route}
                  onClick={() =>
                    trackEvent({
                      action: 'pillar_card_visit_click',
                      category: 'NAVIGATION',
                      label: pillar.name,
                    })
                  }
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-between border border-slate-200 dark:border-slate-700/80 bg-slate-100/80 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 ${meta.buttonBg} shadow-sm group-hover:shadow-md`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${meta.statusColor}`} />
                    <span>
                      Visit{' '}
                      {pillar.id === 'bioheed'
                        ? 'Bioheed Healthcare'
                        : pillar.id === 'gojo-nutrition'
                        ? 'GOJO Nutrition'
                        : 'GojoMe Platform'}
                    </span>
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
