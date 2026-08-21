'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Button } from '@/components/common';
import { ChevronDown, Mail, MessageSquare } from 'lucide-react';
import { useTranslations } from '@/lib/i18n';

export default function HelpPage() {
  const t = useTranslations();
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I upload a document?',
      answer: 'Navigate to "Analyze Document" and either drag and drop your file or click to browse. We support PDF, JPG, and PNG files up to 10 MB.',
    },
    {
      question: 'What document formats are supported?',
      answer: 'We support PDF, JPG, and PNG formats. The maximum file size is 10 MB.',
    },
    {
      question: 'How long does analysis take?',
      answer: 'Most documents are analyzed within seconds. Complex documents may take up to a few minutes.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Your documents are intended to remain private to your account and are protected by application safeguards. Do not upload unnecessary sensitive information, and review the Privacy Policy for how data may be processed for requested features.',
    },
    {
      question: 'Can I export my analysis?',
      answer: 'Yes, you can download your analysis results as a PDF from the analysis result page.',
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('helpSupport')}</h1>
          <p className="text-muted-foreground">{t('helpDescription')}</p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{t('emailSupport')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('supportHelp')}
              </p>
              <Button variant="primary" size="md">
                support@nayasathi.ai
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <MessageSquare className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{t('liveChat')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('chatSupport')}
              </p>
              <Button variant="primary" size="md">
                {t('openChat')}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">{t('faq')}</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <Card
                key={idx}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground">{faq.question}</p>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        expandedFaq === idx ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                  {expandedFaq === idx && (
                    <p className="text-sm text-muted-foreground mt-4">{faq.answer}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Documentation */}
        <Card>
          <CardHeader>
            <CardTitle>{t('needMoreHelp')}</CardTitle>
            <CardDescription>
              {t('documentationDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" size="md">
              {t('readDocumentation')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
