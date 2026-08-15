'use client';

import React, { useState } from 'react';
import { MapPin, ShoppingBag, CheckCircle2, ArrowRight, Store, Sparkles } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { trackEvent } from '@/lib/analytics/tracker';

export default function ShopPage() {
  const [pincode, setPincode] = useState('');
  const [searched, setSearched] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistJoined, setWaitlistJoined] = useState(false);

  const retailPartners = [
    { name: 'Hyderabad Metro Retail Network', areas: 'Banjara Hills, Jubilee Hills, Hitec City, Gachibowli', type: 'Supermarkets & Modern Trade' },
    { name: 'Telangana Regional Distribution', areas: 'Secunderabad, Warangal, Karimnagar Hubs', type: 'Authorized FMCG Stockists' },
    { name: 'Institutional Wellness Centres', areas: 'Corporate Tech Parks & Fitness Centers', type: 'Direct Automated Kiosks' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode) return;
    setSearched(true);
    trackEvent({
      action: 'store_locator_pincode_searched',
      category: 'PRODUCT_INTERACTION',
      label: pincode,
    });
  };

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    setWaitlistJoined(true);
    trackEvent({
      action: 'direct_ecommerce_waitlist_joined',
      category: 'PRODUCT_INTERACTION',
      label: waitlistEmail,
    });
  };

  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-16">
        <PageHeader
          badge="RETAIL & DISTRIBUTION"
          badgeVariant="amber"
          title="Where to Buy GOJO"
          subtitle="Locate authorized retail outlets stocking GOJO – The Maharaja's Drink (200 ml) or join the early direct-to-consumer e-commerce waitlist."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto text-left">
          {/* Left Column: Store Pincode Locator */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900/90 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                <Store className="w-4 h-4" />
                <span>Store &amp; Stockist Locator</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Find Nearby Retail Outlets</h3>
            </div>

            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                placeholder="Enter 6-digit PIN code (e.g. 500081)"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                maxLength={6}
                className="px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 flex-1"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Check Stores</span>
              </button>
            </form>

            {searched && (
              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 space-y-2 animate-fade-in">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Available at 18+ retail outlets near PIN: {pincode}</span>
                </div>
                <p className="text-xs text-slate-300">
                  Stocked across leading supermarkets, gourmet grocers, and certified beverage distributors across Hyderabad &amp; Telangana.
                </p>
              </div>
            )}

            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Primary Regional Channels:
              </span>
              {retailPartners.map((p) => (
                <div key={p.name} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white">{p.name}</h4>
                    <span className="text-[10px] text-amber-400 font-semibold">{p.type}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">{p.areas}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Direct E-Commerce VIP Waitlist */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-purple-500/30 bg-gradient-to-b from-slate-900 via-slate-900 to-purple-950/40 space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
                <Sparkles className="w-4 h-4" />
                <span>Online Store VIP Access</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Direct-to-Door Delivery</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We are preparing our direct ecosystem e-commerce platform. Join the priority waitlist for early access cases, exclusive flavour bundles, and GojoMe subscription sync.
              </p>
            </div>

            {waitlistJoined ? (
              <div className="p-4 rounded-2xl bg-purple-950/60 border border-purple-500/40 text-purple-300 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-purple-400 mx-auto" />
                <span className="text-xs font-bold block text-white">You are on the VIP priority list!</span>
                <span className="text-[10px] text-purple-200">We will notify you upon launch.</span>
              </div>
            ) : (
              <form onSubmit={handleWaitlist} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Join Early E-Commerce Waitlist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-4 border-t border-slate-800 text-[10.5px] text-slate-400">
              Bulk institutional orders &amp; wholesale inquiries can contact <a href="mailto:info@gojoinnovation.com" className="text-emerald-400 underline">info@gojoinnovation.com</a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
