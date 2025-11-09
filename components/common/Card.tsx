import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({
  image,
  title,
  price,
  rating,
  address,
}) => {
  return (
    <div className='bg-white rounded-xl overflow-hidden hover:shadow-lg transition'>
      <img
        src={image}
        alt={title}
        className='w-full h-48 object-cover rounded-xl'
      />
      <div className=' p-2'>
        <div className='flex justify-between items-start'>
          <div className='flex flex-col  items-start'>
            <h3 className='text-lg text-[#161117] font-semibold'>{title}</h3>
            <h6 className='text-md text-[#161117]'>
              {address?.city}, {address?.country}
            </h6>
          </div>

          <div className='flex space-x-1 items-center'>
            <img src='/icons/Star 2.png' alt='Star' width={16} height={2} />
            <p className='text-black'>{rating}</p>
          </div>
        </div>

        <div className='flex justify-end items-end'>
          <strong className='text-black text-lg font-bold mt-2'>
            ${price}
          </strong>
          <p className='text-black'>/n</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
