import * as React from 'react';
import { Toaster } from 'react-hot-toast';

import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className=''>
      <Toaster position='top-center' reverseOrder={false} />
      <Header />
      <div className='pt-[80px]'>{children}</div>
    </div>
  );
}
