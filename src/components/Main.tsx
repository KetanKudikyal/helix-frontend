import React from 'react';

import Card, { CardTitle } from '@/components/cards';
import AboutCard from '@/components/cards/AboutCard';
import ExpertsCard from '@/components/cards/ExpertsCard';
import PostCard, { PostCardLoading } from '@/components/cards/PostCard';

import { useGetAllQuestionsQuery } from '@/redux/api/questions';

const Main = () => {
  const { data, isLoading, isError, isSuccess } = useGetAllQuestionsQuery();
  return (
    <div className='mb-20 w-full px-4'>
      <div className='container mx-auto flex  w-full flex-col items-start justify-between   lg:flex-row'>
        <div className='h-full w-full  md:w-full  lg:w-[75%] lg:pr-4'>
          {isLoading && (
            <>
              {[...new Array(16).fill(8)].map((i, index) => (
                <PostCardLoading key={index} />
              ))}
            </>
          )}
          {isSuccess && data.length !== 0 && (
            <>
              {data.map((question, index) => (
                <PostCard question={question} key={index} />
              ))}
            </>
          )}
          {isSuccess && data.length === 0 && (
            <Card>
              <CardTitle className='text-center'>No posts available</CardTitle>
            </Card>
          )}
          {isError && (
            <Card>
              <CardTitle className='text-center'>
                Oops, something went wrong
              </CardTitle>
            </Card>
          )}
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
