import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import { FaSearch, FaMapMarkerAlt, FaRegBuilding, FaHandshake } from 'react-icons/fa';
import { BsHouseDoor, BsBuilding } from 'react-icons/bs';
import Footer from '../components/Footer'; // Add Footer component import
import { featuredProperties } from '../utils/dummyData';

export default function Home() {
  const navigate = useNavigate();
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  SwiperCore.use([Navigation]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/explore?searchTerm=${encodeURIComponent(searchTerm)}`);
    }
  };

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const [offerRes, saleRes, rentRes] = await Promise.all([
          fetch('/api/listing/get?offer=true&limit=4'),
          fetch('/api/listing/get?type=sale&limit=4'),
          fetch('/api/listing/get?type=rent&limit=4')
        ]);

        if (!offerRes.ok || !saleRes.ok || !rentRes.ok) {
          console.error('Failed to fetch listings');
          return;
        }

        const [offerData, saleData, rentData] = await Promise.all([
          offerRes.json(),
          saleRes.json(),
          rentRes.json()
        ]);

        setOfferListings(offerData || []);
        setSaleListings(saleData || []);
        setRentListings(rentData || []);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className='relative bg-[#f0f5ff] min-h-[90vh] flex items-center'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent'></div>
        <div className='max-w-6xl mx-auto px-4 z-10 w-full'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
                Crafted for <br />
                those who seek <br />
                the best
              </h1>
              <p className='text-xl text-gray-600 mb-8 max-w-lg'>
                Explore properties, projects, and locations to suit your lifestyle. Find your perfect home with BlueRoof.
              </p>
              <form onSubmit={handleSearch} className='relative max-w-2xl'>
                <input
                  type='text'
                  placeholder='Find your ideal property, project, or location...'
                  className='w-full px-6 py-4 rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 pr-12'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type='submit' className='absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition'>
                  <FaSearch />
                </button>
              </form>
            </div>
            <div className='hidden md:block'>
              <img 
                src='/src/assets/hero.png' 
                alt='Real Estate'
                className='w-full h-auto'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className='max-w-6xl mx-auto py-12 px-4'>
        <h2 className='text-3xl font-bold text-gray-900 mb-8'>Featured Properties</h2>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className='h-[500px] rounded-2xl overflow-hidden'
        >
          <SwiperSlide>
            <div className='relative w-full h-full'>
              <img 
                src={new URL('../assets/1.jpg', import.meta.url).href}
                alt='Luxury Home'
                className='w-full h-full object-cover'
              />
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8'>
                <h3 className='text-white text-2xl font-bold mb-2'>Luxury Villa</h3>
                <p className='text-white/90'>Experience the epitome of luxury living</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative w-full h-full'>
              <img 
                src={new URL('../assets/2.jpg', import.meta.url).href}
                alt='Modern Apartment'
                className='w-full h-full object-cover'
              />
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8'>
                <h3 className='text-white text-2xl font-bold mb-2'>Modern Apartments</h3>
                <p className='text-white/90'>Contemporary living in the heart of the city</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative w-full h-full'>
              <img 
                src={new URL('../assets/3.jpg', import.meta.url).href}
                alt='Beachfront Property'
                className='w-full h-full object-cover'
              />
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8'>
                <h3 className='text-white text-2xl font-bold mb-2'>Beachfront Homes</h3>
                <p className='text-white/90'>Wake up to stunning ocean views</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative w-full h-full'>
              <img 
                src={new URL('../assets/4.jpg', import.meta.url).href}
                alt='Countryside Estate'
                className='w-full h-full object-cover'
              />
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8'>
                <h3 className='text-white text-2xl font-bold mb-2'>Countryside Estates</h3>
                <p className='text-white/90'>Peaceful living in nature's embrace</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Featured Properties Section */}
      <div className='max-w-6xl mx-auto py-16 px-4'>
        <h2 className='text-4xl font-bold text-gray-800 mb-6'>Featured Properties</h2>
        <Link to="/search" className='text-blue-600 mb-8 hover:underline cursor-pointer block'>
          Show more properties
        </Link>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {featuredProperties.map((property) => (
            <Link to={`/property/${property._id}`} key={property._id}>
              <div className='bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105'>
                <div className='relative h-64'>
                  <img 
                    src={property.image}
                    alt={property.name}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute top-4 right-4 bg-[#FF5A3D] text-white px-3 py-1 rounded-full text-sm'>
                    {property.type}
                  </div>
                </div>
                <div className='p-6 bg-[#0A0B2E] text-white'>
                  <h3 className='text-2xl font-bold mb-2'>{property.name}</h3>
                  <p className='flex items-center gap-2 text-gray-300 mb-2'>
                    <span className='inline-block'>📍</span> {property.location}
                  </p>
                  <p className='text-sm text-gray-300 mb-4 line-clamp-2'>
                    {property.description}
                  </p>
                  <div className='flex items-center justify-between'>
                    <p className='text-2xl font-bold text-[#FF5A3D]'>₹{property.price}Cr</p>
                    <div className='flex gap-2'>
                      <span className='text-gray-300'>{property.bedrooms} beds</span>
                      <span className='text-gray-300'>•</span>
                      <span className='text-gray-300'>{property.bathrooms} baths</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Signature Property Section */}
      <div className='max-w-6xl mx-auto py-16 px-4'>
        <h2 className='text-4xl font-bold text-gray-800 mb-6'>Signature property</h2>
        <p className='text-blue-600 mb-8 hover:underline cursor-pointer'>Show more places ready to move</p>
        
        <div className='bg-white rounded-2xl overflow-hidden shadow-lg'>
          <div className='flex flex-col md:flex-row'>
            {/* Property Image */}
            <div className='md:w-2/3'>
              <img 
                src={new URL('../assets/5.jpg', import.meta.url).href}
                alt='Kalpataru Vivant'
                className='w-full h-full object-cover'
              />
            </div>
            
            {/* Property Details */}
            <div className='md:w-1/3 bg-[#0A0B2E] text-white p-8 flex flex-col justify-between'>
              <div>
                <h3 className='text-3xl font-bold mb-3'>Kalpataru Vivant</h3>
                <p className='text-gray-300 mb-4'>Andheri East, Western Suburbs, Mumbai</p>
                <p className='text-[#FF5A3D] text-xl font-semibold mb-4'>2.45 Cr - 3.78 Cr</p>
                <p className='text-lg mb-6'>2, 3 BHK Apartments</p>
              </div>
              
              <button className='w-full bg-[#FF5A3D] text-white py-3 px-6 rounded-lg hover:bg-[#FF4425] transition duration-300'>
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Developers Section */}
      <div className='max-w-6xl mx-auto py-16 px-4'>
        <h2 className='text-4xl font-bold text-gray-800 mb-12'>Featured Developers</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Lodha Developer Card */}
          <div className='bg-white rounded-xl p-6 shadow-lg text-center'>
            <div className='w-24 h-24 mx-auto mb-4 rounded-full bg-[#FF5A3D]/10 flex items-center justify-center'>
              <img 
                src="https://i.imgur.com/8zWPvXX.png"
                alt="Lodha"
                className='w-16 h-16 object-contain'
              />
            </div>
            <h3 className='text-2xl font-bold mb-2'>Lodha</h3>
            <p className='flex items-center justify-center gap-2 text-gray-600 mb-3'>
              <span className='inline-block'>📍</span> Kokshet Road
            </p>
            <p className='text-gray-600 mb-4'>
              Premium homes with world-class amenities and breathtaking views.
            </p>
            <p className='flex items-center justify-center gap-1 text-[#FF5A3D] font-medium'>
              <span className='inline-block'>📍</span> Thane
            </p>
          </div>

          {/* Piramal Developer Card */}
          <div className='bg-white rounded-xl p-6 shadow-lg text-center'>
            <div className='w-24 h-24 mx-auto mb-4 rounded-full bg-[#FF5A3D]/10 flex items-center justify-center'>
              <img 
                src="https://i.imgur.com/JQZqQiX.png"
                alt="Piramal"
                className='w-16 h-16 object-contain'
              />
            </div>
            <h3 className='text-2xl font-bold mb-2'>Piramal</h3>
            <p className='flex items-center justify-center gap-2 text-gray-600 mb-3'>
              <span className='inline-block'>📍</span> Lower Parel
            </p>
            <p className='text-gray-600 mb-4'>
              Luxury residences that redefine modern living in Mumbai.
            </p>
            <p className='flex items-center justify-center gap-1 text-[#FF5A3D] font-medium'>
              <span className='inline-block'>📍</span> Mumbai
            </p>
          </div>

          {/* Runwal Developer Card */}
          <div className='bg-white rounded-xl p-6 shadow-lg text-center'>
            <div className='w-24 h-24 mx-auto mb-4 rounded-full bg-[#FF5A3D]/10 flex items-center justify-center'>
              <img 
                src="https://i.imgur.com/L5AqUXk.png"
                alt="Runwal"
                className='w-16 h-16 object-contain'
              />
            </div>
            <h3 className='text-2xl font-bold mb-2'>Runwal</h3>
            <p className='flex items-center justify-center gap-2 text-gray-600 mb-3'>
              <span className='inline-block'>📍</span> Mulund West
            </p>
            <p className='text-gray-600 mb-4'>
              Affordable yet stylish homes in a vibrant community.
            </p>
            <p className='flex items-center justify-center gap-1 text-[#FF5A3D] font-medium'>
              <span className='inline-block'>📍</span> Mumbai
            </p>
          </div>
        </div>
      </div>

      {/* Latest News and Articles Section */}
      <div className='max-w-6xl mx-auto py-16 px-4'>
        <h2 className='text-4xl font-bold text-gray-800 mb-12'>Latest News and Articles</h2>
        
        <Swiper
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className='h-[400px] rounded-2xl'
        >
          {/* Article 1 */}
          <SwiperSlide>
            <div className='grid md:grid-cols-2 h-full'>
              <img 
                src="https://i.imgur.com/qVb5dGs.jpg" 
                alt="Fire Safety"
                className='w-full h-full object-cover'
              />
              <div className='bg-white p-8'>
                <h3 className='text-2xl font-bold mb-4'>Maharashtra issues special fire safety regulations</h3>
                <p className='text-gray-600 mb-4'>
                  Maharashtra government on October 11, 2024 has issued final notifications to enforce fire safety norms for vulnerable buildings in Mumbai and Maharashtra.
                </p>
                <button className='text-[#FF5A3D] font-semibold hover:underline'>Read More →</button>
              </div>
            </div>
          </SwiperSlide>

          {/* Article 2 */}
          <SwiperSlide>
            <div className='grid md:grid-cols-2 h-full'>
              <img 
                src="https://i.imgur.com/mB6JvxP.jpg" 
                alt="Antilia"
                className='w-full h-full object-cover'
              />
              <div className='bg-white p-8'>
                <h3 className='text-2xl font-bold mb-4'>Everything you want to know about Mukesh Ambani's Antilia house</h3>
                <p className='text-gray-600 mb-4'>
                  The Ambani house is the world's most expensive biggest residential property.
                </p>
                <button className='text-[#FF5A3D] font-semibold hover:underline'>Read More →</button>
              </div>
            </div>
          </SwiperSlide>

          {/* Article 3 */}
          <SwiperSlide>
            <div className='grid md:grid-cols-2 h-full'>
              <img 
                src="https://i.imgur.com/L9HJ7Vw.jpg" 
                alt="Anil Ambani House"
                className='w-full h-full object-cover'
              />
              <div className='bg-white p-8'>
                <h3 className='text-2xl font-bold mb-4'>Inside industrialist Anil Ambani's house in Mumbai</h3>
                <p className='text-gray-600 mb-4'>
                  Anil Ambani's lavish home is counted among the most expensive homes in India. The 17-storey structure is situated at Pali Hill in Mumbai.
                </p>
                <button className='text-[#FF5A3D] font-semibold hover:underline'>Read More →</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Footer /> 
    </div>
  );
}
