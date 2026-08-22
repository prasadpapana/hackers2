'use client';

import React from 'react';
import { AlertCircle, CheckCircle, Inbox, LoaderCircle } from 'lucide-react';
import { Button } from './Button';

interface LoadingStateProps {
  message?: string;
  fullScreen?: boolean;
}

export function LoadingState({ message = 'Loading...', fullScreen = false }: LoadingStateProps) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <LoaderCircle className="h-8 w-8 animate-spin text-primary" aria-hidden="true" />
      {message && <p className="text-sm text-muted-foreground">{message}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-card border border-border rounded-lg p-8 shadow-lg">{content}</div>
      </div>
    );
  }

  return content;
}

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ title = 'Something went wrong', message = 'Please try again', onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-destructive/20 bg-destructive/5 px-6 py-12">
      <AlertCircle className="h-10 w-10 text-destructive" aria-hidden="true" />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{message}</p>
      </div>
      {onRetry && (
        <Button
          onClick={onRetry}
          variant="outline"
        >
          Try Again
        </Button>
      )}
    </div>
  );
}

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({
  title = 'Nothing here yet',
  message = 'Get started by creating something new',
  icon,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-border px-6 py-12">
      {icon || <Inbox className="h-10 w-10 text-muted-foreground" aria-hidden="true" />}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{message}</p>
      </div>
      {action && (
        <Button
          onClick={action.onClick}
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}

interface SuccessStateProps {
  title?: string;
  message?: string;
  onClose?: () => void;
}

export function SuccessState({ title = 'Success!', message = 'Operation completed', onClose }: SuccessStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-accent/30 bg-accent/10 px-6 py-12">
      <CheckCircle className="h-10 w-10 text-accent-foreground" aria-hidden="true" />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{message}</p>
      </div>
      {onClose && (
        <Button
          onClick={onClose}
          variant="outline"
        >
          Close
        </Button>
      )}
    </div>
  );
}
