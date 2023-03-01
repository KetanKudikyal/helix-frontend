import React from 'react';

import Button from '@/components/buttons/Button';

const Header = () => {
  return (
    <header className='w-full bg-[#D9D9D9] py-6 px-4'>
      <div className='container mx-auto flex h-full items-center justify-end '>
        <Button size='sm'>Ask a question</Button>
      </div>
    </header>
  );
};

export default Header;
