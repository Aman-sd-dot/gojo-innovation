import React from 'react';
import { ShieldCheck, Heart, Eye, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { constructMetadata } from '@/lib/seo/metadata';
import { COMPANY_DETAILS } from '@/data/mockData';

export const metadata = constructMetadata({
  title: 'About Us | GOJO Innovation Pvt. Ltd.',
  description:
    'Discover the story, mission, and leadership principles behind GOJO Innovation Pvt. Ltd. Nutrition. Technology. Healthcare.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Header */}
      <SectionContainer className="pt-12 pb-16">
        <PageHeader
          badge="OUR CORPORATE FOUNDATION"
          badgeVariant="emerald"
          title="Building a Smarter Future of Healthcare, Nutrition & Technology"
          subtitle="GOJO Innovation Pvt. Ltd. was founded with a singular conviction: that human wellness thrives when medical science, wholesome nutrition, and intelligent technology act as one unified ecosystem."
        />

        {/* Brand Philosophy: Nutrition. Technology. Healthcare. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
          <div className="glass-panel p-8 rounded-3xl border-emerald-500/30 bg-slate-900/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black font-heading text-white">NUTRITION.</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We prioritize sustainable nutritional vitality over short-lived fads. Every functional beverage and food product is designed to support lifelong wellness and metabolic resilience.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border-purple-500/30 bg-slate-900/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black font-heading text-white">TECHNOLOGY.</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We foresee a world where individuals possess total clarity over what they consume, guided by transparent, verified data, modern R&amp;D, and intuitive AI insights.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border-cyan-500/30 bg-slate-900/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black font-heading text-white">HEALTHCARE.</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Rooted in pharmaceutical rigor through Bioheed, we build with uncompromising clinical responsibility, ethical standards, and patient-first governance.
            </p>
          </div>
        </div>

        {/* Corporate Narrative */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 bg-slate-900/90 text-left space-y-6 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            The GOJO Innovation Ecosystem
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Headquartered in Hyderabad, India, GOJO Innovation Pvt. Ltd. oversees three synergistic divisions:
          </p>

          <ul className="space-y-4 border-y border-slate-800 py-6 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Bioheed Pharmaceutical (Healthcare Division):</strong> Conducts pharmaceutical formulation, clinical trials research, and establishes rigorous scientific baselines.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">GOJO Nutrition (Nutrition Division under Bioheed):</strong> Manufactures ready-to-drink functional beverages and modern nutritional formulations, starting with our flagship <em>GOJO – The Maharaja&apos;s Drink</em>.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">GojoMe (Nutrition Intelligence Platform):</strong> Delivers verified macro tracking, machine learning food breakdown, and contextual daily dietary advice.
              </div>
            </li>
          </ul>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Button href="/rd-innovation" size="lg" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explore R&amp;D &amp; Innovation
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Contact Leadership
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
