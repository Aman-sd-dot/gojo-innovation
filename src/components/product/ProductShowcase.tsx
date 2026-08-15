'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Droplets, Flame } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { GojoCanGraphic } from '@/components/brand/GojoCanGraphic';
import { FLAGSHIP_PRODUCT, FUTURE_NUTRITION_PORTFOLIO } from '@/data/mockData';

export function ProductShowcase() {
  const [selectedFlavour, setSelectedFlavour] = useState<'vanilla' | 'chocolate' | 'coffee'>('vanilla');

  const currentFlavourData =
    FLAGSHIP_PRODUCT.flavours.find((f) => f.id === selectedFlavour) || FLAGSHIP_PRODUCT.flavours[0];

  return (
    <SectionContainer id="product-showcase" className="border-t border-slate-800 bg-slate-950/80 relative">
      <PageHeader
        badge="FLAGSHIP NUTRITIONAL BEVERAGE"
        badgeVariant="amber"
        title="GOJO – The Maharaja's Drink"
        subtitle="Royal Taste. Everyday Nutrition. A modern nutritional beverage inspired by India's rich heritage and crafted for today's lifestyle."
      />

      {/* Main Product Showcase Card */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-amber-500/30 bg-gradient-to-b from-slate-900/90 via-slate-900 to-slate-950">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 3D Can Graphic + Interactive Flavour Selector */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-6">
            <div className="relative p-6 rounded-3xl bg-slate-950/60 border border-slate-800 w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-amber-500/5 rounded-3xl blur-xl pointer-events-none" />
              <GojoCanGraphic flavour={selectedFlavour} size="lg" />
            </div>

            {/* Flavour Buttons */}
            <div className="space-y-2 w-full">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Select Flavour Experience:
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                {FLAGSHIP_PRODUCT.flavours.map((flavour) => {
                  const isSelected = selectedFlavour === flavour.id;
                  return (
                    <button
                      key={flavour.id}
                      onClick={() => setSelectedFlavour(flavour.id as 'vanilla' | 'chocolate' | 'coffee')}
                      className={`p-3 rounded-2xl border text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                        isSelected
                          ? 'border-amber-400 bg-amber-500/20 text-amber-300 shadow-md shadow-amber-950/50 scale-[1.03]'
                          : 'border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <span>{flavour.name}</span>
                      <span className="text-[9px] font-normal text-slate-400">
                        {flavour.id === 'vanilla' ? 'Classic' : flavour.id === 'chocolate' ? 'Indulgent' : 'Energizing'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Nutritional Metrics, Story & Value Props */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Active Flavour Info Banner */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {currentFlavourData.name} Edition
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold">
                  200 ml Ready-to-Drink
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-200">{currentFlavourData.tagline}</p>
              <p className="text-xs text-slate-400">{currentFlavourData.notes}</p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {FLAGSHIP_PRODUCT.description}
            </p>

            {/* Heritage Story Excerpt */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Heritage Formulation
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {FLAGSHIP_PRODUCT.heritageStory}
              </p>
            </div>

            {/* Nutritional Facts Grid */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-300">
                <span>Verified Nutritional Profile (Per 200 ml)</span>
                <span className="text-emerald-400 font-semibold">Bioheed Lab Certified</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {FLAGSHIP_PRODUCT.nutritionalFacts.map((fact) => (
                  <div
                    key={fact.name}
                    className={`p-3 rounded-2xl border text-left ${
                      fact.highlight
                        ? 'bg-amber-500/10 border-amber-500/30'
                        : 'bg-slate-900/60 border-slate-800'
                    }`}
                  >
                    <div className="text-[10.5px] text-slate-400">{fact.name}</div>
                    <div className="text-lg font-black text-white font-heading mt-0.5">
                      {fact.value}
                    </div>
                    {fact.dailyValue && (
                      <div className="text-[10px] text-amber-400 font-medium">
                        {fact.dailyValue} Daily Value
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {FLAGSHIP_PRODUCT.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
              <Button
                href="/gojo-nutrition"
                size="lg"
                variant="maharaja"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Discover GOJO
              </Button>
              <Button href="/shop" size="lg" variant="outline">
                Find Retail Stores
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* Future R&D Pipeline Categories (Strictly Labeled) */}
      {/* ---------------------------------------------------- */}
      <div className="mt-16 text-left">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Pipeline Expansion
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-0.5">
              Future Nutritional Portfolio (R&amp;D Stage)
            </h3>
          </div>
          <span className="text-xs text-slate-400 italic">
            In development under Bioheed Pharmaceutical R&amp;D
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FUTURE_NUTRITION_PORTFOLIO.map((item) => (
            <div
              key={item.category}
              className="glass-panel p-5 rounded-2xl border-slate-800 bg-slate-900/60 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {item.badge}
                  </span>
                  <span className="text-[10px] text-amber-400 font-bold">R&amp;D</span>
                </div>
                <h4 className="text-base font-bold text-white font-heading mb-1.5">
                  {item.category}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10.5px] text-slate-400 font-medium">
                Status: {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
