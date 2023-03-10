import React, { useState } from 'react';

import Button from '@/components/buttons/Button';
import AddUsername from '@/components/modals/AddUsername';
import QuestionFormModal from '@/components/modals/QuestionFormModal';

import { useTypedSelector } from '@/redux/store';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUsernameModalOpen, setUsernameModal] = useState(false);
  const { user } = useTypedSelector((state) => state.userSlice);
  return (
    <>
      <QuestionFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <AddUsername isOpen={isUsernameModalOpen} setIsOpen={setUsernameModal} />
      <header className='fixed z-10 w-full bg-[#D9D9D9] py-6 px-4'>
        <div className='mx-auto flex h-full max-w-6xl items-center justify-end '>
          <Button
            size='sm'
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Ask a question
          </Button>
          {user ? (
            <div
              className='mb-0 ml-2 cursor-pointer rounded-md bg-[#969696] px-4 py-2 text-[16px] font-bold text-[#fff]'
              onClick={() => {
                setUsernameModal(true);
              }}
            >
              {user.username}
            </div>
          ) : (
            <Button
              size='sm'
              className='ml-2'
              onClick={() => {
                setUsernameModal(true);
              }}
            >
              Login
            </Button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
