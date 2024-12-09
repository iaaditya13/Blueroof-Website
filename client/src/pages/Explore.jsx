import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import { FaSearch } from 'react-icons/fa';

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    searchTerm: searchParams.get('searchTerm') || '',
    region: '',
    location: '',
    propertyType: '',
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
      regularPrice: 72500000, // 7.25Cr
      region: 'Mumbai',
      location: 'Parel',
      imageUrls: [
        '/assets/property1.jpg',
        '/assets/interior1.jpg',
        '/assets/interior2.jpg',
        '/assets/interior3.jpg',
        '/assets/interior4.jpg'
      ]
    },
    {
      _id: '2',
      name: 'Corthinia',
      address: 'Bhandup, Mumbai',
      description: 'Launching Lodha Corinthia, a glorious 7-acre estate offering an international lifestyle designed for Mumbai\'s finest.',
      type: 'Villa',
      regularPrice: 19900000, // 1.99Cr
      region: 'Mumbai',
      location: 'Bhandup',
      imageUrls: [
        '/assets/property2.jpg',
        '/assets/interior5.jpg',
        '/assets/interior6.jpg',
        '/assets/interior7.jpg',
        '/assets/interior8.jpg'
      ]
    },
    {
      _id: '3',
      name: '25 West',
      address: 'Bandra, Mumbai',
      description: '25 West by Avdharna Infrastructure is an under-construction project in Bandra West, Mumbai, featuring premium residences.',
      type: 'Penthouse',
      regularPrice: 100000000, // 10Cr
      region: 'Mumbai',
      location: 'Bandra',
      imageUrls: [
        '/assets/property3.jpg',
        '/assets/interior9.jpg',
        '/assets/interior10.jpg',
        '/assets/interior11.jpg',
        '/assets/interior12.jpg'
      ]
    },
    {
      _id: '4',
      name: 'Pulse',
      address: 'Majiwada, Thane',
      description: 'Ashar Pulse is a project by Ashar Group in Thane. It is a Under Construction project offering 2.5 & 3.5 BHK Homes.',
      type: 'Apartment',
      regularPrice: 25000000, // 2.5Cr
      region: 'Thane',
      location: 'Majiwada',
      imageUrls: [
        '/assets/property4.jpg',
        '/assets/interior13.jpg',
        '/assets/interior14.jpg',
        '/assets/interior15.jpg',
        '/assets/interior16.jpg'
      ]
    },
    {
      _id: '5',
      name: '25 South',
      address: 'Prabhadevi, Mumbai',
      description: 'Experience luxury living at its finest with panoramic sea views and world-class amenities.',
      type: 'Penthouse',
      regularPrice: 150000000, // 15Cr
      region: 'Mumbai',
      location: 'Prabhadevi',
      imageUrls: [
        '/assets/property5.jpg',
        '/assets/interior17.jpg',
        '/assets/interior18.jpg',
        '/assets/interior19.jpg',
        '/assets/interior20.jpg'
      ]
    },
    {
      _id: '6',
      name: 'Aaradhya Avaan',
      address: 'Malad West, Mumbai',
      description: 'Premium residences offering a perfect blend of luxury and comfort with modern architecture.',
      type: 'Apartment',
      regularPrice: 45000000, // 4.5Cr
      region: 'Mumbai',
      location: 'Malad',
      imageUrls: [
        '/assets/property6.jpg',
        '/assets/interior21.jpg',
        '/assets/interior22.jpg',
        '/assets/interior23.jpg',
        '/assets/interior24.jpg'
      ]
    },
    {
      _id: '7',
      name: 'Amara',
      address: 'Thane West',
      description: 'Luxury apartments with stunning views and premium amenities for an elevated lifestyle.',
      type: 'Apartment',
      regularPrice: 35000000, // 3.5Cr
      region: 'Thane',
      location: 'Thane West',
      imageUrls: [
        '/assets/property7.jpg',
        '/assets/interior25.jpg',
        '/assets/interior26.jpg',
        '/assets/interior27.jpg',
        '/assets/interior28.jpg'
      ]
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
  const propertyTypes = [...new Set(allListings.map(item => item.type))];

  // Filter listings based on current filters
  const filteredListings = useMemo(() => {
    return allListings.filter(listing => {
      const matchesSearch = !filters.searchTerm || 
        listing.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        listing.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        listing.address.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesRegion = !filters.region || listing.region === filters.region;
      const matchesLocation = !filters.location || listing.location === filters.location;
      const matchesType = !filters.propertyType || listing.type === filters.propertyType;
      
      const matchesCost = !filters.cost || (() => {
        const priceInCr = listing.regularPrice / 10000000; // Convert to Cr
        switch(filters.cost) {
          case '1-5':
            return priceInCr >= 1 && priceInCr <= 5;
          case '5-10':
            return priceInCr > 5 && priceInCr <= 10;
          case '10+':
            return priceInCr > 10;
          default:
            return true;
        }
      })();

      return matchesSearch && matchesRegion && matchesLocation && matchesType && matchesCost;
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
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-hidden">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              id="searchTerm"
              placeholder="Search by name, location, or description..."
              value={filters.searchTerm}
              onChange={handleFilter}
              className="w-full px-4 py-3 pl-4 pr-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent text-sm sm:text-base"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Region Filter */}
            <select
              id="region"
              value={filters.region}
              onChange={handleFilter}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent bg-white text-sm sm:text-base"
            >
              <option value="">All Regions</option>
              {regions.map((region) => (
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
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            {/* Property Type Filter */}
            <select
              id="propertyType"
              value={filters.propertyType}
              onChange={handleFilter}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent bg-white text-sm sm:text-base"
            >
              <option value="">All Types</option>
              {propertyTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
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
              <option value="1-5">1-5 Cr</option>
              <option value="5-10">5-10 Cr</option>
              <option value="10+">10+ Cr</option>
            </select>
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
    </div>
  );
}
