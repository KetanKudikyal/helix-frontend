import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { toast } from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import { CancelIcon } from '@/components/icons';

import { setUserData } from '@/redux/features';
import { useAppDispatch } from '@/redux/store';

export default function AddUsername({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [username, setUsername] = useState<string>('');
  const dispatch = useAppDispatch();

  const loginUser = () => {
    try {
      dispatch(
        setUserData({
          user: {
            username: username,
          },
        })
      );
      setIsOpen(false);
      setUsername('');
    } catch (error) {
      toast.error('Oops, something went wrong');
      setIsOpen(false);
    }
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <form
            className='flex min-h-full items-center justify-center py-4 text-center'
            onSubmit={(e) => {
              e.preventDefault();
              if (!username) {
                return;
              }
              if (username && username.length < 3) {
                toast.error('Username should be atleast of 3 characters');
                return;
              }
              loginUser();
            }}
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-[95%] max-w-md transform overflow-hidden rounded-2xl bg-white py-6 px-6 text-left align-middle shadow-xl transition-all lg:w-full'>
                <div className='flex items-center justify-between border-b-[1px] border-[#DEDEDE] pb-6'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-bold  leading-6 text-[#34324C]'
                  >
                    Add your name
                  </Dialog.Title>
                  <div
                    onClick={() => setIsOpen(false)}
                    className='cursor-pointer'
                  >
                    <CancelIcon />
                  </div>
                </div>

                <div className='mt-4 flex flex-col'>
                  <input
                    type='text'
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className='rounded-[20px] border-[1px] border-[#DEDEDE] px-4 py-3 text-[12px] focus:border-[1px] focus:border-[#DEDEDE] focus:outline-none'
                    placeholder='Enter your name'
                  />
                  <div className='flex justify-end py-3 '>
                    <Button
                      size='sm'
                      className='py-1 font-bold'
                      disabled={username === ''}
                      onClick={loginUser}
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </form>
        </div>
      </Dialog>
    </Transition>
  );
}
