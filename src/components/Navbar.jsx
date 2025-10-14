import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ArrowRight, Home, User, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleNavClick = () => {
    closeNavbar();
  };

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/search", label: "Search", icon: Search },
    { href: "/contact", label: "Contact", icon: Phone }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' 
          : 'bg-transparent backdrop-blur-lg py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="flex justify-between items-center">
          <button 
            onClick={toggleNavbar}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100 focus:ring-gray-300' 
                : 'text-white hover:bg-white/20 focus:ring-white'
            }`}
            aria-label="Toggle navigation"
          >
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center w-full relative">
            {/* Left Side Navigation */}
            <div className="flex items-center space-x-1">
              {navItems.slice(0, 2).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                      : 'text-white hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a 
                href="/" 
                className={`text-2xl font-bold transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-amber-700' : 'text-white'
                }`}
                style={{ color: isScrolled ? '#b58e53' : 'white' }}
              >
                FLATALLY
              </a>
            </div>

            {/* Right Side Navigation */}
            <div className="flex items-center space-x-1">
              {navItems.slice(2).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center ${
                    isScrolled
                      ? 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                      : 'text-white hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {item.icon && <item.icon className="ml-2" size={16} />}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Logo */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
            <a 
              href="/" 
              className={`text-xl font-bold transition-colors duration-300`}
              style={{ color: isScrolled ? '#b58e53' : 'white' }}
              onClick={handleNavClick}
            >
              FLATALLY
            </a>
          </div>
        </div>

        {/* Mobile Offcanvas Menu */}
        <div 
          className={`fixed top-0 left-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-all duration-500 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ zIndex: 1050 }}
        >
          {/* Offcanvas Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white">
            <div className="text-lg font-semibold">
              <a 
                href="/" 
                className="text-xl font-bold hover:opacity-80 transition-opacity duration-300"
                style={{ color: '#b58e53' }}
                onClick={handleNavClick}
              >
                FLATALLY
              </a>
            </div>
            <button 
              onClick={closeNavbar}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-amber-50 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-200"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          {/* Offcanvas Body */}
          <div className="p-6 h-[calc(100vh-80px)] overflow-y-auto bg-white">
            {/* Navigation Items */}
            <div className="flex flex-col space-y-2 w-full">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center px-4 py-4 text-gray-800 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-all duration-300 text-lg font-medium group border border-transparent hover:border-amber-200"
                    onClick={handleNavClick}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <IconComponent 
                      size={20} 
                      className="text-amber-600 mr-3 transition-colors duration-300" 
                    />
                    <span className="flex-1">{item.label}</span>
                    <ArrowRight 
                      className="text-gray-300 group-hover:text-amber-500 transition-all duration-300 group-hover:translate-x-1" 
                      size={18}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Backdrop for mobile menu */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm md:hidden transition-opacity duration-300"
            style={{ zIndex: 1040 }}
            onClick={closeNavbar}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;