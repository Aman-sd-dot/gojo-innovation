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
    sm: { iconSize: 28, text: 'text-sm', sub: 'text-[10px]' },
    md: { iconSize: 36, text: 'text-lg', sub: 'text-xs' },
    lg: { iconSize: 48, text: 'text-xl', sub: 'text-[13px]' },
    xl: { iconSize: 60, text: 'text-2xl', sub: 'text-[15px]' },
  };

  const currentSize = sizeStyles[size] || sizeStyles.md;
  const logoSource = src || COMPANY_DETAILS.logo || '/images/logo.png';
  const shouldRenderText = showText !== undefined ? showText : variant !== 'icon-only';

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2.5 group focus:outline-none select-none transition-transform duration-200',
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
              'font-semibold tracking-[0.12em] uppercase text-slate-400 dark:text-slate-300 font-heading leading-tight mt-0.5 group-hover:text-slate-600 dark:group-hover:text-white transition-colors',
              currentSize.sub
            )}
          >
            Innovation Pvt. Ltd
          </span>
        </div>
      )}
    </Link>
  );
}
