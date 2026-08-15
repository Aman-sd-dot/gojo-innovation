'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Microscope, FlaskConical, Dna, Activity, Check } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { RD_PROJECTS } from '@/data/mockData';

export function RdSection() {
  const domains = [
    { title: 'Healthcare Solutions', desc: 'Pharmaceutical stabilization, clinical assays, and bioavailable mineral delivery.', icon: FlaskConical },
    { title: 'Nutritional Formulations', desc: 'Peptide enzymatic hydrolysis, ancient grain complexes, and lipid encapsulation.', icon: Dna },
    { title: 'Functional Foods & Drinks', desc: 'Shelf-stable cognitive adaptogens, sustained electrolyte matrices, and fortified staples.', icon: Microscope },
    { title: 'Tech-Enabled Wellness', desc: 'Predictive glycemic analytics, computer-vision meal breakdown, and privacy-preserving AI.', icon: Activity },
  ];

  return (
    <SectionContainer id="rd-section" className="border-t border-slate-800 bg-slate-900/60 relative">
      <PageHeader
        badge="SCIENTIFIC RESEARCH & DISCOVERY"
        badgeVariant="rd"
        title="Innovation Doesn't Stop at the First Product."
        subtitle="GOJO Innovation is building for the long term. Our multidisciplinary scientists and engineers expand horizons across health, nutrition, and technology."
      />

      {/* 3 Core Imperatives Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-emerald-950/40 mb-12 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div className="space-y-1">
            <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase">Phase 01</span>
            <h4 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-wider">RESEARCH.</h4>
          </div>
          <div className="hidden sm:block text-slate-600 text-2xl font-light">→</div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">Phase 02</span>
            <h4 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-wider">INNOVATE.</h4>
          </div>
          <div className="hidden sm:block text-slate-600 text-2xl font-light">→</div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">Phase 03</span>
            <h4 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-wider">IMPROVE.</h4>
          </div>
        </div>
      </div>

      {/* 4 Research Domains */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
        {domains.map((domain) => {
          const Icon = domain.icon;
          return (
            <div
              key={domain.title}
              className="glass-panel p-6 rounded-3xl border-slate-800 hover:border-indigo-500/50 transition-all duration-300 bg-slate-950/70 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold font-heading text-white mb-2">
                  {domain.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {domain.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Pipeline Preview Table */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 text-left mb-8">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-bold font-heading text-white">
            Active R&amp;D Projects &amp; Clinical Formulations
          </h4>
          <span className="text-xs text-slate-400">Hyderabad R&amp;D Centre</span>
        </div>

        <div className="space-y-3">
          {RD_PROJECTS.slice(0, 3).map((proj) => (
            <div
              key={proj.id}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white">{proj.title}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="text-emerald-400 font-semibold">{proj.division}</span>
                  <span>•</span>
                  <span>{proj.scientificFocus}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {proj.stageLabel}
                </span>
                <span className="text-xs text-slate-400">{proj.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-2">
        <Button
          href="/rd-innovation"
          size="lg"
          variant="outline"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Explore Our Complete R&amp;D Pipeline
        </Button>
      </div>
    </SectionContainer>
  );
}
