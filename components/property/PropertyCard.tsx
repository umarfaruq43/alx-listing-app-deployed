import { PropertyProps } from '@/interfaces';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';



const Card = dynamic(
    () =>
        new Promise<typeof import('@/components/common/Card')>((resolve) => {
            setTimeout(() => resolve(import('@/components/common/Card')), 2000);
        }),
    {
        loading: () => (
            <div className='bg-white rounded-xl overflow-hidden shadow-sm p-4 animate-pulse'>
                <div className='bg-gray-200 h-48 w-full rounded-xl mb-4' />
                <div className='h-4 bg-gray-200 rounded w-3/4 mb-2' />
                <div className='h-4 bg-gray-200 rounded w-1/2 mb-4' />
                <div className='h-5 bg-gray-200 rounded w-1/4' />
            </div>
        ),
    }
);



const PropertyCard = ({ property }: { property: PropertyProps }) => {
    return (
        <div>
            <Link key={property.id} href={`/property/${property.id}`}>
                <Card
                    key={property.name}
                    title={property.name}
                    price={property.price}
                    rating={property.rating}
                    image={property.image}
                    address={property.address}
                />
            </Link>
        </div>
    )
}


export default PropertyCard

