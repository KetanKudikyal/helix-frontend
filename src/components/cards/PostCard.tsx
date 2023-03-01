import React from 'react';

import Card, { CardProps, CardTitle } from '@/components/cards';
import User from '@/components/user';

const PostCard: CardProps = ({ ...rest }) => {
  return (
    <Card className='pb-2' {...rest}>
      <CardTitle className='text-[16px] font-bold'>
        MongoDB how to search by using regex but avoiding case sensitive?
      </CardTitle>
      <div className='mb-5 border-b-[1px] border-[#DEDEDE] pt-3 pb-5 text-[15px] font-normal'>
        <p>
          It allows users anywhere in the world to trade crypto without an
          intermediary. UNI, the governance token that allows users to vote on
          key protocol changes, is one of the largest cryptocurrencies by market
          cap..
        </p>
      </div>
      <p className='text-xs font-bold'>Asked by :</p>
      <User
        user={{
          user_name: 'Psuedo Near Expert',
        }}
        className='mt-2'
      />
    </Card>
  );
};

export default PostCard;
