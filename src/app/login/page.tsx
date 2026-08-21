'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common';
import { apiClient } from '@/lib/api';
import { useAppStore } from '@/lib/store';
import { Brand } from '@/components/common/Brand';
import { useTranslations } from '@/lib/i18n';

export default function LoginPage() {
  const router = useRouter();
  const setUser = useAppStore((state) => state.setUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const t = useTranslations();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await apiClient.login(email, password);
      const user = response.data?.user;
      const token = response.data?.token;

      if (!user || !token) {
        throw new Error('Invalid login response');
      }

      localStorage.setItem('authToken', token);
      setUser(user);
      router.push('/dashboard');
    } catch {
      setError(t('invalidCredentials'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-center mb-4"><Brand /></div>
          <CardTitle className="text-center">{t('welcomeBack')}</CardTitle>
          <CardDescription className="text-center">
            {t('signInDescription')}
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
              required
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 border border-border rounded"
                />
                <span className="text-foreground">{t('rememberMe')}</span>
              </label>
              <Link href="#" className="text-sm text-primary hover:underline">
                {t('forgotPassword')}
              </Link>
            </div>

            <Button variant="primary" size="lg" className="w-full" isLoading={isLoading}>
              {t('signIn')}
            </Button>

            <p className="text-center text-xs leading-5 text-muted-foreground">
              {t('continuingAgreement')}{' '}<Link href="/terms" className="text-primary hover:underline">{t('termsOfService')}</Link>{' '}{t('andAcknowledge')}{' '}<Link href="/privacy-policy" className="text-primary hover:underline">{t('privacyPolicy')}</Link>.
            </p>

            <p className="text-center text-sm text-muted-foreground">
              {t('noAccount')}{' '}
              <Link href="/signup" className="text-primary hover:underline font-medium">
                {t('signUp')}
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
