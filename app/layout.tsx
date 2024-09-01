import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pere Solà Claver',
  description: 'Personal website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  );
}
