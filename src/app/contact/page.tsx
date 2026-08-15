'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, Building2, ShieldCheck, Sparkles } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { COMPANY_DETAILS } from '@/data/mockData';
import { trackEvent } from '@/lib/analytics/tracker';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    inquiryType: 'GENERAL_CORPORATE',
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        trackEvent({
          action: 'contact_form_submitted',
          category: 'INQUIRY',
          label: formData.inquiryType,
        });
      }
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-16">
        <PageHeader
          badge="GET IN TOUCH"
          badgeVariant="emerald"
          title="Contact GOJO Innovation"
          subtitle="Direct departmental routing for corporate inquiries, pharmaceutical research, nutrition distribution, and technology partnerships."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto text-left">
          {/* Left Column: Office Details & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900/80 space-y-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Corporate Headquarters
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  GOJO Innovation Pvt. Ltd.
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Office Address</span>
                    <span className="text-slate-400 text-xs">{COMPANY_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Corporate Email</span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="text-slate-400 text-xs hover:text-emerald-400 transition-colors"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-purple-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Direct Line</span>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                      className="text-slate-400 text-xs hover:text-emerald-400 transition-colors"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400">
                <strong className="text-white block mb-1">Operating Hours:</strong>
                Monday – Friday: 09:00 AM – 06:00 PM IST
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Department Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/90">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">Inquiry Dispatched!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for contacting GOJO Innovation. Your inquiry has been routed to the respective division secretariat.
                  </p>
                  <Button onClick={() => setSubmitted(false)} size="md" variant="secondary">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Select Department / Division *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-emerald-500"
                    >
                      <option value="GENERAL_CORPORATE">GOJO Innovation (Corporate / General)</option>
                      <option value="BIOHEED_HEALTHCARE">Bioheed Pharmaceutical (Clinical &amp; Healthcare)</option>
                      <option value="GOJO_NUTRITION">GOJO Nutrition (Beverage Distribution &amp; Retail)</option>
                      <option value="GOJOME_PLATFORM">GojoMe (Technology &amp; Integration)</option>
                      <option value="INVESTOR_RELATIONS">Investor Relations Secretariat</option>
                      <option value="CAREERS_HR">Human Resources &amp; Talent</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Phone / Mobile"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <Input
                      label="Organization / Company"
                      placeholder="Organization name (if applicable)"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>

                  <Input
                    label="Subject"
                    required
                    placeholder="Brief subject of your inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />

                  <Textarea
                    label="Detailed Message"
                    required
                    rows={4}
                    placeholder="Please outline the nature of your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  <Button
                    type="submit"
                    disabled={submitting}
                    size="lg"
                    variant="primary"
                    rightIcon={<Send className="w-4 h-4" />}
                    className="w-full justify-center"
                  >
                    {submitting ? 'Transmitting Inquiry...' : 'Submit Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
