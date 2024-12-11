import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ListingItem({ listing }) {
  return (
    <Link 
      to={`/property/${listing._id}`}
      className="block w-full h-full"
    >
      <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full'>
        <div className='relative w-full md:aspect-[4/3] aspect-[16/9]'>
          <img
            src={listing.imageUrls[0]}
            alt={listing.name}
            className='absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-300'
          />
        </div>
        <div className='p-3 sm:p-4'>
          <h3 className='text-base sm:text-lg font-semibold truncate'>{listing.name}</h3>
          <div className='flex items-center gap-1 text-gray-600 text-xs sm:text-sm mt-1'>
            <FaMapMarkerAlt className='text-[#FF5A3D] flex-shrink-0' />
            <p className='truncate'>{listing.address}</p>
          </div>
          <p className='text-xs sm:text-sm text-gray-600 line-clamp-2 mt-2 mb-3'>{listing.description}</p>
          <div className='flex justify-between items-center gap-2'>
            <p className='font-semibold text-[#FF5A3D] text-sm sm:text-base whitespace-nowrap'>
              ₹{(listing.regularPrice / 10000000).toFixed(2)} Cr
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
