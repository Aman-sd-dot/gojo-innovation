import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'article';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  backgroundPattern?: boolean;
}

export function SectionContainer({
  as: Component = 'section',
  containerSize = 'xl',
  backgroundPattern = false,
  className,
  children,
  ...props
}: SectionContainerProps) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn(
        'relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8',
        backgroundPattern && 'scientific-grid',
        className
      )}
      {...props}
    >
      <div className={cn('mx-auto w-full', sizeClasses[containerSize])}>
        {children}
      </div>
    </Component>
  );
}
