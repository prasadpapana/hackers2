'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, LogOut, Settings, Bell, Globe, Home, Sun, Moon } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { Button } from './Button';
import { useTranslations } from '@/lib/i18n';
import { apiClient } from '@/lib/api';

interface NavbarProps {
  onMenuClick?: () => void;
  showSearch?: boolean;
}

export function Navbar({ onMenuClick, showSearch = true }: NavbarProps) {
  const { user, language, setLanguage, theme, setTheme, sidebarOpen, setSidebarOpen } = useAppStore();
  const reset = useAppStore((state) => state.reset);
  const router = useRouter();
  const t = useTranslations();
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleLanguageChange = (lang: 'en' | 'te' | 'hi') => {
    setLanguage(lang);
    setShowLanguageMenu(false);
  };

  const handleLogout = async () => {
    try {
      await apiClient.logout();
    } finally {
      localStorage.removeItem('authToken');
      reset();
      router.push('/login');
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-foreground hover:bg-muted p-2 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center gap-3">
            <Link href="/" className="font-semibold text-lg text-primary">
              CivicGuide AI
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1 text-sm text-foreground hover:bg-muted px-2 py-1 rounded-lg transition-colors"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">{t('home')}</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-foreground hover:bg-muted p-2 rounded-lg transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu((current) => !current)}
              aria-expanded={showLanguageMenu}
              aria-haspopup="menu"
              className="flex items-center gap-2 text-foreground hover:bg-muted p-2 rounded-lg transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium uppercase">{language}</span>
            </button>
            {showLanguageMenu && <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-lg" role="menu">
              {(['en', 'te', 'hi'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    language === lang ? 'bg-primary/10 text-primary font-medium' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {lang === 'en' ? 'English' : lang === 'te' ? 'తెలుగు' : 'हिन्दी'}
                </button>
              ))}
            </div>}
          </div>

          {/* Notifications */}
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative text-foreground hover:bg-muted p-2 rounded-lg transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
          </button>

          {/* User Menu */}
          {user && (
            <div className="relative group">
              <div className="flex items-center gap-2 text-foreground hover:bg-muted p-2 rounded-lg transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">{user.name.charAt(0).toUpperCase()}</span>
                </div>
                <span className="text-sm font-medium hidden sm:inline">{user.name}</span>
              </div>
              <div className="absolute right-0 mt-2 w-40 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/settings"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted first:rounded-t-lg"
                >
                  <Settings className="w-4 h-4" />
                  {t('settings')}
                </Link>
                <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted last:rounded-b-lg">
                  <LogOut className="w-4 h-4" />
                  {t('logout')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
