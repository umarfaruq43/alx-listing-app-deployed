// components/sections/HeroSection.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HeroBg } from '@/constants';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className='relative bg-white mx-auto w-[95%]'>
      <div className='relative w-full max-w-[1600px] mx-auto h-[481px] rounded-3xl overflow-hidden'>
        {/* Skeleton while image loads */}
        {!loaded && (
          <div className='absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-3xl' />
        )}

        <Image
          src={HeroBg}
          alt='Hero-bg image'
          width={1608}
          height={481}
          loading='lazy'
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover rounded-3xl transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Overlay Text */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 pointer-events-none'>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold leading-tight'>
          Find your favorite <br /> place here!
        </h1>
        <p className='text-base sm:text-lg md:text-2xl mt-4'>
          The best prices for over 2 million properties worldwide
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
