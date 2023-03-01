import React from 'react';

import AboutCard from '@/components/cards/AboutCard';
import ExpertsCard from '@/components/cards/ExpertsCard';
import PostCard from '@/components/cards/PostCard';

const Main = () => {
  return (
    <div className='mb-20 w-full px-4'>
      <div className='container mx-auto flex  w-full flex-col items-start justify-between   lg:flex-row'>
        <div className='h-full w-full  md:w-full  lg:w-[75%] lg:pr-4'>
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className='h-full w-full  lg:w-[25%] lg:pl-4'>
          <AboutCard />
          <ExpertsCard />
        </div>
      </div>
    </div>
  );
};
export default Main;
