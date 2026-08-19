'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { BrandLogo } from '@/components/brand/BrandLogo';
import { COMPANY_DETAILS } from '@/data/mockData';
import { trackEvent } from '@/lib/analytics/tracker';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubscribed(true);
        trackEvent({
          action: 'footer_newsletter_subscribed',
          category: 'INQUIRY',
          label: email,
        });
      }
    } catch {
      setSubscribed(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-8">
        {/* Top Call to Action Banner */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 mb-10 sm:mb-12 border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 text-left">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shape the Future</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-white">
              Let&apos;s Build a Healthier Tomorrow Together.
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Subscribe to official GOJO Innovation updates, clinical R&amp;D whitepapers, and ecosystem announcements.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="w-full lg:w-auto min-w-[280px] sm:min-w-[380px]">
            {subscribed ? (
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">Thank you for subscribing to GOJO Innovation updates!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 flex-1"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-950 flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                >
                  <span>{loading ? 'Subscribing...' : 'Subscribe'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 5 Column Directory Structure covering full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-800/80 text-left">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3.5">
            <BrandLogo size="md" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              GOJO Innovation Pvt. Ltd. unites healthcare pharmaceutical science, nutritional formulation, and intelligent technology to build a healthier world.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-400 uppercase">
              <span>{COMPANY_DETAILS.tagline}</span>
            </div>

            <div className="pt-1 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-emerald-400 transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-400 transition-colors">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
            </div>

            {/* Certifications & Quality Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10.5px] font-semibold text-slate-400">
                GMP Certified
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10.5px] font-semibold text-slate-400">
                ISO 9001:2015
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10.5px] font-semibold text-slate-400">
                FSSAI Compliant
              </span>
            </div>
          </div>

          {/* Col 2: Ecosystem (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Our Ecosystem
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/bioheed" className="hover:text-emerald-400 transition-colors">
                  Bioheed Pharmaceutical
                </Link>
              </li>
              <li>
                <Link href="/gojo-nutrition" className="hover:text-amber-400 transition-colors">
                  GOJO Nutrition
                </Link>
              </li>
              <li>
                <Link href="/gojo-nutrition#product" className="hover:text-amber-400 transition-colors text-xs text-slate-500 pl-1.5 block">
                  ↳ The Maharaja&apos;s Drink
                </Link>
              </li>
              <li>
                <Link href="/gojome" className="hover:text-purple-400 transition-colors">
                  GojoMe Tech Platform
                </Link>
              </li>
              <li>
                <Link href="/rd-innovation" className="hover:text-cyan-400 transition-colors">
                  R&amp;D Synergy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Corporate (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Company &amp; Science
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/rd-innovation" className="hover:text-white transition-colors">
                  R&amp;D &amp; Innovation
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-white transition-colors">
                  Investors &amp; Governance
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers &amp; Openings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Portals & Access (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Portals &amp; Tools
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/login" className="hover:text-emerald-400 transition-colors font-medium">
                  GOJO ID Universal Login
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  Store &amp; Retail Locator
                </Link>
              </li>
              <li>
                <Link href="/gojome#calculator" className="hover:text-white transition-colors">
                  Nutrition Calculator
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Health &amp; Tech Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Trust (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Trust &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <span className="text-slate-400 flex items-center gap-1">
                  Clinical Data Integrity
                </span>
              </li>
              <li>
                <span className="text-slate-400 flex items-center gap-1">
                  Enterprise Security
                </span>
              </li>
              <li>
                <span className="text-slate-400 flex items-center gap-1">
                  Regulatory Compliance
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Bioheed Clinical Integrity</span>
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Heart className="w-3.5 h-3.5 text-amber-400" />
              <span>Nutrition For Life</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
