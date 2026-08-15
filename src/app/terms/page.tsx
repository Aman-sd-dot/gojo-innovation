import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { constructMetadata } from '@/lib/seo/metadata';
import { COMPANY_DETAILS } from '@/data/mockData';

export const metadata = constructMetadata({
  title: 'Terms of Service | GOJO Innovation Pvt. Ltd.',
  description: 'Terms and conditions governing the use of GOJO Innovation websites and services.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-16">
        <PageHeader
          badge="LEGAL COMPLIANCE"
          badgeVariant="emerald"
          title="Terms of Service"
          subtitle={`Last Updated: August 2026 • ${COMPANY_DETAILS.name}`}
        />

        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-900/90 max-w-4xl mx-auto text-left space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-2">
            <h3 className="text-xl font-bold font-heading text-white">1. Acceptance of Terms</h3>
            <p>
              By accessing www.gojoinnovation.com or using the GojoMe intelligence platform, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-xl font-bold font-heading text-white">2. Informational &amp; Wellness Purpose (No Medical Diagnosis)</h3>
            <p>
              The content provided on this website, in GOJO Nutrition materials, and via GojoMe is designed for general wellness, nutritional education, and dietary tracking. It does <strong>not</strong> constitute medical advice or a clinical diagnosis. Always consult a qualified physician for acute medical conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-xl font-bold font-heading text-white">3. Intellectual Property</h3>
            <p>
              All trademarks, patents, proprietary formulation names (including <em>GOJO – The Maharaja&apos;s Drink</em>), algorithms, logos, and scientific documentation are the exclusive property of GOJO Innovation Pvt. Ltd. and Bioheed Pharmaceutical.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-xl font-bold font-heading text-white">4. Jurisdiction</h3>
            <p>
              These terms are governed by and construed in accordance with the laws of India, with exclusive jurisdiction in the courts of Hyderabad, Telangana.
            </p>
          </section>
        </div>
      </SectionContainer>
    </div>
  );
}
