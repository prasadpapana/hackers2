'use client';

import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  EmptyState,
  ErrorState,
  LoadingState,
} from '@/components/common';
import { FileText, Download, Trash2, Search } from 'lucide-react';
import { apiClient } from '@/lib/api';
import type { Document } from '@/types';

type DocumentPreview = Pick<Document, 'id' | 'fileName' | 'fileUrl' | 'uploadedAt' | 'status'> & { type?: string };

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [documents, setDocuments] = useState<DocumentPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    apiClient.getDocuments().then((response) => {
      if (response.data) setDocuments(response.data);
    }).catch(() => setError(true)).finally(() => setLoading(false));
  }, []);

  const visibleDocuments = documents.filter((document) =>
    document.fileName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Documents</h1>
          <p className="text-muted-foreground">Manage all your uploaded documents</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground"
          />
        </div>

        {/* Documents List */}
        {loading ? <LoadingState message="Loading documents..." /> : error ? <ErrorState title="Documents unavailable" message="We could not load your documents from the server." onRetry={() => window.location.reload()} /> : visibleDocuments.length > 0 ? (
          <div className="space-y-4">
            {visibleDocuments.map((doc) => (
              <Card key={doc.id} hoverable>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">{doc.fileName}</h3>
                        <p className="text-xs text-muted-foreground">
                          {doc.type ?? 'Document'} • Uploaded {doc.uploadedAt}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        doc.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {doc.status}
                      </span>
                      <Button variant="ghost" size="sm" onClick={() => window.open(doc.fileUrl, '_blank')}>
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={async () => {
                          await apiClient.deleteDocument(doc.id);
                          setDocuments((current) => current.filter((item) => item.id !== doc.id));
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No documents"
            message="Start by uploading a document"
            action={{
              label: 'Upload Document',
              onClick: () => (window.location.href = '/analyze'),
            }}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
