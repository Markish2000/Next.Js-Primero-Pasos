import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'AboutPage',
  keywords: ['About Page', 'Marcos', 'Parella'],
};

export default function AboutPage() {
  return <span className='text-7xl'>About Page</span>;
}
