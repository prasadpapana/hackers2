'use client';

import React from 'react';
import { Check, Palette } from 'lucide-react';
import { themeOptions, type ThemeName } from '@/lib/themes';
import { useAppStore } from '@/lib/store';
import { useTranslations } from '@/lib/i18n';
import { Button } from './Button';
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function ThemeSelector() {
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);
  const t = useTranslations();
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger render={<Button type="button" variant="outline" size="sm" className="min-h-10" />}>
        <Palette className="h-4 w-4" aria-hidden="true" />
        <span>{t('theme')}</span>
      </PopoverTrigger>
      <PopoverContent id="theme" align="end" className="w-64 p-1">
        <Command>
          <CommandList aria-label={t('theme')}>
            <CommandGroup>
          {themeOptions.map((option) => (
            <CommandItem key={option.value} value={option.value} onSelect={() => { setTheme(option.value as ThemeName); setOpen(false); }} className="gap-3">
              <span className="h-4 w-4 rounded-full border border-border" style={{ backgroundColor: option.swatch }} aria-hidden="true" />
              <span className="flex-1">{t(`theme${option.value.replace(/(^|-)([a-z])/g, (_, __, letter) => letter.toUpperCase())}`)}</span>
              {theme === option.value && <Check className="ml-auto h-4 w-4 text-primary" aria-hidden="true" />}
            </CommandItem>
          ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
