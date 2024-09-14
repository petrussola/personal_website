import type { Metadata, Viewport } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pere Sola Claver - Frontend developer',
  description: 'Pere Sola Claver - Frontend developer - Personal website',
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
    <html lang="en">
      <body className={oswald.className}>{children}</body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
