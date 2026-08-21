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
  ThemeSelector,
} from '@/components/common';
import { Bell, Lock, Globe, User } from 'lucide-react';
import { apiClient } from '@/lib/api';
import { useAppStore } from '@/lib/store';
import { indianLanguages, type SupportedLanguage, useTranslations } from '@/lib/i18n';

export default function SettingsPage() {
  const storeLanguage = useAppStore((state) => state.language);
  const [notifications, setNotifications] = useState({
    caseUpdates: true,
    deadlineReminders: true,
    newsAndUpdates: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const setStoreLanguage = useAppStore((state) => state.setLanguage);
  const t = useTranslations();

  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      await apiClient.updateSettings(storeLanguage);
      setIsSaving(false);
    } catch {
      setIsSaving(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('settings')}</h1>
          <p className="text-muted-foreground">{t('settingsDescription')}</p>
        </div>

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-primary" />
              <div>
                <CardTitle>{t('accountSettings')}</CardTitle>
                <CardDescription>{t('accountDescription')}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Input label={t('fullName')} defaultValue="John Doe" />
            <Input label={t('email')} type="email" defaultValue="john@example.com" />

            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">{t('changePassword')}</h3>
              <div className="space-y-4">
                <Input label={t('currentPassword')} type="password" />
                <Input label={t('newPassword')} type="password" />
                <Input label={t('confirmPassword')} type="password" />
                <Button variant="outline" size="md">
                  {t('updatePassword')}
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
                <CardTitle>{t('languageRegion')}</CardTitle>
                <CardDescription>{t('preferredLanguage')}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Select
              label={t('language')}
              value={storeLanguage}
              onChange={(e) => setStoreLanguage(e.target.value as SupportedLanguage)}
              options={indianLanguages.map((item) => ({ value: item.value, label: item.label }))}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('theme')}</CardTitle>
            <CardDescription>{t('themeDescription')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ThemeSelector />
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-primary" />
              <div>
                <CardTitle>{t('notificationsSettings')}</CardTitle>
                <CardDescription>{t('notificationDescription')}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                key: 'caseUpdates',
                label: t('caseUpdates'),
                description: t('caseUpdatesDescription'),
              },
              {
                key: 'deadlineReminders',
                label: t('deadlineReminders'),
                description: t('deadlineRemindersDescription'),
              },
              {
                key: 'newsAndUpdates',
                label: t('newsAndUpdates'),
                description: t('newsAndUpdatesDescription'),
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
                <CardTitle>{t('security')}</CardTitle>
                <CardDescription>{t('securityDescription')}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">{t('twoFactorAuthentication')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('extraSecurityLayer')}
              </p>
              <Button variant="outline" size="md">
                {t('enableTwoFactor')}
              </Button>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">{t('activeSessions')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('manageConnectedDevices')}
              </p>
              <Button variant="outline" size="md">
                {t('viewSessions')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex gap-4 pt-6">
          <Button variant="primary" size="lg" isLoading={isSaving} onClick={handleSaveSettings}>
            {t('saveChanges')}
          </Button>
          <Button variant="outline" size="lg">
            {t('cancel')}
          </Button>
        </div>

        {/* Danger Zone */}
        <Card className="border-destructive/20">
          <CardHeader>
            <CardTitle className="text-destructive">{t('dangerZone')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-destructive/20 rounded-lg bg-destructive/5">
              <h3 className="font-semibold text-foreground mb-2">{t('deleteAccount')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('deleteAccountDescription')}
              </p>
              <Button variant="destructive" size="md">
                {t('deleteAccount')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
