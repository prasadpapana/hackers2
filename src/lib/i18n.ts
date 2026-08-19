'use client';

import { useAppStore } from '@/lib/store';

type TranslationKey =
  | 'home'
  | 'dashboard'
  | 'myCases'
  | 'analyzeDocument'
  | 'documents'
  | 'timeline'
  | 'settings'
  | 'help'
  | 'logout';

const translations: Record<'en' | 'te' | 'hi', Record<TranslationKey, string>> = {
  en: {
    home: 'Home',
    dashboard: 'Dashboard',
    myCases: 'My Cases',
    analyzeDocument: 'Analyze Document',
    documents: 'Documents',
    timeline: 'Timeline',
    settings: 'Settings',
    help: 'Help',
    logout: 'Logout',
  },
  te: {
    home: 'హోమ్',
    dashboard: 'డాష్‌బోర్డ్',
    myCases: 'నా కేసులు',
    analyzeDocument: 'పత్రాన్ని విశ్లేషించండి',
    documents: 'పత్రాలు',
    timeline: 'టైమ్‌లైన్',
    settings: 'సెట్టింగ్‌లు',
    help: 'సహాయం',
    logout: 'లాగ్ అవుట్',
  },
  hi: {
    home: 'होम',
    dashboard: 'डैशबोर्ड',
    myCases: 'मेरे मामले',
    analyzeDocument: 'दस्तावेज़ का विश्लेषण करें',
    documents: 'दस्तावेज़',
    timeline: 'समयरेखा',
    settings: 'सेटिंग्स',
    help: 'सहायता',
    logout: 'लॉग आउट',
  },
};

export function useTranslations() {
  const language = useAppStore((state) => state.language);
  return (key: TranslationKey) => translations[language][key];
}
