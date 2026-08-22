'use client';

import React from 'react';

import { Button as ShadcnButton, buttonVariants } from '@/components/ui/button';

export interface ButtonProps extends Omit<React.ComponentProps<typeof ShadcnButton>, 'variant' | 'size'> {
  variant?: 'default' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'accent' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => (
    <ShadcnButton
      className={className}
      variant={variant === 'primary' ? 'default' : variant === 'accent' ? 'secondary' : variant}
      size={size === 'md' ? 'default' : size}
      disabled={isLoading || disabled}
      aria-busy={isLoading || undefined}
      ref={ref}
      {...props}
    >
      {isLoading && (
        <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </ShadcnButton>
  )
);
Button.displayName = 'Button';

export { Button, buttonVariants };
