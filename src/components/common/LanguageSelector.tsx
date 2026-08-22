'use client';

import React from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { indianLanguages, type SupportedLanguage, useTranslations } from '@/lib/i18n';
import { useAppStore } from '@/lib/store';
import { Button } from './Button';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const language = useAppStore((state) => state.language);
  const setLanguage = useAppStore((state) => state.setLanguage);
  const t = useTranslations();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const filteredLanguages = indianLanguages.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  const chooseLanguage = (value: SupportedLanguage) => {
    setLanguage(value);
    setQuery('');
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={(nextOpen) => { setOpen(nextOpen); if (!nextOpen) setQuery(''); }}>
      <PopoverTrigger render={<Button variant="outline" size="sm" type="button" aria-label={compact ? t('language') : undefined} className="language-selector-trigger min-h-10" title={t('language')} />}>
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className={`${compact ? 'hidden' : 'max-w-24'} truncate text-xs font-medium sm:inline`}>{indianLanguages.find((item) => item.value === language)?.label}</span>
        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-64 overflow-hidden p-1">
        <Command>
          <CommandInput value={query} onValueChange={setQuery} placeholder={t('language')} aria-label={t('language')} />
          <CommandList aria-label={t('language')}>
            <CommandEmpty>{t('noLanguagesFound')}</CommandEmpty>
            {filteredLanguages.map((item) => (
              <CommandItem key={item.value} value={item.label} onSelect={() => chooseLanguage(item.value)} className="justify-between">
                <span>{item.label}</span>
                {language === item.value && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
