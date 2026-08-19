'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common';
import { Briefcase } from 'lucide-react';
import { apiClient } from '@/lib/api';
import { useAppStore } from '@/lib/store';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setPasswordError('');

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
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
    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="w-6 h-6 text-primary" />
            <span className="text-xl font-semibold text-primary">CivicGuide AI</span>
          </div>
          <CardTitle className="text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Join thousands using CivicGuide AI
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
              label="Full Name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              hint="At least 8 characters"
              required
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={passwordError}
              required
            />

            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <input type="checkbox" className="w-4 h-4 border border-border rounded mt-0.5" required />
              <span>I agree to the Terms of Service and Privacy Policy</span>
            </div>

            <Button variant="primary" size="lg" className="w-full" isLoading={isLoading}>
              Create Account
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
