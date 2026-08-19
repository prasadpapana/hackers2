'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Button } from '@/components/common';
import { ChevronDown, Mail, MessageSquare } from 'lucide-react';

export default function HelpPage() {
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
      answer: 'Yes, all your documents are encrypted and stored securely. We never share your data with third parties without your consent.',
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Help & Support</h1>
          <p className="text-muted-foreground">Find answers to common questions or contact our support team</p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get help from our support team
              </p>
              <Button variant="primary" size="md">
                support@civicguide.ai
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <MessageSquare className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Chat with our support team
              </p>
              <Button variant="primary" size="md">
                Open Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
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
            <CardTitle>Need More Help?</CardTitle>
            <CardDescription>
              Check out our full documentation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" size="md">
              Read Documentation
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
