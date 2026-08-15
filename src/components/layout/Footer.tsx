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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Call to Action Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 mb-16 border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shape the Future</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white">
              Let&apos;s Build a Healthier Tomorrow Together.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Subscribe to official GOJO Innovation updates, clinical R&D whitepapers, and ecosystem announcements.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[400px]">
            {subscribed ? (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">Thank you for subscribing to GOJO Innovation updates!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 flex-1"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-950 flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                >
                  <span>{loading ? 'Subscribing...' : 'Subscribe'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Column Directory Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80 text-left">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              GOJO Innovation Pvt. Ltd. unites healthcare pharmaceutical science, nutritional formulation, and intelligent technology to build a healthier world.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-400 uppercase">
              <span>{COMPANY_DETAILS.tagline}</span>
            </div>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-emerald-400 transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-400 transition-colors">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: The Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Our Ecosystem
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
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
                <Link href="/gojo-nutrition#product" className="hover:text-amber-400 transition-colors text-xs text-slate-400 pl-2">
                  ↳ The Maharaja&apos;s Drink
                </Link>
              </li>
              <li>
                <Link href="/gojome" className="hover:text-purple-400 transition-colors">
                  GojoMe Tech Platform
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="hover:text-cyan-400 transition-colors">
                  Integrated Synergy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Corporate */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Company & Science
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/rd-innovation" className="hover:text-white transition-colors">
                  R&D & Innovation
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-white transition-colors">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers & Talent
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Scientific Blog & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Portals & Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Portals & Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
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
                  Store & Retail Locator
                </Link>
              </li>
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
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
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
