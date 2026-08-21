'use client';

import React from 'react';

export const Separator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { orientation?: 'horizontal' | 'vertical' }>(
  ({ className, orientation = 'horizontal', ...props }, ref) => (
    <div ref={ref} role="separator" aria-orientation={orientation} className={`${orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full'} shrink-0 bg-border ${className || ''}`} {...props} />
  )
);
Separator.displayName = 'Separator';

export const Progress = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value?: number }>(
  ({ className, value = 0, ...props }, ref) => (
    <div ref={ref} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value} className={`h-2 w-full overflow-hidden rounded-full bg-muted ${className || ''}`} {...props}>
      <div className="h-full bg-primary transition-[width]" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  )
);
Progress.displayName = 'Progress';

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div aria-hidden="true" className={`animate-pulse rounded-md bg-muted ${className || ''}`} {...props} />;
}