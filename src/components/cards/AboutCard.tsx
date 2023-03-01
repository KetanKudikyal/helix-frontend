import React from 'react';

import Card, { CardProps, CardTitle } from '@/components/cards';
import { ChatIcon, GroupIcon, StarsIcon, UpvoteIcon } from '@/components/icons';

const data = [
  {
    title: '246 Experts',
    icon: <GroupIcon />,
  },
  {
    title: '100k Questions and Answers',
    icon: <ChatIcon />,
  },
  {
    title: '50k Upvotes',
    icon: <UpvoteIcon />,
  },
  {
    title: '145 Tokens Awarded',
    icon: <StarsIcon />,
  },
];
const AboutCard: CardProps = ({ ...rest }) => {
  return (
    <Card className='pb-8' {...rest}>
      <CardTitle className='mb-2'>About</CardTitle>
      {data.map((i, index) => (
        <div key={index} className='flex items-center justify-start  pt-4'>
          <div>{i.icon}</div>
          <p className='ml-4 font-primary text-sm font-medium text-secondary'>
            {i.title}
          </p>
        </div>
      ))}
    </Card>
  );
};

export default AboutCard;
