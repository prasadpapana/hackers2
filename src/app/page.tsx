'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/common';
import { 
  FileText, CheckCircle, Lock, Users, Zap, Globe, ArrowRight,
  Briefcase, Shield, Clock, MessageSquare
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-card/80 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg text-primary">CivicGuide AI</span>
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost" size="md">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="primary" size="md">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Understand Your Rights.
            <br />
            <span className="text-primary">Know Your Next Step.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            CivicGuide AI helps you understand civic and legal documents, identify missing evidence, and find the next action you can take.
          </p>
          <div className="flex gap-4 justify-center pt-6">
            <Link href="/analyze">
              <Button variant="primary" size="lg">
                Analyze a Document
              </Button>
            </Link>
            <button className="px-8 py-3 text-lg font-medium text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors">
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-card border-t border-b border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Upload', desc: 'Upload your document.' },
              { step: '02', title: 'Understand', desc: 'Get a clear explanation.' },
              { step: '03', title: 'Check', desc: 'Identify missing evidence and requirements.' },
              { step: '04', title: 'Act', desc: 'Follow the recommended next steps.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: FileText, title: 'Document Analysis', desc: 'Upload notices, letters, applications, and more.', href: '/analyze' },
            { icon: CheckCircle, title: 'Evidence Checklist', desc: 'Know exactly what documents you need.', href: '/analysis/preview' },
            { icon: Clock, title: 'Case Timeline', desc: 'Track important dates and deadlines.', href: '/timeline' },
            { icon: Zap, title: 'Action Plan', desc: 'Get clear, step-by-step recommendations.', href: '/analysis/preview' },
            { icon: Users, title: 'Case Tracking', desc: 'Manage multiple cases in one place.', href: '/cases' },
            { icon: Globe, title: 'Multilingual', desc: 'Support for English, Telugu, and Hindi.', href: '/settings' },
          ].map((item, idx) => {
            const Icon = item.icon;
            const feature = (
              <div className="p-6 border border-border rounded-lg bg-card hover:shadow-md transition-all">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            );

            return <Link key={idx} href={item.href} aria-label={`Open ${item.title}`}>{feature}</Link>;
          })}
        </div>
      </section>

      {/* Why CivicGuide */}
      <section className="bg-card border-t border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Why CivicGuide AI</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: Lock, title: 'Secure & Private', desc: 'Your documents are encrypted and secure.' },
                { icon: Shield, title: 'Expert Guidance', desc: 'Powered by AI trained on legal data.' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="space-y-6">
              {[
                { icon: Zap, title: 'Fast Analysis', desc: 'Get results in seconds, not hours.' },
                { icon: MessageSquare, title: 'Clear Explanations', desc: 'Understand complex legal terms easily.' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ready to understand your documents?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of users who trust CivicGuide AI for legal and civic assistance.
        </p>
        <Link href="/signup">
          <Button variant="primary" size="lg">
            Get Started for Free
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">CivicGuide AI</h3>
              <p className="text-sm text-muted-foreground">Making legal documents accessible to everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Privacy</Link></li>
                <li><Link href="#" className="hover:text-foreground">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Support</Link></li>
                <li><Link href="#" className="hover:text-foreground">Email</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CivicGuide AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
