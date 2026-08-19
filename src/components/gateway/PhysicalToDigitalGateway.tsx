'use client';

import React from 'react';
import { ShoppingBag, QrCode, Smartphone, LineChart, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { QrCard } from '@/components/brand/QrCard';
import { Button } from '@/components/ui/Button';

export function PhysicalToDigitalGateway() {
  const steps = [
    { title: 'BUY GOJO', desc: 'Pick up GOJO – The Maharaja’s Drink from your favourite store.', icon: ShoppingBag, color: 'text-amber-400' },
    { title: 'SCAN', desc: 'Scan the on-can QR code with any smartphone camera.', icon: QrCode, color: 'text-cyan-400' },
    { title: 'ACCESS GojoMe', desc: 'Instant access to your nutrition intelligence dashboard.', icon: Smartphone, color: 'text-purple-400' },
    { title: 'TRACK YOUR NUTRITION', desc: 'Auto-log 12g protein and 350mg bioavailable calcium.', icon: LineChart, color: 'text-blue-400' },
    { title: 'AI-POWERED INSIGHTS', desc: 'Contextual recommendations to reach your daily goal.', icon: Sparkles, color: 'text-teal-400' },
    { title: 'MAKE BETTER CHOICES', desc: 'Build lasting vitality through informed habits.', icon: CheckCircle, color: 'text-emerald-400' },
  ];

  return (
    <SectionContainer className="border-t border-slate-800 bg-slate-950/90 relative overflow-hidden">
      {/* Background glowing line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent pointer-events-none hidden lg:block" />

      <PageHeader
        badge="PHYSICAL-TO-DIGITAL ECOSYSTEM"
        badgeVariant="cyan"
        title="Every GOJO Product Can Become a Gateway to Better Nutrition."
        subtitle="Uniting tangible physical products with intelligent software. Scan any GOJO can to activate GojoMe without friction."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Animated Journey Flow Steps */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="glass-panel p-5 rounded-2xl border-slate-800 hover:border-purple-500/40 transition-all bg-slate-900/80 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-heading">
                      0{idx + 1}
                    </span>
                    <div className={`p-2 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform ${step.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-sm font-black font-heading text-white mb-1 tracking-wide">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: QR Demo Gateway Card */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <QrCard />
          <div className="mt-4 text-center">
            <span className="text-[11px] text-slate-400 italic">
              Try clicking the QR code above to simulate instant onboarding
            </span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
