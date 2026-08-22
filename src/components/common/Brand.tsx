'use client';

import Link from 'next/link';
import Image from 'next/image';

interface BrandProps {
  href?: string | null;
  compact?: boolean;
  inverted?: boolean;
}

export function Brand({ href = '/', compact = false, inverted = false }: BrandProps) {
  const content = (
    <span className={`brand-lockup ${compact ? 'brand-lockup-compact' : ''} ${inverted ? 'brand-lockup-inverted' : ''}`}>
      <Image
        src="/nyayg-sathi-logo.png"
        alt="NYAYG SATHI"
        width={1024}
        height={1536}
        priority
        className="brand-logo"
      />
      <span className="brand-title">
        <span className="brand-title-nyayg">NYAYG</span>
        <span className="brand-title-sathi">SATHI</span>
      </span>
    </span>
  );

  return href ? <Link href={href} aria-label="NYAYG SATHI home">{content}</Link> : content;
}
