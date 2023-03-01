import React from 'react';

import Card, { CardProps, CardTitle } from '@/components/cards';

const PostCard: CardProps = ({ ...rest }) => {
  return (
    <Card className='h-40' {...rest}>
      <CardTitle className='text-[16px]'>
        MongoDB how to search by using regex but avoiding case sensitive?
      </CardTitle>
    </Card>
  );
};

export default PostCard;
