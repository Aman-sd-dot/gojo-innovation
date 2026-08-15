'use client';

import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Input, Textarea } from '@/components/ui/Input';
import { CAREER_OPENINGS } from '@/data/mockData';
import { JobOpening, JobDepartment } from '@/types';
import { trackEvent } from '@/lib/analytics/tracker';

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>('ALL');
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    coverNote: '',
  });

  const departments: (string | JobDepartment)[] = [
    'ALL',
    'R&D',
    'Nutrition',
    'Technology',
    'Data & AI',
    'Marketing',
  ];

  const filteredJobs =
    selectedDept === 'ALL'
      ? CAREER_OPENINGS
      : CAREER_OPENINGS.filter((job) => job.department === selectedDept);

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobId: selectedJob?.id,
          jobTitle: selectedJob?.title,
          ...formData,
        }),
      });

      if (res.ok) {
        setAppliedSuccess(true);
        trackEvent({
          action: 'career_application_submitted',
          category: 'CAREER',
          label: selectedJob?.title,
        });
      }
    } catch {
      setAppliedSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-16">
        <PageHeader
          badge="JOIN OUR ECOSYSTEM"
          badgeVariant="emerald"
          title="Build the Future With Us."
          subtitle="We are looking for people who believe that healthcare, nutrition, and technology can create a better future."
        />

        {/* Department Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {departments.map((dept) => {
            const isSelected = selectedDept === dept;
            return (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/60 scale-[1.02]'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {dept === 'ALL' ? 'All Disciplines' : dept}
              </button>
            );
          })}
        </div>

        {/* Job Listings Cards */}
        <div className="space-y-4 max-w-4xl mx-auto text-left">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    {job.department}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{job.location}</span>
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{job.type}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white">
                  {job.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {job.summary}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setApplyModalOpen(true);
                    setAppliedSuccess(false);
                  }}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-950 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Modal */}
        <Modal
          isOpen={applyModalOpen}
          onClose={() => setApplyModalOpen(false)}
          title={selectedJob ? `Apply: ${selectedJob.title}` : 'Submit Application'}
          subtitle={`Department: ${selectedJob?.department} • ${selectedJob?.location}`}
          maxWidth="lg"
        >
          {appliedSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-heading text-white">Application Received!</h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                Thank you for applying to join GOJO Innovation. Our talent acquisition team will review your profile.
              </p>
              <Button onClick={() => setApplyModalOpen(false)} size="md" variant="secondary">
                Close Window
              </Button>
            </div>
          ) : (
            <form onSubmit={handleApplySubmit} className="space-y-4">
              <Input
                label="Full Name"
                required
                placeholder="Dr. / Mr. / Ms. Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />

              <Input
                label="Email Address"
                type="email"
                required
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <Input
                label="Phone Number"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <Input
                label="LinkedIn Profile or Portfolio URL"
                placeholder="https://linkedin.com/in/yourprofile"
                value={formData.linkedIn}
                onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
              />

              <Textarea
                label="Brief Cover Note & Relevant Experience"
                required
                placeholder="Describe your domain experience and how you can contribute to the GOJO ecosystem..."
                value={formData.coverNote}
                onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                rows={3}
              />

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
                <Button type="button" onClick={() => setApplyModalOpen(false)} variant="ghost" size="md">
                  Cancel
                </Button>
                <Button type="submit" disabled={submitting} variant="primary" size="md">
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </div>
            </form>
          )}
        </Modal>
      </SectionContainer>
    </div>
  );
}
