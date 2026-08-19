import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { COMPANY_DETAILS } from '@/data/mockData';

export interface BrandLogoProps {
  variant?: 'full' | 'icon-only' | 'light' | 'white';
  className?: string;
  imgClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  src?: string;
  alt?: string;
  showText?: boolean;
  href?: string;
}

export function BrandLogo({
  variant = 'full',
  className,
  imgClassName,
  size = 'md',
  src,
  alt = COMPANY_DETAILS.name,
  showText,
  href = '/',
}: BrandLogoProps) {
  // Size presets for icon and typography
  const sizeStyles = {
    sm: { iconSize: 34, text: 'text-base', sub: 'text-[9px]' },
    md: { iconSize: 44, text: 'text-xl', sub: 'text-[10px]' },
    lg: { iconSize: 56, text: 'text-2xl', sub: 'text-[11.5px]' },
    xl: { iconSize: 72, text: 'text-3xl', sub: 'text-[13px]' },
  };

  const currentSize = sizeStyles[size] || sizeStyles.md;
  const logoSource = src || COMPANY_DETAILS.logo || '/images/logo.png';
  const shouldRenderText = showText !== undefined ? showText : variant !== 'icon-only';

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 group focus:outline-none select-none transition-transform duration-200',
        className
      )}
      aria-label={`${COMPANY_DETAILS.name} Home`}
    >
      {/* Brand Emblem Icon: Stylized 3D G Logo with Tech Traces and Bio-Leaf */}
      <div className="relative shrink-0 flex items-center justify-center">
        <div className="relative overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_12px_rgba(2,132,199,0.35)]">
          <Image
            src={logoSource}
            alt={alt}
            width={currentSize.iconSize}
            height={currentSize.iconSize}
            className={cn(
              'object-contain rounded-full transition-all duration-300',
              imgClassName
            )}
            priority
          />
        </div>
      </div>

      {/* Brand Text Typography */}
      {shouldRenderText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={cn(
                'font-extrabold font-heading tracking-tight text-slate-950 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors',
                currentSize.text
              )}
            >
              GOJO
            </span>
          </div>
          <span
            className={cn(
              'font-semibold tracking-[0.18em] uppercase text-slate-500 dark:text-slate-400 font-heading leading-tight mt-0.5 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors',
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
