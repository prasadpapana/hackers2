'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutDashboard, FileText, UploadCloud, FolderOpen, Calendar, Settings, HelpCircle } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { useTranslations } from '@/lib/i18n';

const mainNavItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/cases', label: 'My Cases', icon: FolderOpen },
  { href: '/analyze', label: 'Analyze Document', icon: UploadCloud },
  { href: '/documents', label: 'Documents', icon: FileText },
  { href: '/timeline', label: 'Timeline', icon: Calendar },
];

const bottomNavItems = [
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/help', label: 'Help', icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen } = useAppStore();
  const t = useTranslations();
  const labels = [t('home'), t('dashboard'), t('myCases'), t('analyzeDocument'), t('documents'), t('timeline')];
  const bottomLabels = [t('settings'), t('help')];

  if (!sidebarOpen) {
    return null;
  }

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto z-30">
      <nav className="flex flex-col h-full p-4">
        {/* Main Navigation */}
        <div className="flex-1 space-y-1">
          {mainNavItems.map((item, index) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground font-medium'
                    : 'text-sidebar-foreground hover:bg-sidebar/80'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{labels[index]}</span>
              </Link>
            );
          })}
        </div>

        {/* Bottom Navigation */}
        <div className="border-t border-sidebar-border pt-4 space-y-1">
          {bottomNavItems.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground font-medium'
                    : 'text-sidebar-foreground hover:bg-sidebar/80'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{bottomLabels[index]}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

// Mobile Bottom Navigation
export function MobileNavigation() {
  const pathname = usePathname();
  const t = useTranslations();
  const labels = [t('home'), t('dashboard'), t('myCases'), t('analyzeDocument')];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-0 py-2 z-30 flex justify-around sm:hidden">
      {mainNavItems.slice(0, 4).map((item, index) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
              isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs font-medium">{labels[index].split(' ')[0]}</span>
          </Link>
        );
      })}
    </nav>
  );
}
