import React from 'react'
import { FaCheckCircle, FaCalendarAlt, FaIndustry } from 'react-icons/fa'

const About = () => {
  const services = [
    'Office Stationery Material',
    'All Type Of Washroom Solutions',
    'All Type Of Printing Services',
    'Industrial Packing Material',
    'Housekeeping Material',
    'Disposable Material',
    'All Types Of Dustbins'
  ]

  return (
    <section id="about" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">About Momay Traders</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            At Momay Traders, our goal is to help you create spaces that inspire productivity and 
            comfort. We provide essential solutions that transform both your workspace and home environment 
            into organized, pristine havens
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Company Info */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <FaCalendarAlt className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Established</h3>
                <p className="text-sm sm:text-base text-gray-600">22/02/2021</p>
              </div>
            </div>

            <div className="flex items-start mb-4 sm:mb-6">
              <FaIndustry className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Our Expertise</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We are a leading supplier of plastic packaging materials, offering a comprehensive 
                  range of products including industrial tapes, bags, films, and strapping solutions. 
                  Our commitment to quality and customer satisfaction has made us a trusted name in the industry.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center">
                  <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">High-quality products</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Competitive pricing</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Timely delivery</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Expert consultation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Services List */}
          <div className="order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Products & Services</h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">{service}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white">
              <h4 className="text-base sm:text-lg font-semibold mb-2">GST Registered Business</h4>
              <p className="text-sm sm:text-base text-blue-100 mb-2 sm:mb-3">GST No: 24AHBPA4958P1Z4</p>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                We are a fully registered and compliant business, ensuring all transactions 
                are legally documented and tax-compliant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
