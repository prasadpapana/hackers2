'use client';

import { useAppStore } from '@/lib/store';

export const indianLanguages = [
  { value: 'en', label: 'English' },
  { value: 'as', label: 'অসমীয়া' },
  { value: 'bn', label: 'বাংলা' },
  { value: 'brx', label: 'बड़ो' },
  { value: 'doi', label: 'डोगरी' },
  { value: 'gu', label: 'ગુજરાતી' },
  { value: 'hi', label: 'हिन्दी' },
  { value: 'kn', label: 'ಕನ್ನಡ' },
  { value: 'ks', label: 'کٲشُر' },
  { value: 'kok', label: 'कोंकणी' },
  { value: 'mai', label: 'मैथिली' },
  { value: 'ml', label: 'മലയാളം' },
  { value: 'mni', label: 'মৈতৈলোন্' },
  { value: 'mr', label: 'मराठी' },
  { value: 'ne', label: 'नेपाली' },
  { value: 'or', label: 'ଓଡ଼ିଆ' },
  { value: 'pa', label: 'ਪੰਜਾਬੀ' },
  { value: 'sa', label: 'संस्कृतम्' },
  { value: 'sat', label: 'संताली' },
  { value: 'sd', label: 'سنڌي' },
  { value: 'ta', label: 'தமிழ்' },
  { value: 'te', label: 'తెలుగు' },
  { value: 'ur', label: 'اُردُو' },
] as const;

export type SupportedLanguage = typeof indianLanguages[number]['value'];

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

const translations: Partial<Record<SupportedLanguage, Record<TranslationKey, string>>> = {
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
  return (key: TranslationKey) => (translations[language] ?? translations.en)?.[key] ?? key;
}
