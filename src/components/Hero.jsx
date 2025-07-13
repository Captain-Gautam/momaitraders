import React from 'react'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaDownload, FaShare } from 'react-icons/fa'
import Logo from './Logo'

const Hero = () => {
  const handleDownloadCard = () => {
    // This would generate a vCard file
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Jigar Prajapati - Momai Traders
ORG:Momai Traders
TITLE:Owner
TEL:+919974902733
TEL:+918788477773
EMAIL:momaitraders73@gmail.com
ADR:;;Shop-10, Simandhar Complex, Near Prabhat Chowk, Ghatlodiya;Ahmedabad;Gujarat;380061;India
URL:https://momaitraders.com
END:VCARD`

    const blob = new Blob([vCard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Momai-Traders-Contact.vcf'
    link.click()
    window.URL.revokeObjectURL(url)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Momai Traders - Digital Business Card',
          text: 'Check out Momai Traders for all your packaging needs!',
          url: window.location.href
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
        {/* Company Logo/Avatar */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
            <Logo className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-blue-600" />
          </div>
        </div>

        {/* Company Info */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4 px-2">Momai Traders</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 text-blue-100 px-2 sm:px-4">Wholesale Supplier Of Cleaning Material & Stationery</p>
        
        {/* Owner Info */}
        <div className="bg-gradient-to-br from-white/70 to-blue-50/80 rounded-xl shadow-lg p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6 lg:mb-8 mx-2 sm:mx-4 lg:mx-0 border border-blue-100/50 backdrop-blur-sm">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-gray-800">JIGAR PRAJAPATI</h2>
          <p className="text-sm sm:text-base lg:text-lg text-blue-600 font-semibold">OWNER</p>
        </div>

        {/* Quick Contact */}
        <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 lg:px-0">
          <a
            href="tel:+919974902733"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-50/60 to-indigo-50/70 rounded-xl shadow-md border border-blue-100/40 p-3 sm:p-4 hover:shadow-lg hover:from-blue-100/70 hover:to-indigo-100/80 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform scale-x-[-1] text-blue-600" />
            <span className="text-sm sm:text-base lg:text-lg text-gray-800 font-semibold">+91 99749 02733</span>
          </a>
          <a
            href="tel:+918788477773"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-50/60 to-emerald-50/70 rounded-xl shadow-md border border-green-100/40 p-3 sm:p-4 hover:shadow-lg hover:from-green-100/70 hover:to-emerald-100/80 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform scale-x-[-1] text-green-600" />
            <span className="text-sm sm:text-base lg:text-lg text-gray-800 font-semibold">+91 87884 77773</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 lg:px-0">
          <a
            href="mailto:momaitraders73@gmail.com"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-50/60 to-pink-50/70 rounded-xl shadow-md border border-purple-100/40 p-3 sm:p-4 hover:shadow-lg hover:from-purple-100/70 hover:to-pink-100/80 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-purple-600" />
            <span className="text-xs sm:text-sm lg:text-base break-all text-gray-800 font-semibold">momaitraders73@gmail.com</span>
          </a>
          <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-50/60 to-yellow-50/70 rounded-xl shadow-md border border-orange-100/40 p-3 sm:p-4 backdrop-blur-sm">
            <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-orange-600" />
            <span className="text-sm sm:text-base lg:text-lg text-gray-800 font-semibold">Ahmedabad, Gujarat</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 justify-center items-center px-2 sm:px-4 lg:px-0">
          <a
            href="https://api.whatsapp.com/send?phone=919974902733&text=Hi, Momai Traders"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 sm:space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors shadow-lg text-sm sm:text-base"
          >
            <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownloadCard}
              className="flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base font-semibold"
            >
              <FaDownload className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold">Save Contact</span>
            </button>
            
            <button
              onClick={handleShare}
              className="flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base font-semibold"
            >
              <FaShare className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold">Share Card</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
