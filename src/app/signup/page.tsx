'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common';
import { apiClient } from '@/lib/api';
import { useAppStore } from '@/lib/store';
import { Brand } from '@/components/common/Brand';
import { useTranslations } from '@/lib/i18n';
import { Checkbox } from '@/components/ui/checkbox';

export default function SignupPage() {
  const router = useRouter();
  const setUser = useAppStore((state) => state.setUser);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const t = useTranslations();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setPasswordError('');

    if (password !== confirmPassword) {
      setPasswordError(t('passwordMismatch'));
      return;
    }

    if (password.length < 8) {
      setPasswordError(t('passwordLength'));
      return;
    }

    setIsLoading(true);

    try {
      const response = await apiClient.signup(name, email, password);
      const user = response.data?.user;
      const token = response.data?.token;

      if (!user || !token) {
        throw new Error('Invalid signup response');
      }

      localStorage.setItem('authToken', token);
      setUser(user);
      router.push('/dashboard');
    } catch {
      setError(t('accountCreateFailed'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-center mb-4"><Brand /></div>
          <CardTitle className="text-center">{t('getStarted')}</CardTitle>
          <CardDescription className="text-center">
            {t('signupDescription')}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                {error}
              </div>
            )}

            <Input
              label={t('fullName')}
              type="text"
              placeholder={t('namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <Input
              label={t('email')}
              type="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label={t('password')}
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              hint={t('atLeastEight')}
              required
            />

            <Input
              label={t('confirmPassword')}
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={passwordError}
              required
            />

            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <Checkbox id="agree-terms" className="mt-0.5" required />
              <label htmlFor="agree-terms">{t('agreeTerms')}</label>
            </div>

            <Button variant="primary" size="lg" className="w-full" isLoading={isLoading}>
              {t('createAccount')}
            </Button>

            <p className="text-center text-xs leading-5 text-muted-foreground">
              {t('continuingAgreement')}{' '}<Link href="/terms" className="text-primary hover:underline">{t('termsOfService')}</Link>{' '}{t('andAcknowledge')}{' '}<Link href="/privacy-policy" className="text-primary hover:underline">{t('privacyPolicy')}</Link>.
            </p>

            <p className="text-center text-sm text-muted-foreground">
              {t('haveAccount')}{' '}
              <Link href="/login" className="text-primary hover:underline font-medium">
                {t('signIn')}
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
