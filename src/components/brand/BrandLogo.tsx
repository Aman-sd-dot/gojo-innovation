import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface BrandLogoProps {
  variant?: 'full' | 'icon-only' | 'light' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function BrandLogo({
  variant = 'full',
  className,
  size = 'md',
}: BrandLogoProps) {
  const sizeStyles = {
    sm: { icon: 32, text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 40, text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 48, text: 'text-2xl', sub: 'text-[11px]' },
  };

  const currentSize = sizeStyles[size];

  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-3 group focus:outline-none select-none', className)}
      aria-label="GOJO Innovation Pvt. Ltd. Home"
    >
      {/* Brand Emblem Icon: Leaf + Tech Helix G */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="gojoBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="gojoGreenGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <filter id="glowDrop" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Curved Tech Ring (Blue) */}
          <path
            d="M 68 25 C 58 15 40 16 28 26 C 16 36 14 55 24 68 C 30 76 40 82 52 82 C 66 82 78 72 82 58 L 52 58 L 52 46 L 94 46 C 96 68 82 92 52 92 C 28 92 10 74 6 50 C 2 26 22 4 48 4 C 64 4 78 12 86 24 L 68 25 Z"
            fill="url(#gojoBlueGrad)"
          />

          {/* Inner Bio-Leaf Emblem (Green) */}
          <path
            d="M 50 18 C 30 28 26 48 38 65 C 44 52 56 42 70 38 C 76 36 82 36 86 36 C 84 28 72 18 50 18 Z"
            fill="url(#gojoGreenGrad)"
          />

          {/* Core Science Node */}
          <circle cx="50" cy="50" r="4" fill="#FFFFFF" opacity="0.9" />
        </svg>
      </div>

      {/* Brand Text Typography */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={cn(
                'font-extrabold font-heading tracking-tight text-white group-hover:text-emerald-400 transition-colors',
                currentSize.text
              )}
            >
              GOJO
            </span>
          </div>
          <span
            className={cn(
              'font-semibold tracking-[0.18em] uppercase text-slate-400 font-heading leading-tight mt-0.5',
              currentSize.sub
            )}
          >
            Innovation Pvt. Ltd.
          </span>
        </div>
      )}
    </Link>
  );
}
