import React from 'react'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaDownload, FaShare } from 'react-icons/fa'
import Logo from './Logo'

const Hero = () => {
  const handleDownloadCard = () => {
    // This would generate a vCard file
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Jigar Prajapati - Momay Traders
ORG:Momay Traders
TITLE:Owner
TEL:+919974902733
TEL:+918788477773
EMAIL:momaitraders73@gmail.com
ADR:;;0 Block/202, Shantipujya Homes, Nr. Silver Star Cross Road, Chandlodoya;Ahmedabad;Gujarat;382481;India
URL:https://momaytraders.com
END:VCARD`

    const blob = new Blob([vCard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Momay-Traders-Contact.vcf'
    link.click()
    window.URL.revokeObjectURL(url)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Momay Traders - Digital Business Card',
          text: 'Check out Momay Traders for all your packaging needs!',
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
            <Logo className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-600" />
          </div>
        </div>

        {/* Company Info */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4 px-2">Momay Traders</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 text-blue-100 px-2 sm:px-4">Wholesale Supplier Of Cleaning Material & Stationery</p>
        
        {/* Owner Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6 lg:mb-8 mx-2 sm:mx-4 lg:mx-0">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">JIGAR PRAJAPATI</h2>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100">OWNER</p>
        </div>

        {/* Quick Contact */}
        <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 lg:px-0">
          <a
            href="tel:+919974902733"
            className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 hover:bg-white/20 transition-colors"
          >
            <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="text-sm sm:text-base lg:text-lg">+91 99749 02733</span>
          </a>
          <a
            href="tel:+918788477773"
            className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 hover:bg-white/20 transition-colors"
          >
            <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="text-sm sm:text-base lg:text-lg">+91 87884 77773</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 lg:px-0">
          <a
            href="mailto:momaytraders@gmail.com"
            className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 hover:bg-white/20 transition-colors"
          >
            <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="text-xs sm:text-sm lg:text-base break-all">momaitraders73@gmail.com</span>
          </a>
          <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
            <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="text-sm sm:text-base lg:text-lg">Ahmedabad, Gujarat</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 justify-center items-center px-2 sm:px-4 lg:px-0">
          <a
            href="https://api.whatsapp.com/send?phone=919974902733&text=Hi, Momay Traders"
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
              className="flex items-center justify-center space-x-2 sm:space-x-3 bg-white/20 hover:bg-white/30 text-white px-4 sm:px-6 py-3 rounded-lg transition-colors backdrop-blur-sm text-sm sm:text-base"
            >
              <FaDownload className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">Save Contact</span>
            </button>
            
            <button
              onClick={handleShare}
              className="flex items-center justify-center space-x-2 sm:space-x-3 bg-white/20 hover:bg-white/30 text-white px-4 sm:px-6 py-3 rounded-lg transition-colors backdrop-blur-sm text-sm sm:text-base"
            >
              <FaShare className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">Share Card</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
