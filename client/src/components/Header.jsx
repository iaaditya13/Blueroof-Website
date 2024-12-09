import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-[#1a1f3d] text-white relative'>
      <div className='flex justify-between items-center max-w-7xl mx-auto p-4'>
        <Link to='/' className='flex items-center gap-2 z-20'>
          <img 
            src="/blueroof-logo.png" 
            alt="BlueRoof India" 
            className="h-8"
          />
          <span className='font-bold text-lg'>India</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button 
          className='lg:hidden z-20 text-2xl'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex gap-8 items-center text-sm'>
          <Link to='/trending' className='hover:text-[#FF5A3D] transition duration-300'>
            Trending
          </Link>
          <Link to='/about' className='hover:text-[#FF5A3D] transition duration-300'>
            About Us
          </Link>
          <Link to='/post-property' className='hover:text-[#FF5A3D] transition duration-300'>
            Post Property (Free)
          </Link>
          <Link to='/news' className='hover:text-[#FF5A3D] transition duration-300'>
            News
          </Link>
          <Link to='/explore' className='hover:text-[#FF5A3D] transition duration-300'>
            Explore
          </Link>
        </nav>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMenu}
        />

        {/* Mobile Navigation Menu */}
        <div 
          className={`
            fixed top-0 right-0 h-screen w-[300px] bg-[#1a1f3d] z-20 lg:hidden
            transform transition-transform duration-300 ease-in-out shadow-2xl
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <img 
                src="/blueroof-logo.png" 
                alt="BlueRoof India" 
                className="h-8"
              />
              <button 
                onClick={toggleMenu}
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu Items */}
            <nav className='flex flex-col p-4 gap-4'>
              <Link 
                to='/trending' 
                className='py-3 px-4 hover:bg-[#FF5A3D] hover:bg-opacity-10 rounded-lg transition-colors flex items-center'
                onClick={toggleMenu}
              >
                Trending
              </Link>
              <Link 
                to='/about' 
                className='py-3 px-4 hover:bg-[#FF5A3D] hover:bg-opacity-10 rounded-lg transition-colors flex items-center'
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                to='/post-property' 
                className='py-3 px-4 hover:bg-[#FF5A3D] hover:bg-opacity-10 rounded-lg transition-colors flex items-center'
                onClick={toggleMenu}
              >
                Post Property (Free)
              </Link>
              <Link 
                to='/news' 
                className='py-3 px-4 hover:bg-[#FF5A3D] hover:bg-opacity-10 rounded-lg transition-colors flex items-center'
                onClick={toggleMenu}
              >
                News
              </Link>
              <Link 
                to='/explore' 
                className='py-3 px-4 hover:bg-[#FF5A3D] hover:bg-opacity-10 rounded-lg transition-colors flex items-center'
                onClick={toggleMenu}
              >
                Explore
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
