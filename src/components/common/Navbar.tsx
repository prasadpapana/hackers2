'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, LogOut, Settings, Bell, Home } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { Brand } from './Brand';
import { useTranslations } from '@/lib/i18n';
import { apiClient } from '@/lib/api';
import { LanguageSelector } from './LanguageSelector';
import { ThemeSelector } from './ThemeSelector';
import { Button } from './Button';

export function Navbar() {
  const { user, language, sidebarOpen, setSidebarOpen } = useAppStore();
  const reset = useAppStore((state) => state.reset);
  const router = useRouter();
  const t = useTranslations();
  const [showNotifications, setShowNotifications] = React.useState(false);

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
    <nav className="sticky top-0 z-40 border-b border-border bg-card/95 shadow-sm backdrop-blur">
      <div className="flex min-h-16 items-center justify-between gap-3 px-3 py-2 sm:px-6">
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            type="button"
            aria-label={t('toggleSidebar')}
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Brand />
            <Link
              href="/"
              className="flex items-center gap-1 rounded-md px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={t('home')}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">{t('home')}</span>
            </Link>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-4">
          <LanguageSelector compact />

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={() => setShowNotifications(!showNotifications)}
            aria-expanded={showNotifications}
            aria-label={t('notifications')}
          >
            <Bell className="w-5 h-5" />
          </Button>

          {/* User Menu */}
          {user && (
            <div className="relative group">
              <Button type="button" variant="ghost" className="h-auto p-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">{user.name.charAt(0).toUpperCase()}</span>
                </div>
                <span className="text-sm font-medium hidden sm:inline">{user.name}</span>
              </Button>
              <div className="absolute right-0 mt-2 w-40 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="border-b border-border p-2"><ThemeSelector /></div>
                <Link
                  href="/settings"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted first:rounded-t-lg"
                >
                  <Settings className="w-4 h-4" />
                  {t('settings')}
                </Link>
                <Button type="button" variant="ghost" size="sm" onClick={handleLogout} className="h-auto w-full justify-start gap-2 rounded-none px-4 py-2 font-normal text-foreground hover:bg-muted">
                  <LogOut className="w-4 h-4" />
                  {t('logout')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
