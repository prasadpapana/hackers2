'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Button, Card, CardContent, CardHeader, CardTitle, ErrorState, LoadingState, Progress, StatusBadge } from '@/components/common';
import { ArrowLeft, Calendar, CheckCircle2, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/lib/api';
import type { CivicCase } from '@/types';
import { useTranslations } from '@/lib/i18n';

export default function CaseDetailsPage({ params }: { params: { id: string } }) {
  const t = useTranslations();
  const router = useRouter();
  const [caseData, setCaseData] = useState<CivicCase | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    apiClient.getCase(params.id).then((response) => {
      setCaseData(response.data ?? null);
      setError(!response.data);
    }).catch(() => setError(true)).finally(() => setLoading(false));
  }, [params.id]);

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <Button variant="ghost" size="sm" onClick={() => router.back()}>
          <ArrowLeft className="w-4 h-4" /> {t('backToCases')}
        </Button>
        {loading ? <LoadingState message={t('loadingCaseDetails')} /> : error || !caseData ? (
          <ErrorState title={t('caseUnavailable')} message={t('casesLoadError')} onRetry={() => window.location.reload()} />
        ) : (
          <>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">{t('caseDetails')}</p>
                <h1 className="text-3xl font-bold text-foreground">{caseData.title}</h1>
                <p className="text-muted-foreground mt-2">{caseData.description}</p>
              </div>
              <StatusBadge status={caseData.status} />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader><CardTitle className="text-base">{t('progress')}</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-foreground">{caseData.progress}%</p>
                  <Progress value={caseData.progress} className="mt-3" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-base">{t('nextAction')}</CardTitle></CardHeader>
                <CardContent><p className="font-medium text-foreground">{caseData.nextAction}</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-base">{t('deadline')}</CardTitle></CardHeader>
                <CardContent className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /><p className="text-foreground">{caseData.deadline ?? t('noDeadline')}</p></CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle>{t('relatedDocuments')}</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  {caseData.documents.length === 0 ? <p className="text-muted-foreground">{t('noDocumentsAttached')}</p> : caseData.documents.map((document) => (
                    <div key={document.id} className="flex items-center gap-3 border border-border rounded-lg p-3">
                      <FileText className="w-5 h-5 text-primary" /><span className="text-foreground">{document.fileName}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>{t('timeline')}</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {caseData.timeline.length === 0 ? <p className="text-muted-foreground">{t('noTimelineEvents')}</p> : caseData.timeline.map((event) => (
                    <div key={event.id} className="flex gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${event.status === 'completed' ? 'text-green-600' : 'text-muted-foreground'}`} />
                      <div><p className="font-medium text-foreground">{event.title}</p><p className="text-sm text-muted-foreground">{event.date}</p></div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
