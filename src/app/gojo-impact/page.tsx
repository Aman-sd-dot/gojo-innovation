import React from 'react';
import Link from 'next/link';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import {
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Users,
  Sparkles,
  ArrowRight,
  Globe2,
  Award,
  BookOpen,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'GojoImpact | Sustainability, Community Health & ESG Commitments',
  description:
    'Discover GojoImpact: GOJO Innovation’s initiatives in accessible nutrition, preventative healthcare, sustainable practices, and community wellness.',
  path: '/gojo-impact',
});

export default function GojoImpactPage() {
  const impactPillars = [
    {
      title: 'Accessible Daily Nutrition',
      description:
        'Bridging the nutritional gap across communities by formulating affordable, high-density nutrition with uncompromising clinical quality standards.',
      icon: HeartHandshake,
      badge: 'Nutritional Equity',
      color: 'emerald',
      metrics: 'Over 100,000+ daily nutritional servings planned across target regions',
      highlights: [
        'Bioavailable micronutrient fortification',
        'Transparent ingredient pricing & accessibility',
        'Culturally attuned Ayurvedic & modern formulations',
      ],
    },
    {
      title: 'Sustainable Sourcing & Clean Labels',
      description:
        'Ensuring our entire supply chain upholds planetary health through ethical sourcing, clean labeling, and eco-friendly recyclable packaging.',
      icon: Leaf,
      badge: 'Eco Stewardship',
      color: 'teal',
      metrics: '100% recyclable aluminum packaging commitment for GOJO beverages',
      highlights: [
        'Zero artificial fillers or banned additives',
        'Ethical farmer partnership & direct sourcing',
        'Reduced carbon footprint in manufacturing',
      ],
    },
    {
      title: 'Preventative Health & Digital Literacy',
      description:
        'Democratizing nutrition science via GojoMe AI intelligence so individuals can decode food choices and prevent lifestyle-induced metabolic disorders.',
      icon: Activity,
      badge: 'Preventative Wellness',
      color: 'purple',
      metrics: 'Empowering individuals with real-time validated macro tracking',
      highlights: [
        'Free nutritional education modules on GojoMe',
        'Science-backed metabolic health guidelines',
        'Zero-hallucination, verified data algorithms',
      ],
    },
    {
      title: 'Community Health & Sanskrit Legacy',
      description:
        'Embodying our foundational pledge: "सर्वे सन्तु निरामयाः" (May all be free from illness). Driving ground-level health screenings and wellness camps.',
      icon: Users,
      badge: 'Social Good',
      color: 'amber',
      metrics: 'Active partnerships with local health centers and community camps',
      highlights: [
        'Free grassroots nutrition & health awareness drives',
        'Educational workshops for schools and institutions',
        'Supporting public health research initiatives',
      ],
    },
  ];

  const milestones = [
    {
      stat: '100%',
      label: 'Clean Label Standard',
      sub: 'Zero compromised ingredients or harmful additives',
    },
    {
      stat: '50K+',
      label: 'Consumers Reached',
      sub: 'Benefiting from science-backed nutrition & tools',
    },
    {
      stat: '100%',
      label: 'Recyclable Packaging',
      sub: 'Sustainable aluminum and eco-conscious materials',
    },
    {
      stat: '3+',
      label: 'Ecosystem Divisions',
      sub: 'Healthcare, Nutrition & AI working for human wellbeing',
    },
  ];

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <SectionContainer className="pt-12 pb-8">
        <PageHeader
          badge="ESG & COMMUNITY HEALTH"
          badgeVariant="emerald"
          title="GOJOIMPACT"
          subtitle="Innovating with purpose. We believe true innovation is measured not just by products created, but by lives enriched and health safeguarded."
        />

        {/* Top Highlight Banner */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-slate-900/90 to-slate-950 text-left mb-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/40">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Our Foundational Pledge</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white max-w-2xl leading-tight">
              &ldquo;सर्वे सन्तु निरामयाः — May All Be Free From Illness.&rdquo;
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              At GOJO Innovation, our ESG framework is built directly into our DNA. From Bioheed Pharmaceutical’s rigorous formulations to GOJO Nutrition’s functional beverages and GojoMe’s AI intelligence, every initiative is engineered to elevate global health standards sustainably.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
              {milestones.map((m) => (
                <div key={m.label} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black font-heading text-emerald-400">
                    {m.stat}
                  </div>
                  <div className="text-xs font-bold text-white">{m.label}</div>
                  <div className="text-[11px] text-slate-400 leading-tight">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Impact Pillars Grid */}
        <div className="text-left mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Strategic Focus Areas</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              The Four Pillars of GojoImpact
            </h3>
            <p className="text-sm text-slate-400">
              How we deploy science, technology, and community outreach to generate lasting positive health outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {impactPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group bg-slate-900/80"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-[11px] font-bold text-emerald-300 uppercase tracking-wider border border-slate-700">
                        {pillar.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold font-heading text-white group-hover:text-emerald-400 transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs font-semibold text-emerald-300">
                      💡 {pillar.metrics}
                    </div>

                    <ul className="space-y-2 pt-2">
                      {pillar.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Collaborative Call to Action */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-950 text-center max-w-4xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
            <Award className="w-7 h-7" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Partner With Us For Community Impact
          </h3>

          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Are you a healthcare institution, research NGO, educational body, or sustainability advocate? Let’s unite forces to scale health, nutrition, and ecological wellness.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Partner With GojoImpact
            </Button>
            <Button
              href="/about"
              size="lg"
              variant="secondary"
            >
              Explore Our Philosophy
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
