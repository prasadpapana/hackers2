'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, LogOut, Settings, Bell, Home, Sun, Moon } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { Brand } from './Brand';
import { useTranslations } from '@/lib/i18n';
import { apiClient } from '@/lib/api';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  onMenuClick?: () => void;
  showSearch?: boolean;
}

export function Navbar({ onMenuClick, showSearch = true }: NavbarProps) {
  const { user, language, theme, setTheme, sidebarOpen, setSidebarOpen } = useAppStore();
  const reset = useAppStore((state) => state.reset);
  const router = useRouter();
  const t = useTranslations();
  const [showNotifications, setShowNotifications] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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
            aria-label={t('toggleSidebar')}
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center gap-3">
            <Brand />
            <Link
              href="/"
              className="flex items-center gap-1 text-sm text-foreground hover:bg-muted px-2 py-1 rounded-lg transition-colors"
              aria-label={t('home')}
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
            aria-label={t('switchTheme')}
            title={t('switchTheme')}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <LanguageSelector />

          {/* Notifications */}
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative text-foreground hover:bg-muted p-2 rounded-lg transition-colors"
            aria-label={t('notifications')}
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
