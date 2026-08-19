'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Select,
} from '@/components/common';
import { Bell, Lock, Globe, User } from 'lucide-react';
import { apiClient } from '@/lib/api';
import { useAppStore } from '@/lib/store';

export default function SettingsPage() {
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState({
    caseUpdates: true,
    deadlineReminders: true,
    newsAndUpdates: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const setStoreLanguage = useAppStore((state) => state.setLanguage);

  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      await apiClient.updateSettings(language);
      setStoreLanguage(language as 'en' | 'te' | 'hi');
      setIsSaving(false);
    } catch (error) {
      setIsSaving(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-primary" />
              <div>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account information</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Input label="Full Name" defaultValue="John Doe" />
            <Input label="Email" type="email" defaultValue="john@example.com" />

            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Change Password</h3>
              <div className="space-y-4">
                <Input label="Current Password" type="password" />
                <Input label="New Password" type="password" />
                <Input label="Confirm New Password" type="password" />
                <Button variant="outline" size="md">
                  Update Password
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-primary" />
              <div>
                <CardTitle>Language & Region</CardTitle>
                <CardDescription>Choose your preferred language</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Select
              label="Language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              options={[
                { value: 'en', label: 'English' },
                { value: 'te', label: 'Telugu (తెలుగు)' },
                { value: 'hi', label: 'Hindi (हिन्दी)' },
              ]}
            />
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-primary" />
              <div>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Manage your notification preferences</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                key: 'caseUpdates',
                label: 'Case Updates',
                description: 'Notify me when there are updates on my cases',
              },
              {
                key: 'deadlineReminders',
                label: 'Deadline Reminders',
                description: 'Notify me about upcoming deadlines',
              },
              {
                key: 'newsAndUpdates',
                label: 'News & Updates',
                description: 'Receive news about CivicGuide AI features and updates',
              },
            ].map((setting) => (
              <div
                key={setting.key}
                className="flex items-center justify-between p-4 border border-border rounded-lg"
              >
                <div>
                  <p className="font-medium text-foreground">{setting.label}</p>
                  <p className="text-sm text-muted-foreground">{setting.description}</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications[setting.key as keyof typeof notifications]}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      [setting.key]: e.target.checked,
                    })
                  }
                  className="w-5 h-5 border border-border rounded cursor-pointer"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-primary" />
              <div>
                <CardTitle>Security</CardTitle>
                <CardDescription>Manage your security settings</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Add an extra layer of security to your account
              </p>
              <Button variant="outline" size="md">
                Enable 2FA
              </Button>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Active Sessions</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Manage devices connected to your account
              </p>
              <Button variant="outline" size="md">
                View Sessions
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex gap-4 pt-6">
          <Button variant="primary" size="lg" isLoading={isSaving} onClick={handleSaveSettings}>
            Save Changes
          </Button>
          <Button variant="outline" size="lg">
            Cancel
          </Button>
        </div>

        {/* Danger Zone */}
        <Card className="border-destructive/20">
          <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-destructive/20 rounded-lg bg-destructive/5">
              <h3 className="font-semibold text-foreground mb-2">Delete Account</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <Button variant="destructive" size="md">
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
