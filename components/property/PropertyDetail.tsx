import { PropertyProps } from '@/interfaces/index';
import { useState, useEffect } from 'react';
import {
  Wifi,
  Bed,
  Bath,
  Sun,
  Mountain,
  Users,
  Bell,
  Sparkles,
  ChefHat,
  CreditCard,
  UtensilsCrossed,
  Flame,
  Martini,
  Waves,
} from 'lucide-react';

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  const [isExpaneded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 609;

  const [showAll, setShowAll] = useState(false);
  const isSmallScreen =
    typeof window !== 'undefined' && window.innerWidth < 640;
  const visibleAmenities =
    isSmallScreen && !showAll
      ? property?.amenities.slice(0, 5)
      : property?.amenities;

  const iconMap: Record<string, React.ReactNode> = {
    bathtub: <Bath className='w-6 h-6 text-gray-500' />,
    bed: <Bed className='w-6 h-6 text-gray-500' />,
    bell: <Bell className='w-6 h-6 text-gray-500' />,
    housekeeping: <Sparkles className='w-6 h-6 text-gray-500' />,
    chef: <ChefHat className='w-6 h-6 text-gray-500' />,
    'credit card': <CreditCard className='w-6 h-6 text-gray-500' />,
    'hot tub': <Flame className='w-6 h-6 text-gray-500' />, // closest icon
    mountain: <Mountain className='w-6 h-6 text-gray-500' />,
    pan: <UtensilsCrossed className='w-6 h-6 text-gray-500' />,
    people: <Users className='w-6 h-6 text-gray-500' />,
    pool: <Waves className='w-6 h-6 text-gray-500' />,
    bartender: <Martini className='w-6 h-6 text-gray-500' />,
    sunrise: <Sun className='w-6 h-6 text-gray-500' />,
    wifi: <Wifi className='w-6 h-6 text-gray-500' />,
  };

  return (
    <>
      <section
        id='description'
        data-section
        className='container pr-0 sm:pr-6 w-[97%] md:w-[62%] border-t border-[#E6E6E6] mt-8 '
      >
        {/* Description */}
        <div className=''>
          <div className='mt-4'>
            <p className='whitespace-pre-line'>
              {isExpaneded
                ? property?.description
                : `${property?.description.slice(0, MAX_LENGTH)}`}
            </p>
          </div>

          <div
            onClick={() => setIsExpanded(!isExpaneded)}
            className='flex items-center space-x-2'
          >
            <p className='text-[#34967C]'>
              {isExpaneded ? 'Show less' : 'Read more'}
            </p>
            {!isExpaneded && (
              <img src='/icons/Arrow.png' alt='Arrow' width={16} height={6} />
            )}
          </div>

          {/* Amenities */}
        </div>

        <div
          id='offers'
          data-section
          className='border-t border-[#E6E6E6] mt-10 mb-8'
        >
          <h2 className='text-2xl font-semibold pt-10'>
            What this place offers
          </h2>
          <p className='pt-2'>
            Each home is fully equipped to meet your needs, with ample space and
            privacy.
          </p>
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 mt-6 text-2xl sm:text-lg'>
            {visibleAmenities.map((list, index) => (
              <li key={index} className='flex items-center gap-2'>
                {iconMap[list] || <Wifi className='w-4 h-4 text-gray-400' />}
                <span className='capitalize'>{list}</span>
              </li>
            ))}
          </ul>

          <div className='border border-black flex justify-center mt-8 h-12 rounded-md '>
            {property?.amenities.length > 5 && (
              <button onClick={() => setShowAll(!showAll)} className=''>
                {showAll ? 'Show less amenities' : 'Show all amenities'}
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetail;
