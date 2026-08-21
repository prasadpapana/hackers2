'use client';

import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Brand } from './Brand';

export interface LegalSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
}

const aiDisclaimer = 'NYAYGSATHI provides AI-generated civic and legal information for general guidance. It is not a substitute for advice from a qualified legal professional, government authority, or other appropriate professional. Users should verify important information with official sources.';

export function LegalPage({ eyebrow, title, description, updated, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/80 backdrop-blur">
        <div className="mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Brand />
          <Link href="/" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <article className="space-y-5">
            {sections.map((section) => (
              <section key={section.title} className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </article>

          <aside className="space-y-5 lg:sticky lg:top-6">
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-6">
              <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-base font-semibold text-foreground">Important AI disclaimer</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{aiDisclaimer}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
              Questions about privacy or these terms? <Link href="/help" className="font-medium text-primary hover:underline">Contact Us</Link>.
            </div>
          </aside>
        </div>
      </div>

      <footer className="border-t border-border bg-card px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 NYAYGSATHI</span>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legal navigation">
            <Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
            <Link href="/help" className="hover:text-foreground">Contact Us</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}

export { aiDisclaimer };
