'use client';

import { DashboardLayout } from '@/components/DashboardLayout';

export default function AnalysisPreviewPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-bold text-foreground">Analysis Preview</h1>
        <p className="text-muted-foreground mt-4">
          Redirecting to analysis result...
        </p>
      </div>
    </DashboardLayout>
  );
}
