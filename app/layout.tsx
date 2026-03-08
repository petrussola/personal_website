import type { Metadata, Viewport } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { Providers } from './providers';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pere Sola Claver - Frontend Developer & AI-Native Builder',
  description:
    'Founding Frontend Engineer at Seapoint. Building fintech UIs with React, TypeScript, and AI-native workflows. Previously at Pleo, Stripe, Twitter, and Google.',
  metadataBase: new URL('https://www.peresola.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pere Sola Claver - Frontend Developer & AI-Native Builder',
    description:
      'Founding Frontend Engineer at Seapoint. Building fintech UIs with React, TypeScript, and AI-native workflows.',
    url: 'https://www.peresola.com',
    siteName: 'Pere Sola Claver',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Pere Sola Claver - Frontend Developer & AI-Native Builder',
    description:
      'Founding Frontend Engineer at Seapoint. Building fintech UIs with React, TypeScript, and AI-native workflows.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={oswald.className}>
        <Providers>{children}</Providers>
      </body>

      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
