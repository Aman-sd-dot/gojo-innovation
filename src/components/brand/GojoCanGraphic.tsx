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
      gradientTop: '#E6D3C2',
      gradientMid: '#DEC7B9',
      gradientBot: '#D6BAA3',
      rimGrad: 'url(#goldRimMetal)',
      rimInner: '#8C5412',
      textColor: '#241812',
      textSubtle: '#3A281E',
      textMuted: '#5C4033',
      badgeBg: '#D99427',
      badgeBorder: '#A86C1D',
      badgeTextColor: '#241812',
      crestOutline: '#B87B2E',
      dividerColor: '#B87B2E',
      microBadgeBg: 'rgba(255, 255, 255, 0.45)',
      microBadgeBorder: '#B87B2E',
      flavourLabel: 'VANILLA',
      glow: 'rgba(197, 145, 59, 0.45)',
    },
    chocolate: {
      gradientTop: '#78350F',
      gradientMid: '#5A2609',
      gradientBot: '#381704',
      rimGrad: 'url(#rimMetal)',
      rimInner: '#64748B',
      textColor: '#FFFFFF',
      textSubtle: '#FEF3C7',
      textMuted: '#FDE68A',
      badgeBg: '#92400E',
      badgeBorder: '#78350F',
      badgeTextColor: '#FEF3C7',
      crestOutline: 'url(#rimMetal)',
      dividerColor: '#FFFFFF',
      microBadgeBg: '#FFFFFF',
      microBadgeBorder: '#FFFFFF',
      flavourLabel: 'CHOCOLATE',
      glow: 'rgba(120, 53, 15, 0.45)',
    },
    coffee: {
      gradientTop: '#92400E',
      gradientMid: '#682F0B',
      gradientBot: '#451A03',
      rimGrad: 'url(#rimMetal)',
      rimInner: '#64748B',
      textColor: '#FFFFFF',
      textSubtle: '#FEF3C7',
      textMuted: '#FDE68A',
      badgeBg: '#78350F',
      badgeBorder: '#92400E',
      badgeTextColor: '#FEF3C7',
      crestOutline: 'url(#rimMetal)',
      dividerColor: '#FFFFFF',
      microBadgeBg: '#FFFFFF',
      microBadgeBorder: '#FFFFFF',
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

  // If vanilla flavour, render the user's authentic high-res bottle photo directly
  if (flavour === 'vanilla') {
    return (
      <div
        className={cn('relative inline-flex items-center justify-center select-none group', className)}
        style={{ filter: `drop-shadow(0 25px 35px ${current.glow})` }}
      >
        <img
          src="/images/gojo_vanilla_can_real.png"
          alt="GOJO Maharaja's Drink Vanilla"
          width={width}
          height={height}
          style={{ width: `${width}px`, height: 'auto', maxHeight: `${height}px` }}
          className="object-contain transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 drop-shadow-2xl"
        />
      </div>
    );
  }

  return (
    <div
      className={cn('relative inline-flex items-center justify-center select-none group', className)}
      style={{ filter: `drop-shadow(0 20px 30px ${current.glow})` }}
    >
      {/* 3D Rendered Vector Can for Chocolate & Coffee */}
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
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="18%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="70%" stopColor="#000000" stopOpacity="0.12" />
            <stop offset="90%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
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

          <clipPath id="canLogoClip">
            <circle cx="100" cy="85" r="16" />
          </clipPath>
        </defs>

        {/* Can Top Rim Metal */}
        <rect x="28" y="12" width="144" height="12" rx="6" fill={current.rimGrad} />
        <rect x="36" y="20" width="128" height="8" rx="4" fill={current.rimInner} />

        {/* Can Neck Inset */}
        <path d="M 36 28 L 24 45 L 176 45 L 164 28 Z" fill={`url(#canBodyGrad-${flavour})`} opacity="0.95" />

        {/* Can Main Cylindrical Body */}
        <rect x="20" y="45" width="160" height="290" rx="14" fill={`url(#canBodyGrad-${flavour})`} />

        {/* Metallic Specular Highlight Overlay */}
        <rect x="20" y="45" width="160" height="290" rx="14" fill={`url(#canShine-${flavour})`} style={{ mixBlendMode: 'overlay' }} />

        {/* Can Bottom Rim Metal */}
        <path d="M 24 330 L 36 355 L 164 355 L 176 330 Z" fill={current.rimInner} />
        <rect x="32" y="352" width="136" height="14" rx="7" fill={current.rimGrad} />

        {/* ---------------- CAN GRAPHICS & LABELS ---------------- */}

        {/* Top Logo Insignia: Circular Emblem */}
        <g id="can-circular-logo">
          {/* Base Ring */}
          <circle cx="100" cy="85" r="17" fill="#FFFFFF" opacity="0.95" />
          <circle cx="100" cy="85" r="16" fill="#080C14" />
          
          {/* Circular Clipped Logo Image */}
          <image
            href="/images/logo.png"
            x="84"
            y="69"
            width="32"
            height="32"
            clipPath="url(#canLogoClip)"
            preserveAspectRatio="xMidYMid slice"
          />

          <circle cx="100" cy="85" r="16.5" stroke={current.crestOutline} strokeWidth="1.5" fill="none" opacity="0.9" />
        </g>

        {/* Main Text ("GOJO") */}
        <text x="100" y="112" textAnchor="middle" fill={current.textColor} fontSize="11" fontWeight="800" letterSpacing="2">
          GOJO
        </text>
        <text x="100" y="123" textAnchor="middle" fill={current.textSubtle} fontSize="6.5" fontWeight="700" letterSpacing="1.5">
          NUTRITION
        </text>

        {/* Product Name Title */}
        <line x1="45" y1="138" x2="155" y2="138" stroke={current.dividerColor} strokeWidth="1" opacity="0.8" />
        <text x="100" y="152" textAnchor="middle" fill={current.textMuted} fontSize="7" fontWeight="600" letterSpacing="2.5" fontStyle="italic">
          — THE —
        </text>

        <text x="100" y="172" textAnchor="middle" fill={current.textColor} fontSize="13.5" fontWeight="900" letterSpacing="1.2">
          MAHARAJA&apos;S
        </text>
        <text x="100" y="190" textAnchor="middle" fill={current.textColor} fontSize="13.5" fontWeight="900" letterSpacing="1.5">
          DRINK
        </text>
        <line x1="45" y1="198" x2="155" y2="198" stroke={current.dividerColor} strokeWidth="1" opacity="0.8" />

        {/* Flavour Pill Label */}
        <rect
          x="52"
          y="206"
          width="96"
          height="19"
          rx="9.5"
          fill={current.badgeBg}
          stroke={current.badgeBorder}
          strokeWidth="1"
        />
        <text
          x="100"
          y="219"
          textAnchor="middle"
          fill={current.badgeTextColor}
          fontSize="8.5"
          fontWeight="900"
          letterSpacing="1.8"
        >
          {current.flavourLabel}
        </text>

        {/* Sub-label */}
        <text x="100" y="238" textAnchor="middle" fill={current.textSubtle} fontSize="6" fontWeight="700" letterSpacing="1.2">
          NUTRITIONAL BEVERAGE
        </text>

        {/* 3 Nutrition Micro-Badges */}
        <circle cx="56" cy="265" r="11" fill={current.microBadgeBg} stroke={current.microBadgeBorder} strokeWidth="0.8" opacity="0.95" />
        <text x="56" y="263" textAnchor="middle" fill={current.textColor} fontSize="4.5" fontWeight="800">RICH IN</text>
        <text x="56" y="269" textAnchor="middle" fill={current.textColor} fontSize="4.5" fontWeight="800">PROTEIN</text>

        <circle cx="100" cy="265" r="11" fill={current.microBadgeBg} stroke={current.microBadgeBorder} strokeWidth="0.8" opacity="0.95" />
        <text x="100" y="263" textAnchor="middle" fill={current.textColor} fontSize="4.5" fontWeight="800">RICH IN</text>
        <text x="100" y="269" textAnchor="middle" fill={current.textColor} fontSize="4.5" fontWeight="800">CALCIUM</text>

        <circle cx="144" cy="265" r="11" fill={current.microBadgeBg} stroke={current.microBadgeBorder} strokeWidth="0.8" opacity="0.95" />
        <text x="144" y="263" textAnchor="middle" fill={current.textColor} fontSize="4.5" fontWeight="800">MILLET</text>
        <text x="144" y="269" textAnchor="middle" fill={current.textColor} fontSize="4.5" fontWeight="800">GOODNESS</text>

        {/* Volume Metric */}
        <text x="100" y="305" textAnchor="middle" fill={current.textColor} fontSize="11" fontWeight="800" letterSpacing="0.8">
          200 ml
        </text>
      </svg>
    </div>
  );
}
