'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'bioheed' | 'maharaja' | 'gojome';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      external,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'px-3.5 py-1.5 text-xs font-medium rounded-lg gap-1.5',
      md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
      lg: 'px-7 py-3.5 text-base font-semibold rounded-xl gap-2.5',
    };

    const variantClasses = {
      primary:
        'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-900/30 hover:from-emerald-400 hover:to-teal-500 hover:shadow-emerald-700/40 border border-emerald-400/20',
      secondary:
        'bg-slate-800/80 hover:bg-slate-700 text-slate-100 border border-slate-700/60 shadow-sm hover:border-slate-600',
      outline:
        'bg-transparent border border-slate-700 text-slate-200 hover:border-emerald-500/60 hover:text-emerald-400 hover:bg-emerald-950/20',
      ghost:
        'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/50',
      bioheed:
        'bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-400/30 shadow-lg shadow-emerald-950/50',
      maharaja:
        'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold border border-amber-300/40 shadow-lg shadow-amber-950/50',
      gojome:
        'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border border-purple-400/30 shadow-lg shadow-purple-950/50',
    };

    const baseClasses = cn(
      'inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
      sizeClasses[size],
      variantClasses[variant],
      className
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClasses}
          >
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </a>
        );
      }

      return (
        <Link href={href} className={baseClasses}>
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={props.type || 'button'}
        disabled={disabled}
        className={baseClasses}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
