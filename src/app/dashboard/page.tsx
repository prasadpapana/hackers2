'use client';

import React from 'react';
import Link from 'next/link';
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
import { AlertCircle, CheckCircle2, Calendar, FileText, Plus } from 'lucide-react';
import type { CivicCase } from '@/types';

export default function DashboardPage() {
  // TODO: Fetch real data from store/API
  const mockCases: Array<Pick<CivicCase, 'id' | 'title' | 'status' | 'progress' | 'lastUpdated' | 'nextAction'>> = [
    {
      id: '1',
      title: 'Consumer Complaint',
      status: 'action_required',
      progress: 70,
      lastUpdated: '2 hours ago',
      nextAction: 'Upload evidence',
    },
    {
      id: '2',
      title: 'Property Dispute',
      status: 'pending',
      progress: 45,
      lastUpdated: '1 day ago',
      nextAction: 'Await review',
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, User</h1>
          <p className="text-muted-foreground">Manage your cases and documents in one place</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Active Cases', value: '3', icon: FileText, color: 'text-primary' },
            { label: 'Action Required', value: '2', icon: AlertCircle, color: 'text-amber-600' },
            { label: 'Upcoming Deadlines', value: '1', icon: Calendar, color: 'text-amber-600' },
            { label: 'Completed', value: '5', icon: CheckCircle2, color: 'text-green-600' },
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
              <h2 className="text-2xl font-bold text-foreground">Recent Cases</h2>
              <Link href="/cases">
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </Link>
            </div>

            {mockCases.length > 0 ? (
              <div className="space-y-4">
                {mockCases.map((caseItem) => (
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
                          <span className="text-xs text-muted-foreground">Progress</span>
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
                          <p className="text-xs text-muted-foreground mb-1">Next Action</p>
                          <p className="text-foreground font-medium">{caseItem.nextAction}</p>
                        </div>
                        <Link href={`/cases/${caseItem.id}`}>
                          <Button variant="ghost" size="sm">
                            Open
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No cases yet"
                message="Create your first case by uploading a document"
                action={{
                  label: 'Upload Document',
                  onClick: () => window.location.href = '/analyze',
                }}
              />
            )}
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Quick Actions</h2>

            <Card>
              <CardContent className="pt-6">
                <Link href="/analyze" className="block">
                  <Button variant="primary" size="lg" className="w-full">
                    <Plus className="w-5 h-5" />
                    Analyze Document
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                    1
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Upload a document</p>
                    <p className="text-xs text-muted-foreground">Start by uploading a legal document</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                    2
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Get instant analysis</p>
                    <p className="text-xs text-muted-foreground">AI analyzes your document in seconds</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                    3
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Take action</p>
                    <p className="text-xs text-muted-foreground">Follow recommendations and track progress</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Check out our documentation or contact support
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
