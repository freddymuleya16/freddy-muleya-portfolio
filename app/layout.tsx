import type { Metadata, Viewport } from 'next';
import { Archivo, IBM_Plex_Mono, Source_Serif_4 } from 'next/font/google';

import { identity, positioning } from '@/content/profile';

import './globals.css';

const display = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const body = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

const siteUrl = 'https://freddymuleya.vercel.app';
const title = `${identity.name} — ${identity.role} (${identity.specialism})`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${identity.name}`,
  },
  description: positioning,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description: positioning,
    url: siteUrl,
    siteName: identity.name,
    locale: 'en_ZA',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: positioning,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0E2226',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a
          href="#systems"
          className="stamp sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-cobalt focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to the work
        </a>
        {children}
      </body>
    </html>
  );
}
