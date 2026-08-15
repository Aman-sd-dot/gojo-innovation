import React from 'react';
import { FileText, Download, ShieldCheck, ArrowRight, TrendingUp, Calendar } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { INVESTOR_REPORTS } from '@/data/mockData';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Investor Relations | GOJO Innovation Pvt. Ltd.',
  description:
    'Corporate governance, financial disclosures, and strategic updates for shareholders and investors of GOJO Innovation Pvt. Ltd.',
  path: '/investors',
});

export default function InvestorsPage() {
  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-16">
        <PageHeader
          badge="INVESTOR RELATIONS & GOVERNANCE"
          badgeVariant="emerald"
          title="Value Creation Through Scientific Rigor."
          subtitle="GOJO Innovation Pvt. Ltd. maintains transparent corporate governance, sustainable ESG principles, and disciplined capital allocation across its three operating pillars."
        />

        {/* Corporate Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 bg-slate-900/80">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Pillars in Synergy</span>
            <div className="text-3xl font-extrabold font-heading text-white mt-1">3 Connected Divisions</div>
            <p className="text-xs text-slate-400 mt-2">Healthcare + Nutrition + AI Intelligence</p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-slate-800 bg-slate-900/80">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Headquarters</span>
            <div className="text-3xl font-extrabold font-heading text-white mt-1">Hyderabad, India</div>
            <p className="text-xs text-slate-400 mt-2">Biotech &amp; Technology Corridor (PIN: 500001)</p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-slate-800 bg-slate-900/80">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Governance Standard</span>
            <div className="text-3xl font-extrabold font-heading text-white mt-1">ISO &amp; FSSAI</div>
            <p className="text-xs text-slate-400 mt-2">Pharmaceutical-grade clinical compliance</p>
          </div>
        </div>

        {/* Disclosures & Investor Documents */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 bg-slate-900/90 text-left mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Shareholder Reports &amp; Announcements
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Official disclosures, quarterly metrics, and corporate ESG frameworks.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider hidden sm:block">
              FY 2026-27 Active
            </span>
          </div>

          <div className="space-y-4">
            {INVESTOR_REPORTS.map((report) => (
              <div
                key={report.id}
                className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                      {report.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{report.date}</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-heading">
                    {report.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                    {report.summary}
                  </p>
                </div>

                <div className="shrink-0">
                  <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span>View Disclosures</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Investor Relations Team */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-bold font-heading text-white">
            Direct Investor Inquiries
          </h3>
          <p className="text-sm text-slate-400">
            Institutional investors and prospective partners may contact our corporate secretariat directly.
          </p>
          <Button href="/contact?dept=investors" size="lg" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Connect with IR Secretariat
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
}
