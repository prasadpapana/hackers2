'use client';

import { useAppStore } from '@/lib/store';

export const indianLanguages = [
  { value: 'en', label: 'English' },
  { value: 'as', label: 'অসমীয়া' },
  { value: 'bn', label: 'বাংলা' },
  { value: 'brx', label: 'बड़ो' },
  { value: 'doi', label: 'डोगरी' },
  { value: 'gu', label: 'ગુજરાતી' },
  { value: 'hi', label: 'हिन्दी' },
  { value: 'kn', label: 'ಕನ್ನಡ' },
  { value: 'ks', label: 'کٲشُر' },
  { value: 'kok', label: 'कोंकणी' },
  { value: 'mai', label: 'मैथिली' },
  { value: 'ml', label: 'മലയാളം' },
  { value: 'mni', label: 'মৈতৈলোন্' },
  { value: 'mr', label: 'मराठी' },
  { value: 'ne', label: 'नेपाली' },
  { value: 'or', label: 'ଓଡ଼ିଆ' },
  { value: 'pa', label: 'ਪੰਜਾਬੀ' },
  { value: 'sa', label: 'संस्कृतम्' },
  { value: 'sat', label: 'संताली' },
  { value: 'sd', label: 'سنڌي' },
  { value: 'ta', label: 'தமிழ்' },
  { value: 'te', label: 'తెలుగు' },
  { value: 'ur', label: 'اُردُو' },
] as const;

export type SupportedLanguage = typeof indianLanguages[number]['value'];

export const rtlLanguages: SupportedLanguage[] = ['ks', 'sd', 'ur'];

export const languageFontFamilies: Record<SupportedLanguage, string> = {
  en: 'Inter, Noto Sans, sans-serif',
  as: '"Noto Sans Bengali", Noto Sans, sans-serif',
  bn: '"Noto Sans Bengali", Noto Sans, sans-serif',
  brx: '"Noto Sans Devanagari", Noto Sans, sans-serif',
  doi: '"Noto Sans Devanagari", Noto Sans, sans-serif',
  gu: '"Noto Sans Gujarati", Noto Sans, sans-serif',
  hi: '"Noto Sans Devanagari", Noto Sans, sans-serif',
  kn: '"Noto Sans Kannada", Noto Sans, sans-serif',
  ks: '"Noto Nastaliq Urdu", "Noto Sans Arabic", sans-serif',
  kok: '"Noto Sans Devanagari", Noto Sans, sans-serif',
  mai: '"Noto Sans Devanagari", Noto Sans, sans-serif',
  ml: '"Noto Sans Malayalam", Noto Sans, sans-serif',
  mni: '"Noto Sans Meetei Mayek", Noto Sans, sans-serif',
  mr: '"Noto Sans Devanagari", Noto Sans, sans-serif',
  ne: '"Noto Sans Devanagari", Noto Sans, sans-serif',
  or: '"Noto Sans Oriya", Noto Sans, sans-serif',
  pa: '"Noto Sans Gurmukhi", Noto Sans, sans-serif',
  sa: '"Noto Sans Devanagari", Noto Sans, sans-serif',
  sat: '"Noto Sans Ol Chiki", Noto Sans, sans-serif',
  sd: '"Noto Nastaliq Urdu", "Noto Sans Arabic", sans-serif',
  ta: '"Noto Sans Tamil", Noto Sans, sans-serif',
  te: '"Noto Sans Telugu", Noto Sans, sans-serif',
  ur: '"Noto Nastaliq Urdu", "Noto Sans Arabic", sans-serif',
};

type TranslationKey =
  | 'language'
  | 'login'
  | 'getStarted'
  | 'brandDescription'
  | 'heroTitle'
  | 'heroTitleAccent'
  | 'heroDescription'
  | 'analyzeDocumentCta'
  | 'seeHowItWorks'
  | 'builtForIndia'
  | 'workspace'
  | 'liveAnalysis'
  | 'approach'
  | 'featuresTitle'
  | 'builtToMakeCivic'
  | 'clearPath'
  | 'processTitle'
  | 'designedAround'
  | 'benefitsTitle'
  | 'ctaTitle'
  | 'voiceTitle'
  | 'voiceDescription'
  | 'voiceUnsupported'
  | 'transcriptPlaceholder'
  | 'startSpeaking'
  | 'tryAgain'
  | 'stopListening'
  | 'useQuestion'
  | 'welcomeBack'
  | 'dashboardDescription'
  | 'activeCases'
  | 'actionRequired'
  | 'upcomingDeadlines'
  | 'completed'
  | 'recentCases'
  | 'viewAll'
  | 'progress'
  | 'nextAction'
  | 'open'
  | 'loadingCases'
  | 'dashboardUnavailable'
  | 'noCases'
  | 'uploadDocument'
  | 'quickActions'
  | 'gettingStarted'
  | 'needHelp'
  | 'contactSupport'
  | 'analyzeTitle'
  | 'analyzeDescription'
  | 'uploadSuccess'
  | 'analyzingRedirect'
  | 'uploadFailed'
  | 'uploadError'
  | 'dragDrop'
  | 'browseFiles'
  | 'uploadAnalyze'
  | 'supportedFormats'
  | 'whatWeAnalyze'
  | 'analysisResult'
  | 'decision'
  | 'confidenceLevel'
  | 'whatThisMeans'
  | 'evidenceChecklist'
  | 'requiredDocuments'
  | 'timeline'
  | 'noAnalysis'
  | 'summary'
  | 'recommendations'
  | 'home'
  | 'dashboard'
  | 'myCases'
  | 'analyzeDocument'
  | 'documents'
  | 'timeline'
  | 'settings'
  | 'help'
  | 'logout'
  | string;

const translations: Partial<Record<SupportedLanguage, Record<TranslationKey, string>>> = {
  en: {
      theme: 'Theme', themeDescription: 'Choose the visual style for the entire application.', themeLight: 'Light', themeDark: 'Dark', themeSystem: 'System', themeCivicBlue: 'Civic Blue', themeIndianCivic: 'Indian Civic', themeMidnight: 'Midnight', themeForest: 'Forest', themeSlate: 'Slate',
    language: 'Language', statusActive: 'Active', statusCompleted: 'Completed', statusPending: 'Pending', statusError: 'Error', statusWarning: 'Warning', statusReviewRequired: 'Review Required', statusActionRequired: 'Action Required', defaultDocumentName: 'Consumer Complaint - Application Form', download: 'Download', share: 'Share', timelineAssociated: 'Timeline events are available from the associated case.', statusLabel: 'Status', missingDocuments: 'Missing Documents', requiredToProceed: 'Required to proceed', gatherDocuments: 'Gather Documents', collectMissingEvidence: 'Collect all missing evidence', submitApplication: 'Submit Application', beforeDeadline: 'Before deadline', trackProgress: 'Track Progress', monitorStatus: 'Monitor status here', uploadDocuments: 'Upload Documents', createCase: 'Create Case', uploading: 'Uploading...', analyzingDocument: 'Analyzing document...', or: 'or', supportedFileTypes: 'PDF, JPG, or PNG • Max 10 MB', removeFile: 'Remove file', there: 'there', createFirstCase: 'Create your first case by uploading a document', documentationOrSupport: 'Check out our documentation or contact support', emailPlaceholder: 'you@example.com', namePlaceholder: 'John Doe', continuingAgreement: 'By continuing, you agree to our', termsOfService: 'Terms of Service', andAcknowledge: 'and acknowledge our', privacyPolicy: 'Privacy Policy', product: 'Product', support: 'Support', legal: 'Legal', builtForClearerAction: 'Built for clearer civic action.', documentTypePurpose: 'Document type and purpose', keyDecisionsRequirements: 'Key decisions and requirements', missingInformation: 'Missing information', importantDatesDeadlines: 'Important dates and deadlines', recommendedNextSteps: 'Recommended next steps', maximumFileSize: 'Maximum file size: 10 MB', caseUpdates: 'Case Updates', caseUpdatesDescription: 'Notify me when there are updates on my cases', deadlineReminders: 'Deadline Reminders', deadlineRemindersDescription: 'Notify me about upcoming deadlines', newsAndUpdates: 'News & Updates', newsAndUpdatesDescription: 'Receive news about NayaSathi features and updates', twoFactorAuthentication: 'Two-Factor Authentication', extraSecurityLayer: 'Add an extra layer of security to your account', enableTwoFactor: 'Enable 2FA', activeSessions: 'Active Sessions', manageConnectedDevices: 'Manage devices connected to your account', viewSessions: 'View Sessions', deleteAccountDescription: 'Permanently delete your account and all associated data. This action cannot be undone.', faqUploadQuestion: 'How do I upload a document?', faqUploadAnswer: 'Navigate to Analyze Document and drag and drop your file or browse for it. PDF, JPG, and PNG files up to 10 MB are supported.', faqFormatsQuestion: 'What document formats are supported?', faqFormatsAnswer: 'PDF, JPG, and PNG files up to 10 MB are supported.', faqTimeQuestion: 'How long does analysis take?', faqTimeAnswer: 'Most documents are analyzed within seconds. Complex documents may take a few minutes.', faqSecurityQuestion: 'Is my data secure?', faqSecurityAnswer: 'Your documents are intended to remain private to your account and are protected by application safeguards.', faqExportQuestion: 'Can I export my analysis?', faqExportAnswer: 'Yes, you can download analysis results as a PDF from the analysis result page.',
    aiCivicGuidance: 'AI-Powered Civic Guidance', privateByDesign: 'Private by design', pdfPages: 'PDF / 4 pages', publicServiceNotice: 'Notice of public service', aiAnalysis: 'AI Analysis', keyDeadline: 'Key deadline and eligibility requirements identified.', evidence: 'Evidence', identityProof: 'Identity proof', addressProofNeeded: 'Address proof needed', recommendation: 'Recommendation', submitEvidence: 'Submit supporting evidence before 15 Sep.', analysisPercent: 'Analysis 80%', clear: 'Clear', evidenceBased: 'Evidence-Based', actionOriented: 'Action-Oriented',
    login: 'Login',
    getStarted: 'Get Started',
    brandDescription: 'Making civic information easier to understand and act on.',
    heroTitle: 'Understand Your Rights.',
    heroTitleAccent: 'Take the Right Action.',
    heroDescription: 'NayaSathi helps you understand complex civic and legal documents, identify relevant evidence, and turn confusing information into clear next steps.',
    analyzeDocumentCta: 'Analyze Your Document',
    seeHowItWorks: 'See How It Works',
    builtForIndia: 'Built for India',
    workspace: 'NayaSathi workspace',
    liveAnalysis: 'LIVE ANALYSIS',
    approach: 'The NayaSathi approach',
    featuresTitle: 'From confusing documents to clear action.',
    builtToMakeCivic: 'Built to make civic information easier to understand',
    clearPath: 'A clearer path forward',
    processTitle: 'A simple process for a complex world.',
    designedAround: 'Designed around you',
    benefitsTitle: 'Built for people, not legal jargon.',
    ctaTitle: 'Your documents contain information. NayaSathi helps you understand it.',
    voiceTitle: 'Ask by voice',
    voiceDescription: 'Describe your question about a civic or legal document.',
    voiceUnsupported: 'Voice input is not supported in this browser. You can still upload a document above.',
    transcriptPlaceholder: 'Your transcript will appear here.',
    startSpeaking: 'Start speaking',
    tryAgain: 'Try again',
    stopListening: 'Stop listening',
    useQuestion: 'Use question',
    welcomeBack: 'Welcome back',
    dashboardDescription: 'Manage your cases and documents in one place',
    activeCases: 'Active Cases',
    actionRequired: 'Action Required',
    upcomingDeadlines: 'Upcoming Deadlines',
    completed: 'Completed',
    recentCases: 'Recent Cases',
    viewAll: 'View All',
    progress: 'Progress',
    nextAction: 'Next Action',
    open: 'Open',
    loadingCases: 'Loading cases...',
    dashboardUnavailable: 'Dashboard unavailable',
    noCases: 'No cases yet',
    uploadDocument: 'Upload Document',
    quickActions: 'Quick Actions',
    gettingStarted: 'Getting Started',
    needHelp: 'Need Help?',
    contactSupport: 'Contact Support',
    analyzeTitle: 'Analyze a Document',
    analyzeDescription: 'Upload a notice, letter, application, or other document to understand what it means and what you should do next.',
    uploadSuccess: 'Document Uploaded Successfully!',
    analyzingRedirect: "Analyzing your document. You'll be redirected to results shortly...",
    uploadFailed: 'Upload Failed',
    uploadError: 'There was an error uploading your document. Please try again.',
    dragDrop: 'Drag and drop your document here',
    browseFiles: 'Browse Files',
    uploadAnalyze: 'Upload & Analyze',
    supportedFormats: 'Supported formats',
    whatWeAnalyze: 'What we analyze',
    analysisResult: 'Analysis Result',
    decision: 'Decision',
    confidenceLevel: 'Confidence Level',
    whatThisMeans: 'What This Means',
    evidenceChecklist: 'Evidence Checklist',
    requiredDocuments: 'Required and supporting documents for your application',
    noAnalysis: 'No analysis available',
    summary: 'Summary',
    recommendations: 'Recommendations',
    home: 'Home',
    dashboard: 'Dashboard',
    myCases: 'My Cases',
    analyzeDocument: 'Analyze Document',
    documents: 'Documents',
    timeline: 'Timeline',
    settings: 'Settings',
    help: 'Help',
    logout: 'Logout',
    noLanguagesFound: 'No languages found', closeNavigation: 'Close navigation', toggleSidebar: 'Toggle sidebar', notifications: 'Notifications', switchTheme: 'Switch theme', clearVoiceInput: 'Clear voice input', listening: 'Listening...', closeModal: 'Close modal', confirm: 'Confirm', cancel: 'Cancel',
    casesDescription: 'Manage and track all your cases', searchCases: 'Search cases...', all: 'All', active: 'Active', pending: 'Pending', updated: 'Updated', deadline: 'Deadline', openCase: 'Open Case', noCasesFound: 'No cases found', adjustFilters: 'Try adjusting your filters or create a new case', createNewCase: 'Create New Case', casesUnavailable: 'Cases unavailable', casesLoadError: 'We could not load your cases from the server.',
    documentsDescription: 'Manage all your uploaded documents', searchDocuments: 'Search documents...', loadingDocuments: 'Loading documents...', documentsUnavailable: 'Documents unavailable', documentsLoadError: 'We could not load your documents from the server.', document: 'Document', uploaded: 'Uploaded', noDocuments: 'No documents', startUploading: 'Start by uploading a document',
    signInDescription: 'Sign in to access your cases and documents', invalidCredentials: 'Invalid email or password. Please try again.', email: 'Email', password: 'Password', rememberMe: 'Remember me', forgotPassword: 'Forgot password?', signIn: 'Sign In', noAccount: "Don't have an account?", signUp: 'Sign up', invalidLoginResponse: 'Invalid login response',
    signupDescription: 'Join thousands using NayaSathi', fullName: 'Full Name', confirmPassword: 'Confirm Password', passwordMismatch: 'Passwords do not match', passwordLength: 'Password must be at least 8 characters', accountCreateFailed: 'Failed to create account. Please try again.', atLeastEight: 'At least 8 characters', agreeTerms: 'I agree to the Terms of Service and Privacy Policy', createAccount: 'Create Account', haveAccount: 'Already have an account?',
    timelineDescription: 'Track important dates and events across all your cases', consumerComplaint: 'Consumer Complaint', documentUploaded: 'Document uploaded', analysisCompleted: 'Analysis completed', evidenceRequired: 'Evidence required', applicationDeadline: 'Application deadline', decisionPending: 'Decision pending',
    helpSupport: 'Help & Support', helpDescription: 'Find answers to common questions or contact our support team', emailSupport: 'Email Support', liveChat: 'Live Chat', supportHelp: 'Get help from our support team', chatSupport: 'Chat with our support team', openChat: 'Open Chat', faq: 'Frequently Asked Questions', needMoreHelp: 'Need More Help?', documentationDescription: 'Check out our full documentation', readDocumentation: 'Read Documentation',
    settingsDescription: 'Manage your account and preferences', accountSettings: 'Account Settings', accountDescription: 'Manage your account information', changePassword: 'Change Password', currentPassword: 'Current Password', newPassword: 'New Password', updatePassword: 'Update Password', languageRegion: 'Language & Region', preferredLanguage: 'Choose your preferred language', notificationsSettings: 'Notifications', notificationDescription: 'Manage your notification preferences', saveChanges: 'Save Changes', security: 'Security', securityDescription: 'Manage your security settings', dangerZone: 'Danger Zone', deleteAccount: 'Delete Account',
    navFeatures: 'Features', navHowItWorks: 'How It Works', navBenefits: 'Benefits', navAbout: 'About', featureDocumentAnalysis: 'Document Analysis', featureDocumentAnalysisDescription: 'Upload notices, letters, PDFs and other documents and understand what they mean.', featureEvidenceChecklist: 'Evidence Checklist', featureEvidenceChecklistDescription: 'Identify important facts, missing information and supporting evidence.', featureDecisionGuidance: 'AI Decision Guidance', featureDecisionGuidanceDescription: 'Receive a clear explanation of possible outcomes and relevant considerations.', featureActionPlan: 'Action Plan', featureActionPlanDescription: 'Turn analysis into practical next steps you can take with confidence.', benefitSimple: 'Simple explanations', benefitSimpleDescription: 'Plain language for complex civic information.', benefitMultilingual: 'Multilingual support', benefitMultilingualDescription: 'Built for people across India.', benefitEvidence: 'Evidence-based guidance', benefitEvidenceDescription: 'Grounded in the details of your documents.', benefitCaseTracking: 'Case tracking', benefitCaseTrackingDescription: 'Keep documents, actions and progress together.', benefitTimeline: 'Timeline visualization', benefitTimelineDescription: 'See what happened and what comes next.', benefitActionPlans: 'Action plans', benefitActionPlansDescription: 'Move from uncertainty to a clear next step.', stepUpload: 'Upload', stepUploadDescription: 'Upload your document or describe your problem.', stepAnalyze: 'Analyze', stepAnalyzeDescription: 'CivicGuide AI analyzes the information.', stepUnderstand: 'Understand', stepUnderstandDescription: 'Get a clear explanation and evidence checklist.', stepAct: 'Act', stepActDescription: 'Follow practical next steps.',
    backToCases: 'Back to cases', loadingCaseDetails: 'Loading case details...', caseUnavailable: 'Case unavailable', caseDetails: 'Case details', noDeadline: 'No deadline set', relatedDocuments: 'Related documents', noDocumentsAttached: 'No documents attached.', noTimelineEvents: 'No timeline events yet.',
    dashboardUploadHint: 'Start by uploading a legal document', dashboardAnalysis: 'Get instant analysis', dashboardAnalysisHint: 'AI analyzes your document in seconds', dashboardActionHint: 'Follow recommendations and track progress',
  },
  te: {
      product: 'ఉత్పత్తి', support: 'మద్దతు', legal: 'చట్టపరమైన', builtForClearerAction: 'స్పష్టమైన పౌర చర్య కోసం నిర్మించబడింది.', documentTypePurpose: 'పత్రం రకం మరియు ఉద్దేశ్యం', keyDecisionsRequirements: 'ముఖ్య నిర్ణయాలు మరియు అవసరాలు', missingInformation: 'లేని సమాచారం', importantDatesDeadlines: 'ముఖ్య తేదీలు మరియు గడువులు', recommendedNextSteps: 'సిఫార్సు చేసిన తదుపరి చర్యలు', maximumFileSize: 'గరిష్ట ఫైల్ పరిమాణం: 10 MB',
    language: 'భాష', theme: 'థీమ్', themeDescription: 'మొత్తం అప్లికేషన్ కోసం దృశ్య శైలిని ఎంచుకోండి.', themeLight: 'లైట్', themeDark: 'డార్క్', themeSystem: 'సిస్టమ్', themeCivicBlue: 'సివిక్ బ్లూ', themeIndianCivic: 'ఇండియన్ సివిక్', themeMidnight: 'మిడ్‌నైట్', themeForest: 'ఫారెస్ట్', themeSlate: 'స్లేట్', statusActive: 'క్రియాశీలం', statusCompleted: 'పూర్తయింది', statusPending: 'పెండింగ్‌లో ఉంది', statusError: 'లోపం', statusWarning: 'హెచ్చరిక', statusReviewRequired: 'సమీక్ష అవసరం', statusActionRequired: 'చర్య అవసరం',
    aiCivicGuidance: 'కృత్రిమ మేధస్సు ఆధారిత పౌర మార్గదర్శకం', privateByDesign: 'గోప్యతకు ప్రాధాన్యం', pdfPages: 'PDF / 4 పేజీలు', publicServiceNotice: 'ప్రజా సేవా నోటీసు', aiAnalysis: 'AI విశ్లేషణ', keyDeadline: 'ముఖ్య గడువు మరియు అర్హత అవసరాలు గుర్తించబడ్డాయి.', evidence: 'ఆధారాలు', identityProof: 'గుర్తింపు రుజువు', addressProofNeeded: 'చిరునామా రుజువు అవసరం', recommendation: 'సిఫార్సు', submitEvidence: 'సహాయక ఆధారాలను సెప్టెంబర్ 15లోపు సమర్పించండి.', analysisPercent: 'విశ్లేషణ 80%', clear: 'స్పష్టం', evidenceBased: 'ఆధార ఆధారితం', actionOriented: 'చర్య ఆధారితం',
    login: 'లాగిన్',
    getStarted: 'ప్రారంభించండి',
    brandDescription: 'పౌర సమాచారాన్ని అర్థం చేసుకుని చర్య తీసుకోవడం సులభం చేస్తుంది.',
    heroTitle: 'మీ హక్కులను అర్థం చేసుకోండి.',
    heroTitleAccent: 'సరైన చర్య తీసుకోండి.',
    heroDescription: 'NayaSathi సంక్లిష్టమైన పౌర మరియు న్యాయ పత్రాలను అర్థం చేసుకోవడంలో, అవసరమైన ఆధారాలను గుర్తించడంలో సహాయపడుతుంది.',
    analyzeDocumentCta: 'మీ పత్రాన్ని విశ్లేషించండి',
    seeHowItWorks: 'ఇది ఎలా పనిచేస్తుందో చూడండి',
    builtForIndia: 'భారతదేశం కోసం నిర్మించబడింది',
    workspace: 'NayaSathi వర్క్‌స్పేస్',
    liveAnalysis: 'ప్రత్యక్ష విశ్లేషణ',
    approach: 'NayaSathi విధానం',
    featuresTitle: 'గందరగోళ పత్రాల నుంచి స్పష్టమైన చర్య వరకు.',
    builtToMakeCivic: 'పౌర సమాచారాన్ని అర్థం చేసుకోవడం సులభం చేయడానికి నిర్మించబడింది',
    clearPath: 'ముందుకు వెళ్లేందుకు స్పష్టమైన మార్గం',
    processTitle: 'సంక్లిష్ట ప్రపంచానికి సరళమైన ప్రక్రియ.',
    designedAround: 'మీ కోసం రూపొందించబడింది',
    benefitsTitle: 'చట్టపరమైన పదజాలం కోసం కాదు, ప్రజల కోసం.',
    ctaTitle: 'మీ పత్రాల్లో సమాచారం ఉంది. దాన్ని అర్థం చేసుకోవడానికి NayaSathi సహాయపడుతుంది.',
    voiceTitle: 'వాయిస్ ద్వారా అడగండి',
    voiceDescription: 'పౌర లేదా న్యాయ పత్రం గురించి మీ ప్రశ్నను వివరించండి.',
    voiceUnsupported: 'ఈ బ్రౌజర్‌లో వాయిస్ ఇన్‌పుట్‌కు మద్దతు లేదు. మీరు పైన పత్రాన్ని అప్‌లోడ్ చేయవచ్చు.',
    transcriptPlaceholder: 'మీ లిప్యంతరీకరణ ఇక్కడ కనిపిస్తుంది.',
    startSpeaking: 'మాట్లాడటం ప్రారంభించండి',
    tryAgain: 'మళ్లీ ప్రయత్నించండి',
    stopListening: 'వినడాన్ని ఆపండి',
    useQuestion: 'ప్రశ్నను ఉపయోగించండి',
    welcomeBack: 'తిరిగి స్వాగతం',
    dashboardDescription: 'మీ కేసులు మరియు పత్రాలను ఒకే చోట నిర్వహించండి',
    activeCases: 'క్రియాశీల కేసులు',
    actionRequired: 'చర్య అవసరం',
    upcomingDeadlines: 'రాబోయే గడువులు',
    completed: 'పూర్తయినవి',
    recentCases: 'ఇటీవలి కేసులు',
    viewAll: 'అన్నీ చూడండి',
    progress: 'పురోగతి',
    nextAction: 'తదుపరి చర్య',
    open: 'తెరవండి',
    loadingCases: 'కేసులు లోడ్ అవుతున్నాయి...',
    dashboardUnavailable: 'డ్యాష్‌బోర్డ్ అందుబాటులో లేదు',
    noCases: 'ఇంకా కేసులు లేవు',
    uploadDocument: 'పత్రాన్ని అప్‌లోడ్ చేయండి',
    quickActions: 'త్వరిత చర్యలు',
    gettingStarted: 'ప్రారంభించడం',
    needHelp: 'సహాయం కావాలా?',
    contactSupport: 'మద్దతును సంప్రదించండి',
    analyzeTitle: 'పత్రాన్ని విశ్లేషించండి',
    analyzeDescription: 'నోటీసు, లేఖ, దరఖాస్తు లేదా ఇతర పత్రాన్ని అప్‌లోడ్ చేసి దాని అర్థం మరియు తదుపరి చర్య తెలుసుకోండి.',
    uploadSuccess: 'పత్రం విజయవంతంగా అప్‌లోడ్ చేయబడింది!',
    analyzingRedirect: 'మీ పత్రాన్ని విశ్లేషిస్తున్నాము. ఫలితాలకు త్వరలో మళ్లించబడతారు...',
    uploadFailed: 'అప్‌లోడ్ విఫలమైంది',
    uploadError: 'మీ పత్రాన్ని అప్‌లోడ్ చేయడంలో లోపం జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి.',
    dragDrop: 'మీ పత్రాన్ని ఇక్కడికి లాగి వదలండి',
    browseFiles: 'ఫైళ్లను ఎంచుకోండి',
    uploadAnalyze: 'అప్‌లోడ్ చేసి విశ్లేషించండి',
    supportedFormats: 'మద్దతు ఉన్న ఫార్మాట్‌లు',
    whatWeAnalyze: 'మేము విశ్లేషించేది',
    analysisResult: 'విశ్లేషణ ఫలితం',
    decision: 'నిర్ణయం',
    confidenceLevel: 'నమ్మక స్థాయి',
    whatThisMeans: 'దీని అర్థం',
    evidenceChecklist: 'ఆధారాల చెక్‌లిస్ట్',
    requiredDocuments: 'మీ దరఖాస్తుకు అవసరమైన మరియు సహాయక పత్రాలు',
    noAnalysis: 'విశ్లేషణ అందుబాటులో లేదు',
    summary: 'సారాంశం',
    recommendations: 'సిఫార్సులు',
    home: 'హోమ్',
    dashboard: 'డాష్‌బోర్డ్',
    myCases: 'నా కేసులు',
    analyzeDocument: 'పత్రాన్ని విశ్లేషించండి',
    documents: 'పత్రాలు',
    timeline: 'టైమ్‌లైన్',
    settings: 'సెట్టింగ్‌లు',
    help: 'సహాయం',
    logout: 'లాగ్ అవుట్',
    navFeatures: 'ఫీచర్లు', navHowItWorks: 'ఇది ఎలా పనిచేస్తుంది', navBenefits: 'ప్రయోజనాలు', navAbout: 'మా గురించి', featureDocumentAnalysis: 'పత్ర విశ్లేషణ', featureDocumentAnalysisDescription: 'నోటీసులు, లేఖలు, PDFలు మరియు ఇతర పత్రాలను అర్థం చేసుకోండి.', featureEvidenceChecklist: 'ఆధారాల జాబితా', featureEvidenceChecklistDescription: 'ముఖ్యమైన విషయాలు, లోపించిన సమాచారం మరియు సహాయక ఆధారాలను గుర్తించండి.', featureDecisionGuidance: 'AI నిర్ణయ మార్గదర్శకం', featureDecisionGuidanceDescription: 'సాధ్యమైన ఫలితాలు మరియు ముఖ్యమైన అంశాలపై స్పష్టమైన వివరణ పొందండి.', featureActionPlan: 'చర్య ప్రణాళిక', featureActionPlanDescription: 'విశ్లేషణను ఆచరణాత్మక తదుపరి చర్యలుగా మార్చండి.', stepUpload: 'అప్‌లోడ్', stepUploadDescription: 'మీ పత్రాన్ని అప్‌లోడ్ చేయండి లేదా సమస్యను వివరించండి.', stepAnalyze: 'విశ్లేషించండి', stepAnalyzeDescription: 'CivicGuide AI సమాచారాన్ని విశ్లేషిస్తుంది.', stepUnderstand: 'అర్థం చేసుకోండి', stepUnderstandDescription: 'స్పష్టమైన వివరణ మరియు ఆధారాల జాబితాను పొందండి.', stepAct: 'చర్య తీసుకోండి', stepActDescription: 'ఆచరణాత్మక తదుపరి చర్యలను అనుసరించండి.',
  },
  hi: {
      product: 'उत्पाद', support: 'सहायता', legal: 'कानूनी', builtForClearerAction: 'स्पष्ट नागरिक कार्रवाई के लिए बनाया गया।', documentTypePurpose: 'दस्तावेज़ का प्रकार और उद्देश्य', keyDecisionsRequirements: 'मुख्य निर्णय और आवश्यकताएं', missingInformation: 'गुम जानकारी', importantDatesDeadlines: 'महत्वपूर्ण तिथियां और समय-सीमाएं', recommendedNextSteps: 'अनुशंसित अगले कदम', maximumFileSize: 'अधिकतम फ़ाइल आकार: 10 MB',
    language: 'भाषा', statusActive: 'सक्रिय', statusCompleted: 'पूर्ण', statusPending: 'लंबित', statusError: 'त्रुटि', statusWarning: 'चेतावनी', statusReviewRequired: 'समीक्षा आवश्यक', statusActionRequired: 'कार्रवाई आवश्यक', defaultDocumentName: 'उपभोक्ता शिकायत - आवेदन पत्र', download: 'डाउनलोड', share: 'साझा करें', timelineAssociated: 'संबंधित मामले की समयरेखा उपलब्ध है।', statusLabel: 'स्थिति', missingDocuments: 'गुम दस्तावेज़', requiredToProceed: 'आगे बढ़ने के लिए आवश्यक', gatherDocuments: 'दस्तावेज़ जुटाएं', collectMissingEvidence: 'सभी गुम प्रमाण एकत्र करें', submitApplication: 'आवेदन जमा करें', beforeDeadline: 'समय-सीमा से पहले', trackProgress: 'प्रगति देखें', monitorStatus: 'स्थिति यहां देखें', uploadDocuments: 'दस्तावेज़ अपलोड करें', createCase: 'मामला बनाएं', uploading: 'अपलोड हो रहा है...', analyzingDocument: 'दस्तावेज़ का विश्लेषण हो रहा है...', or: 'या', supportedFileTypes: 'PDF, JPG या PNG • अधिकतम 10 MB', removeFile: 'फ़ाइल हटाएं', there: 'वहां', createFirstCase: 'दस्तावेज़ अपलोड करके अपना पहला मामला बनाएं', documentationOrSupport: 'दस्तावेज़ देखें या सहायता से संपर्क करें', emailPlaceholder: 'आपका ईमेल', namePlaceholder: 'आपका पूरा नाम', continuingAgreement: 'जारी रखकर आप सहमत हैं', termsOfService: 'सेवा की शर्तों', andAcknowledge: 'और स्वीकार करते हैं', privacyPolicy: 'गोपनीयता नीति', caseUpdates: 'मामले के अपडेट', caseUpdatesDescription: 'आपके मामलों में अपडेट होने पर सूचित करें', deadlineReminders: 'समय-सीमा की याद दिलाना', deadlineRemindersDescription: 'आने वाली समय-सीमाओं के बारे में सूचित करें', newsAndUpdates: 'समाचार और अपडेट', newsAndUpdatesDescription: 'NayaSathi की सुविधाओं और अपडेट के बारे में समाचार पाएं', twoFactorAuthentication: 'दो-चरणीय प्रमाणीकरण', extraSecurityLayer: 'अपने खाते में सुरक्षा की एक अतिरिक्त परत जोड़ें', enableTwoFactor: '2FA सक्षम करें', activeSessions: 'सक्रिय सत्र', manageConnectedDevices: 'अपने खाते से जुड़े उपकरणों को प्रबंधित करें', viewSessions: 'सत्र देखें', deleteAccountDescription: 'अपना खाता और उससे जुड़ा सभी डेटा स्थायी रूप से हटाएं। यह कार्रवाई वापस नहीं की जा सकती।', faqUploadQuestion: 'दस्तावेज़ कैसे अपलोड करें?', faqUploadAnswer: 'दस्तावेज़ विश्लेषण पर जाएं और फ़ाइल खींचकर छोड़ें या ब्राउज़ करें। 10 MB तक PDF, JPG और PNG समर्थित हैं।', faqFormatsQuestion: 'कौन से दस्तावेज़ प्रारूप समर्थित हैं?', faqFormatsAnswer: '10 MB तक PDF, JPG और PNG फ़ाइलें समर्थित हैं।', faqTimeQuestion: 'विश्लेषण में कितना समय लगता है?', faqTimeAnswer: 'अधिकांश दस्तावेज़ कुछ सेकंड में विश्लेषित हो जाते हैं। जटिल दस्तावेज़ों में कुछ मिनट लग सकते हैं।', faqSecurityQuestion: 'क्या मेरा डेटा सुरक्षित है?', faqSecurityAnswer: 'आपके दस्तावेज़ आपके खाते तक सीमित रहने के लिए हैं और एप्लिकेशन सुरक्षा उपायों से सुरक्षित हैं।', faqExportQuestion: 'क्या मैं अपना विश्लेषण निर्यात कर सकता हूं?', faqExportAnswer: 'हां, आप विश्लेषण परिणाम पेज से परिणाम PDF के रूप में डाउनलोड कर सकते हैं।',
    aiCivicGuidance: 'AI-संचालित नागरिक मार्गदर्शन', privateByDesign: 'गोपनीयता के साथ बनाया गया', pdfPages: 'PDF / 4 पृष्ठ', publicServiceNotice: 'सार्वजनिक सेवा की सूचना', aiAnalysis: 'AI विश्लेषण', keyDeadline: 'मुख्य समय-सीमा और पात्रता आवश्यकताएं पहचानी गईं।', evidence: 'सबूत', identityProof: 'पहचान का प्रमाण', addressProofNeeded: 'पते का प्रमाण आवश्यक', recommendation: 'सिफारिश', submitEvidence: 'सहायक प्रमाण 15 सितंबर से पहले जमा करें।', analysisPercent: 'विश्लेषण 80%', clear: 'स्पष्ट', evidenceBased: 'सबूत-आधारित', actionOriented: 'कार्रवाई-उन्मुख',
    login: 'लॉगिन',
    getStarted: 'शुरू करें',
    brandDescription: 'नागरिक जानकारी को समझना और उस पर कार्रवाई करना आसान बनाएं।',
    heroTitle: 'अपने अधिकारों को समझें।',
    heroTitleAccent: 'सही कदम उठाएं।',
    heroDescription: 'NayaSathi जटिल नागरिक और कानूनी दस्तावेज़ों को समझने, ज़रूरी सबूत पहचानने और स्पष्ट अगले कदम तय करने में मदद करता है।',
    analyzeDocumentCta: 'अपने दस्तावेज़ का विश्लेषण करें',
    seeHowItWorks: 'यह कैसे काम करता है',
    builtForIndia: 'भारत के लिए बनाया गया',
    workspace: 'NayaSathi कार्यक्षेत्र',
    liveAnalysis: 'लाइव विश्लेषण',
    approach: 'NayaSathi का तरीका',
    featuresTitle: 'उलझे दस्तावेज़ों से स्पष्ट कार्रवाई तक।',
    builtToMakeCivic: 'नागरिक जानकारी को समझना आसान बनाने के लिए बनाया गया',
    clearPath: 'आगे बढ़ने का स्पष्ट रास्ता',
    processTitle: 'जटिल दुनिया के लिए सरल प्रक्रिया।',
    designedAround: 'आपको ध्यान में रखकर बनाया गया',
    benefitsTitle: 'कानूनी शब्दजाल के लिए नहीं, लोगों के लिए।',
    ctaTitle: 'आपके दस्तावेज़ों में जानकारी है। NayaSathi उसे समझने में आपकी मदद करता है।',
    voiceTitle: 'आवाज़ से पूछें',
    voiceDescription: 'नागरिक या कानूनी दस्तावेज़ के बारे में अपना सवाल बताएं।',
    voiceUnsupported: 'इस ब्राउज़र में वॉइस इनपुट समर्थित नहीं है। आप ऊपर दस्तावेज़ अपलोड कर सकते हैं।',
    transcriptPlaceholder: 'आपका ट्रांसक्रिप्ट यहां दिखाई देगा।',
    startSpeaking: 'बोलना शुरू करें',
    tryAgain: 'फिर कोशिश करें',
    stopListening: 'सुनना बंद करें',
    useQuestion: 'सवाल इस्तेमाल करें',
    welcomeBack: 'वापसी पर स्वागत है',
    dashboardDescription: 'अपने मामलों और दस्तावेज़ों को एक जगह प्रबंधित करें',
    activeCases: 'सक्रिय मामले',
    actionRequired: 'कार्रवाई आवश्यक',
    upcomingDeadlines: 'आगामी समय-सीमाएं',
    completed: 'पूर्ण',
    recentCases: 'हाल के मामले',
    viewAll: 'सभी देखें',
    progress: 'प्रगति',
    nextAction: 'अगला कदम',
    open: 'खोलें',
    loadingCases: 'मामले लोड हो रहे हैं...',
    dashboardUnavailable: 'डैशबोर्ड उपलब्ध नहीं है',
    noCases: 'अभी कोई मामला नहीं है',
    uploadDocument: 'दस्तावेज़ अपलोड करें',
    quickActions: 'त्वरित कार्रवाई',
    gettingStarted: 'शुरुआत करें',
    needHelp: 'मदद चाहिए?',
    contactSupport: 'सहायता से संपर्क करें',
    analyzeTitle: 'दस्तावेज़ का विश्लेषण करें',
    analyzeDescription: 'नोटिस, पत्र, आवेदन या अन्य दस्तावेज़ अपलोड करके उसका अर्थ और अगला कदम समझें।',
    uploadSuccess: 'दस्तावेज़ सफलतापूर्वक अपलोड हुआ!',
    analyzingRedirect: 'आपके दस्तावेज़ का विश्लेषण हो रहा है। आपको जल्द ही परिणामों पर भेजा जाएगा...',
    uploadFailed: 'अपलोड विफल',
    uploadError: 'दस्तावेज़ अपलोड करते समय त्रुटि हुई। कृपया फिर कोशिश करें।',
    dragDrop: 'अपना दस्तावेज़ यहां खींचकर छोड़ें',
    browseFiles: 'फ़ाइलें ब्राउज़ करें',
    uploadAnalyze: 'अपलोड और विश्लेषण करें',
    supportedFormats: 'समर्थित प्रारूप',
    whatWeAnalyze: 'हम क्या विश्लेषण करते हैं',
    analysisResult: 'विश्लेषण परिणाम',
    decision: 'निर्णय',
    confidenceLevel: 'विश्वास स्तर',
    whatThisMeans: 'इसका अर्थ',
    evidenceChecklist: 'सबूत चेकलिस्ट',
    requiredDocuments: 'आपके आवेदन के लिए आवश्यक और सहायक दस्तावेज़',
    noAnalysis: 'कोई विश्लेषण उपलब्ध नहीं है',
    summary: 'सारांश',
    recommendations: 'सिफारिशें',
    home: 'होम',
    dashboard: 'डैशबोर्ड',
    myCases: 'मेरे मामले',
    analyzeDocument: 'दस्तावेज़ का विश्लेषण करें',
    documents: 'दस्तावेज़',
    timeline: 'समयरेखा',
    settings: 'सेटिंग्स',
    help: 'सहायता',
    logout: 'लॉग आउट',
    navFeatures: 'सुविधाएं', navHowItWorks: 'यह कैसे काम करता है', navBenefits: 'लाभ', navAbout: 'हमारे बारे में', featureDocumentAnalysis: 'दस्तावेज़ विश्लेषण', featureDocumentAnalysisDescription: 'नोटिस, पत्र, PDF और अन्य दस्तावेज़ों को समझें।', featureEvidenceChecklist: 'सबूत चेकलिस्ट', featureEvidenceChecklistDescription: 'महत्वपूर्ण तथ्य, अधूरी जानकारी और सहायक प्रमाण पहचानें।', featureDecisionGuidance: 'AI निर्णय मार्गदर्शन', featureDecisionGuidanceDescription: 'संभावित परिणामों और महत्वपूर्ण बातों की स्पष्ट व्याख्या पाएं।', featureActionPlan: 'कार्य योजना', featureActionPlanDescription: 'विश्लेषण को व्यावहारिक अगले कदमों में बदलें।', stepUpload: 'अपलोड', stepUploadDescription: 'अपना दस्तावेज़ अपलोड करें या समस्या बताएं।', stepAnalyze: 'विश्लेषण', stepAnalyzeDescription: 'CivicGuide AI जानकारी का विश्लेषण करता है।', stepUnderstand: 'समझें', stepUnderstandDescription: 'स्पष्ट व्याख्या और सबूत चेकलिस्ट पाएं।', stepAct: 'कार्रवाई करें', stepActDescription: 'व्यावहारिक अगले कदमों का पालन करें।',
  },
};

const navigationTranslations: Partial<Record<SupportedLanguage, Partial<Record<TranslationKey, string>>>> = {
  as: { home: 'ঘৰ', dashboard: 'ডেশ্বব’ৰ্ড', myCases: 'মোৰ গোচৰ', analyzeDocument: 'নথি বিশ্লেষণ', documents: 'নথিপত্ৰ', timeline: 'সময়ৰেখা', settings: 'ছেটিংছ', help: 'সহায়', logout: 'লগ আউট' },
  bn: { home: 'হোম', dashboard: 'ড্যাশবোর্ড', myCases: 'আমার মামলা', analyzeDocument: 'নথি বিশ্লেষণ', documents: 'নথিপত্র', timeline: 'সময়রেখা', settings: 'সেটিংস', help: 'সহায়তা', logout: 'লগ আউট' },
  brx: { home: 'हों', dashboard: 'डैशबोर्ड', myCases: 'आंनि केस', analyzeDocument: 'दस्तावेज विश्लेषण', documents: 'दस्तावेज', timeline: 'समय रेखा', settings: 'सेटिंग', help: 'मदद', logout: 'लॉग आउट' },
  doi: { home: 'घर', dashboard: 'डैशबोर्ड', myCases: 'मेरे मामले', analyzeDocument: 'दस्तावेज विश्लेषण', documents: 'दस्तावेज', timeline: 'समयरेखा', settings: 'सेटिंगां', help: 'मदद', logout: 'लॉग आउट' },
  gu: { home: 'હોમ', dashboard: 'ડેશબોર્ડ', myCases: 'મારા કેસ', analyzeDocument: 'દસ્તાવેજનું વિશ્લેષણ', documents: 'દસ્તાવેજો', timeline: 'સમયરેખા', settings: 'સેટિંગ્સ', help: 'મદદ', logout: 'લૉગ આઉટ' },
  kn: { home: 'ಮುಖಪುಟ', dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್', myCases: 'ನನ್ನ ಪ್ರಕರಣಗಳು', analyzeDocument: 'ದಾಖಲೆ ವಿಶ್ಲೇಷಣೆ', documents: 'ದಾಖಲೆಗಳು', timeline: 'ಸಮಯರೇಖೆ', settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು', help: 'ಸಹಾಯ', logout: 'ಲಾಗ್ ಔಟ್' },
  ks: { home: 'گَر', dashboard: 'ڈیش بورڈ', myCases: 'مےٚ کیس', analyzeDocument: 'دستاویز تجزیہ', documents: 'دستاویز', timeline: 'ٹایم لاین', settings: 'ترتیبات', help: 'مدد', logout: 'لاگ آؤٹ' },
  kok: { home: 'मुखेल पान', dashboard: 'डॅशबोर्ड', myCases: 'म्हजे खटले', analyzeDocument: 'कागदपत्र विश्लेषण', documents: 'कागदपत्रां', timeline: 'वेळरेखा', settings: 'मांडणी', help: 'मजत', logout: 'लॉग आऊट' },
  mai: { home: 'घर', dashboard: 'डैशबोर्ड', myCases: 'हमर मामला', analyzeDocument: 'दस्तावेज विश्लेषण', documents: 'दस्तावेज', timeline: 'समयरेखा', settings: 'सेटिंग', help: 'सहायता', logout: 'लॉग आउट' },
  ml: { home: 'ഹോം', dashboard: 'ഡാഷ്‌ബോർഡ്', myCases: 'എന്റെ കേസുകൾ', analyzeDocument: 'രേഖ വിശകലനം', documents: 'രേഖകൾ', timeline: 'ടൈംലൈൻ', settings: 'ക്രമീകരണങ്ങൾ', help: 'സഹായം', logout: 'പുറത്തുകടക്കുക' },
  mni: { home: 'নুপী', dashboard: 'ডেশব’র্ড', myCases: 'ঐখোয়গী কেইসশিং', analyzeDocument: 'দস্তাবেজ বিশ্লেষণ', documents: 'দস্তাবেজশিং', timeline: 'মতাং', settings: 'সেটিংশিং', help: 'মতেং', logout: 'লগ আউট' },
  mr: { home: 'मुख्यपृष्ठ', dashboard: 'डॅशबोर्ड', myCases: 'माझी प्रकरणे', analyzeDocument: 'कागदपत्राचे विश्लेषण', documents: 'कागदपत्रे', timeline: 'समयरेषा', settings: 'सेटिंग्ज', help: 'मदत', logout: 'लॉग आउट' },
  ne: { home: 'गृहपृष्ठ', dashboard: 'ड्यासबोर्ड', myCases: 'मेरा मुद्दाहरू', analyzeDocument: 'कागजात विश्लेषण', documents: 'कागजातहरू', timeline: 'समयरेखा', settings: 'सेटिङहरू', help: 'सहायता', logout: 'लग आउट' },
  or: { home: 'ମୁଖ୍ୟ ପୃଷ୍ଠା', dashboard: 'ଡ୍ୟାସବୋର୍ଡ', myCases: 'ମୋ ମାମଲା', analyzeDocument: 'ଦଲିଲ ବିଶ୍ଳେଷଣ', documents: 'ଦଲିଲଗୁଡ଼ିକ', timeline: 'ସମୟରେଖା', settings: 'ସେଟିଂସ୍', help: 'ସହାୟତା', logout: 'ଲଗ୍ ଆଉଟ୍' },
  pa: { home: 'ਘਰ', dashboard: 'ਡੈਸ਼ਬੋਰਡ', myCases: 'ਮੇਰੇ ਕੇਸ', analyzeDocument: 'ਦਸਤਾਵੇਜ਼ ਵਿਸ਼ਲੇਸ਼ਣ', documents: 'ਦਸਤਾਵੇਜ਼', timeline: 'ਸਮਾਂਰੇਖਾ', settings: 'ਸੈਟਿੰਗਾਂ', help: 'ਮਦਦ', logout: 'ਲੌਗ ਆਊਟ' },
  sa: { home: 'गृहम्', dashboard: 'दत्तांशफलकम्', myCases: 'मम प्रकरणानि', analyzeDocument: 'दस्तावेजविश्लेषणम्', documents: 'दस्तावेजानि', timeline: 'समयरेखा', settings: 'व्यवस्थाः', help: 'साहाय्यम्', logout: 'निर्गमनम्' },
  sat: { home: 'ओड़ाक्', dashboard: 'डैसबोर्ड', myCases: 'इञाक् केस', analyzeDocument: 'दस्तावेज विश्लेषण', documents: 'दस्तावेज', timeline: 'समय रेखा', settings: 'सेटिंग', help: 'मदद', logout: 'लॉग आउट' },
  sd: { home: 'گهر', dashboard: 'ڊيش بورڊ', myCases: 'منهنجا ڪيس', analyzeDocument: 'دستاويز جو تجزيو', documents: 'دستاويز', timeline: 'ٽائيم لائين', settings: 'سيٽنگون', help: 'مدد', logout: 'لاگ آئوٽ' },
  ta: { home: 'முகப்பு', dashboard: 'டாஷ்போர்டு', myCases: 'என் வழக்குகள்', analyzeDocument: 'ஆவணப் பகுப்பாய்வு', documents: 'ஆவணங்கள்', timeline: 'காலவரிசை', settings: 'அமைப்புகள்', help: 'உதவி', logout: 'வெளியேறு' },
  ur: { home: 'گھر', dashboard: 'ڈیش بورڈ', myCases: 'میرے مقدمات', analyzeDocument: 'دستاویز کا تجزیہ', documents: 'دستاویزات', timeline: 'ٹائم لائن', settings: 'ترتیبات', help: 'مدد', logout: 'لاگ آؤٹ' },
};

// Minimum complete identity copy for every supported locale. Page-specific copy
// continues to live in `translations`; this table prevents a selected locale from
// silently falling back to English for global controls and the landing hero.
const reviewTranslations: Partial<Record<SupportedLanguage, Partial<Record<TranslationKey, string>>>> = {
  en: {
    reviewsEyebrow: 'Community feedback', userReviews: 'User Reviews', reviewsSubtitle: 'See what users think about their NYAYGSATHI experience.', writeReview: 'Write a Review', loginToReview: 'Please log in to submit a review.', overallRating: 'Overall Rating', basedOn: 'Based on', reviewsCount: 'reviews', starShort: '★', all: 'All', stars: 'Stars', mostRecent: 'Most Recent', highestRated: 'Highest Rated', lowestRated: 'Lowest Rated', mostHelpful: 'Most Helpful', searchReviews: 'Search reviews...', loadingReviews: 'Loading reviews...', noReviewsYet: 'No reviews yet', firstReview: 'Be the first to share your experience with NYAYGSATHI.', verifiedUser: 'Verified User', helpful: 'Helpful', edit: 'Edit', delete: 'Delete', previous: 'Previous', next: 'Next', editReview: 'Edit Review', deleteReview: 'Delete Review', deleteReviewConfirm: 'Are you sure you want to delete this review?', reviewRating: 'Rating', reviewText: 'Review', reviewPlaceholder: 'Tell us about your experience with NYAYGSATHI', reviewCategory: 'Category (optional)', submitReview: 'Submit Review', reviewRatingRequired: 'Please select a rating.', reviewTextRequired: 'Please enter at least 10 characters.', reviewTooLong: 'Review is too long.', reviewsError: 'We could not load or save reviews. Please try again.',
  },
  te: {
    reviewsEyebrow: 'సమాజ అభిప్రాయం', userReviews: 'వినియోగదారుల సమీక్షలు', reviewsSubtitle: 'NYAYGSATHI అనుభవం గురించి వినియోగదారులు ఏమనుకుంటున్నారో చూడండి.', writeReview: 'సమీక్ష రాయండి', loginToReview: 'సమీక్ష సమర్పించడానికి దయచేసి లాగిన్ అవ్వండి.', overallRating: 'మొత్తం రేటింగ్', basedOn: 'ఆధారం', reviewsCount: 'సమీక్షలు', stars: 'నక్షత్రాలు', mostRecent: 'ఇటీవలి', highestRated: 'అత్యధిక రేటింగ్', lowestRated: 'అత్యల్ప రేటింగ్', mostHelpful: 'అత్యంత సహాయకరమైనవి', searchReviews: 'సమీక్షల్లో వెతకండి...', loadingReviews: 'సమీక్షలు లోడ్ అవుతున్నాయి...', noReviewsYet: 'ఇంకా సమీక్షలు లేవు', firstReview: 'NYAYGSATHI అనుభవాన్ని పంచుకున్న మొదటి వ్యక్తిగా ఉండండి.', verifiedUser: 'ధృవీకరించబడిన వినియోగదారు', helpful: 'సహాయకరమైనది', edit: 'సవరించండి', delete: 'తొలగించండి', previous: 'మునుపటి', next: 'తదుపరి', editReview: 'సమీక్షను సవరించండి', deleteReview: 'సమీక్షను తొలగించండి', reviewRating: 'రేటింగ్', reviewText: 'సమీక్ష', reviewPlaceholder: 'NYAYGSATHIతో మీ అనుభవం గురించి చెప్పండి', reviewCategory: 'వర్గం (ఐచ్ఛికం)', submitReview: 'సమీక్ష సమర్పించండి', reviewRatingRequired: 'దయచేసి రేటింగ్ ఎంచుకోండి.', reviewTextRequired: 'దయచేసి కనీసం 10 అక్షరాలు నమోదు చేయండి.', reviewTooLong: 'సమీక్ష చాలా పొడవుగా ఉంది.', reviewsError: 'సమీక్షలను లోడ్ చేయడం లేదా సేవ్ చేయడం సాధ్యపడలేదు.',
  },
  hi: {
    reviewsEyebrow: 'समुदाय की प्रतिक्रिया', userReviews: 'उपयोगकर्ता समीक्षाएं', reviewsSubtitle: 'NYAYGSATHI के अनुभव के बारे में उपयोगकर्ता क्या सोचते हैं, देखें।', writeReview: 'समीक्षा लिखें', loginToReview: 'समीक्षा भेजने के लिए कृपया लॉग इन करें।', overallRating: 'कुल रेटिंग', basedOn: 'आधार', reviewsCount: 'समीक्षाएं', stars: 'सितारे', mostRecent: 'सबसे नई', highestRated: 'सबसे अधिक रेटिंग', lowestRated: 'सबसे कम रेटिंग', mostHelpful: 'सबसे उपयोगी', searchReviews: 'समीक्षाएं खोजें...', loadingReviews: 'समीक्षाएं लोड हो रही हैं...', noReviewsYet: 'अभी कोई समीक्षा नहीं', firstReview: 'NYAYGSATHI का अनुभव साझा करने वाले पहले व्यक्ति बनें।', verifiedUser: 'सत्यापित उपयोगकर्ता', helpful: 'उपयोगी', edit: 'संपादित करें', delete: 'हटाएं', previous: 'पिछला', next: 'अगला', editReview: 'समीक्षा संपादित करें', deleteReview: 'समीक्षा हटाएं', reviewRating: 'रेटिंग', reviewText: 'समीक्षा', reviewPlaceholder: 'NYAYGSATHI के साथ अपने अनुभव के बारे में बताएं', reviewCategory: 'श्रेणी (वैकल्पिक)', submitReview: 'समीक्षा भेजें', reviewRatingRequired: 'कृपया रेटिंग चुनें।', reviewTextRequired: 'कृपया कम से कम 10 अक्षर लिखें।', reviewTooLong: 'समीक्षा बहुत लंबी है।', reviewsError: 'समीक्षाएं लोड या सेव नहीं हो सकीं।',
  },
};

const localeFallbacks: Record<SupportedLanguage, Partial<Record<TranslationKey, string>>> = {
  en: { ...reviewTranslations.en }, hi: { ...reviewTranslations.en, ...reviewTranslations.hi }, te: { ...reviewTranslations.en, ...reviewTranslations.te },
  as: { language: 'ভাষা', login: 'লগ ইন', getStarted: 'আৰম্ভ কৰক', heroTitle: 'আপোনাৰ অধিকাৰ বুজক।', heroTitleAccent: 'সঠিক পদক্ষেপ লওক।' },
  bn: { language: 'ভাষা', login: 'লগ ইন', getStarted: 'শুরু করুন', heroTitle: 'আপনার অধিকার বুঝুন।', heroTitleAccent: 'সঠিক পদক্ষেপ নিন।' },
  brx: { language: 'राव', login: 'लग इन', getStarted: 'जागाय', heroTitle: 'नोंथांनि अधिकारखौ बुजि लां।', heroTitleAccent: 'थिक खाबु लां।' },
  doi: { language: 'भाशा', login: 'लॉग इन', getStarted: 'शुरू करो', heroTitle: 'अपने हक समझो।', heroTitleAccent: 'स्हेई कदम चुक्को।' },
  gu: { language: 'ભાષા', login: 'લૉગ ઇન', getStarted: 'શરૂ કરો', heroTitle: 'તમારા અધિકારો સમજો.', heroTitleAccent: 'યોગ્ય પગલું લો.' },
  kn: { language: 'ಭಾಷೆ', login: 'ಲಾಗ್ ಇನ್', getStarted: 'ಪ್ರಾರಂಭಿಸಿ', heroTitle: 'ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.', heroTitleAccent: 'ಸರಿಯಾದ ಕ್ರಮ ತೆಗೆದುಕೊಳ್ಳಿ.' },
  ks: { language: 'زَبان', login: 'لاگ اِن', getStarted: 'شروع کٔریو', heroTitle: 'اپنے حق سمجھیو۔', heroTitleAccent: 'صحیح قدم اُٹھایو۔' },
  kok: { language: 'भास', login: 'लॉग इन', getStarted: 'सुरू करात', heroTitle: 'तुमचे हक्क समजून घेवचेत।', heroTitleAccent: 'योग्य पावल उचला।' },
  mai: { language: 'भाषा', login: 'लॉग इन', getStarted: 'शुरू करू', heroTitle: 'अपन अधिकार बुझू।', heroTitleAccent: 'सही कदम उठाबू।' },
  ml: { language: 'ഭാഷ', login: 'ലോഗിൻ', getStarted: 'ആരംഭിക്കുക', heroTitle: 'നിങ്ങളുടെ അവകാശങ്ങൾ മനസ്സിലാക്കുക.', heroTitleAccent: 'ശരിയായ നടപടി എടുക്കുക.' },
  mni: { language: 'ꯂꯣꯟ', login: 'ꯂꯣꯒ ꯏꯟ', getStarted: 'ꯍꯧꯒꯠꯂꯨ', heroTitle: 'ꯅꯍꯥꯛꯀꯤ ꯑꯅꯩꯕꯥ ꯈꯪꯕꯤꯌꯨ।', heroTitleAccent: 'ꯑꯌꯥꯝꯕꯥ ꯊꯧꯔꯝ ꯂꯧꯕꯤꯌꯨ।' },
  mr: { language: 'भाषा', login: 'लॉग इन', getStarted: 'सुरू करा', heroTitle: 'तुमचे हक्क समजून घ्या.', heroTitleAccent: 'योग्य कृती करा.' },
  ne: { language: 'भाषा', login: 'लग इन', getStarted: 'सुरु गर्नुहोस्', heroTitle: 'आफ्ना अधिकार बुझ्नुहोस्।', heroTitleAccent: 'सही कदम चाल्नुहोस्।' },
  or: { language: 'ଭାଷା', login: 'ଲଗ୍ ଇନ୍', getStarted: 'ଆରମ୍ଭ କରନ୍ତୁ', heroTitle: 'ଆପଣଙ୍କ ଅଧିକାର ବୁଝନ୍ତୁ।', heroTitleAccent: 'ସଠିକ୍ ପଦକ୍ଷେପ ନିଅନ୍ତୁ।' },
  pa: { language: 'ਭਾਸ਼ਾ', login: 'ਲੌਗ ਇਨ', getStarted: 'ਸ਼ੁਰੂ ਕਰੋ', heroTitle: 'ਆਪਣੇ ਅਧਿਕਾਰ ਸਮਝੋ।', heroTitleAccent: 'ਸਹੀ ਕਦਮ ਚੁੱਕੋ।' },
  sa: { language: 'भाषा', login: 'प्रवेशः', getStarted: 'आरभत', heroTitle: 'स्वाधिकारान् अवगच्छत।', heroTitleAccent: 'सम्यक् पदं गृह्णात।' },
  sat: { language: 'ᱯᱟᱹᱨᱥᱤ', login: 'ᱞᱚᱜ ᱤᱱ', getStarted: 'ᱮᱦᱚᱵ ᱢᱮ', heroTitle: 'ᱟᱢᱟᱜ ᱟᱫᱷᱤᱠᱟᱨ ᱵᱩᱡᱷᱟᱹᱣ ᱢᱮ।', heroTitleAccent: 'ᱴᱷᱤᱠ ᱵᱟᱹᱭᱥᱟᱹᱣ ᱦᱟᱛᱟᱣ ᱢᱮ।' },
  sd: { language: 'ٻولي', login: 'لاگ اِن', getStarted: 'شروع ڪريو', heroTitle: 'پنهنجا حق سمجهو۔', heroTitleAccent: 'صحيح قدم کڻو۔' },
  ta: { language: 'மொழி', login: 'உள்நுழைக', getStarted: 'தொடங்குங்கள்', heroTitle: 'உங்கள் உரிமைகளைப் புரிந்துகொள்ளுங்கள்.', heroTitleAccent: 'சரியான நடவடிக்கை எடுங்கள்.' },
  ur: { language: 'زبان', login: 'لاگ اِن', getStarted: 'شروع کریں', heroTitle: 'اپنے حقوق سمجھیں۔', heroTitleAccent: 'درست قدم اٹھائیں۔' },
};

const landingLocaleCopy: Partial<Record<SupportedLanguage, Partial<Record<TranslationKey, string>>>> = {
  as: { featureDocumentAnalysis: 'নথি বিশ্লেষণ', featureEvidenceChecklist: 'প্ৰমাণৰ তালিকা', featureDecisionGuidance: 'AI সিদ্ধান্ত সহায়', featureActionPlan: 'কাৰ্য পৰিকল্পনা', stepUpload: 'আপলোড', stepAnalyze: 'বিশ্লেষণ', stepUnderstand: 'বুজি লওক', stepAct: 'পদক্ষেপ লওক', featureDocumentAnalysisDescription: 'জাননী, চিঠি, PDF আৰু আন নথিৰ অৰ্থ বুজক।', featureEvidenceChecklistDescription: 'গুৰুত্বপূৰ্ণ তথ্য আৰু সহায়ক প্ৰমাণ চিনাক্ত কৰক।', featureDecisionGuidanceDescription: 'সম্ভাৱ্য ফলাফলৰ স্পষ্ট ব্যাখ্যা লাভ কৰক।', featureActionPlanDescription: 'বিশ্লেষণক ব্যৱহাৰিক পৰৱৰ্তী পদক্ষেপলৈ ৰূপান্তৰ কৰক।', stepUploadDescription: 'নথি আপলোড কৰক বা সমস্যা বৰ্ণনা কৰক।', stepAnalyzeDescription: 'CivicGuide AI-এ তথ্য বিশ্লেষণ কৰে।', stepUnderstandDescription: 'স্পষ্ট ব্যাখ্যা আৰু প্ৰমাণৰ তালিকা লাভ কৰক।', stepActDescription: 'ব্যৱহাৰিক পৰৱৰ্তী পদক্ষেপ অনুসৰণ কৰক।' },
  bn: { featureDocumentAnalysis: 'নথি বিশ্লেষণ', featureEvidenceChecklist: 'প্রমাণের তালিকা', featureDecisionGuidance: 'AI সিদ্ধান্ত নির্দেশনা', featureActionPlan: 'কর্মপরিকল্পনা', stepUpload: 'আপলোড', stepAnalyze: 'বিশ্লেষণ', stepUnderstand: 'বুঝুন', stepAct: 'পদক্ষেপ নিন', featureDocumentAnalysisDescription: 'নোটিস, চিঠি, PDF এবং অন্যান্য নথির অর্থ বুঝুন।', featureEvidenceChecklistDescription: 'গুরুত্বপূর্ণ তথ্য ও সহায়ক প্রমাণ চিহ্নিত করুন।', featureDecisionGuidanceDescription: 'সম্ভাব্য ফলাফলের স্পষ্ট ব্যাখ্যা পান।', featureActionPlanDescription: 'বিশ্লেষণকে ব্যবহারিক পরবর্তী পদক্ষেপে বদলান।', stepUploadDescription: 'নথি আপলোড করুন বা সমস্যাটি বর্ণনা করুন।', stepAnalyzeDescription: 'CivicGuide AI তথ্য বিশ্লেষণ করে।', stepUnderstandDescription: 'স্পষ্ট ব্যাখ্যা ও প্রমাণের তালিকা পান।', stepActDescription: 'ব্যবহারিক পরবর্তী পদক্ষেপ অনুসরণ করুন।' },
  gu: { featureDocumentAnalysis: 'દસ્તાવેજ વિશ્લેષણ', featureEvidenceChecklist: 'પુરાવાની યાદી', featureDecisionGuidance: 'AI નિર્ણય માર્ગદર્શન', featureActionPlan: 'કાર્ય યોજના', stepUpload: 'અપલોડ', stepAnalyze: 'વિશ્લેષણ', stepUnderstand: 'સમજો', stepAct: 'પગલું લો', featureDocumentAnalysisDescription: 'નોટિસ, પત્રો, PDF અને અન્ય દસ્તાવેજો સમજો.', featureEvidenceChecklistDescription: 'મહત્વપૂર્ણ માહિતી અને સહાયક પુરાવા ઓળખો.', featureDecisionGuidanceDescription: 'સંભવિત પરિણામોની સ્પષ્ટ સમજૂતી મેળવો.', featureActionPlanDescription: 'વિશ્લેષણને વ્યવહારુ આગળનાં પગલાંમાં ફેરવો.', stepUploadDescription: 'દસ્તાવેજ અપલોડ કરો અથવા સમસ્યા જણાવો.', stepAnalyzeDescription: 'CivicGuide AI માહિતીનું વિશ્લેષણ કરે છે.', stepUnderstandDescription: 'સ્પષ્ટ સમજૂતી અને પુરાવાની યાદી મેળવો.', stepActDescription: 'વ્યવહારુ આગળનાં પગલાં અનુસરો.' },
  kn: { featureDocumentAnalysis: 'ದಾಖಲೆ ವಿಶ್ಲೇಷಣೆ', featureEvidenceChecklist: 'ಪುರಾವೆಗಳ ಪಟ್ಟಿ', featureDecisionGuidance: 'AI ನಿರ್ಧಾರ ಮಾರ್ಗದರ್ಶನ', featureActionPlan: 'ಕ್ರಿಯಾ ಯೋಜನೆ', stepUpload: 'ಅಪ್‌ಲೋಡ್', stepAnalyze: 'ವಿಶ್ಲೇಷಿಸಿ', stepUnderstand: 'ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ', stepAct: 'ಕ್ರಮ ಕೈಗೊಳ್ಳಿ', featureDocumentAnalysisDescription: 'ನೋಟಿಸ್, ಪತ್ರಗಳು, PDF ಮತ್ತು ಇತರ ದಾಖಲೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.', featureEvidenceChecklistDescription: 'ಮುಖ್ಯ ಮಾಹಿತಿ ಮತ್ತು ಸಹಾಯಕ ಪುರಾವೆಗಳನ್ನು ಗುರುತಿಸಿ.', featureDecisionGuidanceDescription: 'ಸಂಭಾವ್ಯ ಫಲಿತಾಂಶಗಳ ಸ್ಪಷ್ಟ ವಿವರಣೆ ಪಡೆಯಿರಿ.', featureActionPlanDescription: 'ವಿಶ್ಲೇಷಣೆಯನ್ನು ಪ್ರಾಯೋಗಿಕ ಮುಂದಿನ ಕ್ರಮಗಳಾಗಿ ಬದಲಿಸಿ.', stepUploadDescription: 'ದಾಖಲೆಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ.', stepAnalyzeDescription: 'CivicGuide AI ಮಾಹಿತಿಯನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತದೆ.', stepUnderstandDescription: 'ಸ್ಪಷ್ಟ ವಿವರಣೆ ಮತ್ತು ಪುರಾವೆಗಳ ಪಟ್ಟಿಯನ್ನು ಪಡೆಯಿರಿ.', stepActDescription: 'ಪ್ರಾಯೋಗಿಕ ಮುಂದಿನ ಕ್ರಮಗಳನ್ನು ಅನುಸರಿಸಿ.' },
  ml: { featureDocumentAnalysis: 'രേഖാ വിശകലനം', featureEvidenceChecklist: 'തെളിവുകളുടെ പട്ടിക', featureDecisionGuidance: 'AI തീരുമാന മാർഗനിർദേശം', featureActionPlan: 'പ്രവർത്തന പദ്ധതി', stepUpload: 'അപ്‌ലോഡ്', stepAnalyze: 'വിശകലനം', stepUnderstand: 'മനസ്സിലാക്കുക', stepAct: 'നടപടി സ്വീകരിക്കുക', featureDocumentAnalysisDescription: 'നോട്ടീസുകളും കത്തുകളും PDF-കളും മറ്റ് രേഖകളും മനസ്സിലാക്കുക.', featureEvidenceChecklistDescription: 'പ്രധാന വിവരങ്ങളും സഹായക തെളിവുകളും കണ്ടെത്തുക.', featureDecisionGuidanceDescription: 'സാധ്യമായ ഫലങ്ങളുടെ വ്യക്തമായ വിശദീകരണം നേടുക.', featureActionPlanDescription: 'വിശകലനം പ്രായോഗിക അടുത്ത നടപടികളാക്കി മാറ്റുക.', stepUploadDescription: 'രേഖ അപ്‌ലോഡ് ചെയ്യുക അല്ലെങ്കിൽ പ്രശ്നം വിവരിക്കുക.', stepAnalyzeDescription: 'CivicGuide AI വിവരങ്ങൾ വിശകലനം ചെയ്യുന്നു.', stepUnderstandDescription: 'വ്യക്തമായ വിശദീകരണവും തെളിവ് പട്ടികയും നേടുക.', stepActDescription: 'പ്രായോഗിക അടുത്ത നടപടികൾ പിന്തുടരുക.' },
  mr: { featureDocumentAnalysis: 'कागदपत्र विश्लेषण', featureEvidenceChecklist: 'पुराव्यांची यादी', featureDecisionGuidance: 'AI निर्णय मार्गदर्शन', featureActionPlan: 'कृती योजना', stepUpload: 'अपलोड', stepAnalyze: 'विश्लेषण', stepUnderstand: 'समजून घ्या', stepAct: 'कृती करा', featureDocumentAnalysisDescription: 'नोटिस, पत्रे, PDF आणि इतर कागदपत्रे समजून घ्या.', featureEvidenceChecklistDescription: 'महत्त्वाची माहिती आणि सहायक पुरावे ओळखा.', featureDecisionGuidanceDescription: 'संभाव्य निकालांचे स्पष्ट स्पष्टीकरण मिळवा.', featureActionPlanDescription: 'विश्लेषणाचे व्यावहारिक पुढील कृतीत रूपांतर करा.', stepUploadDescription: 'कागदपत्र अपलोड करा किंवा समस्या सांगा.', stepAnalyzeDescription: 'CivicGuide AI माहितीचे विश्लेषण करते.', stepUnderstandDescription: 'स्पष्ट स्पष्टीकरण आणि पुराव्यांची यादी मिळवा.', stepActDescription: 'व्यावहारिक पुढील कृतींचे अनुसरण करा.' },
  or: { featureDocumentAnalysis: 'ଦଲିଲ ବିଶ୍ଳେଷଣ', featureEvidenceChecklist: 'ପ୍ରମାଣ ତାଲିକା', featureDecisionGuidance: 'AI ନିଷ୍ପତ୍ତି ମାର୍ଗଦର୍ଶନ', featureActionPlan: 'କାର୍ଯ୍ୟ ଯୋଜନା', stepUpload: 'ଅପଲୋଡ୍', stepAnalyze: 'ବିଶ୍ଳେଷଣ', stepUnderstand: 'ବୁଝନ୍ତୁ', stepAct: 'ପଦକ୍ଷେପ ନିଅନ୍ତୁ', featureDocumentAnalysisDescription: 'ନୋଟିସ୍, ଚିଠି, PDF ଏବଂ ଅନ୍ୟ ଦଲିଲ ବୁଝନ୍ତୁ।', featureEvidenceChecklistDescription: 'ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ତଥ୍ୟ ଓ ସହାୟକ ପ୍ରମାଣ ଚିହ୍ନଟ କରନ୍ତୁ।', featureDecisionGuidanceDescription: 'ସମ୍ଭାବ୍ୟ ଫଳାଫଳର ସ୍ପଷ୍ଟ ବ୍ୟାଖ୍ୟା ପାଆନ୍ତୁ।', featureActionPlanDescription: 'ବିଶ୍ଳେଷଣକୁ ବ୍ୟବହାରିକ ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପରେ ବଦଳାନ୍ତୁ।', stepUploadDescription: 'ଦଲିଲ ଅପଲୋଡ୍ କରନ୍ତୁ କିମ୍ବା ସମସ୍ୟା ବର୍ଣ୍ଣନା କରନ୍ତୁ।', stepAnalyzeDescription: 'CivicGuide AI ତଥ୍ୟ ବିଶ୍ଳେଷଣ କରେ।', stepUnderstandDescription: 'ସ୍ପଷ୍ଟ ବ୍ୟାଖ୍ୟା ଓ ପ୍ରମାଣ ତାଲିକା ପାଆନ୍ତୁ।', stepActDescription: 'ବ୍ୟବହାରିକ ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ଅନୁସରଣ କରନ୍ତୁ।' },
  pa: { featureDocumentAnalysis: 'ਦਸਤਾਵੇਜ਼ ਵਿਸ਼ਲੇਸ਼ਣ', featureEvidenceChecklist: 'ਸਬੂਤਾਂ ਦੀ ਸੂਚੀ', featureDecisionGuidance: 'AI ਫੈਸਲਾ ਮਾਰਗਦਰਸ਼ਨ', featureActionPlan: 'ਕਾਰਜ ਯੋਜਨਾ', stepUpload: 'ਅੱਪਲੋਡ', stepAnalyze: 'ਵਿਸ਼ਲੇਸ਼ਣ', stepUnderstand: 'ਸਮਝੋ', stepAct: 'ਕਦਮ ਚੁੱਕੋ', featureDocumentAnalysisDescription: 'ਨੋਟਿਸ, ਚਿੱਠੀਆਂ, PDF ਅਤੇ ਹੋਰ ਦਸਤਾਵੇਜ਼ ਸਮਝੋ।', featureEvidenceChecklistDescription: 'ਮਹੱਤਵਪੂਰਨ ਜਾਣਕਾਰੀ ਅਤੇ ਸਹਾਇਕ ਸਬੂਤ ਪਛਾਣੋ।', featureDecisionGuidanceDescription: 'ਸੰਭਾਵੀ ਨਤੀਜਿਆਂ ਦੀ ਸਪਸ਼ਟ ਵਿਆਖਿਆ ਪਾਓ।', featureActionPlanDescription: 'ਵਿਸ਼ਲੇਸ਼ਣ ਨੂੰ ਅਮਲੀ ਅਗਲੇ ਕਦਮਾਂ ਵਿੱਚ ਬਦਲੋ।', stepUploadDescription: 'ਦਸਤਾਵੇਜ਼ ਅੱਪਲੋਡ ਕਰੋ ਜਾਂ ਸਮੱਸਿਆ ਦੱਸੋ।', stepAnalyzeDescription: 'CivicGuide AI ਜਾਣਕਾਰੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਦਾ ਹੈ।', stepUnderstandDescription: 'ਸਪਸ਼ਟ ਵਿਆਖਿਆ ਅਤੇ ਸਬੂਤਾਂ ਦੀ ਸੂਚੀ ਪਾਓ।', stepActDescription: 'ਅਮਲੀ ਅਗਲੇ ਕਦਮਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ।' },
  ta: { featureDocumentAnalysis: 'ஆவணப் பகுப்பாய்வு', featureEvidenceChecklist: 'ஆதாரப் பட்டியல்', featureDecisionGuidance: 'AI முடிவு வழிகாட்டல்', featureActionPlan: 'செயல் திட்டம்', stepUpload: 'பதிவேற்றம்', stepAnalyze: 'பகுப்பாய்வு', stepUnderstand: 'புரிந்துகொள்ளுங்கள்', stepAct: 'நடவடிக்கை எடுங்கள்', featureDocumentAnalysisDescription: 'அறிவிப்புகள், கடிதங்கள், PDF மற்றும் பிற ஆவணங்களைப் புரிந்துகொள்ளுங்கள்.', featureEvidenceChecklistDescription: 'முக்கிய தகவல்கள் மற்றும் ஆதாரங்களை அடையாளம் காணுங்கள்.', featureDecisionGuidanceDescription: 'சாத்தியமான முடிவுகளின் தெளிவான விளக்கத்தைப் பெறுங்கள்.', featureActionPlanDescription: 'பகுப்பாய்வை நடைமுறை அடுத்த படிகளாக மாற்றுங்கள்.', stepUploadDescription: 'ஆவணத்தைப் பதிவேற்றவும் அல்லது சிக்கலை விவரிக்கவும்.', stepAnalyzeDescription: 'CivicGuide AI தகவலைப் பகுப்பாய்வு செய்கிறது.', stepUnderstandDescription: 'தெளிவான விளக்கமும் ஆதாரப் பட்டியலும் பெறுங்கள்.', stepActDescription: 'நடைமுறை அடுத்த படிகளைப் பின்பற்றுங்கள்.' },
  ur: { featureDocumentAnalysis: 'دستاویز کا تجزیہ', featureEvidenceChecklist: 'شواہد کی فہرست', featureDecisionGuidance: 'AI فیصلہ رہنمائی', featureActionPlan: 'عملی منصوبہ', stepUpload: 'اپ لوڈ', stepAnalyze: 'تجزیہ', stepUnderstand: 'سمجھیں', stepAct: 'اقدام کریں', featureDocumentAnalysisDescription: 'نوٹس، خطوط، PDF اور دیگر دستاویزات سمجھیں۔', featureEvidenceChecklistDescription: 'اہم معلومات اور معاون شواہد کی شناخت کریں۔', featureDecisionGuidanceDescription: 'ممکنہ نتائج کی واضح وضاحت حاصل کریں۔', featureActionPlanDescription: 'تجزیے کو عملی اگلے اقدامات میں بدلیں۔', stepUploadDescription: 'دستاویز اپ لوڈ کریں یا مسئلہ بیان کریں۔', stepAnalyzeDescription: 'CivicGuide AI معلومات کا تجزیہ کرتا ہے۔', stepUnderstandDescription: 'واضح وضاحت اور شواہد کی فہرست حاصل کریں۔', stepActDescription: 'عملی اگلے اقدامات پر عمل کریں۔' },
};

const missingLocaleMessage: Record<SupportedLanguage, string> = {
  en: 'Translation unavailable', te: 'అనువాదం అందుబాటులో లేదు', hi: 'अनुवाद उपलब्ध नहीं है', ta: 'மொழிபெயர்ப்பு கிடைக்கவில்லை', kn: 'ಅನುವಾದ ಲಭ್ಯವಿಲ್ಲ', ml: 'വിവർത്തനം ലഭ്യമല്ല', mr: 'भाषांतर उपलब्ध नाही', bn: 'অনুবাদ পাওয়া যায়নি', gu: 'અનુવાદ ઉપલબ્ધ નથી', pa: 'ਅਨੁਵਾਦ ਉਪਲਬਧ ਨਹੀਂ', or: 'ଅନୁବାଦ ଉପଲବ୍ଧ ନାହିଁ', as: 'অনুবাদ উপলব্ধ নহয়', ur: 'ترجمہ دستیاب نہیں', brx: 'अनुवाद मोनसे नङा', doi: 'अनुवाद उपलब्ध नेई', ks: 'ترجُمہ دستیاب نَہ', kok: 'भासांतर उपलब्ध ना', mai: 'अनुवाद उपलब्ध नहि', mni: 'ꯂꯣꯟꯒꯤ ꯃꯔꯣꯜ ꯂꯩꯇꯦ', ne: 'अनुवाद उपलब्ध छैन', sa: 'अनुवादः उपलब्धः नास्ति', sat: 'ᱵᱟᱝ ᱵᱟᱱᱟᱣ ᱫᱚ ᱢᱮᱱᱟ', sd: 'ترجمو موجود ناهي',
};

export function useTranslations() {
  const language = useAppStore((state) => state.language);
  return (key: TranslationKey) => translations[language]?.[key] ?? reviewTranslations[language]?.[key] ?? reviewTranslations.en?.[key] ?? localeFallbacks[language][key] ?? landingLocaleCopy[language]?.[key] ?? navigationTranslations[language]?.[key] ?? (language === 'en' ? translations.en?.[key] ?? key : missingLocaleMessage[language]);
}

export function getLanguageLabel(language: SupportedLanguage) {
  return indianLanguages.find((item) => item.value === language)?.label ?? language;
}
