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
      gradientTop: '#F2EBCE',
      gradientMid: '#EADBB9',
      gradientBot: '#DFCFAD',
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
      glow: 'rgba(242, 235, 206, 0.55)',
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

  const flavourImages: Record<string, { src: string; alt: string; glow: string }> = {
    vanilla: {
      src: '/images/gojo_vanilla_can_real.png',
      alt: "GOJO Maharaja's Drink - Vanilla",
      glow: 'rgba(242, 235, 206, 0.4)',
    },
    chocolate: {
      src: '/images/gojo_chocolate_can_real.png',
      alt: "GOJO Maharaja's Drink - Chocolate",
      glow: 'rgba(146, 64, 14, 0.45)',
    },
    coffee: {
      src: '/images/gojo_coffee_can_real.png',
      alt: "GOJO Maharaja's Drink - Coffee",
      glow: 'rgba(180, 83, 9, 0.45)',
    },
  };

  const activeImage = flavourImages[flavour] || flavourImages.vanilla;

  return (
    <div
      className={cn('relative inline-flex items-center justify-center select-none group', className)}
      style={{ filter: `drop-shadow(0 15px 25px ${activeImage.glow})` }}
    >
      {/* Background Soft Glow Aura */}
      <div
        className="absolute w-40 h-72 rounded-full blur-2xl pointer-events-none transition-all duration-500 opacity-60"
        style={{ backgroundColor: activeImage.glow }}
      />

      <img
        key={flavour}
        src={activeImage.src}
        alt={activeImage.alt}
        width={width}
        height={height}
        style={{ width: `${width}px`, height: 'auto', maxHeight: `${height}px` }}
        className="relative z-10 object-contain transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1 drop-shadow-2xl"
      />
    </div>
  );
}
