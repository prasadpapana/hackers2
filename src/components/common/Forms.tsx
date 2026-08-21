'use client';

import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className, required, children, ...props }, ref) => (
  <label ref={ref} className={`text-sm font-medium leading-none text-foreground ${className || ''}`} {...props}>
    {children}{required && <span className="ml-1 text-destructive" aria-hidden="true">*</span>}
  </label>
));
Label.displayName = 'Label';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, ...props }, ref) => (
    <div className="w-full">
      {label && <Label htmlFor={props.id} required={props.required} className="mb-2 block">{label}</Label>}
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
      {label && <Label htmlFor={props.id} required={props.required} className="mb-2 block">{label}</Label>}
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
      {label && <Label htmlFor={props.id} required={props.required} className="mb-2 block">{label}</Label>}
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

export { Input, Textarea, Select, Label };
