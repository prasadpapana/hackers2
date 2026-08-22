'use client';

import React from 'react';
import { Separator as ShadcnSeparator } from '@/components/ui/separator';
import { Progress as ShadcnProgress } from '@/components/ui/progress';
import { Skeleton as ShadcnSkeleton } from '@/components/ui/skeleton';

export const Separator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { orientation?: 'horizontal' | 'vertical' }>(
  ({ className, orientation = 'horizontal', ...props }, ref) => (
    <ShadcnSeparator ref={ref} orientation={orientation} className={className} {...props} />
  )
);
Separator.displayName = 'Separator';

export const Progress = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value?: number }>(
  ({ className, value = 0, ...props }, ref) => (
    <ShadcnProgress ref={ref} value={Math.min(100, Math.max(0, value))} className={className} {...props} />
  )
);
Progress.displayName = 'Progress';

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <ShadcnSkeleton className={className} {...props} />;
}