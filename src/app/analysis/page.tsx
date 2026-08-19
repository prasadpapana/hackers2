'use client';

import React from 'react';
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
} from '@/components/common';
import { CheckCircle, AlertCircle, Clock, FileText, Download, Share2, ArrowRight } from 'lucide-react';
import { useAppStore } from '@/lib/store';

export default function AnalysisResultPage() {
  const currentAnalysis = useAppStore((state) => state.currentAnalysis);
  const currentDocument = useAppStore((state) => state.currentDocument);
  const previewAnalysis = {
    decision: 'Likely Eligible',
    confidence: 87,
    status: 'completed',
    explanation: 'Based on the document analysis, you appear to meet the initial eligibility criteria for this program. However, a formal determination requires additional documentation.',
    recommendedAction: 'Submit the following missing documents to proceed with your application.',
    missingEvidence: [
      'Income Certificate',
      'Address Proof',
      'Identification Document',
    ],
    evidenceChecklist: [
      { name: 'Application Form', status: 'verified' },
      { name: 'Identity Proof', status: 'verified' },
      { name: 'Address Proof', status: 'missing' },
      { name: 'Income Certificate', status: 'missing' },
      { name: 'Bank Statement', status: 'pending' },
    ],
    timeline: [
      { title: 'Document uploaded', date: '18 Aug', status: 'completed' },
      { title: 'Analysis completed', date: '18 Aug', status: 'completed' },
      { title: 'Evidence required', date: '19 Aug', status: 'completed' },
      { title: 'Application deadline', date: '15 Sep', status: 'pending' },
      { title: 'Decision', date: 'TBD', status: 'pending' },
    ],
  };
  const analysis = currentAnalysis
    ? {
        ...previewAnalysis,
        decision: currentAnalysis.decision,
        confidence: currentAnalysis.confidence,
        status: currentAnalysis.status,
        explanation: currentAnalysis.explanation,
        recommendedAction: currentAnalysis.recommendedAction,
        missingEvidence: currentAnalysis.missingEvidence ?? [],
        evidenceChecklist: currentAnalysis.requiredEvidence?.map((evidence) => ({
          name: evidence.name,
          status: evidence.status,
        })) ?? previewAnalysis.evidenceChecklist,
      }
    : previewAnalysis;

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

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Analysis Result</h1>
            <p className="text-muted-foreground">{currentDocument?.fileName ?? 'Consumer Complaint - Application Form'}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="md">
              <Download className="w-4 h-4" />
              Download
            </Button>
            <Button variant="outline" size="md">
              <Share2 className="w-4 h-4" />
              Share
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
                    <p className="text-sm text-muted-foreground mb-2">DECISION</p>
                    <h2 className="text-3xl font-bold text-primary mb-4">{analysis.decision}</h2>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">CONFIDENCE LEVEL</p>
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
                    <h3 className="font-semibold text-foreground mb-3">WHAT THIS MEANS</h3>
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
                    <h3 className="font-semibold text-foreground mb-2">NEXT ACTION</h3>
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
                <CardTitle>EVIDENCE CHECKLIST</CardTitle>
                <CardDescription>
                  Required and supporting documents for your application
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
                <CardTitle>TIMELINE</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-0">
                  {analysis.timeline.map((event, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-4 pb-6 ${idx !== analysis.timeline.length - 1 ? 'border-b border-border' : ''}`}
                    >
                      {event.status === 'completed' ? (
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{event.title}</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">STATUS</p>
                  <StatusBadge status="completed" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">MISSING DOCUMENTS</p>
                  <p className="text-2xl font-bold text-foreground">{analysis.missingEvidence.length}</p>
                  <p className="text-xs text-muted-foreground mt-1">Required to proceed</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">DEADLINE</p>
                  <p className="font-medium text-foreground">15 Sep 2024</p>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Gather Documents</p>
                    <p className="text-xs text-muted-foreground">Collect all missing evidence</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Submit Application</p>
                    <p className="text-xs text-muted-foreground">Before deadline</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Track Progress</p>
                    <p className="text-xs text-muted-foreground">Monitor status here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <Button variant="primary" size="lg" className="w-full">
                  Upload Documents
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Create Case
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
