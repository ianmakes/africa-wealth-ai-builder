
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-900 hover:text-blue-800 transition-colors">
              Lan-x <span className="text-yellow-600">Africa</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-blue-900 border-b-2 border-yellow-500' 
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-blue-900 border-b-2 border-yellow-500' 
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/services') 
                    ? 'text-blue-900 border-b-2 border-yellow-500' 
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                Services
              </Link>
              <Link
                to="/invest-in-africa"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/invest-in-africa') 
                    ? 'text-blue-900 border-b-2 border-yellow-500' 
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                Invest in Africa
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-900 border-b-2 border-yellow-500' 
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                Talk to Us
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/invest-in-africa"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                Invest in Africa
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link to="/contact">
                  <Button 
                    className="bg-blue-900 hover:bg-blue-800 text-white w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Talk to Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
