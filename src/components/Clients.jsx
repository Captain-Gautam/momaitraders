import React from 'react'
import { FaBuilding, FaIndustry, FaStoreAlt, FaGraduationCap, FaHospital, FaHotel } from 'react-icons/fa'

const Clients = () => {
  const clientCategories = [
    {
      id: 1,
      category: 'Educational Institutions',
      icon: <FaGraduationCap className="w-8 h-8" />,
      clients: [
        'Schools & Colleges',
        'Universities',
        'Training Centers',
        'Coaching Institutes'
      ]
    },
    {
      id: 2,
      category: 'Healthcare Sector',
      icon: <FaHospital className="w-8 h-8" />,
      clients: [
        'Hospitals',
        'Clinics',
        'Diagnostic Centers',
        'Medical Colleges'
      ]
    },
    {
      id: 3,
      category: 'Corporate Offices',
      icon: <FaBuilding className="w-8 h-8" />,
      clients: [
        'IT Companies',
        'Financial Services',
        'Consulting Firms',
        'Government Offices'
      ]
    },
    {
      id: 4,
      category: 'Manufacturing Industries',
      icon: <FaIndustry className="w-8 h-8" />,
      clients: [
        'Textile Mills',
        'Chemical Plants',
        'Pharmaceutical Companies',
        'Food Processing Units'
      ]
    },
    {
      id: 5,
      category: 'Retail & Commercial',
      icon: <FaStoreAlt className="w-8 h-8" />,
      clients: [
        'Shopping Malls',
        'Retail Stores',
        'Restaurants',
        'Cafes & Food Courts'
      ]
    },
    {
      id: 6,
      category: 'Hospitality',
      icon: <FaHotel className="w-8 h-8" />,
      clients: [
        'Hotels',
        'Resorts',
        'Banquet Halls',
        'Event Management'
      ]
    }
  ]

  return (
    <section id="clients" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Valued Clients</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            We proudly serve a diverse range of industries across Gujarat, providing quality products and reliable services to help businesses maintain clean and organized environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clientCategories.map((category) => (
            <div key={category.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{category.category}</h3>
              </div>
              <ul className="space-y-2">
                {category.clients.map((client, index) => (
                  <li key={index} className="text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Client Testimonial Section */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-blue-600 rounded-lg p-6 sm:p-8 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Join Our Growing Family of Satisfied Clients</h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto text-sm sm:text-base">
              From small businesses to large corporations, we've been trusted partners in maintaining clean, 
              organized, and productive environments. Let us help your business achieve the same success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold">500+</div>
                <div className="text-blue-200 text-sm sm:text-base">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">5+</div>
                <div className="text-blue-200 text-sm sm:text-base">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">100%</div>
                <div className="text-blue-200 text-sm sm:text-base">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
