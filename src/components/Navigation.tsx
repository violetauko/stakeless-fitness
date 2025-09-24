"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1">
              <Image 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDIwMCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTAgMTBDNzAuNDMgMTAgODcgMjYuNTcgODcgNDdWMTEzQzg3IDEzMy40MyA3MC40MyAxNTAgNTAgMTUwQzI5LjU3IDE1MCAxMyAxMzMuNDMgMTMgMTEzVjQ3QzEzIDI2LjU3IDI5LjU3IDEwIDUwIDEwWiIgZmlsbD0iIzJENjMzQyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MCAzMEMxNTYuNjI3IDMwIDE2MiAzNS4zNzMgMTYyIDQyQzE2MiA0OC42MjcgMTU2LjYyNyA1NCAxNTAgNTRDMTQzLjM3MyA1NCAxMzggNDguNjI3IDEzOCA0MkMxMzggMzUuMzczIDE0My4zNzMgMzAgMTUwIDMwWiIgZmlsbD0iIzJENjMzQyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MCA3MkMxNzAuNDMgNzIgMTg3IDg4LjU3IDE4NyAxMDlWMTEzQzE4NyAxMzMuNDMgMTcwLjQzIDE1MCAxNTAgMTUwQzEyOS41NyAxNTAgMTEzIDEzMy40MyAxMTMgMTEzVjEwOUMxMTMgODguNTcgMTI5LjU3IDcyIDE1MCA3MloiIGZpbGw9IiMyRDYzM0MiLz4KPHN0eWxlPgo8L3N0eWxlPgo8L3N2Zz4=" 
                alt="Stackless Fitness Logo"
                className="w-full h-full object-contain"
                width={48}
                height={48}
              />
            </div>
            <div className="ml-3">
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Stackless Fitness
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Get Fit Today
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-500 transition-colors`}>Home</a>
            <a href="#about" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-500 transition-colors`}>About</a>
            <a href="#programs" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-500 transition-colors`}>Programs</a>
            <a href="#trainers" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-500 transition-colors`}>Trainers</a>
            <a href="#workouts" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-500 transition-colors`}>Workouts</a>
            <a href="#reviews" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-500 transition-colors`}>Reviews</a>
           
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-green-500">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-green-500">About</a>
            <a href="#programs" className="block text-gray-700 hover:text-green-500">Programs</a>
            <a href="#trainers" className="block text-gray-700 hover:text-green-500">Trainers</a>
            <a href="#workouts" className="block text-gray-700 hover:text-green-500">Workouts</a>
            <a href="#contact" className="block text-gray-700 hover:text-green-500">Contact</a>
            <div className="flex items-center text-gray-700 pt-2 border-t">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">+254 725 023 276</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;


