import React, { useState } from 'react';

import Button from '@/components/buttons/Button';
import QuestionFormModal from '@/components/modals/QuestionFormModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <QuestionFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <header className='fixed z-10 w-full bg-[#D9D9D9] py-6 px-4'>
        <div className='container mx-auto flex h-full items-center justify-end '>
          <Button
            size='sm'
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Ask a question
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
