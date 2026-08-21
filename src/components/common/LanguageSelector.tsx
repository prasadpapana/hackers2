'use client';

import React from 'react';
import { Check, ChevronDown, Globe, Search } from 'lucide-react';
import { indianLanguages, type SupportedLanguage, useTranslations } from '@/lib/i18n';
import { useAppStore } from '@/lib/store';

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
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={compact ? t('language') : undefined}
        className="language-selector-trigger flex min-h-10 items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent/40"
        title={t('language')}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className={`${compact ? 'hidden' : 'max-w-24'} truncate text-xs font-medium sm:inline`}>{indianLanguages.find((item) => item.value === language)?.label}</span>
        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-xl border border-border bg-card shadow-lg" role="listbox" aria-label={t('language')}>
          <div className="border-b border-border p-2">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('language')} className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none" aria-label={t('language')} autoFocus />
            </div>
          </div>
          <div className="max-h-72 overflow-y-auto p-1">
            {filteredLanguages.map((item) => (
              <button key={item.value} type="button" role="option" aria-selected={language === item.value} onClick={() => chooseLanguage(item.value)} className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-start text-sm text-foreground hover:bg-muted">
                <span>{item.label}</span>
                {language === item.value && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
              </button>
            ))}
            {filteredLanguages.length === 0 && <p className="px-3 py-4 text-sm text-muted-foreground">{t('noLanguagesFound')}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
