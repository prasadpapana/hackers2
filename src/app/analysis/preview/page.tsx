'use client';

import { DashboardLayout } from '@/components/DashboardLayout';
import { useTranslations } from '@/lib/i18n';

export default function AnalysisPreviewPage() {
  const t = useTranslations();
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-bold text-foreground">{t('analysisResult')}</h1>
        <p className="text-muted-foreground mt-4">
          {t('analyzingRedirect')}
        </p>
      </div>
    </DashboardLayout>
  );
}
