import axios, { AxiosInstance } from 'axios';
import type { ApiResponse, Document, Analysis, CivicCase, TimelineEvent, User, Review, ReviewList } from '@/types';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor for auth token
    this.client.interceptors.request.use((config) => {
      const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          if (typeof window !== 'undefined') {
            localStorage.removeItem('authToken');
            window.location.replace(`${window.location.origin}/login`);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  // Authentication
  async login(email: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> {
    const { data } = await this.client.post('/auth/login', { email, password });
    return data;
  }

  async signup(name: string, email: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> {
    const { data } = await this.client.post('/auth/signup', { name, email, password });
    return data;
  }

  async logout(): Promise<ApiResponse<void>> {
    const { data } = await this.client.post('/auth/logout');
    return data;
  }

  async getCurrentUser(): Promise<ApiResponse<User>> {
    const { data } = await this.client.get('/auth/me');
    return data;
  }

  // Documents
  async uploadDocument(file: File, caseId?: string): Promise<ApiResponse<Document>> {
    const formData = new FormData();
    formData.append('file', file);
    if (caseId) formData.append('caseId', caseId);

    const { data } = await this.client.post('/documents/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  }

  async getDocument(id: string): Promise<ApiResponse<Document>> {
    const { data } = await this.client.get(`/documents/${id}`);
    return data;
  }

  async getDocuments(): Promise<ApiResponse<Document[]>> {
    const { data } = await this.client.get('/documents');
    return data;
  }

  async deleteDocument(id: string): Promise<ApiResponse<void>> {
    const { data } = await this.client.delete(`/documents/${id}`);
    return data;
  }

  // Analysis
  async analyzeDocument(documentId: string): Promise<ApiResponse<Analysis>> {
    const { data } = await this.client.post(`/analysis/analyze`, { documentId });
    return data;
  }

  async getAnalysis(id: string): Promise<ApiResponse<Analysis>> {
    const { data } = await this.client.get(`/analysis/${id}`);
    return data;
  }

  async getAnalysisByDocument(documentId: string): Promise<ApiResponse<Analysis>> {
    const { data } = await this.client.get(`/analysis/document/${documentId}`);
    return data;
  }

  // Cases
  async getCases(): Promise<ApiResponse<CivicCase[]>> {
    const { data } = await this.client.get('/cases');
    return data;
  }

  async getCase(id: string): Promise<ApiResponse<CivicCase>> {
    const { data } = await this.client.get(`/cases/${id}`);
    return data;
  }

  async createCase(title: string, description: string, documentIds?: string[]): Promise<ApiResponse<CivicCase>> {
    const { data } = await this.client.post('/cases', { title, description, documentIds });
    return data;
  }

  async updateCase(id: string, updates: Partial<CivicCase>): Promise<ApiResponse<CivicCase>> {
    const { data } = await this.client.put(`/cases/${id}`, updates);
    return data;
  }

  async deleteCase(id: string): Promise<ApiResponse<void>> {
    const { data } = await this.client.delete(`/cases/${id}`);
    return data;
  }

  // Timeline
  async getTimeline(caseId: string): Promise<ApiResponse<TimelineEvent[]>> {
    const { data } = await this.client.get(`/cases/${caseId}/timeline`);
    return data;
  }

  // Settings
  async updateSettings(language: string): Promise<ApiResponse<User>> {
    const { data } = await this.client.put('/settings', { language });
    return data;
  }

  // The backend enforces authentication, moderation, ownership, and vote uniqueness.
  async getReviews(params: { page?: number; pageSize?: number; rating?: number; search?: string; sort?: string } = {}): Promise<ApiResponse<ReviewList>> {
    const { data } = await this.client.get('/reviews', { params });
    return data;
  }

  async createReview(payload: { rating: number; reviewText: string; category?: string }): Promise<ApiResponse<Review>> {
    const { data } = await this.client.post('/reviews', payload);
    return data;
  }

  async updateReview(id: string, payload: { rating: number; reviewText: string; category?: string }): Promise<ApiResponse<Review>> {
    const { data } = await this.client.put(`/reviews/${id}`, payload);
    return data;
  }

  async deleteReview(id: string): Promise<ApiResponse<void>> {
    const { data } = await this.client.delete(`/reviews/${id}`);
    return data;
  }

  async markReviewHelpful(id: string): Promise<ApiResponse<{ helpfulCount: number; helpful: boolean }>> {
    const { data } = await this.client.post(`/reviews/${id}/helpful`);
    return data;
  }

  // Voice Analysis (if supported by backend)
  async analyzeVoice(audioBlob: Blob): Promise<ApiResponse<{ transcript: string; analysis: Analysis }>> {
    const formData = new FormData();
    formData.append('audio', audioBlob);

    const { data } = await this.client.post('/analysis/voice', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  }
}

export const apiClient = new ApiClient();
