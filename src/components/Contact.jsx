import React from 'react'
import { 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaExternalLinkAlt
} from 'react-icons/fa'

const Contact = () => {

  const handleDirections = () => {
    const address = 'Shop-10, Simandhar Complex, Near Prabhat Chowk, Ghatlodiya, Ahmedabad, 380061'
    // const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`
    const mapsUrl = `https://www.google.com/maps/search/simandhar complex`
    window.open(mapsUrl, '_blank')
  }

  return (
    <section id="contact" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Us</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Get in touch with us for all your packaging needs. We're here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 max-w-2xl mx-auto">
            {/* Primary Contact */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 transform scale-x-[-1]" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Primary Phone</p>
                    <a href="tel:+919974902733" className="text-blue-600 hover:text-blue-700 text-sm sm:text-base">
                      +91 99749 02733
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 transform scale-x-[-1]" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Secondary Phone</p>
                    <a href="tel:+918788477773" className="text-blue-600 hover:text-blue-700 text-sm sm:text-base">
                      +91 87884 77773
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Email</p>
                    <a href="mailto:momaitraders73@gmail.com" className="text-blue-600 hover:text-blue-700 text-sm sm:text-base break-words">
                      momaitraders73@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Address</p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Shop-10, Simandhar Complex,<br />
                      Near Prabhat Chowk,<br />
                      Ghatlodiya, Ahmedabad, 380061<br />
                      Gujarat, India
                    </p>
                    <button
                      onClick={handleDirections}
                      className="mt-2 flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm"
                    >
                      <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Get Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=919974902733&text=Hi, Momai Traders"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 sm:space-x-3 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-colors"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">WhatsApp</span>
              </a>
              
              <a
                href="tel:+919974902733"
                className="flex items-center justify-center space-x-2 sm:space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-colors"
              >
                <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 transform scale-x-[-1]" />
                <span className="font-medium text-sm sm:text-base">Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 sm:mt-12">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8442647647765!2d72.54210098502285!3d23.069666884594447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8367f3bb9671%3A0x474bdd5c5d948e58!2sSimandhar%20Complex%2C%20C1%2F6%2C%20Ghatlodiya%2C%20Ahmedabad%2C%20Gujarat%20380061!5e0!3m2!1sen!2sin!4v1699123456789!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Momai Traders Location"
                className="sm:h-[300px]"
              ></iframe>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
              Click on the map to open in Google Maps for detailed directions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
