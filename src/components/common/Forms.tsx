'use client';

import React from 'react';
import { Input as ShadcnInput } from '@/components/ui/input';
import { Textarea as ShadcnTextarea } from '@/components/ui/textarea';
import { Label as ShadcnLabel } from '@/components/ui/label';
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className, required, children, ...props }, ref) => (
  <ShadcnLabel ref={ref} className={className} {...props}>
    {children}{required && <span className="ml-1 text-destructive" aria-hidden="true">*</span>}
  </ShadcnLabel>
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
      <ShadcnInput
        ref={ref}
        className={`min-h-10 text-foreground ${
          error ? 'border-destructive focus:ring-destructive' : ''
        } ${className || ''}`}
        aria-invalid={error ? true : undefined}
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
      <ShadcnTextarea
        ref={ref}
        className={`min-h-24 text-foreground ${
          error ? 'border-destructive focus:ring-destructive' : ''
        } ${className || ''}`}
        aria-invalid={error ? true : undefined}
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
  ({ className, label, error, hint, options = [], value, defaultValue, onChange, ...props }, ref) => {
    void ref;
    return <div className="w-full">
      {label && <Label htmlFor={props.id} required={props.required} className="mb-2 block">{label}</Label>}
      <ShadcnSelect
        value={value as string | undefined}
        defaultValue={defaultValue as string | undefined}
        onValueChange={(nextValue) => onChange?.({ target: { value: nextValue } } as React.ChangeEvent<HTMLSelectElement>)}
        {...props}
      >
        <SelectTrigger id={props.id} aria-invalid={error ? true : undefined} className={`min-h-10 w-full text-foreground ${
          error ? 'border-destructive focus:ring-destructive' : ''
        } ${className || ''}`}
        >
          <SelectValue placeholder={options[0]?.label} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>)}
        </SelectContent>
      </ShadcnSelect>
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
      {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
    </div>;
  }
);
Select.displayName = 'Select';

export { Input, Textarea, Select, Label };
