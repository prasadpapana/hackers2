'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-background/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className={`relative mx-4 w-full bg-card border border-border rounded-lg shadow-lg ${sizeClasses[size]} max-h-[90vh] overflow-y-auto`}>
        {(title || closeButton) && (
          <div className="flex items-center justify-between p-6 border-b border-border">
            {title && <h2 className="text-lg font-semibold">{title}</h2>}
            {closeButton && (
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors ml-auto"
                aria-label="Close modal"
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
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  type = 'info',
}: AlertProps) {
  const typeClasses = {
    info: 'text-blue-600',
    warning: 'text-amber-600',
    error: 'text-red-600',
    success: 'text-green-600',
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
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${typeClasses[type]} bg-${type}-100 hover:bg-${type}-200`}
          >
            {confirmText}
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
    success: 'bg-green-100 text-green-800 border-green-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
  };

  return (
    <div
      className={`fixed bottom-20 right-4 z-50 max-w-[calc(100vw-2rem)] px-4 py-3 rounded-lg border ${typeClasses[type]} shadow-lg animate-in slide-in-from-bottom-4 duration-300 sm:bottom-4`}
    >
      {message}
    </div>
  );
}
