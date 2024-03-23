import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'ContactPage',
  keywords: ['Contact Page', 'Marcos', 'Parella'],
};

export default function ContactPage() {
  return (
    <>
      <span className='text-7xl'>Contact Page</span>
    </>
  );
}
