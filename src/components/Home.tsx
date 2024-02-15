import { GiftIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Gift from './Gift';
import { useState } from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className='bg-center bg-cover min-h-screen font-patrick-hand backdrop-opacity-20 bg-gradient-to-b from-pink-400 to-purple-600 flex relative'>
        <HeartIcon
          className='size-48 md:size-72 lg:96 animate-ping absolute top-1/3 left-1/3'
          fill='#D51A3A'
          strokeWidth='0'
          style={{ animationDuration: '1.5s' }}
        />
        <HeartIcon
          className='size-48 md:size-72  animate-ping absolute top-1/3 right-1/3'
          fill='#D51A3A'
          strokeWidth='0'
          style={{ animationDuration: '1.5s' }}
        />

        <div className='flex justify-center flex-col items-center relative z-10 p-10 space-y-12'>
          <h1 className='text-4xl lg:text-8xl font-semibold #B51A3Amb-8 leading-tight font-cursive animate-pulse'>
            Happy Valentine's Day!
          </h1>

          <p className='text-4xl text-gray-700 rounded-full py-3 px-6 w-11/12 md:w-2/3 lg:w-1/2'>
            I adore you more than words can express. Your smile brightens my
            day, and your love fills my heart with joy. Being with you feels
            like coming home, and I cherish every moment we share. Happy
            Valentine's Day, my love
          </p>
          <button>
            <div
              className='inline-flex items-center px-8 py-3 gap-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-pink-500 to-red-500 animate-bounce'
              onClick={() => setIsOpen(true)}
            >
              <HeartIcon className='-ml-1 mr-3 size-12' />
              <p className='text-2xl'>Unwrap your gift</p>
              <GiftIcon className='size-12' />
            </div>
          </button>
          <Gift state={[isOpen, setIsOpen]} />
        </div>
      </div>
    </>
  );
};

export default Home;
