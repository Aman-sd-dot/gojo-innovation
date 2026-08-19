'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Eye, Heart, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GojoCanGraphic } from '@/components/brand/GojoCanGraphic';
import { GojoMePhoneMockup } from '@/components/brand/GojoMePhoneMockup';
import { QrCard } from '@/components/brand/QrCard';
import { COMPANY_DETAILS } from '@/data/mockData';
import { trackEvent } from '@/lib/analytics/tracker';

export function Hero() {
  const [activeFlavour, setActiveFlavour] = useState<'vanilla' | 'chocolate' | 'coffee'>('vanilla');

  return (
    <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-14 overflow-hidden scientific-grid">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-hero-glow pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Layout: Left Typography & Right Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Brand Statement & CTAs */}
          <div className="lg:col-span-6 text-left space-y-2.5 sm:space-y-3">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              <span>{COMPANY_DETAILS.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl xl:text-3xl font-extrabold font-heading text-slate-950 dark:text-white tracking-tight leading-[1.15]">
              Building a legacy for Smarter Future of{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
                Healthcare, Nutrition &amp; Technology
              </span>
            </h1>

            {/* Sub-headline description / Sanskrit Pledge */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-medium leading-relaxed max-w-xl whitespace-pre-line">
              {COMPANY_DETAILS.heroSubheading}
            </p>

            {/* 3 Value Pillars Mini-Badges */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 py-1.5 border-y border-slate-800/80 max-w-md">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold font-heading">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Nutrition</span>
                </div>
                <p className="text-[10.5px] text-slate-400">Nutritious choices</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-purple-400 text-xs font-bold font-heading">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Technology</span>
                </div>
                <p className="text-[10.5px] text-slate-400">Intelligent tech</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-cyan-400 text-xs font-bold font-heading">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Healthcare</span>
                </div>
                <p className="text-[10.5px] text-slate-400">Clinical science</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/bioheed"
                size="lg"
                variant="primary"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={() =>
                  trackEvent({
                    action: 'hero_primary_cta_click',
                    category: 'NAVIGATION',
                    label: 'Explore Healthcare & Nutrition',
                  })
                }
              >
                Explore Divisions
              </Button>

              <Button
                href="/about"
                size="lg"
                variant="secondary"
                rightIcon={<ArrowUpRight className="w-4 h-4 text-slate-400" />}
                onClick={() =>
                  trackEvent({
                    action: 'hero_secondary_cta_click',
                    category: 'NAVIGATION',
                    label: 'Discover Our Story',
                  })
                }
              >
                Discover Our Story
              </Button>
            </div>
          </div>

          {/* Right Column: Premium Visual Composite (Can + Phone + QR) */}
          <div className="lg:col-span-6 relative flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-5 pt-4 sm:pt-8">
            {/* Visual 1: 3D Product Can + Flavour Selector directly above */}
            <div className="relative shrink-0 flex flex-col items-center pt-3 sm:pt-6">
              {/* Flavour Selector Pills positioned higher up above bottle */}
              <div className="mb-6 sm:mb-8 z-30 flex items-center gap-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-slate-700/80 shadow-xl shadow-slate-300/50 dark:shadow-black/50 hover:border-amber-500/50 transition-colors">
                <span className="text-[10.5px] text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold mr-1">Flavour:</span>
                <button
                  type="button"
                  onClick={() => setActiveFlavour('vanilla')}
                  className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-bold transition-all ${activeFlavour === 'vanilla'
                    ? 'bg-amber-400 text-slate-950 shadow-sm scale-105'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                    }`}
                >
                  Vanilla
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFlavour('chocolate')}
                  className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-bold transition-all ${activeFlavour === 'chocolate'
                    ? 'bg-amber-700 text-amber-50 shadow-sm scale-105'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                    }`}
                >
                  Chocolate
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFlavour('coffee')}
                  className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-bold transition-all ${activeFlavour === 'coffee'
                    ? 'bg-yellow-700 text-yellow-50 shadow-sm scale-105'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                    }`}
                >
                  Coffee
                </button>
              </div>

              <div className="absolute -bottom-4 w-40 h-8 bg-amber-500/20 rounded-full blur-xl pointer-events-none" />
              <GojoCanGraphic flavour={activeFlavour} size="md" />
              <div className="mt-2 text-center">
                <span className="text-[11px] font-extrabold text-amber-600 dark:text-amber-300 tracking-wider uppercase">
                  GOJO — The Maharaja&apos;s Drink
                </span>
              </div>
            </div>

            {/* Visual 2: GojoMe App Mockup */}
            <div className="relative shrink-0">
              <GojoMePhoneMockup />
            </div>

            {/* Visual 3: Scan QR Card */}
            <div className="hidden xl:block absolute -right-6 bottom-4 z-20">
              <QrCard />
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* Connected Ecosystem Ribbon Banner (Matching Reference) */}
        {/* ---------------------------------------------------- */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-200 dark:border-slate-800/80">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-950 dark:text-white">
              Our Integrated Ecosystem
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 tracking-widest uppercase font-semibold mt-1">
              Science • Nutrition • Technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {/* Box 1: Bioheed Pharmaceutical */}
            <Link
              href="/bioheed"
              className="glass-panel p-5 rounded-2xl border-emerald-500/30 hover:border-emerald-500/70 transition-all flex items-center gap-4 text-left group bg-white/80 dark:bg-slate-900/80 shadow-md dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-slate-950 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    Bioheed Pharmaceutical
                  </h4>
                </div>
                <span className="inline-block px-2 py-0.5 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold rounded-md mt-0.5">
                  Healthcare Division
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                  Science-driven healthcare and nutritional solutions through R&amp;D.
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-slate-950 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Box 2: Gojo Nutrition */}
            <Link
              href="/gojo-nutrition"
              className="glass-panel p-5 rounded-2xl border-cyan-500/30 hover:border-cyan-500/70 transition-all flex items-center gap-4 text-left group bg-white/80 dark:bg-slate-900/80 shadow-md dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-slate-950 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    Gojo Nutrition
                  </h4>
                </div>
                <span className="inline-block px-2 py-0.5 bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 text-[10px] font-semibold rounded-md mt-0.5">
                  Nutrition Product Division
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                  Nutrition, Reimagined. GOJO – The Maharaja&apos;s Drink and future nutritional innovations.
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:text-slate-950 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Box 3: GojoMe */}
            <Link
              href="/gojome"
              className="glass-panel p-5 rounded-2xl border-purple-500/30 hover:border-purple-500/70 transition-all flex items-center gap-4 text-left group bg-white/80 dark:bg-slate-900/80 shadow-md dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-500 dark:text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-slate-950 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                    GojoMe
                  </h4>
                </div>
                <span className="inline-block px-2 py-0.5 bg-purple-500/15 text-purple-700 dark:text-purple-300 text-[10px] font-semibold rounded-md mt-0.5">
                  Nutrition Intelligence
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                  Track your nutrition. Understand your body. Make better choices.
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 dark:text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>

          {/* Bottom Ecosystem Statement Ribbon */}
          <div className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-100 via-slate-100 to-cyan-100 dark:from-emerald-950/60 dark:via-slate-900 dark:to-cyan-950/60 border border-slate-300/80 dark:border-slate-800 p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm dark:shadow-none">
            <div>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                GOJO Innovation —
              </span>
              <span className="text-xs text-slate-700 dark:text-slate-200 ml-1.5 font-medium">
                Innovating Healthcare. Nutrition. Technology. For a Healthier Tomorrow.
              </span>
            </div>
            <Link
              href="/rd-innovation"
              className="text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 flex items-center gap-1 shrink-0"
            >
              <span>Explore R&D & Innovation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
