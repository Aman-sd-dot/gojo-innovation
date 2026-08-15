'use client';

import React, { useState } from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Sparkles, ArrowDown, Database, Cpu, HeartPulse, CheckCircle2, ShieldCheck } from 'lucide-react';

export function GojoConnectionFlow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: 'PRODUCT',
      division: 'GOJO Nutrition',
      role: 'Provides the Physical Nutrition',
      desc: "Formulated ready-to-drink nutrition (GOJO – The Maharaja's Drink) delivering bioavailable proteins, calcium, and heritage nutrients.",
      icon: Sparkles,
      color: 'from-amber-500 to-yellow-600',
      border: 'border-amber-500/40',
      tag: 'Step 01',
    },
    {
      title: 'DATA',
      division: 'Verified Database',
      role: 'Translates Consumption into Metrics',
      desc: 'Immediate barcode or QR mapping to lab-verified analytical composition profiles without approximation or guess-work.',
      icon: Database,
      color: 'from-cyan-500 to-blue-600',
      border: 'border-cyan-500/40',
      tag: 'Step 02',
    },
    {
      title: 'INTELLIGENCE',
      division: 'GojoMe Platform',
      role: 'Provides AI-Powered Interpretation',
      desc: 'Machine learning models sift individual daily habits, calculating macro gaps and generating targeted contextual advice.',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-600',
      border: 'border-purple-500/40',
      tag: 'Step 03',
    },
    {
      title: 'BETTER CHOICES',
      division: 'Consumer Action',
      role: 'Drives Long-Term Vitality',
      desc: 'Informed, confident daily nutritional choices that sustain bone density, cognitive focus, muscle recovery, and longevity.',
      icon: HeartPulse,
      color: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-500/40',
      tag: 'Step 04',
    },
  ];

  return (
    <SectionContainer className="bg-slate-900/60 border-t border-slate-800">
      <PageHeader
        badge="THE GOJO CONNECTION"
        badgeVariant="cyan"
        title="From What You Consume to What You Understand."
        subtitle="GOJO connects nutrition products with nutrition intelligence, grounded on clinical healthcare rigor."
      />

      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStep === idx;

          return (
            <div
              key={step.title}
              onClick={() => setActiveStep(idx)}
              className={`glass-panel p-6 rounded-3xl cursor-pointer transition-all duration-300 text-left relative overflow-hidden ${
                isSelected
                  ? `border-2 ${step.border} bg-slate-900 shadow-xl scale-[1.02]`
                  : 'border-slate-800 hover:border-slate-700 bg-slate-950/70'
              }`}
            >
              {/* Step Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-slate-400 font-heading uppercase tracking-widest">
                  {step.tag}
                </span>
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white shadow-md`}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Division */}
              <div className="space-y-1 mb-2">
                <h4 className="text-lg font-black font-heading text-white tracking-wide">
                  {step.title}
                </h4>
                <div className="text-xs font-bold text-emerald-400">
                  {step.division}
                </div>
              </div>

              {/* Role Sub-title */}
              <p className="text-xs font-semibold text-slate-300 mb-2 italic">
                {step.role}
              </p>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Foundational Medical Backing Bar */}
      <div className="mt-12 glass-panel p-6 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/50 via-slate-900 to-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Foundational Backing
              </span>
              <span className="text-slate-400 text-xs">•</span>
              <span className="text-xs text-slate-400 font-semibold">Bioheed Pharmaceutical</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white font-heading mt-0.5">
              Every formula and data standard is supported by clinical pharmaceutical research.
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-300 shrink-0">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Zero Pseudo-Science • Verified Analytical Standards</span>
        </div>
      </div>
    </SectionContainer>
  );
}
