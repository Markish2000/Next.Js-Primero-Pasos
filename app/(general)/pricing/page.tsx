import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'PricingPage',
  keywords: ['Pricing Page', 'Marcos', 'Parella'],
};

export default function PricingPage() {
  return (
    <>
      <span className='text-7xl'>Pricing Page</span>
    </>
  );
}
