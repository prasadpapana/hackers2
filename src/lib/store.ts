import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, Document, Analysis, CivicCase, UploadState, LoadingState } from '@/types';
import type { SupportedLanguage } from '@/lib/i18n';

interface AppStore {
  // Auth
  user: User | null;
  isAuthenticated: boolean;
  authLoading: LoadingState;
  setUser: (user: User | null) => void;
  setAuthLoading: (state: LoadingState) => void;

  // Language
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;

  // Theme
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;

  // Documents
  documents: Document[];
  currentDocument: Document | null;
  setDocuments: (docs: Document[]) => void;
  setCurrentDocument: (doc: Document | null) => void;
  addDocument: (doc: Document) => void;
  removeDocument: (id: string) => void;

  // Upload
  uploadState: UploadState;
  setUploadState: (state: UploadState) => void;

  // Analysis
  currentAnalysis: Analysis | null;
  analyses: Analysis[];
  analysisLoading: LoadingState;
  setCurrentAnalysis: (analysis: Analysis | null) => void;
  setAnalyses: (analyses: Analysis[]) => void;
  setAnalysisLoading: (state: LoadingState) => void;
  addAnalysis: (analysis: Analysis) => void;

  // Cases
  cases: CivicCase[];
  currentCase: CivicCase | null;
  casesLoading: LoadingState;
  setCases: (cases: CivicCase[]) => void;
  setCurrentCase: (caseData: CivicCase | null) => void;
  setCasesLoading: (state: LoadingState) => void;
  addCase: (caseData: CivicCase) => void;
  updateCase: (caseData: CivicCase) => void;
  removeCase: (id: string) => void;

  // UI State
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  notifications: Array<{ id: string; message: string; type: 'success' | 'error' | 'info' }>;
  addNotification: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeNotification: (id: string) => void;

  // General
  reset: () => void;
}

const initialState = {
  user: null,
  isAuthenticated: false,
  authLoading: 'idle' as LoadingState,
  language: 'en' as const,
  theme: 'light' as const,
  documents: [],
  currentDocument: null,
  uploadState: {
    status: 'idle' as LoadingState,
    progress: 0,
  },
  currentAnalysis: null,
  analyses: [],
  analysisLoading: 'idle' as LoadingState,
  cases: [],
  currentCase: null,
  casesLoading: 'idle' as LoadingState,
  sidebarOpen: true,
  notifications: [],
};

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      ...initialState,

      // Auth
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setAuthLoading: (authLoading) => set({ authLoading }),

      // Language
      setLanguage: (language) => set({ language }),

      // Theme
      setTheme: (theme) => set({ theme }),

      // Documents
      setDocuments: (documents) => set({ documents }),
      setCurrentDocument: (currentDocument) => set({ currentDocument }),
      addDocument: (document) => set((state) => ({ documents: [document, ...state.documents] })),
      removeDocument: (id) =>
        set((state) => ({
          documents: state.documents.filter((doc) => doc.id !== id),
          currentDocument: state.currentDocument?.id === id ? null : state.currentDocument,
        })),

      // Upload
      setUploadState: (uploadState) => set({ uploadState }),

      // Analysis
      setCurrentAnalysis: (currentAnalysis) => set({ currentAnalysis }),
      setAnalyses: (analyses) => set({ analyses }),
      setAnalysisLoading: (analysisLoading) => set({ analysisLoading }),
      addAnalysis: (analysis) => set((state) => ({ analyses: [analysis, ...state.analyses] })),

      // Cases
      setCases: (cases) => set({ cases }),
      setCurrentCase: (currentCase) => set({ currentCase }),
      setCasesLoading: (casesLoading) => set({ casesLoading }),
      addCase: (caseData) => set((state) => ({ cases: [caseData, ...state.cases] })),
      updateCase: (caseData) =>
        set((state) => ({
          cases: state.cases.map((c) => (c.id === caseData.id ? caseData : c)),
          currentCase: state.currentCase?.id === caseData.id ? caseData : state.currentCase,
        })),
      removeCase: (id) =>
        set((state) => ({
          cases: state.cases.filter((c) => c.id !== id),
          currentCase: state.currentCase?.id === id ? null : state.currentCase,
        })),

      // UI State
      setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
      addNotification: (message, type = 'info') => {
        const id = Date.now().toString();
        set((state) => ({
          notifications: [...state.notifications, { id, message, type }],
        }));
        // Auto-remove after 5 seconds
        setTimeout(() => {
          set((state) => ({
            notifications: state.notifications.filter((n) => n.id !== id),
          }));
        }, 5000);
      },
      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        })),

      // General
      reset: () => set(initialState),
    }),
    {
      name: 'civic-guide-store',
      partialize: (state) => ({
        language: state.language,
        theme: state.theme,
        sidebarOpen: state.sidebarOpen,
      }),
    }
  )
);
