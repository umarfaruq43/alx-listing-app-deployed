const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <>
      <div className='hidden md:block bg-white sticky top-10 p-6 shadow-md h-[400px] rounded-lg w-[35%] mt-8'>
        <div className='text-xl text-[#8E8E8E] font-semibold'>
          {' '}
          <span className='text-black'>${price}</span> /night
        </div>
        <div className='mt-4'>
          <label className='text-black'>Check in</label>
          <input
            type='date'
            className='border border-[#E6E6E6] p-2 w-full mt-2 text-[#E6E6E6]'
          />
        </div>
        <div className='mt-4'>
          <label className='text-black'>Check out</label>
          <input
            type='date'
            className='border border-[#E6E6E6] p-2 w-full mt-2 text-[#E6E6E6]'
          />
        </div>

        <div className='mt-4 flex justify-between'>
          <p className='text-[#8E8E8E]'>${price} x 7 nights</p>
          <p className='text-black'>
            <strong>${price * 7}</strong>
          </p>
        </div>

        {/* Total payment */}
        <div className='mt-4 flex justify-between items-end border-t border-[#E6E6E6]  '>
          <p className='text-[#8E8E8E] mt-4'>Total payment:</p>
          <p className='text-[#34967C]'>
            <strong>${price * 7}</strong>
          </p>
        </div>

        {/* Reserve button */}
        <button className='mt-4 w-[100%] bg-[#34967C] text-white py-2 px-4 rounded-md'>
          Reserve now
        </button>
      </div>

      {/* Booking Section for Mobile */}
      <div className='flex md:hidden items-center justify-between fixed bottom-0 left-0 w-full bg-white p-4 border-t border-[#C5C5C5]'>
        <div className='flex flex-col w-[40%] '>
          <div className='text-xl text-[#8E8E8E] font-semibold'>
            <span className='text-black'>${price}</span> /night
          </div>
          <div className='flex items-end'>
            <input
              name='Date'
              type='text'
              className='outline-none p-2 w-full text-[#E6E6E6]'
              placeholder='Add date'
            />
          </div>
        </div>
        <div className='w-[50%] pb-4 '>
          <button className='mt-4 w-[100%] bg-[#34967C] text-white py-2 px-4 rounded-md'>
            Reserve now
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingSection;
