import React, { useState } from 'react'
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa'
import Logo from './Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Logo className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 truncate">
              Momai Traders
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <a
              href="tel:+919974902733"
              className="flex items-center space-x-1 sm:space-x-2 bg-blue-600 text-white px-2 sm:px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <FaPhone className="w-3 h-3 sm:w-4 sm:h-4 transform scale-x-[-1]" />
              <span className="hidden xl:inline">Call</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919974902733&text=Hi, Momai Traders"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 sm:space-x-2 bg-green-600 text-white px-2 sm:px-3 lg:px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
            >
              {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-3 sm:pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 sm:space-y-4 pt-3 sm:pt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                Contact
              </button>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-3 sm:pt-4 border-t border-gray-200">
                <a
                  href="tel:+919974902733"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <FaPhone className="w-4 h-4 transform scale-x-[-1]" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=919974902733&text=Hi, Momai Traders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
