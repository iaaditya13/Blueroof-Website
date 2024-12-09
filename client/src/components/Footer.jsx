import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0A0B2E] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="BlueRoof" className="h-8" />
              <h3 className="text-xl font-bold">BlueRoof India</h3>
            </div>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © 2012-2024 Blue Roof Pvt. Ltd.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-400 hover:text-white">
                  For Partners
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/annual-return" className="text-gray-400 hover:text-white">
                  Annual Return
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/unsubscribe" className="text-gray-400 hover:text-white">
                  Unsubscribe
                </Link>
              </li>
              <li>
                <Link to="/merger" className="text-gray-400 hover:text-white">
                  Merger Hearing Advertisement
                </Link>
              </li>
            </ul>
          </div>

          {/* Partner Sites */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Partner Sites</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://proptiger.com" className="text-gray-400 hover:text-white">
                  Proptiger
                </a>
              </li>
              <li>
                <a href="https://makaan.com" className="text-gray-400 hover:text-white">
                  Makaan
                </a>
              </li>
              <li>
                <a href="https://realestate.com.au" className="text-gray-400 hover:text-white">
                  realestate.com.au
                </a>
              </li>
              <li>
                <a href="https://realtor.com" className="text-gray-400 hover:text-white">
                  realtor.com
                </a>
              </li>
              <li>
                <a href="https://99.co" className="text-gray-400 hover:text-white">
                  99.co
                </a>
              </li>
              <li>
                <a href="https://collinsdictionary.com" className="text-gray-400 hover:text-white">
                  collinsdictionary.com
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link to="/home-loans" className="text-gray-400 hover:text-white">
                  Home Loans
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-400 hover:text-white">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link to="/international" className="text-gray-400 hover:text-white">
                  International
                </Link>
              </li>
            </ul>

            {/* App Store Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Experience Our App</h4>
              <div className="flex space-x-4">
                <img src="/app-store.png" alt="App Store" className="h-10" />
                <img src="/google-play.png" alt="Google Play" className="h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
