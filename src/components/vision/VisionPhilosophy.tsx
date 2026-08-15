'use client';

import React from 'react';
import { Sparkles, Quote } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';

export function VisionPhilosophy() {
  return (
    <SectionContainer className="border-t border-slate-800 bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-emerald-600/10 via-cyan-600/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-widest uppercase font-heading">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Vision &amp; Conviction</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
          A Healthier Future Begins With Better Choices.
        </h2>

        {/* Emotional and professional manifesto statement */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-900/80 text-left space-y-6 text-slate-300 relative">
          <Quote className="w-12 h-12 text-slate-700/50 absolute top-6 right-6 pointer-events-none" />

          <p className="text-base sm:text-lg leading-relaxed text-slate-200">
            Healthcare should not begin only when we become sick.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-slate-200">
            Nutrition should not be complicated, confusing, or inaccessible.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-slate-200">
            Technology should not simply collect information — it should empower people to understand and improve their lives every single day.
          </p>

          <div className="pt-6 border-t border-slate-800 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              The GOJO Purpose:
            </span>
            <div className="text-xl sm:text-2xl font-black font-heading bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400 bg-clip-text text-transparent mt-1">
              Better Nutrition. Smarter Technology. Better Care.
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
