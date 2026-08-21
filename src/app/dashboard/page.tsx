'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/DashboardLayout';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  StatusBadge,
  EmptyState,
  ErrorState,
  LoadingState,
} from '@/components/common';
import { AlertCircle, CheckCircle2, Calendar, FileText, Plus } from 'lucide-react';
import { apiClient } from '@/lib/api';
import { useAppStore } from '@/lib/store';
import { useTranslations } from '@/lib/i18n';

export default function DashboardPage() {
  const router = useRouter();
  const cases = useAppStore((state) => state.cases);
  const setCases = useAppStore((state) => state.setCases);
  const user = useAppStore((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    apiClient.getCases().then((response) => {
      if (response.data) setCases(response.data);
    }).catch(() => setError(true)).finally(() => setLoading(false));
  }, [setCases]);

  const activeCases = cases.filter((caseItem) => caseItem.status !== 'completed');
  const actionRequired = cases.filter((caseItem) => caseItem.status === 'action_required');
  const completedCases = cases.filter((caseItem) => caseItem.status === 'completed');

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('welcomeBack')}, {user?.name ?? t('there')}</h1>
          <p className="text-muted-foreground">{t('dashboardDescription')}</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: t('activeCases'), value: activeCases.length, icon: FileText, color: 'text-primary' },
            { label: t('actionRequired'), value: actionRequired.length, icon: AlertCircle, color: 'text-secondary-foreground' },
            { label: t('upcomingDeadlines'), value: cases.filter((caseItem) => caseItem.deadline).length, icon: Calendar, color: 'text-secondary-foreground' },
            { label: t('completed'), value: completedCases.length, icon: CheckCircle2, color: 'text-accent-foreground' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-3xl font-bold text-foreground">{item.value}</p>
                    </div>
                    <Icon className={`w-8 h-8 ${item.color} opacity-20`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Cases */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">{t('recentCases')}</h2>
              <Link href="/cases">
                <Button variant="ghost" size="sm">
                  {t('viewAll')}
                </Button>
              </Link>
            </div>

            {loading ? <LoadingState message={t('loadingCases')} /> : error ? <ErrorState title={t('dashboardUnavailable')} message={t('dashboardDescription')} onRetry={() => window.location.reload()} /> : cases.length > 0 ? (
              <div className="space-y-4">
                {cases.slice(0, 3).map((caseItem) => (
                  <Card key={caseItem.id} hoverable>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{caseItem.title}</h3>
                          <p className="text-xs text-muted-foreground">Updated {caseItem.lastUpdated}</p>
                        </div>
                        <StatusBadge status={caseItem.status} size="sm" />
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-muted-foreground">{t('progress')}</span>
                          <span className="text-xs font-medium text-foreground">{caseItem.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${caseItem.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Next Action */}
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <p className="text-xs text-muted-foreground mb-1">{t('nextAction')}</p>
                          <p className="text-foreground font-medium">{caseItem.nextAction}</p>
                        </div>
                        <Link href={`/cases/${caseItem.id}`}>
                          <Button variant="ghost" size="sm">
                            {t('open')}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <EmptyState
                title={t('noCases')}
                message={t('createFirstCase')}
                action={{
                  label: t('uploadDocument'),
                  onClick: () => router.push('/analyze'),
                }}
              />
            )}
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{t('quickActions')}</h2>

            <Card>
              <CardContent className="pt-6">
                <Link href="/analyze" className="block">
                  <Button variant="primary" size="lg" className="w-full">
                    <Plus className="w-5 h-5" />
                    {t('analyzeDocument')}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('gettingStarted')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                    1
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{t('stepUpload')}</p>
                    <p className="text-xs text-muted-foreground">{t('dashboardUploadHint')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                    2
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{t('dashboardAnalysis')}</p>
                    <p className="text-xs text-muted-foreground">{t('dashboardAnalysisHint')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                    3
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{t('stepAct')}</p>
                    <p className="text-xs text-muted-foreground">{t('dashboardActionHint')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('needHelp')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('documentationOrSupport')}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  {t('contactSupport')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
