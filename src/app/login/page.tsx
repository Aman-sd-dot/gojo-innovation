'use client';

import React, { useState } from 'react';
import { ShieldCheck, User, Lock, ArrowRight, Sparkles, Check, Eye, EyeOff } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { trackEvent } from '@/lib/analytics/tracker';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [consentGojoMe, setConsentGojoMe] = useState(true);
  const [consentNutrition, setConsentNutrition] = useState(true);
  const [consentBioheed, setConsentBioheed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
    trackEvent({
      action: 'gojo_id_auth_success',
      category: 'NAVIGATION',
      label: email,
    });
  };

  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-16">
        <PageHeader
          badge="UNIVERSAL ECOSYSTEM LOGIN"
          badgeVariant="emerald"
          title="GOJO ID Portal"
          subtitle="Single Sign-On authentication for GojoMe, GOJO Consumer Loyalty, and Bioheed Healthcare with strict privacy boundaries."
        />

        <div className="max-w-xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-900/90 text-left">
          {loggedIn ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold font-heading text-white">GOJO ID Authenticated</h3>
                <p className="text-xs text-slate-400">Session active for: <strong>{email || 'aryan.sharma@example.com'}</strong></p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-left text-xs">
                <strong className="text-white block">Active Ecosystem Permissions:</strong>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>GojoMe Nutrition Intelligence Sync: ENABLED</span>
                </div>
                <div className="flex items-center gap-2 text-amber-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>GOJO Nutrition Loyalty &amp; Rewards: ENABLED</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span>•</span>
                  <span>Bioheed Clinical Medical Records: ISOLATED (Not Shared)</span>
                </div>
              </div>

              <Button onClick={() => setLoggedIn(false)} size="md" variant="secondary" className="w-full">
                Sign Out of GOJO ID
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Tab Switcher */}
              <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                    mode === 'login' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sign In with GOJO ID
                </button>
                <button
                  type="button"
                  onClick={() => setMode('register')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                    mode === 'register' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Create GOJO ID
                </button>
              </div>

              <Input
                label="Email or Universal GOJO ID"
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Strict Privacy Boundary Checkboxes for Register */}
              {mode === 'register' && (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Divisional Privacy Boundary Controls</span>
                  </div>

                  <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consentGojoMe}
                      onChange={(e) => setConsentGojoMe(e.target.checked)}
                      className="mt-0.5 rounded accent-emerald-500"
                    />
                    <span>Allow GojoMe to compute personalized nutrition scores from logged food intake.</span>
                  </label>

                  <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consentNutrition}
                      onChange={(e) => setConsentNutrition(e.target.checked)}
                      className="mt-0.5 rounded accent-emerald-500"
                    />
                    <span>Allow GOJO Nutrition loyalty credit sync from on-can QR scans.</span>
                  </label>

                  <label className="flex items-start gap-2.5 text-xs text-slate-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consentBioheed}
                      onChange={(e) => setConsentBioheed(e.target.checked)}
                      className="mt-0.5 rounded accent-emerald-500"
                    />
                    <span>(Optional) Share anonymized dietary statistics with Bioheed clinical trials registry.</span>
                  </label>
                </div>
              )}

              <Button type="submit" size="lg" variant="primary" className="w-full justify-center">
                {mode === 'login' ? 'Sign In to GOJO ID' : 'Register GOJO ID'}
              </Button>

              <div className="text-center">
                <span className="text-xs text-slate-400">
                  Protected by GOJO ID Enterprise Encryption &amp; Audit Logging
                </span>
              </div>
            </form>
          )}
        </div>
      </SectionContainer>
    </div>
  );
}
