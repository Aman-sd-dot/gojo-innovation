import React from 'react';
import { RdSection } from '@/components/rd/RdSection';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { RD_PROJECTS } from '@/data/mockData';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'R&D & Innovation | GOJO Innovation Pvt. Ltd.',
  description:
    'Explore scientific research, clinical formulation pipelines, and biotechnology innovations at GOJO Innovation Pvt. Ltd.',
  path: '/rd-innovation',
});

export default function RdInnovationPage() {
  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-8">
        <PageHeader
          badge="R&D & INNOVATION CENTRE"
          badgeVariant="rd"
          title="Research. Innovate. Improve."
          subtitle="Formulation labs, clinical evaluation pipelines, and intelligent health algorithms driven by evidence-based inquiry."
        />
      </SectionContainer>

      {/* Main R&D Section */}
      <RdSection />

      {/* Full Detailed Pipeline Matrix */}
      <SectionContainer className="border-t border-slate-800 bg-slate-950">
        <div className="text-left mb-8">
          <h3 className="text-2xl font-bold font-heading text-white">
            Comprehensive R&amp;D Project Portfolio
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            All active laboratory and clinical studies underway across Bioheed, Gojo Nutrition, and GojoMe.
          </p>
        </div>

        <div className="space-y-6">
          {RD_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/80 text-left space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {proj.division}
                  </span>
                  <h4 className="text-xl font-extrabold font-heading text-white mt-0.5">
                    {proj.title}
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {proj.stageLabel}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{proj.timeline}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                <div>
                  <strong className="text-white block mb-1">Project Summary:</strong>
                  <p className="text-slate-400 leading-relaxed">{proj.summary}</p>
                </div>
                <div>
                  <strong className="text-white block mb-1">Scientific Core:</strong>
                  <p className="text-slate-400 leading-relaxed">{proj.scientificFocus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
