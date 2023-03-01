import React from 'react';

import Card, { CardProps, CardTitle } from '@/components/cards';

const ExpertsCard: CardProps = ({ ...rest }) => {
  return (
    <Card {...rest}>
      <CardTitle>Top Experts</CardTitle>
    </Card>
  );
};

export default ExpertsCard;
