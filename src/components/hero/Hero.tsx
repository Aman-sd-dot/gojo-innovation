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
    <section className="relative pt-20 pb-14 lg:pt-24 lg:pb-20 overflow-hidden">
      {/* Nature Botanical Background Asset */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 pointer-events-none opacity-95"
        style={{ backgroundImage: "url('/images/hero_nature_background.jpg?v=7')" }}
      />

      {/* Warm Ambient Sunlight Radial Glow Matching Can Background Tone */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-br from-[#F2EBCE]/30 via-[#DFCFAD]/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Hero Layout: Left Typography & Right Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Brand Statement & CTAs */}
          <div className="lg:col-span-5 text-left space-y-4">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>NUTRITION. TECHNOLOGY. HEALTHCARE.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl xl:text-[42px] font-extrabold font-heading text-white tracking-tight leading-[1.12]">
              <span className="block text-white">Building Legacy for a</span>
              <span className="block text-white">Smarter Future of</span>
              <span className="block text-emerald-400 font-black text-3xl sm:text-4xl xl:text-[44px] leading-snug mt-1">
                Nutrition,
              </span>
              <span className="block text-emerald-400 font-black text-3xl sm:text-4xl xl:text-[44px] leading-snug">
                Technology &amp;
              </span>
              <span className="block text-emerald-400 font-black text-4xl sm:text-5xl xl:text-[50px] leading-snug">
                Healthcare
              </span>
            </h1>

            {/* Sub-headline description / Sanskrit Pledge */}
            <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed max-w-xl whitespace-pre-line opacity-95">
              {COMPANY_DETAILS.heroSubheading}
            </p>

            {/* 3 Value Pillars Mini-Badges */}
            <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/10 max-w-md">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold font-heading">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Nutrition</span>
                </div>
                <p className="text-[10.5px] text-slate-300">Nutritious choices</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-purple-400 text-xs font-bold font-heading">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Technology</span>
                </div>
                <p className="text-[10.5px] text-slate-300">Intelligent tech</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-cyan-400 text-xs font-bold font-heading">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Healthcare</span>
                </div>
                <p className="text-[10.5px] text-slate-300">Clinical science</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href="/bioheed"
                size="lg"
                variant="primary"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="rounded-full px-6 font-bold shadow-lg shadow-emerald-950/40"
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
                rightIcon={<ArrowUpRight className="w-4 h-4 text-slate-300" />}
                className="rounded-full px-6 font-bold bg-slate-900/90 text-white hover:bg-slate-800 border-slate-700"
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
          <div className="lg:col-span-7 relative flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6 pt-4 sm:pt-6">
            {/* Visual 1: 3D Product Can + Flavour Selector directly above */}
            <div className="relative shrink-0 flex flex-col items-center">
              {/* Flavour Selector Pills positioned higher up above bottle */}
              <div className="mb-4 z-30 flex items-center gap-1.5 bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/90 shadow-2xl">
                <span className="text-[10.5px] text-slate-300 uppercase tracking-wider font-extrabold mr-1">FLAVOUR:</span>
                <button
                  type="button"
                  onClick={() => setActiveFlavour('vanilla')}
                  className={`px-3 py-0.5 rounded-full text-[10.5px] font-extrabold transition-all ${
                    activeFlavour === 'vanilla'
                      ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Vanilla
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFlavour('chocolate')}
                  className={`px-3 py-0.5 rounded-full text-[10.5px] font-extrabold transition-all ${
                    activeFlavour === 'chocolate'
                      ? 'bg-amber-700 text-amber-50 shadow-md scale-105'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Chocolate
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFlavour('coffee')}
                  className={`px-3 py-0.5 rounded-full text-[10.5px] font-extrabold transition-all ${
                    activeFlavour === 'coffee'
                      ? 'bg-yellow-700 text-yellow-50 shadow-md scale-105'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Coffee
                </button>
              </div>

              <div className="absolute -bottom-4 w-44 h-10 bg-amber-500/25 rounded-full blur-xl pointer-events-none" />
              <GojoCanGraphic flavour={activeFlavour} size="md" />
              <div className="mt-3 text-center">
                <span className="text-[11.5px] font-black text-amber-400 tracking-wider uppercase drop-shadow-md">
                  GOJO — THE MAHARAJA&apos;S DRINK
                </span>
              </div>
            </div>

            {/* Visual 2 & 3: Phone Mockup & Floating QR Card */}
            <div className="relative shrink-0 flex items-center">
              <GojoMePhoneMockup />
              <div className="hidden sm:block absolute -right-8 bottom-6 z-20">
                <QrCard />
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* Connected Ecosystem Ribbon Banner (Matching Reference) */}
        {/* ---------------------------------------------------- */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
              Our Integrated Ecosystem
            </h3>
            <p className="text-xs sm:text-sm text-cyan-400 tracking-widest uppercase font-bold mt-1">
              SCIENCE • NUTRITION • TECHNOLOGY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {/* Box 1: Bioheed Pharmaceutical */}
            <Link
              href="/bioheed"
              className="p-5 rounded-2xl border border-slate-800 bg-slate-950/80 hover:border-emerald-500/70 transition-all flex items-center gap-4 text-left group shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                  Bioheed Pharmaceutical
                </h4>
                <span className="inline-block px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded mt-0.5">
                  Healthcare Division
                </span>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  Science-driven healthcare and nutritional solutions through R&amp;D.
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Box 2: Gojo Nutrition */}
            <Link
              href="/gojo-nutrition"
              className="p-5 rounded-2xl border border-slate-800 bg-slate-950/80 hover:border-cyan-500/70 transition-all flex items-center gap-4 text-left group shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                  Gojo Nutrition
                </h4>
                <span className="inline-block px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-[10px] font-bold rounded mt-0.5">
                  Nutrition Product Division
                </span>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  Nutrition, Reimagined. GOJO – The Maharaja&apos;s Drink.
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Box 3: GojoMe */}
            <Link
              href="/gojome"
              className="p-5 rounded-2xl border border-slate-800 bg-slate-950/80 hover:border-purple-500/70 transition-all flex items-center gap-4 text-left group shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-extrabold text-white group-hover:text-purple-400 transition-colors">
                  GojoMe
                </h4>
                <span className="inline-block px-2 py-0.5 bg-purple-500/20 text-purple-300 text-[10px] font-bold rounded mt-0.5">
                  Nutrition Intelligence
                </span>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  Track your nutrition. Understand your body.
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
