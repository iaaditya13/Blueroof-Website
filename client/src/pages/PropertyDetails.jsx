import { useParams, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaParking, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';
import { allListings } from '../data/propertyData';

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  // Get property data based on ID
  useEffect(() => {
    const foundProperty = allListings.find(p => p._id === id);
    if (foundProperty) {
      setProperty(foundProperty);
    } else {
      // If property not found, redirect to explore page
      navigate('/explore');
    }
  }, [id, navigate]);

  if (!property) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-hidden">
        {/* Image Slider */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 sm:mb-8">
          <div className="aspect-[16/9] w-full relative">
            <Swiper
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="h-[300px] md:h-[400px] lg:h-[500px]"
            >
              {property.imageUrls.map((url, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full md:aspect-[4/3] aspect-[16/9]">
                    <img
                      src={url}
                      alt={`Property ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Property Info */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="w-full sm:w-auto">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{property.name}</h1>
              <p className="text-gray-600 flex items-center gap-2 mt-2 text-sm sm:text-base">
                <FaMapMarkerAlt className="text-[#FF5A3D] flex-shrink-0" />
                {property.address}
              </p>
            </div>
            <div className="w-full sm:w-auto text-left sm:text-right">
              <p className="text-xl sm:text-2xl font-bold text-[#FF5A3D]">
                ₹{(property.regularPrice / 10000000).toFixed(2)} Cr
              </p>
              <p className="text-gray-600 text-sm sm:text-base">{property.type}</p>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <a
              href={`https://wa.me/+919876543210?text=Hi,%20I'm%20interested%20in%20the%20property%20${encodeURIComponent(property.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base"
            >
              <FaWhatsapp className="text-xl flex-shrink-0" />
              Contact on WhatsApp
            </a>
            <a
              href="https://youtube.com/channel/your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
            >
              <FaYoutube className="text-xl flex-shrink-0" />
              Watch Video Tour
            </a>
            <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-3 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              <FaInstagram className="text-xl flex-shrink-0" />
              Follow on Instagram
            </a>
          </div>
        </div>

        {/* Property Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Description */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{property.description}</p>
          </div>

          {/* Quick Info */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BiBuildingHouse className="text-[#FF5A3D] text-xl sm:text-2xl flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Developer</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{property.developer}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#FF5A3D] text-xl sm:text-2xl flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Location</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{property.location}, {property.region}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaParking className="text-[#FF5A3D] text-xl sm:text-2xl flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Parking</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{property.parking}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mt-6 sm:mt-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {property.specifications.map((spec, index) => (
              <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
                {spec}
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mt-6 sm:mt-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center text-sm sm:text-base">
                {amenity}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
