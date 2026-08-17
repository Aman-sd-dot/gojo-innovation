'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Database,
  Cpu,
  HeartPulse,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Activity,
  ExternalLink,
} from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { trackEvent } from '@/lib/analytics/tracker';

export function GojoConnectionFlow() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      title: 'PRODUCT',
      division: 'GOJO Nutrition',
      role: 'Physical Ready-to-Drink Formulation',
      desc: "Formulated ready-to-drink nutrition (GOJO – The Maharaja's Drink) delivering bioavailable proteins, calcium, and heritage botanicals.",
      icon: Sparkles,
      color: 'from-amber-500 to-yellow-600',
      border: 'border-amber-500/40',
      hoverBorder: 'hover:border-amber-500/80 hover:shadow-amber-500/20',
      glow: 'from-amber-500/15 via-yellow-500/5 to-transparent',
      statusColor: 'bg-amber-500',
      tag: 'Step 01',
      route: '/gojo-nutrition',
      buttonText: 'Explore GOJO Nutrition',
      liveMetric: '3 Flavour Profiles Available',
      badgeText: 'Physical Formula',
    },
    {
      title: 'DATA',
      division: 'Verified Analytics',
      role: 'Translates Consumption into Metrics',
      desc: 'Immediate barcode or QR mapping to lab-verified analytical composition profiles without approximation or guesswork.',
      icon: Database,
      color: 'from-cyan-500 to-blue-600',
      border: 'border-cyan-500/40',
      hoverBorder: 'hover:border-cyan-500/80 hover:shadow-cyan-500/20',
      glow: 'from-cyan-500/15 via-blue-500/5 to-transparent',
      statusColor: 'bg-cyan-500',
      tag: 'Step 02',
      route: '/rd-innovation',
      buttonText: 'View R&D Standards',
      liveMetric: '100% Lab Verified Database',
      badgeText: 'Analytical Pipeline',
    },
    {
      title: 'INTELLIGENCE',
      division: 'GojoMe AI Engine',
      role: 'AI-Powered Interpretation & Prediction',
      desc: 'Machine learning algorithms sift individual habits, calculating macro/micro gaps and delivering personalized contextual recommendations.',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-600',
      border: 'border-purple-500/40',
      hoverBorder: 'hover:border-purple-500/80 hover:shadow-purple-500/20',
      glow: 'from-purple-500/15 via-indigo-500/5 to-transparent',
      statusColor: 'bg-purple-500',
      tag: 'Step 03',
      route: '/gojome',
      buttonText: 'Explore GojoMe Platform',
      liveMetric: 'Neural Prediction Engine v2.4',
      badgeText: 'Smart Guidance',
    },
    {
      title: 'BETTER CHOICES',
      division: 'Consumer Health Outcome',
      role: 'Sustained Long-Term Human Vitality',
      desc: 'Informed, confident daily nutritional choices that sustain bone density, cognitive focus, muscular recovery, and cellular longevity.',
      icon: HeartPulse,
      color: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-500/40',
      hoverBorder: 'hover:border-emerald-500/80 hover:shadow-emerald-500/20',
      glow: 'from-emerald-500/15 via-teal-500/5 to-transparent',
      statusColor: 'bg-emerald-500',
      tag: 'Step 04',
      route: '/bioheed',
      buttonText: 'Discover Clinical R&D',
      liveMetric: 'Clinical Backing by Bioheed',
      badgeText: 'Targeted Outcome',
    },
  ];

  return (
    <SectionContainer className="bg-slate-100/50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <PageHeader
        badge="THE GOJO CONNECTION"
        badgeVariant="cyan"
        title="From What You Consume to What You Understand."
        subtitle="GOJO seamlessly bridges physical nutritional products with intelligent software, backed by pharmaceutical research."
      />

      {/* 4 Interactive Direct-Link Step Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isHovered = hoveredStep === idx;

          return (
            <Link
              key={step.title}
              href={step.route}
              onClick={() => {
                trackEvent({
                  action: 'step_direct_visit',
                  category: 'NAVIGATION',
                  label: step.title,
                });
              }}
              onMouseEnter={() => setHoveredStep(idx)}
              onMouseLeave={() => setHoveredStep(null)}
              className={`glass-panel p-6 rounded-3xl cursor-pointer transition-all duration-300 text-left relative overflow-hidden flex flex-col justify-between group border ${step.border} ${step.hoverBorder} bg-white dark:bg-slate-900/90 shadow-lg dark:shadow-none hover:shadow-2xl hover:-translate-y-2`}
            >
              {/* Dynamic Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${step.glow} ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Step Badge & Icon */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${step.statusColor}`} />
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${step.statusColor}`} />
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 font-heading uppercase tracking-widest">
                      {step.tag}
                    </span>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Division */}
                <div className="space-y-1 mb-2">
                  <h4 className="text-xl font-black font-heading text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors tracking-wide">
                    {step.title}
                  </h4>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {step.division}
                  </div>
                </div>

                {/* Role Sub-title */}
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 italic">
                  {step.role}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Telemetry & Direct Visit Link */}
              <div className="relative z-10 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                <div className="flex items-center gap-1.5 text-[10.5px] font-semibold text-slate-500 dark:text-slate-400">
                  <Activity className="w-3 h-3 text-slate-400" />
                  <span>{step.liveMetric}</span>
                </div>

                <div
                  className="w-full py-2.5 px-3 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all duration-200 flex items-center justify-between border bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700/80 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 shadow-sm"
                >
                  <span>Visit {step.title} Portal</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Foundational Medical Backing Bar */}
      <div className="mt-12 glass-panel p-6 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-50 via-white to-teal-50 dark:from-emerald-950/50 dark:via-slate-900 dark:to-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-lg dark:shadow-none">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Foundational Backing
              </span>
              <span className="text-slate-400 text-xs">•</span>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold">Bioheed Pharmaceutical</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white font-heading mt-0.5">
              Every formula and data standard is supported by clinical pharmaceutical research.
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-300 shrink-0">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="font-medium">Zero Pseudo-Science • Verified Analytical Standards</span>
        </div>
      </div>
    </SectionContainer>
  );
}
