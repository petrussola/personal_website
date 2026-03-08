import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pere Sola Claver - Frontend Developer & AI-Native Builder',
    short_name: 'Pere Sola Claver',
    description:
      'Founding Frontend Engineer at Seapoint. Building fintech UIs with React, TypeScript, and AI-native workflows. Previously at Pleo, Stripe, Twitter, and Google.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    categories: [
      'frontend developer',
      'pere sola claver',
      'JavaScript',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Claude Code',
      'MCP Integrations',
      'AI-Assisted Development',
    ],
  };
}
