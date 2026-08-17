import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export interface PageHeaderProps {
  badge?: string;
  badgeVariant?: 'emerald' | 'amber' | 'purple' | 'cyan' | 'slate' | 'rd';
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function PageHeader({
  badge,
  badgeVariant = 'emerald',
  title,
  subtitle,
  centered = true,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl space-y-4 mb-12 sm:mb-16',
        centered ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <div className={cn('flex', centered && 'justify-center')}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-slate-950 dark:text-white leading-[1.15]">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
