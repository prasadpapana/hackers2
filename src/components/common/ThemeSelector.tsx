'use client';

import React from 'react';
import { Check, Palette } from 'lucide-react';
import { themeOptions, type ThemeName } from '@/lib/themes';
import { useAppStore } from '@/lib/store';
import { useTranslations } from '@/lib/i18n';
import { Button } from './Button';

export function ThemeSelector() {
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);
  const t = useTranslations();
  const [open, setOpen] = React.useState(false);

  return (
    <div id="theme" className="relative">
      <Button type="button" variant="outline" size="sm" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-haspopup="listbox" className="min-h-10">
        <Palette className="h-4 w-4" aria-hidden="true" />
        <span>{t('theme')}</span>
      </Button>
      {open && (
        <div role="listbox" aria-label={t('theme')} className="absolute right-0 z-50 mt-2 w-64 rounded-lg border border-border bg-card p-1 shadow-lg">
          {themeOptions.map((option) => (
            <Button key={option.value} type="button" variant="ghost" size="sm" role="option" aria-selected={theme === option.value} onClick={() => { setTheme(option.value as ThemeName); setOpen(false); }} className="h-auto w-full justify-start gap-3 rounded-md px-3 py-2 text-left font-normal">
              <span className="h-4 w-4 rounded-full border border-border" style={{ backgroundColor: option.swatch }} aria-hidden="true" />
              <span className="flex-1">{t(`theme${option.value.replace(/(^|-)([a-z])/g, (_, __, letter) => letter.toUpperCase())}`)}</span>
              {theme === option.value && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
