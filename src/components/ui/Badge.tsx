import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'emerald' | 'amber' | 'purple' | 'cyan' | 'slate' | 'outline' | 'rd';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'emerald',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    slate: 'bg-slate-800 text-slate-300 border-slate-700',
    outline: 'bg-transparent text-slate-300 border-slate-700',
    rd: 'bg-indigo-500/15 text-indigo-300 border-indigo-400/40 tracking-wider uppercase font-semibold',
  };

  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-xs rounded-full',
    md: 'px-3 py-1 text-xs font-medium rounded-full',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border font-medium transition-colors',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
