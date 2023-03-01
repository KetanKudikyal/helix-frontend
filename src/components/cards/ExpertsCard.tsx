import React from 'react';

import Card, { CardProps, CardTitle } from '@/components/cards';
import { ExpertUser } from '@/components/user';

const experts = [
  {
    user_name: 'Pseudo Near Expert',
  },
  {
    user_name: 'Near Expert',
  },
  {
    user_name: 'Bitcoin Maxi',
  },
  {
    user_name: 'Ethereum Maxi',
  },
];
const ExpertsCard: CardProps = ({ ...rest }) => {
  return (
    <Card {...rest}>
      <CardTitle className='mb-6'>Top Experts</CardTitle>
      {experts.map((i, indx) => (
        <ExpertUser user={i} key={indx} />
      ))}
    </Card>
  );
};

export default ExpertsCard;
