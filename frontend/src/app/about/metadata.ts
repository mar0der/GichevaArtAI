import { Metadata } from 'next';
import { generateMetadata as genMetadata } from '@/lib/utils/metadata';

export const generateMetadata = (): Metadata => {
  return genMetadata({
    title: 'About Radka Gicheva',
    description: 'Learn about Radka Gicheva, her artistic journey, and her creative vision.',
    keywords: ['about Gicheva', 'artist biography', 'fine artist', 'contemporary painter'],
    openGraph: {
      type: 'article',
      article: {
        author: 'Gicheva Art',
      }
    }
  });
}; 