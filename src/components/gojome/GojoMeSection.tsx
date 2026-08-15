'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ScanLine,
  BarChart3,
  Sparkles,
  Target,
  BrainCircuit,
  TrendingUp,
  ArrowRight,
  Database,
  ShieldCheck,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { GOJOME_FEATURES, VERIFIED_NUTRITION_DATABASE } from '@/data/mockData';
import { trackEvent } from '@/lib/analytics/tracker';

export function GojoMeSection() {
  const [selectedFoodId, setSelectedFoodId] = useState<string>(VERIFIED_NUTRITION_DATABASE[0].id);

  const selectedFood =
    VERIFIED_NUTRITION_DATABASE.find((item) => item.id === selectedFoodId) ||
    VERIFIED_NUTRITION_DATABASE[0];

  const iconMap: Record<string, React.ElementType> = {
    ScanLine,
    BarChart3,
    Sparkles,
    Target,
    BrainCircuit,
    TrendingUp,
  };

  return (
    <SectionContainer id="gojome-section" className="border-t border-slate-800 bg-slate-900/40 relative">
      <PageHeader
        badge="NUTRITION TECHNOLOGY PLATFORM"
        badgeVariant="purple"
        title="Meet GojoMe — Your Nutrition Intelligence."
        subtitle="Know what you eat. Understand what you need. Make better choices. Transforming everyday nutrition data into actionable health insights."
      />

      {/* 6 Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
        {GOJOME_FEATURES.map((feat) => {
          const Icon = iconMap[feat.icon] || Sparkles;

          return (
            <div
              key={feat.id}
              className="glass-panel p-7 rounded-3xl border-purple-500/20 bg-slate-900/80 hover:border-purple-500/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-400 font-heading">
                    {feat.stepNumber} // {feat.category}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold font-heading text-white mb-1">
                  {feat.title}
                </h3>
                <div className="text-xs font-semibold text-purple-300 mb-3">
                  {feat.tagline}
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ---------------------------------------------------- */}
      {/* Interactive Verified Nutrition Simulation Engine */}
      {/* ---------------------------------------------------- */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-purple-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/40 text-left">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
              <Database className="w-4 h-4" />
              <span>Interactive Nutrition Intelligence Simulator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Verified Data Engine + Contextual AI
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Select an item below to see how verified nutritional assays power real-time AI guidance without approximations.
            </p>
          </div>

          <Button
            href="/gojome"
            size="md"
            variant="gojome"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={() =>
              trackEvent({
                action: 'gojome_discover_cta_click',
                category: 'GOJOME_SIMULATOR',
                label: 'Discover GojoMe Section CTA',
              })
            }
          >
            Discover GojoMe Platform
          </Button>
        </div>

        {/* Item Selector Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {VERIFIED_NUTRITION_DATABASE.map((item) => {
            const isSelected = selectedFoodId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedFoodId(item.id);
                  trackEvent({
                    action: 'simulator_item_selected',
                    category: 'GOJOME_SIMULATOR',
                    label: item.name,
                  });
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/60 scale-[1.02]'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Dynamic Calculation Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Output: Verified Nutrition Breakdown */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-white font-heading">
                  {selectedFood.name}
                </h4>
                <span className="text-xs text-slate-400">Serving Size: {selectedFood.portion}</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10.5px] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Assay</span>
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-left">
                <div className="text-[10px] text-slate-400 uppercase">Calories</div>
                <div className="text-xl font-extrabold text-white font-heading mt-0.5">
                  {selectedFood.calories} <span className="text-xs font-normal text-slate-400">kcal</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left">
                <div className="text-[10px] text-amber-300 uppercase font-semibold">Protein</div>
                <div className="text-xl font-extrabold text-amber-200 font-heading mt-0.5">
                  {selectedFood.proteinGrams} <span className="text-xs font-normal text-amber-300">g</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-left">
                <div className="text-[10px] text-teal-300 uppercase font-semibold">Calcium</div>
                <div className="text-xl font-extrabold text-teal-200 font-heading mt-0.5">
                  {selectedFood.calciumMg} <span className="text-xs font-normal text-teal-300">mg</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-left">
                <div className="text-[10px] text-purple-300 uppercase font-semibold">Fibre</div>
                <div className="text-xl font-extrabold text-purple-200 font-heading mt-0.5">
                  {selectedFood.fibreGrams} <span className="text-xs font-normal text-purple-300">g</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 italic">
              Source: <span className="text-slate-300 font-medium">{selectedFood.verifiedSource}</span>
            </div>
          </div>

          {/* Right Output: AI Contextual Interpretation */}
          <div className="lg:col-span-6 p-6 rounded-3xl bg-gradient-to-br from-purple-950/80 via-slate-900 to-indigo-950/80 border border-purple-500/40 space-y-3">
            <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>GojoMe Contextual AI Output</span>
            </div>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              &ldquo;{selectedFood.aiInsightTip}&rdquo;
            </p>

            <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs text-purple-300">
              <span>Goal Impact: Dynamic Macro Balancing</span>
              <span className="font-semibold text-emerald-400">100% Deterministic</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
