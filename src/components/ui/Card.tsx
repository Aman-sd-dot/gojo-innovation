import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid' | 'bordered' | 'bioheed' | 'maharaja' | 'gojome';
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = 'glass',
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  const variantClasses = {
    glass: 'glass-panel text-slate-100',
    solid: 'bg-slate-900/90 border border-slate-800 text-slate-100',
    bordered: 'bg-slate-950/60 border border-slate-700/80 text-slate-100',
    bioheed: 'bg-slate-900/80 border border-emerald-500/20 hover:border-emerald-500/50 shadow-emerald-950/20',
    maharaja: 'bg-slate-900/80 border border-amber-500/20 hover:border-amber-500/50 shadow-amber-950/20',
    gojome: 'bg-slate-900/80 border border-purple-500/20 hover:border-purple-500/50 shadow-purple-950/20',
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-6 relative overflow-hidden transition-all duration-300',
        variantClasses[variant],
        hoverEffect && 'glass-card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
