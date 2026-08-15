'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Sparkles, Globe2 } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Button } from '@/components/ui/Button';

export function OurFuture() {
  return (
    <SectionContainer className="border-t border-slate-800 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-emerald-600/10 via-cyan-600/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-12 relative">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase font-heading">
            <Globe2 className="w-3.5 h-3.5" />
            <span>The Long-Term Horizon</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            We Are Building More Than Products.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are building an ecosystem where healthcare, nutrition, and technology work together seamlessly.
          </p>
        </div>

        {/* 3 Pillars Connection Visual Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Box 1 */}
          <div className="glass-panel p-6 rounded-3xl border-emerald-500/30 bg-slate-900/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white font-heading">
                Bioheed Pharmaceutical
              </h3>
              <div className="text-xs font-semibold text-emerald-400">
                Healthcare Division
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Provides clinical validation, pharmaceutical quality standards, and deep medical research.
            </p>
          </div>

          {/* Box 2 */}
          <div className="glass-panel p-6 rounded-3xl border-amber-500/30 bg-slate-900/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Zap className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white font-heading">
                Gojo Nutrition
              </h3>
              <div className="text-xs font-semibold text-amber-400">
                Nutritional Innovation
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Formulates bioavailable nutritional beverages and functional foods for everyday life.
            </p>
          </div>

          {/* Box 3 */}
          <div className="glass-panel p-6 rounded-3xl border-purple-500/30 bg-slate-900/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white font-heading">
                GojoMe
              </h3>
              <div className="text-xs font-semibold text-purple-400">
                Intelligent Digital Experiences
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowers consumers with verified data tracking and AI-driven health intelligence.
            </p>
          </div>
        </div>

        {/* Unified Purpose Statement */}
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-heading">
            Our Central Purpose
          </span>
          <p className="text-lg sm:text-xl font-bold font-heading text-slate-200">
            &ldquo;To make better health and nutrition more accessible, understandable and meaningful in everyday life.&rdquo;
          </p>
        </div>

        <div className="pt-2">
          <Button
            href="/about"
            size="lg"
            variant="primary"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Read Our Full Company Story
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}
