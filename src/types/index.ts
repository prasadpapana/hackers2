import type { SupportedLanguage } from '@/lib/i18n';

// User and Authentication
export interface User {
  id: string;
  name: string;
  email: string;
  language: SupportedLanguage;
  createdAt: string;
}

export interface Review {
  id: string;
  userId: string;
  user: { displayName: string; avatarUrl?: string };
  rating: number;
  reviewText: string;
  category?: string;
  createdAt: string;
  updatedAt?: string;
  verified: boolean;
  helpfulCount: number;
  helpfulByCurrentUser?: boolean;
}

export interface ReviewSummary {
  averageRating: number;
  totalReviews: number;
  distribution: Record<1 | 2 | 3 | 4 | 5, number>;
}

export interface ReviewList {
  reviews: Review[];
  summary: ReviewSummary;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Document
export interface Document {
  id: string;
  userId: string;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  uploadedAt: string;
  status: 'uploaded' | 'analyzing' | 'completed' | 'failed';
}

// Analysis
export interface Analysis {
  id: string;
  documentId: string;
  decision: string;
  confidence: number;
  explanation: string;
  recommendedAction: string;
  status: 'pending' | 'review_required' | 'completed';
  createdAt: string;
  missingEvidence?: string[];
  missingInformation?: string[];
  requiredEvidence?: Evidence[];
}

// Evidence
export interface Evidence {
  id: string;
  name: string;
  description: string;
  status: 'verified' | 'missing' | 'pending' | 'rejected';
  importance?: 'required' | 'recommended' | 'optional';
}

// Case/Matter
export interface CivicCase {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: 'active' | 'action_required' | 'pending' | 'completed';
  progress: number;
  documents: Document[];
  analysis?: Analysis;
  timeline: TimelineEvent[];
  nextAction: string;
  deadline?: string;
  lastUpdated: string;
  createdAt: string;
}

// Timeline Event
export interface TimelineEvent {
  id: string;
  title: string;
  description?: string;
  date: string;
  type: 'document_uploaded' | 'analysis_completed' | 'evidence_required' | 'deadline' | 'action_required';
  status: 'completed' | 'pending';
}

// API Response
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form States
export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// UI States
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface UploadState {
  status: LoadingState;
  file?: File;
  progress: number;
  error?: string;
}
