'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useTranslations } from '@/lib/i18n';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  closeButton?: boolean;
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

export function Modal({ open, onClose, title, children, size = 'md', closeButton = true }: ModalProps) {
  const t = useTranslations();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby={title ? 'modal-title' : undefined}>
      <button type="button" className="fixed inset-0 cursor-default bg-background/80 backdrop-blur-sm" onClick={onClose} aria-label={t('cancel')} />
      <div className={`relative w-full rounded-lg border border-border bg-card shadow-lg ${sizeClasses[size]} max-h-[90dvh] overflow-y-auto`}>
        {(title || closeButton) && (
          <div className="flex items-center justify-between p-6 border-b border-border">
            {title && <h2 id="modal-title" className="text-lg font-semibold">{title}</h2>}
            {closeButton && (
              <button
                onClick={onClose}
                type="button"
                className="ml-auto rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={t('closeModal')}
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

interface AlertProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  type?: 'info' | 'warning' | 'error' | 'success';
}

export function Alert({
  open,
  onClose,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  type = 'info',
}: AlertProps) {
  const t = useTranslations();
  const typeClasses = {
    info: 'border-primary/20 bg-primary text-primary-foreground hover:bg-primary/90',
    warning: 'border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80',
    error: 'border-destructive/20 bg-destructive text-destructive-foreground hover:bg-destructive/90',
    success: 'border-accent bg-accent text-accent-foreground hover:bg-accent/90',
  };

  return (
    <Modal open={open} onClose={onClose} title={title} size="sm" closeButton={false}>
      <div className="space-y-4">
        <p className="text-foreground">{message}</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-foreground bg-muted hover:bg-muted/80 rounded-md transition-colors"
          >
            {cancelText ?? t('cancel')}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${typeClasses[type]}`}
          >
            {confirmText ?? t('confirm')}
          </button>
        </div>
      </div>
    </Modal>
  );
}

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

export function Toast({ message, type = 'info', onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const typeClasses = {
    success: 'bg-accent/10 text-accent-foreground border-accent/30',
    error: 'bg-destructive/10 text-destructive border-destructive/30',
    info: 'bg-primary/10 text-primary border-primary/30',
  };

  return (
    <div
      className={`fixed bottom-20 right-4 z-50 max-w-[calc(100vw-2rem)] px-4 py-3 rounded-lg border ${typeClasses[type]} shadow-lg animate-in slide-in-from-bottom-4 duration-300 sm:bottom-4`}
    >
      {message}
    </div>
  );
}
