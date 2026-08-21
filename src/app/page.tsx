'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, BadgeCheck, Check, ChevronDown, CircleDot, FileText, Globe2,
  LayoutDashboard, ListChecks, Menu, MessageSquareText, Network, Scale,
  ShieldCheck, Sparkles, X,
} from 'lucide-react';
import { useTranslations } from '@/lib/i18n';
import { useAppStore } from '@/lib/store';
import { Brand } from '@/components/common/Brand';
import { LanguageSelector } from '@/components/common/LanguageSelector';

const features = [
  { icon: FileText, number: '01', title: 'featureDocumentAnalysis', description: 'featureDocumentAnalysisDescription', href: '/analyze' },
  { icon: ListChecks, number: '02', title: 'featureEvidenceChecklist', description: 'featureEvidenceChecklistDescription', href: '/analysis/preview' },
  { icon: Scale, number: '03', title: 'featureDecisionGuidance', description: 'featureDecisionGuidanceDescription', href: '/analysis/preview' },
  { icon: ArrowRight, number: '04', title: 'featureActionPlan', description: 'featureActionPlanDescription', href: '/analysis/preview' },
];

const benefits = [
  { icon: MessageSquareText, title: 'benefitSimple', description: 'benefitSimpleDescription' }, { icon: Globe2, title: 'benefitMultilingual', description: 'benefitMultilingualDescription' }, { icon: ShieldCheck, title: 'benefitEvidence', description: 'benefitEvidenceDescription' }, { icon: LayoutDashboard, title: 'benefitCaseTracking', description: 'benefitCaseTrackingDescription' }, { icon: Network, title: 'benefitTimeline', description: 'benefitTimelineDescription' }, { icon: Sparkles, title: 'benefitActionPlans', description: 'benefitActionPlansDescription' },
];

const steps = [
  { number: '01', title: 'stepUpload', description: 'stepUploadDescription' }, { number: '02', title: 'stepAnalyze', description: 'stepAnalyzeDescription' }, { number: '03', title: 'stepUnderstand', description: 'stepUnderstandDescription' }, { number: '04', title: 'stepAct', description: 'stepActDescription' },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const language = useAppStore((state) => state.language);
  const t = useTranslations();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((current) => ({ ...current, [entry.target.id]: true }));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const reveal = (id: string) => `landing-reveal ${visibleSections[id] ? 'landing-reveal-visible' : ''}`;
  const closeMenu = () => setMenuOpen(false);
  const navItems = [['navFeatures', 'features'], ['navHowItWorks', 'how-it-works'], ['navBenefits', 'benefits'], ['navAbout', 'about']];

  return (
    <main className="landing-page min-h-screen overflow-hidden bg-[#071018] text-[#f4f7f5]">
      <nav className="landing-nav fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071018]/80 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <Brand inverted href={null} />
          </Link>
          <div className="hidden items-center gap-8 lg:flex">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm text-[#9eaba9] transition-colors hover:text-[#d5f56f]">{t(label)}</a>)}</div>
          <div className="hidden items-center gap-3 sm:flex">
            <LanguageSelector />
            <Link href="/login" className="rounded-lg px-4 py-2 text-sm text-[#cbd6d3] transition-colors hover:bg-white/5 hover:text-white">{t('login')}</Link>
            <Link href="/signup" className="landing-button rounded-lg bg-[#d5f56f] px-4 py-2 text-sm font-semibold text-[#071018]">{t('getStarted')}</Link>
          </div>
          <button type="button" className="rounded-lg border border-white/10 p-2 text-[#d5f56f] sm:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {menuOpen && <div className="border-t border-white/10 bg-[#0a1720] px-5 py-5 sm:hidden"><div className="flex flex-col gap-4">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu} className="text-sm text-[#cbd6d3]">{t(label)}</a>)}<div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4"><span className="text-xs text-[#71817d]">{t('language')}</span><LanguageSelector /></div><div className="flex items-center gap-3"><Link href="/login" onClick={closeMenu} className="text-sm text-[#cbd6d3]">{t('login')}</Link><Link href="/signup" onClick={closeMenu} className="landing-button rounded-lg bg-[#d5f56f] px-4 py-2 text-sm font-semibold text-[#071018]">{t('getStarted')}</Link></div></div></div>}
      </nav>

      <section className="landing-grid relative isolate px-5 pb-20 pt-36 sm:px-8 sm:pt-44 lg:pb-28">
        <div className="landing-glow landing-glow-one" /><div className="landing-glow landing-glow-two" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div className="landing-hero-content max-w-2xl">
            <div className="landing-delay-1 mb-6 inline-flex items-center gap-2 rounded-full border border-[#d5f56f]/25 bg-[#d5f56f]/10 px-3 py-1.5 text-xs font-medium text-[#d5f56f]"><Sparkles className="h-3.5 w-3.5" /> AI-Powered Civic Guidance</div>
            <h1 className="landing-delay-2 max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-7xl">{t('heroTitle')}<br /><span className="text-[#d5f56f]">{t('heroTitleAccent')}</span></h1>
            <p className="landing-delay-3 mt-7 max-w-xl text-base leading-7 text-[#aebbb8] sm:text-lg">{t('heroDescription')}</p>
            <div className="landing-delay-4 mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/analyze" className="landing-button inline-flex items-center justify-center gap-2 rounded-lg bg-[#d5f56f] px-5 py-3 text-sm font-semibold text-[#071018] shadow-[0_0_30px_rgba(213,245,111,0.14)]">{t('analyzeDocumentCta')} <ArrowRight className="h-4 w-4" /></Link><a href="#how-it-works" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-[#d5f56f]/50 hover:bg-white/10">{t('seeHowItWorks')} <ChevronDown className="h-4 w-4" /></a></div>
            <div className="landing-delay-4 mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#7e8d8a]"><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#d5f56f]" /> Private by design</span><span className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-[#d5f56f]" /> {t('builtForIndia')}</span></div>
          </div>

          <div className="landing-visual relative mx-auto w-full max-w-[560px] lg:ml-auto"><div className="landing-orbit landing-orbit-one" /><div className="landing-orbit landing-orbit-two" /><div className="relative rounded-2xl border border-white/15 bg-[#0d1b24]/90 p-4 shadow-[0_24px_100px_rgba(0,0,0,0.35)] backdrop-blur sm:p-6"><div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4"><div className="flex items-center gap-2 text-xs text-[#91a09c]"><span className="h-2 w-2 rounded-full bg-[#d5f56f]" /> CivicGuide workspace</div><span className="rounded-full bg-[#d5f56f]/10 px-2 py-1 text-[10px] text-[#d5f56f]">LIVE ANALYSIS</span></div><div className="grid gap-3 sm:grid-cols-[1fr_0.88fr]"><div className="rounded-xl border border-white/10 bg-[#12232d] p-4"><div className="mb-7 flex items-center justify-between"><FileText className="h-5 w-5 text-[#d5f56f]" /><span className="text-[10px] text-[#6f807b]">PDF / 4 pages</span></div><div className="space-y-2.5"><div className="h-2 w-3/4 rounded-full bg-white/20" /><div className="h-2 w-full rounded-full bg-white/10" /><div className="h-2 w-5/6 rounded-full bg-white/10" /><div className="mt-5 h-16 rounded-lg border border-[#d5f56f]/20 bg-[#d5f56f]/5" /></div><div className="mt-6 flex items-center gap-2 text-xs text-[#aebbb8]"><BadgeCheck className="h-4 w-4 text-[#d5f56f]" /> Notice of public service</div></div><div className="flex flex-col gap-3"><div className="landing-float-card rounded-xl border border-[#d5f56f]/30 bg-[#d5f56f]/10 p-4"><div className="mb-3 flex items-center gap-2 text-xs font-medium text-[#d5f56f]"><Sparkles className="h-4 w-4" /> AI Analysis</div><p className="text-sm leading-6 text-[#e0e9d8]">Key deadline and eligibility requirements identified.</p></div><div className="landing-float-card landing-float-card-delay rounded-xl border border-white/10 bg-[#12232d] p-4"><div className="mb-3 flex items-center gap-2 text-xs font-medium text-[#cbd6d3]"><ListChecks className="h-4 w-4 text-[#d5f56f]" /> Evidence</div><div className="space-y-2 text-xs text-[#91a09c]"><div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#d5f56f]" /> Identity proof</div><div className="flex items-center gap-2"><CircleDot className="h-3.5 w-3.5 text-[#f4bf70]" /> Address proof needed</div></div></div><div className="rounded-xl border border-white/10 bg-[#12232d] p-4"><div className="mb-3 flex items-center gap-2 text-xs font-medium text-[#cbd6d3]"><ArrowRight className="h-4 w-4 text-[#d5f56f]" /> Recommendation</div><p className="text-sm text-white">Submit supporting evidence before 15 Sep.</p></div></div></div><div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4 text-xs text-[#7e8d8a]"><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-4/5 rounded-full bg-[#d5f56f]" /></div><span>Analysis 80%</span></div></div></div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-[#0a1720] px-5 py-10 sm:px-8" data-reveal><div className={`mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_2fr] md:items-center ${reveal('about')}`}><p className="max-w-xs text-sm font-medium uppercase tracking-[0.16em] text-[#71817d]">{t('builtToMakeCivic')}</p><div className="grid gap-4 sm:grid-cols-3"><div className="landing-trust-item"><BadgeCheck className="h-5 w-5 text-[#d5f56f]" /><span>Clear</span></div><div className="landing-trust-item"><ShieldCheck className="h-5 w-5 text-[#d5f56f]" /><span>Evidence-Based</span></div><div className="landing-trust-item"><ArrowRight className="h-5 w-5 text-[#d5f56f]" /><span>Action-Oriented</span></div></div></div></section>

      <section id="features" className="px-5 py-24 sm:px-8 sm:py-32" data-reveal><div className={`mx-auto max-w-7xl ${reveal('features')}`}><div className="mb-12 max-w-2xl"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5f56f]">{t('approach')}</p><h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{t('featuresTitle')}</h2></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{features.map((feature) => { const Icon = feature.icon; return <Link key={feature.number} href={feature.href} className="landing-feature-card group"><div className="flex items-start justify-between"><span className="text-xs text-[#71817d]">{feature.number}</span><Icon className="h-5 w-5 text-[#d5f56f] transition-transform group-hover:scale-110" /></div><h3 className="mt-12 text-lg font-medium text-white">{t(feature.title)}</h3><p className="mt-3 text-sm leading-6 text-[#91a09c]">{t(feature.description)}</p><ArrowRight className="mt-6 h-4 w-4 text-[#71817d] transition-transform group-hover:translate-x-1 group-hover:text-[#d5f56f]" /></Link>; })}</div></div></section>

      <section id="how-it-works" className="border-y border-white/10 bg-[#0a1720] px-5 py-24 sm:px-8 sm:py-32" data-reveal><div className={`mx-auto max-w-7xl ${reveal('how-it-works')}`}><div className="mb-14 max-w-xl"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5f56f]">{t('clearPath')}</p><h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{t('processTitle')}</h2></div><div className="landing-steps grid gap-8 md:grid-cols-4">{steps.map((step, index) => <div key={step.number} className="relative"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#d5f56f]/40 bg-[#d5f56f]/10 text-sm font-semibold text-[#d5f56f]">{step.number}</div><h3 className="text-lg font-medium text-white">{t(step.title)}</h3><p className="mt-2 max-w-[220px] text-sm leading-6 text-[#91a09c]">{t(step.description)}</p>{index < steps.length - 1 && <div className="landing-step-line hidden md:block" />}</div>)}</div></div></section>

      <section id="benefits" className="px-5 py-24 sm:px-8 sm:py-32" data-reveal><div className={`mx-auto max-w-7xl ${reveal('benefits')}`}><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5f56f]">{t('designedAround')}</p><h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{t('benefitsTitle')}</h2></div><div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">{benefits.map((benefit) => { const Icon = benefit.icon; return <div key={benefit.title} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5"><Icon className="h-4 w-4 text-[#d5f56f]" /></span><div><h3 className="text-sm font-medium text-white">{benefit.title}</h3><p className="mt-2 text-sm leading-6 text-[#91a09c]">{benefit.description}</p></div></div>; })}</div></div></div></section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32" data-reveal id="final-cta"><div className={`landing-cta relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-[#d5f56f]/20 px-6 py-16 text-center sm:px-12 ${reveal('final-cta')}`}><div className="landing-cta-grid" /><div className="relative"><p className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{t('ctaTitle')}</p><Link href="/analyze" className="landing-button mt-8 inline-flex items-center gap-2 rounded-lg bg-[#d5f56f] px-5 py-3 text-sm font-semibold text-[#071018]">{t('analyzeDocumentCta')} <ArrowRight className="h-4 w-4" /></Link></div></div></section>

      <footer className="border-t border-white/10 bg-[#050c12] px-5 py-12 sm:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><Brand inverted /><p className="mt-5 max-w-xs text-sm leading-6 text-[#71817d]">{t('brandDescription')}</p></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#71817d]">Product</h3><div className="mt-4 space-y-3 text-sm text-[#aebbb8]"><a href="#features" className="block hover:text-[#d5f56f]">Features</a><a href="#how-it-works" className="block hover:text-[#d5f56f]">How It Works</a></div></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#71817d]">Support</h3><div className="mt-4 space-y-3 text-sm text-[#aebbb8]"><Link href="/help" className="block hover:text-[#d5f56f]">Help</Link><Link href="/login" className="block hover:text-[#d5f56f]">{t('login')}</Link><Link href="/help" className="block hover:text-[#d5f56f]">Contact Us</Link></div></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#71817d]">Legal</h3><div className="mt-4 space-y-3 text-sm text-[#aebbb8]"><Link href="/privacy-policy" className="block hover:text-[#d5f56f]">Privacy Policy</Link><Link href="/terms" className="block hover:text-[#d5f56f]">Terms of Service</Link></div></div></div><div className="mt-12 border-t border-white/10 pt-6 text-xs text-[#61716d]">© 2026 NayaSathi. Built for clearer civic action.</div></div></footer>
    </main>
  );
}
