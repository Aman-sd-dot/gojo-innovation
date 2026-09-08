'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Shield, Eye, Heart, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GojoMePhoneMockup } from '@/components/brand/GojoMePhoneMockup';
import { QrCard } from '@/components/brand/QrCard';
import { COMPANY_DETAILS } from '@/data/mockData';
import { trackEvent } from '@/lib/analytics/tracker';

export function Hero() {
  return (
    <section className="relative pt-16 pb-12 sm:pt-20 lg:pt-24 lg:pb-20 overflow-hidden">
      {/* Home Page GOJO Tech & Nature Hero Artwork Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/home_bg.jpg"
          alt="GOJO Innovation - Tech, Healthcare & Nutrition"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_top] sm:object-center opacity-85 sm:opacity-75"
        />
        {/* Subtle Responsive Gradient Overlays for Vivid Artwork & Crisp Text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080C14]/65 via-[#080C14]/40 to-[#080C14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/75 via-[#080C14]/30 to-[#080C14]/55" />
      </div>

      {/* Vibrant Tech & Nature Ambient Radial Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[800px] h-[300px] sm:h-[500px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-10 left-10 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Hero Layout: Left Typography & Right Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Brand Statement & CTAs */}
          <div className="lg:col-span-6 text-left space-y-4">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-extrabold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>NUTRITION. TECHNOLOGY. HEALTHCARE.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl xl:text-[42px] font-extrabold font-heading text-white tracking-tight leading-[1.15]">
              <span className="block text-white">Building Legacy for a</span>
              <span className="block text-white">Smarter Future of</span>
              <span className="block text-emerald-400 font-black text-2xl sm:text-4xl xl:text-[44px] leading-snug mt-0.5">
                Nutrition,
              </span>
              <span className="block text-emerald-400 font-black text-2xl sm:text-4xl xl:text-[44px] leading-snug">
                Technology &amp;
              </span>
              <span className="block text-emerald-400 font-black text-3xl sm:text-5xl xl:text-[50px] leading-snug">
                Healthcare
              </span>
            </h1>

            {/* Sanskrit Pledge Subheading */}
            <p className="text-[11px] sm:text-sm font-semibold text-slate-300 leading-relaxed whitespace-pre-line tracking-wider my-2 max-w-xl">
              {COMPANY_DETAILS.heroSubheading}
            </p>

            {/* 3 Value Pillars Mini-Badges */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 py-2 border-y border-white/10 max-w-md">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-emerald-400 text-[11px] sm:text-xs font-bold font-heading">
                  <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>Nutrition</span>
                </div>
                <p className="text-[9.5px] sm:text-[10.5px] text-slate-300 leading-tight">Nutritious choices</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-purple-400 text-[11px] sm:text-xs font-bold font-heading">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>Technology</span>
                </div>
                <p className="text-[9.5px] sm:text-[10.5px] text-slate-300 leading-tight">Intelligent tech</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-cyan-400 text-[11px] sm:text-xs font-bold font-heading">
                  <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>Healthcare</span>
                </div>
                <p className="text-[9.5px] sm:text-[10.5px] text-slate-300 leading-tight">Clinical science</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                href="/bioheed"
                size="lg"
                variant="primary"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto rounded-full px-6 font-bold shadow-lg shadow-emerald-950/40 justify-center"
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
                className="w-full sm:w-auto rounded-full px-6 font-bold bg-slate-900/90 text-white hover:bg-slate-800 border-slate-700 justify-center"
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

          {/* Right Column: Premium Visual Composite (Phone Mockup + QR Card) */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-2 sm:pt-6">
            <div className="relative shrink-0 flex items-center transform scale-[0.88] xs:scale-95 sm:scale-100 origin-center">
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
        <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-white/10">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-2xl font-black font-heading text-white">
              Our Integrated Ecosystem
            </h3>
            <p className="text-[10px] sm:text-sm text-cyan-400 tracking-widest uppercase font-bold mt-1">
              SCIENCE • NUTRITION • TECHNOLOGY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 items-stretch">
            {/* Box 1: Bioheed Pharmaceutical */}
            <Link
              href="/bioheed"
              className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-950/80 hover:border-emerald-500/70 transition-all flex items-center gap-3.5 sm:gap-4 text-left group shadow-xl"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                  Bioheed Pharmaceutical
                </h4>
                <span className="inline-block px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[9.5px] sm:text-[10px] font-bold rounded mt-0.5">
                  Healthcare Division
                </span>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1 line-clamp-2">
                  Science-driven healthcare and nutritional solutions through R&amp;D.
                </p>
              </div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </Link>

            {/* Box 2: Gojo Nutrition */}
            <Link
              href="/gojo-nutrition"
              className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-950/80 hover:border-cyan-500/70 transition-all flex items-center gap-3.5 sm:gap-4 text-left group shadow-xl"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                  Gojo Nutrition
                </h4>
                <span className="inline-block px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-[9.5px] sm:text-[10px] font-bold rounded mt-0.5">
                  Nutrition Product Division
                </span>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1 line-clamp-2">
                  Nutrition, Reimagined. GOJO – The Maharaja&apos;s Drink.
                </p>
              </div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shrink-0">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </Link>

            {/* Box 3: GojoMe */}
            <Link
              href="/gojome"
              className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-950/80 hover:border-purple-500/70 transition-all flex items-center gap-3.5 sm:gap-4 text-left group shadow-xl"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 transition-transform">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-purple-400 transition-colors">
                  GojoMe
                </h4>
                <span className="inline-block px-2 py-0.5 bg-purple-500/20 text-purple-300 text-[9.5px] sm:text-[10px] font-bold rounded mt-0.5">
                  Nutrition Intelligence
                </span>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1 line-clamp-2">
                  Track your nutrition. Understand your body.
                </p>
              </div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors shrink-0">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
