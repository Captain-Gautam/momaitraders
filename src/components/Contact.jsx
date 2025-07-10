import React, { useState } from 'react'
import { 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCreditCard, 
  FaUniversity,
  FaStar,
  FaExternalLinkAlt
} from 'react-icons/fa'

const Contact = () => {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')

  const handleFeedbackSubmit = (e) => {
    e.preventDefault()
    if (rating === 0) {
      alert('Please select a rating')
      return
    }
    
    // Static feedback - just show a thank you message
    alert('Thank you for your feedback! We appreciate your input.')
    setRating(0)
    setFeedback('')
  }

  const handleDirections = () => {
    const address = '0 Block/202, Shantipujya Homes, Nr. Silver Star Cross Road, Chandlodiya, Ahmedabad-382481'
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Primary Contact */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Primary Phone</p>
                    <a href="tel:+919974902733" className="text-blue-600 hover:text-blue-700 text-sm sm:text-base">
                      +91 99749 02733
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
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
                    <a href="mailto:momaytraders@gmail.com" className="text-blue-600 hover:text-blue-700 text-sm sm:text-base break-words">
                      momaytraders@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Address</p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      0 Block/202, Shantipujya Homes,<br />
                      Nr. Silver Star Cross Road,<br />
                      Chandlodiya, Ahmedabad-382481<br />
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

            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <FaCreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3" />
                Payment Information
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Bank Account Details</h4>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 space-y-1 sm:space-y-2">
                    <p className="text-sm sm:text-base"><span className="font-medium">Account Name:</span> MOMAY TRADERS</p>
                    <p className="text-sm sm:text-base"><span className="font-medium">Account Number:</span> 01020109518</p>
                    <p className="text-sm sm:text-base"><span className="font-medium">IFSC Code:</span> KCCB0ASR010</p>
                    <p className="text-sm sm:text-base"><span className="font-medium">Bank:</span> THE KALUPUR COMMERCIAL CO-OPERATIVE BANK LIMITED</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">GST Information</h4>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <p className="text-sm sm:text-base"><span className="font-medium">GST Number:</span> 24AHBPA4958P1Z4</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=919974902733&text=Hi, Momay Traders"
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
                <FaPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">Call Now</span>
              </a>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Leave Feedback</h3>
            
            <form onSubmit={handleFeedbackSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rate our service
                </label>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`text-xl sm:text-2xl transition-colors ${
                        star <= rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      <FaStar />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                  Your feedback (optional)
                </label>
                <textarea
                  id="feedback"
                  rows={4}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us about your experience with our products and services..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 px-4 rounded-lg transition-colors font-medium text-sm sm:text-base"
              >
                Submit Feedback
              </button>
            </form>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs sm:text-sm text-blue-800">
                <strong>Note:</strong> This is a static website. For direct inquiries, please use the WhatsApp 
                or call buttons above to contact us immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 sm:mt-12">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.6!3d23.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA2JzAwLjAiTiA3MsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Momay Traders Location"
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
