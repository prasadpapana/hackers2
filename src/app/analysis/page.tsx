'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/DashboardLayout';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  StatusBadge,
  EmptyState,
} from '@/components/common';
import { CheckCircle, AlertCircle, Clock, FileText, Download, Share2, ArrowRight } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { useTranslations } from '@/lib/i18n';
import { aiDisclaimer } from '@/components/common/LegalPage';

export default function AnalysisResultPage() {
  const router = useRouter();
  const currentAnalysis = useAppStore((state) => state.currentAnalysis);
  const currentDocument = useAppStore((state) => state.currentDocument);
  const t = useTranslations();
  const analysis = currentAnalysis ? {
    ...currentAnalysis,
    missingEvidence: currentAnalysis.missingEvidence ?? [],
    evidenceChecklist: currentAnalysis.requiredEvidence?.map((evidence) => ({
      name: evidence.name,
      status: evidence.status,
    })) ?? [],
  } : null;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'missing':
        return <AlertCircle className="w-5 h-5 text-amber-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return null;
    }
  };

  if (!analysis) {
    return (
      <DashboardLayout>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <EmptyState
            title={t('noAnalysis')}
            message={t('analyzeDescription')}
            action={{ label: t('uploadDocument'), onClick: () => router.push('/analyze') }}
          />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{t('analysisResult')}</h1>
            <p className="text-muted-foreground">{currentDocument?.fileName ?? t('defaultDocumentName')}</p>
            <p className="mt-4 max-w-3xl rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm leading-6 text-muted-foreground">{aiDisclaimer}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="md">
              <Download className="w-4 h-4" />
              {t('download')}
            </Button>
            <Button variant="outline" size="md">
              <Share2 className="w-4 h-4" />
              {t('share')}
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Decision Card */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{t('decision')}</p>
                    <h2 className="text-3xl font-bold text-primary mb-4">{analysis.decision}</h2>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">{t('confidenceLevel')}</p>
                        <p className="text-2xl font-bold text-foreground">{analysis.confidence}%</p>
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${analysis.confidence}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-primary/20 pt-6">
                    <h3 className="font-semibold text-foreground mb-3">{t('whatThisMeans')}</h3>
                    <p className="text-foreground leading-relaxed">{analysis.explanation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Action */}
            <Card className="border-l-4 border-l-amber-600">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{t('nextAction')}</h3>
                    <p className="text-foreground mb-4">{analysis.recommendedAction}</p>
                    <ul className="space-y-2">
                      {analysis.missingEvidence.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-foreground">
                          <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Evidence Checklist */}
            <Card>
              <CardHeader>
                <CardTitle>{t('evidenceChecklist')}</CardTitle>
                <CardDescription>
                  {t('requiredDocuments')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analysis.evidenceChecklist.map((evidence, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium text-foreground">{evidence.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(evidence.status)}
                        <Badge
                          variant={
                            evidence.status === 'verified'
                              ? 'success'
                              : evidence.status === 'missing'
                              ? 'warning'
                              : 'info'
                          }
                          size="sm"
                        >
                          {evidence.status.charAt(0).toUpperCase() + evidence.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>{t('timeline')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('timelineAssociated')}</p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('summary')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{t('statusLabel')}</p>
                  <StatusBadge status="completed" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">{t('missingDocuments')}</p>
                  <p className="text-2xl font-bold text-foreground">{analysis.missingEvidence.length}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t('requiredToProceed')}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">{t('deadline')}</p>
                  <p className="font-medium text-foreground">15 Sep 2024</p>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('recommendations')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{t('gatherDocuments')}</p>
                    <p className="text-xs text-muted-foreground">{t('collectMissingEvidence')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{t('submitApplication')}</p>
                    <p className="text-xs text-muted-foreground">{t('beforeDeadline')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{t('trackProgress')}</p>
                    <p className="text-xs text-muted-foreground">{t('monitorStatus')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <Button variant="primary" size="lg" className="w-full">
                  {t('uploadDocuments')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  {t('createCase')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
