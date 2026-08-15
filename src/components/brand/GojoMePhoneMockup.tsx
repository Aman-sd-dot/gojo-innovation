'use client';

import React, { useState } from 'react';
import { Sparkles, BarChart2, Plus, Target, User, Home, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface GojoMePhoneMockupProps {
  className?: string;
  interactive?: boolean;
}

export function GojoMePhoneMockup({
  className,
  interactive = true,
}: GojoMePhoneMockupProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'track' | 'goals'>('home');
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div
      className={cn(
        'relative mx-auto w-[290px] sm:w-[310px] h-[580px] bg-slate-950 rounded-[44px] p-3 border-[6px] border-slate-800 shadow-2xl shadow-purple-950/40 select-none overflow-hidden',
        className
      )}
    >
      {/* Outer subtle glow */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600/20 via-indigo-500/20 to-teal-500/20 rounded-[48px] -z-10 blur-xl pointer-events-none" />

      {/* iPhone Dynamic Island */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
        <div className="w-2.5 h-2.5 bg-slate-900 rounded-full border border-slate-700/50" />
        <div className="w-2 h-2 bg-emerald-500/80 rounded-full animate-pulse" />
      </div>

      {/* Phone Screen Container */}
      <div className="w-full h-full bg-slate-900/95 rounded-[36px] overflow-hidden flex flex-col justify-between pt-8 pb-3 px-3.5 text-slate-100 relative">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-36 h-36 bg-emerald-600/15 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between mt-1 mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-[11px] font-black text-white shadow-sm">
              G
            </div>
            <span className="font-heading font-extrabold text-base tracking-tight text-white">
              GojoMe
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-medium bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700/50">
            PRO V1.4
          </span>
        </div>

        {/* User Greeting & Subtitle */}
        <div className="text-left mb-2.5">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-white">Hi Aryan 👋</h4>
            <span className="text-[9px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded-md border border-emerald-500/30">
              Synced
            </span>
          </div>
          <p className="text-[9.5px] text-slate-400 tracking-tight mt-0.5">
            Track • Analyse • Understand • Improve
          </p>
        </div>

        {/* Nutrition Score Card & Macro Metrics */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-3 mb-2 shadow-inner">
          <div className="flex items-center gap-3">
            {/* Circular Progress */}
            <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-500 transition-all duration-1000"
                  strokeDasharray="85, 100"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-[8px] uppercase tracking-wider text-slate-400 font-semibold">Score</span>
                <span className="text-sm font-extrabold text-white leading-none">85%</span>
              </div>
            </div>

            {/* Macro Breakdown */}
            <div className="flex-1 space-y-1 text-left">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-400">Protein</span>
                <span className="font-bold text-amber-300">68 / 90g</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full w-[75%]" />
              </div>

              <div className="flex justify-between items-center text-[10px] pt-0.5">
                <span className="text-slate-400">Calories</span>
                <span className="font-bold text-slate-200">1850 / 2300</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
                <div className="bg-purple-400 h-full rounded-full w-[80%]" />
              </div>

              <div className="flex justify-between items-center text-[10px] pt-0.5">
                <span className="text-slate-400">Calcium</span>
                <span className="font-bold text-teal-300">900 / 1200 mg</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
                <div className="bg-teal-400 h-full rounded-full w-[75%]" />
              </div>
            </div>
          </div>
        </div>

        {/* AI Insight Box */}
        <div className="bg-gradient-to-br from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-500/30 rounded-2xl p-2.5 mb-2 text-left">
          <div className="flex items-center gap-1.5 text-purple-300 text-[10px] font-bold mb-1">
            <Sparkles className="w-3 h-3 text-purple-400 shrink-0" />
            <span>Today&apos;s AI Insight</span>
          </div>
          <p className="text-[9px] text-slate-300 leading-snug">
            Your protein intake is <strong className="text-amber-300">12% below target</strong>. Try adding milk, dal, or a <strong>GOJO Can</strong> to achieve your daily recovery goal.
          </p>
          <button
            onClick={() => setIsLogged(!isLogged)}
            className="mt-1.5 w-full py-1 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-[9.5px] font-bold flex items-center justify-center gap-1 transition-colors"
          >
            {isLogged ? (
              <>
                <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                <span>Added GOJO Vanilla (+12g Protein)</span>
              </>
            ) : (
              <>
                <span>View Recommendations</span>
                <ChevronRight className="w-2.5 h-2.5" />
              </>
            )}
          </button>
        </div>

        {/* Fast Action Quick Log */}
        <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-2 flex items-center justify-between text-[10px] mb-1">
          <span className="text-slate-400 text-left">Recent: GOJO Vanilla 200ml</span>
          <span className="text-emerald-400 font-bold">+12g Pro</span>
        </div>

        {/* Bottom App Navigation */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-xl py-1.5 px-3 flex items-center justify-around">
          <button
            onClick={() => setActiveTab('home')}
            className={cn(
              'flex flex-col items-center gap-0.5 text-[8.5px]',
              activeTab === 'home' ? 'text-purple-400 font-bold' : 'text-slate-500'
            )}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <button
            onClick={() => setActiveTab('track')}
            className={cn(
              'flex flex-col items-center gap-0.5 text-[8.5px]',
              activeTab === 'track' ? 'text-purple-400 font-bold' : 'text-slate-500'
            )}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Track</span>
          </button>
          <button className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 shadow-md">
            <Plus className="w-3.5 h-3.5 stroke-[3]" />
          </button>
          <button
            onClick={() => setActiveTab('goals')}
            className={cn(
              'flex flex-col items-center gap-0.5 text-[8.5px]',
              activeTab === 'goals' ? 'text-purple-400 font-bold' : 'text-slate-500'
            )}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Goals</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-[8.5px] text-slate-500">
            <User className="w-3.5 h-3.5" />
            <span>Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
