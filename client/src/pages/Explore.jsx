import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import { FaSearch, FaFilter } from 'react-icons/fa';
import Footer from '../components/Footer';

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState({
    searchTerm: searchParams.get('searchTerm') || '',
    region: '',
    location: '',
    rooms: '',
    cost: ''
  });

  // Dummy data
  const allListings = [
    {
      _id: '1',
      name: 'Ruparel Jewel',
      address: 'Parel, Mumbai',
      description: 'Ruparel Jewel by Ruparel Realty is an under-construction project in Parel, Mumbai, offering luxurious apartments with modern amenities.',
      type: 'Apartment',
      regularPrice: {
        '2BHK': 72500000,
        '3BHK': 95000000
      },
      region: 'Mumbai',
      location: 'Parel',
      rooms: ['2BHK', '3BHK'],
      configurations: [
        {
          type: '2BHK',
          specifications: [
            'Built-up Area: 1200 sq.ft.',
            'Semi-Furnished',
            'Floor: 25th out of 45 floors',
            'Age of Construction: Under Construction'
          ]
        },
        {
          type: '3BHK',
          specifications: [
            'Built-up Area: 1500 sq.ft.',
            'Semi-Furnished',
            'Floor: 26th out of 45 floors',
            'Age of Construction: Under Construction'
          ]
        }
      ],
      imageUrls: [
        '/assets/Properties Images/RuparelJewel/RuparelJewel01.jpg',
      '/assets/Properties Images/RuparelJewel/RuparelJewel02.jpg',
      '/assets/Properties Images/RuparelJewel/RuparelJewel03.jpg',
      '/assets/Properties Images/RuparelJewel/RuparelJewel04.jpg',
      '/assets/Properties Images/RuparelJewel/RuparelJewel05.jpg',
      '/assets/Properties Images/RuparelJewel/RuparelJewel06.jpg'
      ],
      amenities: [
        'Swimming Pool',
        'Gym',
        'Club House',
        '24/7 Security'
      ],
      developer: 'Ruparel Realty',
      parking: '2 Covered Parking'
    },
    {
      _id: '2',
      name: 'Lodha Corthinia',
      address: 'Bhandup, Mumbai',
      description: 'Launching Lodha Corinthia, a glorious 7-acre estate offering an international lifestyle designed for Mumbai\'s finest.',
      type: 'Villa',
      regularPrice: {
        '3BHK': 19900000,
        '4BHK': 25000000
      },
      region: 'Mumbai',
      location: 'Bhandup',
      rooms: ['3BHK', '4BHK'],
      configurations: [
        {
          type: '3BHK',
          specifications: [
            'Built-up Area: 1500 sq.ft.',
            'Furnished',
            'Floor: 15th out of 40 floors',
            'Age of Construction: New Construction'
          ]
        },
        {
          type: '4BHK',
          specifications: [
            'Built-up Area: 2000 sq.ft.',
            'Furnished',
            'Floor: 20th out of 40 floors',
            'Age of Construction: New Construction'
          ]
        }
      ],
      imageUrls: [
        '/assets/Properties Images/LodhaCorthinia/LodhaCorthinia01.jpg',
      '/assets/Properties Images/LodhaCorthinia/LodhaCorthinia02.jpg',
      '/assets/Properties Images/LodhaCorthinia/LodhaCorthinia03.jpg',
      '/assets/Properties Images/LodhaCorthinia/LodhaCorthinia04.jpg',
      '/assets/Properties Images/LodhaCorthinia/LodhaCorthinia05.jpg',
      '/assets/Properties Images/LodhaCorthinia/LodhaCorthinia06.jpg'
      ],
      amenities: [
        'Swimming Pool',
        'Gym',
        'Club House',
        'Security'
      ],
      developer: 'Lodha',
      parking: 'No Parking'
    },

    {
      _id: '3',
      name: 'Hubtown 25 West',
      address: 'Bandra, Mumbai',
      description: 'Experience luxury living at its finest with panoramic sea views and world-class amenities.',
      type: 'Penthouse',
      regularPrice: {
        '4BHK': 100000000
      },
      region: 'Mumbai',
      location: 'Bandra',
      rooms: ['4BHK'],
      configurations: [
        {
          type: '4BHK',
          specifications: [
            'Built-up Area: 2500 sq.ft.',
            'Semi-Furnished',
            'Floor: 30th out of 50 floors',
            'Age of Construction: Under Construction'
          ]
        }
      ],
      imageUrls: [
        '/assets/Properties Images/Hubtown25West/Hubtown25West01.jpg',
      '/assets/Properties Images/Hubtown25West/Hubtown25West02.jpg',
      '/assets/Properties Images/Hubtown25West/Hubtown25West03.jpg',
      '/assets/Properties Images/Hubtown25West/Hubtown25West04.jpg',
      '/assets/Properties Images/Hubtown25West/Hubtown25West05.jpg',
      '/assets/Properties Images/Hubtown25West/Hubtown25West06.jpg'
      ],
      amenities: [
        'Swimming Pool',
        'Gym',
        'Club House',
        '24/7 Security'
      ],
      developer: 'Avdharna Infrastructure',
      parking: '2 Covered Parking'
    },

    {
      _id: '4',
      name: 'Ashar Pulse',
      address: 'Majiwada, Thane',
      description: 'Ashar Pulse is a project by Ashar Group in Thane. It is a Under Construction project offering 2.5 & 3.5 BHK Homes.',
      type: 'Apartment',
      regularPrice: {
        '2BHK': 25000000,
        '3BHK': 35000000
      },
      region: 'Thane',
      location: 'Majiwada',
      rooms: ['2BHK', '3BHK'],
      configurations: [
        {
          type: '2BHK',
          specifications: [
            'Built-up Area: 1200 sq.ft.',
            'Semi-Furnished',
            'Floor: 15th out of 30 floors',
            'Age of Construction: Under Construction'
          ]
        },
        {
          type: '3BHK',
          specifications: [
            'Built-up Area: 1500 sq.ft.',
            'Semi-Furnished',
            'Floor: 20th out of 30 floors',
            'Age of Construction: Under Construction'
          ]
        }
      ],
      imageUrls: [
        '/assets/Properties Images/AsharPulse/AsharPulse01.jpg',
      '/assets/Properties Images/AsharPulse/AsharPulse02.jpg',
      '/assets/Properties Images/AsharPulse/AsharPulse03.jpg',
      '/assets/Properties Images/AsharPulse/AsharPulse04.jpg',
      '/assets/Properties Images/AsharPulse/AsharPulse05.jpg'
      ],
      amenities: [
        'Swimming Pool',
        'Gym',
        'Club House',
        'Security'
      ],
      developer: 'Ashar Group',
      parking: 'No Parking'
    },

    {
      _id: '5',
      name: 'Hubtown 25 South',
      address: 'Prabhadevi, Mumbai',
      description: 'Experience luxury living at its finest with panoramic sea views and world-class amenities.',
      type: 'Penthouse',
      regularPrice: {
        '5BHK': 150000000
      },
      region: 'Mumbai',
      location: 'Prabhadevi',
      rooms: ['5BHK'],
      configurations: [
        {
          type: '5BHK',
          specifications: [
            'Built-up Area: 3000 sq.ft.',
            'Semi-Furnished',
            'Floor: 35th out of 55 floors',
            'Age of Construction: Under Construction'
          ]
        }
      ],
      imageUrls: [
        '/assets/Properties Images/Hubtown25South/Hubtown25South01.jpg',
      '/assets/Properties Images/Hubtown25South/Hubtown25South02.jpg',
      '/assets/Properties Images/Hubtown25South/Hubtown25South03.jpg',
      '/assets/Properties Images/Hubtown25South/Hubtown25South04.jpg',
      '/assets/Properties Images/Hubtown25South/Hubtown25South05.jpg',
      '/assets/Properties Images/Hubtown25South/Hubtown25South06.jpg'
      ],
      amenities: [
        'Swimming Pool',
        'Gym',
        'Club House',
        '24/7 Security'
      ],
      developer: 'Developer Name',
      parking: '2 Covered Parking'
    },

    {
      _id: '6',
      name: 'MICL Aaradhya Avaan',
      address: 'Malad West, Mumbai',
      description: 'Premium residences offering a perfect blend of luxury and comfort with modern architecture.',
      type: 'Apartment',
      regularPrice: {
        '3BHK': 45000000
      },
      region: 'Mumbai',
      location: 'Malad',
      rooms: ['3BHK'],
      configurations: [
        {
          type: '3BHK',
          specifications: [
            'Built-up Area: 1500 sq.ft.',
            'Semi-Furnished',
            'Floor: 20th out of 40 floors',
            'Age of Construction: Under Construction'
          ]
        }
      ],
      imageUrls: [
        '/assets/Properties Images/AaradhyaAvaan/AaradhyaAvaan01.jpg',
      '/assets/Properties Images/AaradhyaAvaan/AaradhyaAvaan02.jpg',
      '/assets/Properties Images/AaradhyaAvaan/AaradhyaAvaan03.jpg',
      '/assets/Properties Images/AaradhyaAvaan/AaradhyaAvaan04.jpg',
      '/assets/Properties Images/AaradhyaAvaan/AaradhyaAvaan05.jpg',
      '/assets/Properties Images/AaradhyaAvaan/AaradhyaAvaan06.jpg'
      ],
      amenities: [
        'Swimming Pool',
        'Gym',
        'Club House',
        'Security'
      ],
      developer: 'Developer Name',
      parking: 'No Parking'
    },
    
    {
      _id: '7',
      name: 'Lodha Amara',
      address: 'Thane West',
      description: 'Luxury apartments with stunning views and premium amenities for an elevated lifestyle.',
      type: 'Apartment',
      regularPrice: {
        '2BHK': 35000000
      },
      region: 'Thane',
      location: 'Thane West',
      rooms: ['2BHK'],
      configurations: [
        {
          type: '2BHK',
          specifications: [
            'Built-up Area: 1200 sq.ft.',
            'Semi-Furnished',
            'Floor: 15th out of 30 floors',
            'Age of Construction: Under Construction'
          ]
        }
      ],
      imageUrls: [
        '/assets/Properties Images/LodhaAmara/LodhaAmara01.jpg',
      '/assets/Properties Images/LodhaAmara/LodhaAmara02.jpg',
      '/assets/Properties Images/LodhaAmara/LodhaAmara03.jpg',
      '/assets/Properties Images/LodhaAmara/LodhaAmara04.jpg',
      '/assets/Properties Images/LodhaAmara/LodhaAmara05.jpg'
      ],
      amenities: [
        'Swimming Pool',
        'Gym',
        'Club House',
        '24/7 Security'
      ],
      developer: 'Developer Name',
      parking: '2 Covered Parking'
    },
    {
      _id: '8',
      name: 'K Raheja Modern Vivarea',
      address: 'Thane West',
      description: 'Luxury apartments with stunning views and premium amenities for an elevated lifestyle.',
      type: 'Apartment',
      regularPrice: {
        '2BHK': 35000000
      },
      region: 'Thane',
      location: 'Thane West',
      rooms: ['2BHK'],
      configurations: [
        {
          type: '2BHK',
          specifications: [
            'Built-up Area: 1200 sq.ft.',
            'Semi-Furnished',
            'Floor: 15th out of 30 floors',
            'Age of Construction: Under Construction'
          ]
        }
      ],
      imageUrls: [
        '/assets/Properties Images/ModernVivarea/ModernVivarea01.jpg',
      '/assets/Properties Images/ModernVivarea/ModernVivarea02.jpg',
      '/assets/Properties Images/ModernVivarea/ModernVivarea03.jpg',
      '/assets/Properties Images/ModernVivarea/ModernVivarea04.jpg'
      ],
      amenities: [
        'Swimming Pool',
        'Gym',
        'Club House',
        '24/7 Security'
      ],
      developer: 'Developer Name',
      parking: '2 Covered Parking'
    }
  ];

  // Update search term when URL parameter changes
  useEffect(() => {
    const searchTerm = searchParams.get('searchTerm');
    if (searchTerm) {
      setFilters(prev => ({ ...prev, searchTerm }));
    }
  }, [searchParams]);

  // Update URL when search term changes
  const updateSearchParams = (newFilters) => {
    const params = new URLSearchParams(searchParams);
    if (newFilters.searchTerm) {
      params.set('searchTerm', newFilters.searchTerm);
    } else {
      params.delete('searchTerm');
    }
    setSearchParams(params);
  };

  // Get unique values for dropdowns
  const regions = [...new Set(allListings.map(item => item.region))];
  const locations = [...new Set(allListings.map(item => item.location))];
  const roomOptions = [...new Set(allListings.flatMap(item => item.rooms))].sort();

  // Filter listings based on current filters
  const filteredListings = useMemo(() => {
    return allListings.filter(listing => {
      const matchesSearch = !filters.searchTerm || 
        listing.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        listing.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        listing.address.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesRegion = !filters.region || listing.region === filters.region;
      const matchesLocation = !filters.location || listing.location === filters.location;
      const matchesRooms = !filters.rooms || listing.rooms.some(room => room === filters.rooms);
      
      const matchesCost = !filters.cost || (() => {
        const prices = Object.values(listing.regularPrice);
        const minPrice = Math.min(...prices) / 10000000; // Convert to Cr
        switch(filters.cost) {
          case '50L-1':
            return minPrice >= 0.5 && minPrice <= 1;
          case '1-5':
            return minPrice > 1 && minPrice <= 5;
          case '5-10':
            return minPrice > 5 && minPrice <= 10;
          case '10+':
            return minPrice > 10;
          default:
            return true;
        }
      })();

      return matchesSearch && matchesRegion && matchesLocation && matchesRooms && matchesCost;
    });
  }, [filters, allListings]);

  const handleFilter = (e) => {
    const { id, value } = e.target;
    const newFilters = { ...filters, [id]: value };
    setFilters(newFilters);
    if (id === 'searchTerm') {
      updateSearchParams(newFilters);
    }
  };

  return (
    <div className="bg-[#F0F7FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-hidden">
        {/* Search and Filter Section */}
        <div className="p-4 border-b">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4">
              {/* Search Input */}
              <div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2">
                <input
                  type="text"
                  id="searchTerm"
                  placeholder="Search by name, location, or description..."
                  value={filters.searchTerm}
                  onChange={handleFilter}
                  className="w-full focus:outline-none text-sm sm:text-base"
                />
                <FaSearch className="text-gray-600" />
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="md:hidden flex items-center justify-center gap-2 text-white bg-[#FF5A3D] hover:bg-[#FF4A2D] transition-colors border rounded-lg px-4 py-2"
              >
                <FaFilter />
                {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
              </button>

              {/* Filters Grid */}
              <div className={`${showMobileFilters ? 'block' : 'hidden'} md:block`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Region Filter */}
                  <select
                    id="region"
                    value={filters.region}
                    onChange={handleFilter}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent bg-white text-sm sm:text-base"
                  >
                    <option value="">All Regions</option>
                    {regions.map(region => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>

                  {/* Location Filter */}
                  <select
                    id="location"
                    value={filters.location}
                    onChange={handleFilter}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent bg-white text-sm sm:text-base"
                  >
                    <option value="">All Locations</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>

                  {/* Room Type Filter */}
                  <select
                    id="rooms"
                    value={filters.rooms}
                    onChange={handleFilter}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent bg-white text-sm sm:text-base"
                  >
                    <option value="">All Room Types</option>
                    {roomOptions.map(room => (
                      <option key={room} value={room}>{room}</option>
                    ))}
                  </select>

                  {/* Price Range Filter */}
                  <select
                    id="cost"
                    value={filters.cost}
                    onChange={handleFilter}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent bg-white text-sm sm:text-base"
                  >
                    <option value="">All Price Ranges</option>
                    <option value="50L-1">50L - 1Cr</option>
                    <option value="1-5">1Cr - 5Cr</option>
                    <option value="5-10">5Cr - 10Cr</option>
                    <option value="10+">10Cr+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            {filteredListings.length} Properties Found
          </h2>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredListings.map((listing) => (
            <ListingItem key={listing._id} listing={listing} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-base sm:text-lg">No properties match your search criteria.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
