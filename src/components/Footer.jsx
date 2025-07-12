import React from 'react'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products & Services', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleLinkClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Momai Traders</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              From Paper to Polish - Your One Stop Solution
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">
                  Shop-10, Simandhar Complex, Near Prabhat Chowk, Ghatlodiya, Ahmedabad, 380061
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0 transform scale-x-[-1]" />
                <span className="text-gray-300 text-xs sm:text-sm">+91 99749 02733</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm break-words">momaitraders73@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Actions */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Get In Touch</h4>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="https://api.whatsapp.com/send?phone=919974902733&text=Hi, Momai Traders"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 sm:space-x-3 bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors"
              >
                <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">WhatsApp</span>
              </a>
              
              <a
                href="tel:+919974902733"
                className="flex items-center space-x-2 sm:space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors"
              >
                <FaPhone className="w-3 h-3 sm:w-4 sm:h-4 transform scale-x-[-1]" />
                <span className="text-xs sm:text-sm font-medium">Call Now</span>
              </a>
            </div>

            <div className="mt-4 sm:mt-6">
              <h5 className="text-xs sm:text-sm font-medium text-white mb-2">Business Hours</h5>
              <div className="text-gray-300 text-xs space-y-1">
                <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                © {currentYear} Momai Traders. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-xs sm:text-sm">
              <span>Made with</span>
              <FaHeart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
              <span>for better business connections</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
