'use client';

import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, ...props }, ref) => (
    <div className="w-full">
      {label && <label htmlFor={props.id} className="mb-2 block text-sm font-medium text-foreground">{label}{props.required && <span className="ml-1 text-destructive" aria-hidden="true">*</span>}</label>}
      <input
        ref={ref}
        className={`min-h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all ${
          error ? 'border-destructive focus:ring-destructive' : ''
        } ${className || ''}`}
        {...props}
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
      {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
    </div>
  )
);
Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, ...props }, ref) => (
    <div className="w-full">
      {label && <label htmlFor={props.id} className="mb-2 block text-sm font-medium text-foreground">{label}{props.required && <span className="ml-1 text-destructive" aria-hidden="true">*</span>}</label>}
      <textarea
        ref={ref}
        className={`min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all resize-y ${
          error ? 'border-destructive focus:ring-destructive' : ''
        } ${className || ''}`}
        {...props}
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
      {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
    </div>
  )
);
Textarea.displayName = 'Textarea';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options?: Array<{ value: string; label: string }>;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, hint, options = [], ...props }, ref) => (
    <div className="w-full">
      {label && <label htmlFor={props.id} className="mb-2 block text-sm font-medium text-foreground">{label}{props.required && <span className="ml-1 text-destructive" aria-hidden="true">*</span>}</label>}
      <select
        ref={ref}
        className={`min-h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all ${
          error ? 'border-destructive focus:ring-destructive' : ''
        } ${className || ''}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
      {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
    </div>
  )
);
Select.displayName = 'Select';

export { Input, Textarea, Select };
