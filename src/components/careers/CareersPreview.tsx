'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Briefcase, Sparkles } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';

export function CareersPreview() {
  const departments = [
    'R&D Science',
    'Clinical Nutrition',
    'Software & Cloud',
    'Data & AI',
    'Product Design',
    'Brand & Marketing',
    'Sales & Distribution',
    'Global Operations',
    'Corporate Finance',
  ];

  return (
    <SectionContainer className="border-t border-slate-800 bg-slate-900/40 py-12 sm:py-16">
      <PageHeader
        badge="JOIN THE MISSION"
        badgeVariant="emerald"
        title="Build the Future With Us."
        subtitle="We are looking for passionate minds who believe that healthcare, nutrition, and technology can create a healthier tomorrow."
        className="mb-8 sm:mb-10"
      />

      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 bg-slate-950/80 text-left max-w-4xl mx-auto space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
            Join the Multi-Disciplinary GOJO Innovation Ecosystem
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Whether your expertise is molecular food formulation, machine learning algorithm design, pharmaceutical quality governance, or consumer brand storytelling, there is a place for you at GOJO Innovation.
          </p>
        </div>

        {/* 9 Department Badges */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Hiring Across 9 Core Disciplines:
          </span>
          <div className="flex flex-wrap gap-2 pt-1">
            {departments.map((dept) => (
              <span
                key={dept}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300"
              >
                {dept}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Headquartered in Hyderabad • Hybrid &amp; On-Site Roles Available
          </div>
          <Button
            href="/careers"
            size="lg"
            variant="bioheed"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            View Open Positions
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}
