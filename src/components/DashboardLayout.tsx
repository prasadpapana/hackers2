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
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className={`min-w-0 flex-1 overflow-y-auto transition-[margin] duration-200 pb-16 md:pb-0 ${sidebarOpen ? 'md:ml-64' : ''}`}>
          {children}
        </main>
      </div>
      <MobileNavigation />
    </div>
  );
}
