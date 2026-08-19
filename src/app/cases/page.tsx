'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/DashboardLayout';
import {
  Button,
  Card,
  CardContent,
  CardTitle,
  Badge,
  StatusBadge,
  EmptyState,
} from '@/components/common';
import { Search, Filter, Calendar, AlertCircle } from 'lucide-react';
import type { CivicCase } from '@/types';
import { apiClient } from '@/lib/api';
import { useAppStore } from '@/lib/store';

export default function CasesPage() {
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'action_required' | 'pending' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const storedCases = useAppStore((state) => state.cases);
  const setCases = useAppStore((state) => state.setCases);

  const mockCases: Array<Pick<CivicCase, 'id' | 'title' | 'status' | 'progress' | 'lastUpdated' | 'nextAction' | 'deadline'>> = [
    {
      id: '1',
      title: 'Consumer Complaint',
      status: 'action_required',
      progress: 70,
      lastUpdated: '2 hours ago',
      nextAction: 'Upload evidence',
      deadline: '2024-09-15',
    },
    {
      id: '2',
      title: 'Property Dispute',
      status: 'pending',
      progress: 45,
      lastUpdated: '1 day ago',
      nextAction: 'Await review',
      deadline: '2024-10-01',
    },
    {
      id: '3',
      title: 'Tenant Rights',
      status: 'active',
      progress: 85,
      lastUpdated: '3 hours ago',
      nextAction: 'Schedule meeting',
      deadline: '2024-09-30',
    },
    {
      id: '4',
      title: 'Completed Case',
      status: 'completed',
      progress: 100,
      lastUpdated: '1 week ago',
      nextAction: 'View results',
      deadline: '2024-08-25',
    },
  ];

  useEffect(() => {
    let active = true;
    apiClient.getCases().then((response) => {
      if (active && response.data) setCases(response.data);
    }).catch(() => {
      // The preview dataset keeps the page usable before the API is available.
    });
    return () => { active = false; };
  }, [setCases]);

  const cases = storedCases.length > 0 ? storedCases : mockCases;
  const filteredCases = cases.filter((c) => {
    const matchesStatus = filterStatus === 'all' || c.status === filterStatus;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">My Cases</h1>
          <p className="text-muted-foreground">Manage and track all your cases</p>
        </div>

        {/* Filters and Search */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { value: 'all', label: 'All' },
              { value: 'active', label: 'Active' },
              { value: 'action_required', label: 'Action Required' },
              { value: 'pending', label: 'Pending' },
              { value: 'completed', label: 'Completed' },
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setFilterStatus(filter.value as typeof filterStatus)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  filterStatus === filter.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cases Grid */}
        {filteredCases.length > 0 ? (
          <div className="grid gap-6">
            {filteredCases.map((caseItem) => (
              <Link key={caseItem.id} href={`/cases/${caseItem.id}`}>
                <Card hoverable>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">{caseItem.title}</h3>
                            <p className="text-sm text-muted-foreground">Updated {caseItem.lastUpdated}</p>
                          </div>
                          <StatusBadge status={caseItem.status} size="sm" />
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-muted-foreground">Progress</span>
                              <span className="text-xs font-medium text-foreground">{caseItem.progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${caseItem.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 pt-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Deadline: {caseItem.deadline}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between md:items-end">
                        <div className="mb-4">
                          <p className="text-xs text-muted-foreground mb-2">NEXT ACTION</p>
                          <p className="font-semibold text-foreground">{caseItem.nextAction}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Open Case →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No cases found"
            message="Try adjusting your filters or create a new case"
            action={{
              label: 'Create New Case',
              onClick: () => (window.location.href = '/analyze'),
            }}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
