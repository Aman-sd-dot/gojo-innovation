import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { constructMetadata } from '@/lib/seo/metadata';
import { COMPANY_DETAILS } from '@/data/mockData';

export const metadata = constructMetadata({
  title: 'Privacy Policy & Data Protection | GOJO Innovation',
  description:
    'Comprehensive privacy disclosure explaining divisional data isolation between Bioheed, Gojo Nutrition, and GojoMe.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-16">
        <PageHeader
          badge="LEGAL & DATA GOVERNANCE"
          badgeVariant="emerald"
          title="Privacy Policy &amp; Divisional Data Isolation"
          subtitle={`Effective Date: August 2026 • ${COMPANY_DETAILS.name}`}
        />

        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-900/90 max-w-4xl mx-auto text-left space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-2">
            <h3 className="text-xl font-bold font-heading text-white">1. Introduction &amp; Commitment</h3>
            <p>
              GOJO Innovation Pvt. Ltd. (&ldquo;GOJO&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates an integrated ecosystem comprising Bioheed Pharmaceutical, GOJO Nutrition, and the GojoMe platform. We recognize the profound sensitivity of health, dietary, and nutritional information.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-xl font-bold font-heading text-white">2. Strict Divisional Data Isolation</h3>
            <p>
              Under our privacy-by-design architecture, personal dietary logs recorded in GojoMe or consumer purchases made through GOJO Nutrition are <strong>strictly separated</strong> from Bioheed Pharmaceutical clinical research databases. Health data is never automatically pooled across corporate divisions without explicit, opt-in consent.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-xl font-bold font-heading text-white">3. Information Collected</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li><strong>Contact Information:</strong> Full name, corporate email, telephone when submitting inquiries or career applications.</li>
              <li><strong>GojoMe Logging Telemetry:</strong> Anonymized meal entries, macro nutrient calculations, and goal progress.</li>
              <li><strong>QR Code Interaction:</strong> Anonymized telemetry timestamps to verify authenticity and prevent fraud.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-xl font-bold font-heading text-white">4. Your Rights &amp; Data Rectification</h3>
            <p>
              You have the right to request access, export, or deletion of your GOJO ID account and all connected dietary logs at any time by contacting our Data Protection Officer at <a href="mailto:info@gojoinnovation.com" className="text-emerald-400 underline">info@gojoinnovation.com</a>.
            </p>
          </section>
        </div>
      </SectionContainer>
    </div>
  );
}
