'use client';

import React from 'react';
import { Navbar, Sidebar, MobileNavigation } from '@/components/common';
import { useAppStore } from '@/lib/store';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { sidebarOpen } = useAppStore();

  return (
    <div className="dashboard-shell flex min-h-[100dvh] flex-col">
      <Navbar />
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <Sidebar />
        <main className={`dashboard-main min-w-0 flex-1 overflow-y-auto pb-[calc(4.5rem+env(safe-area-inset-bottom))] transition-[margin] duration-200 md:pb-0 ${sidebarOpen ? 'md:ml-64' : ''}`}>
          {children}
        </main>
      </div>
      <MobileNavigation />
    </div>
  );
}
