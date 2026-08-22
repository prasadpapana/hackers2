'use client';

import React, { useEffect } from 'react';
import { useTranslations } from '@/lib/i18n';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

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

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !nextOpen && onClose()}>
      <DialogContent showCloseButton={closeButton} className={`${sizeClasses[size]} max-h-[90dvh] overflow-y-auto`}>
        <DialogHeader>
          <DialogTitle className={title ? '' : 'sr-only'}>{title ?? t('closeModal')}</DialogTitle>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
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
  return (
    <AlertDialog open={open} onOpenChange={(nextOpen) => !nextOpen && onClose()}>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>{cancelText ?? t('cancel')}</AlertDialogCancel>
          <AlertDialogAction variant={type === 'error' ? 'destructive' : 'default'} onClick={() => { onConfirm(); onClose(); }}>
            {confirmText ?? t('confirm')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
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
