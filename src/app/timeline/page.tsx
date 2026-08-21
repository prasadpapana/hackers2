'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common';
import { Calendar, Check, AlertCircle } from 'lucide-react';
import { useTranslations } from '@/lib/i18n';

export default function TimelinePage() {
  const t = useTranslations();
  const mockTimelines = [
    {
      id: '1',
      title: t('consumerComplaint'),
      events: [
        { title: t('documentUploaded'), date: '18 Aug 2024', status: 'completed', type: 'upload' }, { title: t('analysisCompleted'), date: '18 Aug 2024', status: 'completed', type: 'analysis' }, { title: t('evidenceRequired'), date: '19 Aug 2024', status: 'completed', type: 'alert' }, { title: t('applicationDeadline'), date: '15 Sep 2024', status: 'pending', type: 'deadline' }, { title: t('decisionPending'), date: 'TBD', status: 'pending', type: 'decision' },
      ],
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('timeline')}</h1>
          <p className="text-muted-foreground">{t('timelineDescription')}</p>
        </div>

        {/* Timelines */}
        <div className="space-y-8">
          {mockTimelines.map((timeline) => (
            <Card key={timeline.id}>
              <CardHeader>
                <CardTitle>{timeline.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-0">
                  {timeline.events.map((event, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-4 pb-6 relative ${
                        idx !== timeline.events.length - 1 ? 'border-b border-border' : ''
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 relative z-10 ${event.status === 'completed' ? 'border-accent bg-accent/10' : 'border-border bg-background'}`}>
                        {event.status === 'completed' ? (
                          <Check className="w-5 h-5 text-accent-foreground" />
                        ) : event.type === 'alert' ? (
                          <AlertCircle className="w-5 h-5 text-secondary-foreground" />
                        ) : (
                          <Calendar className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{event.title}</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>

                      {/* Timeline line */}
                      {idx !== timeline.events.length - 1 && (
                        <div className={`absolute left-5 top-10 bottom-0 w-0.5 -z-0 ${event.status === 'completed' ? 'bg-accent' : 'bg-border'}`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
