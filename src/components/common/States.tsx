'use client';

import React from 'react';
import { AlertCircle, CheckCircle, Inbox } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
  fullScreen?: boolean;
}

export function LoadingState({ message = 'Loading...', fullScreen = false }: LoadingStateProps) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
        <div className="absolute inset-0 rounded-full border-2 border-primary border-t-primary/20 animate-spin"></div>
      </div>
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
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <AlertCircle className="w-12 h-12 text-destructive" />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{message}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-md transition-colors"
        >
          Try Again
        </button>
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
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      {icon || <Inbox className="w-12 h-12 text-muted-foreground" />}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{message}</p>
      </div>
      {action && (
        <button
          onClick={action.onClick}
          className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-colors"
        >
          {action.label}
        </button>
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
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <CheckCircle className="w-12 h-12 text-green-600" />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
        >
          Close
        </button>
      )}
    </div>
  );
}
