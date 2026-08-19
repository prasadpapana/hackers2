'use client';

import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, variant = 'default', size = 'sm', ...props }, ref) => {
  const variantClasses = {
    default: 'bg-primary/10 text-primary border border-primary/20',
    success: 'bg-green-100 text-green-800 border border-green-200',
    warning: 'bg-amber-100 text-amber-800 border border-amber-200',
    error: 'bg-red-100 text-red-800 border border-red-200',
    info: 'bg-blue-100 text-blue-800 border border-blue-200',
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-1 rounded',
    md: 'text-sm px-3 py-1.5 rounded-md',
  };

  return (
    <div
      ref={ref}
      className={`inline-flex items-center font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`}
      {...props}
    />
  );
});
Badge.displayName = 'Badge';

interface StatusBadgeProps extends Omit<BadgeProps, 'variant'> {
  status: 'active' | 'completed' | 'pending' | 'error' | 'warning' | 'review_required' | 'action_required';
}

const StatusBadge = React.forwardRef<HTMLDivElement, StatusBadgeProps>(({ status, ...props }, ref) => {
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
    active: 'Active',
    completed: 'Completed',
    pending: 'Pending',
    error: 'Error',
    warning: 'Warning',
    review_required: 'Review Required',
    action_required: 'Action Required',
  };

  return (
    <Badge ref={ref} variant={statusMap[status]} {...props}>
      {statusLabels[status]}
    </Badge>
  );
});
StatusBadge.displayName = 'StatusBadge';

export { Badge, StatusBadge };
