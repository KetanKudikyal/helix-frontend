import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='h-80  px-4 pt-14  pb-10'>
      <div className='mx-auto flex h-full w-full  max-w-6xl items-center justify-center  rounded-[32px] bg-[#969696]'>
        <div className='lg:h-[90%] lg:w-[40%] '>
          <Image
            src={require('../../public/images/near.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
            alt='near_logo'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
