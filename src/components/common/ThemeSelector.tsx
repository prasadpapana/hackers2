'use client';

import React from 'react';
import { Check, Palette } from 'lucide-react';
import { themeOptions, type ThemeName } from '@/lib/themes';
import { useAppStore } from '@/lib/store';
import { useTranslations } from '@/lib/i18n';

export function ThemeSelector() {
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);
  const t = useTranslations();
  const [open, setOpen] = React.useState(false);

  return (
    <div id="theme" className="relative">
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-haspopup="listbox" className="flex min-h-10 items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <Palette className="h-4 w-4" aria-hidden="true" />
        <span>{t('theme')}</span>
      </button>
      {open && (
        <div role="listbox" aria-label={t('theme')} className="absolute right-0 z-50 mt-2 w-64 rounded-lg border border-border bg-card p-1 shadow-lg">
          {themeOptions.map((option) => (
            <button key={option.value} type="button" role="option" aria-selected={theme === option.value} onClick={() => { setTheme(option.value as ThemeName); setOpen(false); }} className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-muted">
              <span className="h-4 w-4 rounded-full border border-border" style={{ backgroundColor: option.swatch }} aria-hidden="true" />
              <span className="flex-1">{t(`theme${option.value.replace(/(^|-)([a-z])/g, (_, __, letter) => letter.toUpperCase())}`)}</span>
              {theme === option.value && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
