import React, { memo } from 'react';

import Card, { CardTitle } from '@/components/cards';
import User from '@/components/user';

import { Question } from '@/redux/api/question';

const PostCard: React.FC<
  React.ComponentPropsWithRef<'div'> & {
    children?: React.ReactNode;
    question: Question;
  }
> = ({ question, ...rest }) => {
  return (
    <Card className='pb-2' {...rest}>
      <CardTitle className='text-[16px] font-bold'>{question.title}</CardTitle>
      <div className='mb-5 border-b-[1px] border-[#DEDEDE] pt-3 pb-5 text-[15px] font-normal'>
        <p>{question.text}</p>
      </div>
      <p className='text-xs font-bold'>Asked by :</p>
      <User
        user={{
          user_name: question.username as string,
        }}
        className='mt-2'
      />
    </Card>
  );
};

export const PostCardLoading = () => {
  return (
    <Card className='pb-2'>
      <div className='mt-2 h-4 w-[70%] animate-pulse rounded-xl bg-[#ccc] text-xs font-bold' />
      <div className='mb-5 border-b-[1px] border-[#DEDEDE] pt-3 pb-5 text-[15px] font-normal'>
        <div className='mt-2 h-[12px] w-[90%] animate-pulse rounded-xl bg-[#ccc] text-xs font-bold' />
        <div className='mt-2 h-[12px] w-[80%] animate-pulse rounded-xl bg-[#ccc] text-xs font-bold' />
        <div className='mt-2 h-[12px] w-[60%] animate-pulse rounded-xl bg-[#ccc] text-xs font-bold' />
      </div>

      <div className='my-3 flex w-full items-start justify-start'>
        <div className='h-10 w-10 animate-pulse rounded-full bg-[#ccc]'></div>
        <div className='ml-3'>
          <div className='h-[14px] w-[150px] animate-pulse rounded-xl bg-[#ccc] ' />
          <div className='mt-2 h-[14px] w-[100px] animate-pulse rounded-xl bg-[#ccc] ' />
        </div>
      </div>
    </Card>
  );
};
export default memo(PostCard);
