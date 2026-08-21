'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/DashboardLayout';
import {
  Button,
  Card,
  CardContent,
  StatusBadge,
  EmptyState,
  ErrorState,
  LoadingState,
} from '@/components/common';
import { Search, Calendar } from 'lucide-react';
import { apiClient } from '@/lib/api';
import { useAppStore } from '@/lib/store';
import { useTranslations } from '@/lib/i18n';

export default function CasesPage() {
  const router = useRouter();
  const t = useTranslations();
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'action_required' | 'pending' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const storedCases = useAppStore((state) => state.cases);
  const setCases = useAppStore((state) => state.setCases);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    apiClient.getCases().then((response) => {
      if (active && response.data) setCases(response.data);
    }).catch(() => setError(true)).finally(() => setLoading(false));
    return () => { active = false; };
  }, [setCases]);

  const cases = storedCases;
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
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('myCases')}</h1>
          <p className="text-muted-foreground">{t('casesDescription')}</p>
        </div>

        {/* Filters and Search */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('searchCases')}
              aria-label={t('searchCases')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { value: 'all', label: t('all') }, { value: 'active', label: t('active') }, { value: 'action_required', label: t('actionRequired') }, { value: 'pending', label: t('pending') }, { value: 'completed', label: t('completed') },
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
        {loading ? <LoadingState message={t('loadingCases')} /> : error ? <ErrorState title={t('casesUnavailable')} message={t('casesLoadError')} onRetry={() => window.location.reload()} /> : filteredCases.length > 0 ? (
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
                            <p className="text-sm text-muted-foreground">{t('updated')} {caseItem.lastUpdated}</p>
                          </div>
                          <StatusBadge status={caseItem.status} size="sm" />
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-muted-foreground">{t('progress')}</span>
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
                            <span className="text-xs text-muted-foreground">{t('deadline')}: {caseItem.deadline}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between md:items-end">
                        <div className="mb-4">
                          <p className="text-xs text-muted-foreground mb-2">{t('nextAction')}</p>
                          <p className="font-semibold text-foreground">{caseItem.nextAction}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          {t('openCase')} →
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
            title={t('noCasesFound')}
            message={t('adjustFilters')}
            action={{
              label: t('createNewCase'),
              onClick: () => router.push('/analyze'),
            }}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
