import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { toggleMobileMenu } from '../utils/animations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      handleMenuToggle(false);
    }
  };

  const handleMenuToggle = (newState) => {
    const nextState = newState !== undefined ? newState : !isMenuOpen;
    setIsMenuOpen(nextState);
    toggleMobileMenu(nextState);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('hero')}>
            PS
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Training', 'Patents', 'Hobbies', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="nav-link text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => handleMenuToggle()}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden bg-gray-900 border-t border-gray-700 py-4">
            {['About', 'Skills', 'Projects', 'Training', 'Patents', 'Hobbies', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="nav-link block w-full text-left py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;