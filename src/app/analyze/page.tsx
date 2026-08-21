'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  LoadingState,
} from '@/components/common';
import { Upload, File, FileText, X } from 'lucide-react';
import { VoiceInput } from '@/components/upload/VoiceInput';
import { apiClient } from '@/lib/api';
import { useAppStore } from '@/lib/store';
import { useTranslations } from '@/lib/i18n';
import { aiDisclaimer } from '@/components/common/LegalPage';

export default function AnalyzePage() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'analyzing' | 'success' | 'error'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const setCurrentDocument = useAppStore((state) => state.setCurrentDocument);
  const setCurrentAnalysis = useAppStore((state) => state.setCurrentAnalysis);
  const t = useTranslations();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && isValidFile(droppedFile)) {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && isValidFile(selectedFile)) {
      setFile(selectedFile);
    }
  };

  const isValidFile = (file: File): boolean => {
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    const validSize = file.size <= 10 * 1024 * 1024; // 10MB
    return validTypes.includes(file.type) && validSize;
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploadStatus('uploading');
    setUploadProgress(0);

    try {
      const uploadResponse = await apiClient.uploadDocument(file);
      if (!uploadResponse.data) throw new Error('The document upload did not return a document.');
      setCurrentDocument(uploadResponse.data);
      setUploadProgress(100);

      setUploadStatus('analyzing');
      const analysisResponse = await apiClient.analyzeDocument(uploadResponse.data.id);
      if (analysisResponse.data) setCurrentAnalysis(analysisResponse.data);

      setUploadStatus('success');

      // Redirect to analysis result after success
      setTimeout(() => { window.location.href = '/analysis'; }, 800);
    } catch (error) {
      setUploadStatus('error');
      console.error('Upload failed:', error);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('analyzeTitle')}</h1>
          <p className="text-muted-foreground">{t('analyzeDescription')}</p>
          <p className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm leading-6 text-muted-foreground">{aiDisclaimer}</p>
        </div>

        <div className="mb-8">
          <VoiceInput onSubmit={(question) => console.info('Voice question:', question)} />
        </div>

        {uploadStatus === 'success' ? (
          <Card className="text-center py-12">
            <CardContent>
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{t('uploadSuccess')}</h3>
              <p className="text-muted-foreground mb-6">{t('analyzingRedirect')}</p>
              <LoadingState />
            </CardContent>
          </Card>
        ) : uploadStatus === 'error' ? (
          <Card className="border-destructive">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-4">
                  <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('uploadFailed')}</h3>
                <p className="text-muted-foreground mb-6">{t('uploadError')}</p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setFile(null);
                    setUploadStatus('idle');
                    setUploadProgress(0);
                  }}
                >
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : file && uploadStatus !== 'idle' ? (
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {uploadStatus === 'uploading' ? 'Uploading...' : 'Analyzing document...'}
                  </p>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-right">{uploadProgress}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Upload Area */}
            <div className="md:col-span-2">
              <Card
                className={`border-2 border-dashed transition-all ${
                  isDragging ? 'border-primary bg-primary/5' : 'border-border'
                }`}
              >
                <CardContent className="pt-12 pb-12 text-center">
                  <div className="mb-4">
                    <Upload className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t('dragDrop')}
                  </h3>
                  <p className="text-muted-foreground mb-6">or</p>

                  <label>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        (e.target as HTMLElement).previousElementSibling?.dispatchEvent(new MouseEvent('click'));
                      }}
                      className="px-6 py-2 text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
                    >
                      {t('browseFiles')}
                    </button>
                  </label>

                  <p className="text-xs text-muted-foreground mt-4">
                    PDF, JPG, or PNG • Max 10 MB
                  </p>
                </CardContent>
                <div
                  className="absolute inset-0 hidden"
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                />
              </Card>

              {file && uploadStatus === 'idle' && (
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 border border-border rounded-lg">
                    {file.type.includes('pdf') ? (
                      <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                    ) : (
                      <File className="w-8 h-8 text-primary flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{file.name}</p>
                      <p className="text-sm text-muted-foreground">{formatFileSize(file.size)}</p>
                    </div>
                    <button
                      onClick={() => setFile(null)}
                      className="text-muted-foreground hover:text-foreground p-1"
                      aria-label="Remove file"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <Button variant="primary" size="lg" className="w-full" onClick={handleUpload}>
                    {t('uploadAnalyze')}
                  </Button>
                </div>
              )}
            </div>

            {/* Info Sidebar */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">{t('whatWeAnalyze')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    'Document type and purpose',
                    'Key decisions and requirements',
                    'Missing information',
                    'Important dates and deadlines',
                    'Recommended next steps',
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">{t('supportedFormats')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• PDF</li>
                    <li>• JPG/JPEG</li>
                    <li>• PNG</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4">
                    Maximum file size: 10 MB
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
