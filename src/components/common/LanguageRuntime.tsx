'use client';

import { useEffect } from 'react';
import { languageFontFamilies, rtlLanguages } from '@/lib/i18n';
import { useAppStore } from '@/lib/store';

export function LanguageRuntime() {
  const language = useAppStore((state) => state.language);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = rtlLanguages.includes(language) ? 'rtl' : 'ltr';
    root.dataset.language = language;
    root.style.setProperty('--app-font-family', languageFontFamilies[language]);
  }, [language]);

  return null;
}