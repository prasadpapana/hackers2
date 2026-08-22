'use client';

import { FormEvent, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { BadgeCheck, Search, Star, ThumbsUp, Trash2 } from 'lucide-react';
import { apiClient } from '@/lib/api';
import { useAppStore } from '@/lib/store';
import { useTranslations } from '@/lib/i18n';
import type { Review, ReviewList } from '@/types';
import { Alert, Modal } from '@/components/common/Modal';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Input, Textarea, Select } from '@/components/common/Forms';

const emptySummary: ReviewList['summary'] = { averageRating: 0, totalReviews: 0, distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } };
const pageSize = 6;

type SortOrder = 'recent' | 'highest' | 'lowest' | 'helpful';

function Stars({ value, interactive = false, onChange }: { value: number; interactive?: boolean; onChange?: (value: number) => void }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const Icon = star <= value ? Star : Star;
        return interactive ? (
          <button key={star} type="button" className="rounded-sm text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onClick={() => onChange?.(star)} aria-label={`${star} stars`}>
            <Icon className={`h-6 w-6 ${star <= value ? 'fill-primary' : ''}`} />
          </button>
        ) : <Icon key={star} className={`h-4 w-4 ${star <= value ? 'fill-primary text-primary' : 'text-muted-foreground/40'}`} />;
      })}
    </div>
  );
}

interface ReviewFormProps {
  review?: Review;
  onClose: () => void;
  onSaved: () => void;
}

function ReviewForm({ review, onClose, onSaved }: ReviewFormProps) {
  const t = useTranslations();
  const [rating, setRating] = useState(review?.rating ?? 0);
  const [reviewText, setReviewText] = useState(review?.reviewText ?? '');
  const [category, setCategory] = useState(review?.category ?? '');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    const trimmed = reviewText.trim();
    if (rating < 1 || rating > 5) return setError(t('reviewRatingRequired'));
    if (trimmed.length < 10) return setError(t('reviewTextRequired'));
    if (trimmed.length > 2000) return setError(t('reviewTooLong'));
    setSaving(true);
    setError('');
    try {
      const response = review
        ? await apiClient.updateReview(review.id, { rating, reviewText: trimmed, category: category.trim() || undefined })
        : await apiClient.createReview({ rating, reviewText: trimmed, category: category.trim() || undefined });
      if (!response.success) throw new Error(response.error || t('reviewsError'));
      onSaved();
      onClose();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : t('reviewsError'));
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="review-rating">{t('reviewRating')}</label>
        <div id="review-rating"><Stars value={rating} interactive onChange={setRating} /></div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="review-text">{t('reviewText')}</label>
          <Textarea id="review-text" value={reviewText} onChange={(event) => setReviewText(event.target.value)} maxLength={2000} rows={5} placeholder={t('reviewPlaceholder')} />
        <p className="mt-1 text-right text-xs text-muted-foreground">{reviewText.length}/2000</p>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="review-category">{t('reviewCategory')}</label>
        <Input id="review-category" value={category} onChange={(event) => setCategory(event.target.value)} maxLength={80} />
      </div>
      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={onClose}>{t('cancel')}</Button>
        <Button type="submit" isLoading={saving}>{t('submitReview')}</Button>
      </div>
    </form>
  );
}

export function ReviewsSection() {
  const t = useTranslations();
  const user = useAppStore((state) => state.user);
  const [reviewData, setReviewData] = useState<ReviewList>({ reviews: [], summary: emptySummary, page: 1, pageSize, totalPages: 0 });
  const [ratingFilter, setRatingFilter] = useState<number | undefined>();
  const [sort, setSort] = useState<SortOrder>('recent');
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [editingReview, setEditingReview] = useState<Review>();
  const [deletingReview, setDeletingReview] = useState<Review>();

  const loadReviews = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await apiClient.getReviews({ page, pageSize, rating: ratingFilter, search: search || undefined, sort });
      if (!response.success || !response.data) throw new Error(response.error || t('reviewsError'));
      setReviewData(response.data);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : t('reviewsError'));
    } finally {
      setLoading(false);
    }
  }, [page, ratingFilter, search, sort, t]);

  useEffect(() => {
    const timer = window.setTimeout(() => { void loadReviews(); }, 0);
    return () => window.clearTimeout(timer);
  }, [loadReviews]);

  function startNewReview() {
    setEditingReview(undefined);
    setFormOpen(true);
  }

  async function deleteReview() {
    if (!deletingReview) return;
    try {
      const response = await apiClient.deleteReview(deletingReview.id);
      if (!response.success) throw new Error(response.error || t('reviewsError'));
      setDeletingReview(undefined);
      void loadReviews();
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : t('reviewsError'));
    }
  }

  async function markHelpful(review: Review) {
    if (!user || review.helpfulByCurrentUser) return;
    try {
      const response = await apiClient.markReviewHelpful(review.id);
      if (!response.success || !response.data) return;
      setReviewData((current) => ({ ...current, reviews: current.reviews.map((item) => item.id === review.id ? { ...item, helpfulCount: response.data!.helpfulCount, helpfulByCurrentUser: response.data!.helpful } : item) }));
    } catch {
      setError(t('reviewsError'));
    }
  }

  const { summary } = reviewData;
  return (
    <section id="reviews" className="border-y border-primary/15 bg-primary/5 px-5 py-24 text-foreground sm:px-8 sm:py-32" data-reveal>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t('reviewsEyebrow')}</p><h2 className="text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">{t('userReviews')}</h2><p className="mt-4 max-w-xl text-base text-muted-foreground">{t('reviewsSubtitle')}</p></div>
          {user ? <Button onClick={startNewReview}><Star className="h-4 w-4" />{t('writeReview')}</Button> : <Link href="/login" className="inline-flex min-h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">{t('loginToReview')}</Link>}
        </div>
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <Card className="h-fit border-primary/15 bg-card/90"><p className="text-sm font-medium text-muted-foreground">{t('overallRating')}</p><div className="mt-3 flex items-end gap-2"><span className="text-4xl font-semibold">{summary.totalReviews ? summary.averageRating.toFixed(1) : '0.0'}</span><span className="pb-1 text-muted-foreground">/ 5.0</span></div><Stars value={Math.round(summary.averageRating)} /><p className="mt-2 text-sm text-muted-foreground">{t('basedOn')} {summary.totalReviews} {t('reviewsCount')}</p><div className="mt-6 space-y-2">{[5, 4, 3, 2, 1].map((rating) => { const count = summary.distribution[rating as 1 | 2 | 3 | 4 | 5] || 0; const width = summary.totalReviews ? `${(count / summary.totalReviews) * 100}%` : '0%'; return <div key={rating} className="flex items-center gap-2 text-xs"><span className="w-8 text-muted-foreground">{rating} {t('starShort')}</span><div className="h-2 flex-1 overflow-hidden rounded-full bg-muted"><div className="h-full bg-primary" style={{ width }} /></div><span className="w-5 text-right text-muted-foreground">{count}</span></div>; })}</div></Card>
          <div className="min-w-0">
            <div className="mb-5 flex flex-col gap-3 md:flex-row"><form onSubmit={(event) => { event.preventDefault(); setPage(1); setSearch(searchInput.trim()); }} className="relative flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input value={searchInput} onChange={(event) => setSearchInput(event.target.value)} placeholder={t('searchReviews')} className="h-10 pl-9" /></form><Select value={ratingFilter?.toString() ?? ''} onChange={(event) => { setPage(1); setRatingFilter(event.target.value ? Number(event.target.value) : undefined); }} options={[{ value: '', label: t('all') }, ...[5, 4, 3, 2, 1].map((rating) => ({ value: rating.toString(), label: `${rating} ${t('stars')}` }))]} className="w-full md:w-32" /><Select value={sort} onChange={(event) => { setPage(1); setSort(event.target.value as SortOrder); }} options={[{ value: 'recent', label: t('mostRecent') }, { value: 'highest', label: t('highestRated') }, { value: 'lowest', label: t('lowestRated') }, { value: 'helpful', label: t('mostHelpful') }]} className="w-full md:w-36" /></div>
            {loading && <p className="py-12 text-center text-sm text-muted-foreground">{t('loadingReviews')}</p>}
            {error && !loading && <p role="alert" className="py-8 text-center text-sm text-destructive">{error}</p>}
            {!loading && !error && reviewData.reviews.length === 0 && <div className="rounded-lg border border-dashed border-border px-6 py-12 text-center"><h3 className="text-lg font-semibold">{t('noReviewsYet')}</h3><p className="mt-2 text-sm text-muted-foreground">{t('firstReview')}</p>{user && <Button className="mt-5" onClick={startNewReview}>{t('writeReview')}</Button>}</div>}
            {!loading && !error && reviewData.reviews.length > 0 && <div className="grid gap-4">{reviewData.reviews.map((review) => <Card key={review.id} className="border-primary/10 bg-card/90"><div className="flex items-start justify-between gap-4"><div className="flex min-w-0 items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/15 font-semibold text-primary">{review.user.avatarUrl ? <img src={review.user.avatarUrl} alt="" className="h-full w-full object-cover" /> : review.user.displayName.slice(0, 1).toUpperCase()}</div><div className="min-w-0"><p className="truncate text-sm font-medium">{review.user.displayName}</p><div className="flex flex-wrap items-center gap-2"><Stars value={review.rating} />{review.verified && <Badge variant="success"><BadgeCheck className="h-3 w-3" />{t('verifiedUser')}</Badge>}</div></div></div><time dateTime={review.createdAt} className="shrink-0 text-xs text-muted-foreground">{new Date(review.createdAt).toLocaleDateString()}</time></div><p className="mt-5 whitespace-pre-wrap text-sm leading-6 text-card-foreground">{review.reviewText}</p><div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4"><div className="flex items-center gap-2">{review.category && <Badge>{review.category}</Badge>}<Button variant="ghost" size="sm" disabled={!user || review.helpfulByCurrentUser} onClick={() => void markHelpful(review)}><ThumbsUp className="h-4 w-4" />{t('helpful')} {review.helpfulCount}</Button></div>{user?.id === review.userId && <div className="flex gap-1"><Button variant="ghost" size="sm" onClick={() => { setEditingReview(review); setFormOpen(true); }}>{t('edit')}</Button><Button variant="ghost" size="sm" onClick={() => setDeletingReview(review)}><Trash2 className="h-4 w-4" />{t('delete')}</Button></div>}</div></Card>)}</div>}
            {!loading && !error && reviewData.totalPages > 1 && <div className="mt-6 flex items-center justify-between"><Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage((current) => current - 1)}>{t('previous')}</Button><span className="text-sm text-muted-foreground">{page} / {reviewData.totalPages}</span><Button variant="outline" size="sm" disabled={page >= reviewData.totalPages} onClick={() => setPage((current) => current + 1)}>{t('next')}</Button></div>}
          </div>
        </div>
      </div>
      <Modal open={formOpen} onClose={() => setFormOpen(false)} title={editingReview ? t('editReview') : t('writeReview')}><ReviewForm review={editingReview} onClose={() => setFormOpen(false)} onSaved={() => void loadReviews()} /></Modal>
      <Alert open={!!deletingReview} onClose={() => setDeletingReview(undefined)} title={t('deleteReview')} message={t('deleteReviewConfirm')} confirmText={t('delete')} onConfirm={() => void deleteReview()} type="error" />
    </section>
  );
}
