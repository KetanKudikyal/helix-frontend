import Image, { ImageProps } from 'next/image';
import React, { memo } from 'react';

import clsxm from '@/lib/clsxm';

import { UpvoteIconFill } from '@/components/icons';

const User: React.FC<
  React.ComponentProps<'div'> & {
    user: {
      user_name: string;
    };
  }
> = ({ user, className, ...rest }) => {
  return (
    <div
      className={clsxm('my-3 flex items-start justify-start', className)}
      {...rest}
    >
      <Avatar />

      <div className='ml-3'>
        <div className='mb-0 text-[16px] font-bold text-[#6074DD]'>
          {user.user_name}
        </div>
        <div className='mt-0 text-[12px] font-normal text-[#969696]'>
          2 Answers 1 Question{' '}
        </div>
      </div>
    </div>
  );
};
export const ExpertUser = ({
  user,
}: {
  user: {
    user_name: string;
  };
}) => {
  return (
    <div className='my-5 flex items-start justify-start'>
      <Avatar />
      <div className='ml-3'>
        <div className='mb-0 text-[16px] font-bold text-[#6074DD]'>
          {user.user_name}
        </div>
        <div className='mt-0 flex items-center justify-start text-[12px] font-normal text-[#969696]'>
          47
          <UpvoteIconFill />
          <span className='ml-2'>collected</span>
        </div>
      </div>
    </div>
  );
};

export default memo(User);

export const Avatar: React.FC<Partial<ImageProps>> = ({ ...rest }) => {
  return (
    <Image
      {...rest}
      src={require('../../../public/images/avatar.png')}
      width={44}
      height={44}
      style={{
        borderRadius: 100,
      }}
      alt='avatar'
    />
  );
};
