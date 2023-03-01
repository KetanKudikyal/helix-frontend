import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { toast } from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import { CancelIcon } from '@/components/icons';

import { Question } from '@/redux/api/question';
import { useAddNewQuestionMutation } from '@/redux/api/questions';
import { useTypedSelector } from '@/redux/store';

export default function QuestionFormModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [value, setValue] = useState<{
    title: string;
    text: string;
  }>({
    title: '',
    text: '',
  });
  const [addNewQuestion, { isLoading }] = useAddNewQuestionMutation();
  const { user } = useTypedSelector((state) => state.userSlice);
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
          <form className='flex min-h-full items-center justify-center py-4 text-center'>
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
                    New Question
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
                    value={value.title}
                    onChange={(e) => {
                      setValue({
                        ...value,
                        title: e.target.value,
                      });
                    }}
                    className='rounded-[20px] border-[1px] border-[#DEDEDE] px-4 py-3 text-[12px] focus:border-[1px] focus:border-[#DEDEDE] focus:outline-none'
                    placeholder='Enter the question title'
                  />
                  <textarea
                    cols={10}
                    value={value.text}
                    onChange={(e) => {
                      setValue({
                        ...value,
                        text: e.target.value,
                      });
                    }}
                    placeholder='Write your question here'
                    className='mt-4 h-[150px] w-full rounded-t-[20px] border-[1px] border-[#DEDEDE] py-3 px-4 text-[12px] focus:border-[1px] focus:border-[#DEDEDE]'
                  />
                  <div className='flex justify-between rounded-b-[20px] border-[1px] border-[#DEDEDE] py-3 px-6'>
                    <div className='flex items-center justify-start'>
                      <Image
                        src={require('../../../public/images/aa.png')}
                        width={20}
                        height={20}
                        className='cursor-pointer'
                        alt='aa'
                      />
                      <Image
                        src={require('../../../public/images/images.png')}
                        width={20}
                        height={20}
                        className='ml-3 cursor-pointer'
                        alt='image'
                      />
                    </div>
                    <Button
                      size='sm'
                      isLoading={isLoading}
                      className='py-1 font-bold'
                      disabled={value.text === '' || value.title === ''}
                      onClick={() => {
                        try {
                          let data: Question = {
                            title: value.title,
                            text: value.text,
                          };
                          if (user) {
                            data = {
                              title: value.title,
                              text: value.text,
                              username: user.username,
                            };
                          }
                          addNewQuestion(data).unwrap();
                          setIsOpen(false);
                          setValue({
                            title: '',
                            text: '',
                          });
                          toast.success('New question added successfully');
                        } catch (error) {
                          toast.error('Oops, something went wrong');
                          setIsOpen(false);
                        }
                      }}
                    >
                      Post
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
