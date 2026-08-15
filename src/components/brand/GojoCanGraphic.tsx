'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface GojoCanGraphicProps {
  flavour?: 'vanilla' | 'chocolate' | 'coffee';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function GojoCanGraphic({
  flavour = 'vanilla',
  className,
  size = 'md',
}: GojoCanGraphicProps) {
  const flavourThemes = {
    vanilla: {
      gradientTop: '#F59E0B',
      gradientMid: '#D97706',
      gradientBot: '#B45309',
      canBody: 'from-amber-400 via-amber-600 to-amber-800',
      badgeBg: '#F59E0B',
      badgeTextColor: '#451A03',
      flavourLabel: 'VANILLA',
      glow: 'rgba(217, 119, 6, 0.4)',
    },
    chocolate: {
      gradientTop: '#78350F',
      gradientMid: '#5A2609',
      gradientBot: '#381704',
      canBody: 'from-amber-700 via-amber-900 to-stone-950',
      badgeBg: '#92400E',
      badgeTextColor: '#FEF3C7',
      flavourLabel: 'CHOCOLATE',
      glow: 'rgba(120, 53, 15, 0.45)',
    },
    coffee: {
      gradientTop: '#92400E',
      gradientMid: '#682F0B',
      gradientBot: '#451A03',
      canBody: 'from-yellow-700 via-yellow-900 to-stone-900',
      badgeBg: '#78350F',
      badgeTextColor: '#FEF3C7',
      flavourLabel: 'COFFEE',
      glow: 'rgba(146, 64, 14, 0.45)',
    },
  };

  const current = flavourThemes[flavour];

  const dimensions = {
    sm: { width: 140, height: 260 },
    md: { width: 190, height: 360 },
    lg: { width: 230, height: 430 },
  };

  const { width, height } = dimensions[size];

  return (
    <div
      className={cn('relative inline-flex items-center justify-center select-none group', className)}
      style={{ filter: `drop-shadow(0 20px 30px ${current.glow})` }}
    >
      {/* 3D Rendered Vector Can */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1"
      >
        <defs>
          <linearGradient id={`canShine-${flavour}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="15%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="70%" stopColor="#000000" stopOpacity="0.2" />
            <stop offset="90%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id={`canBodyGrad-${flavour}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={current.gradientTop} />
            <stop offset="50%" stopColor={current.gradientMid} />
            <stop offset="100%" stopColor={current.gradientBot} />
          </linearGradient>

          <linearGradient id="rimMetal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="25%" stopColor="#F1F5F9" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="75%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
        </defs>

        {/* Can Top Rim Metal */}
        <rect x="28" y="12" width="144" height="12" rx="6" fill="url(#rimMetal)" />
        <rect x="36" y="20" width="128" height="8" rx="4" fill="#64748B" />

        {/* Can Neck Inset */}
        <path d="M 36 28 L 24 45 L 176 45 L 164 28 Z" fill="url(#canBodyGrad-vanilla)" opacity="0.9" />

        {/* Can Main Cylindrical Body */}
        <rect x="20" y="45" width="160" height="290" rx="14" fill={`url(#canBodyGrad-${flavour})`} />

        {/* Metallic Specular Highlight Overlay */}
        <rect x="20" y="45" width="160" height="290" rx="14" fill={`url(#canShine-${flavour})`} mixBlendMode="overlay" />

        {/* Can Bottom Rim Metal */}
        <path d="M 24 330 L 36 355 L 164 355 L 176 330 Z" fill="#64748B" />
        <rect x="32" y="352" width="136" height="14" rx="7" fill="url(#rimMetal)" />

        {/* ---------------- CAN GRAPHICS & LABELS ---------------- */}

        {/* Top Logo Insignia */}
        <circle cx="100" cy="85" r="15" fill="#FFFFFF" opacity="0.95" />
        <path
          d="M 100 74 C 94 77 92 83 95 89 C 97 85 101 82 106 80 C 105 77 103 74 100 74 Z"
          fill="#10B981"
        />
        <text x="100" y="112" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" letterSpacing="2">
          GOJO
        </text>
        <text x="100" y="123" textAnchor="middle" fill="#FFFFFF" opacity="0.85" fontSize="6.5" fontWeight="700" letterSpacing="1.5">
          NUTRITION
        </text>

        {/* Product Name Title */}
        <line x1="45" y1="138" x2="155" y2="138" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <text x="100" y="152" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="600" letterSpacing="2.5" fontStyle="italic">
          — THE —
        </text>
        <text x="100" y="172" textAnchor="middle" fill="#FFFFFF" fontSize="13.5" fontWeight="900" letterSpacing="1.2">
          MAHARAJA&apos;S
        </text>
        <text x="100" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="13.5" fontWeight="900" letterSpacing="1.5">
          DRINK
        </text>
        <line x1="45" y1="198" x2="155" y2="198" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />

        {/* Flavour Pill Badge */}
        <rect x="52" y="206" width="96" height="19" rx="9.5" fill={current.badgeBg} />
        <text
          x="100"
          y="219"
          textAnchor="middle"
          fill={current.badgeTextColor}
          fontSize="8.5"
          fontWeight="800"
          letterSpacing="1.8"
        >
          {current.flavourLabel}
        </text>

        {/* Sub-label */}
        <text x="100" y="238" textAnchor="middle" fill="#FFFFFF" opacity="0.85" fontSize="6" fontWeight="700" letterSpacing="1.2">
          NUTRITIONAL BEVERAGE
        </text>

        {/* 3 Nutrition Micro-Badges */}
        {/* Badge 1: Rich in Protein */}
        <circle cx="56" cy="265" r="11" fill="#FFFFFF" opacity="0.15" />
        <text x="56" y="263" textAnchor="middle" fill="#FFFFFF" fontSize="4.5" fontWeight="800">RICH IN</text>
        <text x="56" y="269" textAnchor="middle" fill="#FFFFFF" fontSize="4.5" fontWeight="800">PROTEIN</text>

        {/* Badge 2: Rich in Calcium */}
        <circle cx="100" cy="265" r="11" fill="#FFFFFF" opacity="0.15" />
        <text x="100" y="263" textAnchor="middle" fill="#FFFFFF" fontSize="4.5" fontWeight="800">RICH IN</text>
        <text x="100" y="269" textAnchor="middle" fill="#FFFFFF" fontSize="4.5" fontWeight="800">CALCIUM</text>

        {/* Badge 3: Millet Goodness */}
        <circle cx="144" cy="265" r="11" fill="#FFFFFF" opacity="0.15" />
        <text x="144" y="263" textAnchor="middle" fill="#FFFFFF" fontSize="4.5" fontWeight="800">MILLET</text>
        <text x="144" y="269" textAnchor="middle" fill="#FFFFFF" fontSize="4.5" fontWeight="800">GOODNESS</text>

        {/* Volume Metric */}
        <text x="100" y="305" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" letterSpacing="0.8">
          200 ml
        </text>

        {/* Subtle royal crown watermark */}
        <path
          d="M 88 316 L 94 322 L 100 314 L 106 322 L 112 316 L 110 326 L 90 326 Z"
          fill="#FFFFFF"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
