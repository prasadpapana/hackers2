'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Check, Mic, Square, X } from 'lucide-react';
import { Button, Card, CardContent } from '@/components/common';
import { useAppStore } from '@/lib/store';
import { useTranslations } from '@/lib/i18n';

type VoiceStatus = 'idle' | 'listening' | 'completed' | 'error';

interface VoiceInputProps {
  onSubmit?: (transcript: string) => void;
}

interface SpeechRecognitionEventLike {
  results: {
    length: number;
    [index: number]: {
      [index: number]: { transcript: string };
    };
  };
}

interface SpeechRecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

type SpeechWindow = Window & {
  SpeechRecognition?: SpeechRecognitionConstructor;
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
};

export function VoiceInput({ onSubmit }: VoiceInputProps) {
  const [status, setStatus] = useState<VoiceStatus>('idle');
  const [transcript, setTranscript] = useState('');
  const language = useAppStore((state) => state.language);
  const t = useTranslations();
  const supported = typeof window === 'undefined'
    ? true
    : Boolean((window as SpeechWindow).SpeechRecognition ?? (window as SpeechWindow).webkitSpeechRecognition);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => {
    const speechWindow = window as SpeechWindow;
    const Recognition = speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition;
    if (!Recognition) return;

    const recognition = new Recognition();
    recognition.lang = language === 'en' ? 'en-IN' : language;
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const latestResult = event.results[event.results.length - 1];
      const spokenText = latestResult?.[0]?.transcript.trim();
      if (spokenText) {
        setTranscript((current) => `${current} ${spokenText}`.trim());
      }
    };
    recognition.onerror = () => setStatus('error');
    recognition.onend = () => {
      setStatus((current) => (current === 'listening' ? 'completed' : current));
    };
    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
      recognitionRef.current = null;
    };
  }, [language]);

  const startListening = () => {
    if (!recognitionRef.current) return;
    setTranscript('');
    setStatus('listening');
    recognitionRef.current.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setStatus('completed');
  };

  const reset = () => {
    recognitionRef.current?.stop();
    setTranscript('');
    setStatus('idle');
  };

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-semibold text-foreground">{t('voiceTitle')}</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {t('voiceDescription')}
            </p>
          </div>
          {status !== 'idle' && (
            <button
              type="button"
              onClick={reset}
              className="text-muted-foreground hover:text-foreground"
              aria-label={t('clearVoiceInput')}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {!supported ? (
          <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
            {t('voiceUnsupported')}
          </p>
        ) : (
          <>
            <div className="min-h-20 rounded-lg border border-border bg-muted/30 p-4 text-sm text-foreground">
              {transcript || (
                <span className="text-muted-foreground">
                  {t('transcriptPlaceholder')}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {status === 'listening' ? (
                <Button variant="destructive" onClick={stopListening}>
                  <Square className="w-4 h-4" />
                  {t('stopListening')}
                </Button>
              ) : (
                <Button variant="outline" onClick={startListening}>
                  <Mic className="w-4 h-4" />
                  {status === 'error' ? t('tryAgain') : t('startSpeaking')}
                </Button>
              )}
              {status === 'listening' && (
                <span className="text-sm text-destructive" role="status">
                  {t('listening')}
                </span>
              )}
              {status === 'completed' && transcript && (
                <Button variant="primary" onClick={() => onSubmit?.(transcript)}>
                  <Check className="w-4 h-4" />
                  {t('useQuestion')}
                </Button>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
