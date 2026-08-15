'use client';

import React from 'react';
import { Apple, FlaskConical, Cpu, HeartHandshake } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { WHY_GOJO_CARDS } from '@/data/mockData';

export function WhyGojo() {
  const iconMap: Record<string, React.ElementType> = {
    Apple,
    FlaskConical,
    Cpu,
    HeartHandshake,
  };

  return (
    <SectionContainer className="border-t border-slate-800 bg-slate-900/40">
      <PageHeader
        badge="OUR CORE PILLARS"
        badgeVariant="emerald"
        title="Why GOJO Innovation"
        subtitle="Uniting four fundamental disciplines to transform personal health and preventive wellness."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {WHY_GOJO_CARDS.map((card) => {
          const Icon = iconMap[card.icon] || FlaskConical;

          return (
            <div
              key={card.id}
              className="glass-panel p-7 rounded-3xl border-slate-800 hover:border-slate-700 bg-slate-950/70 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md"
                  style={{
                    backgroundColor: `${card.color}15`,
                    color: card.color,
                    border: `1px solid ${card.color}35`,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-extrabold font-heading text-white mb-1">
                  {card.title}
                </h3>
                <div className="text-xs font-semibold text-slate-400 mb-3">
                  {card.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
