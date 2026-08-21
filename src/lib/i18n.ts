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
    language: 'Language',
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
    language: 'భాష',
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
  },
  hi: {
    language: 'भाषा',
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
const localeFallbacks: Record<SupportedLanguage, Partial<Record<TranslationKey, string>>> = {
  en: {}, hi: {}, te: {},
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

export function useTranslations() {
  const language = useAppStore((state) => state.language);
  return (key: TranslationKey) => translations[language]?.[key] ?? localeFallbacks[language][key] ?? navigationTranslations[language]?.[key] ?? translations.en?.[key] ?? key;
}

export function getLanguageLabel(language: SupportedLanguage) {
  return indianLanguages.find((item) => item.value === language)?.label ?? language;
}
