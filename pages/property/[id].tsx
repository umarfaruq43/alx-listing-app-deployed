import { PROPERTYLISTINGSAMPLE } from '@/constants/index';
import { useRouter } from 'next/router';
import PropertyDetail from '@/components/property/PropertyDetail';
import BookingSection from '@/components/property/BookingSection';
import ReviewSection from '@/components/property/ReviewSection';
import { review } from '@/constants/index';
import PropertyImage from '@/components/property/PropertyImages';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PropertyProps } from '@/interfaces';



export default function PropertyPage() {
  // const router = useRouter();
  // const { id } = router.query;
  const [property, setProperty] = useState<PropertyProps | null>(null);

  // if (!property) return <p>Property not found</p>;

  const router = useRouter();
  const { id } = router.query;
  // const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <>
      <head>
        <title>Property Details</title>
      </head>
      <main>
        <div className=''>
          <PropertyImage property={property} />
        </div>
        <div className='flex w-[95%] mx-auto justify-between '>
          <PropertyDetail property={property} />

          <BookingSection price={property?.price} />
        </div>
        <div className=' w-[95%] mx-auto '>
          <ReviewSection propertyId={property?.id} />
        </div>
      </main>
    </>
  );
}
