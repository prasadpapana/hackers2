'use client';

import { useEffect } from 'react';
import { languageFontFamilies, rtlLanguages } from '@/lib/i18n';
import { useAppStore } from '@/lib/store';
import { darkThemes } from '@/lib/themes';

export function LanguageRuntime() {
  const language = useAppStore((state) => state.language);
  const theme = useAppStore((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = rtlLanguages.includes(language) ? 'rtl' : 'ltr';
    root.dataset.language = language;
    root.style.setProperty('--app-font-family', languageFontFamilies[language]);
    const applyColorScheme = () => {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = darkThemes.includes(theme) || (theme === 'system' && systemDark);
      root.classList.toggle('dark', isDark);
    };

    root.dataset.theme = theme;
    applyColorScheme();
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', applyColorScheme);
    return () => media.removeEventListener('change', applyColorScheme);
  }, [language, theme]);

  return null;
}