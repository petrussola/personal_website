import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pere Sola Claver - Frontend developer',
    short_name: 'Pere Sola Claver',
    description:
      'Pere Sola Claver - Frontend Developer - Personal website - JavaScript, React, TypeScript, HTML, CSS, Styled Components, Tailwind, Storybook, Jest, React Testing Library, Cypress',
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
      'HTML',
      'CSS',
      'Styled Components',
      'Tailwind',
      'Storybook',
      'Jest',
      'React Testing Library',
      'Cypress',
    ],
  };
}
