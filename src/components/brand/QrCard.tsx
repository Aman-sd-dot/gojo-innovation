'use client';

import React, { useState } from 'react';
import { QrCode, Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics/tracker';

export interface QrCardProps {
  className?: string;
}

export function QrCard({ className }: QrCardProps) {
  const [scanned, setScanned] = useState(false);

  const handleSimulateScan = () => {
    setScanned(true);
    trackEvent({
      action: 'hero_qr_simulated_scan',
      category: 'QR_GATEWAY',
      label: 'Free GojoMe Access Gateway',
    });
    setTimeout(() => setScanned(false), 4000);
  };

  return (
    <div
      className={cn(
        'w-full max-w-[210px] bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-4 shadow-xl text-center relative group transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-950/40',
        className
      )}
    >
      {/* QR Code Container */}
      <div
        onClick={handleSimulateScan}
        className="cursor-pointer relative mx-auto w-36 h-36 bg-white rounded-2xl p-2.5 shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        title="Click to simulate QR scan"
      >
        {/* Crisp Vector QR Graphic */}
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="#0F172A">
          {/* Top Left Finder */}
          <rect x="5" y="5" width="28" height="28" rx="4" fill="#0F172A" />
          <rect x="9" y="9" width="20" height="20" rx="2" fill="#FFFFFF" />
          <rect x="13" y="13" width="12" height="12" rx="1" fill="#7C3AED" />

          {/* Top Right Finder */}
          <rect x="67" y="5" width="28" height="28" rx="4" fill="#0F172A" />
          <rect x="71" y="9" width="20" height="20" rx="2" fill="#FFFFFF" />
          <rect x="75" y="13" width="12" height="12" rx="1" fill="#7C3AED" />

          {/* Bottom Left Finder */}
          <rect x="5" y="67" width="28" height="28" rx="4" fill="#0F172A" />
          <rect x="9" y="71" width="20" height="20" rx="2" fill="#FFFFFF" />
          <rect x="13" y="75" width="12" height="12" rx="1" fill="#7C3AED" />

          {/* Data Modules */}
          <rect x="38" y="8" width="6" height="6" rx="1" fill="#0F172A" />
          <rect x="48" y="8" width="6" height="6" rx="1" fill="#0F172A" />
          <rect x="56" y="16" width="6" height="6" rx="1" fill="#0F172A" />
          <rect x="38" y="24" width="6" height="6" rx="1" fill="#0F172A" />

          <rect x="8" y="38" width="6" height="6" rx="1" fill="#0F172A" />
          <rect x="18" y="46" width="6" height="6" rx="1" fill="#0F172A" />
          <rect x="26" y="38" width="6" height="6" rx="1" fill="#0F172A" />

          <rect x="68" y="38" width="6" height="6" rx="1" fill="#0F172A" />
          <rect x="78" y="46" width="6" height="6" rx="1" fill="#0F172A" />
          <rect x="86" y="38" width="6" height="6" rx="1" fill="#0F172A" />

          <rect x="38" y="68" width="6" height="6" rx="1" fill="#0F172A" />
          <rect x="48" y="78" width="6" height="6" rx="1" fill="#0F172A" />
          <rect x="56" y="86" width="6" height="6" rx="1" fill="#0F172A" />
          <rect x="78" y="68" width="6" height="6" rx="1" fill="#0F172A" />
          <rect x="86" y="78" width="6" height="6" rx="1" fill="#0F172A" />

          {/* Center GOJO Brand Node */}
          <rect x="38" y="38" width="24" height="24" rx="6" fill="#059669" />
          <text x="50" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif">
            G
          </text>
        </svg>

        {/* Scan Feedback Overlay */}
        {scanned && (
          <div className="absolute inset-0 bg-emerald-950/90 rounded-2xl flex flex-col items-center justify-center p-2 text-emerald-200 animate-fade-in">
            <Check className="w-8 h-8 text-emerald-400 mb-1" />
            <span className="text-[10px] font-bold text-white">Access Granted!</span>
            <span className="text-[8px] text-emerald-300">Opening GojoMe</span>
          </div>
        )}
      </div>

      {/* Copy & CTA */}
      <div className="mt-3">
        <h4 className="text-xs font-bold text-white flex items-center justify-center gap-1">
          <span>Scan & Unlock</span>
        </h4>
        <div className="text-sm font-black font-heading tracking-tight bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
          GojoMe
        </div>

        <button
          onClick={handleSimulateScan}
          className="mt-2.5 w-full py-1.5 px-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-[10.5px] font-bold shadow-md flex items-center justify-center gap-1 transition-all"
        >
          <Sparkles className="w-3 h-3" />
          <span>Free Access for Consumers</span>
        </button>
      </div>
    </div>
  );
}
