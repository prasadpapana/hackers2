'use client';

import React from 'react';
import { useTranslations } from '@/lib/i18n';
import { Badge as ShadcnBadge } from '@/components/ui/badge';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, variant = 'default', size = 'sm', ...props }, ref) => {
  const variantClasses = {
    default: 'border-primary/20 bg-primary/10 text-primary',
    success: 'border-accent/30 bg-accent/10 text-accent-foreground',
    warning: 'border-secondary/50 bg-secondary text-secondary-foreground',
    error: 'border-destructive/20 bg-destructive/10 text-destructive',
    info: 'border-primary/20 bg-primary/10 text-primary',
  };

  const sizeClasses = {
    sm: 'rounded-md px-2 py-0.5 text-xs',
    md: 'rounded-md px-3 py-1 text-sm',
  };

  return (
    <ShadcnBadge
      role="status"
      ref={ref}
      variant={variant === 'error' ? 'destructive' : variant === 'default' || variant === 'info' ? 'default' : 'secondary'}
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`}
      {...props}
    />
  );
});
Badge.displayName = 'Badge';

interface StatusBadgeProps extends Omit<BadgeProps, 'variant'> {
  status: 'active' | 'completed' | 'pending' | 'error' | 'warning' | 'review_required' | 'action_required';
}

const StatusBadge = React.forwardRef<HTMLDivElement, StatusBadgeProps>(({ status, ...props }, ref) => {
  const t = useTranslations();
  const statusMap = {
    active: 'success',
    completed: 'success',
    pending: 'info',
    error: 'error',
    warning: 'warning',
    review_required: 'warning',
    action_required: 'warning',
  } as const;

  const statusLabels = {
    active: t('statusActive'),
    completed: t('statusCompleted'),
    pending: t('statusPending'),
    error: t('statusError'),
    warning: t('statusWarning'),
    review_required: t('statusReviewRequired'),
    action_required: t('statusActionRequired'),
  };

  return (
    <Badge ref={ref} variant={statusMap[status]} {...props} aria-label={props['aria-label'] ?? statusLabels[status]}>
      {statusLabels[status]}
    </Badge>
  );
});
StatusBadge.displayName = 'StatusBadge';

export { Badge, StatusBadge };
